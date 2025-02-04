---
title: Icoonknoppen
nav:
  - Introductie: "#introduction"
  - Met tekst: "#with-text"
  - Zonder tekst: "#without-text"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Icoonknoppen</h1>

## Benodigde stappen

1. Kies het juiste element voor de knop. Zie eventueel [HTML-element kiezen](/components/button#button-html).
2. Kies het soort icoon om toe te voegen. Zie [Iconen](/components/icons).
   - Zie bij het gebruik van een icoon-lettertype de "met `span`" voorbeelden.
   - Zie bij het gebruik van een SVG-icoon de "met `svg`" voorbeelden.
3. Kies de juiste aanpak voor het toevoegen van een icoon aan de knop.
   - Krijgt de knop zowel tekst als een icoon? Zie dan [Met tekst](#with-text).
   - Krijgt de knop alleen een icoon? Zie dan [Zonder tekst](#without-text).
   - Is een subtielere weergave nodig met alléén een icoon zonder het visuele uiterlijk van een knop? Zie dan [Icoonknoppen zonder achtergrond](/components/button-icon-only).

<h2 id="with-text">Met tekst</h2>

### Aandachtspunten

- Is het icoon **decoratief**? Verberg het dan voor toegankelijkheids-hulpmiddelen door `aria-hidden="true"` aan het icoon toe te voegen.
  - Een icoon is decoratief wanneer het dezelfde informatie overbrengt als de tekst van de knop. Bijvoorbeeld: een "Help"-knop met een vraagteken-icoon.
- Is het icoon **informatief**? Geef het dan in plaats van `aria-hidden="true"` een `aria-label` dat dezelfde informatie overbrengt als wat het icoon visueel communiceert.
  - Een icoon is informatief wanneer het visueel extra informatie overbrengt, die niet ook al door de knoptekst overgebracht wordt. Bijvoorbeeld: een knop met de tekst "Verplaats" en een pijl-icoon dat een richting aangeeft.

De onderstaande voorbeelden gaan ervan uit dat het icoon **decoratief** is.

### `button` met `span`

#### Visueel voorbeeld

<button>
  <span class="icon icon-on-off" aria-hidden="true"></span>
  Aan- of uitschakelen
</button>

#### HTML-voorbeeld

```html
<button>
  <span class="icon icon-on-off" aria-hidden="true"></span>
  Aan- of uitschakelen
</button>
```

### `button` met `svg`

#### Visueel voorbeeld

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

#### HTML-voorbeeld

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

### Link-knop met `span`

#### Visueel voorbeeld

<a href="./" class="button">
  <span class="icon icon-user" aria-hidden="true"></span>
  Inloggen
</a>

#### HTML-voorbeeld

```html
<a href="./" class="button">
  <span class="icon icon-user" aria-hidden="true"></span>
  Inloggen
</a>
```

### Link-knop met `svg`

#### Visueel voorbeeld

<a href="./" class="button">
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

#### HTML-voorbeeld

```html
<a href="./" class="button">
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

<h2 id="without-text">Zonder tekst</h2>

### Aandachtspunten

Een icoon op een knop zonder tekst is per definitie **informatief**. Zorg er daarom altijd voor dat de knop een toegankelijk naam heeft. Dit kan bijvoorbeeld middels een `aria-label` op het icoon of middels visueel verborgen tekst naast het icoon. Visueel verborgen tekst heeft de voorkeur, omdat die ook als visuele fallback kan dienen voor het icoon wanneer CSS en afbeeldingen niet geladen konden worden.

### `button` met `span`

#### Visueel voorbeeld

<button>
  <span class="icon icon-on-off" aria-hidden="true"></span>
  <span class="visually-hidden">Aan- of uitschakelen</span>
</button>

#### HTML-voorbeeld

```html
<button>
  <span class="icon icon-on-off" aria-hidden="true"></span>
  <span class="visually-hidden">Aan- of uitschakelen</span>
</button>
```

### `button` met `svg`

#### Visueel voorbeeld

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

#### HTML-voorbeeld

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

### Link-knop met `span`

#### Visueel voorbeeld

<a href="./" class="button">
  <span class="icon icon-user" aria-hidden="true"></span>
  <span class="visually-hidden">Inloggen</span>
</a>

#### HTML-voorbeeld

```html
<a href="./" class="button">
  <span class="icon icon-user" aria-hidden="true"></span>
  <span class="visually-hidden">Inloggen</span>
</a>
```

### Link-knop met `svg`

#### Visueel voorbeeld

<a href="./" class="button">
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

#### HTML-voorbeeld

```html
<a href="./" class="button">
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

### `button` met pseudo-content-icoon

<p class="warning">
  <span>Waarschuwing:</span> Het gebruik van pseudo-content direct op de button wordt uitgefaseerd omdat het niet de voorkeur heeft omwille van toegankelijkheid.
</p>

Gebruik bij voorkeur één van de andere opties. Geef anders de knop een <code>aria-label</code> met dezelfde inhoud als de reguliere knop-tekst om te voorkomen dat toegankelijkheids-hulpmiddelen het pseudo-content-icoon als tekst proberen aan te bieden aan de gebruiker.

#### Visueel voorbeeld

<button class="icon icon-on-off" aria-label="Aan- of uitschakelen">Aan- of uitschakelen</button>

#### HTML-voorbeeld

```html
<button class="icon icon-on-off" aria-label="Aan- of uitschakelen">Aan- of uitschakelen</button>
```

### Link-knop met pseudo-content-icoon

<p class="warning">
  <span>Waarschuwing:</span> Het gebruik van pseudo-content direct op de link-knop wordt uitgefaseerd omdat het niet de voorkeur heeft omwille van toegankelijkheid.
</p>

Gebruik bij voorkeur één van de andere opties. Geef anders de link een <code>aria-label</code> met dezelfde inhoud als de reguliere knop-tekst om te voorkomen dat toegankelijkheids-hulpmiddelen het pseudo-content-icoon als tekst proberen aan te bieden aan de gebruiker.

#### Visueel voorbeeld

<a href="./" class="button icon icon-on-off" aria-label="Aan- of uitschakelen">
  Aan- of uitschakelen
</a>

#### HTML-voorbeeld

```html
<a href="./" class="button icon icon-on-off" aria-label="Aan- of uitschakelen">
  Aan- of uitschakelen
</a>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Zie voor meer informatie over importeren en instellen van componenten: [Componenten gebruiken en styling toevoegen](/documentation/import-styling).

### Importeer component via npm

#### CSS-voorbeeld

```scss
@use "@minvws/manon/button-base";
@use "@minvws/manon/icon";
@use "@minvws/manon/visually-hidden";
@use "@minvws/manon/button-icon";
```

<h2 id="related">Gerelateerde pagina's</h2>

- [Test- en voorbeelden-pagina](/components/button/icon/test)
