---
title: Div content wrapper test
breadcrumb: Div content wrapper test
---

<h1 id="introduction">Content wrapper div</h1>

Componenten gegroepeerd in `div`'s binnen de `main`.

<h2>HTML-voorbeeld:</h2>

```html
<main>
  <div>
    <!-- This can be full width -->
    <div>
      <!-- While the content width can be limited -->
      <!-- content -->
    </div>
  </div>
</main>
```

<h2>Gebruikte bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie: [Componenten gebruiken en styling toevoegen](/getting-started/installation)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/div-content-wrapper";
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
  --div-gap: 0;
  --div-padding-top: 0;
  --div-padding-right: 0;
  --div-padding-bottom: 0;
  --div-padding-left: 0;

  /* -- end of the style reset -- */

  /* Section content wrapper */
  --div-content-wrapper-gap: var(--content-gap);
  --div-content-wrapper-padding-top: var(--content-padding-top);
  --div-content-wrapper-padding-right: var(--content-padding-right);
  --div-content-wrapper-padding-bottom: var(--content-padding-bottom);
  --div-content-wrapper-padding-left: var(--content-padding-left);
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
