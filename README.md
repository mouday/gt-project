# GT

gt(意为：get)是一个快速生成单文件代码模板的命令行工具

## 安装 

macOS配置

```bash
# 1、下载到/usr/local/bin目录，如果需要其他目录可以自行修改
$ wget https://raw.githubusercontent.com/mouday/gt-project/main/gt.sh -O /usr/local/bin/gt

# 或者使用镜像加速
$ wget https://raw.staticdn.net/mouday/gt-project/main/gt.sh -O /usr/local/bin/gt

# 2、赋予执行权限
$ chmod +x /usr/local/bin/gt

# 3、下载flask模板文件
$ gt flask.py

# 强制从远端获取
$ gt -f flask.py

# 4、使用帮助, 查看可下载目录
$ gt

```

## 问题及解决

1、如果网络不通畅，无法连接 raw.githubusercontent.com

可尝试查询真实IP[https://www.ipaddress.com/](https://www.ipaddress.com/)

并修改hosts 文件
```bash
$ sudo vim /etc/hosts

# 查询到的真实IP地址
185.199.109.133  raw.githubusercontent.com
```

约定：目录名和文件扩展名保持一致，用于分类管理

默认的参数配置，可通过修改环境变量重新配置
```bash
GT_HOME='~/.gt'
GT_TEMPLATE_DIR='~/.gt/templates'
GT_URL="https://raw.githubusercontent.com/mouday/gt-project/main/templates"
```

GT_URL可以供选择的加速地址
```
https://raw.staticdn.net/mouday/gt-project/main/templates

https://github3.mk-proxy.ml/-----https://raw.githubusercontent.com/mouday/gt-project/main/templates

https://gh.api.99988866.xyz/https://raw.githubusercontent.com/mouday/gt-project/main/templates

```