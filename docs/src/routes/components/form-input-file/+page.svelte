<script module>
  export const breadcrumb = "Bestand";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Bestand</title>
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
        <h1>Bestand</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de <code>&lt;input></code> toe. Zie onderstaand voorbeeld voor meer informatie.
          </li>
        </ol>

        <p class="explanation">
          <strong>Tip:</strong> Om bereik-invoervelden een eigen gekozen kleur mee te geven kan
          gebruik gemaakt worden van
          <a href="{base}/components/form-accent-color">accentkleur op formulierelementen</a>.
        </p>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <label for="file-example">Upload bestand</label>
          <input
            type="file"
            id="file-example"
            name="file-example"
            accept=".doc, .docx, .pdf"
            multiple
          />
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
<label for="file-example">Upload bestand</label>
<input type="file" id="file-example" name="file-example" accept=".doc, .docx, .pdf" multiple>
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
@use "@minvws/manon/form";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p>Dit element heeft zelf geen instelbare variabelen.</p>

        <p>Bijbehorende elementen:</p>
        <ul>
          <li><a href="{base}/components/form">form</a></li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/form-input-file-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
