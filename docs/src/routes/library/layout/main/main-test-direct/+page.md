---
title: Main testpagina
breadcrumb: Main testpagina
---

<p id="introduction">Componenten direct binnen de `main` geplaatst.</p>

<h2>HTML-voorbeeld:</h2>

```html
<main>
  <h1 class="page-title">Main testpagina</h1>
  <p>Deze voorbeeldpagina maakt gebruik van de volgende html-structuur</p>
</main>
```

<h2>Gebruikte bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie: [Componenten gebruiken en styling toevoegen](/getting-started/installation)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/main";
```

<h3>Ingestelde waarden</h3>

#### CSS-voorbeeld:

```css
:root {
  --main-gap: var(--content-gap);
  --main-padding-top: var(--page-whitespace-top);
  --main-padding-right: var(--page-whitespace-right);
  --main-padding-bottom: var(--page-whitespace-bottom);
  --main-padding-left: var(--page-whitespace-left);
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
