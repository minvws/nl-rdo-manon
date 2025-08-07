---
title: Kleurselector volledig gevuld
breadcrumb: Kleurselector volledig gevuld
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<p class="warning" role="group" aria-label="waarschuwing">
  <span>Waarschuwing:</span> Dit element maakt gebruik van experimentele CSS componenten:
  <code>::-webkit-color-swatch-wrapper</code> en <code>::-webkit-color-swatch</code>.
  Aangeraden wordt om dit component in deze vorm daarom niet in productie te gebruiken
  aangezien het kan zijn dat het component er anders uit ziet in verschillende browsers of dat
  de styling bij toekomstige updates kapot gaat. Als dit geen probleem is binnen jouw project
  kun je er voor kiezen dit component te gebruiken.
</p>

<h1 id="introduction">Kleurselector volledig gevuld</h1>

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  voeg `type="color"` toe aan het invoerveld.
3.  Voeg basiskleurwaarde met een hexidecimalekleurcode aan binnen: `value`.
    Voorbeeld: `value="#ffffff"`. De ingevoerde kleur is de kleur waarin het
    selectievak getoond wordt binnen het formulier voordat de gebruiker een
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
@use "@minvws/manon/form-input-color-filled";
```
