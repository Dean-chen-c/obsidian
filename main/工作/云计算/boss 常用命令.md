
```shell
# 解包deb,将deb包中的文件解包到指定目录 
dpkg -X xxxx.deb /tmp/target_dir 
# 查看 (已安装) control信息
dpkg -s <package> 
# 列举所有安装的deb包
dpkg -l
# 查看未安装的deb信息
dpkg --info <package>.deb

# 时间戳转换 
# for mac 
date -r 1540519017 

# tail -f 和 grep 结合 
tail -f logfile | grep --line-buffered pattern 

# find打印文件名称的同时进行文件操作 
find /tmp_dir/ -type f -mtime +14 -ls -exec /bin/rm -f {} \; 

# 按文件更新时间进行排序(升序) 
ll -tr 

# 创建一个过去的文件(用于测试定时删除旧文件等操作) 
# 以下命令创建了一个日期是15天前的文件 
touch -d '15 days ago' testfile 

# 在chrome的console中输入以下代码，直接进行页面的编辑(用于需要截图等场景) 
javascript:document.body.contentEditable='true';document.designMode='on'; void 0 

# shell下将十进制转换为十六进制 
printf '%x' 10 # 结果将会显示a 

# pg查询各表格磁盘占用空间 
SELECT 
table_schema || '.' || table_name 
AS table_full_name, pg_size_pretty(pg_total_relation_size('"' ||table_schema || '"."' || table_name || '"')) AS size FROM 
information_schema.tables 
ORDER BY 
	pg_total_relation_size('"' || table_schema || '"."' || table_name || '"') 
DESC limit 20; 

# pg查询指定表占用空间 
select pg_size_pretty(pg_total_relation_size('audit_auditlog')); 

# mac查看默认路由 
route -n get default 

# mac查看指定地址的路由 
route -n get xxx.xxxcloud.com 

# mac临时添加路由 
# IP 
sudo route add 172.16.3.14 192.168.208.53 

# 网段 
sudo route add 10.0.1.0/24 10.200.22.254 

# 创建一个快捷命令把自己的公钥给复制到剪切板 
# 以后输入pubkey就会把公钥复制到剪切板了 
alias pubkey="cat ~/.ssh/id_rsa.pub|pbcopy" 

# 使用json_pp格式化json输出，可用于curl输出结果的格式化 
curl http://127.0.0.1:8887 | json_pp 

# 直接在django环境下运行编写的脚本，解决环境变量等问题 
python manage.py shell < your_script.py 

# 获取管理节点所在的物理机(以便进行重启等操作)，在firstbox上执行以下操作 
grep physical_host= /pitrix/conf/settings/your-node-id 

# 解决grep时Binary file (standard input) matches的问题 
grep -a xxxxx 

# postgresql按周进行统计 
select date_part('week', create_time), count(1) from audit_auditlog where create_time > '2020-06-01' group by date_part('week', create_time) 

# postgresql sleep，用于构造慢查询(以下示例将会sleep 5s) 
select pg_sleep(5); 

# postgresql 查询json字段 
select params ->> 'node_id' from syslog where params ->> 'node_id' like '%webservice%';
```