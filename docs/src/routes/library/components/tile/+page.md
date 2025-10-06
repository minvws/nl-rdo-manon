---
title: Tegelweergave
breadcrumb: Tegelweergave
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Tegelweergave kan gebruikt worden om content visueel te groeperen om gebruikers
te laten zien welke content bij elkaar hoort. Veel gebruikte toepassingen voor
tegelweergave zijn bijvoorbeeld nieuwsberichten.

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/tile";
```

<h2 id="examples">Voorbeelden:</h2>

### Voorbeeld: Tegelweergave op enkel element

Geschikt voor het weergeven van een element dat visueel gegroepeerd dient te
zijn of visueel meer aandacht mag krijgen om de gebruiker te attenderen.

Voeg `class="tile"` toe voor de tegelweergave op een enkel element.

<div class="tile" role="group">
  <h2>Lorem ipsum dolor sit</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
    amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
  </p>
</div>

```html
<div class="tile" role="group">
  <h2>Lorem ipsum dolor sit</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet
    convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
  </p>
</div>
```

### Voorbeeld: Tegelweergave op een groep elementen

Voor het efficiënt weergeven van een groep elementen met een tegelweergave.

Groepeer de elementen die met de tegelweergave weergegeven dienen te worden
binnen een `div` of `ul` en geef deze `div` of ul de benodigde `class` mee.
Bijvoorbeeld: `<div class="tiles">`

<div class="tiles column-3">
  <div role="group">
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
      amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
    </p>
  </div>

  <div role="group">
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
      amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
    </p>
  </div>

  <div role="group">
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
      amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
    </p>
  </div>
</div>

```html
<div class="tiles column-3">
  <div role="group">
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet
      convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
    </p>
  </div>

  <div role="group">
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet
      convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
    </p>
  </div>

  <div role="group">
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet
      convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
    </p>
  </div>
</div>
```

### Voorbeeld: Tegel met cover-afbeelding

Voeg de class `image-cover` toe voor de correcte weergave.

<div role="group" class="tile image-cover">
  <img src="$img/strand.jpg" alt="Foto van een strand" />
  <h2>Lorem ipsum</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
    amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
  </p>
</div>

```html
<div role="group" class="tile image-cover">
  <img src="$img/strand.jpg" alt="Foto van een strand" />
  <h2>Lorem ipsum</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet
    convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
  </p>
</div>
```
