---
title: Paginering
breadcrumb: Paginering
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Paginering is een navigatie-element dat lange lijsten of inhoud opsplitst in meerdere pagina’s, zodat gebruikers stapsgewijs door de informatie kunnen bladeren.

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/pagination";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Paginering

<nav class="pagination" aria-label="Paginering" id="pagination-nav">
  <ul>
    <li>
      <a href="#pagination-nav" aria-label="Ga naar pagina 1" aria-current="page">1</a>
    </li>
    <li><a href="#pagination-nav" aria-label="Ga naar pagina 2">2</a></li>
    <li><a href="#pagination-nav" aria-label="Ga naar pagina 3">3</a></li>
    <li><a href="#pagination-nav" aria-label="Ga naar pagina 4">4</a></li>
    <li><a href="#pagination-nav" aria-label="Ga naar pagina 5">5</a></li>
  </ul>
</nav>

```html
<nav class="pagination" aria-label="Paginering">
  <ul>
    <li><a href="#" aria-label="Ga naar pagina 1" aria-current="page">1</a></li>
    <li><a href="#" aria-label="Ga naar pagina 2">2</a></li>
    <li><a href="#" aria-label="Ga naar pagina 3">3</a></li>
    <li><a href="#" aria-label="Ga naar pagina 4">4</a></li>
    <li><a href="#" aria-label="Ga naar pagina 5">5</a></li>
  </ul>
</nav>
```

### Voorbeeld: Met class `pagination` en "vorige" en "volgende links.

<nav class="pagination" aria-label="Paginering" id="pagination-next-prev">
  <a
    href="#pagination-next-prev"
    aria-label="Ga naar de vorige pagina"
    class="adjacent previous">Vorige</a>
  <ul>
    <li><a href="#pagination-next-prev" aria-label="Ga naar pagina 1">1</a></li>
    <li>
      <a href="#pagination-next-prev" aria-label="Ga naar pagina 2" aria-current="page">2</a>
    </li>
    <li><a href="#pagination-next-prev" aria-label="Ga naar pagina 3">3</a></li>
    <li><a href="#pagination-next-prev" aria-label="Ga naar pagina 4">4</a></li>
    <li><a href="#pagination-next-prev" aria-label="Ga naar pagina 5">5</a></li>
  </ul>
  <a
    href="#pagination-next-prev"
    aria-label="Ga naar de volgende pagina"
    class="adjacent next">Volgende</a>
</nav>

```html
<nav class="pagination" aria-label="Paginering">
  <a href="#" aria-label="Ga naar de vorige pagina" class="adjacent previous">Vorige</a>
  <ul>
    <li><a href="#" aria-label="Ga naar pagina 1">1</a></li>
    <li><a href="#" aria-label="Ga naar pagina 2" aria-current="page">2</a></li>
    <li><a href="#" aria-label="Ga naar pagina 3">3</a></li>
    <li><a href="#" aria-label="Ga naar pagina 4">4</a></li>
    <li><a href="#" aria-label="Ga naar pagina 5">5</a></li>
  </ul>
  <a href="#" aria-label="Ga naar de volgende pagina" class="adjacent next">Volgende</a>
</nav>
```
