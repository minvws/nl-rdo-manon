---
title: Kleurselector volledig gevuld
breadcrumb: Kleurselector volledig gevuld
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

<p class="warning">
  <span class="notification-type">
    <span class="icon icon-warning" aria-hidden="true"></span>
    Waarschuwing
  </span>
  Dit element maakt gebruik van experimentele CSS componenten:
  ::-webkit-color-swatch-wrapper en ::-webkit-color-swatch.
  Aangeraden wordt om dit component in deze vorm daarom niet in productie te gebruiken
  aangezien het kan zijn dat het component er anders uit ziet in verschillende browsers of dat
  de styling bij toekomstige updates kapot gaat. Als dit geen probleem is binnen jouw project
  kun je er voor kiezen dit component te gebruiken.
</p>

<h2 id="introduction">Introductie</h2>

Een volledig gevulde kleurselector toont het volledige spectrum van beschikbare kleuren in één veld, waardoor de gebruiker snel en intuïtief een specifieke kleur kan kiezen. Dit maakt het selecteren van kleuren visueel duidelijker en gebruiksvriendelijker.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/form";
@use "@minvws/manon/components/form-input-color";
@use "@minvws/manon/components/form-input-color-filled";
```

<h2 id="examples">Voorbeelden</h2>

<form action="" method="post">
  <label for="color-input-1">Selecteer de gewenste kleur</label>
  <input id="color-input-1" name="color-input-1" type="color" value="#ffffff" />

<button type="submit">Verzend</button>

</form>

```html
<form action="" method="post">
  <label for="color-input-1">Selecteer de gewenste kleur</label>
  <input id="color-input-1" name="color-input-1" type="color" value="#ffffff" />

  <button type="submit">Verzend</button>
</form>
```

<div class="explanation">
  <span class="notification-type">
    <span class="icon icon-informative" aria-hidden="true"></span>
    Aandachtspunten
  </span>
    <p>Voeg `type="color"` toe aan het invoerveld.</p>
    <p>
      Voeg basiskleurwaarde met een hexidecimalekleurcode aan binnen: `value`.
      Voorbeeld: `value="#ffffff"`. De ingevoerde kleur is de kleur waarin het
      selectievak getoont wordt binnen het formulier voordat de gebruiker een
      andere keuze maakt.
    </p>
</div>
