---
title: 环境搭建
description: 安装 Python 和配置开发环境
sidebar:
  order: 2
---

## 安装 Python

### Windows

1. 访问 [Python 官方网站](https://www.python.org/downloads/) 下载最新版本的 Python 安装程序。
2. 运行安装程序。**重要提示**：务必勾选 "Add Python to PATH" 选项。
3. 点击 "Install Now" 完成安装。

### macOS

macOS 通常自带 Python，但建议安装最新版本。推荐使用 Homebrew 安装：

```bash
brew install python
```

### Linux

大多数 Linux 发行版预装了 Python。如果需要安装，可以使用包管理器：

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install python3

# CentOS/RHEL
sudo yum install python3
```

## 验证安装

打开终端（Terminal）或命令提示符（Command Prompt），输入以下命令：

```bash
python --version
# 或者
python3 --version
```

如果显示了版本号（例如 `Python 3.10.x`），则说明安装成功。

## 配置编辑器 (VS Code)

推荐使用 Visual Studio Code (VS Code) 作为 Python 开发环境。

1. **下载 VS Code**: 访问 [code.visualstudio.com](https://code.visualstudio.com/) 下载并安装。
2. **安装 Python 插件**:
   - 打开 VS Code。
   - 点击左侧扩展图标 (Extensions)。
   - 搜索 "Python"。
   - 安装由 Microsoft 开发的 Python 扩展。

## 运行你的第一个程序

1. 在 VS Code 中创建一个新文件，命名为 `hello.py`。
2. 输入代码：
   ```python
   print("Hello, Python!")
   ```
3. 在 VS Code 中右键点击编辑区域，选择 "Run Python File in Terminal"（在终端中运行 Python 文件）。
4. 你应该会在下方终端看到输出：`Hello, Python!`。

## 官方文档

- [Python 下载页面](https://www.python.org/downloads/)
- [VS Code Python 扩展文档](https://code.visualstudio.com/docs/python/python-tutorial)
