#! /usr/bin/evn sh 

# 确保脚本抛出错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd .vuepress/dist

# 如果发布到自定义的域名
# echo 'vuepress-theme-note.renhj.org' > CNAME

git init 
git add -A 
git commit -m "deploy"

# 发布到https://<username>.github.io/<repo>
git push -f git@jackRay-c:JackRay-C/vuepress-theme-note.git master:gh-pages


cd -