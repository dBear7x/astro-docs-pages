---
title: Pandas 基础
description: 数据分析与处理
sidebar:
  order: 8
---

## 什么是 Pandas？

Pandas 是基于 NumPy 构建的数据分析工具，提供了高效地操作大型数据集所需的工具。

## 安装

```bash
pip install pandas
```

## 导入 Pandas

```python
import pandas as pd
```

## 核心数据结构

### Series

一维数组，类似于带有标签的列表。

```python
data = [1, 2, 3]
s = pd.Series(data)
print(s)
```

### DataFrame

二维表格数据，类似于 Excel 表格。

```python
data = {
  'Name': ['Tom', 'Jerry', 'Mickey'],
  'Age': [20, 22, 25]
}
df = pd.DataFrame(data)
print(df)
```

## 数据查看

```python
df.head() # 查看前 5 行
df.info() # 查看数据基本信息
df.describe() # 统计摘要
```

## 读取与保存数据

Pandas 支持多种数据格式，最常用的是 CSV。

### 读取 CSV

```python
df = pd.read_csv('data.csv')
```

### 保存 CSV

```python
df.to_csv('output.csv', index=False)
```

## 数据筛选

```python
# 筛选 Age 大于 21 的行
filtered_df = df[df['Age'] > 21]
print(filtered_df)
```

## 官方文档

- [Pandas 官方文档](https://pandas.pydata.org/docs/)
- [Pandas 快速入门](https://pandas.pydata.org/docs/user_guide/10min.html)
