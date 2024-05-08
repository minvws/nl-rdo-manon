<!--
NB: the @ in this file's filename, +page@.svelte, is there to break out of the
layout at (docs)/+layout.svelte.
See: https://kit.svelte.dev/docs/advanced-routing#advanced-layouts-breaking-out-of-layouts
-->

<script context="module">
  export const breadcrumb = "Header met navigatie met meerdere menus";
</script>

<script>
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
  import SiteNavLinks from "$lib/SiteNavLinks.svelte";
  import DefaultFooter from "$lib/DefaultFooter.svelte";
  import { initCollapsible } from "$lib/manon.js";
  onMount(initCollapsible);
</script>

<svelte:head>
  <title>Header met navigatie met meerdere menus</title>
</svelte:head>

<header>
  <div>
    <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>
    <a href="{base}/" class="logo">
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
          <li><a href="example-multiple-menus">Logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</header>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Header met meerdere menus visueel voorbeeld</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
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
              <li><a href="/">Home</a></li>
              <li><a href="/components">Componenten</a></li>
              <li><a href="/documentation">Documentatie</a></li>
            </ul>

            <ul>
              <li><a href="#">Logout</a></li>
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

<DefaultFooter />

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
