<script context="module">
  export const breadcrumb = "Toelichting";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Toelichting</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li>
        <a href="#examples">Voorbeelden</a>
        <ul>
          <li><a href="#explanation-div">Blokelement</a></li>
          <li><a href="#explanation-paragraph">Paragraaf</a></li>
          <li>
            <a href="#explanation-table">Tabel-elementen</a>
            <ul>
              <li>
                <a href="#explanation-th">Tabeltitel - <code>th</code></a>
              </li>
              <li>
                <a href="#explanation-td">Tabelcel - <code>td</code></a>
              </li>
              <li>
                <a href="#explanation-tr">Tabelrij - <code>tr</code></a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#explanation-form">Formulier-elementen</a>
            <ul>
              <li>
                <a href="#explanation-form-input">Invoerveld - <code>input</code></a>
              </li>
              <li>
                <a href="#explanation-form-textarea">Tekstveld - <code>textarea</code></a>
              </li>
              <li>
                <a href="#explanation-form-select">Selectielijst - <code>select</code></a>
              </li>
              <li>
                <a href="#explanation-form-datalist">Datalijst - <code>Datalist</code></a>
              </li>
              <li>
                <a href="#explanation-form-checkbox">Selectievak - <code>checkbox</code></a>
              </li>
              <li>
                <a href="#explanation-form-radio">Radio-selecteerknop - <code>radio</code></a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a href="#requirements">Benodigdheden</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Toelichting</h1>
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
        <nav aria-label="Toelichting subnavigatie">
          <ul>
            <li><a href="#explanation-div">Blokelement</a></li>
            <li><a href="#explanation-paragraph">Paragraaf</a></li>
            <li><a href="#explanation-table">Tabel-elementen</a></li>
            <li><a href="#explanation-form">Formulier-elementen</a></li>
          </ul>
        </nav>

        <h3 id="explanation-div">Blokelement</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="explanation" role="group" aria-label="Toelichting">
          <span>Toelichting:</span>
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
              <a href="notification-explanation">Lorem ipsum</a> consectetur adipiscing elit.
            </li>
          </ul>
          <button type="button">Lorem</button>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="explanation" role="group" aria-label="Toelichting">
  <span>Toelichting:</span>
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
<div class="explanation" role="group" aria-label="Toelichting">
    <span>Toelichting:</span>
    <!-- Voeg hier de content toe. -->
</div>
`}
        />

        <p>
          Voor meer informatie zie:
          <a href="{base}/components/notifications-block-element">Blok-element</a>
        </p>

        <h3 id="explanation-paragraph">Paragraaf</h3>
        <h4>Visueel voorbeeld:</h4>
        <p class="explanation" role="group" aria-label="Toelichting">
          <span>Toelichting:</span> Lorem ipsum dolor sit.
        </p>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="explanation" role="group" aria-label="Toelichting"><span>Toelichting:</span> Lorem ipsum dolor sit amet </p>
`}
        />

        <h3 id="explanation-table">Tabel-elementen</h3>
        <nav aria-label="Toelichting tabelelementen subnavigatie">
          <ul>
            <li>
              <a href="#explanation-th">Tabeltitel - <code>th</code></a>
            </li>
            <li>
              <a href="#explanation-td">Tabelcel - <code>td</code></a>
            </li>
            <li>
              <a href="#explanation-tr">Tabelrij - <code>tr</code></a>
            </li>
          </ul>
        </nav>

        <h4 id="explanation-th">Toelichting op tabeltitel</h4>

        <p class="warning">
          <span>Waarschuwing:</span> In een vorige versie van de documentatie werd hier beschreven
          hoe een tabeltitel als toelichting opgemaakt kan worden. Deze instructies zijn weggehaald,
          omdat dit omwille de toegankelijkheid sterk <strong>afgeraden</strong> wordt.
        </p>

        <h4 id="explanation-td">Toelichting op Tabelcel</h4>

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
              <td class="explanation" aria-label="Toelichting"><span>Toelichting:</span> 15</td>
              <td class="explanation" aria-label="Toelichting">
                <span>Toelichting:</span> 168
              </td>
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
      <td class="explanation" aria-label="Toelichting"><span>Toelichting:</span> 15</td>
      <td class="explanation" aria-label="Toelichting"><span>Toelichting:</span> 168</td>
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

        <h4 id="explanation-tr">Toelichting op tabelrij</h4>

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
            <tr>
              <th>Lorem</th>
              <th>Ipsum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>15</td>
              <td>168</td>
            </tr>

            <tr class="explanation">
              <td aria-label="Toelichting"><span>Toelichting:</span> 12</td>
              <td aria-label="Toelichting"><span>Toelichting:</span> 42</td>
            </tr>

            <tr class="explanation">
              <td aria-label="Toelichting"><span>Toelichting:</span> 12</td>
              <td aria-label="Toelichting"><span>Toelichting:</span> 42</td>
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
      <th>Lorem</th>
      <th>Ipsum</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>15</td>
      <td>168</td>
    </tr>

    <tr class="explanation">
      <td aria-label="Toelichting"><span>Toelichting:</span> 12</td>
      <td aria-label="Toelichting"><span>Toelichting:</span> 42</td>
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

        <h3 id="explanation-form">Formulier-elementen</h3>
        <nav aria-label="Toelichting formulierelementen subnavigatie">
          <ul>
            <li>
              <a href="#explanation-form-input">Invoerveld - <code>input</code></a>
            </li>
            <li>
              <a href="#explanation-form-textarea">Tekstveld - <code>textarea</code></a>
            </li>
            <li>
              <a href="#explanation-form-select">Selectielijst - <code>select</code></a>
            </li>
            <li>
              <a href="#explanation-form-datalist">Datalijst - <code>Datalist</code></a>
            </li>
            <li>
              <a href="#explanation-form-checkbox">Selectievak - <code>checkbox</code></a>
            </li>
            <li>
              <a href="#explanation-form-radio">Radio-selecteerknop - <code>radio</code></a>
            </li>
          </ul>
        </nav>

        <h4 id="explanation-form-input">Input</h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <label for="input-explanation">Input</label>
          <div>
            <input
              id="input-explanation"
              class="explanation"
              value="Lorem ipsum"
              aria-describedby="input-explanation-message"
            />
            <p class="explanation" id="input-explanation-message">
              <span>toelichting:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
    <label for="input-explanation">Input</label>
    <div>
        <input id="input-explanation" class="explanation" value="Lorem ipsum" aria-describedby="input-explanation-message">
        <p class="explanation" id="input-explanation-message">
            <span>toelichting:</span> Lorem ipsum dolor sit amet
        </p>
    </div>
