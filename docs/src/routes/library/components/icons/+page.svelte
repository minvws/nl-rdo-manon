<script module>
  export const breadcrumb = "Iconen";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";

  const icons = [
    "home",
    "search",
    "hamburger",
    "close",
    "questionmark",
    "sort",
    "ascending",
    "descending",
    "chevron-up",
    "chevron-down",
    "chevron-left",
    "chevron-right",
    "chevron-light-up",
    "chevron-light-down",
    "chevron-light-left",
    "chevron-light-right",
    "check",
    "download",
    "heart",
    "lock-closed",
    "on-off",
    "outgoing",
    "reset",
    "smartphone",
    "to-top",
    "trash",
    "user",
  ];
</script>

<svelte:head>
  <title>Iconen</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#usage">Iconen gebruiken</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#available-icons">Beschikbare iconen</a></li>
      <li><a href="#add-other-icons">Andere iconen toevoegen</a></li>
    </ul>
  </SideMenu>
  <article>
    <h1 class="page-title">Iconen</h1>
    <div class="content-wrapper">
      <section id="introduction">
        <p>
          Voor het toevoegen van iconen binnen de website kan gebruik gemaakt worden van een
          icoon-lettertype via de classes <code>icon</code> en
          <code>icon-{"{naam}"}</code>.
        </p>
        <p>
          Standaard maken deze classes gebruik van het meegeleverde icoon-lettertype van het thema.
          Zie <a href="#available-icons">beschikbare iconen</a> voor meer informatie over deze
          standaard iconen. Daarnaast is het mogelijk om applicatie-specifieke iconen toe te voegen.
          Zie hiervoor <a href="#add-other-icons">andere iconen toevoegen</a>.
        </p>
      </section>
      <section id="usage">
        <h2>Iconen gebruiken</h2>
        <p>
          Iconen kunnen toegepast worden op allerlei HTML-elementen, waaronder <code>span</code>,
          <code>a</code>, <code>p</code> en <code>button</code>.
        </p>
        <h3>Benodigde stappen</h3>
        <ol>
          <li>Voeg de <code>icon</code> class toe aan het element.</li>
          <li>
            Voeg een <code>icon-{"{naam}"}</code> class toe, bijvoorbeeld
            <code>icon-check</code>
            om het <span class="icon icon-check">check</span>-icoon te gebruiken.
          </li>
          <li>
            Voeg een toegankelijke naam toe binnen het element. Deze wordt visueel verborgen, maar
            is belangrijk voor screenreader-gebruikers en voor wanneer CSS niet geladen kan worden.
          </li>
        </ol>
      </section>
      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3><code>span</code></h3>
        <h4>Visueel voorbeeld</h4>
        <span class="icon icon-user">Gebruiker</span>
        <h4>HTML-voorbeeld</h4>
        <Code language="html" code={`<span class="icon icon-user">Gebruiker</span>`} />

        <h3>Icoon binnen link<code>a</code></h3>
        <h4>Visueel voorbeeld</h4>
        <a href="{base}/"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a>
        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`<a href="{base}/"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a>`}
        />

        <h3><code>button</code></h3>
        <h4>Visueel voorbeeld pseudo-element op button</h4>
        <p class="warning">
          <span class="notification-type">
            <span class="icon icon-warning" aria-hidden="true"></span>
            Waarschuwing
          </span>
          Het voorbeeld met een pseudo-element direct op button wordt uitgefaseerd omdat het niet de voorkeur
          heeft omwille van toegankelijkheid. Gebruik in plaats hiervan een van de overige voorbeelden.
        </p>
        <button>
          <span class="icon icon-on-off" aria-label="Aan- of uitschakelen"></span>
        </button>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<button>
  <span class="icon icon-on-off" aria-label="Aan- of uitschakelen"></span>
