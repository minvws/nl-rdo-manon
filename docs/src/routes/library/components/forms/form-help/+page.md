---
title: Hulpteksten
breadcrumb: Hulpteksten
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Hulptesksten (extra toelichting) bij een invoerveld geeft de gebruiker duidelijke aanwijzingen en vermindert fouten, maar te veel uitleg kan juist verwarrend werken.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/form-help";
```

JavaScript importeren:

```javascript
import "@minvws/manon/js/form-help.js";
```

### Benodigde stappen

1. Voeg de hulptekst toe **onder** het invoerveld. Hierdoor verspringt het
   formulier en de locatie waar de gebruiker interactie mee heeft zo min
   mogelijk. Hulpteksten die boven het invoerveld staan worden niet ingeklapt.
2. De knop wordt automatisch toegevoegd. Deze hoeft dus niet handmatig in de
   html opgenomen te worden.
3. Zonder JavaScript wordt de knop niet toegevoegd en wordt hulptekst getoont
   zonder deze in te klappen. Dit zorgt ervoor dat de hulpteksten ook
   beschikbaar zijn voor gebruikers zonder JavaScript.

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Basis

<form action="" method="post" class="help">
  <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
    >Help op simpel formulierveld</label
  >
  <div class="help-container">
    <input
      id="voorbeeld-text-input-met-hulptekst-simpel-1"
      name="voorbeeld-text-input"
      type="text"
      aria-describedby="voorbeeld-text-input-met-hulptekst-simpel-1-message"
    />
    <p
      class="explanation"
      data-open-label="Toelichting bij het veld: Voorbeeld text input"
      data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
      id="voorbeeld-text-input-met-hulptekst-simpel-1-message"
    >
      Lorem ipsum dolor sit amet.
    </p>
  </div>

<button type="submit">Verzend</button>

</form>

```html
<form action="" method="post" class="help">
  <label for="voorbeeld-text-input-met-hulptekst-simpel-1">Help op simpel formulierveld</label>
  <div class="help-container">
    <input
      id="voorbeeld-text-input-met-hulptekst-simpel-1"
      name="voorbeeld-text-input"
      type="text"
      aria-describedby="voorbeeld-text-input-met-hulptekst-simpel-1-message"
    />
    <p
      class="explanation"
      data-open-label="Toelichting bij het veld: Voorbeeld text input"
      data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
      id="voorbeeld-text-input-met-hulptekst-simpel-1-message"
    >
      Lorem ipsum dolor sit amet.
    </p>
  </div>

  <button type="submit">Verzend</button>
</form>
```

### Voorbeeld: Verplicht invoerveld

<form action="" method="post" class="help">
  <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
    >Help op simpel formulierveld</label
  >
  <div class="help-container">
    <span class="nota-bene">Dit veld is verplicht</span>
    <div class="help-container">
      <input
        id="example-input-help-required"
        name="voorbeeld-text-input"
        type="text"
        aria-describedby="example-input-help-required-message"
        required
      />
      <p
        class="explanation"
        data-open-label="Toelichting bij het veld: Voorbeeld text input"
        data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
        id="example-input-help-required-message"
      >
        Lorem ipsum dolor sit amet.
      </p>
    </div>
  </div>

<button type="submit">Verzend</button>

</form>

```html
<form action="" method="post" class="help">
  <label for="example-input-help-required">Help op simpel formulierveld</label>
  <div class="help-container">
    <span class="nota-bene">Dit veld is verplicht</span>
    <div>
      <input
        id="example-input-help-required"
        name="voorbeeld-text-input"
        type="text"
        aria-describedby="example-input-help-required-message"
        required
      />
      <p
        class="explanation"
        data-open-label="Toelichting bij het veld: Voorbeeld text input"
        data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
        id="example-input-help-required-message"
      >
        Lorem ipsum dolor sit amet.
      </p>
    </div>
  </div>

  <button type="submit">Verzend</button>
</form>
```
