---
title: Logo
breadcrumb: Logo
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Een logo-component is een herbruikbaar element op een website of app dat het merklogo toont. Het zorgt voor consistente plaatsing, formaat en stijl van het logo op verschillende pagina’s.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/logo";
```

<h2 id="examples">Voorbeelden</h2>


<a href="/" class="logo" aria-label="Logo bedrijfs- of product-naam, ga naar de homepage van bedrijfs- of product-naam">
  <img src="../../../../img/logo-dark.svg" alt="Logo bedrijfs- of product-naam" />
  Bedrijfs- of product-naam
</a>

```html
<a href="/" class="logo" aria-label="Logo bedrijfs- of product-naam, ga naar de homepage van bedrijfs- of product-naam">
  <img src="logo.svg" alt="Logo bedrijfs- of product-naam" />
  Bedrijfs- of product-naam
</a>

```