# 环境信息获取

## 系统信息 

```shell
# 查看内核/操作系统/CPU信息

uname -a
# Linux i-xa65ei9y 4.19.0-5-amd64 #1 SMP Debian 4.19.37-5+deb10u2 (2019-08-08) x86_64 GNU/Linux

```

## 操作系统版本

```shell
# 查看操作系统版本

head -n 1 /etc/issue
# Debian GNU/Linux 10 \n \l
```

## CPU信息

```shell
# 查看CPU信息

cat /proc/cpuinfo 


# 查看物理CPU个数

cat /proc/cpuinfo| grep "physical id"| sort| uniq| wc -l
# 2


# 查看每个物理CPU中core的个数(即核数)

cat /proc/cpuinfo| grep "cpu cores"| uniq
# cpu cores       : 1
```

# 安装

## 运行apt命令更新软件源并安装构建Python源码所需的依赖软件

```shell
sudo apt update

sudo apt install build-essential zlib1g-dev libncurses5-dev \
libgdbm-dev libnss3-dev libssl-dev libsqlite3-dev \
libreadline-dev libffi-dev curl libbz2-dev curl -y
```

## 下载源码包

```shell
# python3 3.10.12 

curl -O https://www.python.org/ftp/python/3.10.12/Python-3.10.12.tar.xz
```

## 解压安装包

```shell
tar -xf Python-3.10.12.tar.xz
cd Python-3.10.12/
```

## 运行`configure`脚本

```shell
# 脚本将会执行大量检查，以确保系统上的所有依赖项都存在。
# --enable-optimizations选项将通过运行多个测试来优化Python二进制文件。

./configure --enable-optimizations
```

## 编译python

```shell
# x为上面获取的cpu核心数

make -j x
```

## 安装Python二进制文件

```shell
sudo make altinstall
```

## 验证版本

```shell
python3.10 --version
```


# 优化

我们建议你在[虚拟环境](https://www.myfreax.com/how-to-create-python-virtual-environments-on-ubuntu-18-04/)中使用pip安装python包。Python虚拟环境允许您将Python模块安装在特定项目的隔离位置，而不必全局安装。

这样，您不必担心会影响其他Python项目。仅当该模块没有deb的安装包时，才使用pip全局安装该模块

## 创建虚拟环境

```shell
# 创建一个文件夹
mkdir ~/my_app && cd ~/my_app

# 创建虚拟环境.venv
python3.10 -m venv .venv
```

## 激活虚拟环境

```shell
source .venv/bin/activate
```

## 退出虚拟环境

```shell
deactivate
```