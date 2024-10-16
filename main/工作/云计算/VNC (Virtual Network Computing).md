前端界面中云服务器的 vnc 功能是如何实现的



通过novnc 完成整体流程

RFB（Remote Framebuffer）协议是一种用于远程桌面访问的协议，它允许用户通过网络在远程计算机上查看和操作图形化用户界面。RFB协议允许客户端软件（如VNC客户端）连接到远程计算机上运行的服务器软件（如VNC服务器），并获取远程计算机屏幕的图像数据以及用户的输入事件（如鼠标和键盘输入）。

## 流程

1. 客户端发起请求
2. proxy节点cb_server服务查询数据库，确认虚拟机类型（kvm/lxc）、虚拟机vnc端口（instance表的graphics_port）
3. 生成10000-15000间的随机端口号（broker_port），检查端口号是否存在
4. 通过websockify开启代理  
	`websockify [broker_port] hyper:[graphics_port]`
5. 开放防火墙规则 
```shell
iptables -C INPUT -p tcp --dport [随机端口] -m comment --comment i-xxxxxxxx -j ACCEPT || iptables -A INPUT -p tcp --dport [随机端口] -m comment --comment i-xxxxxxxx -j ACCEPT
```
6. 更新数据库信息
7. 客户端收到信息连接端口


### websockify 

是到 TCP 代理/网桥的 WebSocket。可让浏览器连接到任何应用程序/服务器/服务。  
[源代码](https://github.com/novnc/websockify)

整体表现的为前端发起websocket请求，转到proxy节点，websockify 将对应ws连接转为tcp连接，到计算机节点上，可以通过对应端口看到 qemu-syst 和proxy的端口映射。

可以通过 `ps -ef | grep websockify` 找到proxy 节点上的websockify可执行文件
![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1717462052000vqzh94.png)

![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/17174622420008kzre4.png)

![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/17174625840002epawu.png)

![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1717462972000vpdyny.png)

![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/17174630730003isi8c.png)

dumpxml 看不到密码 ,`virsh edit` 可以看到密码  或者文件中
![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/17174631290006183bk.png)

![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1717465243000rcz1l5.png)

```python
#!/usr/bin/python
# -*- coding: utf-8 -*-
import re
import sys
from websockify.websocketproxy import websockify_init
if __name__ == '__main__':
    sys.argv[0] = re.sub(r'(-script\.pyw|\.exe)?$', '', sys.argv[0])
    sys.exit(websockify_init())
```

```
# 这些域名对应的都是proxy节点
cb0xx1a.xxx.com
cb1xx1a.xxx.com 
cb0xx1b.xxx.com 
cb1xx1b.xxx.com 
```

### 其他

要使用 `qemu-system-x86_64` 启动一个带 VNC 支持的虚拟机，您需要添加一些额外的选项来配置 VNC。以下是一个基本的示例：
```shell
# - `-hda disk.img`：指定了虚拟机的硬盘镜像文件。

# - `-vnc :1`：启用 VNC，并指定 VNC 服务器的地址和端口号。`:1` 表示使用默认的 VNC 端口号 5901，您也可以使用其他端口号，例如 `:2` 表示 5902 端口。

# - `-monitor stdio`：启动一个监视器，以便您可以通过标准输入输出控制虚拟机。这样做是为了方便在虚拟机启动后配置网络、安装操作系统等操作。

qemu-system-x86_64 -hda disk.img -vnc :1 -monitor stdio
```



```
DescribeInstances

graphics_passwd: "UIG0YBI7xMlHExVOjWlm0vVgSRZCPOxn" # vnc 密码
graphics_port: "5925" # vnc 端口
graphics_protocol: "vnc" # vnc 类型 ikvm | vnc 
extra.hypervisor === 'lxc' # vnc 类型为 container

CreateBrokers

broker_host: "cb0xx1a.xxx.com" # ws host
broker_ip: "172.31.xxx.xxx" # ws ip
broker_port: 11520 # 随机端口号
instance_id: "i-8snyruit" # 云服务器 id
```
