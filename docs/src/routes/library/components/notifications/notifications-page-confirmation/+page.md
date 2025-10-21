---
title: Pagina-notificatie bevestiging voorbeeld
breadcrumb: Pagina-notificatie bevestiging voorbeeld
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<section class="confirmation">
  <div>
    <span class="notification-type">
      <span class="icon icon-check" aria-hidden="true"></span>
      Bevestiging
    </span>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</section>

<h2 id="introduction">Pagina-notificatie bevestiging voorbeeld</h2>

Voor het weergeven van notificaties op paginaniveau.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/notification-confirmation-page";
```

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

Voor het voorbeeld zie bovenaan deze pagina.

### HTML-voorbeeld:

#### `section`

```html
<p class="confirmation">
  <span class="notification-type">
    <span class="icon icon-check" aria-hidden="true"></span>
    Bevestiging
  </span>

  Lorem ipsum dolor sit.
</p>
```
