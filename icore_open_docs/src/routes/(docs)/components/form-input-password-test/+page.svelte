<script context="module">
  export const breadcrumb = "Wachtwoord testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Wachtwoord testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Wachtwoord testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <label for="input-password-1">Wachtwoord</label>
          <p class="explanation" id="input-password-1-message">
            <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1 hoofdletter,
            1 kleine letter en 1 cijfer.
          </p>
          <input
            id="input-password-base"
            name="input-password-base"
            pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
            type="password"
            aria-describedby="input-password-base-message"
          />
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="input-password-1">Wachtwoord</label>
  <p class="explanation" id="input-password-1-message">
    <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1 hoofdletter,
    1 kleine letter en 1 cijfer.
  </p>
  <input
    id="input-password-base"
    name="input-password-base"
    pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
    type="password"
    aria-describedby="input-password-base-message"
  />
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>
          Toelichting gegroepeerd met het invoerveld binnen een
          <code>div</code>
        </h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div>
            <label for="input-password-div">Wachtwoord</label>
            <p class="explanation" id="input-password-div-message">
              <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1
              hoofdletter, 1 kleine letter en 1 cijfer.
            </p>
            <input
              id="input-password-div"
              name="input-password-div"
              pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
              type="password"
              aria-describedby="input-password-div-message"
            />
          </div>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <label for="input-password-div">Wachtwoord</label>
    <p class="explanation" id="input-password-div-message">
      <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1
      hoofdletter, 1 kleine letter en 1 cijfer.
    </p>
    <input
      id="input-password-div"
      name="input-password-div"
      pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
      type="password"
      aria-describedby="input-password-div-message"
    />
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Gegroepeerd binnen een <code>section</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <section>
            <label for="input-password-section">Wachtwoord</label>
            <p class="explanation" id="input-password-section-message">
              <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1
              hoofdletter, 1 kleine letter en 1 cijfer.
            </p>
            <input
              id="input-password-section"
              name="input-password-section"
              pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
              type="password"
              aria-describedby="input-password-section-message"
            />
          </section>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <section>
    <label for="input-password-section">Wachtwoord</label>
    <p class="explanation" id="input-password-section-message">
      <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1
      hoofdletter, 1 kleine letter en 1 cijfer.
    </p>
    <input
      id="input-password-section"
      name="input-password-section"
      pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
      type="password"
      aria-describedby="input-password-section-message"
    />
  </section>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Gegroepeerd binnen een <code>fieldset</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <fieldset>
            <legend>Wachtwoord binnen fieldset voorbeeld</legend>
            <label for="input-password-fieldset">Wachtwoord</label>
            <p class="explanation" id="input-password-fieldset-message">
              <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1
              hoofdletter, 1 kleine letter en 1 cijfer.
            </p>
            <input
              id="input-password-fieldset"
              name="input-password-fieldset"
              pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
              type="password"
              aria-describedby="input-password-fieldset-message"
            />
          </fieldset>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <fieldset>
    <legend>Wachtwoord binnen fieldset voorbeeld</legend>
    <label for="input-password-fieldset">Wachtwoord</label>
    <p class="explanation" id="input-password-fieldset-message">
      <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1
      hoofdletter, 1 kleine letter en 1 cijfer.
    </p>
    <input
      id="input-password-fieldset"
      name="input-password-fieldset"
      pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
      type="password"
      aria-describedby="input-password-fieldset-message"
    />
  </fieldset>
  <button type="submit">Verzend</button>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
