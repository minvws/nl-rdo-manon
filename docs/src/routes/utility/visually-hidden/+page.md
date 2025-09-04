---
title: Visueel verbergen
breadcrumb: Visueel verbergen
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

Verbergt objecten alleen visueel. Voor screenreaders blijven de objecten
zichtbaar.

<h2 id="quick-start">Snelstart</h2>

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
