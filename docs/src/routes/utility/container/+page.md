---
title: container
breadcrumb: container
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Gebruik deze classes voor smallere of bredere weergave van content-blokken dan de standaard ingestelde maximale breedte.
Bijvoorbeeld voor blokken met alleen een formulier of blokken in de authenticatie-flow zoals een login-scherm.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/container";
```

Beschikbare classes:

<dl>
  <div>
    <dt>container-s</dt>
    <dd>In de meeste thema's gebruikt voor: smallere weergaven</dd>
  </div>

  <div>
    <dt>container-m</dt>
    <dd>In de meeste thema's gebruikt voor: iets smallere weergaven</dd>
  </div>

  <div>
    <dt>container-l</dt>
    <dd>In de meeste thema's gebruikt voor: bredere weergaven</dd>
  </div>
</dl>

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `div`

<div class="container-s">
  <h2>Container Small (container-s)</h2>
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

```html
<div class="container-s">
  <h2>Container Small (container-s)</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae
    iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae
    iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.
  </p>
</div>
```

<div class="container-m">
  <h2>Container Medium (container-m)</h2>
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

```html
<div class="container-m">
  <h2>Container Medium (container-m)</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae
    iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae
    iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.
  </p>
</div>
```

<div class="container-l">
  <h2>Container Large (container-l)</h2>
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

```html
<div class="container-l">
  <h2>Container Large (container-l)</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae
    iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae
    iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.
  </p>
</div>
```

### Voorbeeld: `section`

```html
<section>
  <div class="content-wrapper container-s">
    <!-- Content -->
  </div>
</section>

<section>
  <div class="content-wrapper container-m">
    <!-- Content -->
  </div>
</section>

<section>
  <div class="content-wrapper container-l">
    <!-- Content -->
  </div>
</section>
```

### Voorbeeld: `article`

```html
<article>
  <div class="content-wrapper container-s">
    <!-- Content -->
  </div>
</article>

<article>
  <div class="content-wrapper container-m">
    <!-- Content -->
  </div>
</article>

<article>
  <div class="content-wrapper container-l">
    <!-- Content -->
  </div>
</article>
```
