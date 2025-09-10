---
title: Kruimelpad - breadcrumb-bar
breadcrumb: Kruimelpad - breadcrumb-bar
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Breadcrumb-navigatie is een hulpmiddel op websites dat laat zien waar je je
bevindt binnen de structuur van de site. Het geeft een klikbaar pad terug naar
eerdere pagina’s, zodat je makkelijk kunt navigeren.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/breadcrumb-bar";
```

<h2 id="examples">Voorbeelden:</h2>

### Voorbeeld: Basis

<div class="resize">
  <iframe src="{base}/snippets/breadcrumb-bar" title="Voorbeeld"></iframe>
</div>

```html
<nav class="breadcrumb-bar">
  <div>
    <ul>
      <li><a href="{base}/library/components">Componenten</a></li>
      <li>
        <a href="{base}/library/components/breadcrumb-bar" aria-current="page"
          >Kruimelpad - breadcrumb-bar</a
        >
      </li>
    </ul>
  </div>
</nav>
```
