<script context="module">
  export const breadcrumb = "Links";
</script>

<script>
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
        <nav>
          <ul>
            <li><a href="navigation">Basis</a></li>
            <li><a href="navigation" class="icon icon-cat">Met <code>:before</code></a></li>
            <li>
              <a href="navigation" class="icon-after icon-cat"
                >Met <code>:after</code><span class="icon icon-cat">Kat icoon</span></a
              >
            </li>

            <li><a href="navigation" class="hover">Hover <code>:hover</code></a></li>

            <li>
              <a href="navigation" class="hover icon icon-cat"
                >Hover met <code>:before:hover</code></a
              >
            </li>
            <li>
              <a href="navigation" class="hover"
                >Hover met <code>:before:hover</code> <span class="icon icon-cat"></span></a
              >
            </li>

            <li><a href="navigation" class="active">Actieve link</a></li>
            <li><a href="navigation" class="active icon icon-cat">Actieve link met icoon</a></li>
            <li>
              <a href="navigation" class="active"
                >Actieve link met icoon achteraan <span class="icon icon-cat"></span></a
              >
            </li>
            <li><a href="navigation" class="active hover">Actieve link op hover</a></li>
            <li>
              <a href="navigation" class="active hover icon icon-cat"
                >Actieve link met icoon op hover</a
              >
            </li>
            <li>
              <a href="navigation" class="active hover"
                >Actieve link met icoon achteraan op hover <span class="icon icon-cat"></span></a
              >
            </li>

            <li><a href="navigation" class="focus">Link gefocust</a></li>
            <li><a href="navigation" class="focus icon icon-cat">Link gefocust met icoon</a></li>
            <li>
              <a href="navigation" class="focus"
                >Link gefocust met icoon achteraan <span class="icon icon-cat"></span></a
              >
            </li>
            <li><a href="navigation" class="focus hover">Link gefocust op hover</a></li>
            <li>
              <a href="navigation" class="focus hover icon icon-cat"
                >Link gefocust met icoon op hover</a
              >
            </li>
            <li>
              <a href="navigation" class="focus hover"
                >Link gefocust met icoon achteraan op hover <span class="icon icon-cat"></span></a
              >
            </li>

            <li><a href="navigation" class="visited">Bezochte link</a></li>
            <li><a href="navigation" class="visited icon icon-cat">Bezochte link met icoon</a></li>
            <li>
              <a href="navigation" class="visited"
                >Bezochte link met icoon achteraan <span class="icon icon-cat"></span></a
              >
            </li>
            <li><a href="navigation" class="visited hover">Bezochte link op hover</a></li>
            <li>
              <a href="navigation" class="visited hover icon icon-cat"
                >Bezochte link met icoon op hover</a
              >
            </li>
            <li>
              <a href="navigation" class="visited hover"
                >Bezochte link met icoon achteraan op hover <span class="icon icon-cat"></span></a
              >
            </li>
          </ul>
        </nav>

        <h4>Navigatie-component met links</h4>
        <nav>
          <a href="navigation">Lorem ipsum</a>
          <a href="navigation">Lorem ipsum</a>
          <a href="navigation">Lorem ipsum</a>
        </nav>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<nav>
    <a href="#">Lorem ipsum</a>
    <a href="#">Lorem ipsum</a>
    <a href="#">Lorem ipsum</a>
</nav>
`}
        />

        <h4>Navigatie-component met een lijst met links</h4>
        <nav>
          <ul>
            <li><a href="navigation">Lorem ipsum</a></li>
            <li><a href="navigation">Lorem ipsum</a></li>
            <li><a href="navigation">Lorem ipsum</a></li>
          </ul>
        </nav>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<nav>
    <ul>
        <li><a href="#">Lorem ipsum</a></li>
        <li><a href="#">Lorem ipsum</a></li>
        <li><a href="#">Lorem ipsum</a></li>
    </ul>
</nav>
`}
        />

        <h4>Navigatie-component met een horizontaal uitgelijnde lijst met links</h4>
        <nav>
          <ul class="horizontal-view">
            <li><a href="navigation">Lorem ipsum</a></li>
            <li><a href="navigation">Lorem ipsum</a></li>
            <li><a href="navigation">Lorem ipsum</a></li>
          </ul>
        </nav>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<nav>
    <ul class="horizontal-view">
        <li><a href="#">Lorem ipsum</a></li>
        <li><a href="#">Lorem ipsum</a></li>
        <li><a href="#">Lorem ipsum</a></li>
    </ul>
</nav>
`}
        />

        <h4>Link hover test</h4>
        <nav id="nav-a-hover">
          <ul>
            <li><a href="#nav-a-hover" class="hover">Lorem ipsum</a></li>
            <li>
              <a href="#nav-a-hover" class="hover icon icon-cat"
                >Hover met <code>:before:hover</code></a
              >
            </li>
            <li>
              <a href="#nav-a-hover" class="hover"
                >Hover met <code>:before:hover</code> <span class="icon icon-cat"></span></a
              >
            </li>
          </ul>
        </nav>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<nav>
    <ul>
        <li><a href="#" class="hover">Lorem ipsum</a></li>
        <li><a href="#" class="hover icon icon-cat">Hover met <code>:before:hover</code></a></li>
        <li><a href="#" class="hover">Hover met <code>:before:hover</code> <span class="icon icon-cat"></span></a></li>
    </ul>
</nav>
`}
        />

        <h4>Link active test</h4>
        <nav id="nav-a-active">
          <ul>
            <li><a href="#nav-a-active" class="active">Lorem ipsum</a></li>
            <li>
              <a href="#nav-a-active" class="active icon icon-cat"
                >active met <code>:before:active</code></a
              >
            </li>
            <li>
              <a href="#nav-a-active" class="active"
                >active met <code>:before:active</code> <span class="icon icon-cat"></span></a
              >
            </li>
          </ul>
        </nav>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<nav>
    <ul>
        <li><a href="#" class="active">Lorem ipsum</a></li>
        <li><a href="#" class="active icon icon-cat">active met <code>:before:active</code></a></li>
        <li><a href="#" class="active">active met <code>:before:active</code> <span class="icon icon-cat"></span></a></li>
    </ul>
</nav>
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

        <h3>Importeer component via NPM</h3>

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
                <td>--links-font-size</td>
                <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                <td>var(--body-text-small-font-size)</td>
                <td>-</td>
                <th rowspan="4" scope="rowgroup">links</th>
              </tr>

              <tr>
                <td>--links-font-weight</td>
                <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                <td>var(--body-text-small-font-weight)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--links-line-height</td>
                <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                <td>var(--body-text-small-line-height)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--links-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--body-text-small-color)</td>
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
  --links-font-size: ;
  --links-font-weight: ;
  --links-line-height: ;
  --links-text-color: ;
}
`}
        />
      </section>
    </div>
  </article>
</main>
