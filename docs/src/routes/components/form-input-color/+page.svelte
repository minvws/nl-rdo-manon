<script module>
  export const breadcrumb = "Kleurselector";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Kleurselector</title>
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
        <h1>Kleurselector</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>voeg <code>type="color"</code> toe aan het invoerveld.</li>
          <li>
            Voeg basiskleurwaarde met een hexidecimalekleurcode aan binnen:
            <code>value</code>. Voorbeeld: <code>value="#ffffff"</code>. De ingevoerde kleur is de
            kleur waarin het selectievak getoont wordt binnen het formulier voordat de gebruiker een
            andere keuze maakt.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Visueel voorbeeld:</h3>
        <h4>direct</h4>
        <form action="" method="post">
          <label for="color-input-1">Selecteer de gewenste kleur</label>
          <input id="color-input-1" name="color-input-1" type="color" value="#ffffff" />

          <button type="submit">Verzend</button>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <h4><code>section</code></h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
<label for="color-input-1">Selecteer de gewenste kleur</label>
<input id="color-input-1" name="color-input-1" type="color" value="#ffffff">

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
@use "@minvws/manon/form-input-color";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p>Dit element heeft zelf geen instelbare variabelen.</p>

        <p>Bijbehorende elementen:</p>
        <ul>
          <li><a href="{base}/components/form-base">form-base</a></li>
          <li><a href="{base}/components/form-input">form-input</a></li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/form-input-color-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
