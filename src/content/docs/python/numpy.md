---
title: NumPy 基础
description: 科学计算核心库
sidebar:
  order: 7
---

## 什么是 NumPy？

NumPy (Numerical Python) 是 Python 科学计算的核心库，提供了高性能的多维数组对象以及处理这些数组的工具。

## 安装

```bash
pip install numpy
```

## 导入 NumPy

```python
import numpy as np
```

## 创建数组

### 从列表创建

```python
arr = np.array([1, 2, 3, 4, 5])
print(arr)
```

### 多维数组

```python
arr_2d = np.array([[1, 2, 3], [4, 5, 6]])
print(arr_2d)
```

## 数组索引与切片

索引操作类似于 Python 列表，但功能更强大。

```python
arr = np.array([1, 2, 3, 4])
print(arr[0]) # 输出 1
print(arr[1:3]) # 输出 [2, 3]
```

## 常用属性

- `ndim`: 维度
- `shape`: 形状（行数，列数）
- `size`: 元素总数
- `dtype`: 元素类型

```python
print(arr_2d.shape) # 输出 (2, 3)
```

## 常用操作

### 数学运算

NumPy 支持对数组进行逐元素的数学运算。

```python
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(a + b) # 输出 [5, 7, 9]
print(a * 2) # 输出 [2, 4, 6]
```

### 生成数据

```python
zeros = np.zeros((2, 3)) # 全 0 数组
ones = np.ones((2, 3))   # 全 1 数组
rng = np.arange(10)      # 类似于 range() -> [0, 1, ..., 9]
```

## 官方文档

- [NumPy 官方文档](https://numpy.org/doc/stable/)
- [NumPy 快速入门教程](https://numpy.org/doc/stable/user/quickstart.html)
