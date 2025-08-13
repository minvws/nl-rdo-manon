---
title: Basisformulier
breadcrumb: Basisformulier
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Basisformulier</h1>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/form";
```

Invoervelden worden gebruikt voor het vragen van korte informatie.

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Voeg de gewenste velden toe. Zie onderstaand voorbeeld voor meer informatie.
    Alle binnen html beschikbare formulierelementen kunnen gebruikt worden. Voor
    een overzicht van beschikbare voorbeelden binnen Manon zie
    [formulierelementen](/forms#form-types).
3.  Groepeer de formulierelementen voor toegankelijkheid en gebruikersgemak. Zie
    [Invoervelden groeperen](/components/form-fieldset) voor meer informatie.
4.  Voeg indien nodig of ten behoeve van gebruikersgemak meldingen,
    toelichtingen en instructies toe aan het formulier.
5.  Voeg waar nodig validatie toe.

<h2 id="examples">Voorbeelden</h2>

Het basisvoorbeeld met een invoerveld en een verzendknop.

### Basis

#### Visueel voorbeeld:

<form action="" method="post">
  <label for="example-input-base">Voorbeeld invoerveld</label>

  <div>
    <span class="nota-bene" id="form-example-base-explanation"
      >Voorbeeld van een instructietekst
    </span>
    <input
      id="form-example-base"
      name="example-input-base"
      type="text"
      aria-describedby="form-example-base-explanation"
    />
  </div>

<button type="submit">Verzend</button>

</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="example-input-base">Voorbeeld invoerveld</label>

  <div>
    <span class="nota-bene" id="form-example-base-explanation"
      >Voorbeeld van een instructietekst
    </span>
    <input
      id="example-input-base"
      name="example-input-base"
      type="text"
      aria-describedby="form-example-base-explanation"
    />
  </div>

  <button type="submit">Verzend</button>
</form>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)
