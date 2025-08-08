---
title: Gecomprimeerde weergave
breadcrumb: Gecomprimeerde weergave
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Benodigdheden: "#requirements"
  - Variabelen: "#variables"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Gecomprimeerde weergave</h1>

Voor het tonen van grote datasets kan het voor de gebruiksvriendelijkheid fijner
zijn om de data gecomprimeerd weer te geven zodat het makkelijker is voor de
gebruiker om overzicht te houden.

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie: [Benodigdheden](#requirements). Voor
    meer informatie over importeren en instellen van componenten. Zie:
    [Componenten gebruiken en styling toevoegen](/documentation/import-styling)
2.  Voeg de class `condensed` toe op de `table`.

## Aandachtspunten

- Voor het tonen van grote datasets kan het voor de gebruiksvriendelijkheid
  fijner zijn om de data gecomprimeerd weer te geven zodat het makkelijker is
  voor de gebruiker om overzicht te houden.

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

<p>
  In dit voorbeeld staat dat de `th` binnen de
  `thead` over de data in de kolommen gaan. En de
  `th` binnen de `tbody` over de data per rij gaan.
</p>

<div class="horizontal-scroll">
  <table class="condensed">
    <caption> Tabelvoorbeeld met gecomprimeerde weergave. </caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
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
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
    </tbody>
  </table>
</div>

### HTML-voorbeeld:

```html
<div class="horizontal-scroll">
  <table class="condensed">
    <caption>
      Simple table example:
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
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
    </tbody>
  </table>
</div>
```

<h2 id="requirements">Benodigdheden</h2>

<ul>
  <li>`table/table-base.scss`</li>
  <li>`table/table-base-variables.scss`</li>
  <li>`table/table-condensed.scss`</li>
  <li>`table/table-condensed-variables.scss`</li>
</ul>

<h2 id="variables">Instelbare variabelen</h2>

<p class="system-notification" role="group" aria-label="systeembericht">
  Dit component heeft momenteel geen instelbare variabelen
</p>

<h2 id="related">Gerelateerde pagina's</h2>

<a href="/components/table-condensed-test">Test- en voorbeelden-pagina</a>
