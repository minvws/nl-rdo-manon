---
title: one-third-two-thirds
breadcrumb: one-third-two-thirds
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Verdeling 33.33% - 66.66% vanaf het ingestelde breekpunt.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/layout";
@use "@minvws/manon/components/one-third-two-thirds";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `div`

<div class="one-third-two-thirds">
  <div>
    <h2>Lorem ipsum dolor sit</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
      luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
      sed, tempus in massa.
    </p>
  </div>

  <div>
    <h2>Lorem ipsum dolor sit</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
      luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
      sed, tempus in massa.
    </p>
  </div>
</div>

```html
<div class="one-third-two-thirds">
  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>
</div>
```

### Voorbeeld: `section`

```html
<section class="one-third-two-thirds">
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
<article class="one-third-two-thirds">
  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>
</article>
```
