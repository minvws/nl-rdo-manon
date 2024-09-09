<script context="module">
  export const breadcrumb = "Sectie";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Sectie</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>

  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1><code>div</code></h1>

        <h2>Benodigde stappen:</h2>
        <ul>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Maak gebruik van een layout set om stijlkeuzes voor de layout centraal vast te leggen en
            in verschillende componenten te gebruiken. Denk bijvoorbeeld aan het vastleggen van de
            afstand tussen de blokken binnen de <code>main</code>, een <code>article</code> en een
            <code>section</code>. Voor meer informatie zie:
            <a href="#layout-set">Gebruik maken van een layout-set</a>.
          </li>
        </ul>

        <h2 id="layout-set">Gebruik maken van een layout-set</h2>
        <p>
          Layout-sets kunnen gebruikt worden om op een centrale plek de stijlkeuzes vast te leggen
          voor layout-gerelateerde keuzes.
        </p>

        <p>Beschikbare styling sets voor layout zijn:</p>
        <ul>
          <li><a href="layout-set">Layout-basisset</a></li>
        </ul>
      </section>

      <section id="examples">
        <h3>HTML-voorbeeld:</h3>

        <h4><code>div</code>:</h4>
        <Code
          language="html"
          code={`
<div>
  <!-- Content -->
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
@use "@minvws/manon/div";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>

        <div class="horizontal-scroll">
          <table class="nowrap">
            <caption>Instelbare variabelen tabel:</caption>
            <thead>
              <tr>
                <th scope="col">Variabele</th>
                <th scope="col">CSS-attribuut</th>
                <th scope="col">Manon ingestelde waarde</th>
                <th scope="col">Breekpunt</th>
                <th scope="col">Class</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>--div-flex-direction</td>
                <td><a href="{base}/documentation/variables#flex-direction">flex-direction</a></td>
                <td>var(--content-flex-direction)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--div-justify-content</td>
                <td><a href="{base}/documentation/variables#justify-content">justify-content</a></td
                >
                <td>var(--content-justify-content)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--div-align-items</td>
                <td><a href="{base}/documentation/variables#align-items">align-items</a></td>
                <td>var(--content-align-items)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--div-gap</td>
                <td><a href="{base}/documentation/variables#gap">gap</a></td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--div-padding-top</td>
                <td><a href="{base}/documentation/variables#padding-top">padding-top</a></td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--div-padding-right</td>
                <td><a href="{base}/documentation/variables#padding-right">padding-right</a></td>
                <td>var(--page-whitespace-right)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--div-padding-bottom</td>
                <td><a href="{base}/documentation/variables#padding-bottom">padding-bottom</a></td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--div-padding-left</td>
                <td><a href="{base}/documentation/variables#padding-left">padding-left</a></td>
                <td>var(--page-whitespace-left)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--div-max-width</td>
                <td><a href="{base}/documentation/variables#max-width">max-width</a></td>
                <td>100%</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>CSS</h3>
        <p>
          Overzicht van de beschikbare variabelen om te kunnen gebruiken binnen de CSS van jouw
          project. Kies en gebruik de benodigde variabelen.
        </p>
        <Code
          language="css"
          code={`
:root {
  --div-flex-direction: ;
  --div-justify-content: ;
  --div-align-items: ;
  --div-gap: ;
  --div-padding-top: ;
  --div-padding-right: ;
  --div-padding-bottom: ;
  --div-padding-left: ;
  --div-max-width: ;
}
`}
        />
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <nav aria-label="Gerelateerde pagina's">
          <ul>
            <li>
              <a href="div-test">Div test</a> Testpagina met de content gegroepeerd binnen
              <code>div</code>'s.
            </li>
            <li><a href="{base}/components/div-content-wrapper">Div content wrapper</a></li>
          </ul>
        </nav>
      </section>
    </div>
  </article>
</main>
