<script context="module">
  export const breadcrumb = "Layout authenticatie testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Layout authenticatie testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Layout authenticatie testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3><code>div</code></h3>
        <p><code>div</code> met <code>class="layout-authentication"</code>.</p>
        <h4>Visueel voorbeeld:</h4>
        <div class="layout-authentication">
          <form>
            <div>
              <label for="example-1-name-1">User name</label>
              <input type="text" id="example-1-name-1" />
            </div>
            <div>
              <label for="example-1-password-1">Password</label>
              <input type="password" id="example-1-password-1" />
            </div>
            <button type="submit">Lorem ipsum</button>
          </form>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="layout-authentication">
  <form>
    <div>
      <label for="example-1-name-1">User name</label>
      <input type="text" id="example-1-name-1">
    </div>
    <div>
      <label for="example-1-password-1">Password</label>
      <input type="password" id="example-1-password-1">
    </div>
    <button type="submit">Lorem ipsum</button>
  </form>
</div>
`}
        />

        <h3><code>section</code></h3>
        <p><code>section</code> met <code>class="layout-authentication"</code>.</p>
        <h4>Visueel voorbeeld:</h4>
        <section class="layout-authentication">
          <form>
            <div>
              <label for="example-2-name-1">User name</label>
              <input type="text" id="example-2-name-1" />
            </div>
            <div>
              <label for="example-2-password-1">Password</label>
              <input type="password" id="example-2-password-1" />
            </div>
            <button type="submit">Lorem ipsum</button>
          </form>
        </section>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<section class="layout-authentication">
  <form>
    <div>
      <label for="example-2-name-1">User name</label>
      <input type="text" id="example-2-name-1">
    </div>
    <div>
      <label for="example-2-password-1">Password</label>
      <input type="password" id="example-2-password-1">
    </div>
    <button type="submit">Lorem ipsum</button>
  </form>
</section>
`}
        />

        <h3><code>article</code></h3>
        <p><code>article</code> met <code>class="layout-authentication"</code>.</p>
        <h4>Visueel voorbeeld:</h4>
        <article class="layout-authentication">
          <form>
            <div>
              <label for="example-3-name-1">User name</label>
              <input type="text" id="example-3-name-1" />
            </div>
            <div>
              <label for="example-3-password-1">Password</label>
              <input type="password" id="example-3-password-1" />
            </div>
            <button type="submit">Lorem ipsum</button>
          </form>
        </article>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<article class="layout-authentication">
  <form>
    <div>
      <label for="example-3-name-1">User name</label>
      <input type="text" id="example-3-name-1">
    </div>
    <div>
      <label for="example-3-password-1">Password</label>
      <input type="password" id="example-3-password-1">
    </div>
    <button type="submit">Lorem ipsum</button>
  </form>
</article>
`}
        />

        <h3><code>form</code></h3>
        <p><code>form</code> met <code>class="layout-authentication"</code>.</p>
        <h4>Visueel voorbeeld:</h4>
        <form class="layout-authentication">
          <div>
            <label for="example-4-name-1">User name</label>
            <input type="text" id="example-4-name-1" />
          </div>
          <div>
            <label for="example-4-password-1">Password</label>
            <input type="password" id="example-4-password-1" />
          </div>
          <button type="submit">Lorem ipsum</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form class="layout-authentication">
  <div>
    <label for="example-4-name-1">User name</label>
    <input type="text" id="example-4-name-1">
  </div>
  <div>
    <label for="example-4-password-1">Password</label>
    <input type="password" id="example-4-password-1">
  </div>
  <button type="submit">Lorem ipsum</button>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
