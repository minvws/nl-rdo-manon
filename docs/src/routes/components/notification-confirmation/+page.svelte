<script module>
  export const breadcrumb = "Bevestiging";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Bevestiging</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li>
        <a href="#examples">Voorbeelden</a>
        <ul>
          <li><a href="#confirmation-div">Blokelement</a></li>
          <li><a href="#confirmation-paragraph">Paragraaf</a></li>
          <li>
            <a href="#confirmation-table">Tabel-elementen</a>
            <ul>
              <li>
                <a href="#confirmation-th">Tabeltitel - <code>th</code></a>
              </li>
              <li>
                <a href="#confirmation-td">Tabelcel - <code>td</code></a>
              </li>
              <li>
                <a href="#confirmation-tr">Tabelrij - <code>tr</code></a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#confirmation-form">Formulier-elementen</a>
            <ul>
              <li>
                <a href="#confirmation-form-input">Invoerveld - <code>input</code></a>
              </li>
              <li>
                <a href="#confirmation-form-textarea">Tekstveld - <code>textarea</code></a>
              </li>
              <li>
                <a href="#confirmation-form-select">Selectielijst - <code>select</code></a>
              </li>
              <li>
                <a href="#confirmation-form-datalist">Datalijst - <code>Datalist</code></a>
              </li>
              <li>
                <a href="#confirmation-form-checkbox">Selectievak - <code>checkbox</code></a>
              </li>
              <li>
                <a href="#confirmation-form-radio">Radio-selecteerknop - <code>radio</code></a>
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
        <h1>Bevestiging</h1>
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
            gebruikerservaring te bieden. Denk hierbij aan gebruikers die kleurenblind zijn of
            gebruikers die gebruik maken van hulptechnologiën.
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
        <nav aria-label="Bevestiging subnavigatie">
          <ul>
            <li><a href="#confirmation-div">Blokelement</a></li>
            <li><a href="#confirmation-paragraph">Paragraaf</a></li>
            <li><a href="#confirmation-table">Tabel-elementen</a></li>
            <li><a href="#confirmation-form">Formulier-elementen</a></li>
          </ul>
        </nav>

        <h3 id="confirmation-div">Blokelement</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="confirmation" role="group" aria-label="Bevestiging">
          <span>Bevestiging:</span>
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
              <a href="notification-confirmation">Lorem ipsum</a> consectetur adipiscing elit.
            </li>
          </ul>
          <button type="button">Lorem</button>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="confirmation" role="group" aria-label="Bevestiging">
  <span>Bevestiging:</span>
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
<div class="confirmation" role="group" aria-label="Bevestiging">
    <span>Bevestiging:</span>
    <!-- Voeg hier de content toe. -->
</div>
`}
        />

        <p>
          Voor meer informatie zie:
          <a href="{base}/components/notifications-block-element">Blok-element</a>
        </p>

        <h3 id="confirmation-paragraph">Paragraaf</h3>
        <h4>Visueel voorbeeld:</h4>
        <p class="confirmation" role="group" aria-label="Bevestiging">
          <span>Bevestiging:</span> Lorem ipsum dolor sit.
        </p>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="confirmation" role="group" aria-label="Bevestiging"><span>Bevestiging:</span> Lorem ipsum dolor sit amet </p>
`}
        />

        <h3 id="confirmation-table">Tabel-elementen</h3>
        <nav aria-label="Bevestiging tabelelementen subnavigatie">
          <ul>
            <li>
              <a href="#confirmation-th">Tabeltitel - <code>th</code></a>
            </li>
            <li>
              <a href="#confirmation-td">Tabelcel - <code>td</code></a>
            </li>
            <li>
              <a href="#confirmation-tr">Tabelrij - <code>tr</code></a>
            </li>
          </ul>
        </nav>

        <h4 id="confirmation-th">Bevestiging op tabeltitel</h4>

        <p class="warning">
          <span>Waarschuwing:</span> In een vorige versie van de documentatie werd hier beschreven
          hoe een tabeltitel als bevestiging opgemaakt kan worden. Deze instructies zijn weggehaald,
          omdat dit omwille de toegankelijkheid sterk <strong>afgeraden</strong> wordt.
        </p>

        <h4 id="confirmation-td">Bevestiging op Tabelcel</h4>

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
              <td class="confirmation" aria-label="Bevestiging">
                <span>Bevestiging:</span> 15
              </td>
              <td class="confirmation" aria-label="Bevestiging">
                <span>Bevestiging:</span> 168
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
      <td class="confirmation" aria-label="Bevestiging"><span>Bevestiging:</span> 15</td>
      <td class="confirmation" aria-label="Bevestiging"><span>Bevestiging:</span> 168</td>
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

        <h4 id="confirmation-tr">Bevestiging op tabelrij</h4>

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

            <tr class="confirmation">
              <td aria-label="Bevestiging"><span>Bevestiging:</span> 12</td>
              <td aria-label="Bevestiging"><span>Bevestiging:</span> 42</td>
            </tr>

            <tr class="confirmation">
              <td aria-label="Bevestiging"><span>Bevestiging:</span> 12</td>
              <td aria-label="Bevestiging"><span>Bevestiging:</span> 42</td>
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

    <tr class="confirmation">
      <td aria-label="Bevestiging"><span>Bevestiging:</span> 12</td>
      <td aria-label="Bevestiging"><span>Bevestiging:</span> 42</td>
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

        <h3 id="confirmation-form">Formulier-elementen</h3>
        <nav aria-label="Bevestiging formulierelementen subnavigatie">
          <ul>
            <li>
              <a href="#confirmation-form-input">Invoerveld - <code>input</code></a>
            </li>
            <li>
              <a href="#confirmation-form-textarea">Tekstveld - <code>textarea</code></a>
            </li>
            <li>
              <a href="#confirmation-form-select">Selectielijst - <code>select</code></a>
            </li>
            <li>
              <a href="#confirmation-form-datalist">Datalijst - <code>Datalist</code></a>
            </li>
            <li>
              <a href="#confirmation-form-checkbox">Selectievak - <code>checkbox</code></a>
            </li>
            <li>
              <a href="#confirmation-form-radio">Radio-selecteerknop - <code>radio</code></a>
            </li>
          </ul>
        </nav>

        <h4 id="confirmation-form-input">Input</h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <label for="input-confirmation">Input</label>
          <div>
            <input
              id="input-confirmation"
              class="confirmation"
              value="Lorem ipsum"
              aria-describedby="input-confirmation-message"
            />
            <p class="confirmation" id="input-confirmation-message">
              <span>bevestiging:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
    <label for="input-confirmation">Input</label>
    <div>
        <input id="input-confirmation" class="confirmation" value="Lorem ipsum" aria-describedby="input-confirmation-message">
        <p class="confirmation" id="input-confirmation-message">
            <span>waarschuwing:</span> Lorem ipsum dolor sit amet
        </p>
    </div>
