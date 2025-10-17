---
title: Notifactie op een paragraaf
breadcrumb: Notifactie op een paragraaf
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Voor het weergeven van notificatie op paragrafen.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/colors/notification";
@use "@minvws/manon/components/notification-paragraph";
```

<h2 id="examples">Voorbeelden</h2>

<p class="error">
  <span class="notification-type">
    <span class="icon icon-error" aria-hidden="true"></span>
    Foutmelding:
  </span>
  Lorem ipsum dolor sit.
</p>

```html
<p class="error">
  <span class="notification-type">
    <span class="icon icon-error" aria-hidden="true"></span>
    Foutmelding:
  </span>
  Lorem ipsum dolor sit.
</p>
```
