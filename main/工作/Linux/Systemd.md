
## 命令

```shell
1     start             开启
2     stop            关闭
3     restart            重启
4     status            查看状态
5     is-active        查看激活与否
6     enable            设置开机启动
7     disable            禁止开机启动
8     is-enabled        查看是否开机自启
9     kill            杀死进程
10     mask            禁止自动和手动启动
11    unmask            取消禁止
12    list-dependencies 查看服务的依赖关系
13    reload            重新加载它们的配置   
13    cat               单元的单元文件内容
```

## service unit file 文件构成部分

```js
1、[Unit]：定义与Unit类型无关的通用选项；用于提供unit的描述信息、unit行为及依赖关系等
2、[Service]：与特定类型相关的专用选项；此处为Service类型
3、[Install]：定义由“systemctl enable”以及"systemctl disable“命令在实现服务启用或禁用时用到的一些选项
```

## unit 文件存放位置

```shell
# 本文件一共有三个地方可以存放
/etc/systemd/system
/usr/lib/systemd/system
/lib/systemd/system
```

## 比较 Linux init、service、systemctl

### 对于 init 和 service

`service` 就是`init.d` 的一种实现方式。  所以这两者启动方式（或者是停止、重启）并没有什么区别。

```shell
$ sudo /etc/init.d/nginx start
// 等价于
$ service nginx start
```

### service 做了什么事情

- 初始化执行环境变量PATH和TERM
- 调用/etc/init.d/文件夹下的相应脚本

```shell
service nginx restart # 重启
service nginx start   # 启动
service nginx stop    # 停止
service nginx status  # 查看状态
service nginx reload  # 重载配置
```
