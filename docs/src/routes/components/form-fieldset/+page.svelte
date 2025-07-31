<script module>
  export const breadcrumb = "Fieldset";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Fieldset</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>
  <article>
    <section id="introduction">
      <h1>Fieldset - <code>fieldset</code></h1>

      <h2>Benodigde stappen:</h2>
      <ol>
        <li>
          Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
          optionele bestanden zie:
          <a href="#requirements">Bijbehorende bestanden</a>.
        </li>
        <li>
          Voeg de benodigde HTML toe. Voor meer informatie zie: <a href="#examples">Voorbeelden</a>.
        </li>
      </ol>
    </section>

    <section id="examples">
      <h2>Voorbeelden</h2>

      <h3>Visueel voorbeeld:</h3>
      <h4>Basis</h4>
      <form action="" method="post">
        <fieldset>
          <legend>Titel</legend>
          <div>
            <label for="example-input-base">Voorbeeld invoerveld</label>
            <input id="example-input-base" name="example-input-base" type="text" />
          </div>
        </fieldset>
        <button type="submit">Verzend</button>
      </form>

      <h3>HTML-voorbeeld:</h3>
      <Code
        language="html"
        code={`
<form action="" method="post">
  <fieldset>
    <legend>Titel</legend>
    <div>
      <label for="example-input-base">Voorbeeld invoerveld</label>
      <input id="example-input-base" name="example-input-base" type="text" />
    </div>
  </fieldset>
  <button type="submit">Verzend</button>
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

      <h3>Importeer component via npm</h3>

      <h4>CSS-voorbeeld:</h4>
      <Code
        language="css"
        code={`
@use "@minvws/manon/fieldset";
`}
      />
    </section>
  </article>
</main>
