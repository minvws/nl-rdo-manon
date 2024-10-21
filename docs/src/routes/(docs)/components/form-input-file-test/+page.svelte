<script module>
  export const breadcrumb = "Bestand testpagina";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Bestand testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Bestand testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <label for="file-example-base">Upload bestand</label>
          <input
            type="file"
            id="file-example-base"
            name="file-example-base"
            accept=".doc, .docx, .pdf"
            multiple
          />
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="file-example-base">Upload bestand</label>
  <input type="file" id="file-example-base" name="file-example-base" accept=".doc, .docx, .pdf" multiple>
</form>
`}
        />

        <h3>Bestand gegroepeerd binnen <code>div</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div>
            <label for="file-example-div">Upload bestand</label>
            <input
              type="file"
              id="file-example-div"
              name="file-example-div"
              accept=".doc, .docx, .pdf"
              multiple
            />
          </div>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <label for="file-example-div">Upload bestand</label>
    <input type="file" id="file-example-div" name="file-example-div" accept=".doc, .docx, .pdf" multiple>
  </div>
</form>
`}
        />

        <h3>Bestand gegroepeerd binnen <code>section</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <section>
            <label for="file-example-section">Upload bestand</label>
            <input
              type="file"
              id="file-example-section"
              name="file-example-section"
              accept=".doc, .docx, .pdf"
              multiple
            />
          </section>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <section>
    <label for="file-example-section">Upload bestand</label>
    <input type="file" id="file-example-section" name="file-example-section" accept=".doc, .docx, .pdf" multiple>
  </section>
</form>
`}
        />

        <h3>Bestand gegroepeerd binnen <code>fieldset</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <fieldset>
            <legend>Bestand-upload binnen een fieldset voorbeeld</legend>
            <label for="file-example-fieldset">Upload bestand</label>
            <input
              type="file"
              id="file-example-fieldset"
              name="file-example-fieldset"
              accept=".doc, .docx, .pdf"
              multiple
            />
          </fieldset>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <h4><code>fieldset</code></h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <fieldset>
    <label for="file-example-fieldset">Upload bestand</label>
    <input type="file" id="file-example-fieldset" name="file-example-fieldset" accept=".doc, .docx, .pdf" multiple>
  </fieldst>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
