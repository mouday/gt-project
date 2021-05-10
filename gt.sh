#!/bin/bash
# 从github下载模板文件
# version=0.0.2
# 测试：cat gt.sh > /usr/local/bin/gt

# 可配置的参数，设置默认值
# GT_HOME='~/.gt'
# GT_TEMPLATE_DIR='~/.gt/templates'
# GT_URL="https://raw.githubusercontent.com/mouday/gt-project/main/templates"

###############################
# 处理输入参数
# eg: $ gt flask.py
###############################

filename=''; # 文件名
force=0;     # 强制

# 接收可选参数 -f
while getopts "f:" opt; do
  case $opt in
    f)
      filename=$OPTARG
      force=1
      ;;
    \?)
      echo "Invalid option: -$OPTARG" 
      ;;
  esac
done

# 拆分字符串为数组
if [ ! $filename ]; then
    filename=$1;
fi;

array=(`echo $filename | tr '.' ' '`)

name=${array[0]};
ext=${array[1]};

# echo $name;
# echo $ext;

# 给定默认值
if [ ! $name ]; then
    name='list';
fi;

if [ ! $ext ]; then
    ext='txt';
fi;

# 模板家目录
if [ -z "$GT_HOME" ]; then
  GT_HOME="${HOME}/.gt"
fi

# 模板缓存目录
if [ -z "$GT_TEMPLATE_DIR" ]; then
  GT_TEMPLATE_DIR="${GT_HOME}/templates"
fi

# 模板下载地址
if [ -z "$GT_URL" ]; then
  GT_URL="https://raw.githubusercontent.com/mouday/gt-project/main/templates"
fi

file_template_dir="${GT_TEMPLATE_DIR}/${ext}"
file_template_path="${file_template_dir}/${name}.${ext}"
file_template_url="${GT_URL}/${ext}/${name}.${ext}"

# echo $GT_HOME
# echo $GT_TEMPLATE_DIR
# echo $file_template_path
# echo $file_template_url
# echo $force

###############################
# 下载模板
###############################

download(){
    if [ ! -d "$file_template_dir" ]; then
        mkdir -p $file_template_dir
    fi

    curl -L $file_template_url > $file_template_path;
}

# 文件存在则不下载
if [[ $force == 1 || ! -f "$file_template_path" ]]; then
#   echo '不存在'
  download;
fi

cat $file_template_path;
