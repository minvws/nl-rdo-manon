<script module>
  export const breadcrumb = "Taalselectie";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Taalselectie</title>
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
        <h1>Taalselectie</h1>
        <p>Een taalselectie element biedt een verticale keuzelijst die openklapt.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie: <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de benodigde HTML toe. Voor meer informatie zie: <a href="#examples">Voorbeelden</a
            >.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3>Paragraaf</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="language-selector">
          <p id="language-selector-description">Kies een taal:</p>
          <div
            class="language-selector-options"
            aria-describedby="language-selector-description"
            aria-expanded="false"
          >
            <button aria-haspopup="listbox" aria-current="true"> Papiamentu </button>
            <ul role="listbox">
              <li role="option" aria-selected="false">
                <a hreflang="nl" href="language-selector" data-value="Nederlands" lang="nl"
                  >Nederlands</a
                >
              </li>
              <li role="option" aria-selected="false">
                <a hreflang="en" href="language-selector" data-value="English" lang="en">English</a>
              </li>
              <li role="option" aria-selected="false">
                <a hreflang="fy" href="language-selector" data-value="Frysk" lang="fy">Frysk</a>
              </li>
              <li role="option" aria-selected="true" aria-current="true">
                <a hreflang="pap-CW" href="language-selector" data-value="Papiamentu" lang="pap-CW"
                  >Papiamentu</a
                >
              </li>
              <li role="option" aria-selected="false">
                <a hreflang="pap-AW" href="language-selector" data-value="Papiamento" lang="pap-AW"
                  >Papiamento</a
                >
              </li>
            </ul>
          </div>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="language-selector">
  <p id="language-selector-description">Kies een taal:</p>
  <div class="language-selector-options" aria-describedby="language-selector-description" aria-expanded="false">
    <button aria-haspopup="listbox" aria-current="true">
      Papiamentu
    </button>
    <ul role="listbox">
        <li role="option" aria-selected="false">
          <a hreflang="nl" href="#" data-value="Nederlands" lang="nl">Nederlands</a>
        </li>
        <li role="option" aria-selected="false">
          <a hreflang="en" href="#" data-value="English" lang="en">English</a>
        </li>
        <li role="option" aria-selected="false">
          <a hreflang="fy" href="#" data-value="Frysk" lang="fy">Frysk</a>
        </li>
        <li role="option" aria-selected="true" aria-current="true">
          <a hreflang="pap-CW" href="#" data-value="Papiamentu" lang="pap-CW">Papiamentu</a>
        </li>
        <li role="option" aria-selected="false">
          <a hreflang="pap-AW" href="#" data-value="Papiamento" lang="pap-AW">Papiamento</a>
        </li>
    </ul>
  </div>
</div>
`}
        />

        <h4>Structuurvoorbeeld:</h4>
        <Code
          language="html"
          code={`
<header>
  <nav aria-label="Hoofdnavigatie">

    <!-- Navigatie items -->
    <!-- Taalselectie -->

  </nav>
</header>
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
@use "@minvws/manon/language-selector"
`}
        />
      </section>
      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/language-selector-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
