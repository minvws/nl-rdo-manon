<script context="module">
  export const breadcrumb = "Header voorbeeld met logo";
</script>

<script>
  import SiteNavLinks from "$lib/SiteNavLinks.svelte";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Header voorbeeld met logo</title>
</svelte:head>

<header>
  <div>
    <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>
    <nav
      data-open-label="Menu"
      data-close-label="Sluit menu"
      data-media="(min-width: 30rem)"
      aria-label="Hoofdnavigatie"
      class="collapsible"
    >
      <a href="/" class="logo">
        <img src="$img/cat-white.svg" alt="Placeholder logo" />Manon
      </a>
      <div class="collapsing-element">
        <SiteNavLinks />
      </div>
    </nav>
  </div>
</header>

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
        <h1>Header voorbeeld met logo visueel voorbeeld</h1>

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
  <div>
      <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

      <a href="/" class="logo">
          <img src="/img/logo-white.svg" alt="Placeholder logo">Manon
      </a>

      <nav
      data-open-label="Menu"
      data-close-label="Sluit menu"
      data-media="(min-width: 30rem)"
      aria-label="Hoofdnavigatie"
      class="collapsible">

        <div class="collapsing-element">
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/components" aria-current="page">Componenten</a></li>
            <li><a href="/documentation">Documentatie</a></li>
            </ul>
        </div>
      </nav>
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
  --header-navigation-padding-right: 0;
  --header-navigation-padding-left: 0;
  --header-navigation-position: initial;

  /* Header Content wrapper */
  --header-content-wrapper-position: relative;

  /* Navigation */
  --header-navigation-border-width: 0;
  --header-navigation-width: auto;
  --header-navigation-position: static;

  /* Link styling */
  --header-navigation-link-text-color: white;
  --header-navigation-link-hover-text-color: var(--header-navigation-link-text-color);
  --header-navigation-link-visited-text-color: var(--header-navigation-link-text-color);
  --header-navigation-link-visited-hover-text-color: var(--header-navigation-link-text-color);
  --header-navigation-link-active-text-color: var(--header-navigation-link-text-color);

  /* Menu toggle button */
  --navigation-collapsible-menu-button-background-color: transparent;
  --navigation-collapsible-menu-icon-color: var(--header-navigation-link-text-color);

  /* Collapsible menu */
  --header-navigation-collapsible-menu-top: 4rem;
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
