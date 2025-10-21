---
title: Pagina-notificatie toelichting voorbeeld
breadcrumb: Pagina-notificatie toelichting voorbeeld
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<section class="explanation" role="group" aria-label="toelichting">
  <div>
    <span>Toelichting:</span>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</section>

<h2 id="introduction">Pagina-notificatie toelichting voorbeeld</h2>

Voor het weergeven van notificaties op paginaniveau.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/notification";
@use "@minvws/manon/components/notification-explanation-message";
@use "@minvws/manon/components/notification-explanation-page";
```

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

Voor het voorbeeld zie bovenaan deze pagina.

### HTML-voorbeeld:

#### `section`

```html
<p class="explanation" role="group" aria-label="toelichting">
  <span>Toelichting:</span> Lorem ipsum dolor sit.
</p>
```
