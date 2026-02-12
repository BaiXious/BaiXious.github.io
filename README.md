# 寥廓江天 - Astro 极简博客

[![Astro](https://img.shields.io/badge/Astro-4.16-blue?logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> 一个基于 Astro 框架构建的极简主义个人博客，灵感来源于 [typewriter](https://github.com/roicort/typewriter) 风格设计。

🌐 **在线预览**: https://baixious.github.io/blog202601/

---

## ✨ 功能特性

- 🎯 **打字机效果首页** - Hero 区域展示 "寥廓江天万里霜" 动态打字效果
- 🌓 **三种主题切换** - 支持亮色、暗色、蓝色三种主题，自动持久化存储
- 📝 **Markdown/MDX 支持** - 使用内容集合管理文章，支持 YAML Frontmatter
- 🏷️ **标签分类系统** - 文章标签自动归类，支持标签筛选
- ⭐ **精选文章标记** - Featured Post 特殊展示
- 📱 **响应式设计** - 移动端优先，完美适配各种屏幕
- 🔍 **搜索功能预留** - 已集成 Pagefind 搜索（需额外配置）
- 📰 **RSS 订阅** - 自动生成 RSS Feed
- 🔗 **SEO 优化** - OpenGraph、Twitter 卡片、规范链接
- 🖨️ **代码高亮** - 使用 Shiki 实现美观的代码块

---

## 🎨 设计风格

- **极简主义** - 大量留白，专注内容阅读体验
- **高对比度** - 黑白灰为主色调，蓝色作为强调色
- **字体搭配** - 标题使用 Source Serif 4 衬线字体，正文使用 Inter 无衬线字体
- **卡片式布局** - 圆角设计，微妙阴影，悬停动效

---

## 🛠️ 技术栈

- **[Astro](https://astro.build/)** - 现代静态站点生成器
- **[Tailwind CSS](https://tailwindcss.com/)** - 实用优先的 CSS 框架
- **[MDX](https://mdxjs.com/)** - Markdown + JSX 扩展
- **[Shiki](https://shiki.matsu.io/)** - 代码语法高亮
- **[Pagefind](https://pagefind.app/)** - 静态搜索（可选）

---

## 🚀 快速开始

### 前置要求

- Node.js 18+ 或 pnpm

### 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用 npm
npm install
```

### 开发模式

```bash
pnpm dev
# 或
npm run dev
```

访问 http://localhost:4321/blog202601

### 构建

```bash
pnpm build
# 或
npm run build
```

构建输出位于 `dist/` 目录。

---

## 📝 写作指南

### 创建新文章

在 `src/content/blog/` 目录下创建 `.md` 或 `.mdx` 文件：

```markdown
---
title: '文章标题'
description: '文章简介'
pubDate: 2024-02-12
updatedDate: 2024-02-12  # 可选
heroImage: '/hero.jpg'    # 可选
tags: ['标签1', '标签2']
featured: true            # 标记为精选文章
---

# 正文内容

支持 Markdown 语法和 **MDX** 组件！
```

### Frontmatter 字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| title | string | ✅ | 文章标题 |
| description | string | ✅ | 文章描述 |
| pubDate | Date | ✅ | 发布日期 |
| updatedDate | Date | ❌ | 更新日期 |
| heroImage | string | ❌ | 封面图片路径 |
| tags | string[] | ❌ | 标签数组 |
| featured | boolean | ❌ | 是否为精选文章 |

---

## 🎨 自定义配置

### 站点信息

编辑 `src/utils/config.ts`：

```typescript
export const site = {
  title: '寥廓江天',
  description: '一个极简主义者的数字花园',
  url: 'https://baixious.github.io/blog202601',
  author: 'BaiXious',
  language: 'zh-CN',
};
```

### 主题颜色

编辑 `src/styles/global.css` 中的 CSS 变量：

```css
:root {
  --color-bg: #ffffff;
  --color-fg: #171717;
  --color-muted: #737373;
  --color-accent: #0ea5e9;
  --color-card: #f5f5f5;
  --color-border: #e5e5e5;
}
```

---

## 📦 部署

### GitHub Pages

```bash
# 构建
pnpm build

# 进入构建目录
cd dist

# 初始化并推送
git init
git add .
git commit -m "Deploy blog"
git remote add origin https://github.com/username/username.github.io.git
git checkout -b blog202601
git push -u origin blog202601 --force
```

### Vercel / Netlify

直接连接 Git 仓库即可自动部署。

---

## 📁 项目结构

```
.
├── public/                 # 静态资源
├── src/
│   ├── components/        # 组件
│   │   ├── AuthorCard.astro
│   │   ├── BlogCard.astro
│   │   ├── Search.astro
│   │   ├── ThemeToggle.astro
│   │   └── Typewriter.astro
│   ├── content/
│   │   └── blog/         # 博客文章
│   ├── layouts/          # 布局模板
│   │   └── Layout.astro
│   ├── pages/            # 页面路由
│   │   ├── index.astro   # 首页
│   │   ├── blog/         # 博客列表/详情
│   │   ├── tags/         # 标签页
│   │   ├── about.astro   # 关于页
│   │   └── 404.astro     # 404 页
│   ├── styles/           # 全局样式
│   └── utils/            # 工具函数
├── astro.config.mjs      # Astro 配置
├── tailwind.config.mjs   # Tailwind 配置
└── package.json
```

---

## 🔧 高级功能

### 启用搜索（Pagefind）

1. 安装依赖：
```bash
pnpm add astro-pagefind pagefind
```

2. 取消 `astro.config.mjs` 中的注释：
```javascript
import pagefind from 'astro-pagefind';

export default defineConfig({
  integrations: [
    // ...其他集成
    pagefind(),
  ],
});
```

3. 取消 `src/layouts/Layout.astro` 中的 Search 组件导入和使用

### 添加站点地图

```bash
pnpm add @astrojs/sitemap
```

在 `astro.config.mjs` 中添加：
```javascript
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [sitemap()],
});
```

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

## 📄 许可证

[MIT](LICENSE) © BaiXious

---

## 🙏 致谢

- 设计灵感：[typewriter](https://github.com/roicort/typewriter) by roicort
- 框架：[Astro](https://astro.build/)
- 样式：[Tailwind CSS](https://tailwindcss.com/)

---

> 📝 **寥廓江天万里霜** - 记录技术成长，分享生活感悟
