---
title: 数据结构
description: 列表、字典与元组
sidebar:
  order: 5
---

## 列表 (Lists)

列表是可变的、有序的元素集合。

```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0]) # 访问第一个元素

# 修改元素
fruits[1] = "blackcurrant"

# 添加元素
fruits.append("orange")

# 删除元素
fruits.remove("cherry")
```

## 元组 (Tuples)

元组是**不可变**的、有序的元素集合。

```python
thistuple = ("apple", "banana", "cherry")
print(thistuple[0])

# 元组一旦创建，就不能修改（添加、删除、更改元素）
# thistuple[1] = "blackcurrant" # 这会报错
```

## 字典 (Dictionaries)

字典是用于存储键值对的数据集合。Python 3.7+ 中字典是有序的。

```python
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

print(car["brand"])

# 修改值
car["year"] = 2020

# 添加键值对
car["color"] = "red"
```

## 集合 (Sets)

集合是无序的、不重复的元素集合。

```python
thisset = {"apple", "banana", "cherry"}
thisset.add("orange")
```

## 官方文档

- [Python 数据结构](https://docs.python.org/zh-cn/3/tutorial/datastructures.html)
