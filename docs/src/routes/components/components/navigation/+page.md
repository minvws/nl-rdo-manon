---
title: Navigatie
breadcrumb: Navigatie
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
---

<h1 id="introduction">Navigatie</h1>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/navigation";
```

## Benodigde stappen

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Vul de variabelen met de gewenste stijlkeuzes.
3.  Voeg de benodigde HTML toe. Voor meer informatie zie:
    [Voorbeelden](#examples).

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Aandachtspunten:

- De standaard ingestelde waarden binnen Manon maken gebruik van de
  [Body text set](/components/layout/typography/body-text-set). Om gebruik te
  maken van deze set, laad de set eenmalig in voordat overige componenten er
  gebruik van maken. Zie onderstaand voorbeeld voor meer informatie.

<h2 id="examples">Voorbeelden:</h2>

### Visueel voorbeeld:

#### Navigatie-component met een lijst met links

<div class="resize">
  <iframe
    src="/examples/navigation-with-list-of-links"
    title="Voorbeeld"
    height="240px"
  ></iframe>
</div>

#### HTML-voorbeeld:

```html
<nav>
  <ul>
    <li><a href="#">Voorbeeld-link 1</a></li>
    <li><a href="#">Voorbeeld-link 2</a></li>
    <li><a href="#">Voorbeeld-link 3</a></li>
  </ul>
</nav>
```

#### Navigatie-component met een horizontaal uitgelijnde lijst met links

<div class="resize">
  <iframe src="/examples/navigation-with-horizontal" title="Voorbeeld" height="240px"
  ></iframe>
</div>

#### HTML-voorbeeld:

```html
<nav>
    <ul class="horizontal">
        <li><a href="#">Voorbeeld-link 1/a></li>
        <li><a href="#">Voorbeeld-link 2</a></li>
        <li><a href="#">Voorbeeld-link 3</a></li>
    </ul>
</nav>
```
