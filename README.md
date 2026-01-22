# YCR Mind

This repo now contains a **static blog** built with **Hugo**, deployable for free via **GitHub Pages** (same style as `akitaonrails.github.io`).

## Write posts (Markdown)

Create a folder like:

`content/posts/YYYY/MM/DD/your-post-slug/index.md`

Example:

`content/posts/2026/01/22/hello-world/index.md`

Minimal front matter:

```yaml
---
title: "My post title"
date: 2026-01-22T12:00:00-03:00
tags: ["rails", "notes"]
description: "Short excerpt shown on the home page."
---
```

## Local preview

Install Hugo, then:

`hugo server -D`

## Deploy (GitHub Pages)

1. Push to `main`.
2. In GitHub: **Settings → Pages**:
   - Source: **GitHub Actions**
3. The workflow `.github/workflows/pages.yml` builds and deploys automatically.

## Notes

- The old Rails admin/editor is no longer needed for GitHub Pages deploys.
- Styling lives in `static/assets/app.css` and templates in `layouts/`.
