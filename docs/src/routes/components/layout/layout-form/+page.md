---
title: Layout form
breadcrumb: Layout form
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Weergave opties voor pagina's met als formulieren als hoofdfunctie. Het is ook mogelijk om de weergave van alle formulieren aan te passen. Gebruik
daarvoor: [Basis formulieren](/components/components/form).

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/layout-form";
```

<h2 id="examples">Voorbeelden:</h2>

### Voorbeeld: `div`

<div class="layout-form">
  <form class="background-color-offset">
    <div>
      <label for="example-div-name-1">User name</label>
      <input type="text" id="example-div-name-1" />
    </div>
    <div>
      <label for="example-div-password-1">Password</label>
      <input type="password" id="example-div-password-1" />
    </div>
    <button type="submit">Lorem ipsum</button>
  </form>
</div>

### Voorbeeld: `section`

```html
<section class="layout-form">
  <div>
    <!-- Content -->
  </div>
</section>
```

### Voorbeeld: `article`

```html
<article class="layout-form">
  <div>
    <!-- Content -->
  </div>
</article>
```

### Voorbeeld: `form`

```html
<form class="layout-form">
  <!-- Content -->
</form>
```
