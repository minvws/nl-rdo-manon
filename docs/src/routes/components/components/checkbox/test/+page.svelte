<script module>
  export const breadcrumb = "Selectievak testpagina";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Selectievak testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Selectievak testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h4>Basis</h4>
        <form action="" method="post">
          <div class="checkbox">
            <input type="checkbox" id="checkbox-example-1" name="standaard-checkbox" />
            <label for="checkbox-example-1">Lorem ipsum dolor sit amet</label>
          </div>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="checkbox">
    <input type="checkbox" id="checkbox-example-1" name="standaard-checkbox">
    <label for="checkbox-example-1">Lorem ipsum dolor sit amet</label>
  </div>
</form>
`}
        />

        <h4>Verplicht</h4>
        <form action="" method="post">
          <div class="required">
            <span class="nota-bene">Dit veld is verplicht</span>
            <div class="checkbox">
              <input type="checkbox" id="checkbox-example-required-1" name="voorwaarden" required />
              <label for="checkbox-example-required-1">verplicht selectievak</label>
            </div>
          </div>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="required">
    <span class="nota-bene">Dit veld is verplicht</span>
    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-required-1" name="voorwaarden" required>
      <label for="checkbox-example-required-1">verplicht selectievak</label>
    </div>
  </div>
</form>
`}
        />

        <h4>Uitgeschakeld</h4>
        <form action="" method="post">
          <div class="checkbox">
            <input
              type="checkbox"
              id="checkbox-example-disabled"
              name="disabled-checkbox"
              disabled
            />
            <label for="checkbox-example-disabled">Lorem ipsum dolor sit amet</label>
          </div>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="checkbox">
    <input type="checkbox" id="checkbox-example-disabled" name="disabled-checkbox" disabled>
    <label for="checkbox-example-disabled">Lorem ipsum dolor sit amet</label>
  </div>
</form>
`}
        />

        <h4>Lijst</h4>
        <form action="" method="post">
          <fieldset>
            <legend>Examples</legend>
            <div class="checkbox">
              <input type="checkbox" id="checkbox-example-list-1" name="standaard-checkbox" />
              <label for="checkbox-example-list-1">Lorem ipsum dolor sit amet</label>
            </div>

            <div class="checkbox">
              <input type="checkbox" id="checkbox-example-list-2" name="standaard-checkbox" />
              <label for="checkbox-example-list-2">Lorem ipsum dolor sit amet</label>
            </div>

            <div class="checkbox">
              <input type="checkbox" id="checkbox-example-list-3" name="standaard-checkbox" />
              <label for="checkbox-example-list-3">Lorem ipsum dolor sit amet</label>
            </div>

            <div class="checkbox">
              <input type="checkbox" id="checkbox-example-list-4" name="standaard-checkbox" />
              <label for="checkbox-example-list-4">Lorem ipsum dolor sit amet</label>
            </div>
          </fieldset>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
    <fieldset>
        <legend>Examples</legend>
        <div class="checkbox">
            <input type="checkbox" id="checkbox-example-list-1" name="standaard-checkbox">
            <label for="checkbox-example-list-1">Lorem ipsum dolor sit amet</label>
        </div>

        <div class="checkbox">
            <input type="checkbox" id="checkbox-example-list-2" name="standaard-checkbox">
            <label for="checkbox-example-list-2">Lorem ipsum dolor sit amet</label>
        </div>

        <div class="checkbox">
            <input type="checkbox" id="checkbox-example-list-3" name="standaard-checkbox">
            <label for="checkbox-example-list-3">Lorem ipsum dolor sit amet</label>
        </div>

        <div class="checkbox">
            <input type="checkbox" id="checkbox-example-list-4" name="standaard-checkbox">
            <label for="checkbox-example-list-4">Lorem ipsum dolor sit amet</label>
        </div>
    </fieldset>
</form>
`}
        />

        <h4>Lijst met "label"</h4>
        <form action="" method="post">
          <fieldset>
            <legend>Examples</legend>
            <fieldset>
              <legend>List label</legend>
              <div class="checkbox">
                <input
                  type="checkbox"
                  id="checkbox-example-list-label-1"
                  name="standaard-checkbox"
                />
                <label for="checkbox-example-list-label-1">Lorem ipsum dolor sit amet</label>
              </div>

              <div class="checkbox">
                <input
                  type="checkbox"
                  id="checkbox-example-list-label-2"
                  name="standaard-checkbox"
                />
                <label for="checkbox-example-list-label-2">Lorem ipsum dolor sit amet</label>
              </div>

              <div class="checkbox">
                <input
                  type="checkbox"
                  id="checkbox-example-list-label-3"
                  name="standaard-checkbox"
                />
                <label for="checkbox-example-list-label-3">Lorem ipsum dolor sit amet</label>
              </div>

              <div class="checkbox">
                <input
                  type="checkbox"
                  id="checkbox-example-list-label-4"
                  name="standaard-checkbox"
                />
                <label for="checkbox-example-list-label-4">Lorem ipsum dolor sit amet</label>
              </div>
            </fieldset>
          </fieldset>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
    <fieldset>
        <legend>Examples</legend>
        <fieldset>
            <legend>List label</legend>
            <div class="checkbox">
                <input type="checkbox" id="checkbox-example-list-label-1" name="standaard-checkbox">
                <label for="checkbox-example-list-label-1">Lorem ipsum dolor sit amet</label>
            </div>

            <div class="checkbox">
                <input type="checkbox" id="checkbox-example-list-label-2" name="standaard-checkbox">
                <label for="checkbox-example-list-label-2">Lorem ipsum dolor sit amet</label>
            </div>

            <div class="checkbox">
                <input type="checkbox" id="checkbox-example-list-label-3" name="standaard-checkbox">
                <label for="checkbox-example-list-label-3">Lorem ipsum dolor sit amet</label>
            </div>

            <div class="checkbox">
                <input type="checkbox" id="checkbox-example-list-label-4" name="standaard-checkbox">
                <label for="checkbox-example-list-label-4">Lorem ipsum dolor sit amet</label>
            </div>
        </fieldset>
    </fieldset>
</form>
`}
        />

        <h4>Met nota-bene</h4>
        <form action="" method="post">
          <div>
            <div class="checkbox">
              <input type="checkbox" id="checkbox-example-2" name="standaard-checkbox" />
              <label for="checkbox-example-2">Lorem ipsum dolor sit amet</label>
            </div>
            <span class="nota-bene">Lorem ipsum dolor sit amet.</span>
          </div>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
    <div>
        <div class="checkbox">
            <input type="checkbox" id="checkbox-example-2" name="standaard-checkbox">
            <label for="checkbox-example-2">Lorem ipsum dolor sit amet</label>
        </div>
        <span class="nota-bene">Lorem ipsum dolor sit amet.</span>
    </div>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>

<style>
  :root {
    /* Main */
    --main-gap: var(--content-gap);
    --main-padding-top: var(--page-whitespace-top);
    --main-padding-right: var(--page-whitespace-right);
    --main-padding-bottom: var(--page-whitespace-bottom);
    --main-padding-left: var(--page-whitespace-left);

    /* Article */
    --article-gap: var(--content-gap);
    --article-padding-top: 0;
    --article-padding-right: 0;
    --article-padding-bottom: 0;
    --article-padding-left: 0;
  }
</style>
