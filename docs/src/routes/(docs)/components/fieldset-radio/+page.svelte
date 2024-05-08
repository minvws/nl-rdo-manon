<script context="module">
  export const breadcrumb = "Fieldset Radio-selecteerknop - radio";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Fieldset Radio-selecteerknop - radio</title>
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
    <div>
      <section id="introduction">
        <h1>Radio-selecteerknop - <code>radio</code></h1>

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
            <div class="radio">
              <input type="radio" id="radio-example-base" name="standaard-radio" />
              <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
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
          <div class="radio">
            <input type="radio" id="radio-example-base" name="standaard-radio">
            <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
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
              <div class="radio">
                <input type="radio" id="radio-example-required-1" name="voorwaarden" required />
                <label for="radio-example-required-1">verplicht Radio-selecteerknop</label>
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
            <div class="radio">
              <input type="radio" id="radio-example-required-1" name="voorwaarden" required>
              <label for="radio-example-required-1">verplicht Radio-selecteerknop</label>
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
            <div class="radio">
              <input type="radio" id="radio-example-disabled" name="disabled-radio" disabled />
              <label for="radio-example-disabled">Lorem ipsum dolor sit amet</label>
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
        <div class="radio">
            <input type="radio" id="radio-example-disabled" name="disabled-radio" disabled>
            <label for="radio-example-disabled">Lorem ipsum dolor sit amet</label>
        </div>
    </fieldset>
</form>
`}
        />

        <h4>Lijst</h4>
        <form action="" method="post">
          <fieldset>
            <legend>Examples</legend>
            <div class="radio">
              <input type="radio" id="radio-example-list-1" name="standaard-radio" />
              <label for="radio-example-list-1">Lorem ipsum dolor sit amet</label>
            </div>

            <div class="radio">
              <input type="radio" id="radio-example-list-2" name="standaard-radio" />
              <label for="radio-example-list-2">Lorem ipsum dolor sit amet</label>
            </div>

            <div class="radio">
              <input type="radio" id="radio-example-list-3" name="standaard-radio" />
              <label for="radio-example-list-3">Lorem ipsum dolor sit amet</label>
            </div>

            <div class="radio">
              <input type="radio" id="radio-example-list-4" name="standaard-radio" />
              <label for="radio-example-list-4">Lorem ipsum dolor sit amet</label>
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
        <div class="radio">
            <input type="radio" id="radio-example-list-1" name="standaard-radio">
            <label for="radio-example-list-1">Lorem ipsum dolor sit amet</label>
        </div>

        <div class="radio">
            <input type="radio" id="radio-example-list-2" name="standaard-radio">
            <label for="radio-example-list-2">Lorem ipsum dolor sit amet</label>
        </div>

        <div class="radio">
            <input type="radio" id="radio-example-list-3" name="standaard-radio">
            <label for="radio-example-list-3">Lorem ipsum dolor sit amet</label>
        </div>

        <div class="radio">
            <input type="radio" id="radio-example-list-4" name="standaard-radio">
            <label for="radio-example-list-4">Lorem ipsum dolor sit amet</label>
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
              <div class="radio">
                <input type="radio" id="radio-example-list-label-1" name="standaard-radio" />
                <label for="radio-example-list-label-1">Lorem ipsum dolor sit amet</label>
              </div>

              <div class="radio">
                <input type="radio" id="radio-example-list-label-2" name="standaard-radio" />
                <label for="radio-example-list-label-2">Lorem ipsum dolor sit amet</label>
              </div>

              <div class="radio">
                <input type="radio" id="radio-example-list-label-3" name="standaard-radio" />
                <label for="radio-example-list-label-3">Lorem ipsum dolor sit amet</label>
              </div>

              <div class="radio">
                <input type="radio" id="radio-example-list-label-4" name="standaard-radio" />
                <label for="radio-example-list-label-4">Lorem ipsum dolor sit amet</label>
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
            <div class="radio">
                <input type="radio" id="radio-example-list-label-1" name="standaard-radio">
                <label for="radio-example-list-label-1">Lorem ipsum dolor sit amet</label>
            </div>

            <div class="radio">
                <input type="radio" id="radio-example-list-label-2" name="standaard-radio">
                <label for="radio-example-list-label-2">Lorem ipsum dolor sit amet</label>
            </div>

            <div class="radio">
                <input type="radio" id="radio-example-list-label-3" name="standaard-radio">
                <label for="radio-example-list-label-3">Lorem ipsum dolor sit amet</label>
            </div>

            <div class="radio">
                <input type="radio" id="radio-example-list-label-4" name="standaard-radio">
                <label for="radio-example-list-label-4">Lorem ipsum dolor sit amet</label>
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
          <a href="{base}/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>

        <h3>Importeer component via NPM</h3>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/form-fieldset-radio";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <div class="horizontal-scroll">
          <table class="nowrap">
            <caption>Beschikbare instelbare variabelen:</caption>
            <thead>
              <tr>
                <th scope="col">Variabele</th>
                <th scope="col">CSS-attribuut</th>
                <th scope="col">Manon ingestelde waarde</th>
                <th scope="col">Breekpunt</th>
                <th scope="col">Class</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>--fieldset-radio-input-margin-top</td>
                <td><a href="{base}/variables#margin-top">margin-top</a></td>
                <td>0.25rem</td>
                <td>-</td>
                <th rowspan="7" scope="rowgroup">radio</th>
              </tr>

              <tr>
                <td>--fieldset-radio-width</td>
                <td><a href="{base}/variables#width">width</a></td>
                <td>1.25rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--fieldset-radio-height</td>
                <td><a href="{base}/variables#height">height</a></td>
                <td>1.25rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--fieldset-radio-accent-color</td>
                <td><a href="{base}/variables#accent-color">accent-color</a></td>
                <td>var(--branding-color-1, initial)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--fieldset-radio-label-width</td>
                <td><a href="{base}/variables#width">width</a></td>
                <td>auto</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--fieldset-radio-required-margin-bottom</td>
                <td><a href="{base}/variables#margin-bottom">margin-bottom</a></td>
                <td>var(--application-base-gap-small)</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>CSS</h3>
        <p>
          Overzicht van de beschikbare variabelen om te kunnen gebruiken binnen de CSS van jouw
          project. Kies en gebruik de benodigde variabelen.
        </p>
        <Code
          language="css"
          code={`
:root {
    /* radio */
    --fieldset-radio-input-margin-top: ;

    /* Box */
    --fieldset-radio-width: ;
    --fieldset-radio-height: ;
    --fieldset-radio-accent-color: ;

    /* Label */
    --fieldset-radio-label-width: ;

    /* Required */
    --fieldset-radio-required-margin-bottom: ;
}
`}
        />
      </section>
    </div>
  </article>
</main>
