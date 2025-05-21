<script module>
  export const breadcrumb = "Navigation";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Navigation</title>
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
        <h1>Navigation</h1>

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
            Voeg de benodigde HTML toe. Voor meer informatie zie: <a href="#examples">Voorbeelden</a
            >.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h4>Visueel voorbeeld:</h4>
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>

        <h3>Aandachtspunten:</h3>
        <ul>
          <li>
            De standaard ingestelde waarden binnen Manon maken gebruik van de <a
              href="body-text-set">Body text set</a
            >. Om gebruik te maken van deze set. Laad de set eenmalig in voordat overige componenten
            er gebruik van maken. Zie onderstaand voorbeeld voor meer informatie.
          </li>
        </ul>

        <h3>Importeer component via npm</h3>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/navigation";
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
                <td>--navigation-title-font-family</td>
                <td><a href="{base}/documentation/variables#font-family">font-family</a></td>
                <td>var(--navigation-title-font-family)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-title-font-size</td>
                <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                <td>var(--navigation-title-font-size)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-title-font-weight</td>
                <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                <td>var(--navigation-title-font-weight)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-title-line-height</td>
                <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                <td>var(--navigation-title-line-height)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-title-text-color</td>
                <td><a href="{base}/documentation/variables#color">color</a></td>
                <td>var(--navigation-title-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-margin</td>
                <td><a href="{base}/documentation/variables#margin">margin</a></td>
                <td>var(--navigation-list-margin)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-padding</td>
                <td><a href="{base}/documentation/variables#padding">padding</a></td>
                <td>var(--navigation-list-padding)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-gap</td>
                <td><a href="{base}/documentation/variables#gap">gap</a></td>
                <td>var(--navigation-list-gap)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-line-height</td>
                <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                <td>var(--navigation-list-line-height)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-font-size</td>
                <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                <td>var(--navigation-list-font-size)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-font-weight</td>
                <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                <td>var(--navigation-list-font-weight)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-text-color</td>
                <td><a href="{base}/documentation/variables#color">color</a></td>
                <td>var(--navigation-list-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-background-color</td>
                <td><a href="{base}/documentation/variables#background-color">background-color</a></td>
                <td>var(--navigation-list-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-item-padding</td>
                <td><a href="{base}/documentation/variables#padding">padding</a></td>
                <td>var(--navigation-list-item-padding)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-item-background-color</td>
                <td><a href="{base}/documentation/variables#background-color">background-color</a></td>
                <td>var(--navigation-list-item-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-item-text-color</td>
                <td><a href="{base}/documentation/variables#color">color</a></td>
                <td>var(--navigation-list-item-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-item-border-width</td>
                <td><a href="{base}/documentation/variables#border-width">border-width</a></td>
                <td>var(--navigation-list-item-border-width)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-item-border-style</td>
                <td><a href="{base}/documentation/variables#border-style">border-style</a></td>
                <td>var(--navigation-list-item-border-style)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-item-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--navigation-list-item-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-item-list-style</td>
                <td><a href="{base}/documentation/variables#list-style">list-style</a></td>
                <td>var(--navigation-list-item-list-style)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-item-icon-content</td>
                <td><a href="{base}/documentation/variables#content">content</a></td>
                <td>var(--navigation-list-item-icon-content)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-item-icon-font-family</td>
                <td><a href="{base}/documentation/variables#font-family">font-family</a></td>
                <td>var(--navigation-list-item-icon-font-family)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-item-icon-line-height</td>
                <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                <td>var(--navigation-list-item-icon-line-height)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-item-icon-font-size</td>
                <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                <td>var(--navigation-list-item-icon-font-size)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-item-icon-padding-top</td>
                <td><a href="{base}/documentation/variables#padding-top">padding-top</a></td>
                <td>var(--navigation-list-item-icon-padding-top)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-item-icon-padding-right</td>
                <td><a href="{base}/documentation/variables#padding-right">padding-right</a></td>
                <td>var(--navigation-list-item-icon-padding-right)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-item-icon-padding-bottom</td>
                <td><a href="{base}/documentation/variables#padding-bottom">padding-bottom</a></td>
                <td>var(--navigation-list-item-icon-padding-bottom)</td>
                <td>-</td>
                <td>-</td>
              </tr>

             <tr>
                <td>--navigation-list-item-icon-padding-bottom</td>
                <td><a href="{base}/documentation/variables#padding-left">padding-left</a></td>
                <td>var(--navigation-list-item-icon-padding-bottom)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-list-item-icon-display</td>
                <td><a href="{base}/documentation/variables#display">display</a></td>
                <td>var(--navigation-list-item-icon-display)</td>
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
  /* Title */
  --navigation-title-font-family: ;
  --navigation-title-font-size: ;
  --navigation-title-font-weight: ;
  --navigation-title-line-height: ;
  --navigation-title-text-color: ;

  /* List */
  --navigation-list-margin: 0;
  --navigation-list-padding: 0 0 0 1.5rem;
  --navigation-list-gap: 0.5rem;
  --navigation-list-line-height: 1.5;
  --navigation-list-font-size: 1rem;
  --navigation-list-font-weight: normal;
  --navigation-list-text-color: ;
  --navigation-list-background-color: ;

  /* List item */
  --navigation-list-item-padding: initial;
  --navigation-list-item-background-color: transparent;
  --navigation-list-item-text-color: ;
  --navigation-list-item-border-width: 0;
  --navigation-list-item-border-style: solid;
  --navigation-list-item-border-color: transparent);
  --navigation-list-item-list-style: initial;

  /* List item icon */
  --navigation-list-item-icon-content: "";
  --navigation-list-item-icon-font-family: ;
  --navigation-list-item-icon-font-size: ;
  --navigation-list-item-icon-line-height: ;
  --navigation-list-item-icon-padding-top: 0;
  --navigation-list-item-icon-padding-right: 0.5rem;
  --navigation-list-item-icon-padding-bottom: 0;
  --navigation-list-item-icon-padding-left: ;
}
`}
        />
      </section>
    </div>
  </article>
</main>
