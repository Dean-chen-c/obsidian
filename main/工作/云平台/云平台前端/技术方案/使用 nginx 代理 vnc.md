
本文用于描述如何通过修改 nginx 配置，使用 boss 的 nginx 来转发 vnc 服务请求。

- [前言](https://cwiki.yunify.com/pages/viewpage.action?pageId=184676568#id-[BOSS2]%E4%BD%BF%E7%94%A8nginx%E4%BB%A3%E7%90%86vnc-%E5%89%8D%E8%A8%80)
- [nginx 配置修改](https://cwiki.yunify.com/pages/viewpage.action?pageId=184676568#id-[BOSS2]%E4%BD%BF%E7%94%A8nginx%E4%BB%A3%E7%90%86vnc-nginx%E9%85%8D%E7%BD%AE%E4%BF%AE%E6%94%B9)
- [novnc 连接方法](https://cwiki.yunify.com/pages/viewpage.action?pageId=184676568#id-[BOSS2]%E4%BD%BF%E7%94%A8nginx%E4%BB%A3%E7%90%86vnc-novnc%E8%BF%9E%E6%8E%A5%E6%96%B9%E6%B3%95)

# 前言

目前 boss 界面中使用“连接远程终端”功能时，要求客户将所有 cbserver (一般是各 zone 的 proxy 节点)的解析到配置到本地的 hosts 文件中，否则将出现无法连接的情况。且这种方式需要 cbserver开放较多的端口出来，有的客户也无法接受这种做法。

为了解决该问题，可以尝试将 cbserver 提供的服务通过 nginx 来进行转发，这样一方面不用配置 hosts，也减少了端口的开放。

本文中的示例使用 qa 环境，此环境中 boss 的域名为：boss.xxxx.com 。

# nginx 配置修改

在 global proxy 的nginx 配置文件中修改boss 的配置文件：

```
vim /etc/nginx/sites-enabled/boss2.conf
```

在配置文件顶部添加如下的 map：

```
map $http_upgrade $connection_upgrade { default upgrade; '' close; }
```

在配置文件顶部添加 map，将各区域的 cbserver 的域名和 ip 写到 map 中，便于 nginx 进行解析：

**update 2024-5-8:**

**感谢 [秦培松](https://cwiki.yunify.com/display/~peisongqin) ，已在 CreateBrokers 接口返回中加入了 broker_ip，此时无需添加下面的配置。**

```
map $broker_hostname $brokers { 
	cb0qa1a.qacloud.com 172.31.20.149; 
	cb1qa1a.qacloud.com 172.31.20.150; 
	cb0qa1b.qacloud.com 172.31.34.165; 
	cb1qa1b.qacloud.com 172.31.34.166; 
}

```


在配置文件的 server 部分添加如下的转发配置：

```
location ~ /vnc_proxy/(?<broker_host>.+)/(?<broker_port>\d+)/(?<broker_resource>.+) { 
	set $broker_hostname $broker_host; 
	proxy_pass http://$brokers:$broker_port/$broker_resource$is_args$args; proxy_http_version 1.1; 
	proxy_set_header Upgrade $http_upgrade; proxy_set_header Connection $connection_upgrade; 
	proxy_set_header Host $host; 
}
```

如果使用接口中返回的 broker_ip，则配置修改为：

```
location ~ /vnc_proxy/(?<broker_ip>.+)/(?<broker_port>\d+)/(?<broker_resource>.+) {
	proxy_pass http://$broker_ip:$broker_port/$broker_resource$is_args$args; proxy_http_version 1.1; 
	proxy_set_header Upgrade $http_upgrade; 
	proxy_set_header Connection $connection_upgrade; 
	proxy_set_header Host $host; 
}

```

修改完成后保存并 reload 服务即可：

```
systemctl reload nginx

```
# novnc 连接方法

使用 novnc 连接时，使用CreateBrokers接口来创建vnc 服务，其接口返回为：

取出其中的 broker_host、broker_port和instance_id用于 url 的拼接。
```json
{
	"action": "CreateBrokersResponse",
	"trace_id": "r1NzLYXJ",
	"brokers": [{
		"instance_id": "i-hyxovadm",
		"ws_id": null,
		"broker_port": 13282,
		"broker_ip": "192.168.12.1",
		"broker_host": "cb0qa1a.qacloud.com"
	}],
	"ret_code": 0
}
```
**update 2024-5-8:**

**感谢 [秦培松](https://cwiki.yunify.com/display/~peisongqin) ，已在 CreateBrokers 接口返回中加入了 broker_ip，此时请取出 broker_ip 字段来替代 broker_host 来完成以下的操作。**

  

经过 nginx 转发后，url 的格式为：

http://boss.xxxx.com/vnc_proxy/broker_host/broker_port/instance_id

在本例中，拼接后的 url 为：

`http://bosss.xxxx.com/vnc_proxy/cb0qa1a.xxxx.com/13282/i-hyxovadm`

如果使用 novnc demo 的话，其填写方式是这样的：
![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1727596756000nmh2nr.png)
