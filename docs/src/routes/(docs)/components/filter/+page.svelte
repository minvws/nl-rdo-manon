<script context="module">
  export const breadcrumb = "Filter";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Filter</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Filter</h1>
        <p>
          Bij het tonen van grote of complexe datasets kan gebruik gemaakt worden van filters.
          Filters geven de gebruiker de mogelijkheid om enkel relevante data te zien.
        </p>

        <p>
          Denk bij het toevoegen van filters aan de verschillende gebruikers-behoeften en -vragen.
          Deze kunnen per gebruiker en per situatie verschillend zijn maar in veel gevallen kunnen
          de meest voorkomende vragen geidentificeerd worden. Filters kunnen ingezet worden om deze
          vragen sneller te beantwoorden.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project.
            <ul>
              <li>
                Voor een overzicht van de benodigde en optionele bestanden zie:
                <a href="#requirements">Bijbehorende bestanden</a>.
              </li>
              <li>
                Voeg het bijbehorende Javascript-bestand toe aan het project. Voor meer informatie
                zie:
                <a href="{base}/add-js">JavaScript toevoegen</a>.
              </li>
            </ul>
          </li>
          <li>
            Voeg een <code>&lt;section&gt;</code> of <code>&lt;div&gt;</code> toe met de class
            <code>filter</code> voor de correcte weergave.
          </li>
          <li>
            Voeg binnen het element een formulier met de beschikbare filteropties toe. Voor meer
            informatie over zie:
            <a href="{base}/components/forms">Formulieren</a>.
          </li>
          <li>
            Geef het formulier met <code>aria-label</code> een korte toegankelijke naam.
          </li>
        </ol>

        <h2>Optioneel:</h2>
        <ul>
          <li>
            Voeg een <code>&lt;div&gt;</code> met extra informatie toe, bijvoorbeeld de hoeveelheid beschikbare
            resultaten.
          </li>
          <li>
            Als het formulier een heading heeft, is het mogelijk om die te gebruiken als
            toegankelijke naam. Geef de heading dan een <code>id</code> en verwijs daarnaar op het
            formulier met <code>aria-labelledby</code>. Laat in dit geval <code>aria-label</code> weg.
          </li>
          <li>
            Voeg de optie tot het in- en uit-klappen van de filters toe.
            <ul>
              <li>
                Voeg bij de extra information een
                <code>&lt;button&gt;</code> toe met als tekst "Verberg filters" (of vergelijkbaar).
                Geef het daarnaast een <code>data-show-filters-label</code>-attribuut met als waarde
                "Toon filters" (of vergelijkbaar).
              </li>
              <li>
                Plaats
                <code>&lt;script defer src="pad/naar/filters.min.js"&gt;&lt;/script&gt;</code>
                in de <code>&lt;head&gt;</code> van het document.
              </li>
              <li>
                Het <code>defer</code> attribuut zorgt ervoor dat het script in de achtergrond geladen
                wordt, zodat het tonen van de pagina niet geblokkeerd wordt.
              </li>
              <li>
                Wanneer JavaScript niet beschikbaar is, worden de filters altijd getoont en wordt de
                <code>&lt;button&gt;</code> verborgen.
              </li>
              <li>
                Om de filters standaard te verbergen, verander je de tekst van de button naar "Toon
                filters" (of vergelijkbaar), gebruik je een bijbehorend
                <code>data-hide-filters-label</code> (in plaats van
                <code>data-show-filters-label</code>) en voeg je
                <code>aria-expanded="false"</code> toe aan de <code>&lt;button&gt;</code>.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <section class="filter">
          <div>
            <p><span>5.254</span> nieuwsberichten</p>
            <button data-show-filters-label="Toon filters">Verberg filters</button>
          </div>
          <form aria-label="Filters" action="" method="post" class="horizontal-view help">
            <fieldset>
              <legend>Filter op datum</legend>
              <div>
                <label for="keyword">Trefwoord</label>
                <div>
                  <input
                    id="keyword"
                    name="keyword"
                    placeholder="Bijvoorbeeld: fiets"
                    type="text"
                  />
                  <p
                    class="explanation"
                    data-open-label="Toelichting bij het veld: Trefwoord"
                    data-close-label="Sluit toelichting bij het veld: Trefwoord"
                  >
                    <span>toelichting:</span> Vul hier een trefwoord in waarop u wilt filteren.
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
    <button data-show-filters-label="Toon filters">
      Verberg filters
    </button>
  </div>
  <form aria-label="Filters" action="" method="post" class="horizontal-view help">
    <fieldset>
      <legend>Filter op datum</legend>
      <div>
        <label for="keyword">Trefwoord</label>
        <div>
          <input id="keyword" name="keyword" placeholder="Bijvoorbeeld: fiets" type="text">
          <p
            class="explanation"
            data-open-label="Toelichting bij het veld: Trefwoord"
            data-close-label="Sluit toelichting bij het veld: Trefwoord"
          ><span>toelichting:</span> Vul hier een trefwoord in waarop u wilt filteren.</p>
        </div>
      </div>

      <fieldset>
        <legend>Periode</legend>
        <div class="column-2">
          <div>
            <label for="date-range-start">van</label>
            <input id="date-range-start" name="date-range-start" value="DD-MM-JJJJ" type="date">
          </div>

          <div>
            <label for="date-range-end">tot</label>
            <input id="date-range-end" name="date-range-end" value="DD-MM-JJJJ" type="date">
          </div>
        </div>
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Periode"
          data-close-label="Sluit toelichting bij het veld: Periode"
        ><span>toelichting:</span> Vul hier een start- en/of einddatum als volgt in: DD-MM-JJJJ.</p>
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

        <h4>Structuur-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<section class="filter">
  <div>
    <p><span>5.254</span> nieuwsberichten</p>
    <button aria-expanded="false" data-hide-filters-label="Verberg filters">
      Toon filters
    </button>
  </div>
  <form aria-label="Filters" action="" method="post">
    <fieldset>
      <legend>Filteropties</legend>
      <!-- Voeg de opties van het filter toe -->
    </fieldset>
  </form>
</section>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>
        <h3>Benodigd</h3>
        <ul>
          <li><code>filter.scss</code></li>
          <li><code>filter.js</code></li>
        </ul>

        <h3>Optioneel</h3>
        <ul>
          <li><code>filter-variables.scss</code></li>
        </ul>
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li>
            Intro
            <ul>
              <li><a href="{base}/documentation/variables#padding">padding</a></li>
              <li>
                <a href="{base}/documentation/variables#border-width">border-width</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#border-style">border-style</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#border-color">border-color</a>
              </li>
              <li><a href="{base}/documentation/variables#font-size">font-size</a></li>
              <li><a href="{base}/documentation/variables#text-color">text-color</a></li>
            </ul>
          </li>
          <li>
            <code>span</code>
            <ul>
              <li><a href="{base}/documentation/variables#font-size">font-size</a></li>
              <li><a href="{base}/documentation/variables#text-color">text-color</a></li>
            </ul>
          </li>
          <li>
            <code>button</code>
            <ul>
              <li><a href="{base}/documentation/variables#text-color">text-color</a></li>
              <li><a href="{base}/documentation/variables#text-color">text-color</a></li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/filter-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
