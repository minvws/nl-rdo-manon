---
title: Accentkleur op formulierelementen
breadcrumb: Accentkleur op formulierelementen
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<p class="warning" role="group" aria-label="waarschuwing">
  <span>Waarschuwing:</span> Dit element maakt gebruik van een nieuw CSS component. Moderne
  browsers geven aan dit element te ondersteunen. Het kan zijn dat de weergave in oude
  browsers anders zal zijn. Voor meer informatie zie:
  <a href="https://caniuse.com/?search=accent-color" rel="external">caniuse.com</a>.
</p>

<h1 id="introduction">Accentkleur op formulierelementen</h1>

De mogelijkheid om een accentkleur in te stellen. Deze kleur zal getoont worden
op:

- Geselecteerde selectievakken
- Geselecteerde radioselectieknoppen
- Voortgangsbalken
- `range`

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Stel de accentkleur voor het project in binnen `applicatie-base-variables`
    of specifiek voor fomulierelementen in binnen `form-accent-color-variables`.

<h2 id="examples">Voorbeelden</h2>

### Selectievak - `checkbox`

#### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" checked />
    <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <input
      type="checkbox"
      id="checkbox-example-base"
      name="standaard-checkbox"
      checked
    />
    <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>
```

### Radioselectieknop - `radio`

#### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <input type="radio" id="radio-example-base" name="standaard-radio" checked />
    <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <input
      type="radio"
      id="radio-example-base"
      name="standaard-radio"
      checked
    />
    <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>
```

### Voortgangsbalk

#### Visueel voorbeeld:

<form action="" method="post">
  <div class="horizontal">
    <label
      for="progress-example"
      role="progressbar"
      aria-busy="true"
      aria-labelledby="progess-example">Progress:</label
    >
    <progress id="progress-example" value="42" max="100">42%</progress>
  </div>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div class="horizontal">
    <label
      for="progress-example"
      role="progressbar"
      aria-busy="true"
      aria-labelledby="progess-example"
      >Progress:</label
    >
    <progress id="progress-example" value="42" max="100">42%</progress>
  </div>
</form>
```

### Bereik - `range`

#### Visueel voorbeeld:

<form action="" method="post">
  <div class="horizontal">
    <label for="range-example">Range</label>
    <input type="range" id="range-example" name="range-example" min="0" max="100" />
  </div>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div class="horizontal">
    <label for="range-example">Range</label>
    <input
      type="range"
      id="range-example"
      name="range-example"
      min="0"
      max="100"
    />
  </div>
</form>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/form-accent-color";
```