</form>
`}
        />

        <h4 id="confirmation-form-textarea">Tekstveld</h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <label for="voorbeeld-tekstveld-confirmation">Voorbeeld tekstveld</label>
          <div>
            <textarea
              id="voorbeeld-tekstveld-confirmation"
              name="voorbeeld-tekstveld-confirmation"
              class="confirmation"
              aria-describedby="voorbeeld-tekstveld-confirmation-message"
            ></textarea>
            <p class="confirmation" id="voorbeeld-tekstveld-confirmation-message">
              <span>bevestiging:</span> Lorem ipsum dolor sit amet
            </p>
          </div>

          <button type="submit">Verzend</button>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="voorbeeld-tekstveld-confirmation">Voorbeeld tekstveld</label>
  <div>
    <textarea
      id="voorbeeld-tekstveld-confirmation"
      name="voorbeeld-tekstveld-confirmation"
      class="confirmation"
      aria-describedby="voorbeeld-tekstveld-confirmation-message"
    ></textarea>
    <p class="confirmation" id="voorbeeld-tekstveld-confirmation-message">
      <span>bevestiging:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h4 id="confirmation-form-select">Selectielijst</h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <label for="select-confirmation">Selectielijst</label>
          <div>
            <select
              id="select-confirmation"
              name="select"
              class="confirmation"
              aria-describedby="select-confirmation-message"
            >
              <option value="1">Optie 1</option>
              <option value="2">Optie 2</option>
              <option value="3">Optie 3</option>
            </select>
            <p class="confirmation" id="select-confirmation-message">
              <span>bevestiging:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="select-confirmation">Selectielijst</label>
  <div>
    <select id="select-confirmation" name="select" class="confirmation" aria-describedby="select-confirmation-message">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
    <p class="confirmation" id="select-confirmation-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
`}
        />

        <h4 id="confirmation-form-datalist">Datalijst</h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <label for="datalist-confirmation">Input</label>
          <div>
            <input
              id="datalist-confirmation"
              class="confirmation"
              list="example-list-confirmation"
              aria-describedby="datalist-confirmation-message"
            />
            <p class="confirmation" id="datalist-confirmation-message">
              <span>bevestiging:</span> Lorem ipsum dolor sit amet
            </p>
          </div>

          <datalist id="example-list-confirmation">
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
  <label for="datalist-confirmation">Input</label>
  <div>
    <input
      id="datalist-confirmation"
      class="confirmation"
      list="example-list-confirmation"
      aria-describedby="datalist-confirmation-message"
    />
    <p class="confirmation" id="datalist-confirmation-message">
      <span>bevestiging:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <datalist id="example-list-confirmation">
    <option value="Optie 1"></option>
    <option value="Optie 2"></option>
    <option value="Optie 3"></option>
  </datalist>
</form>
`}
        />

        <h4 id="confirmation-form-checkbox">Selectievak - <code>checkbox</code></h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <div aria-describedby="checkbox-confirmation-message">
            <input
              type="checkbox"
              id="checkbox-confirmation"
              name="standaard-checkbox"
              class="confirmation"
            />
            <label for="checkbox-confirmation">Lorem ipsum dolor sit amet</label>
            <p class="confirmation" id="checkbox-confirmation-message">
              <span>bevestiging:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div aria-describedby="checkbox-confirmation-message">
    <input type="checkbox" id="checkbox-confirmation" name="standaard-checkbox" class="confirmation">
    <label for="checkbox-confirmation">Lorem ipsum dolor sit amet</label>
    <p class="confirmation" id="checkbox-confirmation-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
`}
        />

        <h4 id="confirmation-form-radio">Radio-selecteerknop - <code>radio</code></h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <div>
            <input
              type="radio"
              id="radio-example-confirmation"
              name="standaard-radiobutton"
              value="value"
              class="confirmation"
            />
            <label for="radio-example-confirmation">Lorem ipsum dolor sit amet</label>
            <p class="confirmation" id="radio-example-confirmation-message">
              <span>bevestiging:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <input type="radio" id="radio-example-confirmation" name="standaard-radiobutton" value="value" class="confirmation">
    <label for="radio-example-confirmation">Lorem ipsum dolor sit amet</label>
    <p class="confirmation" id="radio-example-confirmation-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
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
        <h3>Importeer component via npm</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-confirmation";
`}
        />
      </section>
    </div>
  </article>
</main>
