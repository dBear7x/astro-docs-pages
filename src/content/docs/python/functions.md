---
title: 函数与模块
description: 代码复用与模块化
sidebar:
  order: 6
---

## 定义函数

使用 `def` 关键字定义函数。

```python
def my_function():
    print("Hello from a function")

my_function() # 调用函数
```

## 参数 (Arguments)

```python
def my_function(fname):
    print(fname + " Refsnes")

my_function("Emil")
my_function("Tobias")
```

### 默认参数值

```python
def my_function(country = "Norway"):
    print("I am from " + country)

my_function("Sweden")
my_function()
```

##以此返回值

使用 `return` 语句返回值。

```python
def my_function(x):
    return 5 * x

print(my_function(3))
```

## Lambda 函数

一种小的匿名函数。

```python
x = lambda a : a + 10
print(x(5))
```

## 模块 (Modules)

模块是一个包含一组函数和变量的文件。

### 创建模块

保存代码为 `mymodule.py`:

```python
def greeting(name):
    print("Hello, " + name)
```

### 使用模块

```python
import mymodule

mymodule.greeting("Jonathan")
```

### 内置模块

Python 有许多内置模块，例如 `platform`:

```python
import platform

x = platform.system()
print(x)
```

## 官方文档

- [Python 定义函数](https://docs.python.org/zh-cn/3/tutorial/controlflow.html#defining-functions)
- [Python 模块](https://docs.python.org/zh-cn/3/tutorial/modules.html)
