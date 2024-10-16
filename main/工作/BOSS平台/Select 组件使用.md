
```js
state = {
	selectedValue: '',
	current: 1,
	limit: 20,
	options: [],
	filterKey: '',
	isLoading: false,
	hasReachBottom: false,
	selectedOption: [],
}
<Select
	name="xxx"
	searchable
	value={selectedValue}
	onInputChange={this.handleInputChange}
	onChange={this.handleChange}
	isLoading={isLoading}
	placeholder={t('placeholder')}
	isLoadingAtBottom
	bottomTextVisible={hasReachBottom}
	onMenuScrollToBottom={this.handleScrollToBottom}
	options={options}
	valueKey="user_id"
	labelKey="label"
	// 失去焦点是否重置input
	onBlurResetsInput={false}
	// 关闭是否重置input
	onCloseResetsInput={false}
	// 选择后 是否重置input
	onSelectResetsInput={false}
/>


handleInputChange = debounce((input) => {
	this.setState({ filterKey: input }, this.fetchData);
}, 300);

handleChange = (value) => {
	const { options } = this.state;
	const opt = find(options, { user_id: value });
	this.setState({
	  selectedOption: opt || {},
	});
};

handleScrollToBottom = () => {
	const { isLoading, hasReachBottom } = this.state;
	if (!isLoading && !hasReachBottom) {
	  this.fetchData(true);
	}
};

fetchUser = async (isScroll) => {
	const { current, filterKey, limit, options } = this.state;
	this.setState({ isLoading: true });
	const params = {
	  limit,
	  offset: isScroll ? (current - 1) * 10 : 0,
	  search_word: filterKey,
	};
	const res = await this.store.fetch(params);
    const users = res.user_set || []

    this.setState({
      options: isScroll ? options.concat(users) : users,
      current: isScroll ? current + 1 : 2,
      hasReachBottom: users.length === 0,
      isLoading: false,
    });
}
```