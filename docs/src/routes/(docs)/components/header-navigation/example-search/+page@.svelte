<!--
NB: the @ in this file's filename, +page@.svelte, is there to break out of the
layout at (docs)/+layout.svelte.
See: https://kit.svelte.dev/docs/advanced-routing#advanced-layouts-breaking-out-of-layouts
-->

<script context="module">
  export const breadcrumb = "Header met navigatie met een zoekveld";
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
  <title>Header met navigatie met een zoekveld</title>
</svelte:head>

<header>
  <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

  <nav
    data-open-label="Menu"
    data-close-label="Sluit menu"
    data-media="(min-width:42rem)"
    aria-label="Hoofdnavigatie"
    class="collapsible"
  >
    <button type="submit" class="icon-only icon-cat">Zoeken</button>
    <div class="collapsing-element">
      <SiteNavLinks />

      <div>
        <form class="inline">
          <input type="text" placeholder="Zoeken" />
          <button type="submit" class="icon-only icon-cat">Zoeken</button>
        </form>
      </div>
    </div>
  </nav>
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
        <h1>Header met een zoekveld visueel voorbeeld</h1>

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
      </section>
    </div>
  </article>
</main>

<DefaultFooter />

<style>
  :root {
    /* Header */
    --header-border-width: 0 0 1px 0;
    --header-border-color: #ccc;
    --header-padding-right: var(--page-whitespace-right);
    --header-padding-left: var(--page-whitespace-left);

    /* Content wrapper */
    --header-content-wrapper-position: relative;

    /* Header navigation */
    --header-navigation-position: static;
    --header-navigation-border-width: 0;
    --header-navigation-padding-right: 0;
    --header-navigation-padding-left: 0;

    /* Header navigation content */
    --header-navigation-content-wrapper-gap: 1rem;

    /* Collapsible menu */
    --header-navigation-collapsible-menu-top: 4rem;

    /* Header nav icon */
    --header-navigation-button-hover-font-size: 0;
    --header-navigation-button-hover-background-color: transparent;
    --header-navigation-button-hover-color: var(--button-icon-only-text-color);
  }
</style>
