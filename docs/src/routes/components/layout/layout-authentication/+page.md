---
title: Layout authentication
breadcrumb: Layout authentication
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Instelbare variabelen: "#variables"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Layout authenticatie</h1>

Weergave voor authenticatie-elementen. Login formulieren hebben vaak belang bij
een smallere weergave dan overige formulieren.

<h2 id="examples">Voorbeeld</h2>

### Visueel voorbeeld:

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

### HTML-voorbeeld:

#### `div`:

```html
<div class="layout-authentication">
  <!-- Content -->
</div>
```

#### `section`:

```html
<section class="layout-authentication">
  <div>
    <!-- Content -->
  </div>
</section>
```

#### `article`:

```html
<article class="layout-authentication">
  <div>
    <!-- Content -->
  </div>
</article>
```

#### `form`:

```html
<form class="layout-authentication">
  <!-- Content -->
</form>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/layout-base";
@use "@minvws/manon/layout-authentication";
```
