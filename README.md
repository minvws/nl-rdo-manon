# Manon

> [!NOTE]
>
> For English, see [English](README.en.md).

## 🙋 Over Manon

Manon is een design framework dat de volgende principes hanteert:

### ✨ "Classless" waar mogelijk.

Manon geeft de voorkeur aan styling op basis van de HTML-structuur, wat zorgt
voor overzichtelijke en goed onderhoudbare code. Dit maakt efficiënte visuele
aanpassingen mogelijk met minimale HTML-wijzigingen, bijvoorbeeld door een ander
CSS-component in te laden voor dezelfde HTML-structuur.

### 📦 Zo klein mogelijk

Gebruik alleen wat je nodig hebt. Manon bestaat uit losse componenten die
afzonderlijk geïmporteerd kunnen worden, zodat je niet de hele set hoeft te
gebruiken.

### 🛠️ Instelbaar

Componenten zijn instelbaar via variabelen. De modulaire opzet voorkomt onnodige
overschrijvingen van CSS. Raadpleeg de documentatie of de variabelen-bestanden
voor een overzicht van de instelbare variabelen per component.

## 📚 Documentatie

De documentatie is te vinden op https://minvws.github.io/nl-rdo-manon. Deze
wordt gegenereerd op basis van de [docs](./docs) directory binnen deze repo.

## 🚀 Aan de slag

Om Manon in je project te gebruiken:

1.  Zorg ervoor dat je project is ingesteld om Sass te gebruiken en dat je een
    Sass-compiler hebt geïnstalleerd. Als je build-systeem geen Sass
    ondersteunt, kun je
    [de Sass command-line tool](https://sass-lang.com/documentation/cli/dart-sass/)
    installeren.

    ```bash
    npm install sass
    ```

2.  Installeer Manon en Manon Themes via npm:

    ```bash
    npm install @minvws/manon
    npm install @minvws/manon-themes
    ```

3.  Importeer in je project het Manon framework en een thema naar keuze.

    ```scss
    // Importeer het Manon framework en zijn componenten
    @use "@minvws/manon/application-base";

    // Je kunt hier ook specifieke componenten importeren indien nodig:
    // @use "@minvws/manon/p"

    // Importeer het iCore Open thema
    @use "@minvws/manon-themes/icore-open";
    ```

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

## 🌱 Oorsprong

Manon is ontstaan uit de behoefte aan een flexibel design framework voor de
vaccinatiecampagne, waarbij snel veel websites moesten worden gelanceerd onder
strikte huisstijl- en toegankelijkheidsvoorschriften van de rijksoverheid. Het
Ministerie van VWS heeft dit framework ontwikkeld om het bouwen en beheren van
rijkshuisstijl conforme websites te vereenvoudigen. Deze versie is aangepast
voor breder gebruik.

Het verschil tussen Manon Rijk (met rijkshuisstijl) en Manon Open (algemeen
gebruik) is dat Manon Open variabel en instelbaar is. Waar de eerste versie van
Manon als geheel werd geïmplementeerd, stelt Manon Open je in staat om zelf te
kiezen welke componenten en CSS-delen je wilt toevoegen. Dit resulteert in
minder overrides en een kleiner CSS-bestand.

## 📄 Licentie

Deze repository volgt de
[REUSE Specification v3.2](https://reuse.software/spec/). Zie
[REUSE.toml](./REUSE.toml), [LICENSES/](./LICENSES/) en de individuele
`*.license`-bestanden voor copyright- en licentie-informatie.
