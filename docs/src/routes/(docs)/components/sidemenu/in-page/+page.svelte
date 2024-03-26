<script context="module">
  export const breadcrumb = "Zijmenu binnen de pagina";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Zijmenu binnen de pagina</title>
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
        <h1>Zijmenu binnen de pagina</h1>
        <p>
          Bij lange documenten of pagina's kan een zijmenu gebruikt worden om het navigeren voor de
          gebruiker toegankelijk en overzichtelijk te houden.
        </p>

        <p>
          In dit voorbeeld staat het zijmenu binnen de pagina bij de content. Gebruik deze weergave
          alleen als de inhoud van het zijmenu specifiek over de content gaat. Bijvoorbeeld een
          inhoudsopgave. Hoort het zijmenu niet bij de inhoud van de pagina. Plaats het zijmenu dan
          naast de pagina. Voor meer informatie zie <a
            href="{base}/components/sidemenu/next-to-page">Zijmenu naast de pagina</a
          >.
        </p>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3 id="sidemenu">Zijmenu</h3>

        <h4>Benodigde stappen</h4>
        <ol>
          <li>Voeg de class <code>sidemenu</code> toe aan de <code>main</code>.</li>
          <li>
            Voeg direct binnen de <code>main</code> een <code>nav</code> toe met de gewenste inhoud.
          </li>
          <li>
            Groepeer de overige content in een enkel element indien dat nog niet gebeurd is.
            Bijvoorbeeld: <code>div</code>, <code>article</code> of <code>section</code>. Voor meer
            informatie zie: <a href="#sidemenu-structure">Voorbeeld sidemenu structuur</a>.
          </li>
        </ol>

        <h4>Aandachtspunten</h4>
        <ul>
          <li>
            <p>
              Deze versie is een zijmenu zonder inklapfunctionaliteit. Deze versie maakt geen
              gebruik van JavaScript.
            </p>
          </li>
        </ul>

        <h4>Visueel voorbeeld</h4>

        <main class="no-js sidemenu">
          <nav aria-label="Zijbalknavigatie zonder javascript voorbeeld">
            <ul>
              <li><a href="">Voorbeeld link 1</a></li>
              <li><a href="">Voorbeeld link 2</a></li>
              <li><a href="">Voorbeeld link 3</a></li>
              <li><a href="">Voorbeeld link 4</a></li>
            </ul>
          </nav>
          <article>
            <div>
              <h1>Lorem ipsum</h1>
              <p>Dolor set amet conseqtetur adepicing elit</p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus ac turpis
                convallis vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Maecenas ut fringilla tortor. Nulla ultrices enim
                sit amet tellus venenatis, lacinia dapibus risus auctor.
              </p>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Vivamus accumsan dui sed diam placerat, quis ultrices enim viverra.</li>
                <li>Aenean posuere enim a hendrerit viverra.</li>
                <li>Phasellus eu justo ac orci tempus bibendum eu in est.</li>
              </ul>
            </div>
          </article>
        </main>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<main class="sidemenu">
  <nav aria-label="Zijbalknavigatie">
    <ul>
      <li><a href="">Voorbeeld link 1</a></li>
      <li><a href="">Voorbeeld link 2</a></li>
      <li><a href="">Voorbeeld link 3</a></li>
      <li><a href="">Voorbeeld link 4</a></li>
    </ul>
  </nav>
  <article>
    <div>
      <h1>Lorem ipsum</h1>
      <p>Dolor set amet conseqtetur adepicing elit</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus ac turpis convallis vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut fringilla tortor. Nulla ultrices enim sit amet tellus venenatis, lacinia dapibus risus auctor.</p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Vivamus accumsan dui sed diam placerat, quis ultrices enim viverra.</li>
        <li>Aenean posuere enim a hendrerit viverra.</li>
        <li>Phasellus eu justo ac orci tempus bibendum eu in est.</li>
      </ul>
    </div>
  </article>
</main>`}
        />

        <h4 id="sidemenu-structure">HTML-voorbeeld structuur</h4>
        <p>
          De layout kan op twee manieren ingesteld worden. Met of zonder het toevoegen van een
          class. Het toevoegen van de class geeft meer vrijheid qua structuur omdat de styling door
          middel van de class op de juiste plek terecht komt. Als de structuur van de pagina exact
          overeenkomt met de onderstaande voorbeelden is het niet nodig de class toe te voegen. Als
          de structuur overeenkomt kan de styling op basis van de HTML-structuur toegepast worden.
        </p>
        <h5>Voorbeeld styling op basis van HTML-structuur</h5>
        <h6><code>div</code></h6>
        <Code
          language="html"
          code={`
<main class="sidemenu">

  <nav>
    <!-- Zijmenu content -->
  </nav>

  <div>
    <!-- Overige pagina content. -->
  </div>

</main>`}
        />

        <h6><code>article</code></h6>
        <Code
          language="html"
          code={`
<main class="sidemenu">

  <nav>
    <!-- Zijmenu content -->
  </nav>

  <article>
    <!-- Overige pagina content. -->
  </article>

</main>`}
        />

        <h6><code>section</code></h6>
        <Code
          language="html"
          code={`
<main class="sidemenu">

  <nav>
    <!-- Zijmenu content -->
  </nav>

  <section>
    <!-- Overige pagina content. -->
  </section>

</main>`}
        />

        <p>Om gebruik te maken van deze structuur importeer de volgende bestanden via NPM.</p>
        <Code
          language="scss"
          code={`
@use "@minvws/manon/sidemenu";
@use "@minvws/manon/sidemenu-page-content";`}
        />

        <h5>Voorbeeld gebruik van class</h5>
        <p>
          Voeg de class <code>page-content</code> toe aan het element die de paginacontent bevat.
        </p>

        <h6><code>div</code></h6>
        <Code
          language="html"
          code={`
<main class="sidemenu">

  <nav>
    <!-- Zijmenu content -->
  </nav>

  <div class="page-content">
    <!-- Overige pagina content. -->
  </div>

</main>`}
        />

        <h6><code>article</code></h6>
        <Code
          language="html"
          code={`
<main class="sidemenu">

  <nav>
    <!-- Zijmenu content -->
  </nav>

  <article class="page-content">
    <!-- Overige pagina content. -->
  </article>

</main>`}
        />

        <h6><code>section</code></h6>
        <Code
          language="html"
          code={`
<main class="sidemenu">

  <nav>
    <!-- Zijmenu content -->
  </nav>

  <section class="page-content">
    <!-- Overige pagina content. -->
  </section>

</main>`}
        />

        <p>Om gebruik te maken van deze structuur importeer het volgende bestand via NPM.</p>
        <Code
          language="scss"
          code={`
@use "@minvws/manon/sidemenu";`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>

        <h3>Importeer component via NPM</h3>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="scss"
          code={`
@use "@minvws/manon/sidemenu";`}
        />

        <p>Optionele bestanden: Zie <a href="#sidemenu-structure">structuurvoorbeelden</a> voor meer informatie.</p>
        <Code
          language="scss"
          code={`
@use "@minvws/manon/sidemenu-page-content";`}
        />
      </section>
    </div>
  </article>
</main>
