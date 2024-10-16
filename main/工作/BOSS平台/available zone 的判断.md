
```js
// BasePage 这个高级组件里面判断

/** 
* utils.getDefaultZone
*
*
**/

getDefaultZone() {
	const cookieZone = cookie.get(COOKIE_ZONE);
	if (includes(USER.zones, cookieZone)) {
	  return cookieZone;
	}
	return USER.zones && USER.zones[0];
}

checkZoneInPath() {
	const { match, location, history } = this.props;
	// 如果 match 匹配的路由中有 zone
	const hasZoneInPath = match && has(match, 'params.zone');
	// 获取到 zone
	const zone = hasZoneInPath && get(match, 'params.zone', '');
	
	if (!hasZoneInPath) {
	  // 如果path中没有zone，设置 USER.zone
	  USER.zone = utils.getDefaultZone();
	} else if (
	  includes(USER.zones, zone) ||
	  (includes(globalRZ, zone) && utils.isGlobalModule(location.pathname))
	) {
	  // 如果 zone 在 USER.zones 或 globalRZ 中 ，说明是合法 zone id
	  USER.zone = zone;
	  // 如果是 global 资源 ，不需要刷新
	  this.needRefresh = false;
	} else if (zone === '') {
	  // 如果 zone 是 ''，表示选择的是全部区域
	  // 如果包含「全部区域」这个选项的资源，不需要刷新
	  this.needRefresh = !utils.hasAllZoneModule(location.pathname);
	} else {
	  // 如果是个 不合法的 zone，取 USER.zones 第一个值，并刷新
	  USER.zone = USER.zones[0];
	  this.needRefresh = true;
	}
	// 更新路由里面所有 store 的 zone 信息
	this.updateStoreZone();
	// 设置 cookie
	cookie.set({
	  name: COOKIE_ZONE,
	  value: USER.zone,
	  expires: 7,
	});
	// match 替换 zone 信息，生成新 path
	if (this.needRefresh) {
	  const newPath = match.path.replace(/:zone(\?)?/, USER.zone);
	  history.replace(newPath);
	}
}
```