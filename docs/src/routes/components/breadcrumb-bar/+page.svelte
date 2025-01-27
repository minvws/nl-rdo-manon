<script module>
  export const breadcrumb = "Kruimelpad - breadcrumb-bar";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Kruimelpad - breadcrumb-bar</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Kruimelpad - breadcrumb-bar</h1>

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
            Voeg de bijbehorende HTML toe. Voor meer informatie zie: <a
              href="breadcrumb-bar-example">Voorbeelden</a
            >.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3>Paragraaf</h3>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li>
            <a href="breadcrumb-bar-example">Voorbeeldpagina met kruimelpadnavigatie.</a>
          </li>
        </ul>
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
@use "@minvws/manon/breadcrumb-bar";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p>
          <strong>Let op:</strong> De uitlijning van horizontaal uitgelijnde tags werken alleen in
          combinatie met de class <code>horizotal-view</code>.
        </p>

        <h3>CSS</h3>
        <p>
          Overzicht van de beschikbare variabelen om te kunnen gebruiken binnen de CSS van jouw
          project. Kies en gebruik de benodigde variabelen.
        </p>
        <Code
          language="css"
          code={`
:root {
    --breadcrumb-bar-flex-direction: ;
    --breadcrumb-bar-justify-content: ;
    --breadcrumb-bar-align-items: ;
    --breadcrumb-bar-gap: ;
    --breadcrumb-bar-padding-top: ;
    --breadcrumb-bar-padding-right: ;
    --breadcrumb-bar-padding-bottom: ;
    --breadcrumb-bar-padding-left: ;
    --breadcrumb-bar-max-width: ;
    --breadcrumb-bar-background-color: ;
    --breadcrumb-bar-text-color: ;
    --breadcrumb-bar-border-width: ;
    --breadcrumb-bar-border-style: ;
    --breadcrumb-bar-border-color: ;
    --breadcrumb-bar-border-radius: ;
    --breadcrumb-bar-min-height: ;

    /* Hover */
    --breadcrumb-bar-hover-text-color: ;

    /* List */
    --breadcrumb-bar-list-padding: ;
    --breadcrumb-bar-list-gap: ;
    --breadcrumb-bar-list-vertical-align: ;

    /* List item */
    --breadcrumb-bar-list-item-gap: ;

    /* Icon */
    --breadcrumb-bar-icon: ;
    --breadcrumb-bar-icon-font-family: ;
    --breadcrumb-bar-icon-font-size: ;
    --breadcrumb-bar-icon-padding-right: ;
    --breadcrumb-bar-icon-padding-left: ;
    --breadcrumb-bar-icon-margin-left: ;
    --breadcrumb-bar-icon-margin-right: ;

    /* Last item / current page */
    --breadcrumb-bar-list-item-last-child-font-weight: ;

    /* Link */
    --breadcrumb-bar-link-text-decoration: ;
    --breadcrumb-bar-link-white-space: ;

    /* Link hover */
    --breadcrumb-bar-link-hover-text-decoration: ;
}
`}
        />
      </section>
    </div>
  </article>
</main>
