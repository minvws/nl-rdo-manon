<script context="module">
  export const breadcrumb = "Foutmelding";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Foutmelding</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li>
        <a href="#examples">Voorbeelden</a>
        <ul>
          <li><a href="#error-div">Blokelement</a></li>
          <li><a href="#error-paragraph">Paragraaf</a></li>
          <li>
            <a href="#error-table">Tabel-elementen</a>
            <ul>
              <li>
                <a href="#error-th">Tabeltitel - <code>th</code></a>
              </li>
              <li>
                <a href="#error-td">Tabelcel - <code>td</code></a>
              </li>
              <li>
                <a href="#error-tr">Tabelrij - <code>tr</code></a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#error-form">Formulier-elementen</a>
            <ul>
              <li>
                <a href="#error-form-input">Invoerveld - <code>input</code></a>
              </li>
              <li>
                <a href="#error-form-textarea">Tekstveld - <code>textarea</code></a>
              </li>
              <li>
                <a href="#error-form-select">Selectielijst - <code>select</code></a>
              </li>
              <li>
                <a href="#error-form-datalist">Datalijst - <code>Datalist</code></a>
              </li>
              <li>
                <a href="#error-form-checkbox">Selectievak - <code>checkbox</code></a>
              </li>
              <li>
                <a href="#error-form-radio">Radio-selecteerknop - <code>radio</code></a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a href="#requirements">Benodigdheden</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Foutmelding</h1>
        <p>
          Gebruik om de gebruiker te attenderen op een fout. Bijvoorbeeld bij het incorrect invoeren
          van data of een systeemfout.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Benodigdheden</a>. Voor meer informatie over importeren en
            instellen van componenten. Zie:
            <a href="{base}/documentation/import-styling"
              >Componenten gebruiken en styling toevoegen</a
            >
          </li>
          <li>
            Voeg de benodigde HTML toe. Zie het voorbeeld per element voor de implementatiedetails.
          </li>
        </ol>

        <h2>Aandachtspunten</h2>
        <ul>
          <li>
            Voeg de volledige code toe die in de voorbeelden staat om alle gebruikers een goede
            gebruikerservaring the bieden. Denk hierbij aan gebruikers die kleurenblind zijn of
            gebruikers die gebruik maken van hulptechnologieën.
          </li>
          <li>
            Notificaties kunnen verborgen worden door de class
            <code>hidden</code> toe te voegen aan de notification
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <p>Beschikbare voorbeelden:</p>
        <nav aria-label="Foutmelding subnavigatie">
          <ul>
            <li><a href="#error-div">Blokelement</a></li>
            <li><a href="#error-paragraph">Paragraaf</a></li>
            <li><a href="#error-table">Tabel-elementen</a></li>
            <li><a href="#error-form">Formulier-elementen</a></li>
          </ul>
        </nav>

        <h3 id="error-div">Blokelement</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="error" role="group" aria-label="foutmelding">
          <span>Foutmelding:</span>
          <h1>Lorem ipsum dolor set</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat
            facilisis ac eu velit. Donec luctus metus a lacus dictum, a porta ligula pellentesque.
            Phasellus ultricies purus id viverra ultrices. Proin sagittis rhoncus tempor. Nam
            efficitur elit commodo elit feugiat scelerisque. Nullam consectetur felis mi, ac
            bibendum urna convallis a. Ut maximus volutpat ligula, et accumsan ipsum varius eget.
            Mauris euismod a augue sit amet condimentum.
          </p>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi
              consequat facilisis ac eu velit.
              <a href="notification-error">Lorem ipsum</a> consectetur adipiscing elit.
            </li>
          </ul>
          <button type="button">Lorem</button>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span>
  <h1>Lorem ipsum dolor set</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat facilisis ac eu velit. Donec luctus metus a lacus dictum, a porta ligula pellentesque. Phasellus ultricies purus id viverra ultrices. Proin sagittis rhoncus tempor. Nam efficitur elit commodo elit feugiat scelerisque. Nullam consectetur felis mi, ac bibendum urna convallis a. Ut maximus volutpat ligula, et accumsan ipsum varius eget. Mauris euismod a augue sit amet condimentum.</p>
  <ul>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat facilisis ac eu velit. <a href="">Lorem ipsum</a> consectetur adipiscing elit.</li>
  </ul>
  <button type="button">Lorem</button>
