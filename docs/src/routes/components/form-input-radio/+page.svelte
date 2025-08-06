<script module>
  export const breadcrumb = "Radio-selecteerknop - radio";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Radio-selecteerknop - radio</title>
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
    <section id="introduction">
      <h1>Radio-selecteerknop - <code>radio-button</code></h1>

      <h2>Benodigde stappen:</h2>
      <ol>
        <li>
          Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
          optionele bestanden zie:
          <a href="#requirements">Bijbehorende bestanden</a>.
        </li>
        <li>
          Voeg de bijbehorende HTML toe. Voor meer informatie zie <a href="#examples">Voorbeelden</a
          >.
        </li>
      </ol>
    </section>

    <section id="examples">
      <h2>Voorbeelden</h2>

      <h3>Basis</h3>
      <h4>Visueel voorbeeld:</h4>
      <form action="" method="post">
        <div class="radio">
          <input type="radio" id="radio-example-base" name="standaard-radio" />
          <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
        </div>
      </form>

      <h4>HTML-voorbeeld:</h4>
      <Code
        language="html"
        code={`
<form action="" method="post">
  <div class="radio">
    <input type="radio" id="radio-example-base" name="standaard-radio">
    <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>
`}
      />

      <h3>Verplicht</h3>
      <h4>Visueel voorbeeld:</h4>
      <form action="" method="post">
        <div class="required">
          <span class="nota-bene">Dit veld is verplicht</span>
          <div class="radio">
            <input type="radio" id="radio-button-example-required-1" name="voorwaarden" required />
            <label for="radio-button-example-required-1">verplicht Radio-selecteerknop</label>
          </div>
        </div>
      </form>

      <h4>HTML-voorbeeld:</h4>
      <Code
        language="html"
        code={`
<form action="" method="post">
  <div class="required">
    <span class="nota-bene">Dit veld is verplicht</span>
    <div class="required">
      <input type="radio" id="radio-button-example-required-1" name="voorwaarden" required>
      <label for="radio-button-example-required-1">verplicht Radio-selecteerknop</label>
    </div>
  </div>
</form>
`}
      />

      <h3>Uitgeschakeld</h3>
      <h4>Visueel voorbeeld:</h4>
      <form action="" method="post">
        <div class="radio">
          <input
            type="radio"
            id="radio-button-example-disabled"
            name="disabled-radio-button"
            disabled
          />
          <label for="radio-button-example-disabled">Lorem ipsum dolor sit amet</label>
        </div>
      </form>

      <h4>HTML-voorbeeld:</h4>
      <Code
        language="html"
        code={`
<form action="" method="post">
  <div class="radio">
    <input type="radio" id="radio-button-example-disabled" name="disabled-radio-button" disabled>
    <label for="radio-button-example-disabled">Lorem ipsum dolor sit amet</label>
  </div>
</form>
`}
      />
    </section>

    <section id="requirements">
      <h2>Bijbehorende bestanden</h2>
      <p>
        Voor meer informatie over importeren en instellen van componenten. Zie:
        <a href="{base}/documentation/import-styling">Componenten gebruiken en styling toevoegen</a>
      </p>

      <h3>Aandachtspunten:</h3>
      <ul>
        <li>
          De standaard ingestelde waarden binnen Manon maken gebruik van de <a href="body-text-set"
            >Body text set</a
          >. Om gebruik te maken van deze set. Laad de set eenmalig in voordat overige componenten
          er gebruik van maken. Zie onderstaand voorbeeld voor meer informatie.
        </li>
      </ul>

      <h3>Importeer component via npm</h3>

      <h4>CSS-voorbeeld:</h4>
      <Code
        language="css"
        code={`
@use "@minvws/manon/radio";
`}
      />
    </section>

    <section id="related">
      <h2>Gerelateerde pagina's</h2>
      <a href="{base}/components/form-input-radio-test">Test- en voorbeelden-pagina</a>
    </section>
  </article>
</main>
