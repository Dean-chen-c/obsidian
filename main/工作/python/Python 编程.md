
## 基础数据类型

- 数值（Numbers）
	- int 有符号整型
	- float 浮点型
	- bool 布尔型
	- complex 复数
- 字符串（String）
- 列表（List）
- 元组（Tuple）
- 字典（Dictionary）
- 集合（Set）

### 变量赋值

- Python 中的变量赋值`不需要类型声明`。
- 每个变量在内存中创建，都包括变量的标识，名称和数据这些信息。
- 每个变量在`使用前都必须赋值`，变量赋值以后该变量才会被创建。
- 等号 **=** 用来给变量赋值。

### 删除引用

del num,\[,num2\[,num3\[....,numN]]]


### 数值

|int|float|complex|
|---|---|---|
|10|0.0|3.14j|
|100|15.20|45.j|
|-786|-21.9|9.322e-36j|
|080|32.3e+18|.876j|
|-0490|-90.|-.6545+0J|
|-0x260|-32.54e100|3e+26J|
|0x69|70.2E-12|4.53e-7j|

### 字符串

字串列表有2种取值顺序:

- 从左到右索引默认0开始的，最大范围是字符串长度少1
- 从右到左索引默认-1开始的，最大范围是字符串开头

#### 截取相应的字符串

 **\[头下标:尾下标:步长]**

`获取的子字符串包含头下标的字符，但不包含尾下标的字符`

```python
s = 'ShowMeAI'
s[6:8] # 'AI'

print(str) # 输出完整字符串
print(str[0]) # 输出字符串中的第一个字符
print(str[2:7]) # 输出字符串中第三个至第六个之间的字符串
print(str[2:7:2]) # 输出字符串中第三个至第八个之间（间隔一个位置）的截取字符串
print(str[2:]) # 输出从第三个字符开始的字符串
print(str * 2) # 输出字符串两次
print(str + " Awesome") # 输出连接的字符串

ShowMeAI
S
owMeA
oMA
owMeAI
ShowMeAIShowMeAI
ShowMeAI Awesome
```

### 列表

列表可以完成大多数集合类的数据结构实现。它支持字符，数字，字符串甚至可以包含列表（即嵌套）。

```python
list = [ 'ShowMeAI', 786 , 2.23, 'show', 70.2 ]
tinylist = [123, 'show']

print(list) # 输出完整列表
print(list[0]) # 输出列表的第一个元素
print(list[1:3]) # 输出第二个至第三个元素 
print(list[2:]) # 输出从第三个开始至列表末尾的所有元素
print(tinylist * 2) # 输出列表两次
print(list + tinylist) # 打印组合的列表

['ShowMeAI', 786, 2.23, 'show', 70.2]
ShowMeAI
[786, 2.23]
[2.23, 'show', 70.2]
[123, 'show', 123, 'show']
['ShowMeAI', 786, 2.23, 'show', 70.2, 123, 'show']
```


### 元组

类似于 List（列表），元组用 **()** 标识。内部元素用逗号隔开。但是元组不能二次赋值，相当于`只读列表`。

```python
tuple = ( 'ShowMeAI', 786 , 2.23, 'show', 70.2 )
tinytuple = (123, 'show')

print(tuple) # 输出完整元组
print(tuple[0]) # 输出元组的第一个元素
print(tuple[1:3]) # 输出第二个至第四个（不包含）的元素
print(tuple[2:]) # 输出从第三个开始至列表末尾的所有元素
print(tinytuple * 2) # 输出元组两次
print(tuple + tinytuple) # 打印组合的元组

('ShowMeAI', 786, 2.23, 'show', 70.2)
ShowMeAI
(786, 2.23)
(2.23, 'show', 70.2)
(123, 'show', 123, 'show')
('ShowMeAI', 786, 2.23, 'show', 70.2, 123, 'show')
```

### 字典

字典当中的元素是通过键来存取的，而不是通过偏移存取。

