<script context="module">
  export const breadcrumb = "Iconen";
</script>

<script>
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
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Iconen</h1>
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
        <h3><code>button</code></h3>
        <h4>Visueel voorbeeld</h4>
        <button class="icon icon-on-off">Aan- of uitschakelen</button>
        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`<button class="icon icon-on-off">Aan- of uitschakelen</button>`}
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
              <span class="icon icon-{icon}" aria-hidden="true" />
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
          <li>Gebruik een losse <a href="{base}/components/image-icon">icoon-afbeelding</a>.</li>
          <li>
            Voeg een applicatie-specifieke icoon-set toe. Zie <a
              href="{base}/components/icons/add-set">icoon-set toevoegen</a
            > voor instructies.
          </li>
        </ul>
      </section>
      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/icons/test">Test- en voorbeelden-pagina</a>
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
