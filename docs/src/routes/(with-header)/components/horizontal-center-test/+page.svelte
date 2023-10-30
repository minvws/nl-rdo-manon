<script context="module">
  export const breadcrumb = "Horizontaal gecentreerd testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Horizontaal gecentreerd testpagina</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#tests">Tests en voorbeelden</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Horizontaal gecentreerd testpagina</h1>
      </section>

      <section id="tests">
        <h2><code>div</code></h2>

        <h3>Visueel voorbeeld:</h3>
        <div class="horizontal-center">
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper odio at mauris
            luctus, vel pharetra arcu egestas.
          </p>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="horizontal-center">
<h1>Lorem ipsum</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper odio at mauris luctus, vel pharetra arcu egestas.</p>
</div>
`}
        />

        <h2><code>section</code></h2>

        <h3>Visueel voorbeeld:</h3>
        <section class="horizontal-center">
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper odio at mauris
            luctus, vel pharetra arcu egestas.
          </p>
        </section>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<section class="horizontal-center">
<h1>Lorem ipsum</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper odio at mauris luctus, vel pharetra arcu egestas.</p>
</section>
`}
        />

        <h2><code>article</code></h2>

        <h3>Visueel voorbeeld:</h3>
        <article class="horizontal-center">
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper odio at mauris
            luctus, vel pharetra arcu egestas.
          </p>
        </article>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<article class="horizontal-center">
<h1>Lorem ipsum</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper odio at mauris luctus, vel pharetra arcu egestas.</p>
</article>
`}
        />

        <h2><code>Formulier</code></h2>

        <h3>Visueel voorbeeld:</h3>
        <form class="background-color-offset horizontal-center">
          <div>
            <label for="example-div-name-1">User name</label>
            <input type="text" id="example-div-name-1" />
          </div>
          <div>
            <label for="example-div-password-1">Password</label>
            <input type="password" id="example-div-password-1" />
          </div>
          <button type="submit">Lorem ipsum</button>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form class="background-color-offset horizontal-center">
<div>
<label for="example-div-name-1">User name</label>
<input type="text" id="example-div-name-1" />
</div>
<div>
<label for="example-div-password-1">Password</label>
<input type="password" id="example-div-password-1" />
</div>
<button type="submit">Lorem ipsum</button>
</form>
`}
        />
      </section>

      <article class="horizontal-center">
        <h2><code>article</code> direct binnen main</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper odio at mauris
          luctus, vel pharetra arcu egestas.
        </p>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<article class="horizontal-center">
<h2><code>article</code> direct binnen main</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper odio at mauris luctus, vel pharetra arcu egestas.</p>
</article>
`}
        />
      </article>

      <section class="horizontal-center">
        <h2><code>section</code> direct binnen main</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper odio at mauris
          luctus, vel pharetra arcu egestas.
        </p>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<section class="horizontal-center">
<h2><code>section</code> direct binnen main</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper odio at mauris luctus, vel pharetra arcu egestas.</p>
</section>
`}
        />
      </section>

      <div class="horizontal-center">
        <h2><code>div</code> direct binnen main</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper odio at mauris
          luctus, vel pharetra arcu egestas.
        </p>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="horizontal-center">
<h2><code>div</code> direct binnen main</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper odio at mauris luctus, vel pharetra arcu egestas.</p>
</div>
`}
        />
      </div>
    </div>
  </article>
</main>
