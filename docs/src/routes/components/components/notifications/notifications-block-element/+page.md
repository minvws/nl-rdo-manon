---
title: Blok-element
breadcrumb: Blok-element
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Blok-element</h1>

Voor het weergeven van grotere notificaties.

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
    optionele bestanden zie:
    [Bijbehorende bestanden](#requirements). Voor meer informatie over importeren en
    instellen van componenten. Zie:
    [Componenten gebruiken en styling toevoegen](/documentation/import-styling)
2.  Voeg de notificatie toe op basis van een van de onderstaande voorbeelden.
3.  Voeg de gewenste notificatie-type-`class` toe. Voor meer informatie zie:
    [Beschikbare weergaven](/notifications#notification-types).
4.  Voeg `role="group"` toe aan het notificatie-element om screenreader gebruikers
    erop te attenderen dat de content van de notificatie bij elkaar hoort.
5.  Voeg `aria-label=""` toe aan het notificatie-element om screenreader
    gebruikers inzicht te geven in het type bericht. Bijvoorbeeld:
    `aria-label="foutmelding"`. Let op dat de content van het label in de taal
    van het document staat.
6.  Voeg binnen het element een `span` toe zodat gebruikers (van screenreaders)
    weten wat de context van het bericht is. Bijvoorbeeld:
    `<span>Foutmelding:</span>`. Het is aan te raden om dit bericht
    voor alle gebruikers zichtbaar te houden zodat het voor iedereen duidelijk is. Denk
    hierbij ook aan kleurenblinden als er in het ontwerp enkel gebruik wordt gemaakt van
    kleuren als visuele onderscheidende factor op notificaties of iconen waarbij het kan
    zijn dat niet alle gebruikers het icoon zullen herkennen.

## Aandachtspunten

-   Voeg de volledige code toe die in de voorbeelden staat om alle gebruikers een goede
    gebruikerservaring the bieden. Denk hierbij aan gebruikers die kleurenblind zijn of
    gebruikers die gebruik maken van hulptechnologieën.
-   Notificaties kunnen verborgen worden door de class
    `hidden` toe te voegen aan de notification

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

<div class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span>
  <h1>Lorem ipsum dolor set</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat
    facilisis ac eu velit. Donec luctus metus a lacus dictum, a porta ligula pellentesque.
    Phasellus ultricies purus id viverra ultrices. Proin sagittis rhoncus tempor. Nam
    efficitur elit commodo elit feugiat scelerisque. Nullam consectetur felis mi, ac
    bibendum urna convallis a. Ut maximus volutpat ligula, et accumsan ipsum varius eget.
    Mauris euismod a augue sit amet condimentum.
  </p>
  <ul>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi
      consequat facilisis ac eu velit.
      <a href="notifications-block-element">Lorem ipsum</a> consectetur adipiscing elit.
    </li>
  </ul>
  <button type="button">Lorem</button>
</div>

### HTML-voorbeeld:

#### `div`

```html
<div class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span>
  <h1>Lorem ipsum dolor set</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat facilisis ac eu velit. Donec luctus metus a lacus dictum, a porta ligula pellentesque. Phasellus ultricies purus id viverra ultrices. Proin sagittis rhoncus tempor. Nam efficitur elit commodo elit feugiat scelerisque. Nullam consectetur felis mi, ac bibendum urna convallis a. Ut maximus volutpat ligula, et accumsan ipsum varius eget. Mauris euismod a augue sit amet condimentum.</p>
  <ul>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat facilisis ac eu velit. <a href="">Lorem ipsum</a> consectetur adipiscing elit.</li>
  </ul>
  <button type="button">Lorem</button>
</div>
```

#### HTML-structuur voorbeeld:

```html
<div class="error" role="group" aria-label="foutmelding">
  <!-- Content -->
</div>
```

### HTML-voorbeeld:

#### `section`

```html
<section class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span>
  <h1>Lorem ipsum dolor set</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat facilisis ac eu velit. Donec luctus metus a lacus dictum, a porta ligula pellentesque. Phasellus ultricies purus id viverra ultrices. Proin sagittis rhoncus tempor. Nam efficitur elit commodo elit feugiat scelerisque. Nullam consectetur felis mi, ac bibendum urna convallis a. Ut maximus volutpat ligula, et accumsan ipsum varius eget. Mauris euismod a augue sit amet condimentum.</p>
  <ul>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat facilisis ac eu velit. <a href="">Lorem ipsum</a> consectetur adipiscing elit.</li>
  </ul>
  <button type="button">Lorem</button>
</section>
```

#### HTML-structuur voorbeeld:

```html
<section class="error" role="group" aria-label="foutmelding">
  <!-- Content -->
</section>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-block-element";
```

<h2 id="variables">Instelbare variabelen</h2>

<h2 id="related">Gerelateerde pagina's</h2>

<a href="/components/notifications-block-element-test">Test- en voorbeelden-pagina</a>
