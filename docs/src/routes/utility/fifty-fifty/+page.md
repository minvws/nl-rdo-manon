---
title: Layout fifty-fifty
breadcrumb:
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Layout fifty-fifty</h1>

Verdeling 50% - 50% vanaf het ingestelde breekpunt.

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
/* Optioneel */
@use "@minvws/manon/layout-set";

@use "@minvws/manon/fifty-fifty";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `div`

<div class="fifty-fifty">
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
<div class="fifty-fifty">
  <div>
    <h2>Lorem ipsum dolor set</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue
      ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris,
      condimentum et molestie sed, tempus in massa.
    </p>
  </div>

  <div>
    <h2>Lorem ipsum dolor set</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue
      ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris,
      condimentum et molestie sed, tempus in massa.
    </p>
  </div>
</div>
```

### Voorbeeld: `section`

```html
<section class="fifty-fifty">
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
<article class="fifty-fifty">
  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>
</article>
```
