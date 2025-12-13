---
title: SciPy 基础
description: 高级科学计算
sidebar:
  order: 10
---

## 什么是 SciPy？

SciPy 是一个开源的 Python 算法库和数学工具包，建立在 NumPy 之上。它包含用于优化、线性代数、积分、插值、特殊函数、FFT、信号和图像处理等的模块。

## 安装

```bash
pip install scipy
```

## 常用模块

- `scipy.constants`: 物理和数学常数
- `scipy.optimize`: 优化算法
- `scipy.sparse`: 稀疏矩阵
- `scipy.interpolate`: 插值
- `scipy.fft`: 快速傅里叶变换
- `scipy.signal`: 信号处理

## 示例：使用常量

```python
from scipy import constants

print(constants.pi)
print(constants.c) # 光速
print(constants.h) # 普朗克常数
```

## 示例：优化 (寻找最小值)

寻找方程 $x^2 + x + 2$ 的最小值。

```python
from scipy.optimize import minimize

def eqn(x):
  return x**2 + x + 2

mymin = minimize(eqn, 0, method='BFGS')

print(mymin)
```

## 示例：稀疏矩阵

```python
import numpy as np
from scipy.sparse import csr_matrix

arr = np.array([0, 0, 0, 0, 0, 1, 1, 0, 2])
print(csr_matrix(arr))
```

## 官方文档

- [SciPy 官方文档](https://docs.scipy.org/doc/scipy/)
- [SciPy 教程](https://docs.scipy.org/doc/scipy/tutorial/index.html)
