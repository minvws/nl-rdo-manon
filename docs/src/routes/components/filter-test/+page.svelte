<script module>
  export const breadcrumb = "Filter testpagina";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Filter testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Filter testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <section class="filter">
          <div>
            <p><span>5.254</span> nieuwsberichten</p>
            <button data-show-filters-label="Toon filters">Verberg filters</button>
          </div>
          <form aria-label="Filters" action="" method="post" class="horizontal help">
            <fieldset>
              <legend>Filter op datum</legend>
              <div>
                <label for="keyword">Trefwoord</label>
                <div>
                  <span class="nota-bene" id="keyword-explanation">Bijvoorbeeld: fiets</span>
                  <input
                    id="keyword"
                    name="keyword"
                    type="text"
                    aria-describedby="keyword-explanation"
                  />
                  <p
                    class="explanation"
                    data-open-label="Toelichting bij het veld: Trefwoord"
                    data-close-label="Sluit toelichting bij het veld: Trefwoord"
                  >
                    <span>toelichting:</span> Vul hier een trefwoord in waarop u wilt filteren. Dit kan
                    een los woord zijn of een combinatie van woorden.
                  </p>
                </div>
              </div>

              <fieldset>
                <legend>Periode</legend>
                <div class="column-2">
                  <div>
                    <label for="date-range-start">van</label>
                    <input
                      id="date-range-start"
                      name="date-range-start"
                      value="DD-MM-JJJJ"
                      type="date"
                    />
                  </div>

                  <div>
                    <label for="date-range-end">tot</label>
                    <input
                      id="date-range-end"
                      name="date-range-end"
                      value="DD-MM-JJJJ"
                      type="date"
                    />
                  </div>
                </div>
                <p
                  class="explanation"
                  data-open-label="Toelichting bij het veld: Periode"
                  data-close-label="Sluit toelichting bij het veld: Periode"
                >
                  <span>toelichting:</span> Vul hier een start- en/of einddatum als volgt in: DD-MM-JJJJ.
                </p>
              </fieldset>

              <div class="required">
                <label for="select">Voertuig</label>
                <div>
                  <span class="nota-bene">Dit veld is verplicht</span>
                  <select id="select" name="select">
                    <option value="Alle voertuigen">Alle voertuigen</option>
                    <option value="Fiets">Fiets</option>
                    <option value="Step">Step</option>
                  </select>
                </div>
              </div>
            </fieldset>

            <button type="submit">Filter</button>
          </form>
        </section>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<section class="filter">
  <div>
    <p><span>5.254</span> nieuwsberichten</p>
    <button data-show-filters-label="Toon filters">Verberg filters</button>
  </div>
  <form aria-label="Filters" action="" method="post" class="horizontal help">
    <fieldset>
      <legend>Filter op datum</legend>
      <div>
        <label for="keyword">Trefwoord</label>
        <div>
          <span class="nota-bene" id="keyword-explanation">Bijvoorbeeld: fiets</span>
          <input
            id="keyword"
            name="keyword"
            type="text"
            aria-describedby="keyword-explanation"
          />
          <p
            class="explanation"
            data-open-label="Toelichting bij het veld: Trefwoord"
            data-close-label="Sluit toelichting bij het veld: Trefwoord"
          >
            <span>toelichting:</span> Vul hier een trefwoord in waarop u wilt filteren. Dit kan
            een los woord zijn of een combinatie van woorden.
          </p>
        </div>
      </div>

      <fieldset>
        <legend>Periode</legend>
        <div class="column-2">
          <div>
            <label for="date-range-start">van</label>
            <input
              id="date-range-start"
              name="date-range-start"
              value="DD-MM-JJJJ"
              type="date"
            />
          </div>

          <div>
            <label for="date-range-end">tot</label>
            <input
              id="date-range-end"
              name="date-range-end"
              value="DD-MM-JJJJ"
              type="date"
            />
          </div>
        </div>
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Periode"
          data-close-label="Sluit toelichting bij het veld: Periode"
        >
          <span>toelichting:</span> Vul hier een start- en/of einddatum als volgt in: DD-MM-JJJJ.
        </p>
      </fieldset>

      <div class="required">
        <label for="select">Voertuig</label>
        <div>
          <span class="nota-bene">Dit veld is verplicht</span>
          <select id="select" name="select">
            <option value="Alle voertuigen">Alle voertuigen</option>
            <option value="Fiets">Fiets</option>
            <option value="Step">Step</option>
          </select>
        </div>
      </div>
    </fieldset>

    <button type="submit">Filter</button>
  </form>
</section>
`}
        />
      </section>
    </div>
  </article>
</main>
