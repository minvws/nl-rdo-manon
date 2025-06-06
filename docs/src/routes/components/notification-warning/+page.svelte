<script module>
  export const breadcrumb = "Waarschuwing";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Waarschuwing</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li>
        <a href="#examples">Voorbeelden</a>
        <ul>
          <li><a href="#warning-div">Blokelement</a></li>
          <li><a href="#warning-paragraph">Paragraaf</a></li>
          <li>
            <a href="#warning-form">Formulier-elementen</a>
            <ul>
              <li>
                <a href="#warning-form-input">Invoerveld - <code>input</code></a>
              </li>
              <li>
                <a href="#warning-form-textarea">Tekstveld - <code>textarea</code></a>
              </li>
              <li>
                <a href="#warning-form-select">Selectielijst - <code>select</code></a>
              </li>
              <li>
                <a href="#warning-form-datalist">Datalijst - <code>Datalist</code></a>
              </li>
              <li>
                <a href="#warning-form-checkbox">Selectievak - <code>checkbox</code></a>
              </li>
              <li>
                <a href="#warning-form-radio">Radio-selecteerknop - <code>radio</code></a>
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
        <h1>Waarschuwing</h1>
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
        <nav aria-label="Waarschuwing subnavigatie">
          <ul>
            <li><a href="#warning-div">Blokelement</a></li>
            <li><a href="#warning-paragraph">Paragraaf</a></li>
            <li><a href="#warning-form">Formulier-elementen</a></li>
          </ul>
        </nav>

        <h3 id="warning-div">Blokelement</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="warning" role="group" aria-label="waarschuwing">
          <span>Waarschuwing:</span>
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
              <a href="notification-warning">Lorem ipsum</a> consectetur adipiscing elit.
            </li>
          </ul>
          <button type="button">Lorem</button>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="warning" role="group" aria-label="waarschuwing">
  <span>Waarschuwing:</span>
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
<div class="warning" role="group" aria-label="waarschuwing">
    <span>Waarschuwing:</span>
    <!-- Voeg hier de content toe. -->
</div>
`}
        />

        <p>
          Voor meer informatie zie:
          <a href="{base}/components/notifications-block-element">Blok-element</a>
        </p>

        <h3 id="warning-paragraph">Paragraaf</h3>
        <h4>Visueel voorbeeld:</h4>
        <p class="warning" role="group" aria-label="waarschuwing">
          <span>Waarschuwing:</span> Lorem ipsum dolor sit.
        </p>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="warning" role="group" aria-label="waarschuwing"><span>Waarschuwing:</span> Lorem ipsum dolor sit amet </p>
`}
        />

        <h3 id="warning-form">Formulier-elementen</h3>
        <nav aria-label="Waarschuwing formulierelementen subnavigatie">
          <ul>
            <li>
              <a href="#warning-form-input">Invoerveld - <code>input</code></a>
            </li>
            <li>
              <a href="#warning-form-textarea">Tekstveld - <code>textarea</code></a>
            </li>
            <li>
              <a href="#warning-form-select">Selectielijst - <code>select</code></a>
            </li>
            <li>
              <a href="#warning-form-datalist">Datalijst - <code>Datalist</code></a>
            </li>
            <li>
              <a href="#warning-form-checkbox">Selectievak - <code>checkbox</code></a>
            </li>
            <li>
              <a href="#warning-form-radio">Radio-selecteerknop - <code>radio</code></a>
            </li>
          </ul>
        </nav>

        <h4 id="warning-form-input">Input</h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <label for="input-warning">Input</label>
          <div>
            <input
              id="input-warning"
              class="warning"
              value="Lorem ipsum"
              aria-describedby="input-warning-message"
              aria-invalid="true"
            />
            <p class="warning" id="input-warning-message">
              <span>waarschuwing:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
    <label for="input-warning">Input</label>
    <div>
        <input id="input-warning" class="warning" value="Lorem ipsum" aria-describedby="input-warning-message" aria-invalid="true">
        <p class="warning" id="input-warning-message">
            <span>waarschuwing:</span> Lorem ipsum dolor sit amet
        </p>
    </div>
