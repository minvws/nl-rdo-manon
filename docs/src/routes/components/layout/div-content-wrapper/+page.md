---
title: Div content wrapper
breadcrumb: Div content wrapper
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Deze geneste `<div>` elementen dienen als containers om de inhoud overzichtelijk te groeperen

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/div-content-wrapper";
```

### Benodigde stappen

Maak gebruik van een layout set om stijlkeuzes voor de layout centraal vast te leggen en in verschillende componenten te gebruiken. Denk bijvoorbeeld aan het vastleggen van de afstand tussen de blokken binnen de `main`, een `article` en een `section`. Voor meer informatie zie: [Layout-basisset](/components/layout/layout-set)

<h2 id="examples">Voorbeelden</h2>

```html
<div>
  <div>
    <!-- Content wrapper -->
    <!-- Content -->
    <div></div>
  </div>
</div>
```
