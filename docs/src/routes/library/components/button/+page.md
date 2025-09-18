---
title: Knoppen
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Type buttons met situatieschetsen: "#button-situations"
  - Soorten knoppen: "#button-types"
---

<h2 id="introduction">Introductie</h2>

Knoppen op een website zijn interactieve elementen waarmee gebruikers een actie kunnen uitvoeren, zoals het verzenden van een formulier, het starten van een download of het navigeren naar een andere pagina. Ze maken de bediening van een site duidelijk en gebruiksvriendelijk.

<h2 id="quickstart">Snelstart</h2>

1. Bepaal welk HTML-element geschikt is. Knoppen kunnen op verschillende
   manieren opgebouwd worden. Iets wat er visueel als een knop uit ziet kan in
   de HTML een link zijn. Welk HTML-element geschikt is hangt af van de
   situatie. In deze documentatie zetten we de verschillen met
   [situatieschetsen](#button-situations) uiteen.
2. Bepaal welke stijl geschikt is voor de knop. Kies een van de
   [soorten knoppen](#button-types).
3. Kopiëer de voorbeeldcode van het gekozen component.

<div class="explanation" role="group" aria-label="Toelichting">
  <span>Aandachtspunten</span>
  <p>
    Kies altijd voor het semantisch correcte HTML-element. Bijvoorbeeld een
    <code>&lt;a&gt;</code> voor een link en een <code>&lt;button&gt;</code>
    voor een knop. Het gebruik maken van semantisch correcte HTML-elementen
    zorgt ervoor dat gebruikers die door middel van hulptechnologiën navigeren
    ook de correcte informatie krijgen. In de onderstaande tabel staan enkele
    veelvoorkomende voorbeelden.
  </p>
</div>

<h2 id="button-situations">Type buttons met situatieschetsen</h2>

<div class="horizontal-scroll">
  <table>
    <caption> Overzicht van type buttons met situatieschetsen </caption>
    <thead>
      <tr>
        <td>Situatie</td>
        <td>&lt;button&gt;</td>
        <td>&lt;input&gt;</td>
        <td>&lt;a&gt;</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Submitknop binnen een formulier</td>
        <td class="confirmation">Correct</td>
        <td class="warning">Afgeraden</td>
        <td class="error">Incorrect</td>
      </tr>
      <tr>
        <td>Resetknop binnen een formulier</td>
        <td class="confirmation">Correct</td>
        <td class="warning">Afgeraden</td>
        <td class="error">Incorrect</td>
      </tr>
      <tr>
        <td>Login-knop naar login-pagina</td>
        <td class="error">Incorrect</td>
        <td class="error">Incorrect</td>
        <td class="confirmation">Correct</td>
      </tr>
      <tr>
        <td>Actieknop met een link naar een ander deel van de site</td>
        <td class="error">Incorrect</td>
        <td class="error">Incorrect</td>
        <td class="confirmation">Correct</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="button-types">Soorten knoppen</h2>

- [Basisweergave](/library/components/button/button-base)
- [Secundaire knoppen](/library/components/button/button-secondary)
- [Knoppen groeperen](/library/components/button/button-container)
- [Call to action button](/library/components/button/call-to-action)
- [Icoonknoppen](/library/components/button/icon)
- [Icoonknoppen zonder achtergrond](/library/components/button/button-icon-only)
- [Dropdown button](/library/components/button/button-dropdown)
- [Destructieve knop](/library/components/button/button-destructive)
- [Terug naar hoofdmenu](/library/components/button/button-to-top)
