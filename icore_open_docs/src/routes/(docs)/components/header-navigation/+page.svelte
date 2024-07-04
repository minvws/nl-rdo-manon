<script context="module">
  export const breadcrumb = "Header";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Header</title>
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
        <h1>Header</h1>
        <p>
          De header-navigation wordt vaak gebruikt als extra navigatiepunt en om aan te geven aan de
          gebruiker dat het einde van de pagina bereikt is.
        </p>

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
        <ul>
          <li><a href="{base}/components/header-navigation/example">Navigatie</a></li>
          <li>
            <a href="{base}/components/header-navigation/example-content-wrapper"
              >Navigatie met content wrapper</a
            >
          </li>
          <li><a href="{base}/components/header-navigation/example-logo">Navigatie en logo</a></li>
          <!-- <li><a href="{base}/components/header-navigation/example-logo-above">Navigatie met Logo bovenaan</a></li> -->
          <li>
            <a href="{base}/components/header-navigation/example-multiple-menus"
              >Navigatie met meerdere menu's</a
            >
          </li>
          <!-- <li>
            <a href="{base}/components/header-navigation/example-language-select-list"
              >Navigatie taalselectie</a
            >
          </li> -->
          <li>
            <a href="{base}/components/header-navigation/example-form-button"
              >Navigatie met formulier knop</a
            >
          </li>
        </ul>
      </section>

      <section id="requirements">
        <h1>Bijbehorende bestanden</h1>
        <p>Voeg de (s)css-bestanden toe aan het project of importeer de bestanden.</p>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>
        <h2>Importeer component via NPM</h2>
        <h3>CSS-voorbeeld:</h3>
        <Code
          language="css"
          code={`
@use "@minvws/manon/header-navigation";
`}
        />
      </section>
    </div>
  </article>
</main>
