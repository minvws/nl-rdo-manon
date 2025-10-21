---
title: Datum
breadcrumb: Datum
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Een datumveld stelt de gebruiker in staat om eenvoudig een datum te selecteren via een kalenderinterface of direct in te voeren. Dit maakt het invullen sneller, nauwkeuriger en minder foutgevoelig dan handmatige tekstinvoer.

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/components/form";
@use "@minvws/manon/components/form-input";
```

<h2 id="examples">Voorbeelden</h2>

<form action="" method="post">
  <label for="voorbeeld-date-1">Datum</label>
  <input id="voorbeeld-date-1" name="voorbeeld-date-1" type="date" />
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post">
  <label for="voorbeeld-date-1">Datum</label>
  <input id="voorbeeld-date-1" name="voorbeeld-date-1" type="date" />
  <button type="submit">Verzend</button>
</form>
```
