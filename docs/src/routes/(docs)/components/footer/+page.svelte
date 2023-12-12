<script context="module">
  export const breadcrumb = "Footer";
</script>

<script>
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Footer</title>
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
        <h1>Footer</h1>
        <p>
          De footer wordt vaak gebruikt als extra navigatiepunt en om aan te geven aan de gebruiker
          dat het einde van de pagina bereikt is.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h1>Voorbeelden:</h1>

        <h2>Visueel voorbeeld:</h2>
        <footer>
          <nav aria-labelledby="footer-nav-1-heading">
            <h1 id="footer-nav-1-heading">Lorem ipsum</h1>
            <ul>
              <li><a href="#">Dolor</a></li>
              <li><a href="#">Sit</a></li>
              <li><a href="#">Amet</a></li>
            </ul>
          </nav>
        </footer>

        <h2>HTML-voorbeeld:</h2>
        <Code
          language="html"
          code={`
<footer>
  <nav aria-labelledby="footer-nav-1-heading">
    <h1 id="footer-nav-1-heading">Lorem ipsum</h1>
    <ul>
      <li><a href="./footer-base">Dolor</a></li>
      <li><a href="./footer-base">Sit</a></li>
      <li><a href="./footer-base">Amet</a></li>
    </ul>
  </nav>
</footer>
`}
        />

        <h2>Structuur-voorbeeld:</h2>
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
        <h1>Bijbehorende bestanden</h1>
        <p>Voeg de (s)css-bestanden toe aan het project of importeer de bestanden.</p>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="../import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>
        <h2>Importeer component via NPM</h2>
        <h3>CSS-voorbeeld:</h3>
        <Code
          language="css"
          code={`
@use "@minvws/manon/footer";
`}
        />
      </section>

      <section id="variables">
        <h1>Instelbare variabelen</h1>
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
                <td>--footer-flex-direction</td>
                <td><a href="../variables#flex-direction">flex-direction</a></td>
                <td>column</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-gap</td>
                <td><a href="../variables#gap">gap</a></td>
                <td>var(--application-base-gap-medium)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-justify-content</td>
                <td><a href="../variables#justify-content">justify-content</a></td>
                <td>center</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-align-items</td>
                <td><a href="../variables#align-items">align-items</a></td>
                <td>flex-start</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-flex-wrap</td>
                <td><a href="../variables#flex-wrap">flex-wrap</a></td>
                <td>wrap</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-min-height</td>
                <td><a href="../variables#min-height">min-height</a></td>
                <td>10rem</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-background-color</td>
                <td><a href="../variables#background-color">background-color</a></td>
                <td>var(--application-base-tint-1-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-text-color</td>
                <td><a href="../variables#text-color">text-color</a></td>
                <td>var(--application-base-tint-1-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-padding-top</td>
                <td><a href="../variables#padding-top">padding-top</a></td>
                <td>var(--content-padding-top)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-padding-right</td>
                <td><a href="../variables#padding-right">padding-right</a></td>
                <td>5%</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-padding-bottom</td>
                <td><a href="../variables#padding-bottom">padding-bottom</a></td>
                <td>var(--content-padding-bottom)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-padding-left</td>
                <td><a href="../variables#padding-left">padding-left</a></td>
                <td>5%</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-max-width</td>
                <td><a href="../variables#max-width">max-width</a></td>
                <td>100%</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-link-text-color</td>
                <td><a href="../variables#text-color">text-color</a></td>
                <td>var(--footer-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-link-text-decoration</td>
                <td><a href="../variables#text-decoration">text-decoration</a></td>
                <td>none</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-link-hover-text-color</td>
                <td><a href="../variables#text-color">text-color</a></td>
                <td>var(--footer-link-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--footer-link-hover-text-decoration</td>
                <td><a href="../variables#text-decoration">text-decoration</a></td>
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
  --footer-min-height: ;
  --footer-justify-content: ;
  --footer-align-items: ;
  --footer-flex-wrap: ;
  --footer-background-color: ;
  --footer-text-color: ;
  --footer-padding: ;

  /* Links */
  --footer-link-text-color: ;
  --footer-link-text-decoration: ;

  /* Links hover */
  --footer-link-hover-text-color: ;
  --footer-link-hover-text-decoration: ;
}
`}
        />
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="./footer-two-thirds-one-third">Footer tweederde eenderde</a>
      </section>
    </div>
  </article>
</main>
