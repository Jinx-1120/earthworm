# 构建阶段
FROM node:20.12.2-alpine AS builder

WORKDIR /app

COPY . .

RUN npm i -g pnpm --registry=https://registry.npmmirror.com
# 安装所有依赖（包括工作区依赖）

RUN pnpm i --registry=https://registry.npmmirror.com

# 构建 API 应用
RUN pnpm build:server

# 设置工作目录到 api 目录
WORKDIR /app/apps/api

# 暴露端口
EXPOSE 3001

# 启动命令
CMD ["pnpm", "start"]