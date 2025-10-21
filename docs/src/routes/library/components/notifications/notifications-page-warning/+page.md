---
title: Pagina-notificatie waarschuwing voorbeeld
breadcrumb: Pagina-notificatie waarschuwing voorbeeld
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<section class="warning">
  <div>
    <span class="notification-type">
      <span class="icon icon-warning" aria-hidden="true"></span>
      Waarschuwing
    </span>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</section>

<h2 id="introduction">Pagina-notificatie waarschuwing voorbeeld</h2>

Voor het weergeven van notificaties op paginaniveau.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/notification-warning-message";
@use "@minvws/manon/components/notification-warning-page";
```

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

Voor het voorbeeld zie bovenaan deze pagina.

### HTML-voorbeeld:

#### `section`

```html
<p class="warning">
  <span class="notification-type">
    <span class="icon icon-warning" aria-hidden="true"></span>
    Waarschuwing
  </span>
  Lorem ipsum dolor sit.
</p>
```
