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
@use "@minvws/manon/components/notification";
@use "@minvws/manon/components/notification-paragraph";
```

<h2 id="examples">Voorbeelden</h2>

<p class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span> Lorem <a href="notifications-paragraph">ipsum</a> dolor sit.
</p>

```html
<p class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span> Lorem ipsum dolor sit.
</p>
```
