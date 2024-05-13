<script context="module">
  export const breadcrumb = "Header";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Header</title>
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
        <h1>Header</h1>
        <p>
          De header-navigation wordt vaak gebruikt als extra navigatiepunt en om aan te geven aan de
          gebruiker dat het einde van de pagina bereikt is.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de benodigde HTML toe. Voor meer informatie zie: <a href="#examples">voorbeelden</a
            >.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h1>Voorbeelden:</h1>
        <ul>
          <li><a href="{base}/components/header-navigation/example">Navigatie</a></li>
          <li>
            <a href="{base}/components/header-navigation/example-content-wrapper">Navigatie met content wrapper</a>
          </li>
          <li><a href="{base}/components/header-navigation/example-logo">Navigatie en logo</a></li>
          <li><a href="{base}/components/header-navigation/example-logo-above">Navigatie met Logo bovenaan</a></li>
          <li>
            <a href="{base}/components/header-navigation/example-multiple-menus">Navigatie met meerdere menu's</a>
          </li>
          <li>
            <a href="{base}/components/header-navigation/example-language-select-list">Navigatie taalselectie</a>
          </li>
          <li>
            <a href="{base}/components/header-navigation/example-form-button">Navigatie met formulier knop</a>
          </li>
        </ul>
      </section>

      <section id="requirements">
        <h1>Bijbehorende bestanden</h1>
        <p>Voeg de (s)css-bestanden toe aan het project of importeer de bestanden.</p>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>
        <h2>Importeer component via NPM</h2>
        <h3>CSS-voorbeeld:</h3>
        <Code
          language="css"
          code={`
@use "@minvws/manon/header-navigation";
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
                <td>--header-navigation-flex-direction</td>
                <td><a href="{base}/documentation/variables#flex-direction">flex-direction</a></td>
                <td>column</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--header-navigation-gap</td>
                <td><a href="{base}/documentation/variables#gap">gap</a></td>
                <td>var(--application-base-gap-medium)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--header-navigation-justify-content</td>
                <td><a href="{base}/documentation/variables#justify-content">justify-content</a></td>
                <td>center</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--header-navigation-align-items</td>
                <td><a href="{base}/documentation/variables#align-items">align-items</a></td>
                <td>flex-start</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--header-navigation-flex-wrap</td>
                <td><a href="{base}/documentation/variables#flex-wrap">flex-wrap</a></td>
                <td>wrap</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--header-navigation-min-height</td>
                <td><a href="{base}/documentation/variables#min-height">min-height</a></td>
                <td>10rem</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--header-navigation-background-color</td>
                <td><a href="{base}/documentation/variables#background-color">background-color</a></td>
                <td>var(--application-base-tint-1-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--header-navigation-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--application-base-tint-1-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--header-navigation-padding-top</td>
                <td><a href="{base}/documentation/variables#padding-top">padding-top</a></td>
                <td>var(--content-padding-top)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--header-navigation-padding-right</td>
                <td><a href="{base}/documentation/variables#padding-right">padding-right</a></td>
                <td>5%</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--header-navigation-padding-bottom</td>
                <td><a href="{base}/documentation/variables#padding-bottom">padding-bottom</a></td>
                <td>var(--content-padding-bottom)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--header-navigation-padding-left</td>
                <td><a href="{base}/documentation/variables#padding-left">padding-left</a></td>
                <td>5%</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--header-navigation-max-width</td>
                <td><a href="{base}/documentation/variables#max-width">max-width</a></td>
                <td>100%</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--header-navigation-link-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--header-navigation-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--header-navigation-link-text-decoration</td>
                <td><a href="{base}/documentation/variables#text-decoration">text-decoration</a></td>
                <td>none</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--header-navigation-link-hover-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--header-navigation-link-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--header-navigation-link-hover-text-decoration</td>
                <td><a href="{base}/documentation/variables#text-decoration">text-decoration</a></td>
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
  --header-navigation-min-height: ;
  --header-navigation-justify-content: ;
  --header-navigation-align-items: ;
  --header-navigation-flex-wrap: ;
  --header-navigation-background-color: ;
  --header-navigation-text-color: ;
  --header-navigation-padding: ;

  /* Links */
  --header-navigation-link-text-color: ;
  --header-navigation-link-text-decoration: ;

  /* Links hover */
  --header-navigation-link-hover-text-color: ;
  --header-navigation-link-hover-text-decoration: ;
}
`}
        />
      </section>
    </div>
  </article>
</main>
