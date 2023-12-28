<script context="module">
  export const breadcrumb = "Inklapbaar component";
</script>

<script>
  import { onMount } from "svelte";
  import Code from "$lib/Code.svelte";
  import { initCollapsible } from "$lib/manon.js";
  onMount(initCollapsible);
</script>

<svelte:head>
  <title>Inklapbaar component</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Inklapbaar component</h1>

        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie: <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de benodigde HTML toe. Voor meer informatie zie: <a href="#examples">Voorbeelden</a
            >.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Collapsible zonder gedefinieerde <code>button</code> labels</h2>

        <p>
          In het attribuut <code>data-open-label</code> kan tekst worden geplaatst om de gebruiker
          te informeren over het element wat gaat openklappen. Voor <code>data-close-label</code> geldt
          hetzelfde, maar dan voor het sluiten van het element.
        </p>

        <p>Deze teksten worden zowel visueel op de knop, als voor screen-readers gebruikt.</p>

        <p>
          Als er verscihllende teksten nodig zijn voor screenreadable-gebruikers en overige
          gebruikers kan er een extra knoptekst worden toegevoegd. Voor screenreader gebruikers
          worden in dat geval beide teksten opgelezen. Eerst de tekst zoals deze in <code
            >data-open-label</code
          >/<code>data-close-label</code> staat. En daaropvolgend de inhoud van
          <code>data-button-open-label</code>/<code>data-button-close-label</code>. Overige
          gebruikers zien alleen de inhoud van <code>data-button-open-label</code>/<code
            >data-button-close-label</code
          > als inhoud van de knop.
        </p>
        <p>
          Als er geen <code>data-open-label</code> en/of <code>data-close-label</code> wordt/worden gedefinieerd,
          dan zal het component terugvallen op respectievelijk "Menu" en "Sluit menu".
        </p>

        <h3>Visuele weergave:</h3>

        <div
          data-open-label="Dropdown menu"
          data-close-label="Sluit dropdown menu"
          data-media="(min-width: 100%)"
          aria-label="Acties"
          class="collapsible"
        >
          <div class="collapsing-element">
            <ul>
              <li><a href="#">Item 1</a></li>
              <li><a href="#" aria-selected="true">Huidige selectie</a></li>
              <li><a href="#">Item 3</a></li>
            </ul>
          </div>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  aria-label="Acties"
  class="collapsible">

  <div class="collapsing-element">
      <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#" aria-selected="true">Huidige selectie</a></li>
          <li><a href="#">Item 3</a></li>
      </ul>
  </div>
</div>
`}
        />

        <h2>Collapsible met gedefinieerde <code>button</code> labels</h2>
        <h3>Visuele weergave:</h3>

        <p>
          In het attribuut <code>data-button-open-label</code> kan tekst worden geplaatst die
          visueel op de knop wordt getoond, om de gebruiker te informeren over het element wat gaat
          openklappen. Voor <code>data-button-close-label</code> geldt hetzelfde, maar dan voor het sluiten
          van het element.
        </p>

        <p>
          Deze teksten gelden enkel als visuele weergave op de knop, voor screen-readers gebruikt
          het component de attributen <code>data-open-label</code>
          en <code>data-close-label</code> zijn gedefinieerd. In dat geval worden beide teksten
          opgelezen. Eerst de tekst zoals deze in <code>data-open-label</code>/<code
            >data-close-label</code
          >
          staat. En daaropvolgend de inhoud van <code>data-button-open-label</code>/<code
            >data-button-close-label</code
          >. Overige gebruikers zien alleen de inhoud van <code>data-button-open-label</code>/<code
            >data-button-close-label</code
          > als inhoud van de knop.
        </p>

        <p>
          Als er geen <code>data-open-label</code> of <code>data-close-label</code> worden gedefinieerd,
          dan zal het component terugvallen op respectievelijk "Menu" en "Sluit menu".
        </p>

        <div
          data-button-open-label="Gedefinieerde open tekst"
          data-button-close-label="Gedefinieerde sluit tekst"
          data-open-label="Dropdown menu"
          data-close-label="Sluit dropdown menu"
          data-media="(min-width: 100%)"
          aria-label="Acties"
          class="collapsible"
        >
          <div class="collapsing-element">
            <ul>
              <li><a href="#">Item 1</a></li>
              <li><a href="#" aria-selected="true">Huidige selectie</a></li>
              <li><a href="#">Item 3</a></li>
            </ul>
          </div>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div
  data-button-open-label="Gedefinieerde open menu text"
  data-button-close-label="Gedefinieerde sluit menu text"
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  aria-label="Acties"
  class="collapsible">

  <div class="collapsing-element">
      <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#" aria-selected="true">Huidige selectie</a></li>
          <li><a href="#">Item 3</a></li>
      </ul>
  </div>
</div>
`}
        />

        <h2>Met formulier</h2>
        <h3>Visuele weergave:</h3>

        <div
          data-open-label="Dropdown menu"
          data-close-label="Sluit dropdown menu"
          data-media="(min-width: 100%)"
          aria-label="Acties"
          class="collapsible"
        >
          <div class="collapsing-element">
            <form>
              <ul>
                <li><a href="#">Item 1</a></li>
                <li><a href="#" aria-selected="true">Huidige selectie</a></li>
                <li><a href="#">Item 3</a></li>
              </ul>
            </form>
          </div>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  aria-label="Acties"
  class="collapsible">

  <div class="collapsing-element">
    <form>
      <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#" aria-selected="true">Huidige selectie</a></li>
          <li><a href="#">Item 3</a></li>
      </ul>
    </form>
  </div>
