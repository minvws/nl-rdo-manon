---
title: Paginering
breadcrumb: Paginering
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Paginering</h1>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/pagination";
```

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Vul de variabelen met de gewenste stijlkeuzes. Voor meer informatie zie het
    overzicht met [instelbare variabelen](#variables).
3.  Voeg de class `pagination` toe aan de gewenste elementen. Voor meer
    informatie zie: [Voorbeelden](#examples).

<h2 id="examples">Voorbeelden:</h2>

<h3 id="pagination-class">Paginering</h3>

Visueel voorbeeld:

<nav class="pagination" aria-label="Paginering" id="pagination-nav">
  <ul>
    <li>
      <a href="#pagination-nav" aria-label="Ga naar pagina 1" aria-current="true">1</a>
    </li>
    <li><a href="#pagination-nav" aria-label="Ga naar pagina 2">2</a></li>
    <li><a href="#pagination-nav" aria-label="Ga naar pagina 3">3</a></li>
    <li><a href="#pagination-nav" aria-label="Ga naar pagina 4">4</a></li>
    <li><a href="#pagination-nav" aria-label="Ga naar pagina 5">5</a></li>
  </ul>
</nav>

HTML-voorbeeld:

```html
<nav class="pagination" aria-label="Paginering">
  <ul>
    <li><a href="#" aria-label="Ga naar pagina 1" aria-current="true">1</a></li>
    <li><a href="#" aria-label="Ga naar pagina 2">2</a></li>
    <li><a href="#" aria-label="Ga naar pagina 3">3</a></li>
    <li><a href="#" aria-label="Ga naar pagina 4">4</a></li>
    <li><a href="#" aria-label="Ga naar pagina 5">5</a></li>
  </ul>
</nav>
```

#### Met class `pagination` en "vorige" en "volgende links.

<nav class="pagination" aria-label="Paginering" id="pagination-next-prev">
  <a
    href="#pagination-next-prev"
    aria-label="Ga naar de vorige pagina"
    class="adjacent previous">Vorige</a>
  <ul>
    <li><a href="#pagination-next-prev" aria-label="Ga naar pagina 1">1</a></li>
    <li>
      <a href="#pagination-next-prev" aria-label="Ga naar pagina 2" aria-current="true">2</a>
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

HTML-voorbeeld:

```html
<nav class="pagination" aria-label="Paginering">
  <a href="#" aria-label="Ga naar de vorige pagina" class="adjacent previous"
    >Vorige</a
  >
  <ul>
    <li><a href="#" aria-label="Ga naar pagina 1">1</a></li>
    <li><a href="#" aria-label="Ga naar pagina 2" aria-current="true">2</a></li>
    <li><a href="#" aria-label="Ga naar pagina 3">3</a></li>
    <li><a href="#" aria-label="Ga naar pagina 4">4</a></li>
    <li><a href="#" aria-label="Ga naar pagina 5">5</a></li>
  </ul>
  <a href="#" aria-label="Ga naar de volgende pagina" class="adjacent next"
    >Volgende</a
  >
</nav>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)
