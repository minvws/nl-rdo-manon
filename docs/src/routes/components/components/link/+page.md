---
title: Link
breadcrumb: Link
nav:
  - Introductie: "#introduction"
  - Quick Start: "#quick-start"
  - Voorbeelden: "#examples"
---

<p id="introduction">Links</p>

<h2 id="quick-start">Quick Start</h2>

SCSS importeren:

```scss
@use "@minvws/manon/link";
```

<div class="explanation" role="group" aria-label="Toelichting">
  <span>Aandachtspunten</span>
  <p>
      De standaard ingestelde waarden binnen Manon maken gebruik van de <a
      href="{base}/components/layout/typography/body-text-set">Body text set</a>. Om gebruik te maken van deze set.
    Laad de set eenmalig in voordat overige componenten er gebruik van
      maken.
  </p>
</div>

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Basis link

- <a href="link">Basis</a>
- <a href="link" class="icon icon-cat">Basis met <code>::before</code></a>
- <a href="link" class="icon-after icon-cat">Basis met
  <code>::after</code><span class="icon icon-cat">Kat icoon</span></a>

### Voorbeeld: Hover effect

- <a href="link" class="hover">Hover <code>:hover</code></a>
- <a href="link" class="hover icon icon-cat">Hover met
  <code>::before:hover</code></a>
- <a href="link" class="hover">Hover met <code>::before:hover</code>
  <span class="icon icon-cat"></span></a>

### Voorbeeld: Actieve link

- <a href="link" class="active">Actieve link</a>
- <a href="link" class="active icon icon-cat">Actieve link met icoon</a>
- <a href="link" class="active">Actieve link met icoon achteraan
  <span class="icon icon-cat"></span></a>

### Voorbeeld: Actieve link met hover

- <a href="link" class="active hover">Actieve link op hover</a>
- <a href="link" class="active hover icon icon-cat">Actieve link met icoon op
  hover</a>
- <a href="link" class="active hover">Actieve link met icoon achteraan op hover
  <span class="icon icon-cat"></span></a>

### Voorbeeld: Link met focus

- <a href="link" class="focus">Link met focus</a>
- <a href="link" class="focus icon icon-cat">Link met focus en icoon</a>
- <a href="link" class="focus">Link met focus en icoon achteraan
  <span class="icon icon-cat"></span></a>

### Voorbeeld: Link met focus en hover

- <a href="link" class="focus hover">Link met focus op hover</a>
- <a href="link" class="focus hover icon icon-cat">Link met focus en icoon op
  hover</a>
- <a href="link" class="focus hover">Link met focus en icoon achteraan op hover
  <span class="icon icon-cat"></span></a>

### Voorbeeld: Bezochte link

- <a href="link" class="visited">Bezochte link</a>
- <a href="link" class="visited icon icon-cat">Bezochte link met icoon</a>
- <a href="link" class="visited" >Bezochte link met icoon achteraan
  <span class="icon icon-cat"></span></a>

### Voorbeeld: Bezochte link op hover

- <a href="link" class="visited hover">Bezochte link hover</a>
- <a href="link" class="visited hover icon icon-cat">Bezochte link met icoon op
  hover</a>
- <a href="link" class="visited hover" >Bezochte link met icoon achteraan op
  hover <span class="icon icon-cat"></span></a>

### Voorbeeld: Externe link

- <a href="link" rel="external">Externe link</a>
