<script context="module">
  export const breadcrumb = "Header met logo bovenaan";
</script>

<script>
  import SiteNavLinks from "$lib/SiteNavLinks.svelte";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Header met logo bovenaan</title>
</svelte:head>

<header>
  <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>
  <a href="/" class="logo">
    <img src="$img/logo-white.svg" alt="Placeholder logo" />Manon
  </a>
  <nav
    data-open-label="Menu"
    data-close-label="Sluit menu"
    data-media="(min-width: 30rem)"
    aria-label="Hoofdnavigatie"
    class="collapsible"
  >
    <div class="collapsing-element">
      <SiteNavLinks />
      <ul>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
  </nav>
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
        <h1>Header met logo bovenaan visueel voorbeeld</h1>

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

    <a href="./logo" class="logo">
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
        <li><a href="../../index">Home</a></li>
        <li><a href="../components" aria-current="page">Componenten</a></li>
        <li><a href="../documentation">Documentatie</a></li>
        </ul>

        <ul>
          <li><a href="#">Logout</a></li>
        </ul>
    </div>
  </nav>
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
  --header-padding-right: 0;
  --header-padding-left: 0;
  --header-min-height: 10rem;
  --header-flex-direction: column;
  --header-justify-content: space-between;
  --header-navigation-padding-right: 0;
  --header-navigation-padding-left: 0;

  /* Navigation */
  --header-navigation-border-width: 0;
  --header-navigation-width: auto;
  --header-navigation-padding-left: 1rem;
  --header-navigation-padding-right: 1rem;
  --header-navigation-background-color: #1b1b39;
  --header-navigation-text-color: white;

  /* Content wrapper */
  --header-navigation-content-wrapper-flex-direction: row;
  --header-navigation-content-wrapper-justify-content: flex-start;

  /* Link styling */
  --header-navigation-link-text-color: white;
  --header-navigation-link-hover-text-color: var(--header-navigation-link-text-color);
  --header-navigation-link-visited-text-color: var(--header-navigation-link-text-color);
  --header-navigation-link-visited-hover-text-color: var(--header-navigation-link-text-color);
  --header-navigation-link-active-text-color: var(--header-navigation-link-text-color);

  /* Menu toggle button */
  --navigation-collapsible-menu-button-background-color: transparent;
  --navigation-collapsible-menu-icon-color: var(--header-navigation-link-text-color);
}
`}
        />
      </section>
    </div>
  </article>
</main>
