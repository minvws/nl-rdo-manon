---
title: Knoppen
nav:
  - Introductie: "#introduction"
  - Type buttons met situatieschetsen: "#button-situations"
  - Soorten knoppen: "#button-types"
---

<h2 id="introduction">Introductie</h2>

Knoppen op een website zijn interactieve elementen waarmee gebruikers een actie kunnen uitvoeren, zoals het verzenden van een formulier, het starten van een download of het navigeren naar een andere pagina. Ze maken de bediening van een site duidelijk en gebruiksvriendelijk.

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

## Aandachtspunten

Het uitschakelen van een knop “disable” wordt afgeraden vanuit zowel toegankelijkeid als gebruikerservaring. Het is beter om de knop functioneel te laten. Dan kan de gebruiker de knop gebruiken om erachter te komen wat er fout gaat.

<h2 id="button-situations">HTML</h2>

<p>Kies altijd voor het semantisch correcte HTML-element. Bijvoorbeeld een
<code>&lt;a&gt;</code> voor een link en een <code>&lt;button&gt;</code>
voor een knop. Het gebruik maken van semantisch correcte HTML-elementen
zorgt ervoor dat gebruikers die door middel van hulptechnologiën navigeren
ook de correcte informatie krijgen. In de onderstaande tabel staan enkele
veelvoorkomende voorbeelden.</p>

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
