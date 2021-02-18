#!/bin/bash
# 从github下载模板文件
# version: 0.0.1

# 拆分字符串为数组
array=(`echo $1 | tr '.' ' '`)

name=${array[0]};
ext=${array[1]};

# 给定默认值
if [ ! $name ]; then
    name='list';
fi;

if [ ! $ext ]; then
    ext='txt';
fi;

# 组合文件名
filename="template-${name}.${ext}";

url=https://raw.githubusercontent.com/mouday/gt-project/main/templates/$filename;

# 下载文件
if [ $filename == 'template-list.txt' ]; then
    echo 'eg: gt <filename>';
fi

curl $url;
