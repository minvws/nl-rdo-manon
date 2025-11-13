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
@use "@minvws/manon/components/pagination";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Paginering

<nav class="pagination" aria-label="Paginering" id="pagination-nav">
  <ul>
    <li><span aria-current="page">1</span></li>
    <li><a href="#pagination-nav" aria-label="Ga naar pagina 2">2</a></li>
    <li><a href="#pagination-nav" aria-label="Ga naar pagina 3">3</a></li>
    <li><a href="#pagination-nav" aria-label="Ga naar pagina 4">4</a></li>
    <li><a href="#pagination-nav" aria-label="Ga naar pagina 5">5</a></li>
  </ul>
</nav>

```html
<nav class="pagination" aria-label="Paginering" id="pagination-nav">
  <ul>
    <li><span aria-current="page">1</span></li>
    <li><a href="#pagination-nav" aria-label="Ga naar pagina 2">2</a></li>
    <li><a href="#pagination-nav" aria-label="Ga naar pagina 3">3</a></li>
    <li><a href="#pagination-nav" aria-label="Ga naar pagina 4">4</a></li>
    <li><a href="#pagination-nav" aria-label="Ga naar pagina 5">5</a></li>
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
    <li><span>1</span></li>
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
<nav class="pagination" aria-label="Paginering" id="pagination-next-prev">
  <a
    href="#pagination-next-prev"
    aria-label="Ga naar de vorige pagina"
    class="adjacent previous">Vorige</a>
  <ul>
    <li><span>1</span></li>
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
```

### Aandachtspunten

Dit component gaat er vanuit dat de paginering gebruikt wordt om naar andere pagina's te navigeren. Daarom worden links ondersteund. Omdat de huidige pagina niet klikbaar hoeft te zijn worden ook spans ondersteund. Knoppen worden niet ondersteund omdat deze bedoeld zijn voor acties en niet voor navigatie tussen pagina's. Gebruik omwille van toegankelijkheid links in plaats van knoppen.
