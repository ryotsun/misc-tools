#!/bin/bash
if [ $# != 2 ]; then
    echo "usage: $0 file_name char_max_length" 1>&2
    exit 0
fi

dir=`dirname $1`
file_name=`basename $1`
temp_csv_file="temp_${file_name}"
char_max_length=$2
rm -f ${temp_csv_file}

cat "${dir}/${file_name}" | while read line
do
  text=`echo $line | cut -d"," -f3|tr -d "　"`
  if [ "$description" ]; then
    new_line=`echo ${line} | tr -d "　"`
    # text を指定文字数で分割してタブでつなげる
    new_text=`echo "${text}" | fold -${char_max_length} | paste -s -d "\t" -`
    # 一旦ファイルに書き出し
    echo "${new_line}" | sed -e "s/${text}/${new_text}/g" >> ${temp_csv_file}
  else
    echo "${line}" >> ${temp_csv_file}
  fi
done

# タブを \n に置換する
# 「\n」の文字列をつけるのが難しかったので苦肉の策
sed -i -e "s/\t/\\\n/g" ${temp_csv_file}
