<script module>
  export const breadcrumb = "Tabbladen";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Tabbladen</title>
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
  <article>
    <div>
      <section id="introduction">
        <h1>Tabbladen</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie: <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Vul de variabelen met de gewenste stijlkeuzes. Voor meer informatie zie het overzicht
            met <a href="#variables">instelbare variabelen</a>.
          </li>
          <li>
            Voeg de class <code>tabs</code> toe aan de gewenste elementen. Voor meer informatie zie:
            <a href="#examples">Voorbeelden</a>.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3 id="tabs-class">Tabbladen</h3>
        <p>Visueel voorbeeld:</p>
        <div class="tabs" id="tabs">
          <ul>
            <li><span aria-current="page">Optie 1</span></li>
            <li><a href="tabs">Optie 2</a></li>
            <li><a href="tabs">Optie 3</a></li>
            <li><a href="tabs">Optie 4</a></li>
          </ul>
        </div>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<div class="tabs">
    <ul>
        <li><span aria-current="page">Optie 1</span></li>
        <li><a href="#">Optie 2</a></li>
        <li><a href="#">Optie 3</a></li>
        <li><a href="#">Optie 4</a></li>
    </ul>
</div>
`}
        />

        <h4><code>aria-current</code> op <code>li</code></h4>
        <div class="tabs" id="li">
          <ul>
            <li aria-current="page"><span>Optie 1</span></li>
            <li><a href="#li">Optie 2</a></li>
            <li><a href="#li">Optie 3</a></li>
            <li><a href="#li">Optie 4</a></li>
          </ul>
        </div>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<div class="tabs">
    <ul>
        <li aria-current="page"><span>Optie 1</span></li>
        <li><a href="#">Optie 2</a></li>
        <li><a href="#">Optie 3</a></li>
        <li><a href="#">Optie 4</a></li>
    </ul>
</div>
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
@use "@minvws/manon/tabs";
`}
        />
      </section>
    </div>
  </article>
</main>
