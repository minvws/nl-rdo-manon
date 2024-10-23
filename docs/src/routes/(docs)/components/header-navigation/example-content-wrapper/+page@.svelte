<!--
NB: the @ in this file's filename, +page@.svelte, is there to break out of the
layout at (docs)/+layout.svelte.
See: https://kit.svelte.dev/docs/advanced-routing#advanced-layouts-breaking-out-of-layouts
-->

<script module>
  export const breadcrumb = "Header content wrapper visueel voorbeeld";
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
  import SiteNavLinks from "$lib/SiteNavLinks.svelte";
  import DefaultFooter from "$lib/DefaultFooter.svelte";
  import { initCollapsible } from "$lib/manon";
  onMount(initCollapsible);
</script>

<svelte:head>
  <title>Header content wrapper visueel voorbeeld</title>
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
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Header visueel voorbeeld</h1>

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