</form>
`}
        />

        <h4 id="warning-form-textarea">Tekstveld</h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <label for="voorbeeld-tekstveld-warning">Voorbeeld tekstveld</label>
          <div>
            <textarea
              id="voorbeeld-tekstveld-warning"
              name="voorbeeld-tekstveld-warning"
              class="warning"
              aria-describedby="voorbeeld-tekstveld-warning-message"
              aria-invalid="true"
            ></textarea>
            <p class="warning" id="voorbeeld-tekstveld-warning-message">
              <span>waarschuwing:</span> Lorem ipsum dolor sit amet
            </p>
          </div>

          <button type="submit">Verzend</button>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="voorbeeld-tekstveld-warning">Voorbeeld tekstveld</label>
  <div>
    <textarea
      id="voorbeeld-tekstveld-warning"
      name="voorbeeld-tekstveld-warning"
      class="warning"
      aria-describedby="voorbeeld-tekstveld-warning-message"
      aria-invalid="true"
    ></textarea>
    <p class="warning" id="voorbeeld-tekstveld-warning-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h4 id="warning-form-select">Selectielijst</h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <label for="select-warning">Selectielijst</label>
          <div>
            <select
              id="select-warning"
              name="select"
              class="warning"
              aria-describedby="select-warning-message"
              aria-invalid="true"
            >
              <option value="1">Optie 1</option>
              <option value="2">Optie 2</option>
              <option value="3">Optie 3</option>
            </select>
            <p class="warning" id="select-warning-message">
              <span>waarschuwing:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="select-warning">Selectielijst</label>
  <div>
    <select id="select-warning" name="select" class="warning" aria-describedby="select-warning-message" aria-invalid="true">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
    <p class="warning" id="select-warning-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
`}
        />

        <h4 id="warning-form-datalist">Datalijst</h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <label for="datalist-warning">Input</label>
          <div>
            <input
              id="datalist-warning"
              class="warning"
              list="example-list-warning"
              aria-describedby="datalist-warning-message"
              aria-invalid="true"
            />
            <p class="warning" id="datalist-warning-message">
              <span>waarschuwing:</span> Lorem ipsum dolor sit amet
            </p>
          </div>

          <datalist id="example-list-warning">
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
  <label for="datalist-warning">Input</label>
  <div>
    <input
      id="datalist-warning"
      class="warning"
      list="example-list-warning"
      aria-describedby="datalist-warning-message"
      aria-invalid="true"
    />
    <p class="warning" id="datalist-warning-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <datalist id="example-list-warning">
    <option value="Optie 1"></option>
    <option value="Optie 2"></option>
    <option value="Optie 3"></option>
  </datalist>
</form>
`}
        />

        <h4 id="warning-form-checkbox">Selectievak - <code>checkbox</code></h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <div aria-describedby="checkbox-warning-message">
            <input
              type="checkbox"
              id="checkbox-warning"
              name="standaard-checkbox"
              class="warning"
              aria-invalid="true"
            />
            <label for="checkbox-warning">Lorem ipsum dolor sit amet</label>
            <p class="warning" id="checkbox-warning-message">
              <span>waarschuwing:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div aria-describedby="checkbox-warning-message">
    <input type="checkbox" id="checkbox-warning" name="standaard-checkbox" class="warning" aria-invalid="true">
    <label for="checkbox-warning">Lorem ipsum dolor sit amet</label>
    <p class="warning" id="checkbox-warning-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
`}
        />

        <h4 id="warning-form-radio">Radio-selecteerknop - <code>radio</code></h4>

        <h5>Visueel voorbeeld:</h5>
        <form action="" method="post">
          <div>
            <input
              type="radio"
              id="radio-example-warning"
              name="standaard-radiobutton"
              value="value"
              class="warning"
            />
            <label for="radio-example-warning">Lorem ipsum dolor sit amet</label>
            <p class="warning" id="radio-example-warning-message">
              <span>waarschuwing:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <input type="radio" id="radio-example-warning" name="standaard-radiobutton" value="value" class="warning" >
    <label for="radio-example-warning">Lorem ipsum dolor sit amet</label>
    <p class="warning" id="radio-example-warning-message">
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
@use "@minvws/manon/notification-warning";
`}
        />
      </section>
    </div>
  </article>
</main>
