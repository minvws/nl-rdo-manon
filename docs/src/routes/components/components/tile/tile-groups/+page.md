---
title: Gegroepeerde content binnen tegels
breadcrumb: Gegroepeerde content binnen tegels
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<p class="introduction">Voor het gegroepeerd weergeven van content binnen tegels</p>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/tile";
@use "@minvws/manon/tile-groups";
```

<p>Aandachtspunten:</p>
<ul>
  <li>
    Voeg `class="tile"` toe voor de Gegroepeerde content binnen tegels op een
    enkel element. Voor meer informatie zie:
    [tegelweergave](/components/tiles)
  </li>
  <li>
    Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
    optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
  </li>
</ul>

<h2 id="examples">Voorbeelden</h2>

### Enkel element `div`

#### Visueel voorbeeld:

<div class="tile" role="group">
  <h1>Lorem ipsum dolor set</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
    amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
  </p>
  <div>
    <button>Lorem</button>
    <button>Ipsum</button>
  </div>
</div>

#### HTML-voorbeeld:

```html
<div class="tile" role="group">
  <h1>Lorem ipsum dolor set</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet
    convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
  </p>
  <div>
    <button>Lorem</button>
    <button>Ipsum</button>
  </div>
</div>
```

<h2 id="variables">Instelbare variabelen</h2>

<ul>
  <li>
    <a href="/documentation/variables#flex-direction">flex-direction</a>
  </li>
  <li><a href="/documentation/variables#gap">gap</a></li>
  <li><a href="/documentation/variables#border-width">border-width</a></li>
  <li><a href="/documentation/variables#border-style">border-style</a></li>
  <li><a href="/documentation/variables#border-color">border-color</a></li>
  <li><a href="/documentation/variables#padding-top">padding-top</a></li>
  <li>
    <a href="/documentation/variables#padding-right">padding-right</a>
  </li>
  <li>
    <a href="/documentation/variables#padding-bottom">padding-bottom</a>
  </li>
  <li><a href="/documentation/variables#padding-left">padding-left</a></li>
</ul>

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

<h2 id="related">Gerelateerde pagina's</h2>

<a href="/components/tile-groups-test">Test- en voorbeelden-pagina</a>
