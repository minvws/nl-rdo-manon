---
title: two-thirds-one-third
breadcrumb: two-thirds-one-third
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Verdeling 66.66% - 33.33% vanaf het ingestelde breekpunt.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/layout";
@use "@minvws/manon/components/two-thirds-one-third";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `div`

<div class="two-thirds-one-third">
  <div>
    <h2>Lorem ipsum dolor sit</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
      luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
      sed, tempus in massa.
    </p>
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
<div class="two-thirds-one-third">
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
<section class="two-thirds-one-third">
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
<article class="two-thirds-one-third">
  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>
</article>
```
