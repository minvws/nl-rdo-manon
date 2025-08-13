---
title: Kleurselector
breadcrumb: Kleurselector
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Kleurselector</h1>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/form";
@use "@minvws/manon/form-input-color";
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

<div class="explanation" role="group" aria-label="Toelichting">
  <span>Aandachtspunten</span>
  <ul>
    <li>
      Voeg `type="color"` toe aan het invoerveld.
    </li>
    <li>
      Voeg basiskleurwaarde met een hexidecimalekleurcode aan binnen: `value`.
      Voorbeeld: `value="#ffffff"`. De ingevoerde kleur is de kleur waarin het
      selectievak getoont wordt binnen het formulier voordat de gebruiker een
      andere keuze maakt.
    </li>
  </ul>
</div>