</div>
`}
        />

        <h4>HTML-structuur voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="error" role="group" aria-label="foutmelding">
    <span>Foutmelding:</span>
    <!-- Voeg hier de content toe. -->
</div>
`}
        />

        <p>
          Voor meer informatie zie:
          <a href="{base}/components/notifications-block-element">Blok-element</a>
        </p>

        <h3 id="error-paragraph">Paragraaf</h3>
        <h4>Visueel voorbeeld:</h4>
        <p class="error" role="group" aria-label="foutmelding">
          <span>Foutmelding:</span> Lorem ipsum dolor sit.
        </p>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="error" role="group" aria-label="foutmelding"><span>Foutmelding:</span> Lorem ipsum dolor sit amet </p>
`}
        />

        <h3 id="error-table">Tabel-elementen</h3>
        <nav aria-label="Foutmelding tabelelementen subnavigatie">
          <ul>
            <li>
              <a href="#error-th">Tabeltitel - <code>th</code></a>
            </li>
            <li>
              <a href="#error-td">Tabelcel - <code>td</code></a>
            </li>
            <li>
              <a href="#error-tr">Tabelrij - <code>tr</code></a>
            </li>
          </ul>
        </nav>

        <h4 id="error-th">Foutmelding op tabeltitel</h4>

        <h5>Visueel voorbeeld:</h5>
        <table>
          <thead>
            <tr>
              <th class="error" aria-label="foutmelding"><span>Foutmelding:</span> Lorem</th>
              <th class="error" aria-label="foutmelding"><span>Foutmelding:</span> Ipsum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12</td>
              <td>42</td>
            </tr>

            <tr>
              <td>15</td>
              <td>168</td>
            </tr>

            <tr>
              <td>123</td>
              <td>2</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Lorem ipsum</td>
              <td>Dolor sit amet</td>
            </tr>
          </tfoot>
        </table>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<table>
  <thead>
    <tr>
      <th class="error" aria-label="foutmelding"><span>Foutmelding:</span> Lorem</th>
      <th class="error" aria-label="foutmelding"><span>Foutmelding:</span> Ipsum</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>12</td>
      <td>42</td>
    </tr>

    <tr>
      <td>15</td>
      <td>168</td>
    </tr>

    <tr>
      <td>123</td>
      <td>2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Lorem ipsum</td>
      <td>Dolor sit amet</td>
    </tr>
  </tfoot>
</table>
`}
        />

        <h4 id="error-td">Foutmelding op Tabelcel</h4>

        <h5>Visueel voorbeeld:</h5>
        <table>
          <thead>
            <tr>
              <th>Lorem</th>
              <th>Ipsum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12</td>
              <td>42</td>
            </tr>

            <tr>
              <td class="error" aria-label="foutmelding"><span>Foutmelding:</span> 15</td>
              <td class="error" aria-label="foutmelding"><span>Foutmelding:</span> 168</td>
            </tr>

            <tr>
              <td>15</td>
              <td>168</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Lorem ipsum</td>
              <td>Dolor sit amet</td>
            </tr>
          </tfoot>
        </table>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<table>
  <thead>
    <tr>
      <th>Lorem</th>
      <th>Ipsum</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>12</td>
      <td>42</td>
    </tr>

    <tr>
      <td class="error" aria-label="foutmelding"><span>Foutmelding:</span> 15</td>
      <td class="error" aria-label="foutmelding"><span>Foutmelding:</span> 168</td>
    </tr>

    <tr>
      <td>15</td>
      <td>168</td>
    </tr>

  </tbody>
  <tfoot>
    <tr>
      <td>Lorem ipsum</td>
      <td>Dolor sit amet</td>
    </tr>
  </tfoot>
