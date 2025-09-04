---
title: Layout set
breadcrumb: Layout set
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Introductie</h1>

Basisset voor het vastleggen van layout-keuzes vanuit een centraal punt.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/layout-set";
```

<h2 id="examples">Voorbeelden</h2>

### Variabele gebruiken binnen een andere variabele

In dit voorbeeld stellen we de padding aan de bovenkant van de `main` in op
basis van een variabelen die gezet is binnen deze set. In dit geval zetten we de
witruimte aan de bovenkant van de pagina bovenaan de `main`.
