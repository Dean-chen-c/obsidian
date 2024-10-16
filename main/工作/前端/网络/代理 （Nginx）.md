## 正向代理

一个位于客户端和原始[服务器](https://cloud.tencent.com/act/pro/promotion-cvm?from_column=20065&from=20065)(origin server)之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标(原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端。

客户端才能使用正向代理。正向代理总结就一句话：代理端代理的是客户端。例如说：我们使用的OpenVPN 等等。

> 例如：在大陆访问www.google.com，我们需要一个代理服务器，我们通过代理服务器去访问谷歌，这个过程就是正向代理。

正向代理，代理的是客户端，服务端不知道实际发起请求的客户端

## 反向代理

反向代理（Reverse Proxy）方式，是指以代理服务器来接受 Internet上的连接请求，然后将请求，发给内部网络上的服务器并将从服务器上得到的结果返回给 Internet 上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。

反向代理，代理的是服务端，客户端不知道实际提供服务的服务端

> 都是站在客户端的角度，看代理服务器是帮客户端代理，还是帮服务端代理
> 
> 正向代理，就是`代理服务器代理了客户端`，去和目标服务器进行交互。现实生活中的场景：黄牛买票。 反向代理，就是`代理服务器代理了目标服务器`，去和客户端进行交互。现实生活中的场景：房屋中介。

## nginx反向代理匹配规则

### 匹配规则总结

**location 是否以“／”结尾，在 ngnix 中 location 进行的是模糊匹配**

1. 没有“/”结尾时，location /abc/def 可以匹配 /abc/defghi 请求，也可以匹配 /abc/def/ghi等
2. 而有“/”结尾时，location /abc/def/ 不能匹配 /abc/defghi 请求，只能匹配 /abc/def/anything 这样的proxy_pass配置规则

**配置 proxy_pass 时**

1. Nginx 不会把 location 中匹配的路径部分加入代理 uri
	1. 当proxy_pass后面的 url 加上了 /，相当于是绝对路径
	2. 当proxy_pass 为 IP或域名+端口+路径（结尾不管有无/）
2. Nginx 会把 location 中匹配的路径部分加入代理 uri
	1. 当proxy_pass 为 IP或域名+端口（结尾无/）


### 模块
#### http_sub_module 模块

location / {
    sub_filter      </head> '</head><script language="javascript" src="$script"></script>';
    sub_filter_once on;
    sub_filter_types text/html;
}

##### 指令

|     |                                        |
| --- | -------------------------------------- |
| 语法  | **sub_filter** _string_ _replacement_; |
| 默认  |                                        |
| 环境  | http, server, location                 |

**设置被替换的字符串（string）和用来替换的字符串（replacement）。**

被替换的字符串（string）不区分大小写。用来替换的字符串（replacement）可以包含变量。

|     |                                         |
| --- | --------------------------------------- |
| 语法  | **sub_filter_last_modified** on \| off; |
| 默认  | sub_filter_last_modified off;           |
| 环境  | http, server, location                  |
| 版本  | >=1.5.1                                 |

**启用后，在替换期间将保留原始响应中“Last-Modified”头部字段的值不变，这有助于响应的缓存。**

默认情况下，该字段会由于处理期间响应内容的被修改而导致被删除。

|   |   |
|---|---|
|语法|**sub_filter_once** on \| off;|
|默认|sub_filter_once on;|
|环境|http, server, location|

**指示是进行多次替换还是只进行一次。**

|     |                                       |
| --- | ------------------------------------- |
| 语法  | **sub_filter_types** _mime-type_ ...; |
| 默认  | sub_filter_types text/html;           |
| 环境  | http, server, location                |

**指定该过滤器可作用于哪些MIME类型的文档之上(原文是：Enables string replacement in responses with the specified MIME types in addition to “text/html”，笔误？）。特殊值“*”匹配任何的MIME类型。(0.8.29)**


### 提问

**想要在服务器80端口，部署多个站点?**

使用server_name

**想要屏蔽爬虫引擎?**

```nginx.conf
# search bots map
map $http_user_agent $limit_bots {
    default 0;
    ~*(Baiduspider|Googlebot|360Spider|bingbot|Sosospider|Bytespider|Yisouspider) 1;
    "~*(Sogou web spider|Sogou inst spider|Sogou spider|Sogou wap spider)" 1;
}

# forbid search bots
if ($limit_bots = 1) {
    return 403;
}
```

**路径匹配方式？**

见 [匹配规则总结](#匹配规则总结)

**反向代理？**

```
location / {
	proxy_pass http://xxxx_front_server;
	proxy_set_header Host $host;
}
```

**为反向代理提供负载均衡？**

```
upstream xxxx_front_server {
    server dev01-xxxx0:8880 fail_timeout=30s;
    server dev01-xxxx1:8880 fail_timeout=30s;
}
```

**proxy_set_header Host $host;的作用**

将客户端请求中的 `Host` 头字段设置为 `$host` 变量的值，并将其传递给后端服务器。这在反向代理设置中非常常见，可以确保后端服务器收到的请求包含正确的主机信息。

**client_max_body_size 0**

关掉文件限制

**proxy_request_buffering off;**

可以使得Nginx及时没有读取完client body 的时候，也能立刻连接upstream。换句话说，Nginx来了收到client的Header，就往upstream 连接并且发送。并且，来了部分的body，也会立刻转发到upstream，即所谓的流式上传。

**error_page**

```
location @error401 {
	return 302 /login;
}

location /download/installer {
	auth_request /auth/auth_request/;
	proxy_pass http://firstbox:9997/download;
	proxy_set_header Host $host;
	error_page 401 = @error401;
}
```

**写入cookie**

```
location ~ ^/set-cookie/(?<xxxx_sk>.+)$ {

	return 200 ‘Setted: $xxxx_sk’;

	add_header Set-Cookie “xxxx_sk=$xxxx_sk;HttpOnly; Max-Age=21600;Path=/;SameSite=Lax”;
	add_header Content-Type text/plain;

}
```

**屏蔽上游的响应头**

```
server {
    listen 80;
    server_name example.com;

    location / {
        # 代理到上游服务器
        proxy_pass http://backend_server;

        # 屏蔽上游服务器的响应头
        proxy_hide_header Server;
        proxy_hide_header X-Powered-By;

        # 添加自定义的响应头
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header X-XSS-Protection "1; mode=block" always;

        # 可选：添加自己的 Server 头
        add_header Server "MyCustomServer" always;
    }
}

```