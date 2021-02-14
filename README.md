
macOS配置

手动配置

```bash

$ wget https://raw.githubusercontent.com/mouday/gt-project/main/gt.sh -O /usr/local/bin/gt

$ chmod +x /usr/local/bin/gt

$ gt
```


如果网络不通畅，可尝试查询真实IP[https://www.ipaddress.com/](https://www.ipaddress.com/)

再修改host
```bash
$ sudo vim /etc/hosts

# 查询到的真实IP地址
185.199.109.133  raw.githubusercontent.com
```