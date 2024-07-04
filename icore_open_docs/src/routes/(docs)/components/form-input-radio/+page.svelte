<script context="module">
  export const breadcrumb = "Radio-selecteerknop - radio";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Radio-selecteerknop - radio</title>
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
        <h1>Radio-selecteerknop - <code>radio-button</code></h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de bijbehorende HTML toe. Voor meer informatie zie <a href="#examples"
              >Voorbeelden</a
            >.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div class="radio">
            <input type="radio" id="radio-example-base" name="standaard-radio" />
            <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
          </div>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="radio">
    <input type="radio" id="radio-example-base" name="standaard-radio">
    <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>
`}
        />

        <h3>Verplicht</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div class="required">
            <span class="nota-bene">Dit veld is verplicht</span>
            <div class="radio">
              <input
                type="radio"
                id="radio-button-example-required-1"
                name="voorwaarden"
                required
              />
              <label for="radio-button-example-required-1">verplicht Radio-selecteerknop</label>
            </div>
          </div>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="required">
    <span class="nota-bene">Dit veld is verplicht</span>
    <div class="required">
      <input type="radio" id="radio-button-example-required-1" name="voorwaarden" required>
      <label for="radio-button-example-required-1">verplicht Radio-selecteerknop</label>
    </div>
  </div>
</form>
`}
        />

        <h3>Uitgeschakeld</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div class="radio">
            <input
              type="radio"
              id="radio-button-example-disabled"
              name="disabled-radio-button"
              disabled
            />
            <label for="radio-button-example-disabled">Lorem ipsum dolor sit amet</label>
          </div>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="radio">
    <input type="radio" id="radio-button-example-disabled" name="disabled-radio-button" disabled>
    <label for="radio-button-example-disabled">Lorem ipsum dolor sit amet</label>
  </div>
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

        <h3>Aandachtspunten:</h3>
        <ul>
          <li>
            De standaard ingestelde waarden binnen Manon maken gebruik van de <a
              href="body-text-set">Body text set</a
            >. Om gebruik te maken van deze set. Laad de set eenmalig in voordat overige componenten
            er gebruik van maken. Zie onderstaand voorbeeld voor meer informatie.
          </li>
        </ul>

        <h3>Importeer component via NPM</h3>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/form-radio";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p>
          <strong>Let op:</strong> De uitlijning van horizontaal uitgelijnde tags werken alleen in
          combinatie met de class <code>horizotal-view</code>.
        </p>
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
                <td>--radio-gap</td>
                <td><a href="{base}/documentation/variables#gap">gap</a></td>
                <td>0.75rem</td>
                <td>-</td>
                <th rowspan="7" scope="rowgroup">radio-button</th>
              </tr>

              <tr>
                <td>--radio-align-items</td>
                <td><a href="{base}/documentation/variables#align-items">align-items</a></td>
                <td>center</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--radio-width</td>
                <td><a href="{base}/documentation/variables#width">width</a></td>
                <td>1.25rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--radio-height</td>
                <td><a href="{base}/documentation/variables#height">height</a></td>
                <td>1.25rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--radio-accent-color</td>
                <td><a href="{base}/documentation/variables#accent-color">accent-color</a></td>
                <td>var(--branding-color-1, initial)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--radio-label-width</td>
                <td><a href="{base}/documentation/variables#width">width</a></td>
                <td>auto</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--radio-required-gap</td>
                <td><a href="{base}/documentation/variables#gap">gap</a></td>
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
  /* Radio button */
  --radio-gap: ;
  --radio-align-items: ;

  /* Circle */
  --radio-width: ;
  --radio-height: ;
  --radio-accent-color: ;

  /* Label */
  --radio-label-width: ;

  /* Required */
  --radio-required-gap: ;
}
`}
        />
      </section>
      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/form-input-radio-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
