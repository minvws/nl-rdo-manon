---
title: Main
breadcrumb: Main
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p id="introduction">Voor het weergeven van de main op de pagina</p>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/main";
```

### Benodigde stappen

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
