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

<h1 id="introduction">Gegroepeerde content binnen tegels</h1>

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
    [tegelweergave](/components/components/tile)
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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non
    justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui
    sapien.
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
    <a href="/getting-started/installation#flex-direction">flex-direction</a>
  </li>
  <li><a href="/getting-started/installation#gap">gap</a></li>
  <li><a href="/getting-started/installation#border-width">border-width</a></li>
  <li><a href="/getting-started/installation#border-style">border-style</a></li>
  <li><a href="/getting-started/installation#border-color">border-color</a></li>
  <li><a href="/getting-started/installation#padding-top">padding-top</a></li>
  <li>
    <a href="/getting-started/installation#padding-right">padding-right</a>
  </li>
  <li>
    <a href="/getting-started/installation#padding-bottom">padding-bottom</a>
  </li>
  <li><a href="/getting-started/installation#padding-left">padding-left</a></li>
</ul>

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/getting-started/import-styling)

<h2 id="related">Gerelateerde pagina's</h2>

<a href="/components/tile-groups-test">Test- en voorbeelden-pagina</a>
