<script context="module">
  export const breadcrumb = "Inklapbaar menu";
</script>

<script>
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Inklapbaar menu</title>
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
        <h1>Inklapbaar menu</h1>
        <p class="warning">
          <strong>Let op:</strong> Deze documentatie is momenteel onvolledig. De details voor het JavaScript-bestand
          missen.
        </p>

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
            Voeg de bijbehorende html toe. Voor meer informatie zie: <a href="#examples"
              >Voorbeelden</a
            >.
          </li>
          <li>
            Voeg de benodigde JavaScript-bestanden toe aan de pagina. <code>navigation.js</code>.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h4>Visueel voorbeeld:</h4>
        <p>Zie hoofdmenu op deze pagina</p>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<header>
    <nav aria-label="Hoofdnavigatie">
        <ul>
            <!-- menu items -->
        </ul>
    </nav>
</header>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="../import-styling">Componenten gebruiken en styling toevoegen</a>
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

        <h3>Importeer component via NPM</h3>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/collapsible-menu";
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
                <td>--navigation-collapsible-menu-gap</td>
                <td><a href="../variables#gap">gap</a></td>
                <td>0</td>
                <td rowspan="39" scope="rowgroup">42rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-height</td>
                <td><a href="../variables#height">height</a></td>
                <td>3rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-border-width</td>
                <td><a href="../variables#border-width">border-width</a></td>
                <td>0</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-border-style</td>
                <td><a href="../variables#border-style">border-style</a></td>
                <td>solid</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-border-color</td>
                <td><a href="../variables#border-color">border-color</a></td>
                <td>transparent</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-background-color</td>
                <td><a href="../variables#background-color">background-color</a></td>
                <td>transparent</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-max-width</td>
                <td><a href="../variables#width">max-width</a></td>
                <td>100%</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-list-z-index</td>
                <td><a href="../variables#max-z-index">max-z-index</a></td>
                <td>20</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-list-position</td>
                <td><a href="../variables#position">position</a></td>
                <td>absolute</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-list-top</td>
                <td><a href="../variables#top">top</a></td>
                <td>var(--navigation-collapsible-menu-height)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-list-right</td>
                <td><a href="../variables#right">right</a></td>
                <td>auto</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-list-bottom</td>
                <td><a href="../variables#bottom">bottom</a></td>
                <td>auto</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-list-left</td>
                <td><a href="../variables#left">left</a></td>
                <td>auto</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-list-width</td>
                <td><a href="../variables#width">width</a></td>
                <td>100%</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-list-collapsed-background-color</td>
                <td><a href="../variables#background-color">background-color</a></td>
                <td>var(--application-base-accent-color-tint-2)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-list-collapsed-text-color</td>
                <td><a href="../variables#text-color">text-color</a></td>
                <td>var(--application-base-accent-color-tint-2-text-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-list-item-collapsed-border-width</td>
                <td><a href="../variables#border-width">border-width</a></td>
                <td>1px 0 0 0</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-list-item-collapsed-border-style</td>
                <td><a href="../variables#border-style">border-style</a></td>
                <td>solid</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-list-item-collapsed-border-color</td>
                <td><a href="../variables#border-color">border-color</a></td>
                <td>var(--grey-2, #000000)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-list-item-collapsed-background-color</td>
                <td><a href="../variables#background-color">background-color</a></td>
                <td>var(--application-base-background-color, transparent)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-list-item-collapsed-text-color</td>
                <td><a href="../variables#text-color">text-color</a></td>
                <td>var(--application-base-text-color, transparent)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-list-item-collapsed-padding</td>
                <td><a href="../variables#padding">padding</a></td>
                <td>0 2rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-list-item-collapsed-first-item-border-width</td>
                <td><a href="../variables#border-width">border-width</a></td>
                <td>var(--navigation-collapsible-menu-list-item-collapsed-border-width)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-list-item-collapsed-last-item-border-width</td>
                <td><a href="../variables#border-width">border-width</a></td>
                <td>1px 0</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-link-text-decoration</td>
                <td><a href="../variables#text-decoration">text-decoration</a></td>
                <td>none</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-link-justify-content</td>
                <td><a href="../variables#justify-content">justify-content</a></td>
                <td>flex-start</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-list-item-collapsed-hover-background-color</td>
                <td><a href="../variables#background-color">background-color</a></td>
                <td>var(--branding-color-1-background-color, #c0c0c0)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-list-item-collapsed-hover-text-color</td>
                <td><a href="../variables#text-color">text-color</a></td>
                <td>var(--branding-color-1-text-color, #000000)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-button-background-color</td>
                <td><a href="../variables#background-color">background-color</a></td>
                <td>var(--application-base-background-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-button-font-size</td>
                <td><a href="../variables#font-size">font-size</a></td>
                <td>0</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-button-height</td>
                <td><a href="../variables#height">height</a></td>
                <td>2.75rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-button-min-width</td>
                <td><a href="../variables#min-width">min-width</a></td>
                <td>var(--navigation-collapsible-menu-button-height)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-button-min-height</td>
                <td><a href="../variables#min-height">min-height</a></td>
                <td>var(--button-base-min-height)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-icon</td>
                <td><a href="../variables#icon">icon</a></td>
                <td>"≡"</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-icon-font-size</td>
                <td><a href="../variables#font-size">font-size</a></td>
                <td>var(--application-base-font-size)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-icon-color</td>
                <td><a href="../variables#color">color</a></td>
                <td>var(--application-base-text-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-icon-collapsed</td>
                <td><a href="../variables#icon">icon</a></td>
                <td>"x"</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-icon-collapsed-text-color</td>
                <td><a href="../variables#icon">icon</a></td>
                <td>var(--navigation-collapsible-menu-icon-font-size)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--navigation-collapsible-menu-icon-collapsed-font-size</td>
                <td><a href="../variables#font-size">font-size</a></td>
                <td>var(--navigation-collapsible-menu-icon-color)</td>
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
    /* Navigation */
    --navigation-collapsible-menu-gap: ;
    --navigation-collapsible-menu-height: ;
    --navigation-collapsible-menu-border-width: ;
    --navigation-collapsible-menu-border-style: ;
    --navigation-collapsible-menu-border-color: ;
    --navigation-collapsible-menu-background-color: ;
    --navigation-collapsible-menu-max-width: ;

    /* List */
    --navigation-collapsible-menu-list-z-index: ;
    --navigation-collapsible-menu-list-postion: ;
    --navigation-collapsible-menu-list-top: ;
    --navigation-collapsible-menu-list-right: ;
    --navigation-collapsible-menu-list-bottom: ;
    --navigation-collapsible-menu-list-left: ;
    --navigation-collapsible-menu-width: ;

    /* List collapsed */
    --navigation-collapsible-menu-list-collapsed-background-color: ;
    --navigation-collapsible-menu-list-collapsed-text-color: ;

    /* List item collapsed */
    --navigation-collapsible-menu-list-item-collapsed-border-width: ;
    --navigation-collapsible-menu-list-item-collapsed-border-style: ;
    --navigation-collapsible-menu-list-item-collapsed-border-color: ;
    --navigation-collapsible-menu-list-item-collapsed-background-color: ;
    --navigation-collapsible-menu-list-item-collapsed-text-color: ;
    --navigation-collapsible-menu-list-item-collapsed-padding: ;
    
    /* First collapsed list item */
    --navigation-collapsible-menu-list-item-collapsed-first-item-border-width: ;
    
    /* Last collapsed list item */
    --navigation-collapsible-menu-list-item-collapsed-last-item-border-width: ;

    /* Link */
    --navigation-collapsible-link-text-decoration: ;
    --navigation-collapsible-link-justify-content: ;

    /* List item collapsed hover */
    --navigation-collapsible-menu-list-item-collapsed-hover-background-color: ;
    --navigation-collapsible-menu-list-item-collapsed-hover-text-color: ;
        
    /* Button */
    --navigation-collapsible-menu-button-background-color: ;
    --navigation-collapsible-menu-button-font-size: ;
    --navigation-collapsible-menu-button-height: ;
    --navigation-collapsible-menu-button-min-width: ;
    --navigation-collapsible-menu-button-min-height: ;

    /* Icon */
    --navigation-collapsible-menu-icon: ;
    --navigation-collapsible-menu-icon-font-size: ;
    --navigation-collapsible-menu-icon-color: ;

    /* Collapsed icon */
    --navigation-collapsible-menu-icon-collapsed: ;
    --navigation-collapsible-menu-icon-collapsed-font-size: ;
    --navigation-collapsible-menu-icon-collapsed-text-color: ;
`}
        />
      </section>
    </div>
  </article>
</main>
