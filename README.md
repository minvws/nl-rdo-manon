# Manon
De documentation staat in de "docs" directory en online op https://minvws.github.io/nl-rdo-manon. Er wordt momenteel nog hard gewerkt aan Manon en de documentatie. Het kan daarom zijn dat sommige onderdelen nog niet volledig getest zijn of nog missen. Kom je een probleem tegen dat nog niet gedocumenteerd staat binnen de issues op de manon repository meld ze vooral. Dan maakt ze inzichtelijk en oplosbaar.

## Wat
Manon is een design framework dat gebruik maakt van de volgende principes

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
Zie [LICENSES.md](./LICENSES.md).

Alle lettertypes binnen Manon vallen onder en behouden hun eigen licentie. Voor meer informatie zie bijvoorbeeld: 

### Neuton
https://fonts.google.com/specimen/Neuton/about

### Open Sans
https://fonts.google.com/specimen/Open+Sans/about

