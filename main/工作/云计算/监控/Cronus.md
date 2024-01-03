![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1689144546000hbwle3.png)
# Introduction

Cronus主要提供对X云iaas平台的基本监控以及告警。对外暴露restful api供cmp、boss等使用。

# 组件详解
## agent

agent 用于采集机器负载监控指标。包括资源监控(cpu、内存、磁盘、网络)以及iaas平台服务监控(redis、cassandra、supervisor所管理的自有服务)。

agent 基于社区[telegraf](https://github.com/influxdata/telegraf)二次开发而成，采用纯插件式的开发，可以很方便根据自身业务需求进 行扩展。

agent 在每个 iaas 节点(hyper、VG、webservice等)都会部署一个，采用 supervisor对该服务进行管理。

## influxDB

[influxDB](https://github.com/influxdata/influxdb) 为一套开源的时序数据库，负责 Cronus 所有监控告警数据的存储，查询。使用systemd进行管理。

## kapacitor

[kapacitor](https://github.com/influxdata/kapacitor) 为 influxdb 配套的告警组件，负责所有告警规则的管理，阈值检查以及告警之后触发 action。使用 systemd 进行管理。

## chronograf

[chronograf](https://github.com/influxdata/chronograf) 为 influxdb 配套的图形化展示组件。对 kapacitor 以及 influxdb 的 client 进行了封装，对外提供了更友好的访问方式。引入该组件的目的是为了 cronus-api 服务更简单的进行告警规则的下发，查询等。使用 systemd 进行管理。

## cronus-api

cronus-api 为我们自己开发的 api-gateway。对外提供了 http 的接口，提供了所有监控告警的操作。同时负责到 firstbox 采集 Iaas 每种角色对应的节点信息(比如: hyper:[“node1”, “node2”, “node3”]) 以及节点拓扑关系(比如: "tr02n00":["dnsmaster1","proxy1"])。使用 supervisor 进行管理。
