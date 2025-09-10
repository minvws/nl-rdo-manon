---
title: Icoonknoppen
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Icoonknoppen</h2>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/button-base";
@use "@minvws/manon/icon";
@use "@minvws/manon/visually-hidden";
@use "@minvws/manon/button-icon";
```

### Benodigde stappen

1. Kies het juiste element voor de knop. Zie eventueel
   [HTML-element kiezen]({base}/library/components/button#button-situations).
2. Kies het soort icoon om toe te voegen. Zie
   [Iconen]({base}/library/components/icons).
   - Zie bij het gebruik van een icoon-lettertype de "met `span`" voorbeelden.
   - Zie bij het gebruik van een SVG-icoon de "met `svg`" voorbeelden.
3. Kies de juiste aanpak voor het toevoegen van een icoon aan de knop.
   - Krijgt de knop zowel tekst als een icoon? Zie dan voorbeelden "met tekst".
   - Krijgt de knop alleen een icoon? Zie dan voorbeelden "zonder tekst".
   - Is een subtielere weergave nodig met alléén een icoon zonder het visuele
     uiterlijk van een knop? Zie dan
     [Icoonknoppen zonder achtergrond]({base}/library/components/button/button-icon-only).

<div class="explanation" role="group" aria-label="Toelichting">
  <span>Aandachtspunten</span>
  <ul>
    <li>
      Is het icoon <strong>decoratief</strong>? Verberg het dan voor
      toegankelijkheids-hulpmiddelen door <code>aria-hidden="true"</code> aan
      het icoon toe te voegen. Een icoon is decoratief wanneer het dezelfde
      informatie overbrengt als de tekst van de knop. Bijvoorbeeld: een
      "Help"-knop met een vraagteken-icoon.
    </li>
  </ul>
  <ul>
    <li>
      Is het icoon <strong>informatief</strong>? Geef het dan in plaats van
      <code>aria-hidden="true"</code> een <code>aria-label</code> dat dezelfde
      informatie overbrengt als wat het icoon visueel communiceert. Een icoon
      is informatief wanneer het visueel extra informatie overbrengt, die niet
      ook al door de knoptekst overgebracht wordt. Bijvoorbeeld: een knop met
      de tekst "Verplaats" en een pijl-icoon dat een richting aangeeft.
    </li>
  </ul>
</div>

<p class="warning">
  <span>Let op</span> Een icoon op een knop zonder tekst is per definitie informatief. Zorg er daarom altijd voor dat de knop een toegankelijk naam heeft. Dit kan bijvoorbeeld middels een `aria-label` op het icoon of middels visueel verborgen tekst naast het icoon. Visueel verborgen tekst heeft de voorkeur, omdat die ook als visuele fallback kan dienen voor het icoon wanneer CSS en afbeeldingen niet geladen konden worden.
</p>

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `button` met `span`

<button>
  <span class="icon icon-on-off" aria-hidden="true"></span>
  Aan- of uitschakelen
</button>

```html
<button>
  <span class="icon icon-on-off" aria-hidden="true"></span>
  Aan- of uitschakelen
</button>
```

### Voorbeeld: `button` met `svg`

<button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
    <path d="M12 4l0 8" />
  </svg>
  Aan- of uitschakelen
</button>

```html
<button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
    <path d="M12 4l0 8" />
  </svg>
  Aan- of uitschakelen
</button>
```

### Voorbeeld: Link-knop met `span`

<a href="{base}/" class="button">
  <span class="icon icon-user" aria-hidden="true"></span>
  Inloggen
</a>

```html
<a href="./" class="button">
  <span class="icon icon-user" aria-hidden="true"></span>
  Inloggen
</a>
```

### Voorbeeld: Link-knop met `svg`

<a href="{base}/" class="button">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  </svg>
  Inloggen
</a>

```html
<a href="{base}/" class="button">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  </svg>
  Inloggen
</a>
```

### Voorbeeld: `button` met `span` zonder tekst

<button>
  <span class="icon icon-on-off" aria-hidden="true"></span>
  <span class="visually-hidden">Aan- of uitschakelen</span>
</button>

```html
<button>
  <span class="icon icon-on-off" aria-hidden="true"></span>
  <span class="visually-hidden">Aan- of uitschakelen</span>
</button>
```

### Voorbeeld: `button` met `svg` zonder tekst

<button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-power"
    aria-hidden="true"
    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
      d="M7 6a7.75 7.75 0 1 0 10 0"
    /><path d="M12 4l0 8" /></svg
  >
  <span class="visually-hidden">Aan- of uitschakelen</span>
</button>

```html
<button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-power"
    aria-hidden="true"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
    <path d="M12 4l0 8" />
  </svg>
  <span class="visually-hidden">Aan- of uitschakelen</span>
</button>
```

### Voorbeeld: Link-knop met `span` zonder tekst

<a href="{base}/" class="button">
  <span class="icon icon-user" aria-hidden="true"></span>
  <span class="visually-hidden">Inloggen</span>
</a>

```html
<a href="{base}/" class="button">
  <span class="icon icon-user" aria-hidden="true"></span>
  <span class="visually-hidden">Inloggen</span>
</a>
```

### Link-knop met `svg` zonder tekst

<a href="{base}/" class="button">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  </svg>
  <span class="visually-hidden">Inloggen</span>
</a>

```html
<a href="{base}/" class="button">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  </svg>
  <span class="visually-hidden">Inloggen</span>
</a>
```
