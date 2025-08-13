---
title: Pagina-notificatie
breadcrumb: Pagina-notificatie
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Pagina-notificatie</h1>

Voor het weergeven van notificaties.

## Benodigde stappen:

1.  Voeg de notificatie toe direct binnen `main`
2.  Voeg de gewenste notificatie-type-`class` toe. Voor meer informatie zie:
    [Beschikbare weergaven](/notifications#notification-types).
3.  Voeg `role="group"` toe aan het notificatie-element om screenreader gebruikers
    erop te attenderen dat de content van de notificatie bij elkaar hoort.
4.  Voeg `aria-label=""` toe aan het notificatie-element om screenreader
    gebruikers inzicht te geven in het type bericht. Bijvoorbeeld:
    `aria-label="foutmelding"`. Let op dat de content van het label in de taal
    van het document staat.
5.  Voeg binnen het element een `span` toe zodat gebruikers (van screenreaders)
    weten wat de context van het bericht is. Bijvoorbeeld:
    `<span>Foutmelding:</span>`. Het is aan te raden om dit bericht
    voor alle gebruikers zichtbaar te houden zodat het voor iedereen duidelijk is. Denk
    hierbij ook aan kleurenblinden als er in het ontwerp enkel gebruik wordt gemaakt van
    kleuren als visuele onderscheidende factor op notificaties of iconen waarbij het kan
    zijn dat niet alle gebruikers het icoon zullen herkennen.

## Aandachtspunten

-   Voeg de volledige code toe die in de voorbeelden staat om alle gebruikers een goede
    gebruikerservaring the bieden. Denk hierbij aan gebruikers die kleurenblind zijn of
    gebruikers die gebruik maken van hulptechnologieën.
-   Notificaties kunnen verborgen worden door de class
    `hidden` toe te voegen aan de notification

<h2 id="examples">Voorbeelden</h2>

Beschikbare voorbeelden:

<ul>
  <li><a href="notifications-page-example-error">Foutmelding</a></li>
  <li><a href="notifications-page-example-warning">Waarschuwing</a></li>
  <li><a href="notifications-page-example-explanation">Toelichting</a></li>
  <li><a href="notifications-page-example-confirmation">Bevestiging</a></li>
  <li><a href="notifications-page-example-system">Systeembericht</a></li>
</ul>
