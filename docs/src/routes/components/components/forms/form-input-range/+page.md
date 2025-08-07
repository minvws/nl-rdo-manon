---
title: Bereik
breadcrumb: Bereik
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Bereik - `range`</h1>

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Voeg de `<range>` toe. Zie onderstaand voorbeeld voor meer informatie.

<p class="explanation">
  <strong>Tip:</strong> Om bereik-invoervelden een eigen gekozen kleur mee te geven kan
  gebruik gemaakt worden van
  <a href="/components/form-accent-color">accentkleur op formulierelementen</a>.
</p>

<h2 id="examples">Voorbeelden</h2>

### Basis

#### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <label for="range-example-1">Range</label>
    <input type="range" id="range-example-1" name="range-example-1" min="0" max="100" />
  </div>
</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <label for="range-example-1">Range</label>
    <input
      type="range"
      id="range-example-1"
      name="range-example-1"
      min="0"
      max="100"
    />
  </div>
</form>
```

### Horizontaal uitgelijnd

#### Visueel voorbeeld:

<form action="" method="post">
  <div class="horizontal">
    <label for="range-example-2">Range</label>
    <input type="range" id="range-example-2" name="range-example-2" min="0" max="100" />
  </div>
</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <div class="horizontal">
    <label for="range-example-2">Range</label>
    <input
      type="range"
      id="range-example-2"
      name="range-example-2"
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
@use "@minvws/manon/form";
```
