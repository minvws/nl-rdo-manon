<script context="module">
  export const breadcrumb = "Knoppen";
</script>

<svelte:head>
  <title>Knoppen</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <h1>Knoppen</h1>

      <section id="button-quick-start">
        <h2>Snelstart</h2>
        <ol>
          <li>
            Bepaal welk html-element geschikt is. Zie
            <a href="#button">Beschikbare types</a> voor meer informatie.
          </li>
          <li>
            Bepaal welke stijl geschikt is voor de knop.
            <a href="#button-types">Beschikbare button types</a>
          </li>
          <li>Kopiëer de voorbeeldcode van het gekozen component.</li>
        </ol>
      </section>

      <section id="button-html">
        <h2>HTML-element kiezen</h2>
        <p>
          Knoppen kunnen op verschillende manieren opgebouwd worden. Iets wat er visueel als een
          knop uit ziet kan in de html een link zijn. Welk html-element geschikt is hangt af van de
          situatie. In deze documentatie zetten we de verschillen met situatieschetsen uiteen.
        </p>

        <p>
          Kies altijd voor het semantisch correcte html-element. Bijvoorbeeld een
          <code>&lt;a&gt;</code> voor een link en een <code>&lt;button&gt;</code> voor een knop. Het
          gebruik maken van semantisch correcte html-elementen zorgt ervoor dat gebruikers die door middel
          van hulptechnologiën navigeren ook de correcte informatie krijgen. In de onderstaande tabel
          staan enkele veelvoorkomende voorbeelden.
        </p>

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
                <td class="warning">Correct</td>
                <td class="error">Incorrect</td>
              </tr>
              <tr>
                <td>Resetknop binnen een formulier</td>
                <td class="confirmation">Correct</td>
                <td class="warning">Correct</td>
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

        <div class="horizontal-scroll">
          <table>
            <caption> Legenda </caption>
            <tbody>
              <tr>
                <td class="confirmation">
                  Semantisch correct en het gewenste html-element voor hulptechnologiën.
                </td>
                <td class="warning">
                  Semantisch correct maar geeft mogelijk problemen voor bepaalde gebruikersgroepen
                  of is semantisch gezien niet de mooiste oplossing.
                </td>
                <td class="error">Semantisch incorrect.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="button-types">
        <h2>Beschikbare button-types</h2>
        <ul>
          <li><a href="./button-base">Basis-weergave</a></li>
          <li><a href="./button-container">Knoppen groeperen</a></li>
          <li><a href="./button-dropdown">Dropdown button</a></li>
          <li><a href="./button-ghost">Ghost button</a></li>
          <li><a href="./button-destructive">Destructieve knop</a></li>
          <li>
            <a href="./button-call-to-action">Call to action button</a>
          </li>
          <li><a href="./button-icon">Icoonknoppen</a></li>
          <li><a href="./button-icon-only">Icoonknoppen zonder achtergrond</a></li>
          <li><a href="./button-to-top">Terug naar hoofdmenu</a></li>
        </ul>
      </section>
    </div>
  </article>
</main>
