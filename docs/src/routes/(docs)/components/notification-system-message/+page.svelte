<script context="module">
  export const breadcrumb = "Systeembericht";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Systeembericht</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li>
        <a href="#examples">Voorbeelden</a>
        <ul>
          <li><a href="#system-div">Blokelement</a></li>
          <li><a href="#system-paragraph">Paragraaf</a></li>
          <li>
            <a href="#system-table">Tabel-elementen</a>
            <ul>
              <li>
                <a href="#system-th">Tabeltitel - <code>th</code></a>
              </li>
              <li>
                <a href="#system-td">Tabelcel - <code>td</code></a>
              </li>
              <li>
                <a href="#system-tr">Tabelrij - <code>tr</code></a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#system-form">Formulier-elementen</a>
            <ul>
              <li>
                <a href="#system-form-input">Invoerveld - <code>input</code></a>
              </li>
              <li>
                <a href="#system-form-textarea">Tekstveld - <code>textarea</code></a>
              </li>
              <li>
                <a href="#system-form-select">Selectielijst - <code>select</code></a>
              </li>
              <li>
                <a href="#system-form-datalist">Datalijst - <code>Datalist</code></a>
              </li>
              <li>
                <a href="#system-form-checkbox">Selectievak - <code>checkbox</code></a>
              </li>
              <li>
                <a href="#system-form-radio">Radio-selecteerknop - <code>radio</code></a>
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
        <h1>Systeembericht</h1>
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
        <nav aria-label="Systeembericht subnavigatie">
          <ul>
            <li><a href="#system-div">Blokelement</a></li>
            <li><a href="#system-paragraph">Paragraaf</a></li>
            <li><a href="#system-table">Tabel-elementen</a></li>
            <li><a href="#system-form">Formulier-elementen</a></li>
          </ul>
        </nav>

        <h3 id="system-div">Blokelement</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="system" role="group" aria-label="Systeembericht">
          <span>Systeembericht:</span>
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
              <a href="notification-system-message">Lorem ipsum</a> consectetur adipiscing elit.
            </li>
          </ul>
          <button type="button">Lorem</button>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="system" role="group" aria-label="Systeembericht">
  <span>Systeembericht:</span>
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
<div class="system" role="group" aria-label="Systeembericht">
    <span>Systeembericht:</span>
    <!-- Voeg hier de content toe. -->
</div>
`}
        />

        <p>
          Voor meer informatie zie:
          <a href="{base}/components/notifications-block-element">Blok-element</a>
        </p>

        <h3 id="system-paragraph">Paragraaf</h3>
        <h4>Visueel voorbeeld:</h4>
        <p class="system" role="group" aria-label="Systeembericht">
          <span>Systeembericht:</span> Lorem ipsum dolor sit.
        </p>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="system" role="group" aria-label="Systeembericht"><span>Systeembericht:</span> Lorem ipsum dolor sit amet </p>
`}
        />

        <h3 id="system-table">Tabel-elementen</h3>
        <nav aria-label="Systeembericht tabelelementen subnavigatie">
          <ul>
            <li>
              <a href="#system-th">Tabeltitel - <code>th</code></a>
            </li>
            <li>
              <a href="#system-td">Tabelcel - <code>td</code></a>
            </li>
            <li>
              <a href="#system-tr">Tabelrij - <code>tr</code></a>
            </li>
          </ul>
        </nav>

        <h4 id="system-th">Systeembericht op tabeltitel</h4>

        <p class="warning"><span>Waarschuwing:</span> In een vorige versie van de documentatie werd hier beschreven hoe een tabeltitel als systeembericht opgemaakt kan worden. Deze instructies zijn weggehaald, omdat dit omwille de toegankelijkheid sterk <strong>afgeraden</strong> wordt.</p>

        <h4 id="system-td">Systeembericht op Tabelcel</h4>

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
              <td class="system" aria-label="Systeembericht">
                <span>Systeembericht:</span> 15
              </td>
              <td class="system" aria-label="Systeembericht">
                <span>Systeembericht:</span> 168
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
      <td class="system" aria-label="Systeembericht"><span>Systeembericht:</span> 15</td>
      <td class="system" aria-label="Systeembericht"><span>Systeembericht:</span> 168</td>
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

        <h4 id="system-tr">Systeembericht op tabelrij</h4>

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

            <tr class="system">
              <td aria-label="Systeembericht"><span>Systeembericht:</span> 12</td>
              <td aria-label="Systeembericht"><span>Systeembericht:</span> 42</td>
            </tr>

            <tr class="system">
              <td aria-label="Systeembericht"><span>Systeembericht:</span> 12</td>
              <td aria-label="Systeembericht"><span>Systeembericht:</span> 42</td>
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

    <tr class="system">
      <td aria-label="Systeembericht"><span>Systeembericht:</span> 12</td>
      <td aria-label="Systeembericht"><span>Systeembericht:</span> 42</td>
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

        <h3 id="system-form">Formulier-elementen</h3>
        <nav aria-label="Systeembericht formulierelementen subnavigatie">
          <ul>
            <li>
              <a href="#system-form-input">Invoerveld - <code>input</code></a>
            </li>
            <li>
              <a href="#system-form-textarea">Tekstveld - <code>textarea</code></a>
            </li>
            <li>
              <a href="#system-form-select">Selectielijst - <code>select</code></a>
            </li>
            <li>
              <a href="#system-form-datalist">Datalijst - <code>Datalist</code></a>
            </li>
            <li>
              <a href="#system-form-checkbox">Selectievak - <code>checkbox</code></a>
            </li>
            <li>
              <a href="#system-form-radio">Radio-selecteerknop - <code>radio</code></a>
            </li>
          </ul>
        </nav>

        <h4 id="system-form-input">Input</h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <label for="input-system">Input</label>
          <div>
            <input
              id="input-system"
              class="system"
              value="Lorem ipsum"
              aria-describedby="input-system-message"
            />
            <p class="system" id="input-system-message">
              <span>systeembericht:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
    <label for="input-system">Input</label>
    <div>
        <input id="input-system" class="system" value="Lorem ipsum" aria-describedby="input-system-message">
        <p class="system" id="input-system-message">
            <span>system:</span> Lorem ipsum dolor sit amet
        </p>
    </div>