</table>
`}
        />

        <h4 id="error-tr">Foutmelding op tabelrij</h4>

        <p>Aandachtspunten:</p>
        <ul>
          <li>
            Niet alle screenreaders lezen <code>aria-label</code> op een <code>tr</code> op. Voeg
            daarom de labels toe aan de <code>th</code> of de <code>td</code>.
          </li>
        </ul>

        <h5>Visueel voorbeeld:</h5>
        <table>
          <thead>
            <tr class="error">
              <th aria-label="foutmelding"><span>Foutmelding:</span> Lorem</th>
              <th aria-label="foutmelding"><span>Foutmelding:</span> Ipsum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>15</td>
              <td>168</td>
            </tr>

            <tr class="error">
              <td aria-label="foutmelding"><span>Foutmelding:</span> 12</td>
              <td aria-label="foutmelding"><span>Foutmelding:</span> 42</td>
            </tr>

            <tr class="error">
              <td aria-label="foutmelding"><span>Foutmelding:</span> 12</td>
              <td aria-label="foutmelding"><span>Foutmelding:</span> 42</td>
            </tr>

            <tr>
              <td>123</td>
              <td>2</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Lorem ipsum</td>
              <td>Dolor sit amet</td>
            </tr>
          </tfoot>
        </table>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<table>
  <thead>
    <tr class="error">
      <th aria-label="foutmelding"><span>Foutmelding:</span> Lorem</th>
      <th aria-label="foutmelding"><span>Foutmelding:</span> Ipsum</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>15</td>
      <td>168</td>
    </tr>

    <tr class="error">
      <td aria-label="foutmelding"><span>Foutmelding:</span> 12</td>
      <td aria-label="foutmelding"><span>Foutmelding:</span> 42</td>
    </tr>

    <tr>
      <td>123</td>
      <td>2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Lorem ipsum</td>
      <td>Dolor sit amet</td>
    </tr>
  </tfoot>
</table>
`}
        />

        <h3 id="error-form">Formulier-elementen</h3>
        <nav aria-label="Foutmelding formulierelementen subnavigatie">
          <ul>
            <li>
              <a href="#error-form-input">Invoerveld - <code>input</code></a>
            </li>
            <li>
              <a href="#error-form-textarea">Tekstveld - <code>textarea</code></a>
            </li>
            <li>
              <a href="#error-form-select">Selectielijst - <code>select</code></a>
            </li>
            <li>
              <a href="#error-form-datalist">Datalijst - <code>Datalist</code></a>
            </li>
            <li>
              <a href="#error-form-checkbox">Selectievak - <code>checkbox</code></a>
            </li>
            <li>
              <a href="#error-form-radio">Radio-selecteerknop - <code>radio</code></a>
            </li>
          </ul>
        </nav>

        <h4 id="error-form-input">Input</h4>

        <h5>Visueel voorbeeld:</h5>
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
              <span>foutmelding:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
    <label for="input-error">Input</label>
    <div>
        <input id="input-error" class="error" value="Lorem ipsum" aria-describedby="input-error-message" aria-invalid="true">
        <p class="error" id="input-error-message">
            <span>foutmelding:</span> Lorem ipsum dolor sit amet
        </p>
    </div>
