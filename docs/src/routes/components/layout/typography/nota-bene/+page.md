---
title: Nota bene
breadcrumb: Nota bene
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Nota bene</h1>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/text/nota-bene";
@use "@minvws/manon/text/nota-bene-variables";
```

### Benodigde stappen

1.  Geef op de `<input>` aan dat het invoerveld verplicht is met het `required`
    attribuut.
2.  Voeg een `<span>` toe boven het inputveld. Het is belangrijk om het bericht
    boven het invoerveld te plaatsen zodat de volgorde ook klopt voor gebruikers
    die gebruik maken van hulpmiddelen zoals een screenreader.
3.  Groeppeer de `<input>` en de `<span>` samen in een `<div>` voor de correcte
    weergave.

<h2 id="examples">Voorbeelden</h2>

### Nota bene

<form action="" method="post">
  <div>
    <label for="nota-bene-input">Ipsum</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input id="nota-bene-input" name="nota-bene-input" type="text" />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post">
  <div>
    <label for="nota-bene-input">Ipsum</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input id="nota-bene-input" name="nota-bene-input" type="text" />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
```
