---
title: Icoonknoppen zonder achtergrond
breadcrumb: Icoonknoppen zonder achtergrond
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Icoonknoppen zonder achtergrond geven geen tekst weer. Voeg wel altijd de
knoptekst toe voor gebruikers die gebruik maken van hulptechnologiën.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/button";
@use "@minvws/manon/icon";
@use "@minvws/manon/button-icon-only";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `button` met `span`

<button class="icon-only">
  <span class="icon icon-search" aria-hidden="true"></span>Zoeken
</button>

```html
<button class="icon-only"><span class="icon icon-search" aria-hidden="true"></span>Zoeken</button>
```

### Voorbeeld: `button` met `svg`

<button class="icon-only">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-search"
    aria-hidden="true"
    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
      d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"
    /><path d="M21 21l-6 -6" /></svg
  >
  Zoeken
</button>

```html
<button class="icon-only">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-search"
    aria-hidden="true"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M21 21l-6 -6" />
  </svg>
  Zoeken
</button>
```

<div class="explanation">
  <span>Aandachtspunten:</span>
  <ul>
    <li>
      Als het icoon puur decoratief is, kan deze verborgen worden voor
      screenreader-gebruikers. Dit kan doormiddel van een <code>aria-hidden="true"</code> op de
      svg.
    </li>
    <li>
      Als het icoon informatief is dient deze een kort en duidelijk label te krijgen als
      alternatief voor screenreader-gebruikers. Bijvoorbeeld:
      <code>aria-label="Gebruikersprofiel"</code>. Het icoon dient in dit geval ook
      <code>role="img"</code> te krijgen.
    </li>
  </ul>
</div>

### Voorbeeld: `button` met `img`

<!-- <button class="icon-only"> -->
<!--   Lorem ipsum <img src="/img/cat.svg" alt="Kat" /> -->
<!-- </button> -->

```html
<button href="/library/components/button/icon" class="icon-only">
  Lorem ipsum <img src="path/to/img.svg" alt="Kat" />
</button>
```

### Voorbeeld: Link als `button` met `img`

<!-- <a href="/library/components/button/icon" class="button icon-only"> -->
<!--   Lorem ipsum <img src="" alt="Kat" /> -->
<!-- </a> -->

```html
<a href="/library/components/button/icon" class="button icon-only">
  Lorem ipsum <img src="path/to/img.svg" alt="Kat" />
</a>
```
