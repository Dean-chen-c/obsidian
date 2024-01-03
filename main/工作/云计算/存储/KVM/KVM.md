## 介绍

KVM 是基于虚拟化扩展（Intel VT 或者 AMD-V）的 X86 硬件的开源的 Linux 原生的全虚拟化解决方案。KVM 中，虚拟机被实现为常规的 Linux 进程，由标准 Linux 调度程序进行调度；虚机的每个虚拟 CPU 被实现为一个常规的 Linux 线程。这使得 KVM 能够使用 Linux 内核的已有功能。KVM 本身不执行任何硬件模拟，需要用户空间程序通过 /dev/kvm 接口设置一个客户机虚拟服务器的地址空间，向它提供模拟 I/O。

KVM在linux中的工作模式如图所示，这是裸机虚拟技术，KVM完全充当了hypervisor层，各单位工作如下：

Guest：客户机系统，包括CPU（vCPU）、内存、驱动（Console、网卡、I/O 设备驱动等），被 KVM 置于一种受限制的CPU 模式下运行。 

KVM：运行在内核空间，提供 CPU 和内存的虚级化，以及客户机的 I/O 拦截。Guest 的 I/O 被 KVM 拦截后，交给 QEMU 处理。  

QEMU：修改过的被 KVM 虚机使用的 QEMU 代码，运行在用户空间，提供硬件 I/O 虚拟化，通过 IOCTL /dev/kvm 设备和 KVM 交互。  

**补充：hypervisor（又称为 虚拟机管理程序或 VMM）层是基于内核的虚拟机KVM。**

## 安装

KVM本身是在Linux内核中的一个模块儿，直接加载就可以使用，所谓的安装，实际上是安装KVM的管理工具包，视图化管理工具包和字符型管理包。

### 管理工具介绍

- qemu:(最底层的管理工具)
- qemu-kvm
- qemu-img
- libvirt：操作和管理KVM虚机的虚拟化 API，使用 C 语言编写，可以由 Python,Ruby, Perl, PHP, Java 等语言调用。可以操作包括 KVM，vmware，XEN，Hyper-v, LXC 等在内的多种 Hypervisor。
- Virsh：基于 libvirt 的 命令行工具 （CLI）
- Virt-Manager：基于 libvirt 的 GUI 工具

### 管理工具包安装命令

```shell
[root@Init ~]# yum -y install libvirt-daemon-kvm qemu-kvm virt-manager libvirt

#安装相应管理的软件

[root@Init ~]# modprobe kvm

#加载KVM模块儿

[root@Init ~]# systemctl start libvirtd.service

#启动守护进程
```

### 图形化界面安装命令

```shell
[root@Init ~]# yum -y groups install 'GNOME Desktop'

#在服务端安装可视化界面。

[root@Init ~]# virt-manager

#打开可视化界面
```