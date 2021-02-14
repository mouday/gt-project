#!/bin/bash
# 从github下载模板文件

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
filename="${name}-template.${ext}";
echo "filename: ${filename}";

url=https://raw.githubusercontent.com/mouday/gt-project/main/templates/$filename;

# 下载文件
if [ $filename == 'list-template.txt' ]; then
    echo 'gt <filename>';
    curl $url;
else
    wget $url;
fi

