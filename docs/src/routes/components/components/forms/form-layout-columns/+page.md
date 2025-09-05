---
title: Weergave in kolommen
breadcrumb: Weergave in kolommen
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p id="introduction">Voor het weergeven van de inhoud van het formulier in kolommen.</p>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/form";
```

<p class="warning">
  <span>Waarschuwing:</span>
    <code>fieldset</code>met een <code>column-*</code>class met daarbinnen een
    <code>&lt;input type="date"&gt;</code> kunnen buiten de breedte van het formulier lopen.
</p>

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Basis

<form action="" method="post">
  <div class="column-2">
    <div>
      <label for="voorbeeld-1-date-1-start">van</label>
      <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" />
    </div>
    <div>
      <label for="voorbeeld-1-date-1-end">tot</label>
      <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end" />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post">
  <div class="column-2">
    <div>
      <label for="voorbeeld-1-date-1-start">van</label>
      <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" />
    </div>
    <div>
      <label for="voorbeeld-1-date-1-end">tot</label>
      <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end" />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
```
