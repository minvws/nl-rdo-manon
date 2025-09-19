---
title: Main
breadcrumb: Main
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Introductie</h1>

Voor het weergeven van de main op de pagina

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/main";
```

<h3>Benodigde stappen</h3>

- Voeg styling toe aan het `main` HTML-element. Bijvoorbeeld de spacing tussen de content.
- De content wrapper kan gebruikt worden om de content binnen de `main` te stylen. bijvoorbeeld om een maximale breedte of spacing mee te geven.

<h2 id="examples">Voorbeelden</h2>

```html
<main>
  <div class="content-wrapper">
    <!-- Content -->
  </div>
</main>
```
