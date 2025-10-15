---
title: Invoerveld
breadcrumb: Invoerveld
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Invoervelden worden gebruikt om korte stukjes informatie van de gebruiker te vragen, zoals naam, adres of telefoonnummer.

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
  <input id="example-input-required" name="example-input-required" type="text" required />
  <button type="submit">Verzend</button>
</form>
```

<div class="explanation">
  <span class="notification-type">
    <span class="icon icon-informative" aria-hidden="true"></span>
    Aandachtspunten
  </span>
  <p>
    Geef op de `input` aan dat het invoerveld verplicht is met het
    `required` attribuut.
  </p>
  <p>
    Voeg een span toe boven het invoerveld. Het is belangrijk om het bericht boven het
    invoerveld te plaatsen zodat de volgorde ook klopt voor gebruikers die gebruik maken van
    hulpmiddelen zoals een screenreader.
  </p>
  <p>
    Groeppeer de `input` en de `span` samen in een `div` binnen horizontaal uitgelijnde formulieren.
  </p>
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
  <input id="example-input-disabled" name="example-input-disabled" type="text" disabled />
  <button type="submit">Verzend</button>
</form>
```

<p class="explanation">
  <span class="notification-type">
    <span class="icon icon-informative" aria-hidden="true"></span>
    Aandachtspunten
  </span>
  Geef op de `input` aan dat het invoerveld uitgeschakeld is met het
  `disabled` attribuut.
</p>
