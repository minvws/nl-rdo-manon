---
title: Kruimelpad - breadcrumb-bar
breadcrumb: Kruimelpad - breadcrumb-bar
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
---

<h1 id="introduction">Kruimelpad - breadcrumb-bar</h1>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/breadcrumb-bar";
```

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Vul de variabelen met de gewenste stijlkeuzes. Voor meer informatie zie het
    overzicht met [instelbare variabelen](#variables).
3.  Voeg de bijbehorende HTML toe. Voor meer informatie zie:
    [Voorbeelden](#examples).

<h2 id="examples">Voorbeelden:</h2>

### Paragraaf

#### Visueel voorbeeld:

<div class="resize">
  <iframe src="/examples/breadcrumb-bar" title="Voorbeeld"></iframe>
</div>

<h2>HTML-voorbeeld:</h2>

```html
<nav class="breadcrumb-bar">
  <div>
    <ul>
      <li><a href="/components">Componenten</a></li>
      <li>
        <a href="/components/breadcrumb-bar" aria-current="page"
          >Kruimelpad - breadcrumb-bar</a
        >
      </li>
    </ul>
  </div>
</nav>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)
