---
title: Invoerveld
breadcrumb: Invoerveld
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p id="introduction">Invoervelden worden gebruikt voor het vragen van korte informatie.</p>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```css
@use "@minvws/manon/form";
@use "@minvws/manon/form-input";
```

<h2 id="examples">Voorbeelden</h2>

## Voorbeeld: Basis

<form action="" method="post">
  <label for="example-input-base">Voorbeeld invoerveld</label>
  <input id="example-input-base" name="example-input-base" type="text" />
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post">
  <label for="example-input-base">Voorbeeld invoerveld</label>
  <input id="example-input-base" name="example-input-base" type="text" />
  <button type="submit">Verzend</button>
</form>
```

## Voorbeeld: Verplicht invoerveld

<form action="" method="post">
  <label for="example-input-required">Gebruikersnaam</label>
  <span class="nota-bene">Dit veld is verplicht</span>
  <input id="example-input-required" name="example-input-required" type="text" required />
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post">
  <label for="example-input-required">Gebruikersnaam</label>
  <span class="nota-bene">Dit veld is verplicht</span>
  <input
    id="example-input-required"
    name="example-input-required"
    type="text"
    required
  />
  <button type="submit">Verzend</button>
</form>
```

<div class="explanation" role="group" aria-label="Toelichting">
  <span>Aandachtspunten</span>
  <ul>
    <li>
      Geef op de `input` aan dat het invoerveld verplicht is met het
      `required` attribuut.
    </li>
    <li>
      Voeg een span toe boven het invoerveld. Het is belangrijk om het bericht boven het
      invoerveld te plaatsen zodat de volgorde ook klopt voor gebruikers die gebruik maken van
      hulpmiddelen zoals een screenreader.
    </li>
    <li>
      Groeppeer de `input` en de `span` samen in een `div` binnen horizontaal uitgelijnde formulieren.
    </li>
  </ul>
</div>

## Voorbeeld: Invoerveld uitgeschakeld

<form action="" method="post">
  <label for="example-input-disabled">Gebruikersnaam</label>
  <input id="example-input-disabled" name="example-input-disabled" type="text" disabled />
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post">
  <label for="example-input-disabled">Gebruikersnaam</label>
  <input
    id="example-input-disabled"
    name="example-input-disabled"
    type="text"
    disabled
  />
  <button type="submit">Verzend</button>
</form>
```

<div class="explanation" role="group" aria-label="Toelichting">
  <span>Aandachtspunten</span>
  <ul>
    <li>
      Geef op de `input` aan dat het invoerveld uitgeschakeld is met het
      `disabled` attribuut.
    </li>
  </ul>
</div>
