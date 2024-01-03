## 背景介绍

当前架构global ks 的角色 以及部署方式， 以及其优缺点介绍

### 云平台架构介绍

Qingcloud云平台的管理逻辑架构图简化为如下图:
![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1688606224000jpzxok.png)

此图示对应的云平台环境为:  当前global 下 管理有 1 个region gd2 和一个 独立zone ap2a， 其中 region gd2 是由两个可用区gd2a 和gd2b 组成。 

global 域中的 global ks 服务主要包括:  账号，计费，以及云平台API 网关/ 用户console 页面等云平台公共管理服务。

### 私有云部署方式

当前， 私有云标准版和易捷版均是将 global ks 融合部署在第一个可用区内， 之后私有云可在此global 域下追加部署其他可用区， 只需部署新增加的可用区内的相关服务，global 纳管此可用区即可。

**这种部署方式存在的问题就是:**

如果 global ks 服务所在的第一个可用区机房遭遇整体故障时，会导致私有云 console 页面打不开， 连同其他未故障的可用区也不可管理， 虽然这些未故障的可用区的现有用户业务不受影响， 但是云平台用户及运维人员都不能通过 console/API 来查看管理这些可用区，一方面这对于高要求，严谨的私有云用户来说是不可接受的。 故在此背景下， 提出了global ks 高可用改造的需求。    另一方面在业务连续性的场景中， global ks 高可用是作为基础的必要条件， 所以将global ks 高可用改造列入到 业务连续性项目 的任务中。

**Notice:  本文档中的高可用改造范围为: 云平台管理global ks 服务,  独立的运维BOSS 平台不在此范围内.**

## global ks 高可用方案

在Qingcloud 云平台逻辑架构中， 云平台各管理服务均需向 可用区(机房) 内的zk 进行注册和发现。 在机房内各个服务均为多点高可用部署，这样能达到如下效果:

1. 系统内的无状态的服务就能做到多点高可用&负载均衡。
2. 系统内的有状态的服务可利用zk来选取主active 服务节点， 在主灾难后， 原本slave 节点能升为新主， 继而能做到多点高可用。

如上所述, 当前架构中基本能解决机房内部的服务单点故障， 而跨机房的高可用， 则需通过将global ks 部署在多个机房内， 且多机房内的global ks 服务 处于 active/active 或 active/standby 的模式， 来达到当系统遇到单机房故障时， 可通过服务多活自动切换， 或手动切换来实现 global ks 的跨机房高可用。  

global ks 的改造重点和基础在于 global 管理数据所用的 global pg 集群的以及负责平台服务注册发现选举 的 zookeeper 集群。  下面基于私有云不同的机房机器及网络条件， 来分别说明目前支持的三种global ks 跨机房高可用方案。 

### region 三机房独立

region 三机房是目前唯一能达到多机房 global ks 服务处于 active/active 模式 ， 也即系统能在单机房灾难情况下自愈的方案。  机房数量为3， 就能够让zookeeper 和 管理 pg 集群能仲裁在灾难的时候选取新主。  

**当前X云公有云平台，  光大银行的生产云平台 均是用的此高可用方案。**

#### 部署详情

方案架构图以及详情如下:

![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1688606445000njo1cs.png)


1.   每机房内用独立的物理服务器来独立部署 global ks 相关服务和组件, 具体原由在下面#3 里会说明。

2.   跨机房部署 postgresql 集群，一主两从，采用同步流复制进行同步，  并在pg 节点上 部署pg_watcher 服务， 负责在灾难情况下的自动重新选主+ 切换。

3.   跨机房部署 一个 zookeeper 集群，此部署方式能保证 有状态的服务 (billing  相关) 能在一个zk 集群下注册选主以及主备切换。   另外此要求也决定了 region 三机房双活部署不支持融合方式部署。 (注和zk 同节点部署的 memcached 和cassandra 也同样以集群形式跨机房部署)。

4.   global 各zone 内proxy 节点可在zone 内增加备节点， 配置vip， 且各zone 的webservice 节点 可根据实际业务量情况来做水平扩展。

#### postgresql 高可用

部署架构示意图如下:

![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1688606463000j8mxq2.png)


1.   pg-server采用一主两备流复制方案，分别部署在三个机房，保证高可用

2.   pg-server主从之间采用同步复制，保证数据强一致性

3.   每个机房部署一个pgpool节点，提供连接池

