# Manon

> [!NOTE]
> For English, see [English](#english)

De documentatie is te vinden op https://minvws.github.io/nl-rdo-manon. Deze wordt gegenereerd op basis van de [docs](./docs) directory binnen deze repo.

Er wordt momenteel nog hard gewerkt aan Manon en de documentatie. Het kan daarom zijn dat sommige onderdelen nog niet volledig getest zijn of nog missen. Kom je een probleem tegen dat nog niet gedocumenteerd staat binnen de issues op de manon repository meld ze vooral. Dan maakt ze inzichtelijk en oplosbaar.

## Wat

Manon is een design framework dat gebruik maakt van de volgende principes:

### "Classless" waar mogelijk.

Als er gestyled kan worden op basis van de HTML-structuur heeft dit de voorkeur. Gescheiden code-lagen voor zover dit mogelijk is. Dit zorgt voor overzichtelijke goed onderhoudbare code waarbij de visuele weergave efficient aangepast kan worden met zo min mogelijk aanpassingen binnen de HTML. Bijvoorbeeld door een ander CSS-component in te laden voor dezelfde HTML-structuur.

### Zo klein mogelijk

Gebruik enkel wat je nodig hebt. Losse componenten die gebruikt kunnen worden binnen projecten zonder de hele set te hoeven importeren.

### Instelbaar

Componenten zijn instelbaar door middel van variabelen en de kleine geselecteerde toegepaste set voorkomt onnodige overschrijvingen van CSS. Zie de documentatie of de variabelen-bestanden voor het overzicht van de instelbare variabelen per component.

## Oorsprong

Tijdens de vaccinatiecampagne werden er in korte tijd veel websites gelanceerd en in beheer genomen. Met strikte huisstijlvoorschriften vanuit de rijksoverheid, de wens om toegankelijke websites te leveren en gezien de dynamiek van de pandemie voldeden de bestaande oplossingen niet. Daarom is door het Ministerie van VWS in korte tijd een framework gebouwd om het bouwen en beheren van een rijkshuisstijl conforme website te vereenvoudigen. Dit pakket is aangepast om het voor een breder publiek bruikbaar te maken.

Het verschil tussen de Manon Rijk met de rijkshuisstijl en Manon Open voor algemeen gebruik is dat het pakket variabel en instelbaar is gemaakt. Waar de eerste versie van Manon een pakket was dat als geheel werd geimplementeerd is Manon Open geschreven zodat je zelf kan uitkiezen welke componenten en welke stukken CSS je wilt toevoegen. Hierdoor hoef je weinig overrides te doen en krijg je een zo klein mogelijk CSS-bestand.

## Licentie

Deze repository gebruikt de [REUSE Specfication v3.0](https://reuse.software/spec/). Zie [.reuse/dep5](./.reuse/dep5) en de individuele `*.license`-bestanden voor copyright- en licentie-informatie.

Alle externe licenties blijven van kracht.

# English

# Manon

The documentation can be found on https://minvws.github.io/nl-rdo-manon. It is generated from the [docs](./docs) directory on this repo.

Manon and the documentation are currently being developed. This means that it's possible that parts haven't been fully tested or added yet. It also means that as it is in development things may change. If you run into any issues that haven't been documented within the repository feel free to add them. This will make them visual and solvable. We highly appreciate the feedback and insight.

## What

Manon is a design framework that is based on the following principles:

### "Classless" when possible.

Manon uses the power of css when possible. This means adding little to no classes within the HTML is preferred. That way the code layers stay as separate as possible which leads to code that is easy to read and maintain. Making it possible to change the visual look of the application without little to no changes within the HTML structure.

### As small as possible

Only use what you need. Separate components that can be used within a project without the need to add the whole set of options.

### Adjustable

Components are adjustable through variables. The small "only what I needed set" makes sure you don't need unnecessary overrides within your CSS. For more information on the available variables and how to use them see the documentation.

## Origin

During the vaccination campaign a lot of applications were launched and managed within a short time frame. With the strict branding requirements of the Rijksoverheid, the wish to produce accessible websites and due to the dynamic of the pandemic, the current solutions didn't meet the requirements. So within a short time frame the Ministry of Welfare, Healthcare and Sports produced a framework to do just that to simplify and optimize the production of their needed applications and sites. This framework has now been expanded and adjusted to be of use to a broader audience.

The biggest difference between Manon Rijk (the version which uses the Rijksoverheid branding) and Manon Open, this version which is for general use, is that the open version is adjustable. As well as the added possibility to only select and use the parts that are needed within your project.

## License

This repository follows the
[REUSE Specfication v3.2](https://reuse.software/spec/). Please see
[REUSE.toml](./REUSE.toml), [LICENSES/](./LICENSES/) and the individual
`*.license` files for copyright and license information.
