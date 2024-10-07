<script context="module">
  export const breadcrumb = "Knoppen";
</script>

<script>
  import { base } from "$app/paths";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Knoppen</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#quickstart">Snelstart</a></li>
      <li><a href="#button-html">HTML-element kiezen</a></li>
      <li><a href="#button-types">Soorten knoppen</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <h1>Knoppen</h1>

      <section id="quickstart" class="visually-grouped">
        <h2>Snelstart</h2>
        <ol>
          <li>
            Bepaal welk HTML-element geschikt is. Zie
            <a href="#button-html">HTML-element kiezen</a> voor meer informatie.
          </li>
          <li>
            Bepaal welke stijl geschikt is voor de knop. Kies een van de
            <a href="#button-types">soorten knoppen</a>.
          </li>
          <li>Kopiëer de voorbeeldcode van het gekozen component.</li>
        </ol>
      </section>

      <section id="button-html" class="visually-grouped">
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

      <section id="button-types" class="visually-grouped">
        <h2>Soorten knoppen</h2>
        <h3>Ondersteund door het <i>iCore Open</i> thema:</h3>
        <ul>
          <li><a href="{base}/components/button-base">Basis-weergave</a></li>
          <li><a href="{base}/components/button-container">Knoppen groeperen</a></li>
          <li>
            <a href="{base}/components/button-call-to-action">Call to action button</a>
          </li>
        </ul>
        <h3>Overige soorten knoppen:</h3>
        <ul>
          <li><a href="{base}/components/button-dropdown">Dropdown button</a></li>
          <li><a href="{base}/components/button-ghost">Ghost button</a></li>
          <li><a href="{base}/components/button-destructive">Destructieve knop</a></li>
          <li><a href="{base}/components/button-icon">Icoonknoppen</a></li>
          <li><a href="{base}/components/button-icon-only">Icoonknoppen zonder achtergrond</a></li>
          <li><a href="{base}/components/button-to-top">Terug naar hoofdmenu</a></li>
        </ul>
      </section>
    </div>
  </article>
</main>
