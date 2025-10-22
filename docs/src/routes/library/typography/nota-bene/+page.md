---
title: Nota bene
breadcrumb: Nota bene
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

"Nota bene" dient om de aandacht van de gebruiker te vestigen op cruciale informatie.

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/components/nota-bene";
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

### Losstaande span

<span class="nota-bene">Lorem ipsum dolor sit</span>

```html
<span class="nota-bene">Lorem ipsum dolor sit</span>
```

### Bij een invoerveld

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
