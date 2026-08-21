---
title: Accordeon
breadcrumb: Accordeon
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Een accordeon biedt een verticale keuzelijst die je per onderdeel kunt
openklappen om meer informatie te tonen.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/accordion";
```

JavaScript initialiseren:

```javascript
import "@minvws/manon/js/accordion.js";
```

### Benodigde stappen

1.  Plaats een korte zichtbare tekst binnen een `button`. Bijvoorbeeld een
    omschrijvende titel of een vraag. Deze tekst is zichtbaar als de accordeon
    gesloten is. Zorg ervoor dat de gebruiker op basis van deze tekst kan
    bepalen of de onderliggende informatie waardevol is.
2.  Geef de `button` een unieke `id` en verwijs vanaf de `div` via een
    `aria-labelledby` naar de`id` van de `button` ten behoeve van
    toegankelijkheid.
3.  Groepeer de verborgen content binnen een `div`.

<div class="explanation">
<span class="notification-type">
    <span class="icon icon-informative" aria-hidden="true"></span>
    Aandachtspunten
  </span>
  <p>Standaard is het eerste onderdeel opengeklapt. Dit kan aangepast worden middels het <code>aria-expanded</code>-attribuut van de <code>button</code>.</p>
  <p>Voeg <code>aria-expanded="false"</code> toe aan de <code>button</code> van het eerste onderdeel om te voorkomen dat het standaard opengeklapt is.</p>
  <p>Voeg <code>aria-expanded="true"</code> toe aan de <code>button</code> van een ander onderdeel om te zorgen dat dat onderdeel standaard opengeklapt is. Let op: dit zorgt ervoor dat het eerste onderdeel niet meer standaard opengeklapt is. Om te zorgen dat het eerste onderdeel óók standaard opengeklapt is, kan je ook daar <code>aria-expanded="true"</code> toevoegen.</p>
  <p>Zet verder geen <code>aria-expanded</code> of <code>aria-controls</code> in je HTML: <code>accordion.js</code> voegt die bij het initialiseren zelf toe. Werkt de JavaScript niet, dan staan alle onderdelen opengeklapt en blijft alle content beschikbaar. Zie <a href="/getting-started/installation#no-javascript">werken zonder JavaScript</a>.</p>
</div>

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `ul`

<Components.Snippet path="accordion/ul.html" as="raw"/>

<Components.Snippet path="accordion/ul.html" as="code" language="html" />

### Voorbeeld: `div`

<Components.Snippet path="accordion/div.html" as="raw"/>

<Components.Snippet path="accordion/div.html" as="code" language="html" />

### Voorbeeld: `section`

<Components.Snippet path="accordion/section.html" as="raw"/>

<Components.Snippet path="accordion/section.html" as="code" language="html" />

### Resultaat na initialisatie

Deze markup schrijf je niet zelf. Ter illustratie: zo ziet het eerste onderdeel
van het `ul`-voorbeeld eruit nádat `accordion.js` het component heeft
geïnitialiseerd.

```html
<ul class="accordion">
  <li>
    <button id="example-1-accordion-item-1" aria-controls="DIV-3b9aca01" aria-expanded="true">
      Voorbeeld-onderwerp 1
    </button>
    <div id="DIV-3b9aca01" aria-labelledby="example-1-accordion-item-1">…</div>
  </li>
</ul>
```

Het script koppelt elke `button` via `aria-controls` aan de `div` die erop volgt.
Heeft die `div` nog geen `id`, dan genereert het script er een. Vandaar de
willekeurige waarde hierboven. Geef je de `div` zelf een `id`, dan wordt die
gebruikt.

Daarnaast krijgt elke `button` een `aria-expanded`-attribuut, en wordt op de
`body` de class `js-accordion-loaded` gezet. Pas met die class klapt de CSS
onderdelen in. Werkt de JavaScript niet, dan gebeurt dit alles niet en staan alle
onderdelen open.
