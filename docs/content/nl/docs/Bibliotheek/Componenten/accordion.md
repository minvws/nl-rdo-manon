---
title: "Accordeon"
linkTitle: "Accordeon"
weight: 1
description: >
    Een accordeon biedt een verticale keuzelijst die je per onderdeel kunt
    openklappen om meer informatie te tonen.
---

# Accordeon

Een accordeon biedt een verticale keuzelijst die je per onderdeel kunt
openklappen om meer informatie te tonen.

## Benodigde stappen

1. Voeg de benodigde bestanden toe aan het project.

    * Voor een overzicht van de benodigde bestanden, zie: **TODO**

    * Voeg het bijbehorende JavaScript-bestand toe aan het project.
      Voor meer informatie, zie: **TODO**

2. Plaats een korte zichtbare tekst binnen een `<button>`. Bijvoorbeeld een
   omschrijvende titel of een vraag. Deze tekst is zichtbaar als de accordeon
   gesloten is. Zorg ervoor dat de gebruiker op basis van deze tekst kan
   bepalen of de onderliggende informatie waardevol is.

3. Geef de `<button>` een unieke id en verwijs vanaf de `<div>` via een
   `aria-labelledby` naar de id van de `<button>` ten behoeve van
   toegankelijkheid.

4. Groepeer de verborgen content binnen een `<div>`.

## Aandachtspunten

* Standaard is het eerste ondereel opengeklapt. Dit kan aangepast worden
  middels het `aria-expanded-attribute` van de `<button>`. Zie onderstaande
  voorbeelden voor Standaard dichtgeklapt en Standaard opengeklapt.

## Voorbeeld

### `ul`

#### Visueel voorbeeld

<ul class="accordion">
  <li>
    <button id="example-accordion-ul-item-1">Voorbeeld-onderwerp 1</button>
    <div aria-labelledby="example-accordion-ul-item-1">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit
        egestas leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at
        elementum ex aliquam ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla
        lorem. Aliquam erat volutpat. Aenean risus sem, tempor at rhoncus in, suscipit
        hendrerit arcu. Suspendisse ultricies semper sapien eget lobortis. Phasellus ut
        sodales sem. Aenean quis libero gravida, fringilla odio venenatis, condimentum
        lorem.
      </p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </li>
  <li>
    <button id="example-accordion-ul-item-2">Voorbeeld-onderwerp 2</button>
    <div aria-labelledby="example-accordion-ul-item-2">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit
        egestas leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at
        elementum ex aliquam ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla
        lorem. Aliquam erat volutpat. Aenean risus sem, tempor at rhoncus in, suscipit
        hendrerit arcu. Suspendisse ultricies semper sapien eget lobortis. Phasellus ut
        sodales sem. Aenean quis libero gravida, fringilla odio venenatis, condimentum
        lorem.
      </p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </li>
</ul>

#### HTML voorbeeld

```html
<ul class="accordion">
  <li>
    <button id="example-accordion-ul-item-1">Voorbeeld-onderwerp 1</button>
    <div aria-labelledby="example-accordion-ul-item-1">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu. Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean quis libero gravida, fringilla odio venenatis, condimentum lorem.</p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </li>
  <li>
    <button id="example-accordion-ul-item-2">Voorbeeld-onderwerp 2</button>
    <div aria-labelledby="example-accordion-ul-item-2">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu. Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean quis libero gravida, fringilla odio venenatis, condimentum lorem.</p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </li>
</ul>
```

