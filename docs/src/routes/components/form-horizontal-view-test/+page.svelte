<script module>
  export const breadcrumb = "Horizontaal uitgelijnde testpagina";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Horizontaal uitgelijnde testpagina</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li>
        <a href="#tests">Tests en voorbeelden</a>
        <ul>
          <li>
            <a href="#input">Invoerveld</a>
            <ul>
              <li><a href="#input-base">Basisweergave</a></li>
              <li><a href="#input-required">Verplicht</a></li>
            </ul>
          </li>
          <li>
            <a href="#date">Datumveld</a>
            <ul>
              <li><a href="#date-base">Basisweergave</a></li>
              <li><a href="#date-required">Verplicht</a></li>
            </ul>
          </li>
          <li>
            <a href="#email">E-mailveld</a>
            <ul>
              <li><a href="#email-base">Basisweergave</a></li>
              <li><a href="#email-required">Verplicht</a></li>
            </ul>
          </li>
          <li>
            <a href="#password">Wachtwoordveld</a>
            <ul>
              <li><a href="#password-base">Basisweergave</a></li>
              <li><a href="#password-required">Verplicht</a></li>
            </ul>
          </li>
          <li>
            <a href="#select">Selectielijst - select</a>
            <ul>
              <li><a href="#select-base">Basisweergave</a></li>
              <li><a href="#select-required">Verplicht</a></li>
            </ul>
          </li>
          <li>
            <a href="#checkbox">Selectievak - checkbox</a>
            <ul>
              <li><a href="#checkbox-base">Basisweergave</a></li>
              <li><a href="#checkbox-required">Verplicht</a></li>
              <li><a href="#checkbox-disabled">Uitgeschakeld</a></li>
            </ul>
          </li>
          <li>
            <a href="#radio">Radio button</a>
            <ul>
              <li><a href="#radio-base">Basisweergave</a></li>
              <li><a href="#radio-required">Verplicht</a></li>
              <li><a href="#radio-disabled">Uitgeschakeld</a></li>
            </ul>
          </li>
          <li>
            <a href="#range">Bereik - range</a>
            <ul>
              <li><a href="#range-base">Basisweergave</a></li>
              <li><a href="#range-required">Verplicht</a></li>
            </ul>
          </li>
          <li>
            <a href="#color-picker">Kleurselector</a>
            <ul>
              <li><a href="#color-picker-base">Basisweergave</a></li>
              <li><a href="#color-picker-required">Verplicht</a></li>
            </ul>
          </li>
          <li><a href="#fieldset">Fieldset</a></li>
        </ul>
      </li>
      <li><a href="#button-container">Gegroepeerde buttons</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Horizontaal uitgelijnde testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2 id="input">Basisformulier</h2>
        <p>Formulier zonder gebruik van fieldset</p>

        <h3 id="input-base">Invoerveld</h3>
        <p>Basis-invoerveld met verschillende states</p>

        <h4 id="input-basic-view">Basisweergave:</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div>
            <label for="input-example">Voorbeeld text input</label>
            <input id="input-example" name="input-example" type="text" />
          </div>
          <button type="submit">Verzend</button>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div>
    <label for="input-example">Voorbeeld text input</label>
    <input
      id="input-example"
      name="input-example"
      type="text"
    >
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h4 id="input-required">Verplicht:</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div class="required">
            <label for="input-example-required">Ipsum</label>
            <div>
              <span class="nota-bene">Dit veld is verplicht</span>
              <input
                id="input-example-required"
                name="input-example-required"
                type="text"
                required
              />
            </div>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div class="required">
    <label for="input-example-required">Ipsum</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input id="input-example-required" name="voorbeeld-input-required" type="text" required>
    </div>
  </div>
