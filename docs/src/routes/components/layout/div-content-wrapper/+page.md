---
title: Div content wrapper
breadcrumb: Div content wrapper
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Div content wrapper</h1>

## Benodigde stappen:

- Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
  optionele bestanden zie:
  [Bijbehorende bestanden](#requirements).
- Maak gebruik van en layout set om stijlkeuzes voor de layout centraal vast te leggen en
  in verschillende componenten te gebruiken. Denk bijvoorbeeld aan het vastleggen van de
  afstand tussen de blokken binnen de `main`, een `article` en een
  `section`. Voor meer informatie zie:
  [Gebruik maken van een layout-set](#layout-set).

<h2 id="layout-set">Gebruik maken van een layout-set</h2>

Layout-sets kunnen gebruikt worden om op een centrale plek de stijlkeuzes vast te leggen
voor layout-gerelateerde keuzes.

Beschikbare styling sets voor layout zijn:

- [Layout-basisset](/components/layout/layout-set)

<h2 id="examples">Voorbeelden</h2>

### HTML-voorbeeld:

#### `div`:

```html
<div>
  <div> <!-- Content wrapper -->
    <!-- Content -->
  <div>
</div>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/div-content-wrapper";
```
