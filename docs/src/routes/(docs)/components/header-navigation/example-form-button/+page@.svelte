<!--
NB: the @ in this file's filename, +page@.svelte, is there to break out of the
layout at (docs)/+layout.svelte.
See: https://kit.svelte.dev/docs/advanced-routing#advanced-layouts-breaking-out-of-layouts
-->

<script context="module">
  export const breadcrumb = "Header met navigatie met meerdere menus en form button";
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
  <title>Header met navigatie met meerdere menus en form button</title>
</svelte:head>

<header>
  <div>
    <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>
    <nav
      data-open-label="Menu"
      data-close-label="Sluit menu"
      data-media="(min-width: 42rem)"
      aria-label="Hoofdnavigatie"
      class="collapsible"
    >
      <div class="collapsing-element">
        <SiteNavLinks />
        <ul class="actions">
          <li><a href="example-form-button" class="avatar">A</a></li>
          <li>
            <form class="inline">
              <input type="hidden" name="_token" value="" />
              <button type="submit">Logout</button>
            </form>
          </li>
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
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Header met navigatie met meerdere menus en form button</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde HTML toe. Voor meer informatie zie: <a href="#examples">voorbeelden</a
            >.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>
        <p>Voor het visuele voorbeeld zie de header van deze pagina.</p>
        <h3>HTML-voorbeeld:</h3>
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
        class="collapsible"
      >
        <div class="collapsing-element">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/components">Componenten</a></li>
              <li><a href="/documentation">Documentatie</a></li>
            </ul>

            <ul class="actions">
              <li><a href="#" class="avatar">A</a></li>
              <li>
                <form action="http://localhost/logout" method="POST" class="inline">
                  <input type="hidden" name="_token" value="">
                  <button type="submit">Logout</button>
                </form>
              </li>
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
