---
title: Tabbladen
breadcrumb: Tabbladen
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Tabbladen</h1>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/tabs";
```

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Vul de variabelen met de gewenste stijlkeuzes. Voor meer informatie zie het
    overzicht met [instelbare variabelen](#variables).
3.  Voeg de class `tabs` toe aan de gewenste elementen. Voor meer informatie
    zie: [Voorbeelden](#examples).

<h2 id="examples">Voorbeelden:</h2>

<h3 id="tabs-class">Tabbladen</h3>

Visueel voorbeeld:

<div class="tabs" id="tabs">
  <ul>
    <li><span aria-current="page">Optie 1</span></li>
    <li><a href="tabs">Optie 2</a></li>
    <li><a href="tabs">Optie 3</a></li>
    <li><a href="tabs">Optie 4</a></li>
  </ul>
</div>

HTML-voorbeeld:

```html
<div class="tabs">
  <ul>
    <li><span aria-current="page">Optie 1</span></li>
    <li><a href="#">Optie 2</a></li>
    <li><a href="#">Optie 3</a></li>
    <li><a href="#">Optie 4</a></li>
  </ul>
</div>
```

#### `aria-current` op `li`

<div class="tabs" id="li">
  <ul>
    <li aria-current="page"><span>Optie 1</span></li>
    <li><a href="#li">Optie 2</a></li>
    <li><a href="#li">Optie 3</a></li>
    <li><a href="#li">Optie 4</a></li>
  </ul>
</div>

HTML-voorbeeld:

```html
<div class="tabs">
  <ul>
    <li aria-current="page"><span>Optie 1</span></li>
    <li><a href="#">Optie 2</a></li>
    <li><a href="#">Optie 3</a></li>
    <li><a href="#">Optie 4</a></li>
  </ul>
</div>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)
