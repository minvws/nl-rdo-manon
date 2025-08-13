---
title: Horizontaal uitgelijnd
breadcrumb: Horizontaal uitgelijnd
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Horizontaal uitgelijnd</h1>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/form";
@use "@minvws/manon/form-horizontal";

/* Optional */
@use "@minvws/manon/form-horizontal-fieldset";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Basis

<form action="" method="post" class="horizontal">
  <div>
    <label for="form-example-1">Voorbeeld text input</label>
    <input id="form-example-1" name="form-example-1" type="text" />
  </div>
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post" class="horizontal">
  <div>
    <label for="form-example-1">Voorbeeld text input</label>
    <input id="form-example-1" name="form-example-1" type="text" />
  </div>
  <button type="submit">Verzend</button>
</form>
```

### Voorbeeld: `fieldset`

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

<div class="explanation" role="group" aria-label="Toelichting">
  <span>Aandachtspunten</span>
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
</div>
