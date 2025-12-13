---
title: 基础语法
description: Python 变量与数据类型
sidebar:
  order: 3
---

## 注释

Python 中的注释以 `#` 字符开头。

```python
# 这是一个单行注释
print("Hello") # 这也是注释
```

## 变量

Python 中的变量不需要声明。变量的赋值操作即是声明和定义的过程。

```python
x = 5
y = "Hello"
print(x)
print(y)
```

## 数据类型

Python 拥有丰富的数据类型。

### 数字 (Numbers)

支持整数 (int)、浮点数 (float) 和复数 (complex)。

```python
a = 10      # int
b = 3.14    # float
c = 1 + 2j  # complex
```

### 字符串 (Strings)

可以使用单引号或双引号。

```python
str1 = 'Hello'
str2 = "World"
# 多行字符串
str3 = """
这是一个
多行字符串
"""
```

### 布尔值 (Booleans)

只有两个值：`True` 和 `False`。

```python
is_python_fun = True
is_coding_hard = False
```

## 类型转换

可以使用内置函数进行类型转换。

```python
x = 1    # int
y = 2.8  # float

# 转换为 int
a = int(y) # a 变为 2

# 转换为 float
b = float(x) # b 变为 1.0

# 转换为 string
c = str(x) # c 变为 "1"
```

## 格式化字符串 (f-strings)

Python 3.6+ 支持 f-strings，是一种非常方便的字符串格式化方式。

```python
name = "Alice"
age = 30
print(f"My name is {name} and I am {age} years old.")
```

## 官方文档

- [Python 内置类型](https://docs.python.org/zh-cn/3/library/stdtypes.html)
