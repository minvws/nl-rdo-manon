<script context="module">
  export const breadcrumb = "Paginering testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Paginering testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Paginering testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h2><code>nav</code> met class pagination</h2>
        <nav class="pagination" aria-label="Paginering" id="nav">
          <ul>
            <li><a href="#nav" aria-label="Ga naar pagina 1" aria-current="true">1</a></li>
            <li><a href="#nav" aria-label="Ga naar pagina 2">2</a></li>
            <li><a href="#nav" aria-label="Ga naar pagina 3">3</a></li>
            <li><a href="#nav" aria-label="Ga naar pagina 4">4</a></li>
            <li><a href="#nav" aria-label="Ga naar pagina 5">5</a></li>
          </ul>
        </nav>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<nav class="pagination" aria-label="Paginering">
<ul>
    <li><a href="#" aria-label="Ga naar pagina 1"aria-current="true">1</a></li>
    <li><a href="#" aria-label="Ga naar pagina 2">2</a></li>
    <li><a href="#" aria-label="Ga naar pagina 3">3</a></li>
    <li><a href="#" aria-label="Ga naar pagina 4">4</a></li>
    <li><a href="#" aria-label="Ga naar pagina 5">5</a></li>
</ul>
</nav>

`}
        />

        <h2><code>nav</code> met class pagination en "vorige" en "volgende links.</h2>
        <nav class="pagination" aria-label="Paginering" id="next-prev">
          <a href="#next-prev" aria-label="Ga naar de vorige pagina" class="adjacent previous"
            >Vorige</a
          >
          <ul>
            <li><a href="#next-prev" aria-label="Ga naar pagina 1">1</a></li>
            <li><a href="#next-prev" aria-label="Ga naar pagina 2" aria-current="true">2</a></li>
            <li><a href="#next-prev" aria-label="Ga naar pagina 3">3</a></li>
            <li><a href="#next-prev" aria-label="Ga naar pagina 4">4</a></li>
            <li><a href="#next-prev" aria-label="Ga naar pagina 5">5</a></li>
          </ul>
          <a href="#next-prev" aria-label="Ga naar de volgende pagina" class="adjacent next"
            >Volgende</a
          >
        </nav>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<nav class="pagination" aria-label="Paginering">
<a href="#" aria-label="Ga naar de vorige pagina" class="adjacent previous">Vorige</a>
<ul>
    <li><a href="#" aria-label="Ga naar pagina 1">1</a></li>
    <li><a href="#" aria-label="Ga naar pagina 2" aria-current="true">2</a></li>
    <li><a href="#" aria-label="Ga naar pagina 3">3</a></li>
    <li><a href="#" aria-label="Ga naar pagina 4">4</a></li>
    <li><a href="#" aria-label="Ga naar pagina 5">5</a></li>
</ul>
<a href="#" aria-label="Ga naar de volgende pagina" class="adjacent next">Volgende</a>
</nav>
`}
        />

        <h2>Uitgeschakelde vorige of volgende link.</h2>
        <nav class="pagination" aria-label="Paginering" id="disabled-next-or-prev">
          <span aria-label="Ga naar de vorige pagina" class="adjacent previous disabled"
            >Vorige</span
          >
          <ul>
            <li>
              <a href="#disabled-next-or-prev" aria-label="Ga naar pagina 1" aria-current="true"
                >1</a
              >
            </li>
            <li><a href="#disabled-next-or-prev" aria-label="Ga naar pagina 2">2</a></li>
            <li><a href="#disabled-next-or-prev" aria-label="Ga naar pagina 3">3</a></li>
            <li><a href="#disabled-next-or-prev" aria-label="Ga naar pagina 4">4</a></li>
            <li><a href="#disabled-next-or-prev" aria-label="Ga naar pagina 5">5</a></li>
          </ul>
          <a
            href="#disabled-next-or-prev"
            aria-label="Ga naar de volgende pagina"
            class="adjacent next">Volgende</a
          >
        </nav>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<nav class="pagination" aria-label="Paginering">
<span aria-label="Ga naar de vorige pagina" class="disabled">Vorige</span>
<ul>
    <li><a href="#" aria-label="Ga naar pagina 1" aria-current="true">1</a></li>
    <li><a href="#" aria-label="Ga naar pagina 2" >2</a></li>
    <li><a href="#" aria-label="Ga naar pagina 3">3</a></li>
    <li><a href="#" aria-label="Ga naar pagina 4">4</a></li>
    <li><a href="#" aria-label="Ga naar pagina 5">5</a></li>
</ul>
<a href="#" aria-label="Ga naar de volgende pagina">Volgende</a>
</nav>

