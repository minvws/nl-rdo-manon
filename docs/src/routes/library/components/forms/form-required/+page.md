---
title: Verplichte velden
breadcrumb: Verplichte velden
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Verplichte velden worden in een formulier duidelijk gemarkeerd zodat de gebruiker weet welke informatie minimaal ingevuld moet worden. Dit helpt om onvolledige inzendingen te voorkomen en zorgt voor een betere gegevenskwaliteit.

Als de meeste velden binnen het formulier verplicht zijn, kan de uitzondering “dit veld is niet verplicht” als toevoeging krijgen. Door de uitzondering te markeren in plaats van alle verplichte velden wordt onnodige herhaling voorkomen.

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
      <input id="voorbeeld-input-required" name="voorbeeld-input-required" type="text" required />
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
