# YCR Mind

Personal blog of Ycaro Pires, backend-focused software engineer. Notes on Ruby on Rails, high-availability systems and AI APIs in real workflows.

Live at [ycaro-oleg.github.io](https://ycaro-oleg.github.io/).

Built with [Hugo](https://gohugo.io/) and published with GitHub Pages.

## What I'm working on

**[Larper](https://larpr.dev)** — Turns a free-form story into native posts for LinkedIn, X, Threads and Reddit. Each network gets its own voice, the author edits and schedules from one screen, and publishing runs from the same queue. The code is private; public updates cover the product journey, ideas, insights and launch challenges. Live at [larpr.dev](https://larpr.dev).

## Running locally

```bash
hugo server
```

## Writing a post

Posts are still plain Markdown page bundles. Create:

    content/posts/YYYY/MM/DD/your-slug/index.md

Use this front matter:

    ---
    title: "English title"
    title_en: "English title"
    title_ptbr: "Título em português"
    date: 2026-10-28T12:00:00-03:00
    slug: "your-slug"
    tags: ["Startup"]
    description_en: "English summary."
    description_ptbr: "Resumo em português."
    ---

Then write both versions using the existing shortcodes:

    {{< langswitch default="en" >}}
    {{< langblock lang="en" >}}
    Your English Markdown.
    {{< /langblock >}}
    {{< langblock lang="pt-br" >}}
    Seu Markdown em português.
    {{< /langblock >}}

An optional short_title_en / short_title_ptbr gives the homepage's latest-post link a shorter label. The archive, search, topics, reading time and article navigation update automatically. Search includes both languages and the post body. No database, CMS, API key or JavaScript dependency installation is needed.

Run hugo --minify to verify the production build. Pushing to master or main publishes through the existing GitHub Pages workflow. Keep dates at or before the intended publication time; Hugo excludes future posts by default.

## Interface

Self-hosted Cabinet Grotesk, the original dark/yellow brand, real Larper captures, campaign artwork and a launch video, persistent EN/PT and light/dark choices, mobile navigation, full-text archive search, article contents and reading progress. Project tabs, image enlargement, campaign navigation and project filters work with keyboard and touch. Animation respects prefers-reduced-motion; the launch video pauses off screen and does not autoplay for reduced-motion or data-saving preferences. Content, project links and both article languages remain readable without JavaScript.

Design decisions and validation: [DESIGN.md](DESIGN.md).