`}
        />

        <h2><code>div</code> met class pagination</h2>
        <div class="pagination" id="div">
          <ul>
            <li><a href="#div" aria-label="Ga naar pagina 1" aria-current="true">1</a></li>
            <li><a href="#div" aria-label="Ga naar pagina 2">2</a></li>
            <li><a href="#div" aria-label="Ga naar pagina 3">3</a></li>
            <li><a href="#div" aria-label="Ga naar pagina 4">4</a></li>
            <li><a href="#div" aria-label="Ga naar pagina 5">5</a></li>
          </ul>
        </div>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<div class="pagination">
<ul>
    <li><a href="#" aria-label="Ga naar pagina 1" aria-current="true">1</a></li>
    <li><a href="#" aria-label="Ga naar pagina 2">2</a></li>
    <li><a href="#" aria-label="Ga naar pagina 3">3</a></li>
    <li><a href="#" aria-label="Ga naar pagina 4">4</a></li>
    <li><a href="#" aria-label="Ga naar pagina 5">5</a></li>
</ul>
</div>
`}
        />

        <h2><code>ul</code> met class pagination</h2>
        <p>
          Stel de variabele: <code>--pagination-justify-content</code> in op <code>flex-start</code>
          om deze visuele weergave te laten werken.
        </p>
        <ul class="pagination" id="ul">
          <li><a href="#ul" aria-label="Ga naar pagina 1" aria-current="true">1</a></li>
          <li><a href="#ul" aria-label="Ga naar pagina 2">2</a></li>
          <li><a href="#ul" aria-label="Ga naar pagina 3">3</a></li>
          <li><a href="#ul" aria-label="Ga naar pagina 4">4</a></li>
          <li><a href="#ul" aria-label="Ga naar pagina 5">5</a></li>
        </ul>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<ul class="pagination">
<li><a href="#" aria-label="Ga naar pagina 1" aria-current="true">1</a></li>
<li><a href="#" aria-label="Ga naar pagina 2">2</a></li>
<li><a href="#" aria-label="Ga naar pagina 3">3</a></li>
<li><a href="#" aria-label="Ga naar pagina 4">4</a></li>
<li><a href="#" aria-label="Ga naar pagina 5">5</a></li>
</ul>

`}
        />

        <h2>Actieve pagina zonder klikbaar element</h2>
        <p>
          Stel de variabele: <code>--pagination-justify-content</code> in op <code>flex-start</code>
          om deze visuele weergave te laten werken.
        </p>
        <ul class="pagination" id="current-not-interactive">
          <li aria-label="Huidige pagina, pagina 1" aria-current="true">1</li>
          <li><a href="#current-not-interactive" aria-label="Ga naar pagina 2">2</a></li>
          <li><a href="#current-not-interactive" aria-label="Ga naar pagina 3">3</a></li>
          <li><a href="#current-not-interactive" aria-label="Ga naar pagina 4">4</a></li>
          <li><a href="#current-not-interactive" aria-label="Ga naar pagina 5">5</a></li>
        </ul>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<ul class="pagination">
<li aria-label="Huidige pagina, pagina 1" aria-current="true">1</li>
<li><a href="#" aria-label="Ga naar pagina 2">2</a></li>
<li><a href="#" aria-label="Ga naar pagina 3">3</a></li>
<li><a href="#" aria-label="Ga naar pagina 4">4</a></li>
<li><a href="#" aria-label="Ga naar pagina 5">5</a></li>
</ul>
`}
        />

        <h2>Actieve pagina zonder klikbaar element: <code>span</code></h2>
        <p>
          Stel de variabele: <code>--pagination-justify-content</code> in op <code>flex-start</code>
          om deze visuele weergave te laten werken.
        </p>
        <ul class="pagination" id="current-span">
          <li><span aria-label="Huidige pagina, pagina 1" aria-current="true">1</span></li>
          <li><a href="#current-span" aria-label="Ga naar pagina 2">2</a></li>
          <li><a href="#current-span" aria-label="Ga naar pagina 3">3</a></li>
          <li><a href="#current-span" aria-label="Ga naar pagina 4">4</a></li>
          <li><a href="#current-span" aria-label="Ga naar pagina 5">5</a></li>
        </ul>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<ul class="pagination">
<li><span aria-label="Huidige pagina, pagina 1" aria-current="true">1</span></li>
<li><a href="#" aria-label="Ga naar pagina 2">2</a></li>
<li><a href="#" aria-label="Ga naar pagina 3">3</a></li>
<li><a href="#" aria-label="Ga naar pagina 4">4</a></li>
<li><a href="#" aria-label="Ga naar pagina 5">5</a></li>
</ul>
`}
        />
      </section>
    </div>
  </article>
</main>
