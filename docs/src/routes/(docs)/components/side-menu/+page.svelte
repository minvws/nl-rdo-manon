<script context="module">
  export const breadcrumb = "Zijmenu";
</script>

<script>
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Zijmenu</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li>
        <a href="#examples">Voorbeelden</a>
        <ul>
          <li><a href="#sidemenu">Zijmenu</a></li>
          <li><a href="#sidemenu-collapsible">Inklapbaar zijmenu</a></li>
          <li><a href="#sidemenu-expandable">Uitklapbaar zijmenu</a></li>
        </ul>
      </li>
    </ul>
  </SideMenu>

  <article>
    <div>
      <section id="introduction">
        <h1>Zijmenu</h1>
        <p>
          Bij lange documenten of pagina's kan een zijmenu gebruikt worden om het navigeren voor de
          gebruiker toegankelijk en overzichtelijk te houden.
        </p>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3 id="sidemenu">Zijmenu</h3>

        <h4>Benodigde bestanden</h4>
        <ul>
          <li><code>manon/scss/sidemenu</code></li>
          <li><code>manon/scss/sidemenu-variables</code></li>
        </ul>

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
              gebruik van JavaScript. Als er wel gekozen is voor een inklapbaar menu wordt deze
              variant ook getoond als een gebruiker geen JavaScript heeft.
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
              <p>Dolor sit amet conseqtetur adepicing elit</p>

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
  <SideMenu>
    <ul>
        <li><a href="">Voorbeeld link 1</a></li>
        <li><a href="">Voorbeeld link 2</a></li>
        <li><a href="">Voorbeeld link 3</a></li>
        <li><a href="">Voorbeeld link 4</a></li>
    </ul>
  </SideMenu>
<article>
    <div>
        <h1>Lorem ipsum</h1>
        <p>Dolor sit amet conseqtetur adepicing elit</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus ac turpis convallis vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut fringilla tortor. Nulla ultrices enim sit amet tellus venenatis, lacinia dapibus risus auctor.</p>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Vivamus accumsan dui sed diam placerat, quis ultrices enim viverra.</li>
            <li>Aenean posuere enim a hendrerit viverra.</li>
            <li>Phasellus eu justo ac orci tempus bibendum eu in est.</li>
        </ul>
    </div>
</article>
</main>
`}
        />

        <h4 id="sidemenu-structure">HTML-voorbeeld structuur</h4>
        <Code
          language="html"
          code={`
<main class="sidemenu">

  <SideMenu>
      <!-- Zijmenu content -->
  </SideMenu>

  <div>
      <!-- Overige pagina content. -->
  </div>

