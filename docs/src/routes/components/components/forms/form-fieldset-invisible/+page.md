---
title: Onzichtbare fieldset
breadcrumb: Onzichtbare fieldset
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p class="introduction">Dit is een visueel onzichtbare fieldset. Het is een HTML-element dat wordt
gebruikt om gerelateerde formulierelementen te groeperen, maar het is niet
zichtbaar voor de gebruiker. Dit kan nuttig zijn voor toegankelijkheid, omdat
het screenreaders helpt om de structuur van het formulier te begrijpen zonder
visuele afleiding.</p>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/form";
@use "@minvws/manon/form-fieldset";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Basis

<form action="" method="post">
  <fieldset>
    <legend>Fieldset test</legend>
    <label for="form-example-base">Voorbeeld text input</label>
    <input id="form-example-base" name="form-example-base" type="text" />
    <label for="form-example-base-2">Voorbeeld text input</label>
    <input id="form-example-base-2" name="form-example-base-2" type="text" />
  </fieldset>
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post">
  <fieldset>
    <legend>Fieldset test</legend>
    <label for="form-example-base">Voorbeeld text input</label>
    <input id="form-example-base" name="form-example-base" type="text" />
    <label for="form-example-base-2">Voorbeeld text input</label>
    <input id="form-example-base-2" name="form-example-base-2" type="text" />
  </fieldset>
  <button type="submit">Verzend</button>
</form>
```
