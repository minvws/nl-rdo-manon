---
title: Benadrukte weergave
breadcrumb: Benadrukte weergave
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p class="introduction">Voor meer nadruk op bepaalde tekst, zoals een citaat of belangrijke informatie,
kan de class `emphasized` worden gebruikt. Deze class zorgt voor een visuele
nadruk op de tekst, waardoor deze opvalt binnen de context van de pagina.</p>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/body-text-set";
@use "@minvws/manon/emphasized";
```

<h2 id="examples">Voorbeelden:</h2>

### Voorbeeld: Paragraaf

<p class="emphasized">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque lectus, pharetra at
  tincidunt a, ornare vitae nibh. Vivamus ultricies sagittis blandit.
</p>

```html
<p class="emphasized">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque lectus, pharetra at tincidunt
  a, ornare vitae nibh. Vivamus ultricies sagittis blandit.
</p>
```
