# YUN — Embedded Engineer Portfolio

Vue 3 + Vite + Vue Router 的嵌入式工程师个人作品集起始项目。页面使用 Hash 路由，适合 GitHub Pages。

## 本地运行

1. 安装 Node.js LTS：<https://nodejs.org/>
2. 在本目录打开终端，运行：

   ```bash
   npm install
   npm run dev
   ```
3. 按终端输出打开本地地址（通常为 `http://localhost:5173/`）。
4. 发布前运行 `npm run build`，生成文件位于 `dist/`。

## 个性化修改

- 首页名称和个人介绍：`src/views/Home.vue`
- 项目列表与详情内容：`src/data/projects.js`
- 关于我、技术能力：`src/views/About.vue`
- 配色、排版、响应式布局：`src/style.css`
- 页面路由：`src/main.js`

请用真实、可公开的经历替换示例文案；不要虚构测试结果，也不要上传公司机密、客户资料、密钥或内部源代码。

## 发布到 GitHub Pages

### 方案 A：用户主页仓库（推荐）

1. 在 GitHub 创建名为 `你的用户名.github.io` 的仓库。
2. 将本项目推送到该仓库。
3. 仓库 `Settings → Pages` 中选择 `GitHub Actions`。
4. 添加下方工作流文件，提交后等待 Actions 完成。

### 方案 B：普通项目仓库

如果仓库名不是 `用户名.github.io`，编辑 `vite.config.js`，把 `base: '/'` 改为 `base: '/仓库名/'`。

## GitHub Actions

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy portfolio to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 建议的下一步

1. 把首页的 `YUN` 换成你想公开显示的名字。
2. 为 3–5 个代表性项目补充脱敏照片、框图、可公开的代码链接。
3. 填入真实 GitHub 主页地址和联系渠道。
4. 检查手机端排版、拼写和所有链接，再公开发布。
