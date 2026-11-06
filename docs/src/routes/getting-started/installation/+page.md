---
title: Installatie
breadcrumb: Installatie
---

Deze documentatie beschrijft instructies voor het installeren en gebruiken van
het Manon design framework in je project.

Je kunt ook de [tutorial](/getting-started/tutorial) volgen om te leren hoe je
de componenten op een meer gestructureerde manier kunt gebruiken.

Daarnaast hebben we
[enkele voorbeeldimplementaties](https://github.com/minvws/nl-rdo-manon/tree/main/examples/)
geleverd in verschillende frameworks.

## Sass of kant-en-klare CSS

Je kunt Manon op twee manieren in je project opnemen:

- **Kant-en-klare CSS**: de CSS-bestanden in `@minvws/manon-themes/dist` (ook
  beschikbaar via de CDN, zie de [snelstart](/getting-started/quickstart))
  bevatten een thema **en alle componenten**. Je hoeft verder niets te
  importeren.
- **Sass**: wanneer je een thema met `@use` importeert, krijg je **alleen de
  configuratie** van dat thema: de Sass-variabelen, de fonts en de
  icon classes. Het thema bevat geen componenten. Je kiest zelf welke
  componenten je importeert: de volledige bundel, een deelbundel of losse
  componenten. Dit is de manier die hieronder beschreven wordt.

## Vereisten

Voordat je begint, zorg ervoor dat je project voldoet aan de volgende vereisten:

- Een werkende Node.js omgeving, versie 20 of hoger.
- Een package manager zoals npm.
- Een build-system dat Sass kan ondersteunen. Of een sass compiler, zoals
  `dart-sass`, om de Sass-bestanden te compileren naar CSS.

## Installatie stappen

1. **Installeer sass**

   Zorg ervoor dat je project is ingesteld om Sass te gebruiken en dat je een
   Sass-compiler hebt geïnstalleerd. Build-systemen zoals Webpack, Parcel of
   Vite ondersteunen meestal Sass out-of-the-box. Als je een van deze
   build-systemen gebruikt, hoef je mogelijk alleen de juiste loader of plugin
   te installeren.

   Als je build-systeem Sass niet ondersteunt, kun je
   [de Sass command-line-tool](https://sass-lang.com/documentation/cli/dart-sass/)
   installeren. Wanneer je de Sass command-line interface gebruikt om je
   bestanden te compileren, kan je het `load-path` definiëren om de
   Manon-pakketten te vinden. Dit kan gedaan worden met de `--load-path` optie:
   `sass --load-path node_modules/@minvws/manon` Dan kan je de componenten en
   thema's importeren zoals hieronder beschreven.

2. **Installeer Manon en een thema**

   We moeten het _Manon Framework_ en _Manon Themes_ installeren om de
   componenten en stijlen te gebruiken.

   Via `npm` kun je het volgende commando gebruiken om Manon en het thema te
   installeren:

   ```console
   npm install @minvws/manon @minvws/manon-themes
   ```

3. **Importeer een thema**

   In je hoofd SCSS-bestand (bijv. `main.scss`), importeer je eerst een thema.
   In dit voorbeeld gebruiken we het `icore-open` thema.

   ```scss
   // Importeer een thema naar keuze. Hier gebruiken we het icore-open thema als voorbeeld.
   @use "@minvws/manon-themes/icore-open";
   ```

   Het thema stelt de Sass-variabelen van Manon in, laadt de fonts en maakt de
   icon classes aan. Het bevat zelf geen componenten: met alleen deze regel
   bevat je CSS nog geen styling voor bijvoorbeeld knoppen of formulieren.

   Importeer het thema altijd als eerste. Het thema configureert
   `@minvws/manon/variables`. Wordt er eerst een component geladen, dan zijn de
   variabelen al met hun standaardwaarden geladen en kan het thema ze niet meer
   instellen.

4. **Importeer de componenten**

   Na het thema importeer je de componenten die je wilt gebruiken. Je hebt
   daarvoor de volgende mogelijkheden:

   - **Alle componenten**: de bundel `all` bevat alle componenten en
     utility-klassen. Dit is de eenvoudigste manier om te beginnen.

     ```scss
     @use "@minvws/manon-themes/icore-open";
     @use "@minvws/manon/components/bundles/all";
     ```

   - **Losse componenten**: importeer alleen de componenten die je nodig hebt.
     Dit houdt je CSS kleiner.

     ```scss
     @use "@minvws/manon-themes/icore-open";
     @use "@minvws/manon/components/base";
     @use "@minvws/manon/components/button";
     ```

     Voor een lijst van beschikbare componenten, zie de
     [componenten documentatie](/library). Bij elk component vind je een
     voorbeeld van hoe je deze kunt importeren en gebruiken.

   - **Deelbundels**: in `@minvws/manon/components/bundles` vind je ook bundels
     per onderwerp, zoals `buttons`, `layout`, `navigation`, `notifications`
     en `tables`. Deze bevatten niet de basisstijlen (zoals
     `base` en `focus`) en de utility-klassen. Die importeer je dan los, zoals
     `@minvws/manon/utility/visually-hidden`.

     ```scss
     @use "@minvws/manon-themes/icore-open";
     @use "@minvws/manon/components/base";
     @use "@minvws/manon/components/bundles/buttons";
     @use "@minvws/manon/components/bundles/tables";
     ```

## Javascript

Manon bevat verschillende interactieve componenten die JavaScript gebruiken voor
hun interactieve gedrag. Deze componenten zijn opgebouwd volgens _progressive
enhancement_: de HTML werkt op zichzelf, JavaScript maakt hem interactief. Ze
zijn ontworpen om eenvoudig te integreren in je project.

### Automatische initialisatie

Veel componenten, zoals accordeons en collapsible, worden automatisch
geïnitialiseerd. Je hoeft alleen het bijbehorende JavaScript-bestand in je
project op te nemen. De scripts vinden de componenten in je HTML en maken ze
interactief.

Bijvoorbeeld, om de accordion component te gebruiken, neem je het bestand
`accordion.js` op, en het script zal automatisch elk `.accordion` element
initialiseren en de toggle-buttons in de koppen van de onderdelen genereren.
Er is dan geen extra JavaScript-code nodig om het component werkend te
krijgen.

<h3 id="no-javascript">Werken zonder JavaScript</h3>

De HTML die je zelf schrijft bevat alleen de structuur van een component.
Attributen die een interactieve toestand beschrijven, zoals `aria-expanded` en
`aria-controls`, en elementen die alleen bestaan om het component te bedienen,
zoals de knop van een inklapbaar component, worden door de JavaScript
toegevoegd.

Indien Javascript is uitgeschakeld, dan blijven componenten in hun uitgeklapte
uitgangstoestand staan. Alle content is dan gewoon beschikbaar en er is geen knop die niets doet.

### Manon gebruiken met een bundler

Als je een JavaScript-bundler zoals Vite, Webpack of Rollup gebruikt, kun je de
Manon-componenten rechtstreeks importeren in de JavaScript-bestanden van je
project.

#### Componenten importeren

Om een component te gebruiken, importeer je het bijbehorende JavaScript-bestand.
Bijvoorbeeld, om de **accordion**- en **collapsible**-componenten te gebruiken,
voeg je het volgende toe aan je hoofd JavaScript-bestand, door gebruik te maken
van de standaard ES Module import syntax:

```javascript
// Importeer de Manon-componenten die je nodig hebt
import "@minvws/manon/js/accordion.js";
import "@minvws/manon/js/collapsible.js";
```

## Fonts

Fonts zijn in Manon beheerd via thema's. Het Manon framework zelf bevat geen
fonts. Het thema is verantwoordelijk voor het laden van de fonts en het
instellen van de juiste Sass variabelen.

### Gebruik van een kant-en-klaar thema

Wanneer je een thema zoals `icore-open` importeert, worden de lettertypen
automatisch geconfigureerd. Het `_index.scss`-bestand van het thema stelt de
font-family-variabelen in voor de Manon-componenten.

Bijvoorbeeld, het `icore-open-thema` stelt het basislettertype in als volgt:

```scss
// themes/icore-open/_index.scss

@use "@minvws/manon/variables" with (
  // ... andere variabelen
  $base-font-family: "IBM Plex Sans" // ... andere variabelen
);
```

### Lettertypen aanpassen

Om je eigen lettertypen te gebruiken, kun je een aangepast thema maken of de
lettertypevariabelen van een bestaand thema overschrijven.

Om variabelen te overschrijven, gebruik je een `with`-blok bij het importeren
van het thema:

```scss
@use "@minvws/manon-themes/icore-open" with ($base-font-family: "Your Custom Font", sans-serif);
```
