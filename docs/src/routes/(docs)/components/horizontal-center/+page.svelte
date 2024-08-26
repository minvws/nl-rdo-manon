<script context="module">
  export const breadcrumb = "Horizontaal gecentreerd";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Horizontaal gecentreerd</title>
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
  <article>
    <div>
      <section id="introduction">
        <h1>Horizontaal gecentreerd</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de class <code>horizontal-center</code> toe op het horizontaal uit te lijnen element.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Horizontaal gecentreerd</h3>
        <h4>Visueel voorbeeld:</h4>

        <div class="horizontal-center">
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper odio at mauris
            luctus, vel pharetra arcu egestas.
          </p>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-center">
  <h1>Lorem ipsum</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper odio at mauris luctus, vel pharetra arcu egestas.</p>
</div>
`}
        />

        <h4>HTML-structuur-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-center">
  <!-- horizontaal uit te lijnen content -->
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
@use "@minvws/manon/horizontal-center";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
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
                <td>--horizontal-center-max-width</td>
                <td><a href="{base}/documentation/variables#max-width">max-width</a></td>
                <td>var(--body-text-small-max-width)</td>
                <td>-</td>
                <td>horizontal-center</td>
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
  --horizontal-center-max-width: ;
}
`}
        />
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/horizontal-center-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
