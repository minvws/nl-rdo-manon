<script context="module">
  export const breadcrumb = "Knoppen basisweergave";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Knoppen basisweergave</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article id="button-base">
    <div>
      <h1>Basisweergave</h1>
      <section id="button-base-button">
        <h2><code>button</code></h2>
        <h3>Visuele weergave:</h3>

        <button>Lorem ipsum</button>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<button>Lorem ipsum</button>
`}
        />

        <section id="button-base-link-button">
          <h2>Link als button: <code>a</code></h2>
          <h3>Visuele weergave:</h3>

          <a href="#" class="button">Lorem ipsum</a>

          <h3>HTML-voorbeeld:</h3>
          <Code
            language="html"
            code={`
<a href="#" class="button">Lorem ipsum</a>
  `}
          />

          <h2><code>button</code> uitgeschakeld</h2>
          <h3>Visuele weergave:</h3>

          <button disabled>Lorem ipsum</button>

          <h3>HTML-voorbeeld:</h3>
          <Code
            language="html"
            code={`
<button disabled>button primary</button>
`}
          />
        </section>

        <section id="button-base-input">
          <h2><code>input type="button"</code></h2>
          <h3>Visuele weergave:</h3>

          <input type="button" value="Lorem ipsum" />

          <h3>HTML-voorbeeld:</h3>
          <Code
            language="html"
            code={`
<input type="button" value="Lorem ipsum">
`}
          />

          <h2><code>input type="button"</code> uitgeschakeld</h2>
          <h3>Visuele weergave:</h3>

          <input type="button" value="Lorem ipsum" disabled />

          <h3>HTML-voorbeeld:</h3>
          <Code
            language="html"
            code={`
<input type="button" value="Lorem ipsum" disabled>
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
          <h3>Import scss-file</h3>
          <Code
            language="html"
            code={`
@import button-base;
`}
          />

          <h3>Import via npm-package</h3>
          <Code
            language="html"
            code={`
@use "@minvws/manon/button-base";
`}
          />
        </section>

        <section id="variables">
          <h2>Instelbare variabelen</h2>
          <div class="horizontal-scroll">
            <table class="nowrap">
              <caption>Instelbare variabelen tabel:</caption>
              <thead>
                <tr>
                  <th scope="col">Naam</th>
                  <th scope="col">Variabele</th>
                  <th scope="col">CSS-attribuut</th>
                  <th scope="col">Manon ingestelde waarde</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>--button-base-flex</th>
                  <td>--button-base-flex</td>
                  <td><a href="{base}/documentation/variables#display">display</a></td>
                  <td>inline-flex</td>
                </tr>

                <tr>
                  <th>--button-base-gap</th>
                  <td>--button-base-gap</td>
                  <td><a href="{base}/documentation/variables#gap">gap</a></td>
                  <td>0.5rem</td>
                </tr>

                <tr>
                  <th>--button-base-padding-top</th>
                  <td>--button-base-padding-top</td>
                  <td><a href="{base}/documentation/variables#padding-top">padding-top</a></td>
                  <td>0.25rem</td>
                </tr>

                <tr>
                  <th>--button-base-padding-right</th>
                  <td>--button-base-padding-right</td>
                  <td><a href="{base}/documentation/variables#padding-right">padding-right</a></td>
                  <td>1rem</td>
                </tr>

                <tr>
                  <th>--button-base-padding-bottom</th>
                  <td>--button-base-padding-bottom</td>
                  <td><a href="{base}/documentation/variables#padding-bottom">padding-bottom</a></td
                  >
                  <td>0.25rem</td>
                </tr>

                <tr>
                  <th>--button-base-padding-left</th>
                  <td>--button-base-padding-left</td>
                  <td><a href="{base}/documentation/variables#padding-left">padding-left</a></td>
                  <td>1rem</td>
                </tr>

                <tr>
                  <th>--button-base-justify-content</th>
                  <td>--button-base-justify-content</td>
                  <td
                    ><a href="{base}/documentation/variables#justify-content">justify-content</a
                    ></td
                  >
                  <td>center</td>
                </tr>

                <tr>
                  <th>--button-base-min-width</th>
                  <td>--button-base-min-width</td>
                  <td><a href="{base}/documentation/variables#min-width">min-width</a></td>
                  <td>8rem</td>
                </tr>

                <tr>
                  <th>--button-base-min-height</th>
                  <td>--button-base-min-height</td>
                  <td><a href="{base}/documentation/variables#min-height">min-height</a></td>
                  <td>2.75rem</td>
                </tr>

                <tr>
                  <th>--button-base-background-color</th>
                  <td>--button-base-background-color</td>
                  <td
                    ><a href="{base}/documentation/variables#background-color">background-color</a
                    ></td
                  >
                  <td>var(--application-base-accent-color)</td>
                </tr>

                <tr>
                  <th>--button-base-text-color</th>
                  <td>--button-base-text-color</td>
                  <td><a href="{base}/documentation/variables#text-color">color</a></td>
                  <td>var(--application-base-accent-color-text-color)</td>
                </tr>

                <tr>
                  <th>--button-base-border-width</th>
                  <td>--button-base-border-width</td>
                  <td><a href="{base}/documentation/variables#border-width">border-width</a></td>
                  <td>none</td>
                </tr>

                <tr>
                  <th>--button-base-border-style</th>
                  <td>--button-base-border-style</td>
                  <td><a href="{base}/documentation/variables#border-style">border-style</a></td>
                  <td>unset</td>
                </tr>

                <tr>
                  <th>--button-base-border-color</th>
                  <td>--button-base-border-color</td>
                  <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                  <td>transparent</td>
                </tr>

                <tr>
                  <th>--button-base-font-size</th>
                  <td>--button-base-font-size</td>
                  <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                  <td>var(--application-base-font-size)</td>
                </tr>

                <tr>
                  <th>--button-base-line-height</th>
                  <td>--button-base-line-height</td>
                  <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                  <td>var(--application-base-line-height)</td>
                </tr>

                <tr>
                  <th>--button-base-font-weight</th>
                  <td>--button-base-font-weight</td>
                  <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                  <td>var(--application-base-font-weight)</td>
                </tr>

                <tr>
                  <th>--button-base-text-decoration</th>
                  <td>--button-base-text-decoration</td>
                  <td
                    ><a href="{base}/documentation/variables#text-decoration">text-decoration</a
                    ></td
                  >
                  <td>none</td>
                </tr>

                <tr>
                  <th>--button-base-border-radius</th>
                  <td>--button-base-border-radius</td>
                  <td><a href="{base}/documentation/variables#border-radius">border-radius</a></td>
                  <td>var(--application-base-border-radius)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="related">
          <h2>Gerelateerde pagina's</h2>
          <a href="{base}/components/button-test">Test- en voorbeelden-pagina</a>
        </section>
      </section>
    </div>
  </article>
</main>
