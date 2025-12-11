---
title: 配置VPN服务器
description: How to setup a VPN server with VLESS
---

# 使用 Nginx+V2Ray（VLESS）+Cloudflare+Certbot 构建科学上网服务教程

适合 Ubuntu 20.04/22.04/24.04，支持 Cloudflare 代理，域名为 `videos.example.com`，VLESS 协议，使用 certbot 自动获取证书。

---

## 一、准备

1. **服务器（VPS）一台，推荐 Ubuntu 最新版**
2. **域名（已解析至服务器公网 IP）**
   - Cloudflare 用户，DNS 记录指向服务器，建议“橙色云”已启用。
   - 设置好 `videos.example.com` 指向服务器。

---

## 二、更新系统并安装 Nginx、wget、curl、lsof

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install nginx wget curl lsof -y
```

## 三、用 Certbot 获取泛域名 SSL 证书

1. **安装 Certbot**

```bash
sudo apt install certbot python3-certbot-nginx -y
```

2. **配置一个临时的 Nginx 验证站点（便于 HTTP-01 验证）**

```bash
## /etc/nginx/sites-available/videos.example.com
server {
    listen 80;
    server_name videos.example.com;

    location / {
        return 200 'acme challenge.';
        add_header Content-Type text/plain;
    }
}
```

```bash

sudo ln -sf /etc/nginx/sites-available/videos.example.com /etc/nginx/sites-enabled/videos.example.com
sudo nginx -t
sudo systemctl reload nginx
```

3. **使用 Certbot 获取证书**

```bash
sudo certbot --nginx -d videos.example.com --agree-tos --register-unsafely-without-email --redirect
```

证书通常位于 `/etc/letsencrypt/live/videos.example.com/fullchain.pem`，私钥位于 `/etc/letsencrypt/live/videos.example.com/privkey.pem`。

## 四、部署 Xray（VLESS + WebSocket）

1. **使用官方一键安装脚本（可选）**

```bash
bash <(curl -Ls https://raw.githubusercontent.com/XTLS/Xray-install/main/install-release.sh)
```

2. **编辑 Xray 配置文件 `/usr/local/etc/xray/config.json`（示例）：**

```json
{
  "inbounds": [
    {
      "port": 10000,
      "listen": "127.0.0.1",
      "protocol": "vless",
      "settings": {
        "clients": [
          {
            "id": "your-uuid-here",
            "level": 0,
            "email": "your@email.com"
          }
        ],
        "decryption": "none"
      },
      "streamSettings": {
        "network": "ws",
        "wsSettings": {
          "path": "/rayws"
        }
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom",
      "settings": {}
    }
  ]
}
```

提示：使用 `uuidgen` 在服务器上生成 UUID，并将 `your-uuid-here` 替换为生成的 UUID。

重启 Xray：

```bash
sudo systemctl restart xray
```

## 五、配置 Nginx 反向代理 VLESS（HTTPS）

创建或替换 Nginx 配置为：

```bash
##/etc/nginx/sites-available/videos.example.com
server {
    listen 443 ssl http2;
    server_name videos.example.com;

    ssl_certificate /etc/letsencrypt/live/videos.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/videos.example.com/privkey.pem;

    location /rayws {
        proxy_pass http://127.0.0.1:10000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }

    location / {
        return 200 'Welcome to videos.example.com!';
        add_header Content-Type text/plain;
    }
}

server {
    listen 80;
    server_name videos.example.com;
    return 301 https://$host$request_uri;
}
```

```bash

sudo ln -sf /etc/nginx/sites-available/videos.example.com /etc/nginx/sites-enabled/videos.example.com
sudo nginx -t
sudo systemctl reload nginx
```

## 六、放行防火墙 / 安全组端口

确认服务器的 80 和 443 端口已放行：

```bash
sudo ufw allow 80
sudo ufw allow 443
sudo ufw reload
```

如果使用云厂商（如 AWS、阿里云、腾讯云 等），请在云控制台的安全组或防火墙规则中放通 80/443。

## 七、Cloudflare SSL/TLS 模式建议

建议使用「Full」或「Full (Strict)」，不建议使用「Flexible」。

## 八、客户端示例配置（以 v2rayN 或 Shadowrocket 为例）

- 地址（Address）：videos.example.com
- 端口（Port）：443
- ID/UUID：与 Xray 配置一致
- 协议（Protocol）：VLESS
- 传输（Transport）：WebSocket
- TLS：开启
- ws 路径（Path）：/rayws
- SNI/Host：videos.example.com

## 九、后续管理

- 测试证书自动续期：

```bash
sudo certbot renew --dry-run
```

- 查看 Xray 服务状态：

```bash
sudo systemctl status xray
```

## 十、常见问题排查

- 521 错误：通常为端口未监听、Nginx 配置或安全组/防火墙未放行、Nginx 未启动或 TLS 配置错误。
- 查看 Xray 日志：`/var/log/xray/access.log`、`/var/log/xray/error.log`
- 查看 Nginx 日志：`/var/log/nginx/error.log`

---

本文仅供学习交流，使用科学上网技术请遵守当地法律法规。