</form>
`}
        />

        <h4 id="grouped-buttons">Gegroepeerde knoppen:</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div>
            <label for="input-example-grouped">Voorbeeld text input</label>
            <input id="input-example-grouped" name="input-example-grouped" type="text" />
          </div>
          <div class="button-container">
            <a class="button ghost" href="form-horizontal-test">Annuleren</a>
            <button>Verzend</button>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div>
    <label for="input-example-grouped">Voorbeeld text input</label>
    <input
      id="input-example-grouped"
      name="input-example-grouped"
      type="text"
    >
  </div>
  <div class="button-container">
    <a class="button ghost" type="submit">Annuleren</a>
    <button type="submit">Verzend</button>
  </div>
</form>
`}
        />

        <h3 id="date">Datumveld</h3>
        <p>Invoerveld voor het aangeven van data.</p>
        <h4 id="date-base">Basisweergave:</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div>
            <label for="date-example">Datum</label>
            <input id="date-example" name="datumveld voorbeeld" type="date" />
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div>
    <label for="date-example">Datum</label>
    <input id="date-example" name="datumveld voorbeeld" type="date">
  </div>
</form>
`}
        />

        <h4 id="date-required">Verplicht</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div class="required">
            <label for="date-example-required">Datum</label>
            <div>
              <span class="nota-bene">Dit veld is verplicht</span>
              <input
                id="date-example-required"
                name="voorbeeld verplicht dataveld"
                type="date"
                required
              />
            </div>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div class="required">
    <label for="date-example-required">Datum</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input id="date-example-required" name="voorbeeld verplicht dataveld" type="date" required>
    </div>
  </div>
</form>
`}
        />

        <h3 id="email">E-mailveld</h3>
        <h4 id="email-base">Basisweergave:</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div>
            <label for="email-example">Email</label>
            <input id="email-example" name="voorbeeld email-veld" type="email" />
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div>
    <label for="email-example">Email</label>
    <input id="email-example" name="voorbeeld email-veld" type="email">
  </div>
</form>
`}
        />

        <h4 id="email-required">Verplicht</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div class="required">
            <label for="email-example-required">Email</label>

            <div>
              <span class="nota-bene">Dit veld is verplicht</span>
              <input
                id="email-example-required"
                name="voorbeeld-email-required"
                type="email"
                required
              />
            </div>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div class="required">
    <label for="email-example-required">Email</label>

    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input id="email-example-required" name="voorbeeld-email-required" type="email" required>
    </div>

  </div>
</form>
`}
        />

        <h3 id="password">Wachtwoordveld</h3>
        <p>Invoerveld voor wachtwoorden met toegestane patronen.</p>
        <h4 id="password-base">Basisweergave</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div>
            <label for="password-example">Wachtwoord</label>
            <div>
              <p class="explanation" id="password-example-message">
                <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal
                1 hoofdletter, 1 kleineletter en 1 cijfer.
              </p>

              <div>
                <input
                  id="password-example"
                  name="password-example"
                  pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
                  title="Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1 hoofdletter, 1 kleine letter en 1 cijfer."
                  type="password"
                  aria-describedby="password-example-message"
                />
              </div>
            </div>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div>
    <label for="password-example">Wachtwoord</label>
    <div>
      <p class="explanation" id="password-example-message">
        <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal
        1 hoofdletter, 1 kleineletter en 1 cijfer.
      </p>

      <div>
        <input
          id="password-example"
          name="password-example"
          pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
          title="Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1 hoofdletter, 1 kleine letter en 1 cijfer."
          type="password"
          aria-describedby="password-example-message"
        />
      </div>
    </div>
  </div>
