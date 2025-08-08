---
title: Kleurselector
breadcrumb: Kleurselector
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Kleurselector</h1>

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  voeg `type="color"` toe aan het invoerveld.
3.  Voeg basiskleurwaarde met een hexidecimalekleurcode aan binnen: `value`.
    Voorbeeld: `value="#ffffff"`. De ingevoerde kleur is de kleur waarin het
    selectievak getoont wordt binnen het formulier voordat de gebruiker een
    andere keuze maakt.

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

#### direct

<form action="" method="post">
  <label for="color-input-1">Selecteer de gewenste kleur</label>
  <input id="color-input-1" name="color-input-1" type="color" value="#ffffff" />

<button type="submit">Verzend</button>

</form>

### HTML-voorbeeld:

#### `section`

```html
<form action="" method="post">
  <label for="color-input-1">Selecteer de gewenste kleur</label>
  <input id="color-input-1" name="color-input-1" type="color" value="#ffffff" />

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
@use "@minvws/manon/form-input-color";
```