</button>
          `}
        />

        <h4>Visueel voorbeeld <code>button</code> met <code>span</code></h4>
        <button>
          <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
        </button>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<button>
  <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
</button>
          `}
        />

        <h3><code>svg</code></h3>
        <p>
          Voorbeelden met een svg-icoon uit de <a href="https://tabler.io/icons" rel="external"
            >tabler iconen set</a
          >.
        </p>

        <p>Aandachtspunten:</p>
        <ul>
          <li>
            Als het icoon puur decoratief is, kan deze verborgen worden voor
            screenreader-gebruikers. Dit kan doormiddel van een <code>aria-hidden="true"</code> op de
            svg.
          </li>
          <li>
            Als het icoon informatief is dient deze een kort en duidelijk label te krijgen als
            alternatief voor screenreader-gebruikers. Bijvoorbeeld:
            <code>aria-label="Gebruikersprofiel"</code>. Het icoon dient in dit geval ook
            <code>role="img"</code> te krijgen.
          </li>
        </ul>

        <h4>Visueel voorbeeld informatief icoon</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-user"
          role="img"
          aria-label="Gebruikersprofiel"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </svg>
        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-user"
  role="img"
  aria-label="Gebruikersprofiel">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
</svg>
          `}
        />

        <h3><code>svg</code> binnen een link</h3>
        <h4>Visueel voorbeeld</h4>

        <a href="{base}/library/components/icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-user"
            aria-hidden="true"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
              d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
            /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg
          >
          Inloggen
        </a>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<a href="{base}/library/components/icons">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-user"
    aria-hidden="true">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/>
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  </svg>
  Inloggen
</a>
          `}
        />

        <h3><code>svg</code> binnen een <code>button</code></h3>
        <h4>Visueel voorbeeld</h4>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-power"
            aria-hidden="true"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
              d="M7 6a7.75 7.75 0 1 0 10 0"
            /><path d="M12 4l0 8" /></svg
          >
          Aan- of uitschakelen
        </button>
        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-power"
    aria-hidden="true">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 6a7.75 7.75 0 1 0 10 0"/>
    <path d="M12 4l0 8" />
    </svg>
  Aan- of uitschakelen
</button>
          `}
        />

        <h3><code>span</code> met svg-icoon</h3>
        <h4>Visueel voorbeeld</h4>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-user"
            aria-hidden="true"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
              d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
            /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
          Inloggen
        </span>
        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-user"
    aria-hidden="true">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/>
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  </svg>
  Inloggen
</span>
          `}
        />
      </section>

      <section id="available-icons">
        <h2>Beschikbare iconen</h2>
        <p>
          De thema's worden geleverd met een icoon-lettertype en met <code>icon-{"{naam}"}</code>
          classes voor een set standaard iconen:
        </p>
        <ul id="default-iconset" class="background-color-offset grid-iconset">
          {#each icons as icon}
            <li>
              <span class="icon icon-{icon}" aria-hidden="true"></span>
              <code lang="en">{icon}</code>
            </li>
          {/each}
        </ul>
        <p>
          Elk thema zou ernaar moeten streven de iconen in deze set te implementeren. Iconen die in
          een thema niet beschikbaar zijn, moeten door het thema als &#x25A1; (het unicode-character <code
            >U+25A1</code
          > <span lang="en">"missing glyph"</span>) aangeboden worden. Extra iconen kunnen als
          aparte module aangeboden worden.
        </p>
      </section>
      <section id="add-other-icons">
        <h2>Andere iconen toevoegen</h2>
        <p>
          Er zijn twee manieren om iconen te gebruiken die niet beschikbaar zijn in de icoon-sets
          van het thema:
        </p>
        <ul>
          <li>
            Gebruik een losse <a href="{base}/library/components/image/image-icon"
              >icoon-afbeelding</a
            >.
          </li>
        </ul>
      </section>
    </div>
  </article>
</main>

<style>
  #default-iconset {
    padding: 1rem;
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
  #default-iconset li {
    padding: 1rem;
    list-style-type: none;
    background: #fff;
    hyphens: none;
    display: grid;
    grid-template-columns: 1rem auto;
    gap: 0.5rem;
  }
</style>