</form>
`}
        />

        <h4 id="password-required">Verplicht</h4>
        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post" class="horizontal">
          <div class="required">
            <label for="password-example-required">Wachtwoord</label>
            <div>
              <span class="nota-bene">Dit veld is verplicht</span>
              <p class="explanation" id="password-example-required-message">
                <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal
                1 hoofdletter, 1 kleine letter en 1 cijfer.
              </p>
              <input
                id="password-example-required"
                name="password-example-required"
                pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
                title="Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1 hoofdletter, 1 kleine letter en 1 cijfer."
                type="password"
                aria-describedby="password-example-required-message"
                required
              />
            </div>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div class="required">
    <label for="password-example-required">Wachtwoord</label>
    <div>
      <p class="explanation" id="password-example-required-message"><span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1 hoofdletter, 1 kleine letter en 1 cijfer.</p>
      <input
        id="password-example-required"
        name="password-example-required"
        pattern="{"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}"
        title="Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1 hoofdletter, 1 kleine letter en 1 cijfer."
        type="password"
        aria-describedby="password-example-required-message"
        required>
    </div>
  </div>
</form>
`}
        />

        <h3 id="textarea">Tekstveld - textarea</h3>
        <p>Invoerveld voor langere teksten.</p>
        <h4 id="textarea-base">Basisweergave</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div>
            <label for="textarea-example">Bericht</label>

            <div>
              <span class="nota-bene" id="textarea-example-explanation"
                >Jouw vraag of opmerking
              </span>
              <textarea
                id="textarea-example"
                name="Tekstveld voorbeeld"
                aria-describedby="textarea-example-explanation"
              ></textarea>
            </div>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div>
    <label for="textarea-example">Bericht</label>

    <div>
      <span class="nota-bene" id="textarea-example-explanation"
        >Jouw vraag of opmerking
      </span>
      <textarea
        id="textarea-example"
        name="Tekstveld voorbeeld"
        aria-describedby="textarea-example-explanation"
      ></textarea>
    </div>
  </div>
</form>
`}
        />

        <h4 id="textarea-required">Verplicht</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div class="required">
            <label for="voorbeeld-tekstveld-required">Bericht</label>
            <div>
              <span class="nota-bene" id="voorbeeld-tekstveld-required-explanation"
                >Dit veld is verplicht. Stel jouw vraag of vul jouw opmerking in.
              </span>
              <textarea
                id="voorbeeld-tekstveld-required"
                name="voorbeeld-tekstveld-required"
                aria-describedby="voorbeeld-tekstveld-required-explanation"
              ></textarea>
            </div>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div class="required">
    <label for="voorbeeld-tekstveld-required">Bericht</label>
    <div>
      <span class="nota-bene" id="voorbeeld-tekstveld-required-explanation"
        >Dit veld is verplicht. Stel jouw vraag of vul jouw opmerking in.
      </span>
      <textarea
        id="voorbeeld-tekstveld-required"
        name="voorbeeld-tekstveld-required"
        aria-describedby="voorbeeld-tekstveld-required-explanation"
      ></textarea>
    </div>
  </div>
</form>
`}
        />

        <h3 id="select">Selectielijst - select</h3>
        <p>Lijst met keuzeopties waarvan er een enkele optie gekozen kan worden.</p>
        <h4 id="select-base">Basisweergave</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div>
            <label for="select-example">Selectielijst</label>
            <select id="select-example" name="voorbeeld selectielijst">
              <option value="1">Optie 1</option>
              <option value="2">Optie 2</option>
              <option value="3">Optie 3</option>
            </select>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div>
    <label for="select-example">Selectielijst</label>
    <select id="select-example" name="voorbeeld selectielijst">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
  </div>
</form>
`}
        />

        <h4 id="select-required">Verplicht</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div>
            <label for="select-example-required">Selectielijst</label>

            <div>
              <span class="nota-bene">Dit veld is verplicht</span>
              <select id="select-example-required" name="voorbeeld verplichte selectielijst">
                <option value="1">Optie 1</option>
                <option value="2">Optie 2</option>
                <option value="3">Optie 3</option>
              </select>
            </div>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div>
    <label for="select-example-required">Selectielijst</label>

    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <select id="select-example-required" name="voorbeeld verplichte selectielijst">
        <option value="1">Optie 1</option>
        <option value="2">Optie 2</option>
        <option value="3">Optie 3</option>
      </select>
    </div>
  </div>
</form>
`}
        />

        <h3 id="checkbox">Selectievak - checkbox</h3>
        <h4 id="checkbox-base">Basisweergave</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div class="checkbox">
            <input type="checkbox" id="checkbox-example" name="checkbox" />
            <label for="checkbox-example">Selectievak</label>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div class="checkbox">
    <input type="checkbox" id="checkbox-example" name="checkbox">
    <label for="checkbox-example">Selectievak</label>
  </div>
