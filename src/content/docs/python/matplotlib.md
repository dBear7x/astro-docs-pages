---
title: Matplotlib 基础
description: 数据可视化
sidebar:
  order: 9
---

## 什么是 Matplotlib？

Matplotlib 是 Python 中最常用的绘图库，可以创建各种静态、动态、交互式的图表。

## 安装

```bash
pip install matplotlib
```

## 导入

通常还是需要导入 Pyplot 子模块。

```python
import matplotlib.pyplot as plt
import numpy as np
```

## 绘制折线图

```python
x = np.array([0, 6])
y = np.array([0, 250])

plt.plot(x, y)
plt.show()
```

## 绘制散点图

```python
x = np.array([5,7,8,7,2,17,2,9,4,11,12,9,6])
y = np.array([99,86,87,88,111,86,103,87,94,78,77,85,86])

plt.scatter(x, y)
plt.show()
```

## 绘制柱状图

```python
x = np.array(["A", "B", "C", "D"])
y = np.array([3, 8, 1, 10])

plt.bar(x,y)
plt.show()
```

## 自定义图表

你可以添加标题、标签和网格。

```python
plt.plot(x, y)
plt.title("My Plot")
plt.xlabel("X Axis")
plt.ylabel("Y Axis")
plt.grid()
plt.show()
```

## 官方文档

- [Matplotlib 官方文档](https://matplotlib.org/stable/)
- [Matplotlib 教程](https://matplotlib.org/stable/tutorials/index.html)
