---
title: Layout authentication
breadcrumb: Layout authentication
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p class="introduction">Weergave voor authenticatie-elementen. Login formulieren hebben vaak belang bij
een smallere weergave dan overige formulieren.</p>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/layout-base";
@use "@minvws/manon/layout-authentication";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `div`

<div class="layout-authentication">
  <form class="background-color-offset">
    <div>
      <label for="example-1-name-1">User name</label>
      <input type="text" id="example-1-name-1" />
    </div>
    <div>
      <label for="example-1-password-1">Password</label>
      <input type="password" id="example-1-password-1" />
    </div>
    <button type="submit">Lorem ipsum</button>
  </form>
</div>

```html
<div class="layout-authentication">
  <form class="background-color-offset">
    <div>
      <label for="example-1-name-1">User name</label>
      <input type="text" id="example-1-name-1" />
    </div>
    <div>
      <label for="example-1-password-1">Password</label>
      <input type="password" id="example-1-password-1" />
    </div>
    <button type="submit">Lorem ipsum</button>
  </form>
</div>
```

### Voorbeeld: `section`

```html
<section class="layout-authentication">
  <div>
    <!-- Content -->
  </div>
</section>
```

### Voorbeeld: `article`

```html
<article class="layout-authentication">
  <div>
    <!-- Content -->
  </div>
</article>
```

### Voorbeeld: `form`

```html
<form class="layout-authentication">
  <!-- Content -->
</form>
```
