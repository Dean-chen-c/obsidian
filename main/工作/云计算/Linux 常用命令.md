
## 系统

#hostname  #lsb_release  #uname

```shell
lsb_release -a # 查看linux 版本信息

uname -a # 查看内核/操作系统/CPU信息

hostname # 查看计算机名

head -n 1 /etc/issue # 查看操作系统版本

```

#uptime

```shell
uptime # 查看系统运行时间、用户数、负载
```

## 资源

#df

```shell
df -h # 查看各分区使用情况 
```

#du

```shell
du -sh <目录名> # 查看指定目录的大小 
```

## 进程

#ps

```shell
ps -ef # 查看所有进程 

ps -ef | grep nginx
```

#lsof

```shell
lsof -i:8088 # 查看端口8088 PID
```

#top 

```shell
top # 实时显示进程状态用户 
```

## 用户

#w  #who

```shell
w # 查看活动用户
who 
```

## 网络

#netstat

```shell
netstat -anlp|grep 8088 # 查看端口8088

netstat -anlp tcp | grep [端口号]
```

#route

```shell
route -n # 查看路由表
```

#ifconfig

```shell
ifconfig # 查看所有网络接口的属性
```

## 服务

#systemctl

```shell
systemctl reload nginx # 使用systemctl重启nginx
```

#service  [[Systemd#service 做了什么事情]]

```shell
service nginx reload # 使用service重启nginx

service nginx restart

service nginx status
```

#which  #whereis

```shell
# 只能用于搜索程序名
whereis pm2 #  二进制文件（参数-b）man说明文件（参数-m）源代码文件（参数-s）

# 只能查可执行文件，查命令是否存在，以及命令的存放位置在哪儿。
which pm2 
```

#find

```shell
# 实时查找，精确查找，但速度慢

# -name  根据文件名称查找（严格区分大小写，如果文件名中间有空格，则必须把文件名用双引号引起来）
# -iname  根据文件名查找（不区分大小写）
# -regex "PATTERN" 正则表达式匹配

find
```

#ln

```shell
# 软连接

ln -s [源文件] [当前目录同名文件]

# ln -s ../sites-available/b_c.conf b_c.conf
```

#tar

```shell
# tar压缩

# -c或--create 建立新的备份文件
# -z或--gzip或--ungzip 通过gzip指令处理备份文件
# -f<备份文件>或--file=<备份文件> 指定备份文件
# -T<范本文件>或--files-from=<范本文件> 指定范本文件，其内含有一个或多个范本样式，让tar解开或建立符合设置条件的文件。
# -X<范本文件>或--exclude-from=<范本文件> 指定范本文件，其内含有一个或多个范本样式，让ar排除符合设置条件的文件。

tar -czf pitrix-webinstaller-express.tar.gz -T pitrix-webinstaller-express/.pkglist

tar -czf pitrix-boss-console-2.0-icp.tar.gz -X exclude.list ./*


# 解压

# -x或--extract或--get 从备份文件中还原文件。
# -v或--verbose 显示指令执行过程。

tar -zxvf xxxx.tar.gz .

# 查看备份文件中的文件

# -t或--list 列出备份文件的内容。

tar -tf test.tar # 只是列出文件
tar -tvf test.tar # 列出文件，包括文件信息
tar -vf test.tar --delete ./a.txt # 删除备份文件中的指定文件
```

#cp

```shell
cp -r [dir] [target_dir] # 拷贝文件
```
  
#mv

```shell
mv ./a/* ./target

mv 如果涉及到到替换文件，不可行 使用 cp -rf
```

#chmod

```shell
# 三位数字对应三个用户类型 文件所有者、群组用户、其他用户
      读  写  运行
# 7 = 4 + 2 + 1      读写运行权限
# 6 = 4 + 2          读写权限
# 5 = 4 + 1          读和运行权限
# 4 = 4              只读权限
# 0                  没有权限

# 775 drwxrwxr-x 

# 755 drwxr-xr-x

# 600 -rw-------

# 644 -rw-r--r--

chmod 755 xxx # 修改文件权限

```

#chown

```shell
# -R 处理指定目录以及其子目录下的所有文件

chown  [user:group] [文件夹] # 设置文件所有者和文件关联组的命令

chown runoob:runoobgroup file1.txt
```

#ls 

```shell
ls -al --group-directories-first # 文件夹排到最前面
```

#scp 

```shell
# 拷贝文件到本地

scp root@jenkins.yunify.xyz:/root/boss2-in-docker.tar.gz ~/Downloads

scp -r root@jenkins.yunify.xyz:/root/boss2-in-docker ~/Downloads

# 拷贝文件到服务器

scp ~/Downloads/boss2-in-docker.tar.gz root@jenkins.yunify.xyz:/root/
```


#crontab [[crontab]]

```shell
crontab -l # 查看当前用户的计划任务
```