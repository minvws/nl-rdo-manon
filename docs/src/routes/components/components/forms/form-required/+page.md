---
title: Verplichte velden
breadcrumb: Verplichte velden
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p id="introduction">Voor het weergeven van verplichte velden.</p>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/form";
@use "@minvws/manon/form-nota-bene";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Invoerveld verplicht

<form action="" method="post">
  <div>
    <label for="voorbeeld-input-required">Ipsum</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input
        id="voorbeeld-input-required"
        name="voorbeeld-input-required"
        type="text"
        required
      />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post">
  <div>
    <label for="voorbeeld-input-required">Ipsum</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input
        id="voorbeeld-input-required"
        name="voorbeeld-input-required"
        type="text"
        required
      />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
```

<p class="explanation">
  <span>Aandachtspunten:</span>
  Voeg een `span` toe boven het inputveld. Het is belangrijk om het bericht
  boven het invoerveld te plaatsen zodat de volgorde ook klopt voor gebruikers
  die gebruik maken van hulpmiddelen zoals een screenreader.
</p>
