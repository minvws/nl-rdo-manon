---
title: Knoppen
nav:
  - Snelstart: "#quickstart"
  - HTML-element kiezen: "#button-html"
  - Soorten knoppen: "#button-types"
---

# Knoppen

<h2 id="quickstart">Snelstart</h2>

1. Bepaal welk HTML-element geschikt is. Zie [HTML-element kiezen](#button-html)
   voor meer informatie.
2. Bepaal welke stijl geschikt is voor de knop. Kies een van de [soorten
   knoppen](#button-types).
3. Kopiëer de voorbeeldcode van het gekozen component.

<h2 id="button-html">HTML-element kiezen</h2>

Knoppen kunnen op verschillende manieren opgebouwd worden. Iets wat er visueel
als een knop uit ziet kan in de HTML een link zijn. Welk HTML-element geschikt
is hangt af van de situatie. In deze documentatie zetten we de verschillen met
situatieschetsen uiteen.

Kies altijd voor het semantisch correcte HTML-element. Bijvoorbeeld een
`<a>` voor een link en een `<button>` voor een knop. Het gebruik maken van
semantisch correcte HTML-elementen zorgt ervoor dat gebruikers die door middel
van hulptechnologiën navigeren ook de correcte informatie krijgen. In de
onderstaande tabel staan enkele veelvoorkomende voorbeelden.

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

- [Basisweergave](/components/button/button-base)
- [Knoppen groeperen](/components/button/button-container)
- [Call to action button](/components/button/call-to-action)
- [Icoonknoppen](/components/button/icon)
- [Icoonknoppen zonder achtergrond](/components/button-icon-only)

### Overige soorten knoppen:

- [Dropdown button](/components/button-dropdown)
- [Ghost button](/components/button-ghost)
- [Secondary button](/components/button-secondary)
- [Destructieve knop](/components/button-destructive)
- [Terug naar hoofdmenu](/components/button-to-top)
