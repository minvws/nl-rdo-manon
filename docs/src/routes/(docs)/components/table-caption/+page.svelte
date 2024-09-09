<script context="module">
  export const breadcrumb = "Tabel bijschrift caption";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Tabel bijschrift caption</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Benodigdheden</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Tabel bijschrift <code>caption</code></h1>
        <p>
          Om de gebruiker te informeren over de inhoud van de tabel, is het aan te raden om een
          titel toe te voegen met daarin de omschrijving van de tabel. Voeg direct binnen de
          <code>table</code> een <code>caption</code> toe om de titel toe te voegen.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Benodigdheden</a>. Voor meer informatie over importeren en
            instellen van componenten. Zie:
            <a href="{base}/documentation/import-styling"
              >Componenten gebruiken en styling toevoegen</a
            >
          </li>
          <li>Voeg de <code>caption</code> direct direct binnen de <code>table</code> toe.</li>
          <li>
            Vul de <code>caption</code> met een korte maar duidelijke omschrijving van de inhoud van
            de tabel.
          </li>
        </ol>

        <h2>Aandachtspunten</h2>
        <ul>
          <li>
            Het toevoegen van een <code>caption</code> vergroot de gebruiksvriendelijkheid van de
            site.
            <ul>
              <li>
                Gebruik maken van een <code>caption</code> helpt gebruikers om snel te kunnen bepalen
                of de inhoud van de tabel interessant is voor hen.
              </li>
              <li>
                Gebruikers die gebruik maken van screenreaders om de content voor te lezen,
                bijvoorbeeld bij blindheid, slecht- of bijziendheid, kunnen de tabelomschrijving
                gebruiken om te bepalen of ze de inhoud van de tabel volledig willen horen of
                overslaan.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3>Visueel voorbeeld:</h3>
        <div class="horizontal-scroll">
          <table>
            <caption> Basisvoorbeeld tabel: </caption>
            <thead>
              <tr>
                <th scope="col">Table header heading 1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table>
    <caption>Basisvoorbeeld tabel:</caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
      </tr>
    </tbody>
  </table>
</div>
`}
        />

        <h3>HTML-structuur-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table>
    <caption>Basisvoorbeeld tabel:</caption>
    <!-- table content -->
  </table>
</div>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>

        <h3>Importeer component via npm</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/table";
@use "@minvws/manon/table-caption";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li>
            <a href="{base}/documentation/variables#background-color">background-color</a>
          </li>
          <li><a href="{base}/documentation/variables#text-color">text-color</a></li>
          <li><a href="{base}/documentation/variables#font-size">font-size</a></li>
          <li><a href="{base}/documentation/variables#line-height">line-height</a></li>
          <li><a href="{base}/documentation/variables#padding">padding</a></li>
          <li><a href="{base}/documentation/variables#text-align">text-align</a></li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/table-caption-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
