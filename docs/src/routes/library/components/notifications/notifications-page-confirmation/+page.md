---
title: Pagina-notificatie bevestiging voorbeeld
breadcrumb: Pagina-notificatie bevestiging voorbeeld
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<section class="confirmation" role="group" aria-label="bevestiging">
  <div>
    <span>Bevestiging:</span>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</section>

<h2 id="introduction">Pagina-notificatie bevestiging voorbeeld</h2>

Voor het weergeven van notificaties op paginaniveau.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/notification";
@use "@minvws/manon/components/notification-confirmation-page";
```

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

Voor het voorbeeld zie bovenaan deze pagina.

### HTML-voorbeeld:

#### `section`

```html
<p class="confirmation" role="group" aria-label="bevestiging">
  <span>Bevestiging:</span> Lorem ipsum dolor sit.
</p>
```
