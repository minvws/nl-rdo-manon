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
2.  Vul de variabelen met de gewenste stijlkeuzes. Voor meer informatie zie het overzicht met [instelbare variabelen](#variables).
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

<h2 id="variables">Instelbare variabelen</h2>

**Let op:** De uitlijning van horizontaal uitgelijnde tags werken alleen in combinatie met de class `horizontal`.

| Variabele                          | CSS-attribuut                                             | Manon ingestelde waarde            | Breekpunt | Class            |
| ---------------------------------- | --------------------------------------------------------- | ---------------------------------- | --------- | ---------------- |
| \--button-container-flex-direction | [flex-direction](/documentation/variables#flex-direction) | row                                | \-        | button-container |
| \--button-container-align-items    | [align-items](/documentation/variables#align-items)       | center                             | \-        |
| \--button-container-flex-wrap      | [flex-wrap](/documentation/variables#flex-wrap)           | wrap                               | \-        |
| \--button-container-gap            | [gap](/documentation/variables#gap)                       | var(--application-base-gap-medium) | \-        |
| \--button-container-padding-top    | [padding-top](/documentation/variables#padding-top)       | 0                                  | \-        |
| \--button-container-padding-right  | [padding-right](/documentation/variables#padding-right)   | 0                                  | \-        |
| \--button-container-padding-bottom | [padding-bottom](/documentation/variables#padding-bottom) | 0                                  | \-        |
| \--button-container-padding-left   | [padding-left](/documentation/variables#padding-left)     | 0                                  | \-        |

### CSS

Overzicht van de beschikbare variabelen om te kunnen gebruiken binnen de CSS van jouw project. Kies en gebruik de benodigde variabelen.

```css
:root {
  --button-container-flex-direction: ;
  --button-container-align-items: ;
  --button-container-flex-wrap: ;
  --button-container-gap: ;
  --button-container-padding-top: ;
  --button-container-padding-right: ;
  --button-container-padding-bottom: ;
  --button-container-padding-left: ;
}
```

<h2 id="related">Gerelateerde pagina's</h2>

[Test- en voorbeelden-pagina](/components/button-container-test)
