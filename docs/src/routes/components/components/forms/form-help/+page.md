---
title: Hulpteksten
breadcrumb: Hulpteksten
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Hulpteksten</h1>

Voor het geven van extra toelichting op een invoerveld.

## Benodigde stappen

1.  Voeg de benodigde bestanden toe aan het project.
    - Voor een overzicht van de benodigde en optionele bestanden zie:
      [Bijbehorende bestanden](#requirements).
    - Voeg het bijbehorende Javascript-bestand toe aan het project. Voor meer
      informatie zie: [JavaScript toevoegen](/documentation/add-js).
2.  Voeg de referentie naar het JavaScript bestand toe aan de `head` van de
    pagina. Voorbeeld:
    `script defer src="./pad/naar/form-help.min.js"></script>`.
3.  Voeg de class `help` toe aan het formulier.
4.  Groepeer het invoerveld met de bijbehorende hulptekst in een `div`.
5.  Voeg de hulptekst toe **onder** het invoerveld.

## Aandachtspunten

- Voeg de hulptekst toe **onder** het invoerveld. Hierdoor verspringt het
  formulier en de locatie waar de gebruiker interactie mee heeft zo min
  mogelijk. Hulpteksten die boven het invoerveld staan worden niet ingeklapt.
- De knop wordt automatisch toegevoegd. Deze hoeft dus niet handmatig in de html
  opgenomen te worden.
- Zonder JavaScript wordt de knop niet toegevoegd en wordt hulptekst getoont
  zonder deze in te klappen. Dit zorgt ervoor dat de hulpteksten ook beschikbaar
  zijn voor gebruikers zonder JavaScript.

<h2 id="examples">Voorbeelden</h2>

### Basis

#### Visueel voorbeeld

<form action="" method="post" class="help">
  <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
    >Help op simpel formulierveld</label
  >
  <div>
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

#### HTML-Voorbeeld

```html
<form action="" method="post" class="help">
  <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
    >Help op simpel formulierveld</label
  >
  <div>
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

### Verplicht invoerveld

<ol>
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
  <li>
    Groepeer het invoerveld en de bijbehorende helptekst binnen een
    `div` voor de correcte uitlijning van de helptekstenknop.
  </li>
</ol>

#### Visueel voorbeeld

<form action="" method="post" class="help">
  <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
    >Help op simpel formulierveld</label
  >
  <div>
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

```html
<form action="" method="post" class="help">
  <label for="example-input-help-required">Help op simpel formulierveld</label>
  <div>
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

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/form-help";
```
