---
title: Sectie
breadcrumb: Sectie
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

<p id="introduction">Voor het weergeven van content binnen een section</p>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/section";
```

### Benodigde stappen

- Voeg styling toe aan `section`. Dit kan gebruikt worden voor het stylen van secties.
- De content wrapper kan gebruikt worden om de content binnen de `section` te stylen. bijvoorbeeld om een maximale breedte of spacing mee te geven.

<h2 id="examples">Voorbeelden</h2>

```html
<section>
  <div class="content-wrapper">
    <!-- Content -->
  </div>
</section>
```
