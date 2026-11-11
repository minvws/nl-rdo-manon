---
title: Snelstart
breadcrumb: Snelstart
---

Deze documentatie biedt een snelle startgids voor het gebruik van het Manon
framework en de bijbehorende thema's in je project. Je kunt ook de
[tutorial](/getting-started/tutorial) volgen om te leren hoe je de componenten
op een meer gestructureerde manier kunt gebruiken. Daarnaast hebben we
[enkele voorbeeldimplementaties](https://github.com/minvws/nl-rdo-manon/tree/main/examples/)
geleverd in verschillende frameworks.

## Handmatige installatie

[Download Manon](https://github.com/minvws/nl-rdo-manon/releases/latest/download/manon-themes.zip),
pak het uit en link `dist/manon.min.css` in de `<head>` van je
HTML-bestand:

```html
<link rel="stylesheet" href="path/to/manon.min.css" />
```

Dit CSS-bestand bevat het `icore-open` thema en alle componenten. In
`dist` vind je ook de andere thema's, zoals
`rijkshuisstijl-2008/manon.rijkshuisstijl-2008.min.css`.

## Installatie via CDN

Je kunt ook een thema van Manon gebruiken via
[jsDelivr CDN](https://cdn.jsdelivr.net/npm/@minvws/manon-themes/). Voeg de
volgende regel toe aan de `<head>` van je HTML-bestand:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@minvws/manon-themes/dist/manon.min.css"
/>
```

## Installatie via npm

```console
npm install @minvws/manon @minvws/manon-themes
```

Wanneer je Manon via Sass gebruikt, importeer je eerst een thema en daarna de
componenten. Het thema bevat alleen de configuratie (variabelen, fonts en
iconen), geen componenten. Importeer daarom ook de bundel met alle
componenten:

```scss
@use "@minvws/manon-themes/icore-open";
@use "@minvws/manon/components/bundles/all";
```

Of importeer alleen de componenten die je nodig hebt:

```scss
@use "@minvws/manon-themes/icore-open";
@use "@minvws/manon/components/base";
@use "@minvws/manon/components/hero";
```

Lees meer informatie in de
[installatie documentatie](/getting-started/installation)
over het gebruik van Manon met Sass in je project voor meer maatwerkopties.

## Gebruik

Je bent nu klaar om de componenten in je HTML te gebruiken. Volg de instructies
in de [Componentenbibliotheek](/library) over hoe je de componenten importeert
en hoe je deze in je HTML kunt gebruiken. Elk component heeft zijn eigen pagina
met voorbeelden en codefragmenten.

Wil je weten hoe je een volledige HTML pagina opbouwt? Dan kan je ook de
[tutorial](/getting-started/tutorial) volgen om te leren hoe je de componenten
op een meer gestructureerde manier kunt gebruiken.
