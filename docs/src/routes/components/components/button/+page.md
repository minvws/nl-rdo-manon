---
title: Knoppen
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Type buttons met situatieschetsen: "#button-situations"
  - Soorten knoppen: "#button-types"
---

<h1 id="introduction">Knoppen</h1>

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

### Ondersteund door het _iCore Open_ thema:

- [Basisweergave](/components/components/button/button-base)
- [Knoppen groeperen](/components/components/button/button-container)
- [Call to action button](/components/components/button/call-to-action)
- [Icoonknoppen](/components/components/button/icon)
- [Icoonknoppen zonder achtergrond](/components/components/button/button-icon-only)

### Overige soorten knoppen:

- [Dropdown button](/components/components/button/button-dropdown)
- [Ghost button](/components/components/button/button-ghost)
- [Destructieve knop](/components/components/button/button-destructive)
- [Terug naar hoofdmenu](/components/components/button/button-to-top)
