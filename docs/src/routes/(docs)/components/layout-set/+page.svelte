<script context="module">
  export const breadcrumb = "Layout set";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Layout set</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Layout set</h1>
        <p>Basisset voor het vastleggen van layout-keuzes vanuit een centraal punt.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project.
            <ul>
              <li>
                Voor een overzicht van de benodigde en optionele bestanden zie: <a
                  href="#requirements">Bijbehorende bestanden</a
                >.
              </li>
              <li>
                Vul de variabelen met de gewenste weergaven. Voor meer informatie zie het overzicht
                met <a href="#variables">instelbare variabelen</a>.
              </li>
              <li>
                Pas de layoutkeuzes toe waar nodig. De layoutkeuzes kunnen door middel van
                variabelen binnen de CSS worden toegevoegd. Voor meer informatie hierover zie <a
                  href="{base}/documentation/use-css-variable">CSS-variabelen gebruiken</a
                >.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Variabele gebruiken binnen een andere variabele</h3>
        <p>
          In dit voorbeeld stellen we de padding aan de bovenkant van de <code>main</code> in op
          basis van een variabelen die gezet is binnen deze set. In dit geval zetten we de witruimte
          aan de bovenkant van de pagina bovenaan de <code>main</code>.
        </p>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
:root {
  --main-padding-top: var(--page-whitespace-top);
}
`}
        />
        <p>
          Voor meer informatie hierover zie <a href="{base}/documentation/use-css-variable"
            >CSS-variabelen gebruiken</a
          >.
        </p>
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>

        <h3>Importeer component via NPM</h3>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/layout-set";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <div class="horizontal-scroll nowrap">
          <table>
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
                <td>--page-whitespace-top</td>
                <td>-</td>
                <td>4rem</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--page-whitespace-right</td>
                <td>-</td>
                <td>2%</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--page-whitespace-bottom</td>
                <td>-</td>
                <td>4rem</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--page-whitespace-left</td>
                <td>-</td>
                <td>2%</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--content-flex-direction</td>
                <td><a href="{base}/documentation/variables#flex-direction">flex-direction</a></td>
                <td>column</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--content-justify-content</td>
                <td><a href="{base}/documentation/variables#justify-content">justify-content</a></td>
                <td>flex-start</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--content-align-items</td>
                <td><a href="{base}/documentation/variables#align-items">align-items</a></td>
                <td>flex-start</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--content-gap</td>
                <td><a href="{base}/documentation/variables#gap">gap</a></td>
                <td>2rem</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--content-padding-top</td>
                <td><a href="{base}/documentation/variables#padding-top">padding-top</a></td>
                <td>2rem</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--content-padding-right</td>
                <td><a href="{base}/documentation/variables#padding-right">padding-right</a></td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--content-padding-bottom</td>
                <td><a href="{base}/documentation/variables#padding-bottom">padding-bottom</a></td>
                <td>2rem</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--content-padding-left</td>
                <td><a href="{base}/documentation/variables#padding-left">padding-left</a></td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--content-max-width</td>
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
  /* Page */
  --page-whitespace-top: ;
  --page-whitespace-right: ;
  --page-whitespace-bottom: ;
  --page-whitespace-left: ;

  /* Content */
  --content-flex-direction: ;
  --content-justify-content: ;
  --content-align-items: ;
  --content-gap: ;
  --content-padding-top: ;
  --content-padding-right: ;
  --content-padding-bottom: ;
  --content-padding-left: ;
  --content-max-width: ;
}
`}
        />
      </section>
    </div>
  </article>
</main>
