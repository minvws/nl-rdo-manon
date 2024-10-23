<script module>
  export const breadcrumb = "Footer tweederde eenderde";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Footer tweederde eenderde</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Footer tweederde eenderde</h1>
        <p>Footer-element met een tweederde eenderde verdeling.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Plaats de content in tweetallen binnen een <code>div</code> om gebruik te maken van de tweederde/eenderde
            uitlijning.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3>Visueel voorbeeld:</h3>
        <p>Zie <a href="#footer-heading">de footer op deze pagina</a>.</p>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<footer>
  <nav aria-labelledby="footer-nav-1-heading">
    <h1 id="footer-nav-1-heading">Lorem ipsum</h1>
    <ul>
      <li><a href="{base}/components/footer-base">Dolor</a></li>
      <li><a href="{base}/components/footer-base">Sit</a></li>
      <li><a href="{base}/components/footer-base">Amet</a></li>
    </ul>
  </nav>
</footer>
`}
        />

        <h3>Structuur-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<footer>
  <!-- Content -->
</footer>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>Voeg de (s)css-bestanden toe aan het project of importeer de bestanden.</p>
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
@use "@minvws/manon/footer-two-thirds-one-third";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <div class="horizontal-scroll">
          <table class="nowrap">
            <caption>Instelbare css-variabelen:</caption>
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
                <td>--footer-two-thirds-one-third-flex-direction</td>
                <td><a href="{base}/documentation/variables#flex-direction">flex-direction</a></td>
                <td>column</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-two-thirds-one-third-gap</td>
                <td><a href="{base}/documentation/variables#gap">gap</a></td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-two-thirds-one-third-justify-content</td>
                <td><a href="{base}/documentation/variables#justify-content">justify-content</a></td
                >
                <td>flex-end</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-two-thirds-one-third-align-items</td>
                <td><a href="{base}/documentation/variables#align-items">align-items</a></td>
                <td>center</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-two-thirds-one-third-flex-wrap</td>
                <td><a href="{base}/documentation/variables#flex-wrap">flex-wrap</a></td>
                <td>wrap</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-two-thirds-one-third-min-height</td>
                <td><a href="{base}/documentation/variables#min-height">min-height</a></td>
                <td>10rem</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-two-thirds-one-third-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--application-base-tint-1-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-two-thirds-one-third-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--application-base-tint-1-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-two-thirds-one-third-padding-top</td>
                <td><a href="{base}/documentation/variables#padding-top">padding-top</a></td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-two-thirds-one-third-padding-right</td>
                <td><a href="{base}/documentation/variables#padding-right">padding-right</a></td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-two-thirds-one-third-padding-bottom</td>
                <td><a href="{base}/documentation/variables#padding-bottom">padding-bottom</a></td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-two-thirds-one-third-padding-left</td>
                <td><a href="{base}/documentation/variables#padding-left">padding-left</a></td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-two-thirds-one-third-max-width</td>
                <td><a href="{base}/documentation/variables#max-width">max-width</a></td>
                <td>100%</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-two-thirds-one-third-link-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--footer-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-two-thirds-one-third-link-text-decoration</td>
                <td><a href="{base}/documentation/variables#text-decoration">text-decoration</a></td
                >
                <td>none</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-two-thirds-one-third-link-hover-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--footer-link-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-two-thirds-one-third-link-hover-text-decoration</td>
                <td><a href="{base}/documentation/variables#text-decoration">text-decoration</a></td
                >
                <td>underline</td>
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
    --footer-two-thirds-one-third-flex-direction: ;
    --footer-two-thirds-one-third-gap: ;
    --footer-two-thirds-one-third-justify-content: ;
    --footer-two-thirds-one-third-align-items: ;
    --footer-two-thirds-one-third-flex-wrap: ;
    --footer-two-thirds-one-third-min-height: ;
    --footer-two-thirds-one-third-background-color: ;
    --footer-two-thirds-one-third-text-color: ;
    --footer-two-thirds-one-third-padding-top: ;
    --footer-two-thirds-one-third-padding-right: ;
    --footer-two-thirds-one-third-padding-bottom: ;
    --footer-two-thirds-one-third-padding-left: ;
    --footer-two-thirds-one-third-max-width: ;

    /* Links */
    --footer-two-thirds-one-third-link-text-color: ;
    --footer-two-thirds-one-third-link-text-decoration: ;

    /* Links hover */
    --footer-two-thirds-one-third-link-hover-text-color: ;
    --footer-two-thirds-one-third-link-hover-text-decoration: ;

    /* After breakpoint */
    --footer-two-thirds-one-third-breakpoint-1-gap: ;
}
`}
        />
      </section>
    </div>
  </article>
</main>