</form>
`}
        />

        <h4 id="checkbox-required">Verplicht</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div class="option-group required">
            <span class="nota-bene">Dit veld is verplicht</span>

            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-required"
                name="standaard-checkbox"
                required
              />
              <label for="checkbox-example-required">Verplicht selectievak</label>
            </div>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div class="option-group required">
    <span class="nota-bene">Dit veld is verplicht</span>

    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-required" name="standaard-checkbox" required>
      <label for="checkbox-example-required">Verplicht selectievak</label>
    </div>
  </div>
</form>
`}
        />

        <h4 id="checkbox-disabled">Uitgeschakeld</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div class="checkbox">
            <input type="checkbox" id="checkbox-example-disabled" name="voorwaarden" disabled />
            <label for="checkbox-example-disabled">Uitgeschakeld selectievak</label>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div class="checkbox">
    <input type="checkbox" id="checkbox-example-disabled" name="voorwaarden" disabled>
    <label for="checkbox-example-disabled">Uitgeschakeld selectievak</label>
  </div>
</form>
`}
        />

        <h3 id="radio">Radio-button</h3>
        <h4 id="radio-base">Basisweergave</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div class="radio">
            <input type="radio" id="radio-example" name="voorbeeld radio-knop" value="value" />
            <label for="radio-example">Radio-button</label>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div class="radio">
    <input
      type="radio"
      id="radio-example"
      name="voorbeeld radio-knop"
      value="value">
    <label for="radio-example">Radio-button</label>
  </div>
</form>
`}
        />

        <h4 id="radio-required">Verplicht</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div class="option-group required">
            <span class="nota-bene">Dit veld is verplicht</span>

            <div class="radio">
              <input type="radio" id="radio-example-required" name="radio verplicht" required />
              <label for="radio-example-required">Verplichte radio-button</label>
            </div>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div class="option-group required">
    <span class="nota-bene">Dit veld is verplicht</span>

    <div class="radio">
      <input type="radio" id="radio-example-required" name="radio verplicht" required>
      <label for="radio-example-required">Verplichte radio-button</label>
    </div>

  </div>
</form>
`}
        />

        <h4 id="radio-disabled">Uitgeschakeld</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div class="radio">
            <input type="radio" id="radio-example-disabled" name="radio uitgeschakeld" disabled />
            <label for="radio-example-disabled">Uitgeschakelde radio-button</label>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div class="radio">
    <input type="radio" id="radio-example-disabled" name="radio uitgeschakeld" disabled>
    <label for="radio-example-disabled">Uitgeschakelde radio-button</label>
  </div>
</form>
`}
        />

        <h3 id="range">Bereik - range</h3>
        <h4 id="range-base">Basisweergave</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div>
            <label for="range-example">Range</label>
            <input type="range" id="range-example" name="Voorbeeld bereik" min="0" max="100" />
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div>
    <label for="range-example">Range</label>
    <input type="range" id="range-example" name="Voorbeeld bereik" min="0" max="100">
  </div>
</form>
`}
        />

        <h4 id="range-required">Verplicht</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div>
            <label for="range-example-required">Range</label>

            <div>
              <span class="nota-bene">Dit veld is verplicht</span>
              <input
                type="range"
                id="range-example-required"
                name="voorbeeld verplicht bereik"
                min="0"
                max="100"
              />
            </div>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div>
    <label for="range-example-required">Range</label>

    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input type="range" id="range-example-required" name="voorbeeld verplicht bereik" min="0" max="100">
    </div>
  </div>
</form>
`}
        />

        <h3 id="color-picker">Kleurselector</h3>
        <h4 id="color-picker-base">Basisweergave</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div>
            <label for="color-picker-example">Selecteer de gewenste kleur</label>
            <input
              id="color-picker-example"
              name="voorbeeld kleurselector"
              type="color"
              value="#ffffff"
            />
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div>
    <label for="color-picker-example">Selecteer de gewenste kleur</label>
    <input id="color-picker-example" name="voorbeeld kleurselector" type="color" value="#ffffff">
  </div>
