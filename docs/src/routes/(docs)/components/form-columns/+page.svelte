<script context="module">
  export const breadcrumb = "Weergave in kolommen";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Weergave in kolommen</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
      <li><a href="#issues">Bekende problemen</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Weergave in kolommen</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Groepeer de gewenste velden en geef de gewenste hoeveelheid kolommen op. Bijvoorbeeld: <code
              >class="column-2</code
            >.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>

        <form action="" method="post">
          <div class="column-2">
            <div>
              <label for="voorbeeld-1-date-1-start">van</label>
              <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" />
            </div>
            <div>
              <label for="voorbeeld-1-date-1-end">tot</label>
              <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end" />
            </div>
          </div>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="column-2">
    <div>
      <label for="voorbeeld-1-date-1-start">van</label>
      <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" />
    </div>
    <div>
      <label for="voorbeeld-1-date-1-end">tot</label>
      <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end" />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
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

        <h3>Importeer component via NPM</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/form-base";
      `}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p>Dit element heeft zelf geen instelbare variabelen.</p>

        <p>Bijbehorende elementen:</p>
        <ul>
          <li><a href="{base}/components/form-base">form-base</a></li>
          <li>
            Gewenste layout, bijvoorbeeld:
            <ul>
              <li><a href="{base}/components/layout-column-2">layout-column-2</a></li>
              <li><a href="{base}/components/layout-column-3">layout-column-3</a></li>
              <li><a href="{base}/components/layout-column-4">layout-column-4</a></li>
            </ul>
            Voor alle beschikbare opties zie
            <a href="{base}/components#layout">Layout</a>.
          </li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/form-columns-test">Test- en voorbeelden-pagina</a>
      </section>

      <section id="issues">
        <h2>Bekende problemen</h2>

        <ul>
          <li>
            <code>fieldset</code> met een <code>column-*</code>-class met daarbinnen een
            <code>&lt;input type="date"&gt;</code> kunnen buiten de breedte van het formulier lopen.
          </li>
        </ul>
      </section>
    </div>
  </article>
</main>
