---
title: Setup a VLESS Server
description: How to setup a VPN server with VLESS
---

# How to Build a Proxy/VPN Service with Nginx + Xray (VLESS) + Cloudflare + Certbot

Suitable for Ubuntu 20.04 / 22.04 / 24.04. This guide covers a Cloudflare-enabled setup using the VLESS protocol with WebSocket transport and Certbot for TLS certificates. The example domain used throughout is `videos.example.com`.

---

## 1. Prerequisites

1. A VPS (recommended: latest Ubuntu LTS)
2. A domain name pointed to the server's public IP
   - If you use Cloudflare, add a DNS record for the domain and (optionally) enable the orange cloud.
   - Ensure `videos.example.com` resolves to your server.

---

## 2. Update the system and install required packages

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install nginx wget curl lsof -y
```

## 3. Obtain a TLS certificate with Certbot

1. Install Certbot

```bash
sudo apt install certbot python3-certbot-nginx -y
```

2. Configure a temporary Nginx site for HTTP-01 validation

Create the following file `/etc/nginx/sites-available/videos.example.com`:

```nginx
server {
    listen 80;
    server_name videos.example.com;

    location / {
        return 200 'acme challenge.';
        add_header Content-Type text/plain;
    }
}
```

Then enable and reload Nginx:

```bash
sudo ln -sf /etc/nginx/sites-available/videos.example.com /etc/nginx/sites-enabled/videos.example.com
sudo nginx -t
sudo systemctl reload nginx
```

3. Request a certificate with Certbot (Nginx plugin)

```bash
sudo certbot --nginx -d videos.example.com --agree-tos --register-unsafely-without-email --redirect
```

Certificates are typically stored at `/etc/letsencrypt/live/videos.example.com/fullchain.pem` with the private key at `/etc/letsencrypt/live/videos.example.com/privkey.pem`.

## 4. Deploy Xray (VLESS + WebSocket)

1. (Optional) Use the official one-line installer

```bash
bash <(curl -Ls https://raw.githubusercontent.com/XTLS/Xray-install/main/install-release.sh)
```

2. Edit the Xray configuration file at `/usr/local/etc/xray/config.json`. Example configuration:

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

Note: Generate a UUID on the server with `uuidgen` and replace `your-uuid-here`.

Restart Xray:

```bash
sudo systemctl restart xray
```

## 5. Configure Nginx reverse proxy for VLESS (HTTPS)

Create or replace the Nginx site configuration `/etc/nginx/sites-available/videos.example.com` with the following:

```nginx
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

Then enable and reload Nginx:

```bash
sudo ln -sf /etc/nginx/sites-available/videos.example.com /etc/nginx/sites-enabled/videos.example.com
sudo nginx -t
sudo systemctl reload nginx
```

## 6. Open firewall / security group ports

Ensure ports 80 and 443 are open on the server:

```bash
sudo ufw allow 80
sudo ufw allow 443
sudo ufw reload
```

If you are using a cloud provider (AWS, Alibaba Cloud, Tencent Cloud, etc.), also open ports 80/443 in the security group or cloud firewall.

## 7. Cloudflare SSL/TLS mode recommendation

Use `Full` or `Full (Strict)`. Do not use `Flexible`.

## 8. Example client configuration (v2rayN / Shadowrocket)

- Address: videos.example.com
- Port: 443
- ID / UUID: same as in the Xray configuration
- Protocol: VLESS
- Transport: WebSocket
- TLS: enabled
- WebSocket path: /rayws
- SNI / Host: videos.example.com

## 9. Maintenance

- Test certificate auto-renewal:

```bash
sudo certbot renew --dry-run
```

- Check Xray service status:

```bash
sudo systemctl status xray
```

## 10. Troubleshooting

- 521 error: usually caused by port not listening, Nginx configuration issues, security group/firewall blocking, Nginx not running, or TLS misconfiguration.
- Xray logs: `/var/log/xray/access.log`, `/var/log/xray/error.log`
- Nginx logs: `/var/log/nginx/error.log`

---

This guide is for educational purposes only. When using proxy/VPN technologies, comply with local laws and regulations.
