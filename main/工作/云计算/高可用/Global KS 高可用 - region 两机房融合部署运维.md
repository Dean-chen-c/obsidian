---
cssclasses:
  - purpleRed
  - wideTable
  - tableCenter
---

## 环境信息


<table>
	<tr>
		<th>区域</th>
		<th>Role</th>
		<th>Node</th>
		<th>说明</th>
	</tr>
	<tr>
		<td rowspan="5">global1a</td>
		<td rowspan="2">global ks</td>
		<td>global1a-webservice0</td>
		<td></td>
	</tr>
	<tr>
		<td>global1a-webservice1</td>
		<td></td>
	</tr>
	<tr>
		<td  rowspan="2">global pg node</td>
		<td>global1a-pgserver0</td>
		<td>global pg 在主区是一个集群，进行同步流复制</td>
	</tr>
	<tr>
		<td>global1a-pgserver1</td>
	</tr>
	<tr>
		<td>recovery pg node</td>
		<td>global1a-recoverypgserver0</td>
		<td>recovery pg在主备区是一个集群，进行同步流复制</td>
	</tr>
	<tr>
		<td rowspan="6">global2a</td>
		<td rowspan="2">global ks</td>
		<td>global2a-webservice0</td>
		<td></td>
	</tr>
	<tr>
		<td>global2a-webservice1</td>
		<td></td>
	</tr>
	<tr>
		<td  rowspan="2">global pg node</td>
		<td>global2a-pgserver0</td>
		<td>global pg在备区，与主区进行异步流复制</td>
	</tr>
	<tr>
		<td>global2a-pgserver1</td>
	</tr>
	<tr>
		<td>recovery pg node</td>
		<td>global2a-recoverypgserver0</td>
		<td></td>
	</tr>
</table>

#### 无灾难 - 主备切换/主备回切(演练)

此场景下global ks的主备区无故障， 出于演练目的进行global ks切换， 因为global 和 zone是独立部署，FailoverGlobalKS 和 FailbackGlobalKS 两操作都涉及到global pg 的切换， 本质上操作底层处理动作并无区别 。

##### 主备切换

1. 当前主备区机房无故障，向备区(global2a) 发送 FailoverGlobalKS 请求来完成切换操作。

    /pitrix/bin/send-zw-directive -p '{"action": "FailoverGlobalKS", "ks_master_zone":"global2a"}' 

2.  操作#1完成后， 可通过接口 CheckPG，GetGlobalKSInfo 请求来查询当前 global pg 集群状态信息 以及 global ks 主区信息。

    /pitrix/bin/send-zw-directive -p '{"action": "GetGlobalKSInfo"}'

   返回结果为ks_master_zone为global2a；

    /pitrix/bin/send-zw-directive -p '{"action": "CheckPG", "db_name": "global"}'

   返回结果为recovery pg 主节点 primary node为global2a-recoverypgserver0，并且状态为ok,  主备区 recovery pg node 和 pgpool nodes节点状态均为ok；

3.  修改console url host指向备区(global2a) global ks, 重新登录console 验证正常操作可用区(alpha 和 beta)资源。

##### 主备回切

此场景下global ks的主备区无故障或者故障恢复之后， 将global ks切换到指定区，因为global 和 zone是独立部署，FailoverGlobalKS和FailbackGlobalKS无区别 。

1. 当前主备区机房无故障，向主区(global1a) 发送 FailbackGlobalKS 请求来完成回切操作。

    /pitrix/bin/send-zw-directive -p '{"action": "FailbackGlobalKS", "ks_master_zone":"global1a"}' 

2.  操作#1完成后， 可通过接口 CheckPG，GetGlobalKSInfo 请求来查询当前 global pg 集群状态信息 以及 global ks 主区信息。

    /pitrix/bin/send-zw-directive -p '{"action": "GetGlobalKSInfo"}'

    返回结果为ks_master_zone为global1a；

    /pitrix/bin/send-zw-directive -p '{"action": "CheckPG", "db_name": "global"}'

    返回结果为recovery pg 主节点 primary node为global1a-recoverypgserver0，并且状态为ok,  主备区 recovery pg node 和 pgpool nodes节点状态均为ok；

3.  修改本地host指向主区(global1a) global ks, 重新登录console 验证正常操作可用区(alpha 和 beta)资源。

  

####  主区机房断电/宕机

此场景下 global ks 的主机房故障， 需要将 global ks 服务切换到备区，  因为 global 和zone 是独立部署的， 故此时需要用户主动决定是否需要把和 global 主区在同一机房的iaas 可用区设置为faulty。 

