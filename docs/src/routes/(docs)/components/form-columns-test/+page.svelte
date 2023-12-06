<script context="module">
  export const breadcrumb = "Weergave in kolommen testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Weergave in kolommen testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Weergave in kolommen testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>column-2</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div class="column-2">
            <div>
              <label for="voorbeeld-invoerveld-1">Voorbeeld invoerveld</label>
              <input
                id="voorbeeld-invoerveld-1"
                name="voorbeeld-invoerveld-1"
                placeholder="voorbeeld invoerveld"
                type="text"
              />
            </div>

            <div>
              <label for="voorbeeld-invoerveld-2">Voorbeeld invoerveld</label>
              <input
                id="voorbeeld-invoerveld-2"
                name="voorbeeld-invoerveld-2"
                placeholder="voorbeeld invoerveld"
                type="text"
              />
            </div>
          </div>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="column-2">
    <div>
      <label for="voorbeeld-invoerveld-1">Voorbeeld invoerveld</label>
      <input id="voorbeeld-invoerveld-1" name="voorbeeld-invoerveld-1" placeholder="voorbeeld invoerveld" type="text">
    </div>

    <div>
      <label for="voorbeeld-invoerveld-2">Voorbeeld invoerveld</label>
      <input id="voorbeeld-invoerveld-2" name="voorbeeld-invoerveld-2" placeholder="voorbeeld invoerveld" type="text">
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>column-2</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <fieldset class="column-2">
            <legend>Column 2 op een <code>fieldset</code></legend>
            <div>
              <label for="voorbeeld-invoerveld-fieldset-1">Voorbeeld invoerveld</label>
              <input
                id="voorbeeld-invoerveld-fieldset-1"
                name="voorbeeld-invoerveld-fieldset-1"
                placeholder="voorbeeld invoerveld"
                type="text"
              />
            </div>

            <div>
              <label for="voorbeeld-invoerveld-fieldset-2">Voorbeeld invoerveld</label>
              <input
                id="voorbeeld-invoerveld-fieldset-2"
                name="voorbeeld-invoerveld-fieldset-2"
                placeholder="voorbeeld invoerveld"
                type="text"
              />
            </div>
          </fieldset>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="column-2">
    <div>
      <label for="voorbeeld-invoerveld-fieldset-1">Voorbeeld invoerveld</label>
      <input id="voorbeeld-invoerveld-fieldset-1" name="voorbeeld-invoerveld-fieldset-1" placeholder="voorbeeld invoerveld" type="text">
    </div>

    <div>
      <label for="voorbeeld-invoerveld-fieldset-2">Voorbeeld invoerveld</label>
      <input id="voorbeeld-invoerveld-fieldset-2" name="voorbeeld-invoerveld-fieldset-2" placeholder="voorbeeld invoerveld" type="text">
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>column-3</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div class="column-3">
            <div>
              <label for="voorbeeld-invoerveld-column-3-1">Voornaam</label>
              <input
                id="voorbeeld-invoerveld-column-3-1"
                name="voorbeeld-invoerveld-column-3-1"
                placeholder="Jan"
                type="text"
              />
            </div>

            <div>
              <label for="voorbeeld-invoerveld-column-3-2">Tussenvoegsel</label>
              <input
                id="voorbeeld-invoerveld-column-3-2"
                name="voorbeeld-invoerveld-column-3-2"
                placeholder="van der"
                type="text"
              />
            </div>

            <div>
              <label for="voorbeeld-invoerveld-column-3-3">Achternaam</label>
              <input
                id="voorbeeld-invoerveld-column-3-3"
                name="voorbeeld-invoerveld-column-3-3"
                placeholder="Zanden"
                type="text"
              />
            </div>
          </div>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="column-3">
    <div>
      <label for="voorbeeld-invoerveld-column-3-1">Voornaam</label>
      <input id="voorbeeld-invoerveld-column-3-1" name="voorbeeld-invoerveld-column-3-1" placeholder="Jan" type="text">
    </div>

    <div>
      <label for="voorbeeld-invoerveld-column-3-2">Tussenvoegsel</label>
      <input id="voorbeeld-invoerveld-column-3-2" name="voorbeeld-invoerveld-column-3-2" placeholder="van der" type="text">
    </div>

    <div>
      <label for="voorbeeld-invoerveld-column-3-3">Achternaam</label>
      <input id="voorbeeld-invoerveld-column-3-3" name="voorbeeld-invoerveld-column-3-3" placeholder="Zanden" type="text">
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>column-3 op <code>fieldset</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <fieldset class="column-3">
            <legend>Column-3 op een <code>fieldset</code></legend>
            <div>
              <label for="voorbeeld-invoerveld-column-3-1">Voornaam</label>
              <input
                id="voorbeeld-invoerveld-column-3-1"
                name="voorbeeld-invoerveld-column-3-1"
                placeholder="Jan"
                type="text"
              />
            </div>

            <div>
              <label for="voorbeeld-invoerveld-column-3-2">Tussenvoegsel</label>
              <input
                id="voorbeeld-invoerveld-column-3-2"
                name="voorbeeld-invoerveld-column-3-2"
                placeholder="van der"
                type="text"
              />
            </div>

            <div>
              <label for="voorbeeld-invoerveld-column-3-3">Achternaam</label>
              <input
                id="voorbeeld-invoerveld-column-3-3"
                name="voorbeeld-invoerveld-column-3-3"
                placeholder="Zanden"
                type="text"
              />
            </div>
          </fieldset>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="column-3">
    <div>
      <label for="voorbeeld-invoerveld-column-3-1">Voornaam</label>
      <input id="voorbeeld-invoerveld-column-3-1" name="voorbeeld-invoerveld-column-3-1" placeholder="Jan" type="text">
    </div>

    <div>
      <label for="voorbeeld-invoerveld-column-3-2">Tussenvoegsel</label>
      <input id="voorbeeld-invoerveld-column-3-2" name="voorbeeld-invoerveld-column-3-2" placeholder="van der" type="text">
    </div>

    <div>
      <label for="voorbeeld-invoerveld-column-3-3">Achternaam</label>
      <input id="voorbeeld-invoerveld-column-3-3" name="voorbeeld-invoerveld-column-3-3" placeholder="Zanden" type="text">
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>column-4</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div class="column-4">
            <div>
              <label for="voorbeeld-invoerveld-column-4-1">Lorem</label>
              <input
                id="voorbeeld-invoerveld-column-4-1"
                name="voorbeeld-invoerveld-column-4-1"
                placeholder="lorem"
                type="text"
              />
            </div>

            <div>
              <label for="voorbeeld-invoerveld-column-4-2">Ipsum</label>
              <input
                id="voorbeeld-invoerveld-column-4-2"
                name="voorbeeld-invoerveld-column-4-2"
                placeholder="ipsum"
                type="text"
              />
            </div>

            <div>
              <label for="voorbeeld-invoerveld-column-4-3">Dolor</label>
              <input
                id="voorbeeld-invoerveld-column-4-3"
                name="voorbeeld-invoerveld-column-4-3"
                placeholder="dolor"
                type="text"
              />
            </div>

            <div>
              <label for="voorbeeld-invoerveld-column-4-4">Set</label>
              <input
                id="voorbeeld-invoerveld-column-4-4"
                name="voorbeeld-invoerveld-column-4-4"
                placeholder="set"
                type="text"
              />
            </div>
          </div>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="column-3">
    <div>
      <label for="voorbeeld-invoerveld-column-4-1">Voornaam</label>
      <input id="voorbeeld-invoerveld-column-4-1" name="voorbeeld-invoerveld-column-4-1" placeholder="Jan" type="text">
    </div>

    <div>
      <label for="voorbeeld-invoerveld-column-4-2">Tussenvoegsel</label>
      <input id="voorbeeld-invoerveld-column-4-2" name="voorbeeld-invoerveld-column-4-2" placeholder="van der" type="text">
    </div>

    <div>
      <label for="voorbeeld-invoerveld-column-4-3">Achternaam</label>
      <input id="voorbeeld-invoerveld-column-4-3" name="voorbeeld-invoerveld-column-4-3" placeholder="Zanden" type="text">
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>column-4 binnen <code>fieldset</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <fieldset class="column-4">
            <legend>Column 4 binnen <code>fieldset</code></legend>
            <div>
              <label for="voorbeeld-invoerveld-column-4-fieldset-1">Lorem</label>
              <input
                id="voorbeeld-invoerveld-column-4-fieldset-1"
                name="voorbeeld-invoerveld-column-4-fieldset-1"
                placeholder="lorem"
                type="text"
              />
            </div>

            <div>
              <label for="voorbeeld-invoerveld-column-4-fieldset-2">Ipsum</label>
              <input
                id="voorbeeld-invoerveld-column-4-fieldset-2"
                name="voorbeeld-invoerveld-column-4-fieldset-2"
                placeholder="ipsum"
                type="text"
              />
            </div>

            <div>
              <label for="voorbeeld-invoerveld-column-4-fieldset-3">Dolor</label>
              <input
                id="voorbeeld-invoerveld-column-4-fieldset-3"
                name="voorbeeld-invoerveld-column-4-fieldset-3"
                placeholder="dolor"
                type="text"
              />
            </div>

            <div>
              <label for="voorbeeld-invoerveld-column-4-fieldset-4">Set</label>
              <input
                id="voorbeeld-invoerveld-column-4-fieldset-4"
                name="voorbeeld-invoerveld-column-4-fieldset-4"
                placeholder="set"
                type="text"
              />
            </div>
          </fieldset>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <fieldset class="column-4">
    <legend>Column 4 binnen <code>fieldset</code></legend>
    <div>
      <label for="voorbeeld-invoerveld-column-4-fieldset-1">Lorem</label>
      <input id="voorbeeld-invoerveld-column-4-fieldset-1" name="voorbeeld-invoerveld-column-4-fieldset-1" placeholder="lorem" type="text">
    </div>

    <div>
      <label for="voorbeeld-invoerveld-column-4-fieldset-2">Ipsum</label>
      <input id="voorbeeld-invoerveld-column-4-fieldset-2" name="voorbeeld-invoerveld-column-4-fieldset-2" placeholder="ipsum" type="text">
    </div>

    <div>
      <label for="voorbeeld-invoerveld-column-4-fieldset-3">Dolor</label>
      <input id="voorbeeld-invoerveld-column-4-fieldset-3" name="voorbeeld-invoerveld-column-4-fieldset-3" placeholder="dolor" type="text">
    </div>

    <div>
      <label for="voorbeeld-invoerveld-column-4-fieldset-4">Set</label>
      <input id="voorbeeld-invoerveld-column-4-fieldset-4" name="voorbeeld-invoerveld-column-4-fieldset-4" placeholder="set" type="text">
    </div>
  </fieldset>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>column-2 <code>type="date"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div class="column-2">
            <div>
              <label for="voorbeeld-1-date-1-start">van</label>
              <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" />
            </div>

            <div>
              <label for="voorbeeld-1-date-1-end">tot</label>
              <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end" />
            </div>
          </div>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="column-2">
    <div>
      <label for="voorbeeld-1-date-1-start">van</label>
      <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start">
    </div>

    <div>
      <label for="voorbeeld-1-date-1-end">tot</label>
      <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end">
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>column-2 <code>type="date"</code> binnen <code>fieldset</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <fieldset class="column-2">
            <legend>Datum gecombineerd op een regel test</legend>
            <div>
              <label for="voorbeeld-1-date-1-start">van</label>
              <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" />
            </div>

            <div>
              <label for="voorbeeld-1-date-1-end">tot</label>
              <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end" />
            </div>
          </fieldset>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <fieldset class="column-2">
    <legend>Datum gecombineerd op een regel test</legend>
    <div>
      <label for="voorbeeld-1-date-1-start">van</label>
      <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start">
    </div>

    <div>
      <label for="voorbeeld-1-date-1-end">tot</label>
      <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end">
    </div>
  </fieldset>
  <button type="submit">Verzend</button>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
