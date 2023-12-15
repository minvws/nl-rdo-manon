<script context="module">
  export const breadcrumb = "Paginering";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Paginering</title>
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
        <h1>Paginering</h1>

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
            Voeg de class <code>pagination</code> toe aan de gewenste elementen. Voor meer
            informatie zie: <a href="#examples">Voorbeelden</a>.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3 id="pagination-class">Paginering</h3>
        <p>Visueel voorbeeld:</p>
        <nav class="pagination" aria-label="Paginering">
          <ul>
            <li><a href="#" aria-label="Ga naar pagina 1" aria-current="true">1</a></li>
            <li><a href="#" aria-label="Ga naar pagina 2">2</a></li>
            <li><a href="#" aria-label="Ga naar pagina 3">3</a></li>
            <li><a href="#" aria-label="Ga naar pagina 4">4</a></li>
            <li><a href="#" aria-label="Ga naar pagina 5">5</a></li>
          </ul>
        </nav>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<nav class="pagination" aria-label="Paginering">
    <ul>
        <li><a href="#" aria-label="Ga naar pagina 1"aria-current="true">1</a></li>
        <li><a href="#" aria-label="Ga naar pagina 2">2</a></li>
        <li><a href="#" aria-label="Ga naar pagina 3">3</a></li>
        <li><a href="#" aria-label="Ga naar pagina 4">4</a></li>
        <li><a href="#" aria-label="Ga naar pagina 5">5</a></li>
    </ul>
</nav>

`}
        />

        <h4>Met class <code>pagination</code> en "vorige" en "volgende links.</h4>
        <nav class="pagination" aria-label="Paginering">
          <a href="#" aria-label="Ga naar de vorige pagina" class="adjacent previous">Vorige</a>
          <ul>
            <li><a href="#" aria-label="Ga naar pagina 1">1</a></li>
            <li><a href="#" aria-label="Ga naar pagina 2" aria-current="true">2</a></li>
            <li><a href="#" aria-label="Ga naar pagina 3">3</a></li>
            <li><a href="#" aria-label="Ga naar pagina 4">4</a></li>
            <li><a href="#" aria-label="Ga naar pagina 5">5</a></li>
          </ul>
          <a href="#" aria-label="Ga naar de volgende pagina" class="adjacent next">Volgende</a>
        </nav>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<nav class="pagination" aria-label="Paginering">
    <a href="#" aria-label="Ga naar de vorige pagina" class="adjacent previous">Vorige</a>
    <ul>
        <li><a href="#" aria-label="Ga naar pagina 1">1</a></li>
        <li><a href="#" aria-label="Ga naar pagina 2" aria-current="true">2</a></li>
        <li><a href="#" aria-label="Ga naar pagina 3">3</a></li>
        <li><a href="#" aria-label="Ga naar pagina 4">4</a></li>
        <li><a href="#" aria-label="Ga naar pagina 5">5</a></li>
    </ul>
    <a href="#" aria-label="Ga naar de volgende pagina" class="adjacent next">Volgende</a>
</nav>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>

        <h3>Importeer component via NPM</h3>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/pagination";
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
    --pagination-justify-content: ;
    --pagination-align-items: ;
    --pagination-border-width: ;
    --pagination-border-style: ;
    --pagination-border-color: ;
    --pagination-padding-top: ;
    --pagination-gap: ;
  
    /* List */
    --pagination-list-gap: ;
  
    /* Item */
    --pagination-item-height: ;
    --pagination-item-width: ;
  
    /* Link */
    --pagination-link-background-color: ;
    --pagination-link-text-color: ;
    --pagination-link-border-width: ;
    --pagination-link-border-style: ;
    --pagination-link-border-color: ;
    --pagination-link-border-radius: ;
    --pagination-link-text-decoration: ;
  
    /* Hover */
    --pagination-link-hover-background-color: ;
    --pagination-link-hover-text-color: ;
    --pagination-link-hover-border-width: ;
    --pagination-link-hover-border-style: ;
    --pagination-link-hover-border-color: ;
    --pagination-link-hover-text-decoration: ;
  
    /* Selected - active item */
    --pagination-link-active-background-color: ;
    --pagination-link-active-text-color: ;
  
    /* Adjacent selecotor - Previous and Next */
    --pagination-adjacent-background-color: ;
    --pagination-adjacent-text-color: ;
    --pagination-adjacent-border-width: ;
    --pagination-adjacent-border-style: ;
    --pagination-adjacent-border-color: ;
    --pagination-adjacent-border-radius: ;
    --pagination-adjacent-padding: ;
    --pagination-adjacent-white-space: ;
  
    /* Hover */
    --pagination-adjacent-hover-background-color: ;
    --pagination-adjacent-hover-text-color: ;
    --pagination-adjacent-hover-border-width: ;
    --pagination-adjacent-hover-border-style: ;
    --pagination-adjacent-hover-border-color: ;
  
    /* Icon */
    --pagination-adjacent-icon-font-family: ;
    --pagination-adjacent-icon-font-size: ;
    --pagination-adjacent-icon-padding-right: ;
    --pagination-adjacent-icon-padding-left: ;
  
    /* Previous */
    --pagination-adjacent-previous-padding: ;
    --pagination-previous-icon: ;
    --pagination-previous-icon-font-family: ;
    --pagination-previous-icon-font-size: ;
    --pagination-previous-icon-padding-right: ;
    --pagination-previous-icon-padding-left: ;
    --pagination-previous-icon-margin-left: ;
    --pagination-previous-icon-margin-right: ;
  
    /* Next */
    --pagination-adjacent-next-padding: ;
    --pagination-next-icon: ;
    --pagination-next-icon-font-family: ;
    --pagination-next-icon-font-size: ;
    --pagination-next-icon-padding-right: ;
    --pagination-next-icon-padding-left: ;
    --pagination-next-icon-margin-left: ;
    --pagination-next-icon-margin-right: ;
}
`}
        />
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/pagination-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
