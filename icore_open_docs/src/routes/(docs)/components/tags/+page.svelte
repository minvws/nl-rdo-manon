<script context="module">
  export const breadcrumb = "Tags";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Tags</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Tags</h1>
        <p>De mogelijkheid om onderliggende elementen visueel als tags weer te geven.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project.
            <ul>
              <li>
                Voor een overzicht van de benodigde en optionele bestanden zie: <a
                  href="#requirements">Bijbehorende bestanden</a
                >.
              </li>
              <li>
                Voeg de benodigde class toe op de gewenste elementen. Voor meer informatie over het
                implementeren zie de <a href="#examples">voorbeelden</a>.
              </li>
              <li>Voor horizontale weergave voeg de class <code>horizontal-view</code> toe.</li>
              <li>
                Vul de gewenste variabelen in om de uitlijning van horizontaal uitgelijnde tags in
                te stellen. Voor meer informatie zien: <a href="#variables">variabelen</a>
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Tags binnen een lijst</h3>
        <h4>Visueel voorbeeld:</h4>
        <ul class="tags horizontal-view">
          <li class="tags-color-1-light">Lorem ipsum</li>
          <li class="tags-color-2-light">Lorem ipsum</li>
          <li class="tags-color-3-light">Lorem ipsum</li>
        </ul>

        <h4>HTML-Voorbeeld:</h4>
        <Code
          language="html"
          code={`
<ul class="tags horizontal-view">
  <li class="tags-color-1-light">Lorem ipsum</li>
  <li class="tags-color-2-light">Lorem ipsum</li>
  <li class="tags-color-3-light">Lorem ipsum</li>
</ul>
`}
        />

        <h3>Tags binnen een <code>div</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="tags horizontal-view">
          <p class="tags-color-1-light">Lorem ipsum</p>
          <p class="tags-color-2-light">Lorem ipsum</p>
          <p class="tags-color-3-light">Lorem ipsum</p>
        </div>

        <h4>HTML-Voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="tags horizontal-view">
  <p class="tags-color-1-light">Lorem ipsum</p>
  <p class="tags-color-2-light">Lorem ipsum</p>
  <p class="tags-color-3-light">Lorem ipsum</p>
</div>
`}
        />

        <h3>Tags binnen een <code>section</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <section class="tags horizontal-view">
          <p class="tags-color-1-light">Lorem ipsum</p>
          <p class="tags-color-2-light">Lorem ipsum</p>
          <p class="tags-color-3-light">Lorem ipsum</p>
        </section>

        <h4>HTML-Voorbeeld:</h4>
        <Code
          language="html"
          code={`
<section class="tags horizontal-view">
  <p class="tags-color-1-light">Lorem ipsum</p>
  <p class="tags-color-2-light">Lorem ipsum</p>
  <p class="tags-color-3-light">Lorem ipsum</p>
</section>
`}
        />

        <h3>Tags op tabel</h3>
        <p>
          Tabel-elementen visueel weergegeven als tag. Voor het direct aanspreken van een enkel
          element zie: <a href="tags">tags</a>.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <div class="horizontal-scroll">
          <table class="tags">
            <caption>Voorbeeld tag binnen tabel:</caption>
            <thead>
              <tr>
                <th scope="col">Licht</th>
                <th scope="col">Medium</th>
                <th scope="col">Donker</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><p class="tags-color-1-light">Label</p></td>
                <td><p class="tags-color-1-medium">Label</p></td>
                <td><p class="tags-color-1-dark">Label</p></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>HTML-Voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table class="tags">
    <caption>Voorbeeld tag binnen tabel:</caption>
    <thead>
      <tr>
        <th scope="col">Licht</th>
        <th scope="col">Medium</th>
        <th scope="col">Donker</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><p class="tags-color-1-light">Label</p></td>
        <td><p class="tags-color-1-medium">Label</p></td>
        <td><p class="tags-color-1-dark">Label</p></td>
      </tr>
    </tbody>
  </table>
</div>
`}
        />

        <h3>Tags binnen een tabel</h3>
        <p>
          Tabel-elementen visueel weergegeven als tag. Voor het direct aanspreken van een enkel
          element zie: <a href="tags">tags</a>.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <div class="horizontal-scroll">
          <table>
            <caption>Voorbeeld tag binnen tabel:</caption>
            <thead>
              <tr>
                <th scope="col">Licht</th>
                <th scope="col">Medium</th>
                <th scope="col">Donker</th>
              </tr>
            </thead>
            <tbody class="tags">
              <tr>
                <td><p class="tags-color-1-light">Label</p></td>
                <td><p class="tags-color-1-medium">Label</p></td>
                <td><p class="tags-color-1-dark">Label</p></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>HTML-Voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table>
    <caption>Voorbeeld tag binnen tabel:</caption>
    <thead>
      <tr>
        <th scope="col">Licht</th>
        <th scope="col">Medium</th>
        <th scope="col">Donker</th>
      </tr>
    </thead>
    <tbody class="tags">
      <tr>
        <td><p class="tags-color-1-light">Label</p></td>
        <td><p class="tags-color-1-medium">Label</p></td>
        <td><p class="tags-color-1-dark">Label</p></td>
      </tr>
    </tbody>
  </table>
</div>
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

        <h3>Importeer component via NPM</h3>

        <p>
          <strong>Let op:</strong> Tags maakt gebruik van de volgende componenten die ingeladen dienen
          te zijn voor het tags-component.
        </p>
        <ul>
          <li><a href="tag">tag</a></li>
        </ul>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/tag";
@use "@minvws/manon/tags";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p>
          <strong>Let op:</strong> De uitlijning van horizontaal uitgelijnde tags werken alleen in
          combinatie met de class <code>horizontal-view</code>.
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
                <td>--tags-flex-direction</td>
                <td><a href="{base}/documentation/variables#flex-direction">flex-direction</a></td>
                <td>row</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-align-items</td>
                <td><a href="{base}/documentation/variables#align-items">align-items</a></td>
                <td>center</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-justify-content</td>
                <td><a href="{base}/documentation/variables#justify-content">justify-content</a></td
                >
                <td>left</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-flex-wrap</td>
                <td><a href="{base}/documentation/variables#flex-wrap">flex-wrap</a></td>
                <td>wrap</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-gap</td>
                <td><a href="{base}/documentation/variables#gap">gap</a></td>
                <td>0.5rem</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-padding-top</td>
                <td><a href="{base}/documentation/variables#padding-top">padding-top</a></td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-padding-right</td>
                <td><a href="{base}/documentation/variables#padding-right">padding-right</a></td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-padding-bottom</td>
                <td><a href="{base}/documentation/variables#padding-bottom">padding-bottom</a></td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-padding-left</td>
                <td><a href="{base}/documentation/variables#padding-left">padding-left</a></td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-list-style</td>
                <td><a href="{base}/documentation/variables#list-style">list-style</a></td>
                <td>none</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </article>
</main>