</form>
`}
        />

        <h3 id="button-container">Gegroepeerde knoppen</h3>
        <h4 id="button-container-base">Basisweergave</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div>
            <label for="grouped-buttons-example">Voorbeeld text input</label>
            <input id="grouped-buttons-example" name="grouped-buttons-example" type="text" />
          </div>
          <div class="button-container">
            <button>Cancel</button>
            <button type="submit">Verzend</button>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div>
    <label for="grouped-buttons-example">Voorbeeld text input</label>
    <input
      id="grouped-buttons-example"
      name="grouped-buttons-example"
      type="text"
    />
  </div>
  <div class="button-container">
    <button>Cancel</button>
    <button type="submit">Verzend</button>
  </div>
</form>
`}
        />

        <h4 id="color-picker-required">Verplicht</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <div>
            <label for="color-picker-example-required">Selecteer de gewenste kleur</label>

            <div>
              <span class="nota-bene">Dit veld is verplicht</span>
              <input
                id="color-picker-example-required"
                name="voorbeeld verplichte kleurselector"
                type="color"
                value="#ffffff"
              />
            </div>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div>
    <label for="color-picker-example-required">Selecteer de gewenste kleur</label>

    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input id="color-picker-example-required" name="voorbeeld verplichte kleurselector" type="color" value="#ffffff">
    </div>
  </div>
