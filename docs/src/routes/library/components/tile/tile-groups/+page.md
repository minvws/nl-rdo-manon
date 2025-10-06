---
title: Gegroepeerde content binnen tegels
breadcrumb: Gegroepeerde content binnen tegels
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Voor het gegroepeerd weergeven van content binnen tegels

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
    [tegelweergave](/library/components/tile)
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
  <h2>Lorem ipsum dolor sit</h2>
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
  <h2>Lorem ipsum dolor sit</h2>
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
