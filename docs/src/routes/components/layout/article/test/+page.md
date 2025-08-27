---
title: Article testpagina
breadcrumb: Article testpagina
---

<h1 id="introduction">article</h1>

Componenten gegroepeerd in `article`'s.

<h2>HTML-voorbeeld:</h2>

```html
<main>
  <article>
    <!-- Content -->
  </article>
</main>
```

<h2>Gebruikte componenten</h2>

Voor meer informatie over importeren en instellen van componenten. Zie: [Componenten gebruiken en styling toevoegen](/getting-started/installation)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/main";
@use "@minvws/manon/article";
```

<h3>Ingestelde waarden</h3>

<h4>CSS-voorbeeld</h4>

```css
:root {
  /* Resetting previously set styles. */
  /* This is only needed if these styles have been added */

  /* Main */
  --main-gap: 0;
  --main-padding-top: 0;
  --main-padding-right: 0;
  --main-padding-bottom: 0;
  --main-padding-left: 0;

  /* Article */
  --article-gap: 0;
  --article-padding-top: 0;
  --article-padding-right: 0;
  --article-padding-bottom: 0;
  --article-padding-left: 0;
}
```

<h4>Layout-set</h4>

```css
:root {
  /* Page */
  --page-whitespace-top: 4rem;
  --page-whitespace-right: 2%;
  --page-whitespace-bottom: 4rem;
  --page-whitespace-left: 2%;

  /* Content */
  --content-flex-direction: column;
  --content-justify-content: flex-start;
  --content-align-items: flex-start;
  --content-gap: 2rem;
  --content-padding-top: 2rem;
  --content-padding-right: 0;
  --content-padding-bottom: 2rem;
  --content-padding-left: 0;
  --content-max-width: 80rem;
}
```
