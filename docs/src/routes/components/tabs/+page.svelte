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
  <article class="visually-grouped">
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

      <section id="variables">
        <h2>Instelbare variabelen</h2>

        <h3>CSS</h3>
        <p>
          Overzicht van de beschikbare variabelen om te kunnen gebruiken binnen de CSS van jouw
          project. Kies en gebruik de benodigde variabelen.
        </p>
        <Code
          language="css"
          code={`
:root {
  --tabs-border-top-width: ;
  --tabs-border-right-width: ;
  --tabs-border-bottom-width: ;
  --tabs-border-left-width: ;
  --tabs-border-style: ;
  --tabs-border-color: ;
  --tabs-background-color: ;
  --tabs-gap: ;

  /* List item */
  --tabs-item-border-width: ;
  --tabs-item-border-style: ;
  --tabs-item-border-color: ;
  --tabs-item-text-color: ;
  --tabs-item-line-height: ;
  --tabs-item-background-color: ;
  --tabs-item-text-decoration: ;
  --tabs-item-font-weight: ;

  /* List item hover */
  --tabs-item-hover-border-width: ;
  --tabs-item-hover-border-style: ;
  --tabs-item-hover-border-color: ;
  --tabs-item-hover-text-color: ;
  --tabs-item-hover-background-color: ;
  --tabs-item-hover-font-weight: ;

  /* List item active */
  --tabs-item-active-border-width: ;
  --tabs-item-active-border-style: ;
  --tabs-item-active-border-color: ;
  --tabs-item-active-text-color: ;
  --tabs-item-active-background-color: ;
  --tabs-item-padding: ;
  --tabs-item-active-font-weight: ;

  /* List item active hover */
  --tabs-item-active-hover-border-width: ;
  --tabs-item-active-hover-border-style: ;
  --tabs-item-active-hover-border-color: ;
  --tabs-item-active-hover-text-color: ;
  --tabs-item-active-hover-background-color: ;
  --tabs-item-active-hover-font-weight: ;
}
`}
        />
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/tabs-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
