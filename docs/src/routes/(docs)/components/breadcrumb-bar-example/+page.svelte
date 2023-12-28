<script context="module">
  export const breadcrumb = "Kruimelpad voorbeeld";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Kruimelpad voorbeeld</title>
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
        <h1>Header visueel voorbeeld</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
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
<nav class="breadcrumb-bar">
    <div>
        <ul>
            <li><a href="{base}/components">Componenten</a></li>
            <li>
                <a href="{base}/components/breadcrumb-bar" aria-current="page">Kruimelpad - breadcrumb-bar</a>
            </li>
        </ul>
    </div>
</nav>
`}
        />

        <h2>HTML-voorbeeld binnen header:</h2>
        <Code
          language="html"
          code={`
<header>
    <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

    <nav aria-label="Hoofdnavigatie">
        <div>
            <ul>
                <li><a href="{base}/../index">Home</a></li>
                <li><a href="{base}/components">Componenten</a></li>
                <li><a href="{base}/documentation">Documentatie</a></li>
            </ul>
        </div>
    </nav>

    <nav class="breadcrumb-bar">
        <div>
            <ul>
                <li><a href="{base}/components">Componenten</a></li>
                <li>
                    <a href="{base}/components/breadcrumb-bar" aria-current="page">Kruimelpad - breadcrumb-bar</a>
                </li>
            </ul>
        </div>
    </nav>
</header>
`}
        />

        <h2>CSS-voorbeeld:</h2>
        <p>Ingestelde variabelen voor deze weergave</p>
        <Code
          language="css"
          code={`
:root {
    --breadcrumb-bar-flex-direction: column;
    --breadcrumb-bar-justify-content: flex-start;
    --breadcrumb-bar-align-items: center;
    --breadcrumb-bar-gap: 0;
    --breadcrumb-bar-padding-top: 0;
    --breadcrumb-bar-padding-right: var(--page-whitespace-right);
    --breadcrumb-bar-padding-bottom: 0;
    --breadcrumb-bar-padding-left: var(--page-whitespace-left);
    --breadcrumb-bar-max-width: 100%;
    --breadcrumb-bar-background-color: var(--branding-color-accent-5);
    --breadcrumb-bar-text-color: var(--application-base-text-color);
    --breadcrumb-bar-border-width: 0;
    --breadcrumb-bar-border-style: solid;
    --breadcrumb-bar-border-color: transparent;
    --breadcrumb-bar-border-radius: 0;
    --breadcrumb-bar-min-height: 0;
  
    /* Hover */
    --breadcrumb-bar-hover-text-color: var(--application-base-text-color);
  
    /* List */
    --breadcrumb-bar-list-padding: 0;
    --breadcrumb-bar-list-gap: 1rem;
    --breadcrumb-bar-list-vertical-align: center;
  
    /* List item */
    --breadcrumb-bar-list-item-gap: 1rem;
  
    /* Icon */
    --breadcrumb-bar-icon: ">";
    --breadcrumb-bar-icon-font-family: var(--icon-font-family);
    --breadcrumb-bar-icon-font-size: var(--icon-font-size);
    --breadcrumb-bar-icon-padding-right: 0;
    --breadcrumb-bar-icon-padding-left: 0;
    --breadcrumb-bar-icon-margin-left: 0;
    --breadcrumb-bar-icon-margin-right: 0;
  
    /* Last item / current page */
    --breadcrumb-bar-list-item-last-child-font-weight: bold;
  
    /* Link */
    --breadcrumb-bar-link-text-decoration: none;
    --breadcrumb-bar-link-white-space: nowrap;
  
    /* Link hover */
    --breadcrumb-bar-link-hover-text-decoration: none;
}
`}
        />
      </section>
    </div>
  </article>
</main>
