---
title: "inline"-formulier
breadcrumb: "inline"-formulier
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quick-start"
  - Voorbeelden: "#examples"
---

<p id="introduction">In sommige gevallen is er om technische redenen een formulier nodig rondom een
knop maar is het niet nodig om deze visueel binnen een formulier te plaatsen.
Voor die situaties is dit voorbeeld geschikt.</p>

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/form";
@use "@minvws/manon/form-inline";
```

<h2 id="examples">Voorbeelden</h2>

Het basisvoorbeeld met een invoerveld en een verzendknop.

### Voorbeeld: Basis

<form action="" method="post" class="inline">
  <button type="submit">Haal gegevens op</button>
</form>

```html
<form action="" method="post" class="inline">
  <button type="submit">Haal gegevens op</button>
</form>
```
