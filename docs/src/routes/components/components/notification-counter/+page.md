---
title: Notificatie-teller
breadcrumb: Notificatie-teller
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Instelbare variabelen: "#variables"
---

<h1 id="introduction">Notificatie-teller</h1>

De notificatie-teller is bedoeld om de gebruiker te attenderen en te informeren
over nieuwe berichten of notificaties.

- Voeg de `class` "message-counter" toe om het aantal berichten visueel weer te
  geven als een notificatie-teller.
- Overweeg of het nodig is een toegankelijk label toe te voegen.
  - **Let op**: in vorige versies van deze documentatie werd aangeraden om de
    notificatie-teller een `aria-label` te geven. **Dat was incorrect.**
  - Is uit context duidelijk waar de teller bij hoort? Bijvoorbeeld in een link
    zoals: <a href="message-counter">Berichten
    <span class="message-counter">42</span></a>, of in een tabel met duidelijke
    headers? Dan is het **niet** nodig een extra label toe te voegen.
  - Wordt de teller gebruikt in combinatie met bijvoorbeeld een icoon? Zorg dan
    dat het icoon een duidelijk tekst-alternatief heeft.

<h2 id="examples">Voorbeelden</h2>

### Als los element

#### Visueel voorbeeld

<span class="message-counter">1</span>

#### HTML-voorbeeld

```html
<span class="message-counter">1</span>
```

### `In een link`

#### Visueel voorbeeld

<a href="message-counter">Berichten <span class="message-counter">42</span></a>

#### HTML-voorbeeld

```html
<a href="message-counter">Berichten <span class="message-counter">42</span></a>
```

### Lang getal

#### Visueel voorbeeld

<span class="message-counter">12.830</span>

#### HTML-voorbeeld

```html
<span class="message-counter">12.830</span>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/message-counter-base";
```
