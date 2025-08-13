---
title: Meldingen op tabel-elementen
breadcrumb: Meldingen op tabel-elementen
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Benodigdheden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Meldingen op tabel-elementen</h1>

Tabelelementen kunnen een meldig weergeven. Denk hierbij aan een foutmelding of
een toelichting.

## Benodigde stappen:

1.  Voeg de `checkbox` toe aan de benodigde cellen. Voor het voorbeeld zie:
    [Voorbeelden](#examples)

## Aandachtspunten

- Voeg een van de melding-classes toe aan een volledige tabelrij `tr` of aan een
  losse cel `th` / `td`. Beschikbare classes zijn:
  - `error`
  - `warning`
  - `confirmation`
  - `explanation`
  - `primary` Zie [Notifications](/components/notifications) voor meer
    informatie.

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

<div class="horizontal-scroll">
  <table>
    <caption> Tabelvoorbeeld meldingen: </caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="error">Foutmelding op tabelrij</td>
        <td class="error">Foutmelding op tabelrij</td>
        <td class="error">Foutmelding op tabelrij</td>
      </tr>
      <tr>
        <td class="warning">Waarschuwing op tabelrij</td>
        <td class="warning">Waarschuwing op tabelrij</td>
        <td class="warning">Waarschuwing op tabelrij</td>
      </tr>
      <tr>
        <td class="confirmation">Bevestiging op tabelrij</td>
        <td class="confirmation">Bevestiging op tabelrij</td>
        <td class="confirmation">Bevestiging op tabelrij</td>
      </tr>
      <tr>
        <td class="explanation">Toelichting op tabelrij</td>
        <td class="explanation">Toelichting op tabelrij</td>
        <td class="explanation">Toelichting op tabelrij</td>
      </tr>
      <tr>
        <td class="primary">Primair op tabelrij</td>
        <td class="primary">Primair op tabelrij</td>
        <td class="primary">Primair op tabelrij</td>
      </tr>
    </tbody>
  </table>
</div>

#### HTML-voorbeeld:

```html
<div class="horizontal-scroll">
  <table>
    <caption>
      Tabelvoorbeeld meldingen:
    </caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="error">Foutmelding op tabelrij</td>
        <td class="error">Foutmelding op tabelrij</td>
        <td class="error">Foutmelding op tabelrij</td>
      </tr>
      <tr>
        <td class="warning">Waarschuwing op tabelrij</td>
        <td class="warning">Waarschuwing op tabelrij</td>
        <td class="warning">Waarschuwing op tabelrij</td>
      </tr>
      <tr>
        <td class="confirmation">Bevestiging op tabelrij</td>
        <td class="confirmation">Bevestiging op tabelrij</td>
        <td class="confirmation">Bevestiging op tabelrij</td>
      </tr>
      <tr>
        <td class="explanation">Toelichting op tabelrij</td>
        <td class="explanation">Toelichting op tabelrij</td>
        <td class="explanation">Toelichting op tabelrij</td>
      </tr>
      <tr>
        <td class="primary">Primair op tabelrij</td>
        <td class="primary">Primair op tabelrij</td>
        <td class="primary">Primair op tabelrij</td>
      </tr>
    </tbody>
  </table>
</div>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/table";
@use "@minvws/manon/notification";
```

<p>
  Bijbehorende melding-type-bestanden. Voor meer informatie en beschikbare types zie:
  [Notificaties](/components/notifications)
</p>
