# GT

gt(意为：get)是一个快速生成代码模板的命令行工具

## 安装 

macOS配置

```bash
# 1、下载到/usr/local/bin目录，如果需要其他目录可以自行修改
$ wget https://raw.githubusercontent.com/mouday/gt-project/main/gt.sh -O /usr/local/bin/gt

# 2、赋予执行权限
$ chmod +x /usr/local/bin/gt

# 3、使用帮助
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