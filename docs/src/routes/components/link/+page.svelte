<script module>
  export const breadcrumb = "Links";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Links</title>
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
        <h1>Links</h1>

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
        <a href="link">Basis</a>
        <a href="link" class="icon icon-cat">Met <code>::before</code></a>
        <a href="link" class="icon-after icon-cat"
          >Met <code>::after</code><span class="icon icon-cat">Kat icoon</span></a
        >

        <a href="link" class="hover">Hover <code>:hover</code></a>
        <a href="link" class="hover icon icon-cat">Hover met <code>::before:hover</code></a>
        <a href="link" class="hover"
          >Hover met <code>::before:hover</code> <span class="icon icon-cat"></span></a
        >

        <a href="link" class="active">Actieve link</a>
        <a href="link" class="active icon icon-cat">Actieve link met icoon</a>
        <a href="link" class="active"
          >Actieve link met icoon achteraan <span class="icon icon-cat"></span></a
        >
        <a href="link" class="active hover">Actieve link op hover</a>
        <a href="link" class="active hover icon icon-cat">Actieve link met icoon op hover</a>
        <a href="link" class="active hover"
          >Actieve link met icoon achteraan op hover <span class="icon icon-cat"></span></a
        >

        <a href="link" class="focus">Link gefocust</a>
        <a href="link" class="focus icon icon-cat">Link gefocust met icoon</a>
        <a href="link" class="focus"
          >Link gefocust met icoon achteraan <span class="icon icon-cat"></span></a
        >
        <a href="link" class="focus hover">Link gefocust op hover</a>
        <a href="link" class="focus hover icon icon-cat">Link gefocust met icoon op hover</a>
        <a href="link" class="focus hover"
          >Link gefocust met icoon achteraan op hover <span class="icon icon-cat"></span></a
        >

        <a href="link" class="visited">Bezochte link</a>
        <a href="link" class="visited icon icon-cat">Bezochte link met icoon</a>
        <a href="link" class="visited"
          >Bezochte link met icoon achteraan <span class="icon icon-cat"></span></a
        >
        <a href="link" class="visited hover">Bezochte link op hover</a>
        <a href="link" class="visited hover icon icon-cat">Bezochte link met icoon op hover</a>
        <a href="link" class="visited hover"
          >Bezochte link met icoon achteraan op hover <span class="icon icon-cat"></span></a
        >

        <a href="link" rel="external">Externe link</a>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
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
@use "@minvws/manon/links";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p>
          <strong>Let op:</strong> De uitlijning van horizontaal uitgelijnde tags werken alleen in
          combinatie met de class <code>horizontal</code>.
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
                <td>--link-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>transparent</td>
                <td>-</td>
                <th rowspan="4" scope="rowgroup">links</th>
              </tr>

              <tr>
                <td>--link-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">color</a></td>
                <td>#2f2f9a</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--link-text-decoration</td>
                <td><a href="{base}/documentation/variables#text-decoration">text-decoration</a></td
                >
                <td>initial</td>
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
--link-background-color: ;
--link-text-color: ;
--link-text-decoration: ;

/* State overrides */
/* Hover */
--link-hover-background-color: ;
--link-hover-text-color: ;
--link-hover-text-decoration: ;

/* Active */
--link-active-background-color: ;
--link-active-text-color: ;
--link-active-text-decoration: ;

/* Active Hover */
--link-active-hover-background-color: ;
--link-active-hover-text-color: ;
--link-active-hover-text-decoration: ;

/* Focus */
--link-focus-background-color: ;
--link-focus-text-color: ;
--link-focus-text-decoration: ;

/* Focus Hover */
--link-focus-hover-background-color: ;
--link-focus-hover-text-color: ;
--link-focus-hover-text-decoration: ;

/* Visited */
--link-visited-background-color: ;
--link-visited-text-color: ;
--link-visited-text-decoration: ;

/* Visited hover */
--link-visited-hover-background-color: ;
--link-visited-hover-text-color: ;
--link-visited-hover-text-decoration: ;

/* visited active */
--link-visited-active-background-color: ;
--link-visited-active-text-color: ;
--link-visited-active-text-decoration: ;

/* Icon */
--link-icon-font-family: ;
--link-icon-font-size: ;
--link-icon-padding-right: ;
--link-icon-padding-left: ;

/* Icon at the end */
--link-icon-after-padding-right: ;
--link-icon-after-padding-left: ;

/* Visited icon hover */
--link-visited-icon-hover-background-color: ;
--link-visited-icon-hover-text-color: ;
--link-visited-icon-hover-text-decoration: ;

/* External Icon */
--link-external-icon-font-family: ;
--link-external-icon-font-size: ;
--link-external-icon-padding-right: ;
--link-external-icon-padding-left: ;
--link-external-icon: ;
}
`}
        />
      </section>
    </div>
  </article>
</main>
