---
title: Titel
breadcrumb: Titel
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Titels</h1>

Gebruik titels om structuur binnen de pagina aan te geven.

<h2 class="heading-normal">Aandachtspunten:</h2>

- Gebruik altijd een `h1` per pagina.*
- Kies altijd het juiste titel-element uit `h1` > `h6` op basis
  van de structuur in de HTML. Niet op basis van de visuele weergave.
- HTML-elementen h1 > h6 kunnen via de css voorzien worden van stijl. Voor meer
  informatie zie: [voorbeelden](#examples).
- Als niet ieder gelijkwaardig titel-element, bijvoorbeeld een h1, dezelfde visuele
  stijling gebruikt kan de stijl gezet worden door middel van een voorgedefineerde set.
  Binnen deze set worden de beschikbare "heading-styles" vastgelegd. Denk bijvoorbeeld
  aan een "heading-large" of een "heading-small". Voor meer informatie hierover zie: [Titel basisset](/heading-base-set).

<i
  >* Eerder was het gebruik van meerdere `h1`'s per pagina toegestaan. Dit is
  gewijzigd in de HTML-specs van whatwg. Voor meer informatie hierover zie:
  <a href="https://github.com/whatwg/html/commit/6682bdeee6fb08f5972bea92064fe250f1b4ec9c"
    >de commit op whatwg</a
  >.</i
>

<h2 id="examples">Voorbeelden:</h2>

### Visueel voorbeeld:

<div class="visual-example">
  <h1>Dit is een h1</h1>
  <h2>Dit is een h2</h2>
  <h3>Dit is een h3</h3>
  <h4>Dit is een h4</h4>
  <h5>Dit is een h5</h5>
  <h6>Dit is een h6</h6>
</div>

### HTML-voorbeeld:

```html
<h1>Dit is een h1</h1>
<h2>Dit is een h2</h2>
<h3>Dit is een h3</h3>
<h4>Dit is een h4</h4>
<h5>Dit is een h5</h5>
<h6>Dit is een h6</h6>
```

<h3 id="headings-variables">Design-keuzes instellen voor alle of meerdere titels</h3>

<p>
  Een set aan algemene varibelen zijn toegevoegd. Deze kunnen gebruikt worden om op een plek
  een waarde in te vullen en die te gebruiken binnen verschillende titel-types. Bijvoorbeeld
  om alle titels hetzelfde lettertype of dezelfde `font-weight` mee te geven. Het
  gebruik van gedeelde variabelen helpt herhaling te voorkomen en daarmee de kans op fouten bij
  toekomstige wijzigingen.
</p>

#### CSS-voorbeeld instellen:

```css
--headings-font-family: "Naam van gewenste lettertype";
```

#### CSS-voorbeeld gebruik:

<p>
  In dit voorbeeld wordt de eerder ingestelde "--headings-font-family" waarde doorgevoerd
  binnen de beschikbare heading-types.
</p>

```css
--h1-font-family: var(--heading-xxl-font-size);
--h2-font-family: var(--heading-xl-font-size);
--h3-font-family: var(--heading-large-font-size);
--h4-font-family: var(--heading-normal-font-size);
--h5-font-family: var(--heading-small-font-size);
--h6-font-family: var(--heading-xs-font-size);
```

### Gebruik maken van een heading-set

<p>
  Heading-sets kunnen gebruikt worden om op een centrale plek de stijlkeuzes vast te leggen
  voor de beschikbare titel-weergaven.
</p>

<p>Beschikbare styling sets voor headings zijn:</p>
<ul>
  <li><a href="heading-base-set">Heading-basisset</a></li>
</ul>

#### CSS-voorbeeld instellen:

<p>Gebruik de variabelen die beschikbaar zijn binnen de gekozen heading-set.</p>
<p>
  Het onderstaande voorbeeld maakt gebruik van `@minvws/manon/headings-base-set`.
</p>

<p>
  Voor meer informatie en alle beschikbare variabelen binnen deze set zie: [Heading-basisset](/heading-base-set).
</p>

```css
--heading-xxl-font-size: 2.5rem;
--heading-xl-font-size: 2rem;
--heading-large-font-size: 1.5rem;
--heading-normal-font-size: 1rem;
--heading-small-font-size: 0.8rem;
--heading-xs-font-size: 0.7rem;
```

#### CSS-voorbeeld gebruik:

<p>
  In dit voorbeeld worden de eerder ingestelde "font-size"-waardes doorgevoerd binnen de
  beschikbare heading-types.
</p>

```css
--h1-font-family: var(--heading-xxl-font-size);
--h2-font-family: var(--heading-xl-font-size);
--h3-font-family: var(--heading-large-font-size);
--h4-font-family: var(--heading-normal-font-size);
--h5-font-family: var(--heading-small-font-size);
--h6-font-family: var(--heading-xs-font-size);
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### SCSS-voorbeeld:

```scss
/* Headings set */
@use "@minvws/manon/headings-base-set";

/* Headings */
@use "@minvws/manon/headings";
```

<h2 id="related">Gerelateerde pagina's</h2>

<a href="/components/headings-test">Test- en voorbeelden-pagina</a>