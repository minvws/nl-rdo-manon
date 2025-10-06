---
title: hidden
breadcrumb: hidden
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Object verbergen. Door middel van een <code>display:none</code> wordt het object
verborgen.

<p class="warning">
  <strong>Let op:</strong> Screenreaders slaan over het algemeen ook objecten met
  <code>"display: none"</code> over voor hun gebruikers.
</p>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/hidden";
```

<h2 id="examples">Voorbeelden</h2>

Onderstaand voorbeeld bevat drie paragrafen waarvan er twee verborgen worden.

<div>
  <p class="hidden">Voorbeeld paragraaf 1.</p>
  <p hidden>Voorbeeld paragraaf 2.</p>
  <p>Voorbeeld paragraaf 3.</p>
</div>

```html
<div>
  <p class="hidden">Voorbeeld paragraaf 1.</p>
  <p hidden>Voorbeeld paragraaf 2.</p>
  <p>Voorbeeld paragraaf 3.</p>
</div>
```