</form>
`}
        />

        <h2 id="fieldset"><code>fieldset</code></h2>
        <h3>Visueel voorbeeld:</h3>
        <form action="" method="post" class="horizontal">
          <div class="explanation" role="group" aria-label="toelichting">
            <span>Toelichting:</span>
            <p>Dit is een voorbeeld van een notificatie direct binnen het formulier.</p>
          </div>
          <fieldset>
            <legend>Invoervelden</legend>

            <div class="explanation" role="group" aria-label="toelichting">
              <span>Toelichting:</span>
              <p>Dit is een voorbeeld van een notificatie direct binnen een fieldset.</p>
            </div>

            <div>
              <label for="fieldset-example">Voorbeeld text input</label>
              <input id="fieldset-example" name="fieldset-example" type="text" />
            </div>

            <div class="required">
              <label for="voorbeeld-input-required">Ipsum</label>
              <div>
                <span class="nota-bene">Dit veld is verplicht</span>
                <input
                  id="voorbeeld-input-required"
                  name="voorbeeld-input-required"
                  type="text"
                  required
                />
              </div>
            </div>

            <div>
              <label for="voorbeeld-date-1">Datum</label>
              <input id="voorbeeld-date-1" name="voorbeeld-date-1" type="date" />
            </div>

            <div>
              <label for="voorbeeld-email-1">Email</label>
              <input id="voorbeeld-email-1" name="voorbeeld-email-1" type="email" />
            </div>

            <div>
              <label for="input-password-1">Wachtwoord</label>
              <div>
                <p class="explanation" id="input-password-1-message">
                  <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal
                  1 hoofdletter, 1 kleine letter en 1 cijfer.
                </p>
                <input
                  id="input-password-1"
                  name="input-password-1"
                  pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
                  title="Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1 hoofdletter, 1 kleine letter en 1 cijfer."
                  type="password"
                  aria-describedby="input-password-1-message"
                />
              </div>
            </div>

            <div>
              <label for="voorbeeld-tekstveld-base">Bericht</label>
              <div>
                <span class="nota-bene" id="voorbeeld-tekstveld-base-explanation"
                  >Stel een vraag of geef een opmerking
                </span>
                <textarea
                  id="voorbeeld-tekstveld-base"
                  name="voorbeeld-tekstveld-base"
                  aria-describedby="voorbeeld-tekstveld-base-explanation"
                ></textarea>
              </div>
            </div>

            <div>
              <label for="select-example-fieldset">Selectielijst</label>
              <select id="select-example-fieldset" name="voorbeeld selectielijst binnen fieldset">
                <option value="1">Optie 1</option>
                <option value="2">Optie 2</option>
                <option value="3">Optie 3</option>
              </select>
            </div>
          </fieldset>

          <fieldset>
            <legend>Checkboxes</legend>

            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-fieldset"
                name="voorbeeld selectievak binnen fieldset"
              />
              <label for="checkbox-example-fieldset">Selectievak</label>
            </div>

            <div class="option-group required">
              <span class="nota-bene">Dit veld is verplicht</span>

              <div class="checkbox">
                <input
                  type="checkbox"
                  id="checkbox-example-fieldset-required"
                  name="selectievak binnen fieldset"
                  required
                />
                <label for="checkbox-example-fieldset-required">Verplicht selectievak</label>
              </div>
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                id="checkbox-example-disabled-fieldset"
                name="uitgeschakeld selectievak binnen fieldset"
                disabled
              />
              <label for="checkbox-example-disabled-fieldset">Uitgeschakeld selectievak</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>radio-buttons</legend>
            <div class="radio">
              <input
                type="radio"
                id="radio-example-default-5"
                name="standaard-radiobutton"
                value="value"
              />
              <label for="radio-example-default-5">Radio button</label>
            </div>

            <div class="option-group required">
              <span class="nota-bene">Dit veld is verplicht</span>

              <div class="radio">
                <input type="radio" id="radio-example-grouped" name="standaard-radio" required />
                <label for="radio-example-grouped">Verplichte radio-button</label>
              </div>
            </div>

            <div class="radio">
              <input
                type="radio"
                id="radio-example-disabled-fieldset"
                name="voorbeeld uitgeschakeld radio-button binnen fieldset"
                disabled
              />
              <label for="radio-example-disabled-fieldset">uitgeschakelde radio-button</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Overig</legend>

            <div>
              <label for="range-example-fieldset">Range</label>
              <input
                type="range"
                id="range-example-fieldset"
                name="voorbeeld bereik binnen fieldset"
                min="0"
                max="100"
              />
            </div>

            <div>
              <label for="color-picker-fieldset">Selecteer de gewenste kleur</label>
              <input
                id="color-picker-fieldset"
                name="voorbeeld kleurselector binnen fieldset"
                type="color"
                value="#ffffff"
              />
            </div>
          </fieldset>
          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div class="explanation" role="group" aria-label="toelichting">
    <span>Toelichting:</span>
    <p>Dit is een voorbeeld van een notificatie direct binnen het formulier.</p>
  </div>
  <fieldset>
    <legend>Invoervelden</legend>

    <div class="explanation" role="group" aria-label="toelichting">
      <span>Toelichting:</span>
      <p>Dit is een voorbeeld van een notificatie direct binnen een fieldset.</p>
    </div>

    <div>
      <label for="fieldset-example">Voorbeeld text input</label>
      <input id="fieldset-example" name="fieldset-example" type="text" />
    </div>

    <div class="required">
      <label for="voorbeeld-input-required">Ipsum</label>
      <div>
        <span class="nota-bene">Dit veld is verplicht</span>
        <input
          id="voorbeeld-input-required"
          name="voorbeeld-input-required"
          type="text"
          required
        />
      </div>
    </div>

    <div>
      <label for="voorbeeld-date-1">Datum</label>
      <input id="voorbeeld-date-1" name="voorbeeld-date-1" type="date" />
    </div>

    <div>
      <label for="voorbeeld-email-1">Email</label>
      <input id="voorbeeld-email-1" name="voorbeeld-email-1" type="email" />
    </div>

    <div>
      <label for="input-password-1">Wachtwoord</label>
      <div>
        <p class="explanation" id="input-password-1-message">
          <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal
          1 hoofdletter, 1 kleine letter en 1 cijfer.
        </p>
        <input
          id="input-password-1"
          name="input-password-1"
          pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
          title="Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1 hoofdletter, 1 kleine letter en 1 cijfer."
          type="password"
          aria-describedby="input-password-1-message"
        />
      </div>
    </div>

    <div>
      <label for="voorbeeld-tekstveld-base">Bericht</label>
      <div>
        <span class="nota-bene" id="voorbeeld-tekstveld-base-explanation"
          >Stel een vraag of geef een opmerking
        </span>
        <textarea
          id="voorbeeld-tekstveld-base"
          name="voorbeeld-tekstveld-base"
          aria-describedby="voorbeeld-tekstveld-base-explanation"
        ></textarea>
      </div>
    </div>

    <div>
      <label for="select-example-fieldset">Selectielijst</label>
      <select id="select-example-fieldset" name="voorbeeld selectielijst binnen fieldset">
        <option value="1">Optie 1</option>
        <option value="2">Optie 2</option>
        <option value="3">Optie 3</option>
      </select>
    </div>
  </fieldset>

  <fieldset>
    <legend>Checkboxes</legend>

    <div class="checkbox">
      <input
        type="checkbox"
        id="checkbox-example-fieldset"
        name="voorbeeld selectievak binnen fieldset"
      />
      <label for="checkbox-example-fieldset">Selectievak</label>
    </div>

    <div class="option-group required">
      <span class="nota-bene">Dit veld is verplicht</span>

      <div class="checkbox">
        <input
          type="checkbox"
          id="checkbox-example-fieldset-required"
          name="selectievak binnen fieldset"
          required
        />
        <label for="checkbox-example-fieldset-required">Verplicht selectievak</label>
      </div>
    </div>

    <div class="checkbox">
      <input
        type="checkbox"
        id="checkbox-example-disabled-fieldset"
        name="uitgeschakeld selectievak binnen fieldset"
        disabled
      />
      <label for="checkbox-example-disabled-fieldset">Uitgeschakeld selectievak</label>
    </div>
  </fieldset>

  <fieldset>
    <legend>radio-buttons</legend>
    <div class="radio">
      <input
        type="radio"
        id="radio-example-default-5"
        name="standaard-radiobutton"
        value="value"
      />
      <label for="radio-example-default-5">Radio button</label>
    </div>

    <div class="option-group required">
      <span class="nota-bene">Dit veld is verplicht</span>

      <div class="radio">
        <input type="radio" id="radio-example-grouped" name="standaard-radio" required />
        <label for="radio-example-grouped">Verplichte radio-button</label>
      </div>
    </div>

    <div class="radio">
      <input
        type="radio"
        id="radio-example-disabled-fieldset"
        name="voorbeeld uitgeschakeld radio-button binnen fieldset"
        disabled
      />
      <label for="radio-example-disabled-fieldset">uitgeschakelde radio-button</label>
    </div>
  </fieldset>

  <fieldset>
    <legend>Overig</legend>

    <div>
      <label for="range-example-fieldset">Range</label>
      <input
        type="range"
        id="range-example-fieldset"
        name="voorbeeld bereik binnen fieldset"
        min="0"
        max="100"
      />
    </div>

    <div>
      <label for="color-picker-fieldset">Selecteer de gewenste kleur</label>
      <input
        id="color-picker-fieldset"
        name="voorbeeld kleurselector binnen fieldset"
        type="color"
        value="#ffffff"
      />
    </div>
  </fieldset>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3 id="button-container-fieldset">Gegroepeerde knoppen binnen fieldset</h3>
        <h4 id="button-container-fieldset-base">Basisweergave</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal">
          <fieldset>
            <legend>Lorem ipsum</legend>
            <div>
              <label for="grouped-buttons-within-fieldset">Voorbeeld text input</label>
              <input
                id="grouped-buttons-within-fieldset"
                name="grouped-buttons-within-fieldset"
                type="text"
              />
            </div>

            <div class="button-container">
              <button>Cancel</button>
              <button type="submit">Verzend</button>
            </div>
          </fieldset>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <div>
    <label for="grouped-buttons-within-fieldset">Voorbeeld text input</label>
    <input
      id="grouped-buttons-within-fieldset"
      name="grouped-buttons-within-fieldset"
      type="text"
    />
  </div>
  <div class="button-container">
    <button>Cancel</button>
    <button type="submit">Verzend</button>
  </div>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
