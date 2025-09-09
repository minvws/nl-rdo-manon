---
title: Gegroepeerde content binnen tegels
breadcrumb: Gegroepeerde content binnen tegels
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p id="introduction">Voor het gegroepeerd weergeven van content binnen tegels</p>

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
    [tegelweergave]({base}/library/components/tile)
  </li>
  <li>
    Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
    optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
  </li>
</ul>

<h2 id="examples">Voorbeelden</h2>

### Enkel element `div`

<div class="tile" role="group">
  <h2>Lorem ipsum dolor set</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
    amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
  </p>
  <div>
    <button>Lorem</button>
    <button>Ipsum</button>
  </div>
</div>

```html
<div class="tile" role="group">
  <h2>Lorem ipsum dolor set</h2>
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
