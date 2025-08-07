---
title: Accordeon
breadcrumb: Accordeon
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
---

<h1 id="introduction">Accordeon</h1>

Een accordeon biedt een verticale keuzelijst die je per onderdeel kunt
openklappen om meer informatie te tonen.

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project.
    - Voor een overzicht van de benodigde en optionele bestanden zie:
      [Bijbehorende bestanden](#requirements).
    - Voeg het bijbehorende Javascript-bestand toe aan het project. Voor meer
      informatie zie: [JavaScript toevoegen](/documentation/add-js).
2.  Plaats een korte zichtbare tekst binnen een `button`. Bijvoorbeeld een
    omschrijvende titel of een vraag. Deze tekst is zichtbaar als de accordeon
    gesloten is. Zorg ervoor dat de gebruiker op basis van deze tekst kan
    bepalen of de onderliggende informatie waardevol is.
3.  Geef de `button` een unieke `id` en verwijs vanaf de `div` via een
    `aria-labelledby` naar de`id` van de `button` ten behoeve van
    toegankelijkheid.
4.  Groepeer de verborgen content binnen een `div`.

## Aandachtspunten:

- Standaard is het eerste onderdeel opengeklapt. Dit kan aangepast worden
  middels het `aria-expanded`-attribuut van de `button`.
  - Voeg `aria-expanded="false"` toe aan de `button` van het eerste onderdeel om
    te voorkomen dat het standaard opengeklapt is.
  - Voeg `aria-expanded="true"` toe aan de `button` van een ander onderdeel om
    te zorgen dat dat onderdeel standaard opengeklapt is. Let op: dit zorgt
    ervoor dat het eerste onderdeel niet meer standaard opengeklapt is. Om te
    zorgen dat het eerste onderdeel óók standaard opengeklapt is, kan je ook
    daar `aria-expanded="true"` toevoegen.

<h2 id="examples">Voorbeelden</h2>

### `ul`

#### Visueel voorbeeld:

<ul class="accordion">
  <li>
    <button id="example-1-accordion-item-1">Voorbeeld-onderwerp 1</button>
    <div aria-labelledby="example-1-accordion-item-1">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas
        leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam
        ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat
        volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu.
        Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean
        quis libero gravida, fringilla odio venenatis, condimentum lorem.
      </p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </li>
  <li>
    <button id="example-1-accordion-item-2">Voorbeeld-onderwerp 2</button>
    <div aria-labelledby="example-1-accordion-item-2">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas
        leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam
        ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat
        volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu.
        Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean
        quis libero gravida, fringilla odio venenatis, condimentum lorem.
      </p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </li>
</ul>

#### HTML-voorbeeld:

```html
<ul class="accordion">
  <li>
    <button id="example-1-accordion-item-1">Voorbeeld-onderwerp 1</button>
    <div aria-labelledby="example-1-accordion-item-1">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        suscipit egestas leo, eu semper erat congue at. Nulla pellentesque nunc
        nisl, at elementum ex aliquam ac. Fusce sed justo ullamcorper, eleifend
        nibh a, fringilla lorem. Aliquam erat volutpat. Aenean risus sem, tempor
        at rhoncus in, suscipit hendrerit arcu. Suspendisse ultricies semper
        sapien eget lobortis. Phasellus ut sodales sem. Aenean quis libero
        gravida, fringilla odio venenatis, condimentum lorem.
      </p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </li>
  <li>
    <button id="example-1-accordion-item-2">Voorbeeld-onderwerp 2</button>
    <div aria-labelledby="example-1-accordion-item-2">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        suscipit egestas leo, eu semper erat congue at. Nulla pellentesque nunc
        nisl, at elementum ex aliquam ac. Fusce sed justo ullamcorper, eleifend
        nibh a, fringilla lorem. Aliquam erat volutpat. Aenean risus sem, tempor
        at rhoncus in, suscipit hendrerit arcu. Suspendisse ultricies semper
        sapien eget lobortis. Phasellus ut sodales sem. Aenean quis libero
        gravida, fringilla odio venenatis, condimentum lorem.
      </p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </li>
</ul>
```

### `div`

#### Visueel voorbeeld:

<div class="accordion">
  <div>
    <button id="example-2-accordion-item-1">Voorbeeld-onderwerp 1</button>
    <div aria-labelledby="example-2-accordion-item-1">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas
        leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam
        ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat
        volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu.
        Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean
        quis libero gravida, fringilla odio venenatis, condimentum lorem.
      </p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </div>
  <div>
    <button id="example-2-accordion-item-2">Voorbeeld-onderwerp 2</button>
    <div aria-labelledby="example-2-accordion-item-2">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas
        leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam
        ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat
        volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu.
        Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean
        quis libero gravida, fringilla odio venenatis, condimentum lorem.
      </p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </div>
</div>

### HTML-voorbeeld:

```html
<div class="accordion">
  <div>
    <button id="example-2-accordion-item-1">Voorbeeld-onderwerp 1</button>
    <div aria-labelledby="example-2-accordion-item-1">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        suscipit egestas leo, eu semper erat congue at. Nulla pellentesque nunc
        nisl, at elementum ex aliquam ac. Fusce sed justo ullamcorper, eleifend
        nibh a, fringilla lorem. Aliquam erat volutpat. Aenean risus sem, tempor
        at rhoncus in, suscipit hendrerit arcu. Suspendisse ultricies semper
        sapien eget lobortis. Phasellus ut sodales sem. Aenean quis libero
        gravida, fringilla odio venenatis, condimentum lorem.
      </p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </div>
  <div>
    <button id="example-2-accordion-item-2">Voorbeeld-onderwerp 2</button>
    <div aria-labelledby="example-2-accordion-item-2">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        suscipit egestas leo, eu semper erat congue at. Nulla pellentesque nunc
        nisl, at elementum ex aliquam ac. Fusce sed justo ullamcorper, eleifend
        nibh a, fringilla lorem. Aliquam erat volutpat. Aenean risus sem, tempor
        at rhoncus in, suscipit hendrerit arcu. Suspendisse ultricies semper
        sapien eget lobortis. Phasellus ut sodales sem. Aenean quis libero
        gravida, fringilla odio venenatis, condimentum lorem.
      </p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </div>
</div>
```

### `section`

#### Visueel voorbeeld:

<section class="accordion">
  <div>
    <button id="example-3-accordion-item-1">Voorbeeld-onderwerp 1</button>
    <div aria-labelledby="example-3-accordion-item-1">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas
        leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam
        ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat
        volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu.
        Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean
        quis libero gravida, fringilla odio venenatis, condimentum lorem.
      </p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </div>
  <div>
    <button id="example-3-accordion-item-2">Voorbeeld-onderwerp 2</button>
    <div aria-labelledby="example-3-accordion-item-2">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas
        leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam
        ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat
        volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu.
        Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean
        quis libero gravida, fringilla odio venenatis, condimentum lorem.
      </p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </div>
</section>

### HTML-voorbeeld:

```html
<section class="accordion">
  <div>
    <button id="example-3-accordion-item-1">Voorbeeld-onderwerp 1</button>
    <div aria-labelledby="example-3-accordion-item-1">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        suscipit egestas leo, eu semper erat congue at. Nulla pellentesque nunc
        nisl, at elementum ex aliquam ac. Fusce sed justo ullamcorper, eleifend
        nibh a, fringilla lorem. Aliquam erat volutpat. Aenean risus sem, tempor
        at rhoncus in, suscipit hendrerit arcu. Suspendisse ultricies semper
        sapien eget lobortis. Phasellus ut sodales sem. Aenean quis libero
        gravida, fringilla odio venenatis, condimentum lorem.
      </p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </div>
  <div>
    <button id="example-3-accordion-item-2">Voorbeeld-onderwerp 2</button>
    <div aria-labelledby="example-3-accordion-item-2">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        suscipit egestas leo, eu semper erat congue at. Nulla pellentesque nunc
        nisl, at elementum ex aliquam ac. Fusce sed justo ullamcorper, eleifend
        nibh a, fringilla lorem. Aliquam erat volutpat. Aenean risus sem, tempor
        at rhoncus in, suscipit hendrerit arcu. Suspendisse ultricies semper
        sapien eget lobortis. Phasellus ut sodales sem. Aenean quis libero
        gravida, fringilla odio venenatis, condimentum lorem.
      </p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </div>
</section>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/accordion";
```
