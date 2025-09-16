---
title: visually-hidden
breadcrumb: visually-hidden
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Verbergt objecten alleen visueel. Voor screenreaders blijven de objecten
zichtbaar.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/utility/visually-hidden";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Twee paragrafen

<div>
  <p class="visually-hidden">Voorbeeld paragraaf 1.</p>
  <p>Voorbeeld paragraaf 2.</p>
</div>

```html
<div>
  <p class="visually-hidden">Voorbeeld paragraaf 1.</p>
  <p>Voorbeeld paragraaf 2.</p>
</div>
```

Voeg de class `visually-hidden` aan het gewenste element.
