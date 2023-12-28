<script context="module">
  export const breadcrumb = "Accentkleur op formulierelementen";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Accentkleur op formulierelementen</title>
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
      <p class="warning" role="group" aria-label="waarschuwing">
        <span>Waarschuwing:</span> Dit element maakt gebruik van een nieuw CSS component. Moderne
        browsers geven aan dit element te ondersteunen. Het kan zijn dat de weergave in oude
        browsers anders zal zijn. Voor meer informatie zie:
        <a href="https://caniuse.com/?search=accent-color" rel="external">caniuse.com</a>.
      </p>

      <section id="introduction">
        <h1>Accentkleur op formulierelementen</h1>
        <p>De mogelijkheid om een accentkleur in te stellen. Deze kleur zal getoont worden op:</p>
        <ul>
          <li>Geselecteerde selectievakken</li>
          <li>Geselecteerde radioselectieknoppen</li>
          <li>Voortgangsbalken</li>
          <li><code>range</code></li>
        </ul>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Stel de accentkleur voor het project in binnen
            <code>applicatie-base-variables</code> of specifiek voor fomulierelementen in binnen
            <code>form-accent-color-variables</code>.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Selectievak - <code>checkbox</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div>
            <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" checked />
            <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
          </div>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" checked>
    <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>
`}
        />

        <h3>Radioselectieknop - <code>radio</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div>
            <input type="radio" id="radio-example-base" name="standaard-radio" checked />
            <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
          </div>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <input type="radio" id="radio-example-base" name="standaard-radio" checked>
    <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>
`}
        />

        <h3>Voortgangsbalk</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div class="horizontal-view">
            <label
              for="progress-example"
              role="progressbar"
              aria-busy="true"
              aria-labelledby="progess-example">Progress:</label
            >
            <progress id="progress-example" value="42" max="100">42%</progress>
          </div>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="horizontal-view">
    <label for="progress-example" role="progressbar" aria-busy="true" aria-labelledby="progess-example">Progress:</label>
    <progress id="progress-example" value="42" max="100">42%</progress>
  </div>
</form>
`}
        />

        <h3>Bereik - <code>range</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div class="horizontal-view">
            <label for="range-example">Range</label>
            <input type="range" id="range-example" name="range-example" min="0" max="100" />
          </div>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="horizontal-view">
    <label for="range-example">Range</label>
    <input type="range" id="range-example" name="range-example" min="0" max="100">
  </div>
</form>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>
        <h4>Benodigd</h4>
        <ul>
          <li><code>form/form-accent-color.scss</code></li>
        </ul>

        <h4>Optioneel</h4>
        <ul>
          <li><code>form/form-accent-color-variables.scss</code></li>
        </ul>
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li><a href="{base}/variables#accent-color">accent-color</a></li>
        </ul>

        <p>Bijbehorende elementen:</p>
        <ul>
          <li><a href="{base}/components/form-base">form-base</a></li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/form-accent-color-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
