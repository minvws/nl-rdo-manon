<script module>
  export const breadcrumb = "Layout twee kolommen";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Layout twee kolommen</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Layout twee kolommen</h1>
        <p>Verdeling 50% - 50% vanaf het ingestelde breekpunt.</p>
      </section>

      <section id="examples">
        <h2>Voorbeeld</h2>
        <h3>Visueel voorbeeld:</h3>
        <div class="column-2">
          <div>
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </div>

          <div>
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </div>
        </div>

        <h2>HTML-voorbeeld:</h2>

        <h3><code>div</code>:</h3>
        <Code
          language="html"
          code={`
<div class="column-2">
  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>
</div>
`}
        />

        <h3><code>section</code>:</h3>
        <Code
          language="html"
          code={`
<section class="column-2">
  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>
</section>
`}
        />

        <h3><code>article</code>:</h3>
        <Code
          language="html"
          code={`
<article class="column-2">
  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>
</article>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>

        <h3>Importeer component via npm</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/layout-base";
@use "@minvws/manon/layout-column-2";
      `}
        />
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/layout-column-2-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
