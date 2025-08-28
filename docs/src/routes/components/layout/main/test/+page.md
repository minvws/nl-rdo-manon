---
title: Main testpagina
breadcrumb: Main testpagina
---

<h1 id="introduction">Main testpagina</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

Beschikbare voorbeelden:

### Content direct binnen `main`

Voor visueel voorbeeld zie: [Direct](/components/layout/main/main-test-direct)

#### HTML-voorbeeld:

```html
<main>
  <!-- content -->
</main>
```

### Content binnen `main` gegroepeerd in `div`'s

Voor visueel voorbeeld zie: [Div](/components/layout/main/main-test-div)

#### HTML-voorbeeld:

```html
<main>
  <div>
    <!-- content -->
  </div>
</main>
```

### Content binnen `main` gegroepeerd in `section`'s

<!-- @TODO -->
<!-- <p>Voor visueel voorbeeld zie: <a href="main-test-section">Section</a></p> -->

#### HTML-voorbeeld:

```html
<main>
  <section>
    <!-- content -->
  </section>
</main>
```

### Content binnen `main` gegroepeerd in `article`'s

<!-- @TODO -->
<!-- <p>Voor visueel voorbeeld zie: <a href="main-test-article">Article</a></p> -->

#### HTML-voorbeeld:

```html
<main>
  <article>
    <!-- content -->
  </article>
</main>
```

### Content in een content-wrapper binnen `main`

De content wrapper zorgt ervoor dat de achtergrond door kan lopen terwijl de
content een maximale breedte heeft.

<!-- @TODO -->
<!-- Voor visueel voorbeeld zie: [Content wrapper div](/components/layout/main/main-test-content-wrapper-div) -->

#### HTML-voorbeeld:

```html
<main>
  <div>
    <!-- This can be full width div, section or article -->
    <div>
      <!-- While the content width can be limited -->
      <!-- content -->
    </div>
  </div>
</main>
```
