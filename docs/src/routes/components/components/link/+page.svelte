<script module>
  export const breadcrumb = "Link";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Link</title>
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
        <h1>Link</h1>

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
            Voeg de benodigde HTML toe. Voor meer informatie zie: <a href="#examples">Voorbeelden</a
            >.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h4>Visueel voorbeeld:</h4>
        <a href="link">Basis</a>
        <a href="link" class="icon icon-cat">Met <code>::before</code></a>
        <a href="link" class="icon-after icon-cat"
          >Met <code>::after</code><span class="icon icon-cat">Kat icoon</span></a
        >

        <a href="link" class="hover">Hover <code>:hover</code></a>
        <a href="link" class="hover icon icon-cat">Hover met <code>::before:hover</code></a>
        <a href="link" class="hover"
          >Hover met <code>::before:hover</code> <span class="icon icon-cat"></span></a
        >

        <a href="link" class="active">Actieve link</a>
        <a href="link" class="active icon icon-cat">Actieve link met icoon</a>
        <a href="link" class="active"
          >Actieve link met icoon achteraan <span class="icon icon-cat"></span></a
        >
        <a href="link" class="active hover">Actieve link op hover</a>
        <a href="link" class="active hover icon icon-cat">Actieve link met icoon op hover</a>
        <a href="link" class="active hover"
          >Actieve link met icoon achteraan op hover <span class="icon icon-cat"></span></a
        >

        <a href="link" class="focus">Link gefocust</a>
        <a href="link" class="focus icon icon-cat">Link gefocust met icoon</a>
        <a href="link" class="focus"
          >Link gefocust met icoon achteraan <span class="icon icon-cat"></span></a
        >
        <a href="link" class="focus hover">Link gefocust op hover</a>
        <a href="link" class="focus hover icon icon-cat">Link gefocust met icoon op hover</a>
        <a href="link" class="focus hover"
          >Link gefocust met icoon achteraan op hover <span class="icon icon-cat"></span></a
        >

        <a href="link" class="visited">Bezochte link</a>
        <a href="link" class="visited icon icon-cat">Bezochte link met icoon</a>
        <a href="link" class="visited"
          >Bezochte link met icoon achteraan <span class="icon icon-cat"></span></a
        >
        <a href="link" class="visited hover">Bezochte link op hover</a>
        <a href="link" class="visited hover icon icon-cat">Bezochte link met icoon op hover</a>
        <a href="link" class="visited hover"
          >Bezochte link met icoon achteraan op hover <span class="icon icon-cat"></span></a
        >

        <a href="link" rel="external">Externe link</a>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
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
            De standaard ingestelde waarden binnen Manon maken gebruik van de <a
              href="body-text-set">Body text set</a
            >. Om gebruik te maken van deze set. Laad de set eenmalig in voordat overige componenten
            er gebruik van maken. Zie onderstaand voorbeeld voor meer informatie.
          </li>
        </ul>

        <h3>Importeer component via npm</h3>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/link";
`}
        />
      </section>
    </div>
  </article>
</main>
