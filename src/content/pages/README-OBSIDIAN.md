# Editing Pages from Obsidian

This folder (`src/content/pages/`) contains all the single pages of sergiouribe.co
that are editable directly from Obsidian. Every `.md` or `.mdx` file here
maps to a live page on the site.

---

## Files

| File | Live URL | What to edit |
|---|---|---|
| `philosophy.mdx` | `/philosophy` | The body prose — headings, paragraphs, `*italics*` |
| `cv.mdx` | `/cv` | The YAML frontmatter — experience, education, skills |

---

## Philosophy (`philosophy.mdx`)

Write freely in Markdown. The site will:

- Apply a **drop cap** to the very first letter automatically
- Render `## Heading` with a red left border (your design system)
- Turn `*italics*` into clay-red italic text
- Turn `---` into an ornamental `✦ ✦ ✦` divider

### Frontmatter fields you can update

```yaml
title:
  en: "Educational Philosophy"
  es: "Filosofía Educativa"
description:
  en: "The quote shown below the title"
  es: "La cita mostrada bajo el título"
lastUpdated: 2026-04-01   # ISO date — updates the footer silently
```

---

## CV (`cv.mdx`)

The CV is **entirely frontmatter** — no prose body. Edit each YAML block:

### Add a new job

```yaml
experience:
  - role:
      en: "Your Role Title"
      es: "Tu Cargo"
    period: "Sep 2026 — Present"
    location: "School Name · City, Country"
    highlights:
      en:
        - "First achievement or responsibility."
        - "Second achievement."
      es:
        - "Primer logro o responsabilidad."
        - "Segundo logro."
```

### Add a new education entry

```yaml
education:
  - degree:
      en: "Degree Name"
      es: "Nombre del Título"
    institution: "University · Country"
    year: "2027"
    notes:
      en: "Optional note or thesis title."
      es: "Nota opcional o título de tesis."
```

### Update your location or availability

```yaml
location: "Bangkok, Thailand"
availableFrom: "August 2027"
```

---

## Deployment

1. Save the file in Obsidian.
2. The Obsidian Git plugin commits and pushes automatically (or press `Ctrl+P → Git: Commit and push`).
3. GitHub Pages rebuilds the site in ~60 seconds.
4. Done — the live site reflects your edit.

---

## Bilingual note

All content fields have `en:` and `es:` variants. The site currently shows
`en` by default. When you add Spanish content, the `/es/` routes will pick it up.
