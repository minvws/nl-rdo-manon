---
title: Main testpagina
breadcrumb: Main testpagina
---

<h1 id="introduction">Article content wrapper</h1>

Componenten gegroepeerd in `article`'s.

<h2>HTML-voorbeeld:</h2>

```html
<main>
  <article>
    <!-- This can be full width -->
    <div>
      <!-- While the content width can be limited -->
      <!-- content -->
    </div>
  </article>
</main>
```

<h2>Gebruikte componenten</h2>

Voor meer informatie over importeren en instellen van componenten. Zie: [Componenten gebruiken en styling toevoegen](/getting-started/installation)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/article-content-wrapper";
```

### Ingestelde waarden

#### CSS-voorbeeld

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

  /* Section */
  --article-gap: 0;
  --article-padding-top: 0;
  --article-padding-right: 0;
  --article-padding-bottom: 0;
  --article-padding-left: 0;

  /* -- end of the style reset -- */

  /* Section content wrapper */
  --article-content-wrapper-gap: var(--content-gap);
  --article-content-wrapper-padding-top: var(--content-padding-top);
  --article-content-wrapper-padding-right: var(--content-padding-right);
  --article-content-wrapper-padding-bottom: var(--content-padding-bottom);
  --article-content-wrapper-padding-left: var(--content-padding-left);
}
```

#### Layout-set

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
