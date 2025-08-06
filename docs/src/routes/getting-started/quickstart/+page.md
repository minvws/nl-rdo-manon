---
title: Aan de slag met Manon
breadcrumb: Snelstart
---

# Snelstart

## Vereisten

Zorg ervoor dat je project is ingesteld om Sass te gebruiken en dat je een
Sass-compiler hebt geïnstalleerd. Als je build-systeem Sass niet ondersteunt,
kun je
[de Sass command-line-tool](https://sass-lang.com/documentation/cli/dart-sass/)
installeren.

```plaintext
npm install sass
```

## Installeren met npm

We moeten Manon en Manon Themes installeren om de componenten en stijlen te
gebruiken.

```plaintext
npm install @minvws/manon
npm install @minvws/manon-themes
```

## Importeren

In je Sass-bestand kun je het Manon-framework en een thema naar keuze
importeren.

```scss
// Importeer het Manon-framework en de bijbehorende componenten
@use "@minvws/manon/application-base";

// Je kunt hier ook specifieke componenten importeren indien nodig::

// Importeer het iCore Open-thema
@use "@minvws/manon-themes/icore-open";
```

## Gebruik

Je bent nu klaar om de componenten in je HTML te gebruiken. Volg de instructies
in de [Componentenbibliotheek](https://minvws.github.io/nl-rdo-manon/components)
over hoe je de componenten in je HTML kunt gebruiken. Elke component heeft zijn
eigen pagina met voorbeelden en codefragmenten.

Je kunt ook de
[tutorial](https://github.com/minvws/nl-rdo-manon/tree/main/examples/tutorial)
volgen om te leren hoe je de componenten op een meer gestructureerde manier kunt
gebruiken.

Daarnaast hebben we
[enkele voorbeeldimplementaties](https://github.com/minvws/nl-rdo-manon/tree/main/examples/)
geleverd in verschillende frameworks.
