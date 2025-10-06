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

## Installeren met npm

Om het Manon Framework en de thema's te gebruiken, moet we ze eerst installeren.
Dit kan gedaan worden met npm:

```console
npm install @minvws/manon @minvws/manon-themes
```

## Vereisten

Zorg er daarnaast voor dat je project is ingesteld om Sass te gebruiken en dat
je een Sass-compiler hebt geïnstalleerd. Build-systemen zoals Webpack, Parcel of
Vite ondersteunen meestal Sass out-of-the-box. Als je een van deze
build-systemen gebruikt, hoef je mogelijk alleen de juiste loader of plugin te
installeren.

Als je build-systeem Sass niet ondersteunt, kun je
[de Sass command-line-tool](https://sass-lang.com/documentation/cli/dart-sass/)
installeren. Wanneer je de Sass command-line interface gebruikt om je bestanden
te compileren, kan je het `load-path` definiëren om de Manon-pakketten te
vinden. Dit kan gedaan worden met de `--load-path` optie:
`sass --load-path node_modules/@minvws/manon` Dan kan je de componenten en
thema's importeren zoals hieronder beschreven.

## Importeren

Wanneer de packages zijn geïnstalleerd, kun je beginnen met het importeren van
de componenten en stijlen in je Sass-bestanden. Het Manon-framework biedt een
basisset van componenten en stijlen die je kunt gebruiken, en de thema's bieden
vooraf gedefinieerde stijlen die je kunt toepassen op de componenten. Je staat
vrij om de componenten te importeren die je nodig hebt.

Allereerst importeren we een thema. We raden aan om altijd een thema te
importeren, omdat dit de basisstijlen en variabelen bevat die nodig zijn voor de
componenten om correct te functioneren. Daarna kunnen we de benodigde
componenten importeren.

Voorbeeld van een SCSS-bestand (bijv. `main.scss`) dat de basiscomponenten en
een thema importeert:

```scss
// 1. Import een thema naar keuze. Hier gebruiken we het iCore Open thema als voorbeeld.
@use "@minvws/manon-themes/icore-open";

// 2. Je kunt hier ook specifieke componenten importeren indien nodig:
@use "@minvws/manon/components/button";
```

## Gebruik

Je bent nu klaar om de componenten in je HTML te gebruiken. Volg de instructies
in de [Componentenbibliotheek](/library) over hoe je de componenten importeert
en hoe je deze in je HTML kunt gebruiken. Elk component heeft zijn eigen pagina
met voorbeelden en codefragmenten.

Wil je weten hoe je een volledige HTML pagina opbouwt? Dan kan je ook de
[tutorial](/getting-started/tutorial) volgen om te leren hoe je de componenten
op een meer gestructureerde manier kunt gebruiken.
