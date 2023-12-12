<script context="module">
  export const breadcrumb = "Taalselectie testpagina";
</script>

<script>
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
              <li>
                <a hreflang="nl" href="#" role="option" data-value="Nederlands" lang="nl"
                  >Nederlands</a
                >
              </li>
              <li>
                <a hreflang="en" href="#" role="option" data-value="English" lang="en">English</a>
              </li>
              <li>
                <a hreflang="fy" href="#" role="option" data-value="Frysk" lang="fy">Frysk</a>
              </li>
              <li aria-current="true">
                <a hreflang="pap-CW" href="#" role="option" data-value="Papiamentu" lang="pap-CW"
                  >Papiamentu</a
                >
              </li>
              <li>
                <a hreflang="pap-AW" href="#" role="option" data-value="Papiamento" lang="pap-AW"
                  >Papiamento</a
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
        <li>
          <a hreflang="nl" href="#" role="option" data-value="Nederlands" lang="nl">Nederlands</a>
        </li>
        <li>
          <a hreflang="en" href="#" role="option" data-value="English" lang="en">English</a>
        </li>
        <li>
          <a hreflang="fy" href="#" role="option" data-value="Frysk" lang="fy">Frysk</a>
        </li>
        <li aria-current="true">
          <a hreflang="pap-CW" href="#" role="option" data-value="Papiamentu" lang="pap-CW">Papiamentu</a>
        </li>
        <li>
          <a hreflang="pap-AW" href="#" role="option" data-value="Papiamento" lang="pap-AW">Papiamento</a>
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
