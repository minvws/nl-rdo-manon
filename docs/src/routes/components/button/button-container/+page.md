---
title: Knoppen groeperen
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Knoppen groeperen</h1>

## Benodigde stappen

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en optionele bestanden zie: [Bijbehorende bestanden](#requirements).
2.  Vul de variabelen met de gewenste stijlkeuzes.
3.  Groepeer de knoppen binnen een `<div>` met de class `button-container`.

<h2 id="examples">Voorbeelden</h2>

### Paragraaf

#### Visueel voorbeeld

<div class="button-container">
  <button>Eerste knop</button>
  <button>Tweede knop</button>
</div>

#### HTML-voorbeeld

```html
<div class="button-container">
  <button>Eerste knop</button>
  <button>Tweede knop</button>
</div>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Zie voor meer informatie over importeren en instellen van componenten: [Componenten gebruiken en styling toevoegen](/documentation/import-styling).

### Importeer component via npm

#### SCSS-voorbeeld

```scss
@use "@minvws/manon/button-container";
```

**Let op:** de volgorde waarin de componenten geïmporteerd worden is belangrijk. Dit component moet **na** de overige `button-`componenten geïmporteerd worden.

<h2 id="related">Gerelateerde pagina's</h2>

[Test- en voorbeelden-pagina](/components/button-container-test)
