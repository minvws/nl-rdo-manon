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
  <p>
    Standaard is het eerste onderdeel opengeklapt. Dit kan aangepast worden
    middels het `aria-expanded`-attribuut van de `button`.
  </p>
  <p>
    Voeg `aria-expanded="false"` toe aan de `button` van het eerste onderdeel
    om te voorkomen dat het standaard opengeklapt is.
  </p>
  <p>
    Voeg `aria-expanded="true"` toe aan de `button` van een ander onderdeel
    om te zorgen dat dat onderdeel standaard opengeklapt is. Let op: dit
    zorgt ervoor dat het eerste onderdeel niet meer standaard opengeklapt is.
    Om te zorgen dat het eerste onderdeel óók standaard opengeklapt is, kan
    je ook daar `aria-expanded="true"` toevoegen.
  </p>
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
