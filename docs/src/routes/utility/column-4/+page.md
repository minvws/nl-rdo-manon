---
title: Layout vier kolommen
breadcrumb: Layout vier kolommen
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Layout vier kolommen</h1>

Verdeling in vier gelijke kolommen vanaf de ingestelde breekpunten.

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/layout-base";
@use "@minvws/manon/layout-column-4";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `div`

<div class="column-4">
  <div>
    <h2>Lorem ipsum dolor set</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
      luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
      sed, tempus in massa.
    </p>
  </div>

  <div>
    <h2>Lorem ipsum dolor set</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
      luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
      sed, tempus in massa.
    </p>
  </div>

  <div>
    <h2>Lorem ipsum dolor set</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
      luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
      sed, tempus in massa.
    </p>
  </div>
</div>

```html
<div class="column-4">
  <div>
    <h2>Lorem ipsum dolor set</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus,
      vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in
      massa.
    </p>
  </div>

  <div>
    <h2>Lorem ipsum dolor set</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus,
      vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in
      massa.
    </p>
  </div>

  <div>
    <h2>Lorem ipsum dolor set</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus,
      vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in
      massa.
    </p>
  </div>
</div>
```

### Voorbeeld: `section`

```html
<section class="column-4">
  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>
</section>
```

### Voorbeeld: `article`

```html
<article class="column-4">
  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>
</article>
```