</form>
`}
        />

        <h4 id="system-form-textarea">Tekstveld</h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <label for="voorbeeld-tekstveld-system">Voorbeeld tekstveld</label>
          <div>
            <textarea
              id="voorbeeld-tekstveld-system"
              name="voorbeeld-tekstveld-system"
              class="system"
              aria-describedby="voorbeeld-tekstveld-system-message"
            ></textarea>
            <p class="system" id="voorbeeld-tekstveld-system-message">
              <span>systeembericht:</span> Lorem ipsum dolor sit amet
            </p>
          </div>

          <button type="submit">Verzend</button>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="voorbeeld-tekstveld-system">Voorbeeld tekstveld</label>
  <div>
    <textarea
      id="voorbeeld-tekstveld-system"
      name="voorbeeld-tekstveld-system"
      class="system"
      aria-describedby="voorbeeld-tekstveld-system-message"
    ></textarea>
    <p class="system" id="voorbeeld-tekstveld-system-message">
      <span>systeembericht:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h4 id="system-form-select">Selectielijst</h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <label for="select-system">Selectielijst</label>
          <div>
            <select
              id="select-system"
              name="select"
              class="system"
              aria-describedby="select-system-message"
            >
              <option value="1">Optie 1</option>
              <option value="2">Optie 2</option>
              <option value="3">Optie 3</option>
            </select>
            <p class="system" id="select-system-message">
              <span>systeembericht:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="select-system">Selectielijst</label>
  <div>
    <select id="select-system" name="select" class="system" aria-describedby="select-system-message">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
    <p class="system" id="select-system-message">
      <span>system:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
`}
        />

        <h4 id="system-form-datalist">Datalijst</h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <label for="datalist-system">Input</label>
          <div>
            <input
              id="datalist-system"
              class="system"
              list="example-list-system"
              aria-describedby="datalist-system-message"
            />
            <p class="system" id="datalist-system-message">
              <span>systeembericht:</span> Lorem ipsum dolor sit amet
            </p>
          </div>

          <datalist id="example-list-system">
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
  <label for="datalist-system">Input</label>
  <div>
    <input
      id="datalist-system"
      class="system"
      list="example-list-system"
      aria-describedby="datalist-system-message"
    />
    <p class="system" id="datalist-system-message">
      <span>systeembericht:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <datalist id="example-list-system">
    <option value="Optie 1"></option>
    <option value="Optie 2"></option>
    <option value="Optie 3"></option>
  </datalist>
</form>
`}
        />

        <h4 id="system-form-checkbox">Selectievak - <code>checkbox</code></h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <div aria-describedby="checkbox-system-message">
            <input type="checkbox" id="checkbox-system" name="standaard-checkbox" class="system" />
            <label for="checkbox-system">Lorem ipsum dolor sit amet</label>
            <p class="system" id="checkbox-system-message">
              <span>systeembericht:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div aria-describedby="checkbox-system-message">
    <input type="checkbox" id="checkbox-system" name="standaard-checkbox" class="system">
    <label for="checkbox-system">Lorem ipsum dolor sit amet</label>
    <p class="system" id="checkbox-system-message">
      <span>system:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
`}
        />

        <h4 id="system-form-radio">Radio-selecteerknop - <code>radio</code></h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <div>
            <input
              type="radio"
              id="radio-example-system"
              name="standaard-radiobutton"
              value="value"
              class="system"
            />
            <label for="radio-example-system">Lorem ipsum dolor sit amet</label>
            <p class="system" id="radio-example-system-message">
              <span>systeembericht:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <input type="radio" id="radio-example-system" name="standaard-radiobutton" value="value" class="system">
    <label for="radio-example-system">Lorem ipsum dolor sit amet</label>
    <p class="system" id="radio-example-system-message">
      <span>system:</span> Lorem ipsum dolor sit amet
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
          <li>
            <code>notification/notification-system-message.scss</code>
          </li>
        </ul>

        <h3>Optioneel</h3>
        <ul>
          <li>
            <code>notification/notification-variables.scss</code>
          </li>
          <li>
            <code>notification/notification-system-message-variables.scss</code>
          </li>
        </ul>
      </section>
    </div>
  </article>
</main>