##### 灾难恢复 - 主备切换

1.  如果当前环境部署灾备服务，有recovery 数据库场景， 首先需要通过接口 RecoverPG 来恢复recovery pg在备区 (global2a) 可读写(将灾难的pg 节点排除掉)。

     /pitrix/bin/send-zw-directive -p '{"action": "RecoverPG", "db_name": "recovery", "pg_master": "global2a-recoverypgserver0"}'

2. 操作#1完成后， 可通过接口 CheckPG 请求来查询当前 recovery pg 集群状态信息。 

      /pitrix/bin/send-zw-directive -p '{"action": "CheckPG", "db_name": "recovery"}'

     返回结果为recovery pg 主节点 primary node为global2a-recoverypgserver0， 并且状态为ok, 备区(global2a) recovery pgpool nodes节点状态均为ok；

3.  操作#2确认recovery pg恢复备区可读写后，向备区(global2a) 发送 FailoverGlobalKS 请求来完成切换操作, 并且将和global 主区在同一机房的可用区(alpha)设置为faulty。

     /pitrix/bin/send-zw-directive -p '{"action": "FailoverGlobalKS", "ks_master_zone":"global2a","disaster_zone": "alpha"}'

4.  操作#3完成后， 可通过接口 CheckPG，GetGlobalKSInfo 请求来查询当前 global pg 集群状态信息 以及 global ks 主区信息。   

     /pitrix/bin/send-zw-directive -p '{"action": "CheckPG", "db_name": "global"}'

     返回结果为global pg 主节点 primary node为global2a-pgserver0， 并且状态为ok, 备区(global2a) global pg nodes 和 pgpool nodes节点状态均为ok；

    /pitrix/bin/send-zw-directive -p '{"action": "GetGlobalKSInfo"}'

    返回结果为ks_master_zone为global2a；

5.  修改本地console url host指向备区(global2a) global ks,  重新登录console 验证正常操作和global 备区在同一机房的可用区(beta)资源。

  

##### 灾难恢复 - 数据库纳管

6.  当主区机房恢复之后， 需通过接口 RecoverPG 请求来恢复 recovery pg 集群， 将主区内的pgserver节点再次纳管。

    /pitrix/bin/send-zw-directive -p '{"action": "RecoverPG", "db_name": "recovery", "pg_master": "global2a-recoverypgserver0"}'

7.  操作#6完成后，可通过接口CheckPG请求来查询当前 recovery pg 集群状态信息。

   /pitrix/bin/send-zw-directive -p '{"action": "CheckPG", "db_name": "recovery"}'

   返回结果为recovery pg 主节点 primary node为global2a-recoverypgserver0，并且状态为ok,  主备区 recovery pg node 和 pgpool nodes节点状态均为ok；

8.  操作#7确认recovery pg正常后， 需通过接口  RecoverPG 来恢复 global pg 集群，将主区的pgserver 再次纳管, 进行数据同步。

  /pitrix/bin/send-zw-directive -p '{"action": "RecoverPG", "db_name": "global", "pg_master": "global2a-pgserver0"}'

9.  操作#8完成后，可通过接口CheckPG请求来查询当前 global pg 集群状态信息。

      /pitrix/bin/send-zw-directive -p '{"action": "CheckPG", "db_name": "global"}'

      返回结果为global pg 主节点 primary node为global2a-pgserver0， 并且状态为ok,  主备区 global pg node 和 pgpool nodes节点状态均为ok；

10.  可通过接口 ActiveDisasterZone 请求将和global 主区在同一机房的可用区(alpha)设置为 active 正常状态。

       /pitrix/bin/send-zw-directive -p '{"action": "ActiveDisasterZone", "recover_zone": "alpha"}'

11.  重启主区(global1a)的内 ks 节点上的 zone_watcher服务,用于清理 memcached 中的ks_master_zone，以保证后续回切能够正常获取租赁信息。

       supervisorctl restart zone_watcher

12.  console 验证正常操作可用区(alpha 和 beta)资源。

##### **可选操作1 - 主备回切**

13.  如果需要将Global KS服务回切到主区(global1a) , 向主区(global1a) 发送 FailbackGlobalKS请求来完成回切操作， 在非region 独立环境， 回切global ks 必须回切global pg。

      /pitrix/bin/send-zw-directive -p '{"action": "FailbackGlobalKS ", "ks_master_zone":"global1a"}' 

