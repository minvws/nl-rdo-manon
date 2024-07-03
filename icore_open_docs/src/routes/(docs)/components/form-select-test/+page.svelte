<script context="module">
  export const breadcrumb = "Selectielijst testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Selectielijst testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Selectielijst - <code>select</code> testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <label for="select-base">Selectielijst</label>
          <select id="select-base" name="select-base">
            <option value="1">Optie 1</option>
            <option value="2">Optie 2</option>
            <option value="3">Optie 3</option>
          </select>

          <button type="submit">Verzend</button>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="select-base">Selectielijst</label>
  <select id="select-base" name="select-base">
    <option value="1">Optie 1</option>
    <option value="2">Optie 2</option>
    <option value="3">Optie 3</option>
  </select>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Selectielijst gegroepeerd binnen <code>div</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div>
            <label for="select-div">Selectielijst</label>
            <select id="select-div" name="select-div">
              <option value="1">Optie 1</option>
              <option value="2">Optie 2</option>
              <option value="3">Optie 3</option>
            </select>
          </div>

          <button type="submit">Verzend</button>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <label for="select-div">Selectielijst</label>
    <select id="select-div" name="select-div">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
  </div>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Selectielijst gegroepeerd binnen <code>div</code> horizontaal uitgelijnd</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div class="horizontal-view">
            <label for="select-div-horizontal">Selectielijst</label>
            <select id="select-div-horizontal" name="select-div-horizontal">
              <option value="1">Optie 1</option>
              <option value="2">Optie 2</option>
              <option value="3">Optie 3</option>
            </select>
          </div>

          <button type="submit">Verzend</button>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="horizontal-view">
    <label for="select-div-horizontal">Selectielijst</label>
    <select id="select-div-horizontal" name="select-div-horizontal">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
  </div>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Selectielijst binnen <code>section</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <section>
            <label for="select-section">Selectielijst</label>
            <select id="select-section" name="select-section">
              <option value="1">Optie 1</option>
              <option value="2">Optie 2</option>
              <option value="3">Optie 3</option>
            </select>
          </section>

          <button type="submit">Verzend</button>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <section>
    <label for="select-section">Selectielijst</label>
    <select id="select-section" name="select-section">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
  </section>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Selectielijst gegroepeerd binnen <code>section</code> horizontaal uitgelijnd</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <section class="horizontal-view">
            <label for="select-section-horizontal">Selectielijst</label>
            <select id="select-section-horizontal" name="select-section-horizontal">
              <option value="1">Optie 1</option>
              <option value="2">Optie 2</option>
              <option value="3">Optie 3</option>
            </select>
          </section>

          <button type="submit">Verzend</button>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <section class="horizontal-view">
    <label for="select-section-horizontal">Selectielijst</label>
    <select id="select-section-horizontal" name="select-section-horizontal">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
  </section>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Selectielijst binnen <code>fieldset</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <fieldset>
            <legend>Selectielijst binnen een fieldset voorbeeld</legend>
            <label for="select-fieldset">Selectielijst</label>
            <select id="select-fieldset" name="select-fieldset">
              <option value="1">Optie 1</option>
              <option value="2">Optie 2</option>
              <option value="3">Optie 3</option>
            </select>
          </fieldset>

          <button type="submit">Verzend</button>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <fieldset>
    <legend>Selectielijst binnen een fieldset voorbeeld</legend>
    <label for="select-fieldset">Selectielijst</label>
    <select id="select-fieldset" name="select-fieldset">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
  </fieldset>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Selectielijst gegroepeerd binnen <code>fieldset</code> horizontaal uitgelijnd</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <fieldset>
            <legend>Selectielijst binnen een fieldset voorbeeld</legend>
            <div class="horizontal-view">
              <label for="select-fieldset-horizontal">Selectielijst</label>
              <select id="select-fieldset-horizontal" name="select-fieldset-horizontal">
                <option value="1">Optie 1</option>
                <option value="2">Optie 2</option>
                <option value="3">Optie 3</option>
              </select>
            </div>
          </fieldset>

          <button type="submit">Verzend</button>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <fieldset>
    <legend>Selectielijst binnen een fieldset voorbeeld</legend>
    <div class="horizontal-view">
      <label for="select-fieldset-horizontal">Selectielijst</label>
      <select id="select-fieldset-horizontal" name="select-fieldset-horizontal">
        <option value="1">Optie 1</option>
        <option value="2">Optie 2</option>
        <option value="3">Optie 3</option>
      </select>
      </div>
  </fieldset>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3 id="form-dropdown-required">Verplicht</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <label for="select-required">Verplichte selectielijst</label>
          <span class="nota-bene">Dit veld is verplicht</span>
          <select id="select-required" name="select-required" required>
            <option value="">--Please choose an option--</option>
            <option value="1">Optie 1</option>
            <option value="2">Optie 2</option>
            <option value="3">Optie 3</option>
          </select>

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>

        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="select-required">Verplichte selectielijst</label>
  <span class="nota-bene">Dit veld is verplicht</span>
  <select id="select-required" name="select-required" required>
    <option value="">--Please choose an option--</option>
    <option value="1">Optie 1</option>
    <option value="2">Optie 2</option>
    <option value="3">Optie 3</option>
  </select>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3 id="form-dropdown-disabled">Uitgeschakeld</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <label for="select-disabled-1">Uitgeschakelde selectielijst</label>
          <select disabled id="select-disabled-1" name="select-disabled-1">
            <option value="1">Optie 1</option>
            <option value="2">Optie 2</option>
            <option value="3">Optie 3</option>
          </select>

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>

        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="select-disabled">Uitgeschakelde selectielijst</label>
  <select disabled id="select-disabled" name="select-disabled">
    <option value="1">Optie 1</option>
    <option value="2">Optie 2</option>
    <option value="3">Optie 3</option>
  </select>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3 id="form-dropdown-selected">Voorgeselecteerde optie</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <label for="select-selected-1">Selectielijst met voorgeselecteerde optie</label>
          <select id="select-selected-1" name="select-selected-1">
            <option value="1">Optie 1</option>
            <option value="2">Optie 2</option>
            <option value="Voorgeselecteerd" selected>Voorgeselecteerd</option>
          </select>

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="select-selected">Selectielijst met voorgeselecteerde optie</label>
  <select id="select-selected" name="select-selected">
    <option value="1">Optie 1</option>
    <option value="2">Optie 2</option>
    <option value="Voorgeselecteerd" selected>Voorgeselecteerd</option>
  </select>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3 id="form-dropdown-optgroup">Gegroepeerde opties</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <label for="select-optgroup-1">Gegroepeerde opties</label>
          <select id="select-optgroup-1" name="select-optgroup-1">
            <optgroup label="Rollende objecten">
              <option value="Bal">Bal</option>
              <option value="Wiel">Wiel</option>
              <option value="Knikker">Knikker</option>
            </optgroup>

            <optgroup label="Slecht rollende objecten">
              <option value="Aambeeld">Aambeeld</option>
              <option value="Eiffeltoren">Eiffeltoren</option>
              <option value="Dinosaurus">Dinosaurus</option>
            </optgroup>
          </select>

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="select-optgroup">Gegroepeerde opties</label>
  <select id="select-optgroup" name="select-optgroup">
    <optgroup label="Rollende objecten">
      <option value="Bal">Bal</option>
      <option value="Wiel">Wiel</option>
      <option value="Knikker">Knikker</option>
    </optgroup>

    <optgroup label="Slecht rollende objecten">
      <option value="Aambeeld">Aambeeld</option>
      <option value="Eiffeltoren">Eiffeltoren</option>
      <option value="Dinosaurus">Dinosaurus</option>
    </optgroup>
  </select>

  <button type="submit">Verzend</button>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
