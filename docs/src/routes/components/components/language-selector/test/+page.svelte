<script module>
  export const breadcrumb = "Taalselectie testpagina";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Taalselectie testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Taalselectie testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="language-selector">
          <p>Kies een taal:</p>
          <p class="visually-hidden" id="language-selector-description">Select your language</p>
          <div
            class="language-selector-options"
            aria-describedby="language-selector-description"
            aria-expanded="false"
          >
            <button aria-haspopup="listbox" aria-current="true"> Papiamentu </button>
            <ul role="listbox">
              <li role="option" aria-selected="false">
                <a hreflang="nl" href="language-selector-test" data-value="Nederlands" lang="nl"
                  >Nederlands</a
                >
              </li>
              <li role="option" aria-selected="false">
                <a hreflang="en" href="language-selector-test" data-value="English" lang="en"
                  >English</a
                >
              </li>
              <li role="option" aria-selected="false">
                <a hreflang="fy" href="language-selector-test" data-value="Frysk" lang="fy">Frysk</a
                >
              </li>
              <li role="option" aria-selected="true">
                <a
                  hreflang="pap-CW"
                  href="language-selector-test"
                  aria-current="true"
                  data-value="Papiamentu"
                  lang="pap-CW">Papiamentu</a
                >
              </li>
              <li role="option" aria-selected="false">
                <a
                  hreflang="pap-AW"
                  href="language-selector-test"
                  data-value="Papiamento"
                  lang="pap-AW">Papiamento</a
                >
              </li>
            </ul>
          </div>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="language-selector">
  <p>Kies een taal:</p>
  <p class="visually-hidden" id="language-selector-description">Select your language</p>
  <div class="language-selector-options" aria-describedby="language-selector-description" aria-expanded="false">
    <button aria-haspopup="listbox" aria-current="true">
      Papiamentu
    </button>
    <ul role="listbox">
        <li role="option" aria-selected="false">
          <a hreflang="nl" href="#" data-value="Nederlands" lang="nl">Nederlands</a>
        </li>
        <li role="option" aria-selected="false">
          <a hreflang="en" href="#" data-value="English" lang="en">English</a>
        </li>
        <li role="option" aria-selected="false">
          <a hreflang="fy" href="#" data-value="Frysk" lang="fy">Frysk</a>
        </li>
        <li role="option" aria-selected="true" aria-current="true">
          <a hreflang="pap-CW" href="#" data-value="Papiamentu" lang="pap-CW">Papiamentu</a>
        </li>
        <li role="option" aria-selected="false">
          <a hreflang="pap-AW" href="#" data-value="Papiamento" lang="pap-AW">Papiamento</a>
        </li>
    </ul>
  </div>
</div>
`}
        />
      </section>
    </div>
  </article>
</main>
