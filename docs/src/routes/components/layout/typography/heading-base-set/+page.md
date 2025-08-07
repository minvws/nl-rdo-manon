---
title: Titel basisset
breadcrumb: Titel basisset
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
    - Beschikbare opties: "#examples"
    - HTML-element stijling ingesteld via CSS voorbeeld: "#examples"
    - Variabele gebruiken binnen een andere variabele: "#examples"
    - Class gebruiken binnen de HTML: "#examples"
  - Bijbehorende bestanden: "#requirements"
---

<h1 id="introduction">Titel basisset</h1>

Basisset voor het stylen van titels.

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project.
    -   Voor een overzicht van de benodigde en optionele bestanden zie: [Bijbehorende bestanden](#requirements).
    -   Vul de variabelen met de gewenste weergaven. Voor meer informatie zie het overzicht met [instelbare variabelen](#variables).
    -   Pas de titelweergaven toe waar nodig. De titelweergaven kunnen op twee manieren
        toegepast worden. Door middel van variabelen binnen de CSS of door middel van
        classes binnen de HTML. Maak gebruik van de CSS-variabelen waar mogelijk en voeg
        alleen de classes toe in de HTML voor uitzonderingen om de code aanpasbaar en
        overzichtelijk te houden. Voor meer informatie hierover zie [CSS-variabelen gebruiken](/documentation/use-css-variable).

<h2 id="examples">Voorbeelden</h2>

### Beschikbare opties

- heading-xxl
- heading-xl
- heading-large
- heading-normal
- heading-small
- heading-xs

### HTML-element stijling ingesteld via CSS voorbeeld

#### Visueel voorbeeld:

<div class="visual-example">
  <h1>h1 met weergave heading XXL</h1>
  <h2>h2 met weergave heading XL</h2>
  <h3>h3 met weergave heading Large</h3>
  <h4>h4 met weergave heading Normal</h4>
  <h5>h5 met weergave heading Small</h5>
  <h6>h6 met weergave heading XS</h6>
</div>

#### HTML-voorbeeld:

```html
<h1>h1 met weergave heading XXL</h1>
<h2>h2 met weergave heading XL</h2>
<h3>h3 met weergave heading Large</h3>
<h4>h4 met weergave heading Normal</h4>
<h5>h5 met weergave heading Small</h5>
<h6>h6 met weergave heading XS</h6>
```

### Variabele gebruiken binnen een andere variabele

<p>
  In dit voorbeeld is de styling ingesteld door een van de variabelen uit deze set in te
  laden binnen de variabele om de h1 te stylen.
</p>

#### CSS-voorbeeld:

```css
:root {
  --headings-h1-font-size: var(--heading-xxl-font-size);
}
```

<p>
  Voor meer informatie hierover zie [CSS-variabelen gebruiken](/documentation/use-css-variable).
</p>

### Class gebruiken binnen de HTML

<p>
  Dit voorbeeld maakt gebruik van de classes uit deze set direct op de HTML-elementen. Dit
  is een geschikte manier voor uitzonderingen.
</p>
<p class="warning">
  <span>Waarschuwing:</span> Waar mogelijk is het altijd aan te raden zo min mogelijk classes
  te gebruiken maar om gebruik te maken van het overerven van CSS. Maar omdat een uitzondering
  soms nodig is, is het mogelijk om de titelweergaven ook direct in de html te kunnen definiëren
  door middel van een classes.
</p>

#### Visueel voorbeeld:

<div class="visual-example">
  <h3 class="heading-xxl">Heading XXL</h3>
  <h3 class="heading-xl">Heading XL</h3>
  <h3 class="heading-large">Heading Large</h3>
  <h3 class="heading-normal">Heading Normal</h3>
  <h3 class="heading-small">Heading Small</h3>
  <h3 class="heading-xs">Heading XS</h3>
</div>

#### HTML-voorbeeld:

```html
<h3 class="heading-xxl">Heading XXL</h3>
<h3 class="heading-xl">Heading XL</h3>
<h3 class="heading-large">Heading Large</h3>
<h3 class="heading-normal">Heading Normal</h3>
<h3 class="heading-small">Heading Small</h3>
<h3 class="heading-xs">Heading XS</h3>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/heading-base-set";
```
