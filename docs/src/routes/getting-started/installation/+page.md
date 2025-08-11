---
title: Installatie
breadcrumb: Installatie
---

# Installatie

Deze documentatie beschrijft instructies voor het installeren en gebruiken van
het Manon design framework in je project.

Je kunt ook de
[tutorial](https://github.com/minvws/nl-rdo-manon/tree/main/examples/tutorial)
volgen om te leren hoe je de componenten op een meer gestructureerde manier kunt
gebruiken.

Daarnaast hebben we
[enkele voorbeeldimplementaties](https://github.com/minvws/nl-rdo-manon/tree/main/examples/)
geleverd in verschillende frameworks.

## Vereisten

Voordat je begint, zorg ervoor dat je project voldoet aan de volgende vereisten:

- Een werkende Node.js omgeving, versie 20 of hoger.
- Een package manager zoals npm.
- Een build-system dat sass kan ondersteunen of een sass compiler, zoals
  `dart-sass`, om de Sass-bestanden te compileren naar CSS.

## Installatie stappen

1. **Installeer sass**

   Zorg ervoor dat je project is ingesteld om Sass te gebruiken en dat je een
   Sass-compiler hebt geïnstalleerd. Als je build-systeem Sass niet ondersteunt,
   kun je
   [de Sass command-line-tool](https://sass-lang.com/documentation/cli/dart-sass/)
   installeren.

   ```bash
   npm install sass
   ```

2. **Installeer Manon en een thema**

   Installeer het Manon framework en een thema pakket. In dit voorbeeld
   gebruiken we het `icore-open` thema.

   Via npm kun je de volgende commando's gebruiken om Manon en het thema te
   installeren:

   ```bash
   npm install @minvws/manon @minvws/manon-themes
   ```

3. **Importeer in je SCSS**

   In je hoofd sass bestand, importeer het Manon framework en het gekozen thema.

   ```scss
   // 1. Importeer het Manon-framework en de bijbehorende componenten
   @use "@minvws/manon/application-base";

   // 2. Import a theme
   @use "@minvws/manon-themes/icore-open";
   ```

4. **Importeer componenten**

   Je kunt nu individuele Manon componenten importeren als je niet het hele
   framework nodig hebt.

   ```scss
   // Voorbeeld: Importeer de button component
   @use "@minvws/manon/components/button";
   ```

   Importeer de componenten die je nodig hebt in je project. Voor een lijst van
   beschikbare componenten, zie de [componenten documentatie](/components). Bij
   elk component vind je een voorbeeld van hoe je deze kunt importeren en
   gebruiken.

   Importeer de componenten ná het importeren van het thema, zodat je de
   componenten kunt gebruiken met de juiste styling. De import volgorde is
   bijvoorbeeld dan als volgt:

   ```scss
   @use "@minvws/manon/application-base";
   @use "@minvws/manon-themes/icore-open";
   @use "@minvws/manon/components/button";
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
@use "@minvws/manon-themes/icore-open" with (
    $base-font-family: "Your Custom Font",
    sans-serif
  );
```

## Javascript

### Automische initialisatie

Veel componenten, zoals accordeons en collapsible, worden automatisch
geïnitialiseerd. Je hoeft alleen het bijbehorende JavaScript-bestand in je
project op te nemen. De scripts vinden de componenten in je HTML en maken ze
interactief.

Bijvoorbeeld, om de accordion component te gebruiken, neem je het bestand
`accordion.js` op, en het script zal automatisch elk `.accordion` element
initialiseren.

### Manon gebruiken met een bundler

Als je een JavaScript-bundler zoals Vite, Webpack of Rollup gebruikt, kun je de
Manon-componenten rechtstreeks importeren in de JavaScript-bestanden van je
project.

#### Componenten importeren

Om een component te gebruiken, importeer je het bijbehorende JavaScript-bestand.
Bijvoorbeeld, om de **accordion**- en **collapsible**-componenten te gebruiken,
voeg je het volgende toe aan je hoofd JavaScript-bestand:

```javascript
// Importeer de Manon-componenten die je nodig hebt
import "@minvws/manon/accordion.js";
import "@minvws/manon/collapsible.js";
```
