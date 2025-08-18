---
title: Layout set
breadcrumb: Layout set
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
---

<h1 id="introduction">Layout set</h1>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/layout-set";
```

Basisset voor het vastleggen van layout-keuzes vanuit een centraal punt.

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project.
    - Voor een overzicht van de benodigde en optionele bestanden zie:
      [Bijbehorende bestanden](#requirements).
    - Vul de variabelen met de gewenste weergaven. Voor meer informatie zie het
      overzicht met [instelbare variabelen](#variables).
    - Pas de layoutkeuzes toe waar nodig. De layoutkeuzes kunnen door middel van
      variabelen binnen de CSS worden toegevoegd. Voor meer informatie hierover
      zie [CSS-variabelen gebruiken](/documentation/use-css-variable).

<h2 id="examples">Voorbeelden</h2>

### Variabele gebruiken binnen een andere variabele

In dit voorbeeld stellen we de padding aan de bovenkant van de `main` in op
basis van een variabelen die gezet is binnen deze set. In dit geval zetten we de
witruimte aan de bovenkant van de pagina bovenaan de `main`.
