<script context="module">
  export const breadcrumb = "Hulpteksten testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Hulpteksten testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Hulpteksten testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld</h4>
        <form action="" method="post" class="help">
          <div>
            <input
              id="voorbeeld-text-input-met-hulptekst-simpel-1"
              name="voorbeeld-text-input"
              placeholder="voorbeeld text input"
              type="text"
              aria-describedby="voorbeeld-text-input-met-hulptekst-simpel-1-message"
            />
            <p
              class="explanation"
              data-open-label="Toelichting bij het veld: Voorbeeld text input"
              data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
              id="voorbeeld-text-input-met-hulptekst-simpel-1-message"
            >
              <span>Toelichting:</span> Lorem ipsum dolor sit amet.
            </p>
          </div>

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-Voorbeeld</h4>
        <Code
          language="html"
          code={`
<form action="" method="post" class="help">
  <div>
    <input
      id="voorbeeld-text-input-met-hulptekst-simpel-1"
      name="voorbeeld-text-input"
      placeholder="voorbeeld text input"
      type="text"
      aria-describedby="voorbeeld-text-input-met-hulptekst-simpel-1-message"
    />
    <p
      class="explanation"
      data-open-label="Toelichting bij het veld: Voorbeeld text input"
      data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
      id="voorbeeld-text-input-met-hulptekst-simpel-1-message"
    >
    <span>Toelichting:</span> Lorem ipsum dolor sit amet.
    </p>
  </div>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Verplicht invoerveld</h3>
        <h4>Visueel voorbeeld</h4>
        <form action="" method="post" class="help">
          <div>
            <span class="nota-bene">Dit veld is verplicht</span>
            <div>
              <input
                id="example-input-help-required"
                name="voorbeeld-text-input"
                placeholder="lorem ipsum"
                type="text"
                aria-describedby="example-input-help-required-message"
                required
              />
              <p
                class="explanation"
                data-open-label="Toelichting bij het veld: Voorbeeld text input"
                data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
                id="example-input-help-required-message"
              >
                <span>Toelichting:</span> Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<form action="" method="post" class="help">
  <div>
    <span class="nota-bene">Dit veld is verplicht</span>
    <div>
      <input
        id="example-input-help-required"
        name="voorbeeld-text-input"
        placeholder="lorem ipsum"
        type="text"
        aria-describedby="example-input-help-required-message"
        required
      />
      <p
        class="explanation"
        data-open-label="Toelichting bij het veld: Voorbeeld text input"
        data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
        id="example-input-help-required-message"
      >
      <span>Toelichting:</span> Lorem ipsum dolor sit amet.
      </p>
    </div>
  </div>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Verplicht invoerveld horizontaal uitgelijnd</h3>
        <h4>Visueel voorbeeld</h4>
        <form action="" method="post" class="horizontal-view help">
          <div>
            <label for="example-input-base">Voorbeeld invoerveld</label>
            <div>
              <span class="nota-bene">Dit veld is verplicht</span>
              <div>
                <input
                  id="example-input-help-required"
                  name="voorbeeld-text-input"
                  placeholder="lorem ipsum"
                  type="text"
                  aria-describedby="example-input-help-required-message"
                  required
                />
                <p
                  class="explanation"
                  data-open-label="Toelichting bij het veld: Voorbeeld text input"
                  data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
                  id="example-input-help-required-message"
                >
                  <span>Toelichting:</span> Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal-view help">
  <div>
    <label for="example-input-base">Voorbeeld invoerveld</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <div>
        <input
          id="example-input-help-required"
          name="voorbeeld-text-input"
          placeholder="lorem ipsum"
          type="text"
          aria-describedby="example-input-help-required-message"
          required>
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-input-help-required-message"
        >
        <span>Toelichting:</span> Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </div>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Verplicht invoerveld binnen fieldset</h3>
        <h4>Visueel voorbeeld</h4>
        <form action="" method="post" class="help">
          <fieldset>
            <legend>Help op simpel formulierveld</legend>

            <label for="example-input-base">Voorbeeld invoerveld</label>
            <div>
              <span class="nota-bene">Dit veld is verplicht</span>
              <div>
                <input
                  id="example-input-help-required"
                  name="voorbeeld-text-input"
                  placeholder="lorem ipsum"
                  type="text"
                  aria-describedby="example-input-help-required-message"
                  required
                />
                <p
                  class="explanation"
                  data-open-label="Toelichting bij het veld: Voorbeeld text input"
                  data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
                  id="example-input-help-required-message"
                >
                  <span>Toelichting:</span> Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </fieldset>

          <button type="submit">Verzend</button>
        </form>

        <Code
          language="html"
          code={`
<form action="" method="post" class="help">
  <fieldset>
    <legend>Help op simpel formulierveld</legend>

    <label for="example-input-base">Voorbeeld invoerveld</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <div>
        <input
          id="example-input-help-required"
          name="voorbeeld-text-input"
          placeholder="lorem ipsum"
          type="text"
          aria-describedby="example-input-help-required-message"
          required>
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-input-help-required-message"
        >
        <span>Toelichting:</span> Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </fieldset>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Verplicht invoerveld binnen fieldset binnen een horizontaal uitgelijnd formulier</h3>
        <h4>Visueel voorbeeld</h4>
        <form action="" method="post" class=" horizontal-view help">
          <fieldset>
            <legend>Help op simpel formulierveld</legend>

            <div>
              <label for="example-input-base">Voorbeeld invoerveld</label>
              <div>
                <span class="nota-bene">Dit veld is verplicht</span>
                <div>
                  <input
                    id="example-input-help-required"
                    name="voorbeeld-text-input"
                    placeholder="lorem ipsum"
                    type="text"
                    aria-describedby="example-input-help-required-message"
                    required
                  />
                  <p
                    class="explanation"
                    data-open-label="Toelichting bij het veld: Voorbeeld text input"
                    data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
                    id="example-input-help-required-message"
                  >
                    <span>Toelichting:</span> Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </fieldset>

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<form action="" method="post" class=" horizontal-view help">
  <fieldset>
    <legend>Help op simpel formulierveld</legend>

    <div>
      <label for="example-input-base">Voorbeeld invoerveld</label>
      <div>
        <span class="nota-bene">Dit veld is verplicht</span>
        <div>
          <input
            id="example-input-help-required"
            name="voorbeeld-text-input"
            placeholder="lorem ipsum"
            type="text"
            aria-describedby="example-input-help-required-message"
            required>
          <p
            class="explanation"
            data-open-label="Toelichting bij het veld: Voorbeeld text input"
            data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
            id="example-input-help-required-message"
          >
          <span>Toelichting:</span> Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  </fieldset>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Horizontaal uitgelijnd formulier met helptekst</h3>
        <h4>Visueel voorbeeld</h4>
        <form action="" method="post" class="horizontal-view help">
          <div>
            <label for="form-example-base">Voorbeeld text input</label>
            <input
              id="form-example-base"
              name="form-example-base"
              placeholder="voorbeeld text input"
              type="text"
            />
          </div>

          <div>
            <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
              >Help op simpel formulierveld</label
            >
            <div>
              <span class="nota-bene">Dit veld is verplicht</span>
              <div>
                <input
                  id="example-input-help-required"
                  name="voorbeeld-text-input"
                  placeholder="lorem ipsum"
                  type="text"
                  aria-describedby="example-input-help-required-message"
                  required
                />
                <p
                  class="explanation"
                  data-open-label="Toelichting bij het veld: Voorbeeld text input"
                  data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
                  id="example-input-help-required-message"
                >
                  <span>Toelichting:</span> Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>

          <div>
            <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
              >Help op simpel formulierveld</label
            >
            <div>
              <input
                id="example-input-help-required"
                name="voorbeeld-text-input"
                placeholder="lorem ipsum"
                type="text"
                aria-describedby="example-input-help-required-message"
                required
              />
              <p
                class="explanation"
                data-open-label="Toelichting bij het veld: Voorbeeld text input"
                data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
                id="example-input-help-required-message"
              >
                <span>Toelichting:</span> Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal-view help">
  <div>
    <label for="form-example-base">Voorbeeld text input</label>
    <input
      id="form-example-base"
      name="form-example-base"
      placeholder="voorbeeld text input"
      type="text"
    />
  </div>

  <div>
    <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
      >Help op simpel formulierveld</label
    >
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <div>
        <input
          id="example-input-help-required"
          name="voorbeeld-text-input"
          placeholder="lorem ipsum"
          type="text"
          aria-describedby="example-input-help-required-message"
          required
        />
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-input-help-required-message"
        >
        <span>Toelichting:</span> Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </div>

  <div>
    <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
      >Help op simpel formulierveld</label
    >
    <div>
      <input
        id="example-input-help-required"
        name="voorbeeld-text-input"
        placeholder="lorem ipsum"
        type="text"
        aria-describedby="example-input-help-required-message"
        required
      />
      <p
        class="explanation"
        data-open-label="Toelichting bij het veld: Voorbeeld text input"
        data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
        id="example-input-help-required-message"
      >
        <span>Toelichting:</span> Lorem ipsum dolor sit amet.
      </p>
    </div>
  </div>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Fieldset voorbeeld</h3>
        <h4>Visueel voorbeeld</h4>
        <form action="" method="post" class="help">
          <fieldset>
            <legend>Fieldset test</legend>
            <div>
              <label for="form-example-base">Voorbeeld text input</label>
              <input
                id="form-example-base"
                name="form-example-base"
                placeholder="voorbeeld text input"
                type="text"
              />
            </div>

            <div class="required">
              <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
                >Help op simpel formulierveld</label
              >
              <div>
                <span class="nota-bene">Dit veld is verplicht</span>
                <div>
                  <input
                    id="example-input-help-required"
                    name="voorbeeld-text-input"
                    placeholder="lorem ipsum"
                    type="text"
                    aria-describedby="example-input-help-required-message"
                    required
                  />
                  <p
                    class="explanation"
                    data-open-label="Toelichting bij het veld: Voorbeeld text input"
                    data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
                    id="example-input-help-required-message"
                  >
                    <span>Toelichting:</span> Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
                >Help op simpel formulierveld</label
              >
              <div>
                <input
                  id="example-input-help-required"
                  name="voorbeeld-text-input"
                  placeholder="lorem ipsum"
                  type="text"
                  aria-describedby="example-input-help-required-message"
                  required
                />
                <p
                  class="explanation"
                  data-open-label="Toelichting bij het veld: Voorbeeld text input"
                  data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
                  id="example-input-help-required-message"
                >
                  <span>Toelichting:</span> Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-with-help-within-fieldset"
                name="standaard-checkbox"
              />
              <label for="checkbox-example-with-help-within-fieldset"
                >Lorem ipsum dolor sit amet</label
              >
              <p
                class="explanation"
                data-open-label="Toelichting bij het veld: Voorbeeld text input"
                data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
                id="example-input-help-required-message"
              >
                <span>Toelichting:</span> Lorem ipsum dolor sit amet.
              </p>
            </div>

            <div class="radio">
              <input type="radio" id="radio-example-base" name="standaard-radio" />
              <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
              <p
                class="explanation"
                data-open-label="Toelichting bij het veld: Voorbeeld text input"
                data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
                id="example-input-help-required-message"
              >
                <span>Toelichting:</span> Lorem ipsum dolor sit amet.
              </p>
            </div>

            <fieldset>
              <legend>Examples</legend>
              <p
                class="explanation"
                data-open-label="Toelichting bij het veld: Voorbeeld text input"
                data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
                id="example-radio-list-fieldset-help-required-message"
              >
                <span>Toelichting:</span> Lorem ipsum dolor sit amet.
              </p>
              <div class="radio">
                <input type="radio" id="radio-example-list-1" name="standaard-radio" />
                <label for="radio-example-list-1">Lorem ipsum dolor sit amet</label>
              </div>

              <div class="radio">
                <input type="radio" id="radio-example-list-2" name="standaard-radio" />
                <label for="radio-example-list-2">Lorem ipsum dolor sit amet</label>
              </div>

              <div class="radio">
                <input type="radio" id="radio-example-list-3" name="standaard-radio" />
                <label for="radio-example-list-3">Lorem ipsum dolor sit amet</label>
              </div>

              <div class="radio">
                <input type="radio" id="radio-example-list-4" name="standaard-radio" />
                <label for="radio-example-list-4">Lorem ipsum dolor sit amet</label>
              </div>
            </fieldset>

            <fieldset>
              <legend>Examples</legend>

              <div class="radio">
                <input type="radio" id="radio-example-list-2-1" name="standaard-radio" />
                <label for="radio-example-list-2-1">Lorem ipsum dolor sit amet</label>

                <p
                  class="explanation"
                  data-open-label="Toelichting bij het veld: Voorbeeld text input"
                  data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
                  id="example-radio-list-item-help-required-message"
                >
                  <span>Toelichting:</span> Lorem ipsum dolor sit amet.
                </p>
              </div>

              <div class="radio">
                <input type="radio" id="radio-example-list-2-2" name="standaard-radio" />
                <label for="radio-example-list-2-2">Lorem ipsum dolor sit amet</label>

                <p
                  class="explanation"
                  data-open-label="Toelichting bij het veld: Voorbeeld text input"
                  data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
                  id="example-radio-list-item-help-required-message-2"
                >
                  <span>Toelichting:</span> Lorem ipsum dolor sit amet.
                </p>
              </div>

              <div class="radio">
                <input type="radio" id="radio-example-list-2-3" name="standaard-radio" />
                <label for="radio-example-list-2-3">Lorem ipsum dolor sit amet</label>
                <p
                  class="explanation"
                  data-open-label="Toelichting bij het veld: Voorbeeld text input"
                  data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
                  id="example-radio-list-item-help-required-message-3"
                >
                  <span>Toelichting:</span> Lorem ipsum dolor sit amet.
                </p>
              </div>

              <div class="radio">
                <input type="radio" id="radio-example-list-2-4" name="standaard-radio" />
                <label for="radio-example-list-2-4">Lorem ipsum dolor sit amet</label>
                <p
                  class="explanation"
                  data-open-label="Toelichting bij het veld: Voorbeeld text input"
                  data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
                  id="example-radio-list-item-help-required-message-4"
                >
                  <span>Toelichting:</span> Lorem ipsum dolor sit amet.
                </p>
              </div>
            </fieldset>
          </fieldset>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld</h4>

        <Code
          language="html"
          code={`
<form action="" method="post" class="help">
  <fieldset>
    <legend>Fieldset test</legend>
    <div>
      <label for="form-example-base">Voorbeeld text input</label>
      <input
        id="form-example-base"
        name="form-example-base"
        placeholder="voorbeeld text input"
        type="text"
      />
    </div>

    <div class="required">
      <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
        >Help op simpel formulierveld</label
      >
      <div>
        <span class="nota-bene">Dit veld is verplicht</span>
        <div>
          <input
            id="example-input-help-required"
            name="voorbeeld-text-input"
            placeholder="lorem ipsum"
            type="text"
            aria-describedby="example-input-help-required-message"
            required
          />
          <p
            class="explanation"
            data-open-label="Toelichting bij het veld: Voorbeeld text input"
            data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
            id="example-input-help-required-message"
          >
            <span>Toelichting:</span> Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>

    <div>
      <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
        >Help op simpel formulierveld</label
      >
      <div>
        <input
          id="example-input-help-required"
          name="voorbeeld-text-input"
          placeholder="lorem ipsum"
          type="text"
          aria-describedby="example-input-help-required-message"
          required
        />
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-input-help-required-message"
        >
        <span>Toelichting:</span> Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>

    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-with-help-within-fieldset" name="standaard-checkbox">
      <label for="checkbox-example-with-help-within-fieldset">Lorem ipsum dolor sit amet</label>
      <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-input-help-required-message"
      >
        <span>Toelichting:</span> Lorem ipsum dolor sit amet.
      </p>
    </div>

    <div class="radio">
      <input type="radio" id="radio-example-base" name="standaard-radio">
      <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
      <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-input-help-required-message"
      >
        <span>Toelichting:</span> Lorem ipsum dolor sit amet.
      </p>
    </div>

    <fieldset>
      <legend>Examples</legend>
      <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-radio-list-fieldset-help-required-message"
      >
        <span>Toelichting:</span> Lorem ipsum dolor sit amet.
      </p>
      <div class="radio">
          <input type="radio" id="radio-example-list-1" name="standaard-radio">
          <label for="radio-example-list-1">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="radio">
          <input type="radio" id="radio-example-list-2" name="standaard-radio">
          <label for="radio-example-list-2">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="radio">
          <input type="radio" id="radio-example-list-3" name="standaard-radio">
          <label for="radio-example-list-3">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="radio">
          <input type="radio" id="radio-example-list-4" name="standaard-radio">
          <label for="radio-example-list-4">Lorem ipsum dolor sit amet</label>
      </div>
    </fieldset>

    <fieldset>
      <legend>Examples</legend>

      <div class="radio">
        <input type="radio" id="radio-example-list-2-1" name="standaard-radio">
        <label for="radio-example-list-2-1">Lorem ipsum dolor sit amet</label>

        <p
        class="explanation"
        data-open-label="Toelichting bij het veld: Voorbeeld text input"
        data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
        id="example-radio-list-item-help-required-message"
        >
        <span>Toelichting:</span> Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div class="radio">
          <input type="radio" id="radio-example-list-2-2" name="standaard-radio">
          <label for="radio-example-list-2-2">Lorem ipsum dolor sit amet</label>

          <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-radio-list-item-help-required-message-2"
          >
          <span>Toelichting:</span> Lorem ipsum dolor sit amet.
          </p>
      </div>

      <div class="radio">
          <input type="radio" id="radio-example-list-2-3" name="standaard-radio">
          <label for="radio-example-list-2-3">Lorem ipsum dolor sit amet</label>
          <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-radio-list-item-help-required-message-3"
          >
            <span>Toelichting:</span> Lorem ipsum dolor sit amet.
          </p>
      </div>

      <div class="radio">
          <input type="radio" id="radio-example-list-2-4" name="standaard-radio">
          <label for="radio-example-list-2-4">Lorem ipsum dolor sit amet</label>
          <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-radio-list-item-help-required-message-4"
          >
          <span>Toelichting:</span> Lorem ipsum dolor sit amet.
          </p>
      </div>
    </fieldset>

  </fieldset>
  <button type="submit">Verzend</button>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
