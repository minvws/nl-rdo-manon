---
title: Main content wrapper
breadcrumb: Main content wrapper
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Introductie</h1>
  De main content wrapper is een container die de belangrijkste inhoud van de pagina bij elkaar houdt en zorgt voor een duidelijke en overzichtelijke indeling.

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/main-content-wrapper";
```

### Benodigde stappen

  Maak gebruik van een layout set om stijlkeuzes voor de layout centraal vast te
  leggen en in verschillende componenten te gebruiken. Denk bijvoorbeeld aan het
  vastleggen van de afstand tussen de blokken binnen de `main`, een `article` en
  een `section`. Voor meer informatie zie:
  [Layout-basisset](/components/layout/layout-set)

<h2 id="examples">Voorbeelden</h2>

```html
<main>
  <div>
    <!-- this div is the content wrapper -->
    <!-- Content -->
  </div>
</main>
```
