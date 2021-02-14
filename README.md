
macOS配置

手动配置

```bash
$ vim ~/.bash_profile

# get template
function gt() { wget https://raw.githubusercontent.com/mouday/gt-project/main/templates/$1-template.py ;}

$ source ~/.bash_profile
```

或者

```bash
echo "function gt() { wget https://raw.githubusercontent.com/mouday/gt-project/main/templates/$1-template.py ;}" >> \
~/.bash_profile && source ~/.bash_profile
```


如果网络不通畅，可尝试查询真实IP[https://www.ipaddress.com/](https://www.ipaddress.com/)

再修改host
```bash
$ sudo vim /etc/hosts

# 查询到的真实IP地址
185.199.109.133  raw.githubusercontent.com
```