

## 云主机、VPS、虚拟机

#### 云主机 **Cloud Hosting**

云主机是更高级是VPS。云主机是一个超大集群服务器分出来的。理论上他的最大计算能力就是整个集群的计算能力，因此云主机相对于VPS而言它的扩展性更好

#### VPS **Virtual Private Server**

VPS就是讲一台物理服务器分隔成多个独立的虚拟专享服务器。要实现VPS需要容器技术和虚拟化技术。

VPS就是利用容器技术和虚拟化技术将一台物理机划分为N台独立的服务器，划分出来的服务器之间是相互独立的互不影响，每台服务器有独立的IP、CPU、内存、磁盘，划分出来的每台服务器就是VPS。

#### 虚拟机 **Virtual Machine**

虚拟主机也是将一台服务器分隔成若干个虚拟的专享使用空间，然而空间都不能自定义，只能支持特定的功能，并且都使用一个ip，更重要的是各个空间之间是会相互影响的，包括cpu、内存、磁盘这些都是共享的

#### VPS、云主机、虚拟机区别

- 虚拟机：是一套房，隔离出来了N多个房间，房间只有基本的床、凳子等私人的东西，然而厕所、厨房、洗衣机等等这些都是公共使用了，相互之间使用是有影响的。
- VPS:同样是一大套房分隔出来的N个房间，但是房间里面有厕所，有洗衣机，这些你是独立的，你还可以安装其他家电，就想是一个独立的小公寓一样，房间与房间之间没有任何的共享资源，都是独立的。
- 云主机：就像是一栋大楼，楼房中公寓的墙壁都是打穿了的是一个超大的空间，你需要多大的空间，就用隔离板给你隔离出多大的空间，在空间内是一个独立，空间外面是完全不影响的，如果你突然觉得空间不够了，那么还可以把隔离板移动来扩大空间，具有很好的扩展性。