---
title: 流程控制
description: 条件判断与循环
sidebar:
  order: 4
---

## 条件判断 (If...Else)

Python 支持常见的逻辑条件。

```python
a = 33
b = 200

if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")
else:
    print("a is greater than b")
```

### 简写 If

```python
if a > b: print("a is greater than b")
```

### 简写 If...Else

```python
print("A") if a > b else print("B")
```

## While 循环

只要条件为真，while 循环就会重复执行代码块。

```python
i = 1
while i < 6:
    print(i)
    i += 1
```

### break 与 continue

- `break`: 停止循环
- `continue`: 停止当前迭代，继续下一次迭代

```python
i = 1
while i < 6:
    if i == 3:
        break
    i += 1
```

## For 循环

用于遍历序列（列表、元组、字典、集合或字符串）。

```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)
```

### range() 函数

比如生成一个数字序列。

```python
for x in range(6):
    print(x) # 打印 0 到 5
```

## 官方文档

- [Python 流程控制工具](https://docs.python.org/zh-cn/3/tutorial/controlflow.html)
