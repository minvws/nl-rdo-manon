<script module>
  export const breadcrumb = "Onzichtbare fieldset";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Onzichtbare fieldset</title>
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
        <h1>Onzichtbare fieldset</h1>
        <p>
          Visueel onzichtbare fieldset. Waarbij de fieldset toegevoegd is aan de HTML ten behoeve
          van toegankelijkheid maar niet zichtbaar is.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Visueel voorbeeld:</h3>
        <h4>Basis</h4>

        <form action="" method="post">
          <fieldset>
            <legend>Fieldset test</legend>
            <label for="form-example-base">Voorbeeld text input</label>
            <input id="form-example-base" name="form-example-base" type="text" />
            <label for="form-example-base-2">Voorbeeld text input</label>
            <input id="form-example-base-2" name="form-example-base-2" type="text" />
          </fieldset>
          <button type="submit">Verzend</button>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <fieldset>
    <legend>Fieldset test</legend>
    <label for="form-example-base">Voorbeeld text input</label>
    <input
      id="form-example-base"
      name="form-example-base"
      type="text"
    />
    <label for="form-example-base-2">Voorbeeld text input</label>
    <input
      id="form-example-base-2"
      name="form-example-base-2"
      type="text"
    />
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
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>
        <h3>Importeer component via npm</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/form-base";
@use "@minvws/manon/form-fieldset";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li><a href="{base}/documentation/variables#width">width</a></li>
          <li><a href="{base}/documentation/variables#resize">resize</a></li>
          <li><a href="{base}/documentation/variables#min-height">min-height</a></li>
          <li><a href="{base}/documentation/variables#padding">padding</a></li>
          <li><a href="{base}/documentation/variables#font-size">font-size</a></li>
          <li><a href="{base}/documentation/variables#font-family">font-family</a></li>
          <li><a href="{base}/documentation/variables#text-color">text-color</a></li>
          <li>
            <a href="{base}/documentation/variables#background-color">background-color</a>
          </li>
          <li><a href="{base}/documentation/variables#border-width">border-width</a></li>
          <li><a href="{base}/documentation/variables#border-style">border-style</a></li>
          <li><a href="{base}/documentation/variables#border-color">border-color</a></li>
        </ul>

        <p>Bijbehorende elementen:</p>
        <ul>
          <li><a href="{base}/components/form-base">form-base</a></li>
        </ul>
      </section>
    </div>
  </article>
</main>
