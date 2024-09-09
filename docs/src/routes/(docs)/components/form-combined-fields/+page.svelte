<script context="module">
  export const breadcrumb = "Gecombineerde velden";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Gecombineerde velden</title>
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
        <h1>Gecombineerde velden</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Groepeer de gewenste velden en voeg de class
            <code>combined-field</code>.
          </li>
        </ol>

        <h2>Suggesties:</h2>
        <ol>
          <li>
            Gecombineerde velden worden vaak gebruikt met icoonknoppen. Voor meer informatie zie:
            <a href="{base}/components/button-icon">Icoonknoppen</a>.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Invoerveld met icoonknop</h3>
        <h4>Visueel voorbeeld:</h4>

        <form action="" method="post">
          <div>
            <label for="voorbeeld-1-date-1-start">Ipsum</label>
            <div class="combined-field">
              <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" type="text" />
              <button class="icon icon-cat">Cat</button>
            </div>
          </div>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
<div>
<label for="voorbeeld-1-date-1-start">Ipsum</label>
<div class="combined-field">
  <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" type="text">
  <button class="icon icon-cat">Cat</button>
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

        <h3>Importeer component via npm</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/form-base";
@use "@minvws/manon/form-combined-field";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p>Dit element heeft zelf geen instelbare variabelen.</p>

        <p>Bijbehorende elementen:</p>
        <ul>
          <li><a href="{base}/components/form-base">form-base</a></li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/form-combined-fields-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