</div>
`}
        />

        <h2>Inklapbare ghost button</h2>
        <h3>Visuele weergave:</h3>

        <div
          data-open-label="Dropdown menu"
          data-close-label="Sluit dropdown menu"
          data-media="(min-width: 100%)"
          data-button-classes="ghost"
          aria-label="Acties"
          class="collapsible"
        >
          <div class="collapsing-element">
            <ul>
              <li><a href="#">Item 1</a></li>
              <li><a href="#" aria-selected="true">Huidige selectie</a></li>
              <li><a href="#">Item 3</a></li>
            </ul>
          </div>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  data-button-classes="ghost"
  aria-label="Acties"
  class="collapsible">

  <div class="collapsing-element">
      <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#" aria-selected="true">Huidige selectie</a></li>
          <li><a href="#">Item 3</a></li>
      </ul>
  </div>
</div>
`}
        />

        <h2>Inklapbare icoonknop</h2>
        <h3>Visuele weergave:</h3>

        <div
          data-open-label="Dropdown menu"
          data-close-label="Sluit dropdown menu"
          data-media="(min-width: 100%)"
          data-button-classes="icon icon-cat"
          aria-label="Acties"
          class="collapsible"
        >
          <div class="collapsing-element">
            <ul>
              <li><a href="#">Item 1</a></li>
              <li><a href="#" aria-selected="true">Huidige selectie</a></li>
              <li><a href="#">Item 3</a></li>
            </ul>
          </div>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  data-button-classes="icon icon-cat"
  aria-label="Acties"
  class="collapsible">

  <div class="collapsing-element">
      <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#" aria-selected="true">Huidige selectie</a></li>
          <li><a href="#">Item 3</a></li>
      </ul>
  </div>
</div>
`}
        />

        <h2>Inklapbaar component met meerdere menu's</h2>
        <h3>Visuele weergave:</h3>
        <div
          data-open-label="Dropdown menu"
          data-close-label="Sluit dropdown menu"
          data-media="(min-width: 100%)"
          aria-label="Acties"
          class="collapsible"
        >
          <div class="collapsing-element">
            <ul>
              <li><a href="#">Item 1</a></li>
              <li><a href="#" aria-selected="true">Huidige selectie</a></li>
              <li><a href="#">Item 3</a></li>
            </ul>

            <ul>
              <li><a href="#">Sub menu Item 1</a></li>
              <li><a href="#">Sub menu Item 2</a></li>
              <li><a href="#">Sub menu Item 3</a></li>
            </ul>
          </div>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  aria-label="Acties"
  class="collapsible">

  <div class="collapsing-element">
    <ul>
      <li><a href="#">Item 1</a></li>
      <li><a href="#" aria-selected="true">Huidige selectie</a></li>
      <li><a href="#">Item 3</a></li>
    </ul>

    <ul>
      <li><a href="#">Sub menu Item 1</a></li>
      <li><a href="#">Sub menu Item 2</a></li>
      <li><a href="#">Sub menu Item 3</a></li>
    </ul>
  </div>
</div>
`}
        />

        <h2>Inklapbare taalselectie</h2>
        <h3>Visuele weergave:</h3>

        <div
          data-open-label="Dropdown menu"
          data-close-label="Sluit dropdown menu"
          data-media="(min-width: 100%)"
          aria-label="Acties"
          class="collapsible"
        >
          <div class="collapsing-element">
            <ul role="listbox">
              <li>
                <a hreflang="nl" href="#" role="option" data-value="Nederlands" lang="nl"
                  >Nederlands</a
                >
              </li>
              <li>
                <a hreflang="en" href="#" role="option" data-value="English" lang="en">English</a>
              </li>
              <li>
                <a hreflang="fy" href="#" role="option" data-value="Frysk" lang="fy">Frysk</a>
              </li>
              <li aria-current="true">
                <a hreflang="pap-CW" href="#" role="option" data-value="Papiamentu" lang="pap-CW"
                  >Papiamentu</a
                >
              </li>
              <li>
                <a hreflang="pap-AW" href="#" role="option" data-value="Papiamento" lang="pap-AW"
                  >Papiamento</a
                >
              </li>
            </ul>
          </div>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  aria-label="Acties"
  class="collapsible">

  <div class="collapsing-element">
      <ul role="listbox">
        <li>
          <a hreflang="nl" href="#" role="option" data-value="Nederlands" lang="nl">Nederlands</a>
        </li>
        <li>
          <a hreflang="en" href="#" role="option" data-value="English" lang="en">English</a>
        </li>
        <li>
          <a hreflang="fy" href="#" role="option" data-value="Frysk" lang="fy">Frysk</a>
        </li>
        <li aria-current="true">
          <a hreflang="pap-CW" href="#" role="option" data-value="Papiamentu" lang="pap-CW">Papiamentu</a>
        </li>
        <li>
          <a hreflang="pap-AW" href="#" role="option" data-value="Papiamento" lang="pap-AW">Papiamento</a>
        </li>
      </ul>
  </div>
</div>
`}
        />
      </section>
    </div>
  </article>
</main>
