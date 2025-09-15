---
title: "Tabelrij met checkbox"
breadcrumb: "Tabelrij met checkbox"
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Voor het selecteren van rijen van een tabel.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/table";
```

<section id="examples">
    <h2>Voorbeelden</h2>
    <div class="horizontal-scroll">
        <form class="inline">
        <table>
            <caption>
            Tabelvoorbeeld met selectievak:
            <span class="visually-hidden">
                Selectievak in kolom 1 rij 1 selecteert alle rijen.
            </span>
            </caption>
            <thead>
            <tr>
                <th scope="col">
                <span class="visually-hidden">Selectie</span>
                <input type="checkbox" />
                </th>
                <th scope="col">Naam</th>
                <th scope="col">Actie</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><input type="checkbox" id="lorem-input" /></td>
                <td><label for="lorem-input">Lorem</label></td>
                <td><button type="button">Actie uitvoeren</button></td>
            </tr>
            <tr>
                <td><input type="checkbox" id="ipsum-input" /></td>
                <td><label for="ipsum-input">Ipsum</label></td>
                <td><button type="button">Actie uitvoeren</button></td>
            </tr>
            <tr>
                <td><input type="checkbox" id="dolor-input" /></td>
                <td><label for="dolor-input">Dolor</label></td>
                <td><button type="button">Actie uitvoeren</button></td>
            </tr>
            </tbody>
        </table>
        <button type="submit">Actie uitvoeren op geselecteerde items</button>
        </form>
    </div>
</section>

Tabelcel met checkbox:
``` html
<td><input type="checkbox" id="lorem-input" /></td>
```

Complete voorbeeld tabel:
```html
<div class="horizontal-scroll">
  <form class="inline">
    <table>
      <caption>
        Tabelvoorbeeld met selectievak:
        <span class="visually-hidden"> Selectievak in kolom 1 rij 1 selecteert alle rijen. </span>
      </caption>
      <thead>
        <tr>
          <th scope="col">
            <span class="visually-hidden">Selectie</span>
            <input type="checkbox" />
          </th>
          <th scope="col">Naam</th>
          <th scope="col">Actie</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" id="lorem-input" /></td>
          <td><label for="lorem-input">Lorem</label></td>
          <td><button type="button">Actie uitvoeren</button></td>
        </tr>
        <tr>
          <td><input type="checkbox" id="ipsum-input" /></td>
          <td><label for="ipsum-input">Ipsum</label></td>
          <td><button type="button">Actie uitvoeren</button></td>
        </tr>
        <tr>
          <td><input type="checkbox" id="dolor-input" /></td>
          <td><label for="dolor-input">Dolor</label></td>
          <td><button type="button">Actie uitvoeren</button></td>
        </tr>
      </tbody>
    </table>
    <button type="submit">Actie uitvoeren op geselecteerde items</button>
  </form>
</div>
```

<h2>Toegankelijkheid</h2>
<ul>
  <li>Zorg dat de checkbox een toegankelijk label heeft dat de rij uniek identificeert.</li>
  <li>Staat de checkbox in een cel met tekst? Gebruik dan bij voorkeur die tekst als label.</li>
  <li>Identificeert de tekst de rij niet (voldoende)? Overweeg dan of de plaatsing van de checkbox wel duidelijk genoeg is.</li>
  <li>Gebruik als label bijvoorbeeld een naam, ID of andere unieke informatie uit de tabelrij. Zorg dat het label geen informatie bevat die niet ook visueel aanwezig is.</li>
  <li>Het toevoegen van een toegankelijk label kan bijvoorbeeld met <code>aria-label</code>, of door de tekst van een andere cel in een <code>&lt;label></code> te plaatsen. Geef in dat geval de checkbox een <code>id</code> en geef het label een <code>for</code>met het <code>id</code> van de checkbox.</li>
  <li>Staan de checkboxes in een eigen kolom zonder header-tekst? Voeg dan een visueel verborgen tekst toe aan de header. Bijvoorbeeld: <code>&lt;th>&lt;span class="visually-hidden">Selectie&lt;/span>&lt;/th></code>.</li>
  <li>Om verwarring te voorkomen, kan deze checkbox beter <strong>geen</strong> toegankelijk
  label krijgen, omdat deze anders door de meeste screenreaders voor elke rij voorgelezen
  zou worden.</li>
  <li>In plaats daarvan is het belangrijk om in de <code>&lt;caption></code> de functie
  van de checkbox in de header toe te lichten. Maak deze toelichting bij voorkeur zo
  kort en duidelijk mogelijk. Bijvoorbeeld: "selectievak in kolom 1 rij 1 selecteert
  alle rijen". Plaats de toelichting eventueel in een <code>&lt;span class="visually-hidden"></code> als het wenselijk is om deze visueel
  te verbergen.</li>
</ul>