</main>
`}
        />

        <h3 id="sidemenu-collapsible">Inklapbaar zijmenu</h3>
        <p>Het menu is standaard uitgeklapt en kan door de gebruiker ingeklapt worden.</p>

        <h4>Benodigde bestanden</h4>
        <ul>
          <li><code>manon/scss/sidemenu</code></li>
          <li><code>manon/scss/sidemenu-variables</code></li>
          <li><code>manon/js/sidemenu</code></li>
        </ul>

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
          <li>
            Voeg de referentie naar het Javascript bestand,
            <code>sidemenu.js</code>, toe aan de HTML-pagina's die gebruik dienen te maken van het
            inklapbare zijmenu. Voor meer informatie zie:
            <a href="../add-js">JavaScript referentie toevoegen</a>.
          </li>
        </ol>

        <h4>Aandachtspunten</h4>
        <ul>
          <li>
            De knop wordt automatisch toegevoegd. Deze hoeft dus niet handmatig in de html opgenomen
            te worden.
          </li>
          <li>
            Zonder JavaScript wordt de knop niet toegevoegd en wordt het zijmenu getoond zonder deze
            in te klappen.
          </li>
          <li>
            Indien er gekozen wordt voor een sluit- en open-knop als icoonknop zonder tekst. Voeg
            dan altijd de knoptekst in de taal van het document toe voor screenreader gebruikers.
            <ol>
              <li>
                Voeg de knoptekst toe binnen een
                <code>data-open-label</code>. Bijvoorbeeld:
                <code>data-open-label="Zijbalknavigatie"</code>.
              </li>
              <li>
                Voeg de knoptekst toe binnen een
                <code>data-close-label</code>. Bijvoorbeeld:
                <code>data-open-label="Sluit zijbalknavigatie"</code>.
              </li>
              <li>
                Voeg een kopie van het variabelenbestand
                <code>manon/scss/sidemenu/sidemenu-variables</code> toe aan het project. Voor meer
                informatie zie:
                <a href="../import-styling#styling-override-variables"
                  >Componenten gebruiken en styling aanpassen - De styling van een een component
                  aanpassen</a
                >.
              </li>
              <li>
                Vul de variabele
                <code>--sidemenu-open-button-icon</code> in.
              </li>
              <li>
                Vul de variabele
                <code>--sidemenu-close-button-icon</code> in.
              </li>
              <li>
                Zet de variabele
                <code>--sidemenu-button-font-size</code> op <code>0</code> om de tekst visueel te verbergen.
              </li>
            </ol>
          </li>
        </ul>

        <h4>Visueel voorbeeld</h4>
        <main class="sidemenu">
          <SideMenu>
            <ul>
              <li><a href="">Voorbeeld link 1</a></li>
              <li><a href="">Voorbeeld link 2</a></li>
              <li><a href="">Voorbeeld link 3</a></li>
              <li><a href="">Voorbeeld link 4</a></li>
            </ul>
          </SideMenu>
          <article>
            <div>
              <h1>Lorem ipsum</h1>
              <p>Dolor sit amet conseqtetur adepicing elit</p>
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
  <SideMenu>
      <ul>
          <li><a href="">Voorbeeld link 1</a></li>
          <li><a href="">Voorbeeld link 2</a></li>
          <li><a href="">Voorbeeld link 3</a></li>
          <li><a href="">Voorbeeld link 4</a></li>
      </ul>
  </SideMenu>
  <article>
      <div>
          <h1>Lorem ipsum</h1>
          <p>Dolor sit amet conseqtetur adepicing elit</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus ac turpis convallis vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut fringilla tortor. Nulla ultrices enim sit amet tellus venenatis, lacinia dapibus risus auctor.</p>

          <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Vivamus accumsan dui sed diam placerat, quis ultrices enim viverra.</li>
              <li>Aenean posuere enim a hendrerit viverra.</li>
              <li>Phasellus eu justo ac orci tempus bibendum eu in est.</li>
          </ul>
      </div>
  </article>
</main>
`}
        />
        <h4>HTML-voorbeeld strucuur</h4>
        <Code
          language="html"
          code={`
<main class="sidemenu">

  <SideMenu>
    <!-- Zijmenu content. -->
  </SideMenu>

  <article>
      <!-- Overige pagina content. -->
  </article>

</main>
`}
        />

        <h3 id="sidemenu-expandable">Uitklapbaar zijmenu</h3>
        <p>Het menu is standaard ingeklapt en kan door de gebruiker uitgeklapt worden.</p>
        <h4>Benodigde bestanden</h4>
        <ul>
          <li><code>manon/scss/sidemenu</code></li>
          <li><code>manon/scss/sidemenu-variables</code></li>
          <li><code>manon/js/sidemenu</code></li>
        </ul>

        <h4>Benodigde stappen</h4>
        <ol>
          <li>Voeg de class <code>sidemenu</code> toe aan de <code>main</code>.</li>
          <li>
            Voeg hiervoor de class <code>sidemenu-closed</code> toe aan de
            <code>&lt;main></code>.
          </li>
          <li>
            Voeg direct binnen de <code>main</code> een <code>nav</code> toe met de gewenste inhoud.
          </li>
          <li>
            Groepeer de overige content in een enkel element indien dat nog niet gebeurd is.
            Bijvoorbeeld: <code>div</code>, <code>article</code> of <code>section</code>. Voor meer
            informatie zie: <a href="#sidemenu-structure">Voorbeeld sidemenu structuur</a>.
          </li>
          <li>
            Voeg de referentie naar het Javascript bestand,
            <code>sidemenu.js</code>, toe aan de HTML-pagina's die gebruik dienen te maken van het
            inklapbare zijmenu. Voor meer informatie zie:
            <a href="../add-js">JavaScript referentie toevoegen</a>.
          </li>
        </ol>

        <h4>Aandachtspunten</h4>
        <ul>
          <li>
            De knop wordt automatisch toegevoegd. Deze hoeft dus niet handmatig in de html opgenomen
            te worden.
          </li>
          <li>
            Zonder JavaScript wordt de knop niet toegevoegd en wordt het zijmenu getoond zonder deze
            in te klappen.
          </li>
          <li>
            Indien er gekozen wordt voor een sluit- en open-knop als icoonknop zonder tekst. Voeg
            dan altijd de knoptekst in de taal van het document toe voor screenreader gebruikers.
            <ol>
              <li>
                Voeg de knoptekst toe binnen een
                <code>data-open-label</code>. Bijvoorbeeld:
                <code>data-open-label="Zijbalknavigatie"</code>.
              </li>
              <li>
                Voeg de knoptekst toe binnen een
                <code>data-close-label</code>. Bijvoorbeeld:
                <code>data-open-label="Sluit zijbalknavigatie"</code>.
              </li>
              <li>
                Voeg een kopie van het variabelenbestand
                <code>manon/scss/sidemenu/sidemenu-variables</code> toe aan het project. Voor meer
                informatie zie:
                <a href="../import-styling#styling-override-variables"
                  >Componenten gebruiken en styling aanpassen - De styling van een een component
                  aanpassen</a
                >.
              </li>
              <li>
                Vul de variabele
                <code>--sidemenu-open-button-icon</code> in.
              </li>
              <li>
                Vul de variabele
                <code>--sidemenu-close-button-icon</code> in.
              </li>
              <li>
                Zet de variabele
                <code>--sidemenu-button-font-size</code> op <code>0</code> om de tekst visueel te verbergen.
              </li>
            </ol>
          </li>
        </ul>

        <h4>Aandachtspunten</h4>
        <ul>
          <li>
            Indien het JavaScript niet geladen kan worden is het zijmenu standaard uitgeklapt en
            niet in- of uit-klapbaar.
          </li>
        </ul>

        <h4>Visueel voorbeeld</h4>
        <main class="sidemenu sidemenu-closed">
          <nav
            data-open-label="Zijbalknavigatie"
            data-close-label="Sluit zijbalknavigatie"
            aria-label="Zijbalknavigatie voorbeeld"
          >
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
              <p>Dolor sit amet conseqtetur adepicing elit</p>
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
<main class="sidemenu sidemenu-closed">
<nav data-open-label="Zijbalknavigatie" data-close-label="Sluit zijbalknavigatie" aria-label="Zijbalknavigatie">
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
        <p>Dolor sit amet conseqtetur adepicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus ac turpis convallis vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut fringilla tortor. Nulla ultrices enim sit amet tellus venenatis, lacinia dapibus risus auctor.</p>

        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Vivamus accumsan dui sed diam placerat, quis ultrices enim viverra.</li>
            <li>Aenean posuere enim a hendrerit viverra.</li>
            <li>Phasellus eu justo ac orci tempus bibendum eu in est.</li>
        </ul>
    </div>
</article>
</main>
`}
        />

        <h4>HTML-voorbeeld structuur</h4>
        <Code
          language="html"
          code={`
<main class="sidemenu sidemenu-closed">

  <nav data-open-label="Zijbalknavigatie" data-close-label="Sluit zijbalknavigatie">
      <!-- Zijmenu content -->
  </nav>

  <div>
      <!-- Overige pagina content. -->
  </div>

</main>
`}
        />
      </section>
    </div>
  </article>
</main>