</form>
`}
        />

        <h4 id="error-form-textarea">Tekstveld</h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <label for="voorbeeld-tekstveld-error">Voorbeeld tekstveld</label>
          <div>
            <textarea
              id="voorbeeld-tekstveld-error"
              name="voorbeeld-tekstveld-error"
              class="error"
              aria-describedby="voorbeeld-tekstveld-error-message"
              aria-invalid="true"
            ></textarea>
            <p class="error" id="voorbeeld-tekstveld-error-message">
              <span>foutmelding:</span> Lorem ipsum dolor sit amet
            </p>
          </div>

          <button type="submit">Verzend</button>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="voorbeeld-tekstveld-error">Voorbeeld tekstveld</label>
  <div>
    <textarea
      id="voorbeeld-tekstveld-error"
      name="voorbeeld-tekstveld-error"
      class="error"
      aria-describedby="voorbeeld-tekstveld-error-message"
      aria-invalid="true"
    ></textarea>
    <p class="error" id="voorbeeld-tekstveld-error-message">
      <span>foutmelding:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h4 id="error-form-select">Selectielijst</h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <label for="select-error">Selectielijst</label>
          <div>
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
            <p class="error" id="select-error-message">
              <span>foutmelding:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="select-error">Selectielijst</label>
  <div>
    <select id="select-error" name="select" class="error" aria-describedby="select-error-message" aria-invalid="true">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
    <p class="error" id="select-error-message">
      <span>foutmelding:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
`}
        />

        <h4 id="error-form-datalist">Datalijst</h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <label for="datalist-error">Input</label>
          <div>
            <input
              id="datalist-error"
              class="error"
              list="example-list-error"
              aria-describedby="datalist-error-message"
              aria-invalid="true"
            />
            <p class="error" id="datalist-error-message">
              <span>foutmelding:</span> Lorem ipsum dolor sit amet
            </p>
          </div>

          <datalist id="example-list-error">
            <option value="Optie 1"></option>
            <option value="Optie 2"></option>
            <option value="Optie 3"></option>
          </datalist>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="datalist-error">Input</label>
  <div>
    <input
      id="datalist-error"
      class="error"
      list="example-list-error"
      aria-describedby="datalist-error-message"
      aria-invalid="true"
    />
    <p class="error" id="datalist-error-message">
      <span>foutmelding:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <datalist id="example-list-error">
    <option value="Optie 1"></option>
    <option value="Optie 2"></option>
    <option value="Optie 3"></option>
  </datalist>
</form>
`}
        />

        <h4 id="error-form-checkbox">Selectievak - <code>checkbox</code></h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <div aria-describedby="checkbox-error-message">
            <input
              type="checkbox"
              id="checkbox-error"
              name="standaard-checkbox"
              class="error"
              aria-invalid="true"
            />
            <label for="checkbox-error">Lorem ipsum dolor sit amet</label>
            <p class="error" id="checkbox-error-message">
              <span>foutmelding:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div aria-describedby="checkbox-error-message">
    <input type="checkbox" id="checkbox-error" name="standaard-checkbox" class="error" aria-invalid="true">
    <label for="checkbox-error">Lorem ipsum dolor sit amet</label>
    <p class="error" id="checkbox-error-message">
      <span>foutmelding:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
`}
        />

        <h4 id="error-form-radio">Radio-selecteerknop - <code>radio</code></h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <div>
            <input
              type="radio"
              id="radio-example-error"
              name="standaard-radiobutton"
              value="value"
              class="error"
            />
            <label for="radio-example-error">Lorem ipsum dolor sit amet</label>
            <p class="error" id="radio-example-error-message">
              <span>foutmelding:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <input type="radio" id="radio-example-error" name="standaard-radiobutton" value="value" class="error">
    <label for="radio-example-error">Lorem ipsum dolor sit amet</label>
    <p class="error" id="radio-example-error-message">
      <span>foutmelding:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>
        <h3>Benodigd</h3>
        <ul>
          <li><code>notification/notification.scss</code></li>
          <li><code>notification/notification-error.scss</code></li>
        </ul>

        <h3>Optioneel</h3>
        <ul>
          <li>
            <code>notification/notification-variables.scss</code>
          </li>
          <li>
            <code>notification/notification-error-variables.scss</code>
          </li>
        </ul>
      </section>
    </div>
  </article>
</main>
