<script context="module">
  export const breadcrumb = "Header met language selector list";
</script>

<script>
  import SiteNavLinks from "$lib/SiteNavLinks.svelte";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Header met language selector list</title>
</svelte:head>

<header>
  <div>
    <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>
    <a href="/" class="logo">
      <img src="$img/logo-white.svg" alt="Placeholder logo" />Manon
    </a>
    <nav
      data-open-label="Menu"
      data-close-label="Sluit menu"
      data-media="(min-width: 42rem)"
      aria-label="Hoofdnavigatie"
      class="collapsible"
    >
      <div class="collapsing-element">
        <SiteNavLinks />
      </div>
    </nav>
    <div class="language-selector">
      <p>Kies een taal:</p>
      <p class="visually-hidden" id="language-selector-description">Select your language</p>
      <div
        class="language-selector-options"
        aria-describedby="language-selector-description"
        aria-expanded="false"
      >
        <button aria-haspopup="listbox" lang="pap-CW"> Papiamentu </button>
        <ul role="listbox">
          <li>
            <a hreflang="nl" href="." role="option" data-value="Nederlands" lang="nl">Nederlands</a>
          </li>
          <li>
            <a hreflang="en" href="." role="option" data-value="English" lang="en">English</a>
          </li>
          <li>
            <a hreflang="fy" href="." role="option" data-value="Frysk" lang="fy">Frysk</a>
          </li>
          <li aria-current="true">
            <a hreflang="pap-CW" href="." role="option" data-value="Papiamentu" lang="pap-CW"
              >Papiamentu</a
            >
          </li>
          <li>
            <a hreflang="pap-AW" href="." role="option" data-value="Papiamento" lang="pap-AW"
              >Papiamento</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>

<main class="sidemenu" id="main-content" tabindex="-1">
  <nav
    data-open-label="Zijbalknavigatie"
    data-close-label="Sluit zijbalknavigatie"
    aria-label="Document-navigatie"
  >
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </nav>
  <article>
    <div>
      <section id="introduction">
        <h1>Header met language selector list visueel voorbeeld</h1>

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
        <p>Voor het visuele voorbeeld zie de header van deze pagina.</p>
        <h2>HTML-voorbeeld:</h2>
        <Code
          language="html"
          code={`
<header>
  <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

  <a href="/" class="logo">
      <img src="/img/logo-white.svg" alt="Placeholder logo">Manon
  </a>

  <div>
    <nav aria-label="Hoofdnavigatie">
      <div class="collapsing-menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/components">Componenten</a></li>
          <li><a href="/documentation">Documentatie</a></li>
        </ul>
      </div>
    </nav>

    <div class="language-selector">
      <p>Kies een taal:</p>
      <p class="visually-hidden" id="language-selector-description">Select your language</p>
      <div class="language-selector-options" aria-describedby="language-selector-description" aria-expanded="false">
        <button aria-haspopup="listbox">
          Papiamentu
        </button>
        <ul role="listbox">
            <li>
              <a hreflang="nl" href="." role="option" data-value="Nederlands" lang="nl">Nederlands</a>
            </li>
            <li>
              <a hreflang="en" href="." role="option" data-value="English" lang="en">English</a>
            </li>
            <li>
              <a hreflang="fy" href="." role="option" data-value="Frysk" lang="fy">Frysk</a>
            </li>
            <li aria-current="true">
              <a hreflang="pap-CW" href="." role="option" data-value="Papiamentu" lang="pap-CW">Papiamentu</a>
            </li>
            <li>
              <a hreflang="pap-AW" href="." role="option" data-value="Papiamento" lang="pap-AW">Papiamento</a>
            </li>
        </ul>
      </div>
    </div>

    <button class="round">LO</button>
  </div>
</header>
`}
        />

        <h2>CSS-voorbeeld:</h2>
        <p>Ingestelde variabelen voor deze weergave</p>
        <Code
          language="css"
          code={`
:root {
  /* Header */
  --header-padding-right: 1rem;
  --header-padding-left: 1rem;
  --header-min-height: 3rem;
  --header-flex-direction: row;
  --header-justify-content: space-between;
  --header-background-color: #1b1b39;
  --header-navigation-text-color: white;
  --header-navigation-position: initial;

  /* Navigation */
  --header-navigation-border-width: 0;
  --header-navigation-width: auto;

  /* Collapsible menu */
  --navigation-collapsible-menu-menu-order: 1;

  /* Link styling */
  --header-navigation-link-text-color: white;
  --header-navigation-link-hover-text-color: var(--header-navigation-link-text-color);
  --header-navigation-link-visited-text-color: var(--header-navigation-link-text-color);
  --header-navigation-link-visited-hover-text-color: var(--header-navigation-link-text-color);
  --header-navigation-link-active-text-color: var(--header-navigation-link-text-color);

  /* Language selector list */
  --language-selector-list-label-text-color: #fff;

  /* Menu toggle button */
  --navigation-collapsible-menu-button-background-color: transparent;
  --navigation-collapsible-menu-icon-color: var(--header-navigation-link-text-color);
  --navigation-collapsible-menu-button-min-width: 0;
  --navigation-collapsible-menu-button-width: auto;
}
`}
        />
      </section>
    </div>
  </article>
</main>

<style>
  :root {
    /* Content wrapper */
    --header-content-wrapper-position: relative;

    /* Header navigation */
    --header-navigation-position: static;

    /* Collapsible menu */
    --header-navigation-collapsible-menu-top: 4rem;
  }
</style>
