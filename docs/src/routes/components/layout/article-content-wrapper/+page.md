---
title: Article content wrapper
breadcrumb: Article content wrapper
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="intrduction">Introductie</h2>

Het `<article>` element bevat een zelfstandig stuk inhoud, terwijl de `<div>` fungeert als wrapper om de inhoud netjes te groeperen

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/article-content-wrapper";
```

### Benodigde stappen

Maak gebruik van een layout set om stijlkeuzes voor de layout centraal vast te leggen en in verschillende componenten te gebruiken. Denk bijvoorbeeld aan het vastleggen van de afstand tussen de blokken binnen de `main`, een `article` en een `section`. Voor meer informatie zie: [Layout-basisset](/components/layout/layout-set)

<h2 id="examples">Voorbeelden</h2>

```html
<article>
  <div> <!-- Content wrapper -->
    <!-- Content -->
  <div>
</article>
```
