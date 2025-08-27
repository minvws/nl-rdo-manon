---
title: Section content wrapper test
breadcrumb: Section content wrapper test
---

<h1 id="introduction">Content wrapper section</h1>

Componenten gegroepeerd in `section`'s binnen de `main`.

<h2>HTML-voorbeeld:</h2>

```html
<main>
  <section>
    <!-- This can be full width -->
    <div>
      <!-- While the content width can be limited -->
      <!-- content -->
    </div>
  </section>
</main>
```

<h2>Gebruikte bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie: [Componenten gebruiken en styling toevoegen](/getting-started/installation)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/section-content-wrapper";
```

<h3>Ingestelde waarden</h3>

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
  --section-gap: 0;
  --section-padding-top: 0;
  --section-padding-right: 0;
  --section-padding-bottom: 0;
  --section-padding-left: 0;

  /* -- end of the style reset -- */

  /* Section content wrapper */
  --section-content-wrapper-gap: var(--content-gap);
  --section-content-wrapper-padding-top: var(--content-padding-top);
  --section-content-wrapper-padding-right: var(--content-padding-right);
  --section-content-wrapper-padding-bottom: var(--content-padding-bottom);
  --section-content-wrapper-padding-left: var(--content-padding-left);
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