14.  操作#13完成后， 可通过接口 CheckPG，GetGlobalKSInfo 请求来查询当前 global pg 集群状态信息 以及 global ks 主区信息。

    /pitrix/bin/send-zw-directive -p '{"action": "CheckPG", "db_name": "global"}'

     返回结果为global pg 主节点 primary node为global1a-pgserver0， 并且状态为ok,  主备区 global pg node 和 pgpool nodes节点状态均为ok；

    /pitrix/bin/send-zw-directive -p '{"action": "GetGlobalKSInfo"}'

     返回结果为ks_master_zone为global1a；

15.  修改本地console url host指向主区(global1a) global ks, 重新登录console 验证正常操作可用区(alpha 和 beta)资源。

##### **可选操作2 - 数据库回切**

16.  如果当前环境部署灾备服务，有recovery 数据库场景，可通过接口 RecoverPG 请求将recovery pg 的 primary node切换到主区 dsry1a-ks2。

       /pitrix/bin/send-zw-directive -p '{"action": "RecoverPG", "db_name": "recovery", "pg_master": "global1a-recoverypgserver0"}'

17.  操作#15完成后，可通过接口CheckPG请求来查询当前 recovery pg 集群状态信息。

       /pitrix/bin/send-zw-directive -p '{"action": "CheckPG", "db_name": "recovery"}'

      返回结果为recovery pg 主节点 primary node为global1a-recoverypgserver0，并且状态为ok,  主备区 recovery pg node 和 pgpool nodes节点状态均为ok；

#### 备区机房断电/宕机

此场景下 global ks 的备机房故障，且global pg是单独的两个集群， 运维人员只需要恢复 recovery pg，以及决定是否需要把和global 备区在同一机房的可用区(beta)设置为faulty, 而无需针对global pg做特殊处理。

运维人员可通过如下操作来恢复

##### 灾难恢复 - 数据库隔离

1.  如果当前环境部署灾备服务，有recovery 数据库场景， 首先需要通过接口 RecoverPG 请求来恢复recovery pg在主区(global1a) 可读写。

     /pitrix/bin/send-zw-directive -p '{"action": "RecoverPG", "db_name": "recovery", "pg_master": "global1a-recoverypgserver0"}'

2. 操作#1完成后， 可通过接口 CheckPG 请求来查询当前 recovery pg 集群状态信息。

     /pitrix/bin/send-zw-directive -p '{"action": "CheckPG", "db_name": "recovery"}'

    返回结果为recovery pg 主节点 primary node为global1a-recoverypgserver0， 并且状态为ok, 主区(global1a) recovery pgpool nodes节点状态均为ok；

3.   可通过接口 ModifyZoneAttributes 请求和global 备区在同一机房的可用区(beta)设置为faulty。

    /pitrix/cli/modify-zone-attributes --zone beta --status faulty

4.   登录console 验证正常操作和global 主区在同一机房的可用区(alpha)资源。

##### 灾难恢复 - 数据库纳管

5.  当备区机房恢复之后， 若环境里有部署 recovery pg时， 需通过接口 RecoverPG 请求来恢复 recovery pg:  将备区的pgserver 节点再次纳管。

    /pitrix/bin/send-zw-directive -p '{"action": "RecoverPG", "db_name": "recovery", "pg_master": "global1a-recoverypgserver0"}'

6.  操作#6完成后，可通过接口CheckPG请求来查询当前 recovery pg 集群状态信息。

    /pitrix/bin/send-zw-directive -p '{"action": "CheckPG", "db_name": "recovery"}'

    返回结果为recovery pg 主节点 primary node为global1a-recoverypgserver0， 并且状态为ok, 主备区 recovery pg node 和 pgpool nodes节点状态均为ok；

7.  可通过接口 ActiveDisasterZone 请求将和global 备区在同一机房的可用区(beta)设置为 active 正常状态。

     /pitrix/bin/send-zw-directive -p '{"action": "ActiveDisasterZone", "recover_zone": "beta"}'

8.  console 验证正常操作可用区(alpha 和 beta)资源。

  

#### 主备区网络中断

主备区网络中断，此种情况下运维需分析决定保留哪个zone 来提供服务， 根据不同选择，可将其分为如下两种情况：

1.  主区能够继续提供服务， 可以参考上述- 备区机房断电/宕机的运维流程来操作；

2. 主区无法继续提供服务，选择备区来继续提供服务， 则需要将 global ks切换被备区， 具体操作可参考上述 - 主区机房断电/宕机的运维流程。