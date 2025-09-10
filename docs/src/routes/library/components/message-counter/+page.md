---
title: Notificatie-teller
breadcrumb: Notificatie-teller
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

De notificatie-teller is bedoeld om de gebruiker te attenderen en te informeren
over nieuwe berichten of notificaties.

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/message-counter-base";
```

### Benodigde stappen

- Voeg de `class` "message-counter" toe om het aantal berichten visueel weer te
  geven als een notificatie-teller.
- Overweeg of het nodig is een toegankelijk label toe te voegen.
  - Is uit context duidelijk waar de teller bij hoort? Bijvoorbeeld in een link
    zoals: <a href="message-counter">Berichten
    <span class="message-counter">42</span></a>, of in een tabel met duidelijke
    headers? Dan is het **niet** nodig een extra label toe te voegen.
  - Wordt de teller gebruikt in combinatie met bijvoorbeeld een icoon? Zorg dan
    dat het icoon een duidelijk tekst-alternatief heeft.

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Als los element

<span class="message-counter">1</span>

```html
<span class="message-counter">1</span>
```

### Voorbeeld: `In een link`

<a href="message-counter">Berichten <span class="message-counter">42</span></a>

```html
<a href="message-counter">Berichten <span class="message-counter">42</span></a>
```

### Voorbeeld: Lang getal

<span class="message-counter">12.830</span>

```html
<span class="message-counter">12.830</span>
```
