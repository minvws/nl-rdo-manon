<script context="module">
  export const breadcrumb = "Notificatie binnen formulier";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Notificatie binnen formulier</title>
</svelte:head>

<main id="main-content">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Notificatie binnen formulier testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h2>Voorbeelden</h2>
        <p>Het basisvoorbeeld met een invoerveld en een verzendknop.</p>

        <h3>Notificatie op invoerveld</h3>
        <h4>Visueel voorbeeld foutmelding:</h4>
        <form action="" method="post">
          <label for="input-error">Input</label>
          <div>
            <input
              id="input-error"
              class="error"
              value="Lorem ipsum"
              aria-describedby="input-error-message"
              aria-invalid="true"
            />
            <p class="error" id="input-error-message">
              <span>Foutmelding:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="input-error">Input</label>
  <div>
    <input id="input-error" class="error" value="Lorem ipsum" aria-describedby="input-error-message" aria-invalid="true">
    <p class="error" id="input-error-message">
        <span>Foutmelding:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h4>Visueel voorbeeld toelichting:</h4>
        <form action="" method="post">
          <label for="input-explanation">Input</label>
          <div>
            <p class="explanation" id="input-explanation-message">
              <span>Toelichting:</span> Lorem ipsum dolor sit amet
            </p>
            <input
              id="input-explanation"
              class="explanation"
              value="Lorem ipsum"
              aria-describedby="input-explanation-message"
              aria-invalid="true"
            />
          </div>
          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="input-explanation">Input</label>
  <div>
    <p class="explanation" id="input-explanation-message">
      <span>Toelichting:</span> Lorem ipsum dolor sit amet
    </p>
    <input id="input-explanation" class="explanation" value="Lorem ipsum" aria-describedby="input-explanation-message" aria-invalid="true">
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h4>Visueel voorbeeld waarschuwing:</h4>
        <form action="" method="post">
          <label for="input-warning">Input</label>
          <div>
            <p class="warning" id="input-warning-message">
              <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
            </p>
            <input
              id="input-warning"
              class="warning"
              value="Lorem ipsum"
              aria-describedby="input-warning-message"
              aria-invalid="true"
            />
          </div>
          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="input-warning">Input</label>
  <div>
    <p class="warning" id="input-warning-message">
      <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
    <input id="input-warning" class="warning" value="Lorem ipsum" aria-describedby="input-warning-message" aria-invalid="true">
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h4>Visueel voorbeeld bevestiging:</h4>
        <form action="" method="post">
          <label for="input-confirmation">Input</label>
          <div>
            <p class="confirmation" id="input-confirmation-message">
              <span>Bevestiging:</span> Lorem ipsum dolor sit amet
            </p>
            <input
              id="input-confirmation"
              class="confirmation"
              value="Lorem ipsum"
              aria-describedby="input-confirmation-message"
              aria-invalid="true"
            />
          </div>
          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="input-confirmation">Input</label>
  <div>
    <p class="confirmation" id="input-confirmation-message">
        <span>Bevestiging:</span> Lorem ipsum dolor sit amet
    </p>
      <input id="input-confirmation" class="confirmation" value="Lorem ipsum" aria-describedby="input-confirmation-message" aria-invalid="true">
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h4>Visueel voorbeeld systeembericht</h4>
        <form action="" method="post">
          <label for="input-system">Input</label>
          <div>
            <p class="system" id="input-system-message">
              <span>Systeembericht:</span> Lorem ipsum dolor sit amet
            </p>
            <input
              id="input-system"
              class="system"
              value="Lorem ipsum"
              aria-describedby="input-system-message"
              aria-invalid="true"
            />
          </div>
          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="input-system">Input</label>
  <div>
    <p class="system" id="input-system-message">
        <span>Systeembericht:</span> Lorem ipsum dolor sit amet
    </p>
    <input id="input-system" class="system" value="Lorem ipsum" aria-describedby="input-system-message" aria-invalid="true">
  </div>
  <button type="submit">Verzend</button>
</form>

`}
        />

        <h3>Link binnen notificatie</h3>
        <h4>Visueel voorbeeld foutmelding:</h4>
        <form action="" method="post">
          <label for="input-link-error">Input</label>
          <div>
            <input
              id="input-link-error"
              class="error"
              value="Lorem ipsum"
              aria-describedby="input-link-error-message"
              aria-invalid="true"
            />
            <p class="error" id="input-link-error-message">
              <span>Foutmelding:</span> Lorem <a href="form-notification-test">ipsum dolor</a> set amet
            </p>
          </div>
          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post">
    <label for="input-link-error">Input</label>
    <div>
        <input id="input-link-error" class="error" value="Lorem ipsum"
            aria-describedby="input-link-error-message" aria-invalid="true">
        <p class="error" id="input-link-error-message">
            <span>Foutmelding:</span> Lorem <a href="ipsum dolor">ipsum dolor</a> set amet
        </p>
    </div>
    <button type="submit">Verzend</button>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
