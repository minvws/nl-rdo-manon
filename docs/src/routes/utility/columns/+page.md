---
title: columns
breadcrumb: columns
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Het verdelen van de content over kolommen.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/columns";
```

Beschikbare classes: `column-2`, `column-3`, `column-4`

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `div`

<div class="column-2">
  <div>
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

  <div>
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
</div>

```html
<div class="column-2">
  <div>
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus,
      vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in
      massa.
    </p>
  </div>

  <div>
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus,
      vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in
      massa.
    </p>
  </div>
</div>
```

<div class="column-3">
  <div>
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

  <div>
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

  <div>
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
</div>

```html
<div class="column-3">
  <div>
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus,
      vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in
      massa.
    </p>
  </div>

  <div>
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus,
      vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in
      massa.
    </p>
  </div>

  <div>
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus,
      vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in
      massa.
    </p>
  </div>
</div>
```

<div class="column-4">
  <div>
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

  <div>
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

  <div>
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

  <div>
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
</div>

```html
<div class="column-4">
  <div>
    <h2>Lorem ipsum</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>

  <div>
    <h2>Lorem ipsum</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>

  <div>
    <h2>Lorem ipsum</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>

  <div>
    <h2>Lorem ipsum</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
```

### Voorbeeld: `section`

```html
<section class="column-2">
  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>
</section>

<section class="column-3">
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

  <div>
    <!-- Content -->
  </div>
</section>
```

### Voorbeeld: `article`

```html
<article class="column-2">
  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>
</article>

<article class="column-3">
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

  <div>
    <!-- Content -->
  </div>
</article>
```
