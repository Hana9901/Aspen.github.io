# Aspen_personal_web

Product-manager portfolio frontend: Vite + React + TypeScript, editorial Stitch-inspired UI, CRT intro, GSAP target cursor.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run build:pages   # static site → ./docs for GitHub Pages
npm run lint
npm run preview
```

## GitHub Pages (`Aspen.github.io` repo)

This project is set up as a **[project site](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)**.

### Correct URL（常见 404 原因）

仓库名里有 `github.io` **不等于** 网站在 `https://Aspen.github.io`。对账户 **`hana9901`** 而言，这个仓库的 Page 一般是：

**`https://hana9901.github.io/aspen.github.io/`**

（路径多为**小写**；请以 **Settings → Pages** 里的 **Visit site** 为准。）

只有仓库名**严格等于 `你的用户名.github.io`** 且从仓库**根目录**发布时，主页才会是 **`https://hana9901.github.io/`**。

### Repo settings

1. **`main`** 已推送到 [`Hana9901/Aspen.github.io`](https://github.com/Hana9901/Aspen.github.io)。
2. **Settings → Pages** → **Deploy from a branch**。
3. Branch **`main`**，folder **`/docs`**（官方文档：[Publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)）。
4. 保存后等待 1～3 分钟；仍为 404 时查看该页是否有 **构建失败**，或 **`docs`** 是否在默认分支上有 **`index.html`**。

### Build output

- `npm run build:pages` 使用 **`base: /aspen.github.io/`**，输出 **`docs/`**，并生成 **`404.html`**（SPA）与 **`.nojekyll`**。
- 若 **`base`** 与 Settings 显示的访问路径不一致，会空白或资源 404；对齐后重新 `npm run build:pages` 并推送 **`docs`**。

## Stack

- [Vite](https://vite.dev) + [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
- [Tailwind CSS v4](https://tailwindcss.com)
- `react-router-dom`, `gsap`
