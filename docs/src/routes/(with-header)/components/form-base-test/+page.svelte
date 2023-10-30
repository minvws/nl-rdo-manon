<script context="module">
  export const breadcrumb = "Basisformulier testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Basisformulier testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Basisformulier testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <label for="form-example-base">Voorbeeld text input</label>
          <input
            id="form-example-base"
            name="form-example-base"
            placeholder="voorbeeld text input"
            type="text"
          />

          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="form-example-base">Voorbeeld text input</label>
  <input id="form-example-base" name="form-example-base" placeholder="voorbeeld text input" type="text">

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Notificatie direct binnen formulier</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <p class="explanation" role="group" aria-label="Toelichting">
            <span>Toelichting:</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus volutpat ligula.
          </p>

          <label for="form-example-base">Voorbeeld text input</label>
          <input
            id="form-example-base"
            name="form-example-base"
            placeholder="voorbeeld text input"
            type="text"
          />

          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <p class="explanation" role="group" aria-label="Toelichting">
    <span>Toelichting:</span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus volutpat ligula.
  </p>

  <label for="form-example-base">Voorbeeld text input</label>
  <input
    id="form-example-base"
    name="form-example-base"
    placeholder="voorbeeld text input"
    type="text"
  />

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Bloknotificatie direct binnen formulier</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div class="explanation" role="group" aria-label="Toelichting">
            <span>Toelichting:</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus volutpat ligula,
              et accumsan ipsum varius eget. Mauris euismod a augue sit amet condimentum.
            </p>
          </div>

          <label for="form-example-base">Voorbeeld text input</label>
          <input
            id="form-example-base"
            name="form-example-base"
            placeholder="voorbeeld text input"
            type="text"
          />

          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="explanation" role="group" aria-label="Toelichting">
    <span>Toelichting:</span>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus volutpat ligula, et accumsan ipsum varius eget. Mauris euismod a augue sit amet condimentum.</p>
  </div>

  <label for="form-example-base">Voorbeeld text input</label>
  <input
    id="form-example-base"
    name="form-example-base"
    placeholder="voorbeeld text input"
    type="text"
  />

  <button type="submit">Verzend</button>
