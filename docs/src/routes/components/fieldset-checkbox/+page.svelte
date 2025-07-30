<script module>
  export const breadcrumb = "Fieldset Selectievak - checkbox";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Fieldset Selectievak - checkbox</title>
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
        <h1>Selectievak - <code>checkbox</code></h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de benodigde HTML toe. Voor meer informatie zie: <a href="#examples">Voorbeelden</a
            >.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Visueel voorbeeld:</h3>
        <h4>Basis</h4>
        <form action="" method="post">
          <fieldset>
            <legend>Examples</legend>
            <div class="checkbox">
              <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
              <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
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
          <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox">
          <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
        </div>
    </fieldset>
</form>
`}
        />

        <h4>Verplicht</h4>
        <form action="" method="post">
          <fieldset>
            <legend>Examples</legend>
            <div class="required">
              <span class="nota-bene">Dit veld is verplicht</span>
              <div class="checkbox">
                <input
                  type="checkbox"
                  id="checkbox-example-required-1"
                  name="voorwaarden"
                  required
                />
                <label for="checkbox-example-required-1">verplicht selectievak</label>
              </div>
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
        <div class="required">
            <span class="nota-bene">Dit veld is verplicht</span>
            <div class="checkbox">
              <input type="checkbox" id="checkbox-example-required-1" name="voorwaarden" required>
              <label for="checkbox-example-required-1">verplicht selectievak</label>
            </div>
        </div>
    </fieldset>
</form>
`}
        />

        <h4>Uitgeschakeld</h4>
        <form action="" method="post">
          <fieldset>
            <legend>Examples</legend>
            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-disabled"
                name="disabled-checkbox"
                disabled
              />
              <label for="checkbox-example-disabled">Lorem ipsum dolor sit amet</label>
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
            <input type="checkbox" id="checkbox-example-disabled" name="disabled-checkbox" disabled>
            <label for="checkbox-example-disabled">Lorem ipsum dolor sit amet</label>
        </div>
    </fieldset>
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
@use "@minvws/manon/checkbox";
@use "@minvws/manon/form-fieldset-checkbox";
`}
        />
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/fieldset-checkbox-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
