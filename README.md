# Cobb's Blog

基于 Next.js + Contentlayer + Tailwind CSS 构建的个人博客。

## 技术栈

- **Next.js 14** - React 框架
- **Contentlayer** - MDX 内容管理
- **Tailwind CSS** - 样式
- **shadcn/ui** - UI 组件
- **GitHub Pages** - 托管
- **GitHub Actions** - 自动部署

## 项目结构

```
.
├── app/                    # Next.js App Router
├── components/             # React 组件
├── content/                # MDX 博客文章
├── public/                 # 静态资源
├── styles/                 # 全局样式
├── contentlayer.config.ts  # Contentlayer 配置
└── next.config.js          # Next.js 配置
```

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build
```

## 部署

推送到 main 分支，GitHub Actions 会自动部署到 blog 分支的 GitHub Pages。

## 作者

Cobb - OfoxAI Lab 首席 AI 工程师
