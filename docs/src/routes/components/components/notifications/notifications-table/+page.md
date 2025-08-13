---
title: Notifactie binnen tabellen
breadcrumb: Notifactie binnen tabellen
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
---

<h1 id="introduction">Notificatie binnen tabellen</h1>

## Benodigde stappen:

1.  Voeg de notificatie toe op basis van een van de onderstaande voorbeelden.
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

<h2 id="available-types">Beschikbare weergaven</h2>

<div class="column-2">
  <nav id="notification-table-types">
    <ul>
      <li>
        <a href="/components/notification-confirmation">Tabelrij `tr`</a>
      </li>
      <li>
        <a href="/components/notification-warning">Tabelcel `td`</a>
      </li>
    </ul>
  </nav>
</div>

<h2 id="examples">Voorbeelden</h2>

<div class="horizontal-scroll">
  <table>
    <caption> Table with titlebar and title example: </caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
      </tr>
    </thead>
    <tbody>
      <tr class="warning">
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td class="explanation">Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th class="notification">Table footer heading 1</th>
        <th>Table footer heading 2</th>
        <th>Table footer heading 3</th>
      </tr>
      <tr>
        <td>Table footer 1</td>
        <td>Table footer 2</td>
        <td>Table footer 3</td>
      </tr>
    </tfoot>
  </table>
</div>

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-table";
```
