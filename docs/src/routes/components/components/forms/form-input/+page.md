---
title: Invoerveld
breadcrumb: Invoerveld
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Invoerveld</h1>

Invoervelden worden gebruikt voor het vragen van korte informatie.

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).

## Aandachtspunten

- Voeg de volledige code toe die in de voorbeelden staat om alle gebruikers een
  goede gebruikerservaring the bieden. Denk hierbij aan gebruikers die
  kleurenblind zijn of gebruikers die gebruik maken van hulptechnologiën.

<h2 id="examples">Voorbeelden</h2>

## Basis

#### Visueel voorbeeld:

<form action="" method="post">
  <label for="example-input-base">Voorbeeld invoerveld</label>
  <input id="example-input-base" name="example-input-base" type="text" />
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="example-input-base">Voorbeeld invoerveld</label>
  <input id="example-input-base" name="example-input-base" type="text" />
  <button type="submit">Verzend</button>
</form>
```

## Verplicht invoerveld

<p>Aandachtspunten:</p>
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
    Groeppeer de `input` en de `span` samen in een
    `div` binnen horizontaal uitgelijnde formulieren.
  </li>
</ul>

#### Visueel voorbeeld:

<form action="" method="post">
  <label for="example-input-required">Gebruikersnaam</label>
  <span class="nota-bene">Dit veld is verplicht</span>
  <input id="example-input-required" name="example-input-required" type="text" required />
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

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

## Invoerveld uitgeschakeld

<p>Aandachtspunten:</p>
<ul>
  <li>
    Geef op de `input` aan dat het invoerveld uitgeschakeld is met het
    `disabled` attribuut.
  </li>
</ul>

#### Visueel voorbeeld:

<form action="" method="post">
  <label for="example-input-disabled">Gebruikersnaam</label>
  <input id="example-input-disabled" name="example-input-disabled" type="text" disabled />
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

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

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/form";
@use "@minvws/manon/form-input";
```
