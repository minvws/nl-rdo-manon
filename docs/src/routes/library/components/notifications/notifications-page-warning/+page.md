---
title: Pagina-notificatie waarschuwing voorbeeld
breadcrumb: Pagina-notificatie waarschuwing voorbeeld
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

<h1 id="introduction">Pagina-notificatie waarschuwing voorbeeld</h1>

Voor het weergeven van notificaties op paginaniveau.

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

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/getting-started/installation)

### Importeer component via npm

#### CSS-voorbeeld:

```scss
@use "@minvws/manon/colors/notification";
@use "@minvws/manon/components/notification-warning";
@use "@minvws/manon/components/notification-warning-page";
```
