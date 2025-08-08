---
title: Body text set
breadcrumb: Body text set
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
---

<h1 id="introduction">Body text set</h1>

Set voor het instellen van de stijlkeuzes voor de hoofdtekst.

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project.
    - Voor een overzicht van de benodigde en optionele bestanden zie:
      [Bijbehorende bestanden](#requirements).
    - Vul de variabelen met de gewenste weergaven. Voor meer informatie zie het
      overzicht met [instelbare variabelen](#variables).
    - Pas de stijlkeuzes toe waar nodig. De stijlkeuzes kunnen door middel van
      variabelen binnen de CSS toegepast worden. Voor meer informatie hierover
      zie [CSS-variabelen gebruiken](/documentation/use-css-variable).

<h2 id="examples">Voorbeelden</h2>

### Paragraaf

#### Visuele weergave

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit euismod
  consectetur. Praesent est diam, ultricies ut lacus nec, molestie commodo arcu. Class
  aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
</p>

#### HTML-voorbeeld

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit
  euismod consectetur. Praesent est diam, ultricies ut lacus nec, molestie
  commodo arcu. Class aptent taciti sociosqu ad litora torquent per conubia
  nostra, per inceptos himenaeos.
</p>
```

### Paragraaf benadrukte weergave

#### Visuele weergave

<p class="emphasized">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit euismod
  consectetur. Praesent est diam, ultricies ut lacus nec, molestie commodo arcu. Class
  aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
</p>

#### HTML-voorbeeld

```html
<p class="emphasized">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit
  euismod consectetur. Praesent est diam, ultricies ut lacus nec, molestie
  commodo arcu. Class aptent taciti sociosqu ad litora torquent per conubia
  nostra, per inceptos himenaeos.
</p>
```

### Paragraaf subtielere weergave

#### Visuele weergave

<p class="de-emphasized">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit euismod
  consectetur. Praesent est diam, ultricies ut lacus nec, molestie commodo arcu. Class
  aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
</p>

#### HTML-voorbeeld

```html
<p class="de-emphasized">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit
  euismod consectetur. Praesent est diam, ultricies ut lacus nec, molestie
  commodo arcu. Class aptent taciti sociosqu ad litora torquent per conubia
  nostra, per inceptos himenaeos.
</p>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/body-text-set";
```
