
```shell
virsh list # 查看虚拟机列表

virsh list --all # 查看所有的虚拟机（包括正在运行的和停止的）

lsmod |grep kvm # 查看是否加载kvm

modprobe kvm  #如果没有加载kvm 则使用进行加载

qemu-img create -f qcow2    yunxiang.qcow2  10G # 创建卷

qemu-img info yunxiang.qcow2 # 查看卷信息
```

![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1696818097000ier0v4.png)

使用镜像iso进行虚拟机安装

```shell
virt-install --name yunxiang --ram=512 --vcpus=2 --location=/usr/local/CentOS-7-x86_64-Minimal-1804.iso --disk path=/usr/local/yunxiang.qcow2,size=10 --network bridge=br0 --graphics=none --console=pty,target_type=serial --extra-args="console=tty0 console=ttyS0"
```

## 常用命令

```shell
virsh console study01 # 进入指定的虚拟机，进入的时候还需要按一下回车

virsh domiflist [domain_name]   # 列出所有网口

virsh autostart [domain_name]  #设置开机自启动

virsh start [domain_name] # 启动虚拟机

virsh reboot [domain_name] #重启虚拟机

virsh shutdown [domain_name] #关闭虚拟机

virsh vncdisplay [domain_name] # 查看vnc端口

virsh destroy   [domain_name]  # 强制关机

virsh undefine [domain_name] # 删除定义

virsh dominfo [domain_name] # 查看虚拟机信息

virsh suspend [domain_name] # 暂时挂起虚拟机

virsh resume [domain_name] # 恢复挂起的虚拟机

virsh save [domain_name] ./cirros.snop   # 生成快照

virsh restore ./cirros.snop # 从快照中恢复虚拟机

virsh dumpxml domain_name # 查看虚拟机配置文件  

virsh dumpxml domain_name > domain_name1.bak.xml # 备份配置文件

virsh domblklist domamin_name # 查看虚拟机磁盘位置

virsh detach-disk domain_name [vds] #磁盘卸载
```
