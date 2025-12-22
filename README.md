<p align="center">
  <a href="https://minvws.github.io/nl-rdo-manon" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/minvws/nl-rdo-manon/main/docs/src/img/logo.svg" />
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/minvws/nl-rdo-manon/main/docs/src/img/logo-dark.svg" />
      <img alt="Manon logo" src="https://raw.githubusercontent.com/minvws/nl-rdo-manon/main/docs/src/img/logo-dark.svg" width="200" />
    </picture>
  </a>
</p>

<h1 align="center">Manon</h1>

<p align="center">
  Een flexibel en toegankelijk design framework voor semantische HTML.
</p>

<p align="center">
  <a href="https://github.com/minvws/nl-rdo-manon/releases/latest"><img alt="github release" src="https://img.shields.io/github/v/release/minvws/nl-rdo-manon?style=for-the-badge&color=fa32c8&logo=github"></a>
  <a href="https://www.npmjs.com/package/@minvws/manon" ><img alt="npm package" src="https://img.shields.io/npm/v/@minvws/manon?style=for-the-badge&color=fa32c8&logo=npm"></a>
  <a href="https://github.com/minvws/nl-rdo-manon/actions/workflows/ci.yml?query=branch%3Amain" ><img alt="build status" src="https://img.shields.io/github/actions/workflow/status/minvws/nl-rdo-manon/ci.yml?branch=main&style=for-the-badge&logo=github"></a>
  <a href="https://github.com/minvws/rdo-icore-coordination/" ><img alt="part of icore" src="https://img.shields.io/badge/Part_of-iCore-ed7b3e?style=for-the-badge"></a>
</p>

---

## 📚 Documentatie

De volledige documentatie is te vinden op
<https://minvws.github.io/nl-rdo-manon>. Deze wordt gegenereerd op basis van de
[docs](./docs) directory binnen deze repo.

> For English, see [English](README.en.md).

## 🙋 Wat is Manon?

Manon is een design framework dat de volgende principes hanteert:

### ✨ "Classless" waar mogelijk

Manon geeft de voorkeur aan styling op basis van de HTML-structuur, wat zorgt
voor overzichtelijke en goed onderhoudbare code. Dit maakt efficiënte visuele
aanpassingen mogelijk met minimale HTML-wijzigingen.

### 🫶 Toegankelijkheid

Manon streeft ernaar om de toegankelijkheid van webapplicaties te verbeteren
door het bieden van toegankelijke componenten die voldoen aan de
WCAG-richtlijnen.

### 📦 Zo klein mogelijk

Gebruik alleen wat je nodig hebt. Manon bestaat uit losse componenten die
afzonderlijk geïmporteerd kunnen worden, zodat je niet de hele set hoeft te
gebruiken.

### 🎨 Thema's

Naast dat Manon een aantal thema's aanbiedt, kun je ook je eigen thema
samenstellen. Elk thema kan de variabelen van de componenten overschrijven om de
gewenste stijl te bereiken.

## 🚀 Aan de slag

Om Manon in je project te gebruiken, kun je kiezen uit de volgende
installatiemethoden:

### Handmatige installatie

