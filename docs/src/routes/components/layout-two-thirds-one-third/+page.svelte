<script module>
  export const breadcrumb = "Layout";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Layout</title>
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
        <h1>Layout tweederde eenderde</h1>
        <p>Verdeling 66.66% - 33.33% vanaf het ingestelde breekpunt.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie: <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de class <code>two-thirds-one-third</code> toe aan de gewenste componenten. Voor
            meer informatie zie: <a href="#examples">Voorbeelden</a>.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3>Visueel voorbeeld:</h3>

        <div class="two-thirds-one-third">
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

        <h3>HTML-voorbeeld:</h3>

        <h4><code>div</code>:</h4>
        <Code
          language="html"
          code={`
<div class="two-thirds-one-third">
  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>
</div>
`}
        />

        <h4><code>section</code>:</h4>
        <Code
          language="html"
          code={`
<section class="two-thirds-one-third">
  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>
</section>
`}
        />

        <h4><code>article</code>:</h4>
        <Code
          language="html"
          code={`
<article class="two-thirds-one-third">
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

        <h3>Aandachtspunten:</h3>
        <ul>
          <li>
            De standaard ingestelde waarden binnen Manon maken gebruik van de <a href="layout-set"
              >Layout set</a
            >. Om gebruik te maken van deze set. Laad de set eenmalig in voordat overige componenten
            er gebruik van maken. Zie onderstaand voorbeeld voor meer informatie.
          </li>
        </ul>

        <h3>Importeer component via npm</h3>

        <h3>CSS-voorbeeld:</h3>
        <Code
          language="css"
          code={`
/* Layout set */
@use "@minvws/manon/layout-set";

/* Two thirds one third */
@use "@minvws/manon/two-thirds-one-third";
`}
        />
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/layout-two-thirds-one-third-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
