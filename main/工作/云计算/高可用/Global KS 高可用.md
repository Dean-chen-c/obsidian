<mark>高可用需求一般涉及到机器上架、实施部署等交付服务，并且根据特定的环境架构会有不同的处理方案，可能会涉及到商务流程。</mark>

## 已经交付架构

| KA | 架构 | 需求 |  
| :--------: | :--------: | :--------: |  
| 阳光保险 | 同 Region 两机房，Global+Sub 融合 | 没有物理机，第二机房 subzone 扩 Global |  
| 信达金融 | 异地两机房，Global+Sub 融合 | 期望全局与计算均支持异地容灾。节点不多，不太想加物理机。|
| 中芯国际 | 异地两机房 | BOSS 跨机房容灾 | 
| 中原银行 | 同 Region 两机房，Global+Sub 融合 | 没有物理机，第二机房 subzone 扩 Global |
| 安盛保险 | 不同 Region 两机房，Global+Sub 融合 | 因网络延迟不达标，只能拆 global 后加物理机做 global 独立两机房方案 |
## 运行中的客户

|客户|环境说明|备注|是否标准演进方案|
|---|---|---|---|
|光大银行|同 Region 三机房 global 独立部署：<br><br> [[Global KS 高可用改造及运维手册]] 首图示例|否<br><br>该方案使用了较多物理机作为管理节点，一般其他客户没有这么壕；<br><br>该方案的 zookeeper 为跨 zone 单集群物理机部署，且 pg 也是物理机部署，前期需要一次性规划好，并且不利于后期维护。|
|华数传媒|同 Region 两机房 global+sub 融合部署：可参考《[华数高可用演练模拟测试记录](https://cwiki.yunify.com/pages/viewpage.action?pageId=156905389)》|该客户存在一个 zone 是 spine-leaf 网络架构，同时在内部的 F5 设备上做了 https 的卸载，实际平台搭建为 http ，导致可能存在 tcp 链接延迟的问题而使 zone 内宕机演练不理想。|是<br><br>Zone 内宕机演练不理想的情况已优化。[华数 5.30 ks 宕机演练失败原因分析](https://cwiki.yunify.com/pages/viewpage.action?pageId=156925851)<br><br>部分通用优化已调整至企业云版本中，针对 tcp 超时时间的设定后续可能需要个案分析。|
|鼎和保险|同 Region 两机房 global+sub 融合部署|是|
|首自信|同 Region 两机房 global+sub 融合部署|是|
|中移金科|不同 Region 两机房 Global 独立部署|之前有尝试过在不加（或加少量）机器的情况下，将 Global KS 的 vm 分离出来在原环境部署，但是出过诸多问题：[中移金科故障汇总](https://cwiki.yunify.com/pages/viewpage.action?pageId=145938967)|是|
|中原银行|同 Region 两机房 global 独立部署|||否<br><br>该方案并不节约物理机，却对环境网络延迟有一定要求，可以被通用的非 Region 两机房来做功能覆|

 


