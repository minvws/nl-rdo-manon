---
title: Kleurselector
breadcrumb: Kleurselector
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Een kleurselector stelt de gebruiker in staat om een kleur te kiezen uit een visuele interface, zoals een kleurveld of kleurkiezer. Dit is handig bij toepassingen waar specifieke kleuren belangrijk zijn, bijvoorbeeld bij ontwerp- of personalisatie-instellingen.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/form";
@use "@minvws/manon/components/form-input-color";
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
