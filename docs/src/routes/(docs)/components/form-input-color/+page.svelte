<script context="module">
  export const breadcrumb = "Kleurselector";
</script>

<script>
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
  <article>
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
          <a href="../import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>
        <h3>Benodigd</h3>
        <ul>
          <li><code>form/form-base.scss</code></li>
          <li><code>form/form-input.scss</code></li>
        </ul>

        <h3>Optioneel</h3>
        <ul>
          <li><code>form/form-base-variables.scss</code></li>
          <li><code>form/form-input-variables.scss</code></li>
        </ul>
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p>Dit element heeft zelf geen instelbare variabelen.</p>

        <p>Bijbehorende elementen:</p>
        <ul>
          <li><a href="./form-base">form-base</a></li>
          <li><a href="./form-input">form-input</a></li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="./form-input-color-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