</form>
`}
        />

        <h4 id="explanation-form-textarea">Tekstveld</h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <label for="voorbeeld-tekstveld-explanation">Voorbeeld tekstveld</label>
          <div>
            <textarea
              id="voorbeeld-tekstveld-explanation"
              name="voorbeeld-tekstveld-explanation"
              class="explanation"
              aria-describedby="voorbeeld-tekstveld-explanation-message"
            ></textarea>
            <p class="explanation" id="voorbeeld-tekstveld-explanation-message">
              <span>toelichting:</span> Lorem ipsum dolor sit amet
            </p>
          </div>

          <button type="submit">Verzend</button>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="voorbeeld-tekstveld-explanation">Voorbeeld tekstveld</label>
  <div>
    <textarea
      id="voorbeeld-tekstveld-explanation"
      name="voorbeeld-tekstveld-explanation"
      class="explanation"
      aria-describedby="voorbeeld-tekstveld-explanation-message"
    ></textarea>
    <p class="explanation" id="voorbeeld-tekstveld-explanation-message">
      <span>toelichting:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h4 id="explanation-form-select">Selectielijst</h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <label for="select-explanation">Selectielijst</label>
          <div>
            <select
              id="select-explanation"
              name="select"
              class="explanation"
              aria-describedby="select-explanation-message"
            >
              <option value="1">Optie 1</option>
              <option value="2">Optie 2</option>
              <option value="3">Optie 3</option>
            </select>
            <p class="explanation" id="select-explanation-message">
              <span>toelichting:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="select-explanation">Selectielijst</label>
  <div>
    <select id="select-explanation" name="select" class="explanation" aria-describedby="select-explanation-message">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
    <p class="explanation" id="select-explanation-message">
      <span>toelichting:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
`}
        />

        <h4 id="explanation-form-datalist">Datalijst</h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <label for="datalist-explanation">Input</label>
          <div>
            <input
              id="datalist-explanation"
              class="explanation"
              list="example-list-explanation"
              aria-describedby="datalist-explanation-message"
            />
            <p class="explanation" id="datalist-explanation-message">
              <span>toelichting:</span> Lorem ipsum dolor sit amet
            </p>
          </div>

          <datalist id="example-list-explanation">
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
  <label for="datalist-explanation">Input</label>
  <div>
    <input
      id="datalist-explanation"
      class="explanation"
      list="example-list-explanation"
      aria-describedby="datalist-explanation-message"
    />
    <p class="explanation" id="datalist-explanation-message">
      <span>toelichting:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <datalist id="example-list-explanation">
    <option value="Optie 1"></option>
    <option value="Optie 2"></option>
    <option value="Optie 3"></option>
  </datalist>
</form>
`}
        />

        <h4 id="explanation-form-checkbox">Selectievak - <code>checkbox</code></h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <div aria-describedby="checkbox-explanation-message">
            <input
              type="checkbox"
              id="checkbox-explanation"
              name="standaard-checkbox"
              class="explanation"
            />
            <label for="checkbox-explanation">Lorem ipsum dolor sit amet</label>
            <p class="explanation" id="checkbox-explanation-message">
              <span>toelichting:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div aria-describedby="checkbox-explanation-message">
    <input type="checkbox" id="checkbox-explanation" name="standaard-checkbox" class="explanation">
    <label for="checkbox-explanation">Lorem ipsum dolor sit amet</label>
    <p class="explanation" id="checkbox-explanation-message">
      <span>toelichting:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
`}
        />

        <h4 id="explanation-form-radio">Radio-selecteerknop - <code>radio</code></h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <div>
            <input
              type="radio"
              id="radio-example-explanation"
              name="standaard-radiobutton"
              value="value"
              class="explanation"
            />
            <label for="radio-example-explanation">Lorem ipsum dolor sit amet</label>
            <p class="explanation" id="radio-example-explanation-message">
              <span>toelichting:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <input type="radio" id="radio-example-explanation" name="standaard-radiobutton" value="value" class="explanation">
    <label for="radio-example-explanation">Lorem ipsum dolor sit amet</label>
    <p class="explanation" id="radio-example-explanation-message">
      <span>toelichting:</span> Lorem ipsum dolor sit amet
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
          <li><code>notification/notification-explanation.scss</code></li>
        </ul>

        <h3>Optioneel</h3>
        <ul>
          <li>
            <code>notification/notification-variables.scss</code>
          </li>
          <li>
            <code>notification/notification-explanation-variables.scss</code>
          </li>
        </ul>
      </section>
    </div>
  </article>
</main>
