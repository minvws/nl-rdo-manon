<script context="module">
  export const breadcrumb = "Email";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Email</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Email</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <label for="voorbeeld-email-base">Email</label>
          <input id="voorbeeld-email-base" name="voorbeeld-email-base" type="email" />
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
<label for="voorbeeld-email-base">Email</label>
<input id="voorbeeld-email-base" name="voorbeeld-email-base" type="email">
<button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Input en label gegroepeerd binnen een <code>div</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div>
            <label for="voorbeeld-email-div">Email</label>
            <input id="voorbeeld-email-div" name="voorbeeld-email-div" type="email" />
          </div>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
<div>
<label for="voorbeeld-email-div">Email</label>
<input id="voorbeeld-email-div" name="voorbeeld-email-div" type="email">
</div>
<button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Input en label gegroepeerd binnen een <code>section</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <section>
            <label for="voorbeeld-email-section">Email</label>
            <input id="voorbeeld-email-section" name="voorbeeld-email-section" type="email" />
          </section>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
<section>
<label for="voorbeeld-email-section">Email</label>
<input id="voorbeeld-email-section" name="voorbeeld-email-section" type="email">
</section>
<button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Input en label gegroepeerd binnen een <code>fieldset</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <fieldset>
            <legend>Voorbeeld emailveld</legend>
            <label for="voorbeeld-email-fieldset">Email</label>
            <input id="voorbeeld-email-fieldset" name="voorbeeld-email-fieldset" type="email" />
          </fieldset>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
<fieldset>
<legend>Voorbeeld emailveld</legend>
<label for="voorbeeld-email-fieldset">Email</label>
<input id="voorbeeld-email-fieldset" name="voorbeeld-email-fieldset" type="email">
</fieldset>
<button type="submit">Verzend</button>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