4.   pg_watcher 与每个机房的pgserver部署在同一节点上，相互监控pgserver节点服务的状态，pg主机点宕机时会负责自动切换到新的pg主节点（也可配置关闭自动切换）

  pg_watcher 服务的相关配置说明可见: [zone%E7%81%BE%E9%9A%BE%E6%B5%8B%E8%AF%95](https://cwiki.yunify.com/pages/viewpage.action?pageId=80087692#)

### region 两机房

若条件为region 两机房， 则根据用户实际需求， 提供如下三种部署方式: 

#### region 两机房独立 + 第三方仲裁节点

1.   需引入第三方仲裁节点， 用installer 提供的ks image， 来追加部署zk 集群的第三个节点， 以及用于pg 高可用探测切换的 pg_watcher 服务。 具体可参照 [gd2 部署pg watcher](https://cwiki.yunify.com/pages/viewpage.action?pageId=80087692#)

2.  第三方仲裁节点需和 当前region 两机房物理隔离，  但网络需同 region 双机房的 global ks 管理网络 三层打通。

实际使用即和 上面的 region三机房高可用类似， region 两机房各服务均能接收，处理请求， 属于高可用负载均衡模式.

**光大银行的 测试全栈云 即根据此方式部署的。** 

#### region 两机房独立

由于两机房跨机房部署两节点zookeeper 集群无法保证任一机房挂掉后zk仍然能工作，所以只能每个机房单独部署一套zk集群。

但独立的zk集群会导致一个问题，就是有状态 global ks服务无法在 两机房内正常选主(billing, scheduler_server)，各机房里都会有个节点服务工作在master模式， 这部分服务启动方式已经更改，只有在当前global ks 主区服务才能工作在master。

故此方案中， region 两机房服务只有一个机房内的global ks 服务处于active 状态，能接收、处理请求。 另外一机房内的global ks 服务均处于slave 状态， 不接收处理相关请求， 属于 active-standby 方式。架构示意图如下:

![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1688606488000mhpwiz.png)


_注：zookeeper memcache cassandra 在实际部署时，是在同一台 vm 里，所以这里实际上是每个 zone 都有自己的 zookeeper memcache Cassandra cluster。_

_只有 pgserver 是 zone A 和 zone B 组成的 pgserver cluster。_

#### region 两机房融合

此方案下， global ks 会和 zone ks 在同一节点进行融合部署， 其中global pg 和zone pg 公用一个pg 集群， 实际global ks 各服务的工作模式和上面的 region 两机房独立部署的是一样的， 处于主/备模式。

因为 global zk 也是共用的zone ks 节点， zone zk 在两个机房内均有一个集群， 故此场景下， global ks不能支持后续引入第三方仲裁的zk 节点的方案。

### 非region 两机房独立

当私有云条件不满足region 两机房时， 可选择此 非region 两机房独立部署方案。 此方案中， 两机房内的global ks 服务 只有一个机房内服务处于active状态， 能接受处理请求， 另一机房内的global ks服务均处于slave 状态，

不接受处理请求， 属于active-standby 方式， 和region两机房工作模式类似。   此方案详细说明如下:

1.   两机房各独立部署一套global ks服务，工作在主备模式。 

2.   两机房各部署一套 postgres集群， 两pg集群之间采用异步复制进行同步。

3.   两机房各独立部署zookeeper和memcached集群， 两机房独立部署Cassandra集群，配置多数据中心同步(endpoint_snitch：GossipingPropertyFileSnitch)

## global ks 高可用部署

上节详细说明了当前支持的几种global ks 的高可用方案， 对应的部署配置细节 在另外的wiki 中有详细说明， 不在此处赘述。

### 非region双机房部署

[非region双机房Slave Global KS独立部署说明](https://cwiki.yunify.com/pages/viewpage.action?pageId=22054729)

### region双机房融合部署

[region双机房global ks高可用融合部署说明](https://cwiki.yunify.com/pages/viewpage.action?pageId=69572756)

### region双机房独立部署

[region双机房global ks高可用独立部署说明](https://cwiki.yunify.com/pages/viewpage.action?pageId=69573110)

## global ks 高可用运维

### region 三机房双活

此方案为双活自愈的， 故在部署配置好pg_watcher 后， 在单机房故障的情况下无需人工介入即可恢复。

### region 两机房融合运维

[[Global KS 高可用 - region 两机房融合部署运维]]

### region 两机房独立运维

[global ks 高可用 - region 两机房独立部署运维](https://cwiki.yunify.com/pages/viewpage.action?pageId=91849397)

### 非region 两机房独立运维



  

## 常见错误日志和排查方法

1.  两机房（无第三方仲裁节点）方案中，主备区global ks是active-standby模式， 如何获取当前提供global ks的区域？

    执行/pitrix/bin/send-zw-directive -p '{"action": "GetGlobalKSInfo"}'可以获取当前global ks 当前工作区域信息 ks_master_zone。

  

2. 当前环境为什么没有recovery pg？

    recovery pg主要用于业务连续性项目负责用户云平台资源的容灾管理，为额外部署的容灾服务的数据库。 如果当前环境只是global ks的高可用，无容灾需求，从节省环境 ks 物理服务器的角度出发， 可不部署recovery pg。

  

3. 如何获取当前recovery pg或者global pg的状态？

   执行/pitrix/bin/send-zw-directive -p '{"action": "CheckPG", "db_name": "recovery"}' 可以获取recovery pg的状态,  包括pg cluster状态， pg nodes状态以及pgpool nodes状态。

   执行/pitrix/bin/send-zw-directive -p '{"action": "CheckPG", "db_name": "global"}' 可以获取global pg的状态,  包括pg cluster状态， pg nodes状态以及pgpool nodes状态。

  

4. 如何恢复当前recovery pg或者global pg的状态？

   如何环境有问题的话并且存在recovery pg的话， 则必须优先恢复recovery pg。recvoery pg恢复正常可读写之后， 才能建议恢复global pg。

   执行/pitrix/bin/send-zw-directive -p '{"action": "RecoverPG", "db_name": "recovery", "pg_master": "global1a-recoverypgserver0"}'可以恢复recovery pg, 请保证pg_master为当前工作的recovery pg master或者预期作为pg master的节点， 并且执行完成之后， 通过CheckPG请求查看recovery pg恢复正常。 

  执行/pitrix/bin/send-zw-directive -p '{"action": "RecoverPG", "db_name": "global", "pg_master": "global1a-pgserver0"}'可以恢复global pg, 请保证pg_master为当前工作的global pg master或者预期作为pg master的节点， 并且执行完成之后， 通过CheckPG请求查看global pg恢复正常。 

  

5. 关于执行回切FailbackGlobalKS使用场景？

   FailbackGlobalKS的目的是将global ks服务回切到指定的目的可用区。 如果主备区的机房保障性能一致， 即主区恢复之后， 无需执行该操作将global ks回切到原始主区。

  由于FailbackGlobalKS 适用的场景是，是原始主区故障，切换到备区继续提供服务后， 故障区恢复后再次操作回切到原住区，  因此回切之前有以下两点事项需要注意：

  1. 保证recovery pg(如果存在)和global pg已经将所有节点纳管成功， 恢复备区到主区的pg集群的数据同步， 避免回切之后数据丢失；

  2. 回切之前， 建议重启一下原主区(故障区)的zone_watcher服务用于清理该机房内 memcache 中ks_master_zone由于网络中断原因在切换时无法清理的脏数据， 以保证billing服务可以获取当前最新的ks_master_zone,  并且在切换之后能正常获取租赁信息。

  

6. 关于回切之后为什么无法获取已存在资源的租赁信息？

   console可以正常创建资源，获取价格信息，资源创建之后能够获取租赁信息， 但是对于已经存在资源的租赁信息获取失败， 有可能是由于在FailbackGlobalKS之前未重启原始主区的zone_watcher服务，导致当时billing服务状态未正确获取ks_master_zone造成的。

  针对此种情况， 建议重启当前ks_master_zone的billing_resource和billing_daemon  服务来重新load 所有资源的租赁信息， 后再次查看是否可以获取已存在资源的租赁信息。

  

7.  什么情况下需要手动修改本地host文件？

     由于两机房（无第三方仲裁节点）的方案中，主备区global ks是active-standby模式，因此针对region两机房融合部署，region两机房独立部署和非region两机房独立部署方案， 在执行FailoverGlobalKS或者FailbackGlobalKS操作进行global ks主备切换之后， 需要用户修改console url host文件连接到新的global ks 机房来工作。

  

8.  当global ks无法工作的排查顺序？

     针对于global ks无法工作提供服务， 可以按照顺序进行排查：

     1. 两机房（无第三方仲裁节点）情况下， 首先排查本地的host文件是否正确指向当前的ks_master_zone。

     2. 数据库状态是否正常， 可通过CheckPG请求查看recovery pg（如果存在）和global pg的状态， 包括pg cluster 状态， pg nodes 状态 和 pgpool nodes状态。

     3. 查看pgpool nodes节点的后端配置（/etc/pgpool2/pgpool.conf 中backend_hostname0）指向当前的pg master节点， 非Region独立部署只需要保证当前ks_master_zone的pgpool节点的连接正确即可。

     4. 查看zone proxy节点的/etc/haproxy/haproxy.cfg中的关于api_server和ws_server转发条目正确指向当前的ks_master_zone。

     5. 针对于独立部署(global 和zone pg是单独的集群的场景)， 需要排查zone pg是否可读写， 以及zone pg pool是否指向正确的primary zone pg node。

  

9. 创建资源的时候， 提示“内部错误, 获取资源价格失败”， 如何排查？

     1. 通过查看billing_resource.log.wf日志， 查看billing_resource是否转发到正确的global zone下。

     2. 如果billing_resource转发不正确， 查看对应iaas zone的proxy节点/etc/haproxy/haproxy更新指向当前的global ks， 并且保证haproxy在更新之后， 执行service haproxy reload重新加载。

  

10. FailoverGlobalKS, FailbackGlobalKS, RecoverPG的日常排查？

     由于FailoverGlobalKS, FailbackGlobalKS, RecoverPG是异步调用， 需要花费2~5分钟左右才能执行完成。可以在当前节点基于返回的UUID查询zone_watcher.log日志来查看当前具体执行的过程以及是否执行完成。