
写在前面，文中很多表单填写值，按照个人观念填写，不一定最为恰当，可以留言，期待给出更好的想法。

# 环境

地址：[https://weblate.yunify.xyz/](https://weblate.yunify.xyz/)

账号/密码：已经对接公司ldap，使用 OA 账号登录即可

# 团队

登录过后会根据正则会自动分配到： 两个团队（项目创建者 查看者），支持创建项目，查看项目。
# 创建项目

基于公司情况，默认有个enterprise-cloud的项目就好，这样可以公用。（已经建好）
![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1729752927000lo6avd.png)

| 表单项     | 是否必填 | 建议               |
| ------- | ---- | ---------------- |
| 项目名称    | 是    |                  |
| URL 标识串 | 是    | 默认等同于项目名称        |
| 项目网站    | 是    | 可以不填写，通过配置关闭了必填  |
| 翻译说明    | 否    | 最好填写 （介绍项目，消除告警） |


# 创建部件

设计为每个部件代表一个版本，默认从一个公用的代码仓库拉取和管理翻译。

  ![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/17297530710009g3e5u.png)


|表单项|是否必填|建议|
|---|---|---|
|部件名称|是|版本名称|
|URL 标识串|是|默认等同于部件名称|
|用作术语表|否|暂时不勾选，术语表作用还未弄清楚|
|项目|是|选择对应项目|
|源语言|是|中文（简体）|
|版本控制系统|是|Git|
|源代码仓库|是|通过ssh访问 git@git.yunify.com:aaa/bbb/ccc-weblate.git<br><br>需要在仓库的 Deploy keys 里面找到**weblate** 加到 **Enabled deploy keys**<br><br>注意要编辑，勾选 enable write权限|
|仓库分支|否|版本名称|

  

# 添加新翻译部件



会扫描前面填写的**源代码仓库。**出现结果后，可以选择**手动设定配置**或者**其他**，一般选择了手动设定配置。
![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/172975310300011gqdp.png)

![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1729753119000s5ao6t.png)

![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1729753136000i1g6dw.png)

![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1729753250000mb8f3f.png)


  
  

| 表单项         | 是否必填 | 建议                                                                              |
| ----------- | ---- | ------------------------------------------------------------------------------- |
| 表单项         | 是否必填 | 建议                                                                              |
| 项目          | 是    | 自动填写了                                                                           |
| 部件名称        | 是    | 自动填写了                                                                           |
| 语言筛选        | 是    | ^(zh-CN\|en)$，默认是^[^.]+$                                                        |
| 语言代码风格      | 是    | 基于文件格式默认值 未理解其作用                                                                |
| 翻译许可证       | 否    | 默认值，不做修改                                                                        |
| 编辑译文模版文件    | 否    | 默认勾选，未理解其作用，不做修改                                                                |
| 用作术语表       | 否    | 默认不勾选，未理解其作用                                                                    |
| 版本控制系统      | 是    | 自动填写了                                                                           |
| 源语言         | 是    | 自动填写了                                                                           |
| 源代码仓库       | 是    | 自动填写了                                                                           |
| 添加新译文       | 否    | 未理解其作用，不填                                                                       |
| 新翻译的模版      | 否    | 未理解其作用，不填                                                                       |
| 文件格式        | 是    | 可以按需选择，默认使用了 **i18next JSON 文件 v4**                                             |
| 文件掩码        | 是    | 用于匹配对应要导入的json文件                                                                |
| 推送分支        | 否    | 填写仓库分支，方便后续自动推送更改                                                               |
| 单语言译文模版语言文件 | 是    | 开发的时候默认现有中文，默认 */*/zh-CN.json文件                                                 |
| 分类          | 是    | 自动填写了                                                                           |
| 仓库浏览器       | 否    | https://git.yunify.com/xxxx/-/blob/{{branch}}/{{filename\|parentdir}}#L{{line}} |
| 仓库推送 URL    | 否    | 填写源代码仓库地址，方便后续自动推送更改                                                            |
| 仓库分支        | 否    | 自动填写了                                                                           |
| 中间语言文件      | 否    | 未理解其作用，不填                                                                       |
| URL 标识串     | 是    | 自动填写了                                                                           |