[Download Manon](https://github.com/minvws/nl-rdo-manon/archive/refs/heads/main.zip)
en link het `manon-themes/dist/manon.min.css` in de `<head>` van je
HTML-bestand:

```html
<link rel="stylesheet" href="path/to/manon.min.css" />
```

### Installatie via CDN

Je kunt ook een thema van Manon gebruiken via
[jsDelivr CDN](https://cdn.jsdelivr.net/npm/@minvws/manon-themes/). Voeg de
volgende regel toe aan de `<head>` van je HTML-bestand:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@minvws/manon-themes/dist/manon.min.css"
/>
```

### Installatie via npm

```console
npm install @minvws/manon @minvws/manon-themes
```

Je kunt dan een thema van Manon en de volledige componenten bibliotheek
importeren in je Sass-bestand:

```scss
@use "@minvws/manon-themes/icore-open";
@use "@minvws/manon/components/bundles/all";
```

Als je niet de volledige set wilt gebruiken dan heb je de mogelijkheid om
specifieke componenten te importeren:

```scss
@use "@minvws/manon/components/breadcrumb-bar";
@use "@minvws/manon/components/checkbox";
```

Lees meer informatie in de
[installatie documentatie](https://minvws.github.io/nl-rdo-manon/getting-started/installation)
over het gebruik van Manon met Sass in je project voor meer maatwerkopties.

### Klaar om te gebruiken

Je bent nu klaar om de componenten in je HTML te gebruiken. Volg de instructies
in de [Componentenbibliotheek](https://minvws.github.io/nl-rdo-manon/components)
over hoe je de componenten in je HTML kunt gebruiken. Elke component heeft zijn
eigen pagina met voorbeelden en codefragmenten.

Je kunt ook de
[tutorial](https://minvws.github.io/nl-rdo-manon/getting-started/tutorial)
volgen om te leren hoe je de componenten op een meer gestructureerde manier kunt
gebruiken.

Daarnaast hebben we
[enkele voorbeeldimplementaties](https://github.com/minvws/nl-rdo-manon/tree/main/examples/)
geleverd in verschillende frameworks.

## 🏗️ Projecten gebouwd met Manon

Hieronder staan enkele projecten die gemaakt zijn met Manon:

| Project                         | Links                                                                                                                                                                                                    |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Dus-i Burgerportaal**         | 🧑‍💻 [https://github.com/minvws/nl-rdo-dusi-portal-web-frontend](https://github.com/minvws/nl-rdo-dusi-portal-web-frontend)                                                                                |
| **GF-Modules**                  | 🌐 [https://irealisatie.nl/projecten/gf-modules](https://irealisatie.nl/projecten/gf-modules)<br>🧑‍💻 [https://github.com/minvws/gfmodules-coordination](https://github.com/minvws/gfmodules-coordination) |
| **iCore Open Theme for Sphinx** | 🧑‍💻 [https://github.com/minvws/manon-icore-open-sphinx-theme](https://github.com/minvws/manon-icore-open-sphinx-theme)                                                                                    |
| **iRealisatie Website**         | 🌐 [https://irealisatie.nl](https://irealisatie.nl)                                                                                                                                                      |
| **Mijn Gezondheidsoverzicht**   | 🌐 [https://irealisatie.nl/projecten/mijn-gezondheidsoverzicht](https://irealisatie.nl/projecten/mijn-gezondheidsoverzicht)                                                                              |
| **OpenKAT**                     | 🌐 [https://openkat.nl](https://openkat.nl)<br>🧑‍💻 [https://github.com/minvws/nl-kat-coordination](https://github.com/SSC-ICT-Innovatie/nl-kat-coordination)                                              |
| **ZaakVolgSysteem**             | 🌐 [https://irealisatie.nl/projecten/zaakvolgsysteem](https://irealisatie.nl/projecten/zaakvolgsysteem)                                                                                                  |

## 🌱 Oorsprong

Manon is ontstaan uit de behoefte aan een flexibel design framework voor de
vaccinatiecampagne, waarbij snel veel websites moesten worden gelanceerd onder
strikte huisstijl- en toegankelijkheidsvoorschriften van de rijksoverheid. Het
Ministerie van VWS heeft dit framework ontwikkeld om het bouwen en beheren van
rijkshuisstijl conforme websites te vereenvoudigen. Deze versie is aangepast
voor breder gebruik.

## 📄 Licentie

Deze repository volgt de
[REUSE Specification v3.2](https://reuse.software/spec/). Zie
[REUSE.toml](./REUSE.toml), [LICENSES/](./LICENSES/) en de individuele
`*.license`-bestanden voor copyright- en licentie-informatie.
