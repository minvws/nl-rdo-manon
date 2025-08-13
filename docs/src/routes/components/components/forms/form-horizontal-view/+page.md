---
title: Horizontaal uitgelijnd
breadcrumb: Horizontaal uitgelijnd
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Horizontaal uitgelijnd</h1>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/form";
@use "@minvws/manon/form-horizontal";

/* Optional */
@use "@minvws/manon/form-horizontal-fieldset";
```

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Voeg de gewenste velden toe. Zie onderstaand voorbeeld voor meer informatie.
    Alle binnen html beschikbare formulier-elementen kunnen gebruikt worden.
    Voor een overzicht van beschikbare voorbeelden binnen Manon zie
    [formulierelementen](/forms#form-types).
3.  Groepeer bij elkaar horende elementen in een `div`. Bijvoorbeeld een `label`
    en een `input`.

<h2 id="examples">Voorbeelden</h2>

Het basisvoorbeeld met een invoerveld en een verzendknop.

### Basis

#### Voorbeeld

Visueel voorbeeld:

<form action="" method="post" class="horizontal">
  <div>
    <label for="form-example-1">Voorbeeld text input</label>
    <input id="form-example-1" name="form-example-1" type="text" />
  </div>
  <button type="submit">Verzend</button>
</form>

<p>HTML-voorbeeld:</p>

```html
<form action="" method="post" class="horizontal">
  <div>
    <label for="form-example-1">Voorbeeld text input</label>
    <input id="form-example-1" name="form-example-1" type="text" />
  </div>
  <button type="submit">Verzend</button>
</form>
```

<h2>`fieldset`</h2>

<h3>Aandachtspunten:</h3>

<ul>
  <li>
    Een fieldset is een groep met bij elkaar horende formuliervragen. Groepeer deze vragen
    binnen een fieldset met in de `legend` een omschrijvende naam.
  </li>
  <li>
    Fieldsets kunnen geen gebruik maken van flex-box. Hierdoor hebben fieldset andere
    styling nodig dan de overige elementen. **Voeg het .scss bestand: `form-horizontal-fieldset.scss` toe** aan het project om gebruik te maken van fieldsets en een horizontaal weergegeven formulier.
  </li>

  <li>
    Voeg optioneel het bestand:`form-horizontal-fieldset-variables.scss` toe om de
    uitlijning van de labels ten opzichte van de velden aan te passen.
  </li>
</ul>

<h3>Visueel voorbeeld:</h3>

<form action="" method="post" class="horizontal">
  <fieldset>
    <legend>Fieldset test</legend>
    <div>
      <label for="form-example-2">Voorbeeld text input</label>
      <input id="form-example-2" name="form-example-2" type="text" />
    </div>
  </fieldset>
  <button type="submit">Verzend</button>
</form>

<p>HTML-voorbeeld:</p>

```html
<form action="" method="post" class="horizontal">
  <fieldset>
    <legend>Fieldset test</legend>
    <div>
      <label for="form-example-2">Voorbeeld text input</label>
      <input id="form-example-2" name="form-example-2" type="text" />
    </div>
  </fieldset>
  <button type="submit">Verzend</button>
</form>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)
