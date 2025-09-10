---
title: Bereik
breadcrumb: Bereik
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Bereik component

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/form";
```

<p class="explanation">
  <strong>Tip:</strong> Om bereik-invoervelden een eigen gekozen kleur mee te geven kan
  gebruik gemaakt worden van
  <a href="/library/components/forms/form-layout-accent-color">accentkleur op formulierelementen</a>.
</p>

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Basis

<form action="" method="post">
  <div>
    <label for="range-example-1">Range</label>
    <input type="range" id="range-example-1" name="range-example-1" min="0" max="100" />
  </div>
</form>

```html
<form action="" method="post">
  <div>
    <label for="range-example-1">Range</label>
    <input type="range" id="range-example-1" name="range-example-1" min="0" max="100" />
  </div>
</form>
```

### Voorbeeld: Horizontaal uitgelijnd

<form action="" method="post">
  <div class="horizontal">
    <label for="range-example-2">Range</label>
    <input type="range" id="range-example-2" name="range-example-2" min="0" max="100" />
  </div>
</form>

```html
<form action="" method="post">
  <div class="horizontal">
    <label for="range-example-2">Range</label>
    <input type="range" id="range-example-2" name="range-example-2" min="0" max="100" />
  </div>
</form>
```
