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

## Bilingual posts (EN / PT-BR)

Keep both languages in the same `index.md` and add an in-post toggle:

```md
{{< langswitch default="en" >}}

{{< langblock lang="en" >}}
English text here.
{{< /langblock >}}

{{< langblock lang="pt-br" >}}
Texto em português aqui.
{{< /langblock >}}
```

For the title/description (used on the post page and the home page list), add bilingual front matter fields:

```yaml
---
title: "My 0.2cents on AI" # fallback
title_en: "My 0.2cents on AI"
title_ptbr: "Meus 0,2 centavos sobre IA"
description_en: "Short excerpt in English."
description_ptbr: "Resumo curto em português."
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