```python
dict = {}
dict['one'] = "This is one"
dict[2] = "This is two"
tinydict = {'name': 'ShowMeAI','code':3456, 'dept': 'AI'}

print(dict['one']) # 输出键为'one' 的值
print(dict[2]) # 输出键为 2 的值
print(tinydict) # 输出完整的字典
print(tinydict.keys()) # 输出所有键
print(tinydict.values()) # 输出所有值

This is one
This is two
{'name': 'ShowMeAI', 'code': 3456, 'dept': 'AI'}
dict_keys(['name', 'code', 'dept'])
dict_values(['ShowMeAI', 3456, 'AI'])
```


### 转换

|函数|描述|
|---|---|
|int(x [,base])|将x转换为一个整数|
|long(x [,base] )|将x转换为一个长整数|
|float(x)|将x转换到一个浮点数|
|complex(real [,imag])|创建一个复数|
|str(x)|将对象 x 转换为字符串|
|repr(x)|将对象 x 转换为表达式字符串|
|eval(str)|用来计算在字符串中的有效Python表达式,并返回一个对象|
|tuple(s)|将序列 s 转换为一个元组|
|list(s)|将序列 s 转换为一个列表|
|set(s)|转换为可变集合|
|dict(d)|创建一个字典。d 必须是一个序列 (key,value)元组。|
|frozenset(s)|转换为不可变集合|
|chr(x)|将一个整数转换为一个字符|
|unichr(x)|将一个整数转换为Unicode字符|
|ord(x)|将一个字符转换为它的整数值|
|hex(x)|将一个整数转换为一个十六进制字符串|
|oct(x)|将一个整数转换为一个八进制字符串|

## 运算符

![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1704416918000d6u8va.png)

### 算术运算符

以下假设变量： a=10，b=20：

|运算符|描述|实例|
|---|---|---|
|+|加 - 两个对象相加|a + b 输出结果 30|
|-|减 - 得到负数或是一个数减去另一个数|a - b 输出结果 -10|
|\*|乘 - 两个数相乘或是返回一个被重复若干次的字符串|a * b 输出结果 200|
|/|除 - x除以y|b / a 输出结果 2|
|%|取模 - 返回除法的余数|b % a 输出结果 0|
|\*\*|幂 - 返回x的y次幂|a**b 为10的20次方， 输出结果 100000000000000000000|
|//|取整除 - 返回商的整数部分（**向下取整**）|`>>> 9//2 4 >>> -9//2 -5`|

### 比较运算符

|运算符|描述|实例|
|---|---|---|
|\==|等于 - 比较对象是否相等|(a == b) 返回 False。|
|!=|不等于 - 比较两个对象是否不相等|(a != b) 返回 true.|
|<>|不等于 - 比较两个对象是否不相等。**python3 已废弃。**|(a <> b) 返回 true。这个运算符类似 != 。|
|>|大于 - 返回x是否大于y|(a > b) 返回 False。|
|<|小于 - 返回x是否小于y。所有比较运算符返回1表示真，返回0表示假。这分别与特殊的变量True和False等价。|(a < b) 返回 true。|
|>=|大于等于 - 返回x是否大于等于y。|(a >= b) 返回 False。|
|<=|小于等于 - 返回x是否小于等于y。|(a <= b) 返回 true。|

### 赋值运算符

|运算符|描述|实例|
|---|---|---|
|=|简单的赋值运算符|c = a + b 将 a + b 的运算结果赋值为 c|
|+=|加法赋值运算符|c += a 等效于 c = c + a|
|-=|减法赋值运算符|c -= a 等效于 c = c - a|
|\*=|乘法赋值运算符|c \*= a 等效于 c = c * a|
|=|除法赋值运算符|c /= a 等效于 c = c / a|
|%=|取模赋值运算符|c %= a 等效于 c = c % a|
|\*\*=|幂赋值运算符|c \*\*= a 等效于 c = c \*\* a|
|\/\/\=|取整除赋值运算符|c \/\/= a 等效于 c = c \/\/ a|


### 逻辑运算符

- and
- or
- not
