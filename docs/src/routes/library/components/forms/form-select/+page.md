---
title: Selectielijst
breadcrumb: Selectielijst
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Een selectielijst toont gebruikers een overzicht van beschikbare opties waaruit ze één (of meerdere) keuze(s) kunnen maken. Dit is handig om invoer te standaardiseren en fouten te verminderen bij het selecteren van vooraf gedefinieerde waarden.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/form";
@use "@minvws/manon/components/form-select";
```

<p class="warning">
  <span class="notification-type">
    <span class="icon icon-warning" aria-hidden="true"></span>
    Waarschuwing
  </span>
  Het `select`-element wordt binnen browsers en
  bestuurssystemen verschillend weergegeven. Hierdoor kan aangepaste styling onverwachte
  resultaten opleveren. Test daarom altijd grondig of gebruik de standaard weergave zonder
  visuele aanpassingen.
</p>

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Basis

<form action="" method="post">
  <label for="select-base">Selectielijst</label>
  <select id="select-base" name="select-base">
    <option value="1">Optie 1</option>
    <option value="2">Optie 2</option>
    <option value="3">Optie 3</option>
  </select>

<button type="submit">Verzend</button>

</form>

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

### Voorbeeld: Horizontaal uitgelijnd

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

### Voorbeeld: Verplichte selectielijst

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

<p class="explanation">
  <span class="notification-type">
    <span class="icon icon-informative" aria-hidden="true"></span>
    Aandachtspunten
  </span>
  Het `select`-element wordt binnen browsers en
  Als een selectielijst een verplicht invoerveld is, voeg dan altijd als eerste
  optie een lege optie toe: <code><option value="">--Please choose an option--</option></code>
</p>