</form>
`}
        />

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

        <h3>Link direct binnen formulier</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <label for="form-example-base">Voorbeeld text input</label>
          <input
            id="form-example-base"
            name="form-example-base"
            placeholder="voorbeeld text input"
            type="text"
          />

          <a href="#">Lorem ipsum dolor set</a>

          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="form-example-base">Voorbeeld text input</label>
  <input id="form-example-base" name="form-example-base" placeholder="voorbeeld text input" type="text" />

  <a href="#">Lorem ipsum dolor set</a>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Link direct binnen horizontaal uitgelijnd formulier</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post" class="horizontal-view">
          <div>
            <label for="form-example-base">Voorbeeld text input</label>
            <input
              id="form-example-base"
              name="form-example-base"
              placeholder="voorbeeld text input"
              type="text"
            />
          </div>

          <a href="#">Lorem ipsum dolor set</a>

          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal-view">
  <div>
    <label for="form-example-base">Voorbeeld text input</label>
    <input id="form-example-base" name="form-example-base" placeholder="voorbeeld text input" type="text" />
  </div>

  <a href="#">Lorem ipsum dolor set</a>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Link direct binnen groep in horizontaal uitgelijnd formulier</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post" class="horizontal-view">
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
            <a href="#">Lorem ipsum dolor set</a>
          </div>

          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal-view">
  <div>
    <label for="form-example-base">Voorbeeld text input</label>
    <input id="form-example-base" name="form-example-base" placeholder="voorbeeld text input" type="text" />
  </div>

  <div>
    <a href="#">Lorem ipsum dolor set</a>
  </div>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Link direct binnen fieldset</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <fieldset>
            <legend>Lorem ipsum</legend>

            <label for="form-example-base">Voorbeeld text input</label>
            <input
              id="form-example-base"
              name="form-example-base"
              placeholder="voorbeeld text input"
              type="text"
            />

            <a href="#">Lorem ipsum dolor set</a>
          </fieldset>
          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal-view">
  <fieldset>
    <legend>Lorem ipsum</legend>

    <label for="form-example-base">Voorbeeld text input</label>
    <input id="form-example-base" name="form-example-base" placeholder="voorbeeld text input" type="text" />

    <a href="#">Lorem ipsum dolor set</a>
  </fieldset>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Link direct binnen fieldset binnen horizontaal uitgelijnd formulier</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post" class="horizontal-view">
          <fieldset>
            <legend>Lorem ipsum</legend>

            <div>
              <label for="form-example-base">Voorbeeld text input</label>
              <input
                id="form-example-base"
                name="form-example-base"
                placeholder="voorbeeld text input"
                type="text"
              />
            </div>

            <a href="#">Lorem ipsum dolor set</a>
          </fieldset>
          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal-view">
  <fieldset>
    <legend>Lorem ipsum</legend>

    <div>
      <label for="form-example-base">Voorbeeld text input</label>
      <input id="form-example-base" name="form-example-base" placeholder="voorbeeld text input" type="text" />
    </div>

    <a href="#">Lorem ipsum dolor set</a>
  </fieldset>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Link binnen groep binnen fieldset binnen horizontaal uitgelijnd formulier</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post" class="horizontal-view">
          <fieldset>
            <legend>Lorem ipsum</legend>

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
              <a href="#">Lorem ipsum dolor set</a>
            </div>
          </fieldset>
          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal-view">
  <fieldset>
    <legend>Lorem ipsum</legend>

    <div>
      <label for="form-example-base">Voorbeeld text input</label>
      <input id="form-example-base" name="form-example-base" placeholder="voorbeeld text input" type="text" />
    </div>

    <div>
      <a href="#">Lorem ipsum dolor set</a>
    </div>
  </fieldset>
  <button type="submit">Verzend</button>
</form>
`}
        />
      </section>

      <section>
        <h2>Test set</h2>
        <form method="post">
          <p class="explanation" role="group" aria-label="bevestiging">
            <span>Toelichting:</span>
            Lorem ipsum dolor sit amet
          </p>
          <p class="warning" role="group" aria-label="waarschuwing">
            <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
          </p>
          <p class="error" role="group" aria-label="foutmelding">
            <span>Foutmelding:</span> Lorem ipsum dolor sit amet
          </p>
          <p class="confirmation" role="group" aria-label="bevestiging">
            <span>Bevestiging:</span>
            Lorem ipsum dolor sit amet
          </p>

          <div class="explanation" role="group" aria-label="toelichting">
            <span>Toelichting:</span>
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div class="warning" role="group" aria-label="waarschuwing">
            <span>Waarschuwing:</span>
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div class="error" role="group" aria-label="foutmelding">
            <span>Foutmelding:</span>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Consectetur adepicing elit.</p>
          </div>

          <div class="confirmation" role="group" aria-label="bevestiging">
            <span>Bevestiging:</span>
            <p>Lorem ipsum dolor sit amet</p>
            <ul>
              <li>Loren ipsum dolor sit amet</li>
              <li>Loren ipsum dolor sit amet</li>
            </ul>
          </div>

          <label for="voorbeeld-text-input-1">Voorbeeld text input</label>
          <input
            id="voorbeeld-text-input-1"
            name="voorbeeld-text-input-1"
            placeholder="voorbeeld text input"
            type="text"
          />

          <label for="voorbeeld-e-mailadres-1">Voorbeeld e-mailadres</label>
          <input
            id="voorbeeld-e-mailadres-1"
            name="voorbeeld-e-mailadres-1"
            placeholder="mail@example.com"
            type="email"
          />

          <label for="voorbeeld-phonenumber-1">Voorbeeld Telefoonnummer</label>
          <input
            id="voorbeeld-phonenumber-1"
            pattern={"[0-9]{10}"}
            name="voorbeeld-phonenumber-1"
            placeholder="e.g 0612345678"
            type="tel"
          />

          <label for="voorbeeld-tekstveld-1">Voorbeeld tekstveld</label>
          <textarea
            id="voorbeeld-tekstveld-1"
            name="voorbeeld-tekstveld-1"
            placeholder="Jouw vraag of opmerking"
            rows="5"
          ></textarea>

          <label for="field-with-action-button-1">Veld met actieknop</label>
          <span class="nota-bene">Dit veld is verplicht</span>
          <div class="horizontal-view">
            <input
              id="field-with-action-button-1"
              name="field-with-action-button-1"
              placeholder="Lorem ipsum"
              type="text"
            />
            <button class="icon icon-cat">Annuleren</button>
          </div>

          <div class="checkbox">
            <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
            <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
          </div>

          <div class="checkbox">
            <input type="checkbox" id="checkbox-example-base-long" name="standaard-checkbox" />
            <label for="checkbox-example-base-long"
              >Checkbox label test met een lange naam. Lorem ipsum dolor sit amet</label
            >
          </div>

          <div class="checkbox">
            <input
              type="checkbox"
              id="checkbox-example-checked-base"
              name="checked-checkbox"
              checked={true}
            />
            <label for="checkbox-example-checked-base">Lorem ipsum dolor sit amet</label>
          </div>

          <div class="required">
            <span class="nota-bene">Dit veld is verplicht</span>
            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-required"
                name="verplicht"
                required={true}
              />
              <label for="checkbox-example-required">verplicht selectievak</label>
            </div>
          </div>

          <div class="checkbox">
            <input
              type="checkbox"
              id="checkbox-example-disabled"
              name="disabled-checkbox"
              disabled={true}
            />
            <label for="checkbox-example-disabled">Lorem ipsum dolor sit amet</label>
          </div>

          <div>
            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-error-1"
                name="voorwaarden"
                value="checkbox input error"
                class="error"
                aria-describedby="checkbox-example-error-1-message"
              />
              <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
            </div>
            <p class="error" id="checkbox-example-error-1-message">
              <span>Foutmelding</span> Lorem ipsum
            </p>
          </div>

          <div class="required">
            <span class="nota-bene">Dit veld is verplicht</span>
            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-required-with-error"
                name="verplicht"
                required={true}
              />
              <label for="checkbox-example-required-with-error"
                >verplicht selectievak met notificatie</label
              >
            </div>
            <p class="error" id="checkbox-example-required-with-error-message">
              <span>Foutmelding</span> Lorem ipsum
            </p>
          </div>

          <fieldset>
            <legend>Examples</legend>
            <div class="checkbox">
              <input type="checkbox" id="checkbox-example-list-1" name="standaard-checkbox" />
              <label for="checkbox-example-list-1">Lorem ipsum dolor sit amet</label>
            </div>

            <div class="checkbox">
              <input type="checkbox" id="checkbox-example-list-2" name="standaard-checkbox" />
              <label for="checkbox-example-list-2">Lorem ipsum dolor sit amet</label>
            </div>

            <div class="checkbox">
              <input type="checkbox" id="checkbox-example-list-3" name="standaard-checkbox" />
              <label for="checkbox-example-list-3">Lorem ipsum dolor sit amet</label>
            </div>

            <div class="checkbox">
              <input type="checkbox" id="checkbox-example-list-4" name="standaard-checkbox" />
              <label for="checkbox-example-list-4">Lorem ipsum dolor sit amet</label>
            </div>
          </fieldset>

          <div class="radio">
            <input
              type="radio"
              id="radio-example-default-1"
              name="standaard-radiobutton"
              value="value"
            />
            <label for="radio-example-default-1">Lorem ipsum dolor sit amet</label>
          </div>

          <div class="radio">
            <input
              type="radio"
              id="radio-example-checked-1"
              name="standaard-radiobutton"
              value="value"
              checked={true}
            />
            <label for="radio-example-checked-1">Lorem ipsum dolor sit amet</label>
          </div>

          <div>
            <div class="radio">
              <input
                type="radio"
                id="radio-example-checked-1-notification"
                name="standaard-radiobutton"
                value="value"
                checked={true}
              />
              <label for="radio-example-checked-1-notification">Lorem ipsum dolor sit amet</label>
            </div>
            <p class="error" id="radio-example-checked-1-notification-message">
              <span>Foutmelding</span> Lorem ipsum
            </p>
          </div>

          <div>
            <span class="nota-bene">Dit veld is verplicht</span>
            <div class="radio">
              <input
                type="radio"
                id="radio-example-required-1"
                name="voorwaarden"
                required={true}
              />
              <label for="radio-example-required-1">Dit veld is verplicht</label>
            </div>
          </div>

          <div class="radio">
            <input
              type="radio"
              id="radio-example-disabled-1"
              name="disabled-radiobutton"
              value="value"
              disabled={true}
            />
            <label for="radio-example-disabled-1">Uitgeschakeld keuzevak</label>
          </div>

          <fieldset>
            <legend>Lorem ipsum</legend>
            <div class="radio">
              <input type="radio" id="radio-list-item-1" name="radio-option" value="value 1" />
              <label for="radio-list-item-1">Optie 1</label>
            </div>

            <div class="radio">
              <input type="radio" id="radio-list-item-2" name="radio-option" value="value 2" />
              <label for="radio-list-item-2">Optie 2</label>
            </div>

            <div class="radio">
              <input type="radio" id="radio-list-item-3" name="radio-option" value="value 3" />
              <label for="radio-list-item-3">Optie 3</label>
            </div>

            <div class="radio">
              <input
                type="radio"
                id="radio-list-long-name-1"
                name="radio-option"
                value="value long name"
              />
              <label for="radio-list-long-name-1"
                >Radio label test met een lange naam. Lorem ipsum dolor sit amet</label
              >
            </div>

            <div>
              <div class="radio">
                <input
                  type="radio"
                  id="radio-list-long-name-2"
                  name="radio-option"
                  value="value long name"
                  class="error"
                  aria-label="foutmelding"
                />
                <label for="radio-list-long-name-2">Radio label met error</label>
              </div>
              <p class="error" id=""><span>Foutmelding:</span> Lorem ipsum</p>
            </div>
          </fieldset>

          <div>
            <label for="color-input-1">Selecteer de gewenste kleur</label>
            <input id="color-input-1" name="color-input" type="color" value="#ffffff" />
          </div>

          <label for="voorbeeld-text-input-error-1">Voorbeeld invoerveld foutmelding</label>
          <div>
            <input
              id="voorbeeld-text-input-error-1"
              class="error"
              name="voorbeeld-text-input-error-1"
              aria-describedby="voorbeeld-text-input-error-1-message"
              placeholder="Voorbeeld invoerveld foutmelding"
              type="text"
              aria-invalid="true"
            />
            <p class="error" id="voorbeeld-text-input-error-1-message">
              <span>Foutmelding:</span> Lorem ipsum dolor sit amet
            </p>
          </div>

          <label for="voorbeeld-text-input-explanation-1">Voorbeeld invoerveld toelichting</label>
          <div>
            <p class="explanation" id="voorbeeld-text-input-explanation-1-message">
              <span>Toelichting:</span> Lorem ipsum dolor sit amet
            </p>
            <input
              id="voorbeeld-text-input-explanation-1"
              class="explanation"
              name="voorbeeld-text-input-explanation-1"
              placeholder="Voorbeeld invoerveld toelichting"
              type="text"
              aria-describedby="voorbeeld-text-input-explanation-1-message"
            />
          </div>

          <label for="voorbeeld-text-input-warning-1">Voorbeeld invoerveld waarschuwing</label>
          <div>
            <p class="warning" id="voorbeeld-text-input-warning-1-message">
              <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
            </p>
            <input
              id="voorbeeld-text-input-warning-1"
              class="warning"
              name="voorbeeld-text-input-warning-1"
              placeholder="Voorbeeld invoerveld waarschuwing"
              type="text"
              aria-describedby="voorbeeld-text-input-warning-1-message"
            />
          </div>

          <label for="voorbeeld-tekstveld-error">Voorbeeld tekstveld foutmelding</label>
          <div>
            <textarea
              id="voorbeeld-tekstveld-error"
              class="error"
              name="voorbeeld-tekstveld-error"
              placeholder="Voorbeeld tekstveld foutmelding"
              rows="3"
              aria-describedby="voorbeeld-tekstveld-error-message"
              aria-invalid="true"
            ></textarea>
            <p class="error" id="voorbeeld-tekstveld-error-message">
              <span>Foutmelding:</span> Lorem ipsum dolor sit amet
            </p>
          </div>

          <label for="voorbeeld-tekstveld-explanation">Voorbeeld tekstveld toelichting</label>
          <div>
            <p class="explanation" id="voorbeeld-tekstveld-explanation-message">
              <span>Toelichting:</span> Lorem ipsum dolor sit amet
            </p>
            <textarea
              id="voorbeeld-tekstveld-explanation"
              class="explanation"
              name="voorbeeld-tekstveld-explanation"
              placeholder="Voorbeeld tekstveld toelichting"
              rows="3"
              aria-describedby="voorbeeld-tekstveld-explanation-message"
            ></textarea>
          </div>

          <label for="voorbeeld-tekstveld-warning">Voorbeeld tekstveld waarschuwing</label>
          <div>
            <p class="warning" id="voorbeeld-tekstveld-warning-message">
              <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
            </p>
            <textarea
              id="voorbeeld-tekstveld-warning"
              class="warning"
              name="voorbeeld-tekstveld-warning"
              placeholder="Voorbeeld tekstveld waarschuwing"
              rows="3"
              aria-describedby="voorbeeld-tekstveld-warning-message"
            ></textarea>
          </div>

          <label for="select-1">Selectielijst</label>
          <select id="select-1" name="select-1">
            <option value="1">Optie 1</option>
            <option value="2">Optie 2</option>
            <option value="3">Optie 3</option>
          </select>

          <label for="select-required-1">Verplichte selectielijst</label>
          <span class="nota-bene">Dit veld is verplicht</span>
          <select id="select-required-1" name="select-required-1" required={true}>
            <option value="">--Please choose an option--</option>
            <option value="1">Optie 1</option>
            <option value="2">Optie 2</option>
            <option value="3">Optie 3</option>
          </select>

          <label for="select-disabled-1">Uitgeschakelde selectielijst</label>
          <select disabled={true} id="select-disabled-1" name="select-disabled-1">
            <option value="1">Optie 1</option>
            <option value="2">Optie 2</option>
            <option value="3">Optie 3</option>
          </select>

          <label for="select-selected-1">Selectielijst met voorgeselecteerde optie</label>
          <select id="select-selected-1" name="select-selected-1">
            <option value="1">Optie 1</option>
            <option value="3">Optie 2</option>
            <option value="2" selected={true}>Voorgeselecteerd</option>
          </select>

          <label for="select-error">Selectielijst met foutmelding</label>
          <div>
            <p class="error" id="select-error-message">
              <span>Foutmelding:</span> Lorem ipsum dolor sit amet
            </p>
            <select
              id="select-error"
              name="select"
              class="error"
              aria-describedby="select-error-message"
              aria-invalid="true"
            >
              <option value="1">Optie 1</option>
              <option value="2">Optie 2</option>
              <option value="3">Optie 3</option>
            </select>
          </div>

          <label for="select-explanation">Selectielijst met toelichting</label>
          <div>
            <p class="explanation" id="select-explanation-message">
              <span>Toelichting:</span> Lorem ipsum dolor sit amet
            </p>
            <select
              id="select-explanation"
              name="select"
              class="explanation"
              aria-describedby="select-explanation"
            >
              <option value="1">Optie 1</option>
              <option value="2">Optie 2</option>
              <option value="3">Optie 3</option>
            </select>
          </div>

          <label for="select-warning">Selectielijst met waarschuwing</label>
          <div>
            <p class="warning" id="select-warning-message">
              <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
            </p>
            <select
              id="select-warning"
              name="select"
              class="warning"
              aria-describedby="select-warning-message"
            >
              <option value="1">Optie 1</option>
              <option value="2">Optie 2</option>
              <option value="3">Optie 3</option>
            </select>
          </div>

          <label for="select-multiple-1">Meerdere opties selecteren</label>
          <div class="explanation" role="group" id="select-multiple-1-message">
            <span>Toelichting:</span>
            <p>
              Het selecteren van meerdere opties hangt af van uw gebruikte systeem. Enkele
              voorbeelden:
            </p>
            <ul>
              <li>
                Windows: Houd de <code>ctrl</code>-knop ingedrukt en selecteer met de muis de
                gewenste opties.
              </li>
              <li>
                Mac: Houd de <code>cmd</code>-knop ingedrukt en selecteer met de muis de gewenste
                opties.
              </li>
            </ul>
          </div>
          <select
            id="select-multiple-1"
            name="select-multiple-1"
            multiple={true}
            aria-describedby="select-multiple-1-message"
          >
            <option value="1">Optie 1</option>
            <option value="2">Optie 2</option>
            <option value="3">Optie 3</option>
          </select>

          <label for="select-mulitple-size-1">Meerdere opties selecteren</label>
          <div class="explanation" role="group" id="select-mulitple-size-1-message">
            <span>Toelichting:</span>
            <p>
              Het selecteren van meerdere opties hangt af van uw gebruikte systeem. Enkele
              voorbeelden:
            </p>
            <ul>
              <li>
                Windows: Houd de <code>ctrl</code>-knop ingedrukt en selecteer met de muis de
                gewenste opties.
              </li>
              <li>
                Mac: Houd de <code>cmd</code>-knop ingedrukt en selecteer met de muis de gewenste
                opties.
              </li>
            </ul>
          </div>

          <select
            id="select-mulitple-size-1"
            name="select-mulitple-size-1"
            multiple={true}
            size="3"
            aria-describedby="select-mulitple-size-1-message"
          >
            <option value="1">Optie 1</option>
            <option value="2">Optie 2</option>
            <option value="3">Optie 3</option>
            <option value="4">Optie 4</option>
            <option value="5">Optie 5</option>
            <option value="6">Optie 6</option>
          </select>

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
          <a href="">Link within form test</a>

          <div class="button-container">
            <button>Button 1</button>
            <button>Button 2</button>
          </div>

          <fieldset>
            <legend>Gegroepeerde knoppen test</legend>
            <div class="button-container">
              <button>Button 1</button>
              <button>Button 2</button>
            </div>
          </fieldset>

          <button type="submit">Verzend</button>
        </form>

        <h2 id="form-with-columns">Formulier met kolommen</h2>
        <form method="post" class="horizontal-view">
          <p class="explanation" role="group" aria-label="toelichting">
            <span>Toelichting:</span> Lorem ipsum dolor sit amet
          </p>
          <p class="warning" role="group" aria-label="waarschuwing">
            <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
          </p>
          <p class="error" role="group" aria-label="foutmelding">
            <span>Foutmelding:</span> Lorem ipsum dolor sit amet
          </p>
          <p class="confirmation" role="group" aria-label="bevestiging">
            <span>Bevestiging:</span> Lorem ipsum dolor sit amet
          </p>
          <div class="explanation" role="group" aria-label="toelichting">
            <span>Toelichting:</span>
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div class="warning" role="group" aria-label="waarschuwing">
            <span>Waarschuwing:</span>
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div class="error" role="group" aria-label="foutmelding">
            <span>Foutmelding:</span>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Consectetur adepicing elit.</p>
          </div>

          <div class="confirmation" role="group" aria-label="bevestiging">
            <span>Bevestiging:</span>
            <p>Lorem ipsum dolor sit amet</p>
            <ul>
              <li>Loren ipsum dolor sit amet</li>
              <li>Loren ipsum dolor sit amet</li>
            </ul>
          </div>

          <div>
            <label for="voorbeeld-text-input-2">Voorbeeld text input</label>
            <input
              id="voorbeeld-text-input-2"
              name="voorbeeld-text-input-2"
              placeholder="voorbeeld text input"
              type="text"
            />
          </div>

          <div>
            <label for="voorbeeld-e-mailadres-2">Voorbeeld e-mailadres</label>
            <input
              id="voorbeeld-e-mailadres-2"
              name="voorbeeld-e-mailadres-2"
              placeholder="mail@example.com"
              type="email"
            />
          </div>

          <div>
            <label for="voorbeeld-phonenumber-2">Voorbeeld telefoonnummer</label>
            <input
              id="voorbeeld-phonenumber-2"
              pattern={"[0-9]{10}"}
              name="voorbeeld-phonenumber-2"
              placeholder="e.g 0612345678"
              type="tel"
            />
          </div>

          <div>
            <label for="voorbeeld-tekstveld-2">Voorbeeld tekstveld</label>
            <textarea
              id="voorbeeld-tekstveld-2"
              name="voorbeeld-tekstveld-2"
              placeholder="Jouw vraag of opmerking"
              rows="5"
            ></textarea>
          </div>

          <div>
            <label for="text-form-username-4">Gebruikersnaam</label>
            <div class="required">
              <span class="nota-bene">Dit veld is verplicht</span>
              <input
                id="text-form-username-4"
                name="text-form-username-4"
                placeholder="gebruikersnaam"
                title="Gebruikersnaam"
                type="text"
                required={true}
              />
            </div>
          </div>

          <div class="required">
            <label for="inputveld-knop">Voorbeeld inputveld met knop</label>
            <div>
              <span class="nota-bene">Dit veld is verplicht</span>
              <div class="horizontal-view">
                <input
                  id="inputveld-knop"
                  name="inputveld-knop"
                  placeholder="Lorem ipsum"
                  type="text"
                />
                <button class="icon icon-cat">Annuleren</button>
              </div>
            </div>
          </div>

          <div class="checkbox">
            <input type="checkbox" id="checkbox-example-default-2" name="standaard-checkbox" />
            <label for="checkbox-example-default-2">Lorem ipsum dolor sit amet</label>
          </div>

          <div class="checkbox">
            <input type="checkbox" id="checkbox-example-default-long-3" name="standaard-checkbox" />
            <label for="checkbox-example-default-long-3"
              >Checkbox label test met een lange naam. Lorem ipsum dolor sit amet</label
            >
          </div>

          <div class="checkbox">
            <input
              type="checkbox"
              id="checkbox-example-checked-2"
              name="checked-checkbox"
              checked={true}
            />
            <label for="checkbox-example-checked-2">Lorem ipsum dolor sit amet</label>
          </div>

          <div class="option-group required">
            <span class="nota-bene">Dit veld is verplicht</span>
            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-required-2"
                name="voorwaarden"
                required={true}
              />
              <label for="checkbox-example-required-2">verplicht selectievak</label>
            </div>
          </div>

          <div class="checkbox">
            <input
              type="checkbox"
              id="checkbox-example-disabled-2"
              name="voorwaarden"
              value="disabled checkbox input"
              disabled={true}
            />
            <label for="checkbox-example-disabled-2">Uitgeschakeld selectievak</label>
          </div>

          <fieldset class="grouped-choice-list">
            <legend>Lorem ipsum</legend>

            <div class="checkbox">
              <input type="checkbox" id="checkbox-list-item-4" name="option-1" />
              <label for="checkbox-list-item-4">Optie 1</label>
            </div>

            <div class="checkbox">
              <input type="checkbox" id="checkbox-list-item-5" name="option-2" />
              <label for="checkbox-list-item-5">Optie 2</label>
            </div>

            <div class="checkbox">
              <input type="checkbox" id="checkbox-list-item-6" name="option-3" />
              <label for="checkbox-list-item-6">Optie 3</label>
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-default-long-4"
                name="standaard-checkbox"
              />
              <label for="checkbox-example-default-long-4"
                >Checkbox label test met een lange naam. Lorem ipsum dolor sit amet</label
              >
            </div>
          </fieldset>

          <fieldset class="grouped-choice-list">
            <legend>Lijst met fieldset</legend>
            <div class="checkbox">
              <input type="checkbox" id="checkbox-list-item-7" name="option-1" />
              <label for="checkbox-list-item-7">Optie 1</label>
            </div>

            <div class="checkbox">
              <input type="checkbox" id="checkbox-list-item-8" name="option-2" />
              <label for="checkbox-list-item-8">Optie 2</label>
            </div>

            <div class="checkbox">
              <input type="checkbox" id="checkbox-list-item-9" name="option-3" />
              <label for="checkbox-list-item-9">Optie 3</label>
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-default-long-5"
                name="standaard-checkbox"
              />
              <label for="checkbox-example-default-long-5"
                >Checkbox label test met een lange naam. Lorem ipsum dolor sit amet</label
              >
            </div>
          </fieldset>

          <div class="radio">
            <input
              type="radio"
              id="radio-example-default-2"
              name="standaard-radiobutton"
              value="value"
              checked={true}
            />
            <label for="radio-example-default-2">Lorem ipsum dolor sit amet</label>
          </div>

          <div class="option-group required">
            <span class="nota-bene">Dit veld is verplicht</span>
            <div class="radio">
              <input
                type="radio"
                id="radio-example-required-2"
                name="verplichte-radiobutton"
                required={true}
              />
              <label for="radio-example-required-2">verplicht keuzeveld</label>
            </div>
          </div>

          <div class="radio">
            <input
              type="radio"
              id="radio-example-disabled-2"
              name="disabled-radiobutton"
              value="value"
              disabled={true}
            />
            <label for="radio-example-disabled-2">Uitgeschakeld keuzevak</label>
          </div>

          <fieldset class="grouped-choice-list">
            <legend>Lijst met fieldset</legend>

            <div class="radio">
              <input type="radio" id="radio-2-list-item-1" name="radio-option-2" value="value 1" />
              <label for="radio-2-list-item-1">Optie 1</label>
            </div>

            <div class="radio">
              <input type="radio" id="radio-2-list-item-2" name="radio-option-2" value="value 2" />
              <label for="radio-2-list-item-2">Optie 2</label>
            </div>

            <div class="radio">
              <input type="radio" id="radio-2-list-item-3" name="radio-option-2" value="value 3" />
              <label for="radio-2-list-item-3">Optie 3</label>
            </div>

            <div class="radio">
              <input
                type="radio"
                id="radio-2-list-long-name-1"
                name="radio-option-2"
                value="value 3"
              />
              <label for="radio-2-list-long-name-1"
                >Radio label test met een lange naam. Lorem ipsum dolor sit amet</label
              >
            </div>
          </fieldset>

          <div>
            <label for="color-input-2">Selecteer de gewenste kleur</label>
            <input id="color-input-2" name="color-input" type="color" value="#ffffff" />
          </div>

          <div class="required">
            <label for="text-form-username-1">Gebruikersnaam</label>
            <div>
              <span class="nota-bene">Dit veld is verplicht</span>
              <input
                id="text-form-username-1"
                name="text-form-username-1"
                pattern={"^[a-zA-Z0-9_.-]*$"}
                placeholder="gebruikersnaam"
                required={true}
                title="Gebruikersnaam mag alleen alfanumerieke tekens (letters A-Z, cijfers 0-9) bevatten, met uitzondering van onderstrepingstekens."
                type="text"
              />
            </div>
          </div>

          <div>
            <label for="text-form-password-1">Wachtwoord</label>
            <input
              id="text-form-password-1"
              name="text-form-password-1"
              pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
              placeholder="wachtwoord"
              title="Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1 hoofdletter, 1 kleineletter en 1 cijfer."
              type="password"
            />
          </div>

          <div>
            <label for="voorbeeld-text-input-3">Voorbeeld text input</label>
            <input
              id="voorbeeld-text-input-3"
              name="voorbeeld-text-input-3"
              placeholder="voorbeeld text input"
              type="text"
            />
          </div>

          <div>
            <label for="voorbeeld-text-input-error-with-link"
              >Voorbeeld invoerveld foutmelding</label
            >
            <div>
              <input
                id="voorbeeld-text-input-error-with-link"
                class="error"
                name="voorbeeld-text-input-error-with-link"
                placeholder="Voorbeeld invoerveld foutmelding"
                type="text"
                aria-describedby="voorbeeld-text-input-error-with-link-message"
                aria-invalid="true"
              />
              <p class="error" id="voorbeeld-text-input-error-with-link-message">
                <span>Foutmelding:</span> Lorem ipsum <a href="">dolor sit amet</a>
              </p>
            </div>
          </div>

          <div>
            <label for="voorbeeld-text-input-warning-2">Voorbeeld invoerveld waarschuwing</label>
            <div>
              <p class="warning" id="voorbeeld-text-input-warning-2-message">
                <span>Waarschuwing:</span> Lorem ipsum
              </p>
              <input
                id="voorbeeld-text-input-warning-2"
                class="warning"
                name="voorbeeld-text-input-warning-2"
                placeholder="Voorbeeld invoerveld waarschuwing"
                type="text"
                aria-describedby="voorbeeld-text-input-warning-2-message"
              />
            </div>
          </div>

          <div>
            <label for="voorbeeld-text-input-explanation-2">Voorbeeld invoerveld toelichting</label>
            <div>
              <p class="explanation" id="voorbeeld-text-input-explanation-2-message">
                <span>Toelichting:</span> Lorem ipsum
              </p>
              <input
                id="voorbeeld-text-input-explanation-2"
                class="explanation"
                name="voorbeeld-text-input-explanation-2"
                placeholder="Voorbeeld invoerveld toelichting"
                type="text"
                aria-describedby="voorbeeld-text-input-explanation-2-message"
              />
            </div>
          </div>

          <div class="option-group">
            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-default-3"
                name="standaard-checkbox"
                aria-invalid="true"
                aria-describedby="checkbox-example-default-3-message"
              />
              <label for="checkbox-example-default-3">Lorem ipsum dolor sit amet</label>
            </div>
            <p class="error" id="checkbox-example-default-3-message">
              <span>Foutmelding:</span> Lorem ipsum dolor sit amet
            </p>
          </div>

          <div class="option-group required">
            <span class="nota-bene">Dit veld is verplicht</span>
            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-required-3"
                name="voorwaarden"
                required={true}
                aria-invalid="true"
                aria-describedby="checkbox-example-required-3-message"
              />
              <label for="checkbox-example-required-3">verplicht selectievak</label>
            </div>
            <p class="error" id="checkbox-example-required-3-message">
              <span>Foutmelding:</span> Lorem ipsum dolor sit amet
            </p>
          </div>

          <div>
            <label for="voorbeeld-text-input-4">Voorbeeld text input</label>
            <div>
              <input
                id="voorbeeld-text-input-4"
                name="voorbeeld-text-input-4"
                placeholder="voorbeeld text input"
                type="text"
                aria-describedby="voorbeeld-text-input-4-message"
              />
              <p class="explanation" id="voorbeeld-text-input-4-message">
                <span>Toelichting:</span> Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <div>
            <label for="single_select-1">Single select</label>
            <div>
              <select id="single_select-1" name="single_select-1">
                <option value="1">Optie 1</option>
                <option value="2">Optie 2</option>
                <option value="3">Optie 3</option>
              </select>
            </div>
          </div>

          <div class="required">
            <label for="required_single_select-1">Single select</label>
            <div>
              <span class="nota-bene">Dit veld is verplicht</span>
              <div>
                <select
                  id="required_single_select-1"
                  name="required_single_select-1"
                  required={true}
                >
                  <option value="">--Please choose an option--</option>
                  <option value="1">Optie 1</option>
                  <option value="2">Optie 2</option>
                  <option value="3">Optie 3</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label for="disabled_single_select-1">Disabled single select</label>
            <div>
              <select disabled={true} id="disabled_single_select-1" name="disabled_single_select-1">
                <option value="1">Optie 1</option>
                <option value="2">Optie 2</option>
                <option value="3">Optie 3</option>
              </select>
            </div>
          </div>

          <div>
            <label for="select-multiple-2">Meerdere opties selecteren</label>
            <div>
              <div class="explanation" role="group" id="select-multiple-2-message">
                <span>Toelichting:</span>
                <p>
                  Het selecteren van meerdere opties hangt af van uw gebruikte systeem. Enkele
                  voorbeelden:
                </p>
                <ul>
                  <li>
                    Windows: Houd de <code>ctrl</code>-knop ingedrukt en selecteer met de muis de
                    gewenste opties.
                  </li>
                  <li>
                    Mac: Houd de <code>cmd</code>-knop ingedrukt en selecteer met de muis de
                    gewenste opties.
                  </li>
                </ul>
              </div>
              <select
                id="select-multiple-2"
                name="select-multiple-2"
                multiple={true}
                aria-describedby="select-multiple-2-message"
              >
                <option value="1">Optie 1</option>
                <option value="2">Optie 2</option>
                <option value="3">Optie 3</option>
              </select>
            </div>
          </div>

          <div>
            <label for="select-mulitple-size-2">Meerdere opties selecteren</label>
            <div>
              <div class="explanation" role="group" id="select-mulitple-size-2-message">
                <span>Toelichting:</span>
                <p>
                  Het selecteren van meerdere opties hangt af van uw gebruikte systeem. Enkele
                  voorbeelden:
                </p>
                <ul>
                  <li>
                    Windows: Houd de <code>ctrl</code>-knop ingedrukt en selecteer met de muis de
                    gewenste opties.
                  </li>
                  <li>
                    Mac: Houd de <code>cmd</code>-knop ingedrukt en selecteer met de muis de
                    gewenste opties.
                  </li>
                </ul>
              </div>

              <select
                id="select-mulitple-size-2"
                name="select-mulitple-size-2"
                multiple={true}
                size="3"
                aria-describedby="select-mulitple-size-2-message"
              >
                <option value="1">Optie 1</option>
                <option value="2">Optie 2</option>
                <option value="3">Optie 3</option>
                <option value="4">Optie 4</option>
                <option value="5">Optie 5</option>
                <option value="6">Optie 6</option>
              </select>
            </div>
          </div>

          <div>
            <label for="select-optgroup-2">Gegroepeerde opties</label>
            <select id="select-optgroup-2" name="select-optgroup-2">
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
          </div>

          <div>
            <label for="input_with_link_1">Input with link</label>
            <div>
              <input id="input_with_link_1" name="input with link" />
              <a href="">Link within form test</a>
            </div>
          </div>

          <button>Test button</button>
          <a href="">Link within form test</a>

          <div class="button-container">
            <button>Button 1</button>
            <button>Button 2</button>
          </div>

          <fieldset>
            <legend>Gegroepeerde knoppen test</legend>
            <div class="button-container">
              <button>Button 1</button>
              <button>Button 2</button>
            </div>
          </fieldset>

          <button type="submit">Verzend</button>
        </form>

        <h2 id="form-with-fieldset">Fieldset</h2>
        <form method="post">
          <p class="explanation" role="group" aria-label="toelichting">
            <span>Toelichting:</span> Lorem ipsum dolor sit amet
          </p>
          <p class="warning" role="group" aria-label="waarschuwing">
            <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
          </p>
          <p class="error" role="group" aria-label="foutmelding">
            <span>Foutmelding:</span> Lorem ipsum dolor sit amet
          </p>
          <p class="confirmation" role="group" aria-label="bevestiging">
            <span>Bevestiging:</span> Lorem ipsum dolor sit amet
          </p>

          <div class="explanation" role="group" aria-label="toelichting">
            <span>Toelichting:</span>
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div class="warning" role="group" aria-label="waarschuwing">
            <span>Waarschuwing:</span>
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div class="error" role="group" aria-label="foutmelding">
            <span>Foutmelding:</span>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Consectetur adepicing elit.</p>
          </div>

          <div class="confirmation" role="group" aria-label="bevestiging">
            <span>Bevestiging:</span>
            <p>Lorem ipsum dolor sit amet</p>
            <ul>
              <li>Loren ipsum dolor sit amet</li>
              <li>Loren ipsum dolor sit amet</li>
            </ul>
          </div>

          <fieldset>
            <legend>Invoervelden</legend>
            <label for="voorbeeld-text-input-5">Text input</label>
            <input
              id="voorbeeld-text-input-5"
              name="voorbeeld-text-input-5"
              placeholder="voorbeeld text input"
              type="text"
            />

            <label for="voorbeeld-e-mailadres-3">E-mailadres</label>
            <input
              id="voorbeeld-e-mailadres-3"
              name="voorbeeld-e-mailadres-3"
              placeholder="mail@example.com"
              type="email"
            />

            <label for="voorbeeld-phonenumber-3">Telefoonnummer</label>
            <input
              id="voorbeeld-phonenumber-3"
              pattern={"[0-9]{10}"}
              name="voorbeeld-phonenumber-3"
              placeholder="e.g 0612345678"
              type="tel"
            />

            <label for="voorbeeld-tekstveld-3">tekstveld</label>
            <textarea
              id="voorbeeld-tekstveld-3"
              name="voorbeeld-tekstveld-3"
              placeholder="Jouw vraag of opmerking"
              rows="5"
            ></textarea>
          </fieldset>

          <fieldset>
            <legend>Voorbeeld invoerveld met knop</legend>
            <label for="voorbeeld-input-knop3">Voorbeeld input met knop</label>
            <span class="nota-bene">Dit veld is verplicht</span>
            <div class="horizontal-view">
              <input
                id="voorbeeld-input-knop3"
                name="voorbeeld-input-knop3"
                placeholder="lorem ipsum"
                type="text"
              />
              <button class="icon icon-cat">Reset</button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Selectievak</legend>
            <div class="checkbox">
              <input type="checkbox" id="checkbox-example-default-4" name="standaard-checkbox" />
              <label for="checkbox-example-default-4">selecievak</label>
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-default-long-6"
                name="standaard-checkbox"
              />
              <label for="checkbox-example-default-long-6"
                >Checkbox label test met een lange naam. Lorem ipsum dolor sit amet</label
              >
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-checked-3"
                name="checked-checkbox"
                checked={true}
              />
              <label for="checkbox-example-checked-3">Geselecteerd selectievak</label>
            </div>

            <div class="required">
              <span class="nota-bene">Dit veld is verplicht</span>
              <div class="checkbox">
                <input
                  type="checkbox"
                  id="checkbox-example-required-4"
                  name="voorwaarden"
                  required={true}
                />
                <label for="checkbox-example-required-4">verplicht selectievak</label>
              </div>
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-disabled-3"
                name="voorwaarden"
                value="disabled checkbox input"
                disabled={true}
              />
              <label for="checkbox-example-disabled-3">Uitgeschakeld selectievak</label>
            </div>

            <fieldset>
              <legend>Selectievak opties kolommen</legend>
              <div class="column-3">
                <div class="checkbox">
                  <input type="checkbox" id="checkbox-list-item-10" name="option-1" />
                  <label for="checkbox-list-item-10">Optie 1</label>
                </div>

                <div class="checkbox">
                  <input type="checkbox" id="checkbox-list-item-11" name="option-2" />
                  <label for="checkbox-list-item-11">Optie 2</label>
                </div>

                <div class="checkbox">
                  <input type="checkbox" id="checkbox-list-item-12" name="option-3" />
                  <label for="checkbox-list-item-12">Optie 3</label>
                </div>

                <div class="checkbox">
                  <input
                    type="checkbox"
                    id="checkbox-example-default-long-7"
                    name="standaard-checkbox"
                  />
                  <label for="checkbox-example-default-long-7"
                    >Checkbox label test met een lange naam. Lorem ipsum dolor sit amet</label
                  >
                </div>
              </div>
            </fieldset>
          </fieldset>

          <fieldset>
            <legend>Radio buttons</legend>
            <div class="radio">
              <input
                type="radio"
                id="radio-example-default-3"
                name="standaard-radiobutton"
                value="value"
              />
              <label for="radio-example-default-3">Lorem ipsum dolor sit amet</label>
            </div>

            <div class="radio">
              <input
                type="radio"
                id="radio-example-checked-2"
                name="standaard-radiobutton"
                value="value"
                checked={true}
              />
              <label for="radio-example-checked-2">Lorem ipsum dolor sit amet</label>
            </div>

            <div class="radio required">
              <span class="nota-bene">Dit veld is verplicht</span>
              <input
                type="radio"
                id="radio-example-required-3"
                name="voorwaarden"
                required={true}
              />
              <label for="radio-example-required-3">Dit veld is verplicht</label>
            </div>

            <div class="radio">
              <input
                type="radio"
                id="radio-example-disabled-3"
                name="disabled-radiobutton"
                value="value"
                disabled={true}
              />
              <label for="radio-example-disabled-3">Uitgeschakeld keuzevak</label>
            </div>

            <fieldset>
              <legend>Radio selectielijst</legend>
              <label for="radio-list-item-4">Lorem ipsum</label>
              <div class="radio">
                <input type="radio" id="radio-list-item-4" name="radio-option" value="value 1" />
                <label for="radio-list-item-4">Optie 1</label>
              </div>

              <div class="radio">
                <input type="radio" id="radio-list-item-5" name="radio-option" value="value 2" />
                <label for="radio-list-item-5">Optie 2</label>
              </div>

              <div class="radio">
                <input type="radio" id="radio-list-item-6" name="radio-option" value="value 3" />
                <label for="radio-list-item-6">Optie 3</label>
              </div>

              <div class="radio">
                <input
                  type="radio"
                  id="radio-list-long-name-3"
                  name="radio-option"
                  value="value long name"
                />
                <label for="radio-list-long-name-3"
                  >Radio label test met een lange naam. Lorem ipsum dolor sit amet</label
                >
              </div>
            </fieldset>
          </fieldset>

          <fieldset>
            <legend>Kleurselectie</legend>
            <div>
              <label for="color-input-3">Selecteer de gewenste kleur</label>
              <input id="color-input-3" name="color-input" type="color" value="#ffffff" />
            </div>
          </fieldset>

          <fieldset>
            <legend>Meldingen</legend>
            <label for="voorbeeld-text-input-error-4">Voorbeeld invoerveld foutmelding</label>

            <div>
              <input
                id="voorbeeld-text-input-error-4"
                class="error"
                name="voorbeeld-text-input-error-4"
                placeholder="Voorbeeld invoerveld foutmelding"
                type="text"
                aria-describedby="voorbeeld-text-input-error-4-message"
                aria-invalid="true"
              />
              <p class="error" id="voorbeeld-text-input-error-4-message">
                <span>Foutmelding:</span> Lorem ipsum dolor sit amet
              </p>
            </div>

            <label for="voorbeeld-text-input-explanation-4">Voorbeeld invoerveld toelichting</label>
            <div>
              <p class="explanation" id="voorbeeld-text-input-explanation-4-message">
                <span>Toelichting:</span> Lorem ipsum dolor sit amet
              </p>
              <input
                id="voorbeeld-text-input-explanation-4"
                class="explanation"
                name="voorbeeld-text-input-explanation-4"
                placeholder="Voorbeeld invoerveld toelichting"
                type="text"
                aria-describedby="voorbeeld-text-input-explanation-4"
              />
            </div>

            <label for="voorbeeld-text-input-warning-5">Voorbeeld invoerveld waarschuwing</label>
            <div>
              <p class="warning" id="voorbeeld-text-input-warning-5-message">
                <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
              </p>
              <input
                id="voorbeeld-text-input-warning-5"
                class="warning"
                name="voorbeeld-text-input-warning-5"
                placeholder="Voorbeeld invoerveld waarschuwing"
                type="text"
                aria-describedby="voorbeeld-text-input-warning-5-message"
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Selectielijst</legend>

            <label for="select-2">Selectielijst</label>
            <select id="select-2" name="select-2">
              <option value="1">Optie 1</option>
              <option value="2">Optie 2</option>
              <option value="3">Optie 3</option>
            </select>

            <label for="select-required-2">Verplichte selectielijst</label>
            <span class="nota-bene">Dit veld is verplicht</span>
            <select id="select-required-2" name="select-required-2" required={true}>
              <option value="">--Please choose an option--</option>
              <option value="1">Optie 1</option>
              <option value="2">Optie 2</option>
              <option value="3">Optie 3</option>
            </select>

            <label for="select-disabled-2">Uitgeschakelde selectielijst</label>
            <select disabled={true} id="select-disabled-2" name="select-disabled-2">
              <option value="1">Optie 1</option>
              <option value="2">Optie 2</option>
              <option value="3">Optie 3</option>
            </select>

            <label for="select-selected-2">Selectielijst met voorgeselecteerde optie</label>
            <select id="select-selected-2" name="select-selected-2">
              <option value="1">Optie 1</option>
              <option value="3">Optie 2</option>
              <option value="2" selected={true}>Voorgeselecteerd</option>
            </select>

            <label for="select-optgroup-3">Gegroepeerde opties</label>
            <select id="select-optgroup-3" name="select-optgroup-3">
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
          </fieldset>

          <button>Test button</button>
          <a href="">Link within form test</a>

          <div class="button-container">
            <button>Button 1</button>
            <button>Button 2</button>
          </div>

          <fieldset>
            <legend>Gegroepeerde knoppen test</legend>
            <div class="button-container">
              <button>Button 1</button>
              <button>Button 2</button>
            </div>
          </fieldset>

          <button type="submit">Verzend</button>
        </form>

        <h2 id="form-with-fieldset-columns">Fieldset weergave in kolommen</h2>
        <form method="post" class="horizontal-view">
          <p class="explanation" role="group" aria-label="toelichting">
            <span>Toelichting:</span> Lorem ipsum dolor sit amet
          </p>
          <p class="warning" role="group" aria-label="waarschuwing">
            <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
          </p>
          <p class="error" role="group" aria-label="foutmelding">
            <span>Foutmelding:</span> Lorem ipsum dolor sit amet
          </p>
          <p class="confirmation" role="group" aria-label="bevestiging">
            <span>Bevestiging:</span> Lorem ipsum dolor sit amet
          </p>

          <div class="explanation" role="group" aria-label="toelichting">
            <span>Toelichting:</span>
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div class="warning" role="group" aria-label="waarschuwing">
            <span>Waarschuwing:</span>
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div class="error" role="group" aria-label="foutmelding">
            <span>Foutmelding:</span>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Consectetur adepicing elit.</p>
          </div>

          <div class="confirmation" role="group" aria-label="bevestiging">
            <span>Bevestiging:</span>
            <p>Lorem ipsum dolor sit amet</p>
            <ul>
              <li>Loren ipsum dolor sit amet</li>
              <li>Loren ipsum dolor sit amet</li>
            </ul>
          </div>

          <fieldset>
            <legend>Voorbeeld invoervelden</legend>
            <div>
              <label for="voorbeeld-text-input-6">Voorbeeld text input</label>
              <input
                id="voorbeeld-text-input-6"
                name="voorbeeld-text-input-6"
                placeholder="voorbeeld text input"
                type="text"
              />
            </div>

            <div>
              <label for="voorbeeld-e-mailadres-4">Voorbeeld e-mailadres</label>
              <input
                id="voorbeeld-e-mailadres-4"
                name="voorbeeld-e-mailadres-4"
                placeholder="mail@example.com"
                type="email"
              />
            </div>

            <div>
              <label for="voorbeeld-phonenumber-4">Voorbeeld telefoonnummer</label>
              <input
                id="voorbeeld-phonenumber-4"
                pattern={"[0-9]{10}"}
                name="voorbeeld-phonenumber-4"
                placeholder="e.g 0612345678"
                type="tel"
              />
            </div>

            <div>
              <label for="voorbeeld-tekstveld-4">Voorbeeld tekstveld</label>
              <textarea
                id="voorbeeld-tekstveld-4"
                name="voorbeeld-tekstveld-4"
                placeholder="Jouw vraag of opmerking"
                rows="5"
              ></textarea>
            </div>

            <div class="required">
              <label for="text-form-username-2">Gebruikersnaam</label>
              <div>
                <span class="nota-bene">Dit veld is verplicht</span>
                <input
                  id="text-form-username-2"
                  name="text-form-username-2"
                  placeholder="gebruikersnaam"
                  title="Gebruikersnaam"
                  type="text"
                  required={true}
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Nested fieldset test</legend>

            <div class="required">
              <label for="text-form-username-nested-1">Gebruikersnaam</label>
              <div>
                <span class="nota-bene">Dit veld is verplicht</span>
                <input
                  id="text-form-username-nested-1"
                  name="text-form-username-nested-1"
                  placeholder="gebruikersnaam"
                  title="Gebruikersnaam"
                  type="text"
                  required={true}
                />
              </div>
            </div>

            <fieldset>
              <legend>Nested fieldset</legend>
              <div class="required">
                <label for="text-form-username-nested-2">Gebruikersnaam</label>
                <div>
                  <span class="nota-bene">Dit veld is verplicht</span>
                  <input
                    id="text-form-username-nested-2"
                    name="text-form-username-nested-2"
                    placeholder="gebruikersnaam"
                    title="Gebruikersnaam"
                    type="text"
                    required={true}
                  />
                </div>
              </div>
            </fieldset>
          </fieldset>

          <fieldset>
            <legend>Voorbeeld invoerveld met knop</legend>
            <div>
              <label for="voorbeeld-input-knop-1">Voorbeeld input met knop</label>
              <div class="horizontal-view">
                <input
                  id="voorbeeld-input-knop-1"
                  name="voorbeeld-input-knop-1"
                  placeholder="lorem ipsum"
                  type="text"
                />
                <button class="icon icon-cat">Reset</button>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Checkboxes</legend>
            <div class="checkbox">
              <input type="checkbox" id="checkbox-example-default-5" name="standaard-checkbox" />
              <label for="checkbox-example-default-5">Lorem ipsum dolor sit amet</label>
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-default-long-8"
                name="standaard-checkbox"
              />
              <label for="checkbox-example-default-long-8"
                >Checkbox label test met een lange naam. Lorem ipsum dolor sit amet</label
              >
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-checked-4"
                name="checked-checkbox"
                checked={true}
              />
              <label for="checkbox-example-checked-4">Lorem ipsum dolor sit amet</label>
            </div>

            <div class="option-group required">
              <span class="nota-bene">Dit veld is verplicht</span>
              <div class="checkbox">
                <input
                  type="checkbox"
                  id="checkbox-example-required-5"
                  name="voorwaarden"
                  required={true}
                />
                <label for="checkbox-example-required-5">verplicht selectievak</label>
              </div>
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-disabled-4"
                name="voorwaarden"
                value="disabled checkbox input"
                disabled={true}
              />
              <label for="checkbox-example-disabled-4">Uitgeschakeld selectievak</label>
            </div>

            <fieldset class="grouped-choice-list">
              <legend>Selectievaklijst</legend>
              <div class="checkbox">
                <input type="checkbox" id="checkbox-list-item-13" name="option-1" />
                <label for="checkbox-list-item-13">Optie 1</label>
              </div>

              <div class="checkbox">
                <input type="checkbox" id="checkbox-list-item-14" name="option-2" />
                <label for="checkbox-list-item-14">Optie 2</label>
              </div>

              <div class="checkbox">
                <input type="checkbox" id="checkbox-list-item-15" name="option-3" />
                <label for="checkbox-list-item-15">Optie 3</label>
              </div>

              <div class="checkbox">
                <input
                  type="checkbox"
                  id="checkbox-example-default-long-9"
                  name="standaard-checkbox"
                />
                <label for="checkbox-example-default-long-9"
                  >Checkbox label test met een lange naam. Lorem ipsum dolor sit amet</label
                >
              </div>
            </fieldset>
          </fieldset>

          <fieldset>
            <legend>Radio selectieknoppen</legend>
            <fieldset class="grouped-choice-list">
              <legend>Radio buttons</legend>
              <div class="radio">
                <input
                  type="radio"
                  id="radio-example-default-4"
                  name="standaard-radiobutton"
                  value="value"
                  checked={true}
                />
                <label for="radio-example-default-4">Lorem ipsum dolor sit amet</label>
              </div>

              <div class="required">
                <span class="nota-bene">Dit veld is verplicht</span>
                <div class="radio">
                  <input
                    type="radio"
                    id="radio-example-required-4"
                    name="verplichte-radiobutton"
                    required={true}
                  />
                  <label for="radio-example-required-4">verplicht keuzeveld</label>
                </div>
              </div>

              <div class="radio">
                <input
                  type="radio"
                  id="radio-example-disabled-4"
                  name="disabled-radiobutton"
                  value="value"
                  disabled={true}
                />
                <label for="radio-example-disabled-4">Uitgeschakeld keuzevak</label>
              </div>
            </fieldset>

            <fieldset class="grouped-choice-list">
              <legend>Radio selectielijst</legend>
              <div class="radio">
                <input
                  type="radio"
                  id="radio-2-list-item-4"
                  name="radio-option-1"
                  value="value 1"
                />
                <label for="radio-2-list-item-4">Optie 1</label>
              </div>
              <div class="radio">
                <input
                  type="radio"
                  id="radio-2-list-item-5"
                  name="radio-option-2"
                  value="value 2"
                />
                <label for="radio-2-list-item-5">Optie 2</label>
              </div>

              <div class="radio">
                <input
                  type="radio"
                  id="radio-2-list-item-6"
                  name="radio-option-2"
                  value="value 3"
                />
                <label for="radio-2-list-item-6">Optie 3</label>
              </div>

              <div class="radio">
                <input
                  type="radio"
                  id="radio-2-list-long-name-2"
                  name="radio-option-2"
                  value="value 3"
                />
                <label for="radio-2-list-long-name-2"
                  >Radio label test met een lange naam. Lorem ipsum dolor sit amet</label
                >
              </div>
            </fieldset>
          </fieldset>

          <fieldset>
            <legend>Kleur selectieveld</legend>
            <div>
              <label for="color-input-4">Selecteer de gewenste kleur</label>
              <input id="color-input-4" name="color-input" type="color" value="#ffffff" />
            </div>
          </fieldset>

          <fieldset>
            <legend>Velden met validatie</legend>
            <div>
              <label for="text-form-username-3">Gebruikersnaam</label>
              <div>
                <input
                  id="text-form-username-3"
                  name="text-form-username-3"
                  pattern={"^[a-zA-Z0-9_.-]*$"}
                  placeholder="gebruikersnaam"
                  aria-describedby="text-form-username-3-message"
                  required={true}
                  type="text"
                />

                <p class="explanation" id="text-form-username-3-message">
                  <span>Toelichting:</span> Gebruikersnaam mag alleen alfanumerieke tekens (letters A-Z,
                  cijfers 0-9) bevatten, met uitzondering van onderstrepingstekens.
                </p>
              </div>
            </div>

            <div>
              <label for="text-form-password-2">Wachtwoord</label>

              <div>
                <input
                  id="text-form-password-2"
                  name="text-form-password-2"
                  pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
                  placeholder="wachtwoord"
                  aria-describedby="text-form-password-2-message"
                  type="password"
                />

                <p class="explanation" id="text-form-password-2-message">
                  <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal
                  1 hoofdletter, 1 kleineletter en 1 cijfer.
                </p>
              </div>
            </div>
          </fieldset>

          <div>
            <label for="voorbeeld-text-input-7">Voorbeeld text input</label>
            <input
              id="voorbeeld-text-input-7"
              name="voorbeeld-text-input-7"
              placeholder="voorbeeld text input"
              type="text"
            />
          </div>

          <fieldset>
            <legend>Meldingen</legend>

            <div>
              <label for="voorbeeld-text-input-error-6">Voorbeeld invoerveld foutmelding</label>
              <div>
                <input
                  id="voorbeeld-text-input-error-6"
                  class="error"
                  name="voorbeeld-text-input-error-6"
                  placeholder="Voorbeeld invoerveld foutmelding"
                  type="text"
                  aria-invalid="true"
                  aria-describedby="voorbeeld-text-input-error-6-message"
                />
                <p class="error" id="voorbeeld-text-input-error-6-message">
                  <span>Foutmelding:</span> Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>

            <div>
              <label for="voorbeeld-text-input-warning-7">Voorbeeld invoerveld waarschuwing</label>
              <div>
                <p class="warning" id="voorbeeld-text-input-warning-7-message">
                  <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
                </p>
                <input
                  id="voorbeeld-text-input-warning-7"
                  class="warning"
                  name="voorbeeld-text-input-warning-7"
                  placeholder="Voorbeeld invoerveld waarschuwing"
                  type="text"
                  aria-describedby="voorbeeld-text-input-warning-7-message"
                />
              </div>
            </div>

            <div>
              <label for="voorbeeld-text-input-explanation-6"
                >Voorbeeld invoerveld toelichting</label
              >
              <div>
                <p class="explanation" id="voorbeeld-text-input-explanation-6-message">
                  <span>Toelichting:</span> Lorem ipsum dolor sit amet
                </p>
                <input
                  id="voorbeeld-text-input-explanation-6"
                  class="explanation"
                  name="voorbeeld-text-input-explanation-6"
                  placeholder="Voorbeeld invoerveld toelichting"
                  type="text"
                  aria-describedby="voorbeeld-text-input-explanation-6-message"
                />
              </div>
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-default-6"
                name="standaard-checkbox"
                aria-describedby="checkbox-example-default-6-message"
                aria-invalid="true"
              />
              <label for="checkbox-example-default-6">Lorem ipsum dolor sit amet</label>
              <p class="error" id="checkbox-example-default-6-message">
                <span>Foutmelding:</span> Lorem ipsum dolor sit amet
              </p>
            </div>

            <div class="option-group required">
              <span class="nota-bene">Dit veld is verplicht</span>
              <div class="checkbox">
                <input
                  type="checkbox"
                  id="checkbox-example-required-6"
                  name="voorwaarden"
                  required={true}
                  aria-describedby="checkbox-example-required-6-message"
                  aria-invalid="true"
                />
                <label for="checkbox-example-required-6">verplicht selectievak</label>
              </div>
              <p class="error" id="checkbox-example-required-6-message">
                <span>Foutmelding:</span> Lorem ipsum dolor sit amet
              </p>
            </div>
          </fieldset>

          <fieldset>
            <legend>Select</legend>
            <div>
              <label for="single_select-2">Single select</label>
              <div>
                <select id="single_select-2" name="single_select-2">
                  <option value="1">Optie 1</option>
                  <option value="2">Optie 2</option>
                  <option value="3">Optie 3</option>
                </select>
              </div>
            </div>

            <div class="required">
              <label for="required_single_select-2">Single select</label>
              <div>
                <span class="nota-bene">Dit veld is verplicht</span>
                <div>
                  <select
                    id="required_single_select-2"
                    name="required_single_select-2"
                    required={true}
                  >
                    <option value="">--Please choose an option--</option>
                    <option value="1">Optie 1</option>
                    <option value="2">Optie 2</option>
                    <option value="3">Optie 3</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label for="disabled_single_select-2">Disabled single select</label>
              <div>
                <select
                  disabled={true}
                  id="disabled_single_select-2"
                  name="disabled_single_select-2"
                >
                  <option value="1">Optie 1</option>
                  <option value="2">Optie 2</option>
                  <option value="3">Optie 3</option>
                </select>
              </div>
            </div>

            <div>
              <label for="select-multiple">Meerdere opties selecteren</label>
              <div>
                <div class="explanation" role="group" id="select-multiple-message">
                  <span>Toelichting:</span>
                  <p>
                    Het selecteren van meerdere opties hangt af van uw gebruikte systeem. Enkele
                    voorbeelden:
                  </p>
                  <ul>
                    <li>
                      Windows: Houd de <code>ctrl</code>-knop ingedrukt en selecteer met de muis de
                      gewenste opties.
                    </li>
                    <li>
                      Mac: Houd de <code>cmd</code>-knop ingedrukt en selecteer met de muis de
                      gewenste opties.
                    </li>
                  </ul>
                </div>
                <select
                  id="select-multiple"
                  name="select-multiple"
                  multiple={true}
                  aria-describedby="select-multiple-message"
                >
                  <option value="1">Optie 1</option>
                  <option value="2">Optie 2</option>
                  <option value="3">Optie 3</option>
                </select>
              </div>
            </div>

            <div>
              <label for="select-mulitple-size-3">Meerdere opties selecteren</label>
              <div>
                <div class="explanation" role="group" id="select-mulitple-size-3-message">
                  <span>Toelichting:</span>
                  <p>
                    Het selecteren van meerdere opties hangt af van uw gebruikte systeem. Enkele
                    voorbeelden:
                  </p>
                  <ul>
                    <li>
                      Windows: Houd de <code>ctrl</code>-knop ingedrukt en selecteer met de muis de
                      gewenste opties.
                    </li>
                    <li>
                      Mac: Houd de <code>cmd</code>-knop ingedrukt en selecteer met de muis de
                      gewenste opties.
                    </li>
                  </ul>
                </div>

                <select
                  id="select-mulitple-size-3"
                  name="select-mulitple-size-3"
                  multiple={true}
                  size="3"
                  aria-describedby="select-mulitple-size-3-message"
                >
                  <option value="1">Optie 1</option>
                  <option value="2">Optie 2</option>
                  <option value="3">Optie 3</option>
                  <option value="4">Optie 4</option>
                  <option value="5">Optie 5</option>
                  <option value="6">Optie 6</option>
                </select>
              </div>
            </div>

            <div>
              <label for="select-optgroup-4">Gegroepeerde opties</label>
              <select id="select-optgroup-4" name="select-optgroup-4">
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
            </div>
          </fieldset>

          <fieldset>
            <legend>Links and buttons</legend>
            <div>
              <label for="input_with_link_2">Input with link</label>
              <div>
                <input id="input_with_link_2" name="input with link" />
                <a href="">Link within form test</a>
              </div>
            </div>

            <button>Test button</button><br />
            <a href="">Link within form test</a>
          </fieldset>

          <div class="button-container">
            <button>Button 1</button>
            <button>Button 2</button>
          </div>

          <fieldset>
            <legend>Gegroepeerde knoppen test</legend>

            <div class="button-container">
              <input type="submit" value="Button 1" />
              <input type="submit" value="Button 2" />
            </div>
          </fieldset>

          <button type="submit">Verzend</button>
        </form>

        <h2 id="grouped-options">Gegroepeerde radioknoppen en selectievakken</h2>
        <form method="post">
          <fieldset>
            <legend>Multiple choice radioknoppen en selectievakken test</legend>
            <span class="nota-bene">Dit veld is verplicht</span>

            <div class="checkbox">
              <input type="checkbox" id="grouped-choice-list-checkbox-1" name="option-1" />
              <label for="grouped-choice-list-checkbox-1">Optie 1</label>
            </div>

            <div class="checkbox">
              <input type="checkbox" id="grouped-choice-list-checkbox-2" name="option-2" />
              <label for="grouped-choice-list-checkbox-2">Optie 2</label>
            </div>

            <div class="checkbox">
              <input type="checkbox" id="grouped-choice-list-checkbox-3" name="option-3" />
              <label for="grouped-choice-list-checkbox-3">Optie 3</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Lorem ipsum</legend>
            <div class="radio">
              <input
                type="radio"
                id="grouped-choice-list-radio-1"
                name="radio-option"
                value="value 1"
              />
              <label for="grouped-choice-list-radio-1">Optie 1</label>
            </div>

            <div class="radio">
              <input
                type="radio"
                id="grouped-choice-list-radio-2"
                name="radio-option"
                value="value 2"
              />
              <label for="grouped-choice-list-radio-2">Optie 2</label>
            </div>

            <div class="radio">
              <input
                type="radio"
                id="grouped-choice-list-radio-3"
                name="radio-option"
                value="value 3"
              />
              <label for="grouped-choice-list-radio-3">Optie 3</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Nested example</legend>
            <fieldset>
              <legend>Lorem ipsum</legend>

              <div>
                <div class="checkbox">
                  <input type="checkbox" id="grouped-choice-list-checkbox-4" name="option-1" />
                  <label for="grouped-choice-list-checkbox-4">Optie 1</label>
                </div>

                <div class="checkbox">
                  <input type="checkbox" id="grouped-choice-list-checkbox-5" name="option-2" />
                  <label for="grouped-choice-list-checkbox-5">Optie 2</label>
                </div>

                <div class="checkbox">
                  <input type="checkbox" id="grouped-choice-list-checkbox-6" name="option-3" />
                  <label for="grouped-choice-list-checkbox-6">Optie 3</label>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Lorem ipsum</legend>
              <div class="radio">
                <input
                  type="radio"
                  id="grouped-choice-list-radio-4"
                  name="radio-option"
                  value="value 1"
                />
                <label for="grouped-choice-list-radio-4">Optie 1</label>
              </div>

              <div class="radio">
                <input
                  type="radio"
                  id="grouped-choice-list-radio-5"
                  name="radio-option"
                  value="value 2"
                />
                <label for="grouped-choice-list-radio-5">Optie 2</label>
              </div>

              <div class="radio">
                <input
                  type="radio"
                  id="grouped-choice-list-radio-6"
                  name="radio-option"
                  value="value 3"
                />
                <label for="grouped-choice-list-radio-6">Optie 3</label>
              </div>
            </fieldset>
          </fieldset>
        </form>

        <h2 id="grouped-options">Gegroepeerde radioknoppen en selectievakken</h2>
        <form method="post" class="horizontal-view">
          <fieldset class="grouped-choice-list">
            <legend>Multiple choice radioknoppen en selectievakken test kolommen</legend>

            <div class="option-group required">
              <span class="nota-bene">Dit veld is verplicht</span>
              <div class="checkbox">
                <input type="checkbox" id="grouped-choice-list-checkbox-7" name="option-1" />
                <label for="grouped-choice-list-checkbox-7">Enkele optie</label>
              </div>
            </div>

            <div class=" option-group required">
              <span class="nota-bene">Dit veld is verplicht</span>

              <div class="checkbox">
                <input type="checkbox" id="grouped-choice-list-checkbox-8" name="option-1" />
                <label for="grouped-choice-list-checkbox-8">Optie 1</label>
              </div>

              <div class="checkbox">
                <input type="checkbox" id="grouped-choice-list-checkbox-9" name="option-2" />
                <label for="grouped-choice-list-checkbox-9">Optie 2</label>
              </div>

              <div class="checkbox">
                <input type="checkbox" id="grouped-choice-list-checkbox-10" name="option-3" />
                <label for="grouped-choice-list-checkbox-10">Optie 3</label>
              </div>
            </div>

            <div class="checkbox">
              <input type="checkbox" id="grouped-choice-list-checkbox-11" name="option-1" />
              <label for="grouped-choice-list-checkbox-11">Optie 1</label>
            </div>

            <div class="checkbox">
              <input type="checkbox" id="grouped-choice-list-checkbox-12" name="option-2" />
              <label for="grouped-choice-list-checkbox-12">Optie 2</label>
            </div>

            <div class="checkbox">
              <input type="checkbox" id="grouped-choice-list-checkbox-13" name="option-3" />
              <label for="grouped-choice-list-checkbox-13">Optie 3</label>
            </div>
          </fieldset>

          <fieldset class="grouped-choice-list">
            <legend>With grouped-choice-list class</legend>
            <div>
              <div class="radio">
                <input
                  type="radio"
                  id="grouped-choice-list-radio-7"
                  name="radio-option-2"
                  value="value 1"
                />
                <label for="grouped-choice-list-radio-7">Optie 1</label>
              </div>
              <div class="radio">
                <input
                  type="radio"
                  id="grouped-choice-list-radio-8"
                  name="radio-option-2"
                  value="value 2"
                />
                <label for="grouped-choice-list-radio-8">Optie 2</label>
              </div>
              <div class="radio">
                <input
                  type="radio"
                  id="grouped-choice-list-radio-9"
                  name="radio-option-2"
                  value="value 3"
                />
                <label for="grouped-choice-list-radio-9">Optie 3</label>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Nested example</legend>
            <fieldset>
              <legend>Lorem ipsum</legend>

              <div>
                <div class="checkbox">
                  <input type="checkbox" id="grouped-choice-list-checkbox-14" name="option-1" />
                  <label for="grouped-choice-list-checkbox-14">Optie 1</label>
                </div>

                <div class="checkbox">
                  <input type="checkbox" id="grouped-choice-list-checkbox-15" name="option-2" />
                  <label for="grouped-choice-list-checkbox-15">Optie 2</label>
                </div>

                <div class="checkbox">
                  <input type="checkbox" id="grouped-choice-list-checkbox-16" name="option-3" />
                  <label for="grouped-choice-list-checkbox-16">Optie 3</label>
                </div>
              </div>
            </fieldset>

            <fieldset class="grouped-choice-list">
              <legend>With grouped-choice-list class</legend>

              <div>
                <div class="checkbox">
                  <input type="checkbox" id="grouped-choice-list-checkbox-17" name="option-1" />
                  <label for="grouped-choice-list-checkbox-17">Optie 1</label>
                </div>

                <div class="checkbox">
                  <input type="checkbox" id="grouped-choice-list-checkbox-18" name="option-2" />
                  <label for="grouped-choice-list-checkbox-18">Optie 2</label>
                </div>

                <div class="checkbox">
                  <input type="checkbox" id="grouped-choice-list-checkbox-19" name="option-3" />
                  <label for="grouped-choice-list-checkbox-19">Optie 3</label>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Lorem ipsum</legend>
              <div>
                <div class="radio">
                  <input
                    type="radio"
                    id="grouped-choice-list-radio-10"
                    name="radio-option-2"
                    value="value 1"
                  />
                  <label for="grouped-choice-list-radio-10">Optie 1</label>
                </div>
                <div class="radio">
                  <input
                    type="radio"
                    id="grouped-choice-list-radio-11"
                    name="radio-option-2"
                    value="value 2"
                  />
                  <label for="grouped-choice-list-radio-11">Optie 2</label>
                </div>
                <div class="radio">
                  <input
                    type="radio"
                    id="grouped-choice-list-radio-12"
                    name="radio-option-2"
                    value="value 3"
                  />
                  <label for="grouped-choice-list-radio-12">Optie 3</label>
                </div>
              </div>
            </fieldset>

            <fieldset class="grouped-choice-list">
              <legend>With grouped-choice-list class</legend>
              <div>
                <div class="radio">
                  <input
                    type="radio"
                    id="grouped-choice-list-radio-13"
                    name="radio-option-2"
                    value="value 1"
                  />
                  <label for="grouped-choice-list-radio-13">Optie 1</label>
                </div>
                <div class="radio">
                  <input
                    type="radio"
                    id="grouped-choice-list-radio-14"
                    name="radio-option-2"
                    value="value 2"
                  />
                  <label for="grouped-choice-list-radio-14">Optie 2</label>
                </div>
                <div class="radio">
                  <input
                    type="radio"
                    id="grouped-choice-list-radio-15"
                    name="radio-option-2"
                    value="value 3"
                  />
                  <label for="grouped-choice-list-radio-15">Optie 3</label>
                </div>
              </div>
            </fieldset>
          </fieldset>
        </form>

        <h2 id="collapsed-help">Formulier met ingeklapte hulpteksten</h2>
        <form method="post" class="help">
          <p class="explanation" role="group" aria-label="toelichting">
            <span>Toelichting:</span> Lorem ipsum dolor sit amet
          </p>
          <p class="warning" role="group" aria-label="waarschuwing">
            <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
          </p>
          <p class="error" role="group" aria-label="foutmelding">
            <span>Foutmelding:</span> Lorem ipsum dolor sit amet
          </p>
          <p class="confirmation" role="group" aria-label="bevestiging">
            <span>Bevestiging:</span> Lorem ipsum dolor sit amet
          </p>

          <div class="explanation" role="group" aria-label="toelichting">
            <span>Toelichting:</span>
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div class="warning" role="group" aria-label="waarschuwing">
            <span>Waarschuwing:</span>
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div class="error" role="group" aria-label="foutmelding">
            <span>Foutmelding:</span>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Consectetur adepicing elit.</p>
          </div>

          <div class="confirmation" role="group" aria-label="bevestiging">
            <span>Bevestiging:</span>
            <p>Lorem ipsum dolor sit amet</p>
            <ul>
              <li>Loren ipsum dolor sit amet</li>
              <li>Loren ipsum dolor sit amet</li>
            </ul>
          </div>

          <label for="help-simpel-voorbeeld-text-input-1">Voorbeeld text input</label>
          <input
            id="help-simpel-voorbeeld-text-input-1"
            name="help-simpel-voorbeeld-text-input-1"
            placeholder="voorbeeld text input"
            type="text"
          />

          <label for="help-simpel-voorbeeld-tekstveld-1">Voorbeeld tekstveld</label>
          <textarea
            id="help-simpel-voorbeeld-tekstveld-1"
            name="help-simpel-voorbeeld-tekstveld-1"
            placeholder="Jouw vraag of opmerking"
            rows="5"
          ></textarea>

          <div class="checkbox">
            <input
              type="checkbox"
              id="help-simpel-checkbox-example-default-1"
              name="standaard-checkbox"
            />
            <label for="help-simpel-checkbox-example-default-1"
              >Checkbox label test met een lange naam. Lorem ipsum dolor sit amet.</label
            >
          </div>

          <label for="help-simpel-voorbeeld-text-input-error-2"
            >Voorbeeld invoerveld foutmelding</label
          >

          <div>
            <input
              id="help-simpel-voorbeeld-text-input-error-2"
              class="error"
              name="help-simpel-voorbeeld-text-input-error-2"
              placeholder="Voorbeeld invoerveld foutmelding"
              type="text"
              aria-describedby="help-simpel-voorbeeld-text-input-error-2-message"
              aria-invalid="true"
            />
            <p class="error" id="help-simpel-voorbeeld-text-input-error-2-message">
              <span>Foutmelding:</span> Lorem ipsum dolor sit amet
            </p>
          </div>

          <label for="help-simpel-voorbeeld-text-input-explanation-1"
            >Voorbeeld invoerveld met reguliere toelichting</label
          >
          <div>
            <p class="explanation" id="help-simpel-voorbeeld-text-input-explanation-1-message">
              <span>Toelichting:</span> Lorem ipsum dolor sit amet.
            </p>
            <input
              id="help-simpel-voorbeeld-text-input-explanation-1"
              class="explanation"
              name="help-simpel-voorbeeld-text-input-explanation-1"
              placeholder="Voorbeeld invoerveld toelichting"
              type="text"
              aria-describedby="help-simpel-voorbeeld-text-input-explanation-1-message"
            />
          </div>

          <label for="help-simpel-voorbeeld-text-input-warning-1"
            >Voorbeeld invoerveld waarschuwing</label
          >
          <div>
            <p class="warning" id="help-simpel-voorbeeld-text-input-warning-1-message">
              <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
            </p>
            <input
              id="help-simpel-voorbeeld-text-input-warning-1"
              class="warning"
              name="help-simpel-voorbeeld-text-input-warning-1"
              placeholder="Voorbeeld invoerveld waarschuwing"
              type="text"
              aria-describedby="help-simpel-voorbeeld-text-input-warning-1-message"
            />
          </div>

          <label for="help-simpel-voorbeeld-tekstveld-2"
            >Voorbeeld tekstveld met reguliere toelichting</label
          >
          <div>
            <p class="explanation" id="help-simpel-voorbeeld-tekstveld-2-message">
              <span>Toelichting:</span> Lorem ipsum dolor sit amet.
            </p>
            <textarea
              id="help-simpel-voorbeeld-tekstveld-2"
              name="help-simpel-voorbeeld-tekstveld-2"
              placeholder="Jouw vraag of opmerking"
              rows="5"
              aria-describedby="help-simpel-voorbeeld-tekstveld-2-message"
            ></textarea>
          </div>

          <label for="help-simpel-voorbeeld-text-input-collapsed-explanation-1"
            >Voorbeeld invoerveld met ingeklapte toelichting</label
          >
          <div>
            <input
              id="help-simpel-voorbeeld-text-input-collapsed-explanation-1"
              class="explanation"
              name="help-simpel-voorbeeld-text-input-collapsed-explanation-1"
              placeholder="Voorbeeld invoerveld toelichting"
              type="text"
            />
            <p
              class="explanation"
              data-open-label="Toelichting bij het veld: Voorbeeld text input"
              data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
            >
              Lorem ipsum dolor sit amet.
            </p>
          </div>

          <label for="help-simpel-voorbeeld-tekstveld-3"
            >Voorbeeld tekstveld met reguliere toelichting</label
          >
          <div>
            <textarea
              id="help-simpel-voorbeeld-tekstveld-3"
              name="help-simpel-voorbeeld-tekstveld-3"
              placeholder="Jouw vraag of opmerking"
              rows="5"
              aria-describedby="help-simpel-voorbeeld-tekstveld-3-message"
            ></textarea>
            <p class="explanation" id="help-simpel-voorbeeld-tekstveld-3-message">
              <span>Toelichting:</span> Lorem ipsum dolor sit amet.
            </p>
          </div>

          <label for="select-with-explanation-3">Voorbeeld select met reguliere toelichting</label>
          <div>
            <p class="explanation" id="select-with-explanation-3-message">
              <span>Toelichting:</span> Lorem ipsum dolor sit amet.
            </p>
            <select
              id="select-with-explanation-3"
              name="select-with-explanation-3"
              aria-describedby="select-with-explanation-3-message"
            >
              <option value="1">Optie 1</option>
              <option value="2">Optie 2</option>
              <option value="3">Optie 3</option>
            </select>
          </div>

          <label for="select-with-collapsed-explanation-1"
            >Voorbeeld select met ingeklapte toelichting</label
          >
          <div>
            <select
              id="select-with-collapsed-explanation-1"
              name="select-with-collapsed-explanation-1"
              aria-describedby="select-with-collapsed-explanation-1-message"
            >
              <option value="1">Optie 1</option>
              <option value="2">Optie 2</option>
              <option value="3">Optie 3</option>
            </select>
            <p class="explanation" id="select-with-collapsed-explanation-1-message">
              <span>Toelichting:</span> Lorem ipsum dolor sit amet.
            </p>
          </div>

          <fieldset class="grouped-choice-list">
            <legend>Radio-selectielijst met reguliere toelichting</legend>
            <p class="explanation" id="help-radio-list-item-1-message">
              <span>Toelichting:</span> Lorem ipsum dolor sit amet.
            </p>
            <div>
              <div class="radio">
                <input
                  type="radio"
                  id="help-radio-list-item-1"
                  name="radio-option-1"
                  value="value 1"
                  aria-describedby="help-radio-list-item-1-message"
                />
                <label for="help-radio-list-item-1">Optie 1</label>
              </div>
              <div class="radio">
                <input
                  type="radio"
                  id="help-radio-list-item-2"
                  name="radio-option-2"
                  value="value 2"
                  aria-describedby="help-radio-list-item-1-message"
                />
                <label for="help-radio-list-item-2">Optie 2</label>
              </div>
            </div>
          </fieldset>

          <fieldset class="grouped-choice-list">
            <legend>Radio-selectielijst met ingeklapte toelichting</legend>
            <div>
              <div class="radio">
                <input
                  type="radio"
                  id="help-collapsed-radio-list-item-1"
                  name="radio-option-1"
                  value="value 1"
                  aria-describedby="help-collapsed-radio-list-item-1-message"
                />
                <label for="help-collapsed-radio-list-item-1">Optie 1</label>
              </div>
              <div class="radio">
                <input
                  type="radio"
                  id="help-collapsed-radio-list-item-2"
                  name="radio-option-2"
                  value="value 2"
                  aria-describedby="help-collapsed-radio-list-item-1-message"
                />
                <label for="help-collapsed-radio-list-item-2">Optie 2</label>
              </div>
            </div>
            <p class="explanation" id="help-collapsed-radio-list-item-1-message">
              <span>Toelichting:</span> Lorem ipsum dolor sit amet.
            </p>
          </fieldset>

          <fieldset>
            <legend>Radio-selectielijst met ingeklapte toelichtingen bij individuele inputs</legend>
            <div>
              <div class="radio">
                <input
                  type="radio"
                  id="help-individual-radio-list-item-2"
                  name="radio-option-1"
                  value="value 1"
                />
                <label for="help-individual-radio-list-item-2">Optie 1</label>
                <p class="explanation">Lorem ipsum dolor sit amet.</p>
              </div>
              <div class="radio">
                <input
                  type="radio"
                  id="help-individual-radio-list-item-3"
                  name="radio-option-2"
                  value="value 2"
                  aria-describedby="help-individual-radio-list-item-3-message"
                />
                <label for="help-individual-radio-list-item-3">Optie 2</label>
                <p class="explanation" id="help-individual-radio-list-item-3-message">
                  <span>Toelichting:</span> Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </fieldset>

          <button type="submit">Verzend</button>
        </form>

        <h2 id="form-help-columns">Formulier met ingeklapte hulpteksten in kolommen</h2>
        <form method="post" class="help horizontal-view">
          <p class="explanation" role="group" aria-label="toelichting">
            <span>Toelichting:</span> Lorem ipsum dolor sit amet
          </p>
          <p class="warning" role="group" aria-label="waarschuwing">
            <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
          </p>
          <p class="error" role="group" aria-label="foutmelding">
            <span>Foutmelding:</span> Lorem ipsum dolor sit amet
          </p>
          <p class="confirmation" role="group" aria-label="bevestiging">
            <span>Bevestiging:</span> Lorem ipsum dolor sit amet
          </p>

          <div class="explanation" role="group" aria-label="toelichting">
            <span>Toelichting:</span>
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div class="warning" role="group" aria-label="waarschuwing">
            <span>Waarschuwing:</span>
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div class="error" role="group" aria-label="foutmelding">
            <span>Foutmelding:</span>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Consectetur adepicing elit.</p>
          </div>

          <div class="confirmation" role="group" aria-label="bevestiging">
            <span>Bevestiging:</span>
            <p>Lorem ipsum dolor sit amet</p>
            <ul>
              <li>Loren ipsum dolor sit amet</li>
              <li>Loren ipsum dolor sit amet</li>
            </ul>
          </div>

          <div>
            <label for="help-simpel-voorbeeld-text-input-2">Voorbeeld text input</label>
            <input
              id="help-simpel-voorbeeld-text-input-2"
              name="help-simpel-voorbeeld-text-input-2"
              placeholder="voorbeeld text input"
              type="text"
            />
          </div>

          <div>
            <label for="help-simpel-voorbeeld-tekstveld-4">Voorbeeld tekstveld</label>
            <textarea
              id="help-simpel-voorbeeld-tekstveld-4"
              name="help-simpel-voorbeeld-tekstveld-4"
              placeholder="Jouw vraag of opmerking"
              rows="5"
            ></textarea>
          </div>

          <div class="checkbox">
            <input
              type="checkbox"
              id="help-simpel-checkbox-example-default-2"
              name="standaard-checkbox"
            />
            <label for="help-simpel-checkbox-example-default-2"
              >Checkbox label test met een lange naam. Lorem ipsum dolor sit amet.</label
            >
          </div>

          <div>
            <label for="help-simpel-voorbeeld-text-input-error-1"
              >Voorbeeld invoerveld foutmelding</label
            >
            <div>
              <input
                id="help-simpel-voorbeeld-text-input-error-1"
                class="error"
                name="help-simpel-voorbeeld-text-input-error-1"
                placeholder="Voorbeeld invoerveld foutmelding"
                type="text"
                aria-describedby="help-simpel-voorbeeld-text-input-error-1-message"
                aria-invalid="true"
              />
              <p class="error" id="help-simpel-voorbeeld-text-input-error-1-message">
                <span>Foutmelding:</span> Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          <div>
            <label for="help-simpel-voorbeeld-text-input-explanation-2"
              >Voorbeeld invoerveld met reguliere toelichting</label
            >
            <div>
              <p class="explanation" id="help-simpel-voorbeeld-text-input-explanation-2-message">
                <span>Toelichting:</span> Lorem ipsum dolor sit amet.
              </p>
              <input
                id="help-simpel-voorbeeld-text-input-explanation-2"
                class="explanation"
                name="help-simpel-voorbeeld-text-input-explanation-2"
                placeholder="Voorbeeld invoerveld toelichting"
                type="text"
                aria-describedby="help-simpel-voorbeeld-text-input-explanation-2-message"
              />
            </div>
          </div>

          <div>
            <label for="help-simpel-voorbeeld-text-input-warning-2"
              >Voorbeeld invoerveld waarschuwing</label
            >
            <div>
              <p class="warning" id="help-simpel-voorbeeld-text-input-warning-2-message">
                <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
              </p>
              <input
                id="help-simpel-voorbeeld-text-input-warning-2"
                class="warning"
                name="help-simpel-voorbeeld-text-input-warning-2"
                placeholder="Voorbeeld invoerveld waarschuwing"
                type="text"
                aria-describedby="help-simpel-voorbeeld-text-input-warning-2-message"
              />
            </div>
          </div>

          <div>
            <label for="help-simpel-voorbeeld-tekstveld-5"
              >Voorbeeld tekstveld met reguliere toelichting</label
            >
            <div>
              <p class="explanation" id="help-simpel-voorbeeld-tekstveld-5-message">
                <span>Toelichting:</span> Lorem ipsum dolor sit amet.
              </p>
              <textarea
                id="help-simpel-voorbeeld-tekstveld-5"
                name="help-simpel-voorbeeld-tekstveld-5"
                placeholder="Jouw vraag of opmerking"
                rows="5"
                aria-describedby="help-simpel-voorbeeld-tekstveld-5-message"
              >
              </textarea>
            </div>
          </div>

          <div>
            <label for="help-simpel-voorbeeld-text-input-collapsed-explanation-2"
              >Voorbeeld invoerveld met ingeklapte toelichting</label
            >
            <div>
              <input
                id="help-simpel-voorbeeld-text-input-collapsed-explanation-2"
                class="explanation"
                name="help-simpel-voorbeeld-text-input-collapsed-explanation-2"
                placeholder="Voorbeeld invoerveld toelichting"
                type="text"
                aria-describedby="help-simpel-voorbeeld-text-input-collapsed-explanation-2-message"
              />
              <p
                class="explanation"
                data-open-label="Toelichting bij het veld: Voorbeeld text input"
                data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
                id="help-simpel-voorbeeld-text-input-collapsed-explanation-2-message"
              >
                <span>Toelichting:</span> Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <div>
            <label for="help-simpel-voorbeeld-tekstveld-6"
              >Voorbeeld tekstveld met reguliere toelichting</label
            >
            <div>
              <textarea
                id="help-simpel-voorbeeld-tekstveld-6"
                name="help-simpel-voorbeeld-tekstveld-6"
                placeholder="Jouw vraag of opmerking"
                rows="5"
                aria-describedby="help-simpel-voorbeeld-tekstveld-6-message"
              ></textarea>

              <p class="explanation" id="help-simpel-voorbeeld-tekstveld-6-message">
                <span>Toelichting:</span> Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <div>
            <label for="select-with-explanation-1"
              >Voorbeeld selectielijst met reguliere toelichting</label
            >
            <div>
              <p class="explanation" id="select-with-explanation-1-message">
                <span>Toelichting:</span> Lorem ipsum dolor sit amet.
              </p>
              <select
                id="select-with-explanation-1"
                name="select-with-explanation-1"
                aria-describedby="select-with-explanation-1-message"
              >
                <option value="1">Optie 1</option>
                <option value="2">Optie 2</option>
                <option value="3">Optie 3</option>
              </select>
            </div>
          </div>

          <div>
            <label for="select-with-collapsed-explanation-3"
              >Voorbeeld selectielijst met ingeklapte toelichting</label
            >
            <div>
              <select
                id="select-with-collapsed-explanation-3"
                name="select-with-collapsed-explanation-3"
                aria-describedby="select-with-collapsed-explanation-3-message"
              >
                <option value="1">Optie 1</option>
                <option value="2">Optie 2</option>
                <option value="3">Optie 3</option>
              </select>
              <p class="explanation" id="select-with-collapsed-explanation-3-message">
                <span>Toelichting:</span> Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <fieldset>
            <legend>Radio-selectielijst met reguliere toelichting</legend>
            <div>
              <p class="explanation" id="help-horizontal-radio-list-item-1-message">
                <span>Toelichting:</span> Lorem ipsum dolor sit amet.
              </p>
              <div class="radio">
                <input
                  type="radio"
                  id="help-horizontal-radio-list-item-1"
                  name="radio-option-2"
                  value="value 1"
                  aria-describedby="help-horizontal-radio-list-item-1-message"
                />
                <label for="help-horizontal-radio-list-item-1">Optie 1</label>
              </div>
              <div class="radio">
                <input
                  type="radio"
                  id="help-horizontal-radio-list-item-2"
                  name="radio-option-2"
                  value="value 2"
                  aria-describedby="help-horizontal-radio-list-item-1-message"
                />
                <label for="help-horizontal-radio-list-item-2">Optie 2</label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Radio-selectielijst met ingeklapte toelichting</legend>
            <div>
              <div class="radio">
                <input
                  type="radio"
                  id="help-collapsed-horizontal-radio-list-item-1"
                  name="radio-option-2"
                  value="value 1"
                  aria-describedby="help-collapsed-horizontal-radio-list-item-1-message"
                />
                <label for="help-collapsed-horizontal-radio-list-item-1">Optie 1</label>
              </div>
              <div class="radio">
                <input
                  type="radio"
                  id="help-collapsed-horizontal-radio-list-item-2"
                  name="radio-option-2"
                  value="value 2"
                  aria-describedby="help-collapsed-horizontal-radio-list-item-1-message"
                />
                <label for="help-collapsed-horizontal-radio-list-item-2">Optie 2</label>
              </div>
              <div class="explanation" id="help-collapsed-horizontal-radio-list-item-1-message">
                <span>Toelichting:</span>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Radio-selectielijst met ingeklapte toelichtingen bij individuele inputs</legend>
            <div>
              <div class="radio">
                <input
                  type="radio"
                  id="help-individual-horizontal-radio-list-item-1"
                  name="radio-option-2"
                  value="value 1"
                  aria-describedby="help-individual-horizontal-radio-list-item-1-message"
                />
                <label for="help-individual-horizontal-radio-list-item-1">Optie 1</label>
                <p class="explanation" id="help-individual-horizontal-radio-list-item-1-message">
                  <span>Toelichting:</span> Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div class="radio">
                <input
                  type="radio"
                  id="help-individual-horizontal-radio-list-item-2"
                  name="radio-option-2"
                  value="value 2"
                  aria-describedby="help-individual-horizontal-radio-list-item-2-message"
                />
                <label for="help-individual-horizontal-radio-list-item-2">Optie 2</label>
                <p class="explanation" id="help-individual-horizontal-radio-list-item-2-message">
                  <span>Toelichting:</span>
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </fieldset>

          <div class="button-container">
            <button class="secondary">Annuleer</button>
            <button type="submit">Verzend</button>
          </div>
        </form>
      </section>
    </div>
  </article>

  <article id="form-within-tabel">
    <div>
      <h3>Formulier binnen tabellen</h3>

      <div class="horizontal-scroll">
        <table>
          <caption>Tabelvoorbeeld met selectievak:</caption>
          <thead>
            <tr>
              <th>
                <div class="checkbox">
                  <input type="checkbox" id="table-header-checkbox" name="table-header_checkbox" />
                </div>
              </th>
              <th>Table header heading</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="checkbox">
                  <input type="checkbox" id="table-checkbox" name="table_checkbox" />
                </div>
              </td>
              <td>Ipsum</td>
              <td>
                <form><input type="submit" value="Lorem" /></form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="horizontal-scroll">
        <table>
          <caption>Tabelvoorbeeld met gegroepeerde elementen:</caption>
          <thead>
            <tr>
              <th>Lorem</th>
              <th>Table header heading</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem</td>
              <td>Ipsum</td>
              <td>
                <div class="horizontal-view">
                  <form>
                    <button type="submit" class="icon-only icon-cat" value="Lorem">Home</button>
                  </form>
                  <form><input type="submit" value="Lorem" /></form>
                  <form><input type="submit" value="Lorem" /></form>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>
</main>
