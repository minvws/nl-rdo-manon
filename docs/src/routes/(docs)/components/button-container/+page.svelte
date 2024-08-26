<script context="module">
  export const breadcrumb = "Knoppen groeperen";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Knoppen groeperen</title>
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
  <article id="button-base">
    <div>
      <section id="introduction">
        <h1>Knoppen groeperen</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie: <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Vul de variabelen met de gewenste stijlkeuzes. Voor meer informatie zie het overzicht
            met <a href="#variables">instelbare variabelen</a>.
          </li>
          <li>
            Groepeer de knoppen binnen een <code>&lt;div&gt;</code> met de class
            <code>button-container</code>.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3>Paragraaf</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="button-container">
          <button>Eerste knop</button>
          <button>Tweede knop</button>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="button-container">
    <button>Eerste knop</button>
    <button>Tweede knop</button>
</div>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>

        <h3>Importeer component via npm</h3>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/button-container";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p>
          <strong>Let op:</strong> De uitlijning van horizontaal uitgelijnde tags werken alleen in
          combinatie met de class <code>horizotal-view</code>.
        </p>
        <div class="horizontal-scroll">
          <table class="nowrap">
            <caption>Beschikbare instelbare variabelen:</caption>
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
                <td>--button-container-flex-direction</td>
                <td><a href="{base}/documentation/variables#flex-direction">flex-direction</a></td>
                <td>row</td>
                <td>-</td>
                <th rowspan="4" scope="rowgroup">button-container</th>
              </tr><tr>
                <td>--button-container-align-items</td>
                <td><a href="{base}/documentation/variables#align-items">align-items</a></td>
                <td>center</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-container-flex-wrap</td>
                <td><a href="{base}/documentation/variables#flex-wrap">flex-wrap</a></td>
                <td>wrap</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-container-gap</td>
                <td><a href="{base}/documentation/variables#gap">gap</a></td>
                <td>var(--application-base-gap-medium)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-container-padding-top</td>
                <td><a href="{base}/documentation/variables#padding-top">padding-top</a></td>
                <td>0</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-container-padding-right</td>
                <td><a href="{base}/documentation/variables#padding-right">padding-right</a></td>
                <td>0</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-container-padding-bottom</td>
                <td><a href="{base}/documentation/variables#padding-bottom">padding-bottom</a></td>
                <td>0</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-container-padding-left</td>
                <td><a href="{base}/documentation/variables#padding-left">padding-left</a></td>
                <td>0</td>
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
  --button-container-flex-direction: ;
  --button-container-align-items: ;
  --button-container-flex-wrap: ;
  --button-container-gap: ;
  --button-container-padding-top: ;
  --button-container-padding-right: ;
  --button-container-padding-bottom: ;
  --button-container-padding-left: ;
}
`}
        />
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/button-container-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
