# 寥廓江天 - Astro 极简博客

基于 [Astro](https://astro.build) 构建的极简主义个人博客，灵感来源于 [typewriter](https://github.com/roicort/typewriter) 风格设计。

🌐 **在线预览**: https://baixious.github.io/

---

## ✨ 特性

- 🎯 **打字机效果** - Hero 区域展示动态打字效果
- 🌓 **三主题切换** - 支持亮色/暗色/蓝色主题
- 📝 **Markdown/MDX** - 内容集合管理文章
- 🏷️ **标签系统** - 文章自动分类
- 📱 **响应式** - 完美适配各种设备
- 📰 **RSS 订阅** - 自动生成 RSS Feed

---

## 🛠️ 技术栈

- [Astro](https://astro.build/) - 静态站点生成器
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [MDX](https://mdxjs.com/) - Markdown 扩展

---

## 🚀 快速开始

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build
```

---

## 📝 写作

在 `src/content/blog/` 创建 `.md` 文件：

```markdown
---
title: '文章标题'
description: '简介'
pubDate: 2024-02-13
tags: ['标签1', '标签2']
featured: true
---

正文内容...
```

---

## 📦 构建与部署

### 本地构建

```bash
# 清理并构建
rm -rf dist
pnpm build

# 添加 .nojekyll 文件（禁用 Jekyll）
touch dist/.nojekyll
```

### 部署到 GitHub Pages

```bash
# 进入构建目录
cd dist

# 初始化 git
rm -rf .git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Deploy blog"

# 添加远程仓库（替换为你的 token）
git remote add origin https://x-access-token:YOUR_TOKEN@github.com/BaiXious/BaiXious.github.io.git

# 切换到 main 分支
git branch -M main

# 推送到 main 分支（强制更新）
git push -u origin main --force
```

### 完整部署脚本

```bash
# 一键部署脚本
cd /path/to/astro-blog
rm -rf dist
pnpm build
touch dist/.nojekyll
cd dist
rm -rf .git
git init
git add .
git commit -m "Rebuild and deploy"
git remote add origin https://x-access-token:YOUR_TOKEN@github.com/BaiXious/BaiXious.github.io.git
git branch -M main
git push -u origin main --force
```

---

## 📄 License

MIT © BaiXious
