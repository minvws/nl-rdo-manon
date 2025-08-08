---
title: Selectielijst
breadcrumb: Selectielijst
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<p class="warning" role="group" aria-label="waarschuwing">
  <span>Waarschuwing:</span> Het `select`-element wordt binnen browsers en
  bestuurssystemen verschillend weergegeven. Hierdoor kan aangepaste styling onverwachte
  resultaten opleveren. Test daarom altijd grondig of gebruik de standaard weergave zonder
  visuele aanpassingen.
</p>

<h1 id="introduction">Selectielijst - `select`</h1>

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Voeg de `<range>` toe. Zie onderstaand voorbeeld voor meer informatie.

## Aandachtspunten:

- Als een selectielijst een verplicht invoerveld is, voeg dan altijd als eerste
  optie een lege optie toe:
  `<option value="">--Please choose an option--</option>` Zie
  [Verplichte selectielijst](#form-dropdown-required) voor meer informatie.

<h2 id="examples">Voorbeelden</h2>

### Basis

#### Visueel voorbeeld:

<form action="" method="post">
  <label for="select-base">Selectielijst</label>
  <select id="select-base" name="select-base">
    <option value="1">Optie 1</option>
    <option value="2">Optie 2</option>
    <option value="3">Optie 3</option>
  </select>

<button type="submit">Verzend</button>

</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="select-base">Selectielijst</label>
  <select id="select-base" name="select-base">
    <option value="1">Optie 1</option>
    <option value="2">Optie 2</option>
    <option value="3">Optie 3</option>
  </select>

  <button type="submit">Verzend</button>
</form>
```

### Horizontaal uitgelijnd

#### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <label for="select-horizontal">Selectielijst</label>
    <select id="select-horizontal" name="select-horizontal">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
  </div>

<button type="submit">Verzend</button>

</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <label for="select-horizontal">Selectielijst</label>
    <select id="select-horizontal" name="select-horizontal">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
  </div>

  <button type="submit">Verzend</button>
</form>
```

<h3 id="form-dropdown-required">Verplicht</h3>

#### Voorbeeld

Visueel voorbeeld:

<form action="" method="post">
  <label for="select-required">Verplichte selectielijst</label>
  <span class="nota-bene">Dit veld is verplicht</span>
  <select id="select-required" name="select-required" required>
    <option value="">--Please choose an option--</option>
    <option value="1">Optie 1</option>
    <option value="2">Optie 2</option>
    <option value="3">Optie 3</option>
  </select>

<button type="submit">Verzend</button>

</form>

<p>HTML-voorbeeld:</p>

```html
<form action="" method="post">
  <label for="select-required">Verplichte selectielijst</label>
  <span class="nota-bene">Dit veld is verplicht</span>
  <select id="select-required" name="select-required" required>
    <option value="">--Please choose an option--</option>
    <option value="1">Optie 1</option>
    <option value="2">Optie 2</option>
    <option value="3">Optie 3</option>
  </select>

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
@use "@minvws/manon/form-select";
```
