#!/usr/bin/env bash
npm config get registry # 检查仓库镜像库
npm config set registry=https://registry.npmjs.org
echo '请进行登录相关操作：'
  "name": "@lisen6/create-smarty-app",
npm login # 登陆
echo "-------publishing-------"
npm publish # 发布
npm config set registry=https://registry.npm.taobao.org # 设置为淘宝镜像
echo "发布完成"
exit