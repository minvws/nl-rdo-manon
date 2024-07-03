<script context="module">
  export const breadcrumb = "Blok-element testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Blok-element testpagina</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li>
        <a href="#section">section</a>
        <ul>
          <li><a href="#section-error">Foutmelding</a></li>
          <li><a href="#section-warning">Waarschuwing</a></li>
          <li><a href="#section-confirmation">Bevestiging</a></li>
          <li><a href="#section-explanation">Toelichting</a></li>
          <li><a href="#section-system">Systeembericht</a></li>
        </ul>
      </li>
      <li>
        <a href="#div">div</a>
        <ul>
          <li><a href="#div-error">Foutmelding</a></li>
          <li><a href="#div-warning">Waarschuwing</a></li>
          <li><a href="#div-confirmation">Bevestiging</a></li>
          <li><a href="#div-explanation">Toelichting</a></li>
          <li><a href="#div-system">Systeembericht</a></li>
        </ul>
      </li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h2>Blok-element testpagina</h2>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3 id="section"><code>section</code></h3>

        <h4>Notificatie</h4>
        <h5>Visueel voorbeeld:</h5>
        <section class="notification" role="group" aria-label="notificatie">
          <span>Notificatie:</span>
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
              <a href="notifications-block-element-test">Lorem ipsum</a> consectetur adipiscing elit.
            </li>
          </ul>
          <button type="button">Lorem</button>
        </section>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<section class="notification" role="group" aria-label="notificatie">
  <span>Notificatie:</span>
  <h1>Lorem ipsum dolor set</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat facilisis ac eu velit. Donec luctus metus a lacus dictum, a porta ligula pellentesque. Phasellus ultricies purus id viverra ultrices. Proin sagittis rhoncus tempor. Nam efficitur elit commodo elit feugiat scelerisque. Nullam consectetur felis mi, ac bibendum urna convallis a. Ut maximus volutpat ligula, et accumsan ipsum varius eget. Mauris euismod a augue sit amet condimentum.</p>
  <ul>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat facilisis ac eu velit. <a href="">Lorem ipsum</a> consectetur adipiscing elit.</li>
  </ul>
  <button type="button">Lorem</button>
</section>
`}
        />

        <h4 id="section-error">Foutmelding</h4>
        <h5>Visueel voorbeeld:</h5>
        <section class="error" role="group" aria-label="foutmelding">
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
              <a href="notifications-block-element-test">Lorem ipsum</a> consectetur adipiscing elit.
            </li>
          </ul>
          <button type="button">Lorem</button>
        </section>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<section class="error" role="group" aria-label="foutmelding">
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
</section>
`}
        />

        <h4 id="section-warning">Waarchuwing:</h4>
        <h5>Visueel voorbeeld:</h5>
        <section class="warning" role="group" aria-label="waarschuwing">
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
              <a href="notifications-block-element-test">Lorem ipsum</a> consectetur adipiscing elit.
            </li>
          </ul>
          <button type="button">Lorem</button>
        </section>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<section class="warning" role="group" aria-label="waarschuwing">
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
</section>
`}
        />

        <h4 id="section-confirmation">Bevestiging:</h4>
        <h5>Visueel voorbeeld:</h5>
        <section class="confirmation" role="group" aria-label="bevestiging">
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
              <a href="notifications-block-element-test">Lorem ipsum</a> consectetur adipiscing elit.
            </li>
          </ul>
          <button type="button">Lorem</button>
        </section>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<section class="confirmation" role="group" aria-label="bevestiging">
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
</section>
`}
        />

        <h4 id="section-explanation">Toelichting:</h4>
        <h5>Visueel voorbeeld:</h5>
        <section class="explanation" role="group" aria-label="toelichting">
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
              <a href="notifications-block-element-test">Lorem ipsum</a> consectetur adipiscing elit.
            </li>
          </ul>
          <button type="button">Lorem</button>
        </section>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<section class="explanation" role="group" aria-label="toelichting">
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
</section>
`}
        />

        <h4 id="section-system">Systeembericht:</h4>
        <h5>Visueel voorbeeld:</h5>
        <section class="system" role="group" aria-label="systeembericht">
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
              <a href="notifications-block-element-test">Lorem ipsum</a> consectetur adipiscing elit.
            </li>
          </ul>
          <button type="button">Lorem</button>
        </section>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<section class="system" role="group" aria-label="systeembericht">
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
</section>
`}
        />

        <h3 id="div"><code>div</code></h3>
        <h4>Notificatie:</h4>
        <h5>Visueel voorbeeld:</h5>
        <div class="notification" role="group" aria-label="notificatie">
          <span>Notificatie:</span>
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
              <a href="notifications-block-element-test">Lorem ipsum</a> consectetur adipiscing elit.
            </li>
          </ul>
          <button type="button">Lorem</button>
        </div>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<div class="notification" role="group" aria-label="notificatie">
  <span>Notificatie:</span>
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

        <h4 id="div-error">Foutmelding:</h4>
        <h5>Visueel voorbeeld:</h5>
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
              <a href="notifications-block-element-test">Lorem ipsum</a> consectetur adipiscing elit.
            </li>
          </ul>
          <button type="button">Lorem</button>
        </div>

        <h5>HTML-voorbeeld:</h5>
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

        <h4 id="div-warning">Waarschuwing:</h4>
        <h5>Visueel voorbeeld:</h5>
        <div class="warning" role="group" aria-label="waarchuwing">
          <span>Waarchuwing:</span>
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
              <a href="notifications-block-element-test">Lorem ipsum</a> consectetur adipiscing elit.
            </li>
          </ul>
          <button type="button">Lorem</button>
        </div>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<div class="warning" role="group" aria-label="waarchuwing">
  <span>Waarchuwing:</span>
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

        <h4 id="div-confirmation">Bevestiging:</h4>
        <h5>Visueel voorbeeld:</h5>
        <div class="confirmation" role="group" aria-label="bevestiging">
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
              <a href="notifications-block-element-test">Lorem ipsum</a> consectetur adipiscing elit.
            </li>
          </ul>
          <button type="button">Lorem</button>
        </div>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<div class="confirmation" role="group" aria-label="bevestiging">
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

        <h4 id="div-explanation">Toelichting:</h4>
        <h5>Visueel voorbeeld:</h5>
        <div class="explanation" role="group" aria-label="toelichting">
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
              <a href="notifications-block-element-test">Lorem ipsum</a> consectetur adipiscing elit.
            </li>
          </ul>
          <button type="button">Lorem</button>
        </div>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<div class="explanation" role="group" aria-label="toelichting">
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

        <h4 id="div-system">Systeembericht:</h4>
        <h5>Visueel voorbeeld:</h5>
        <div class="system" role="group" aria-label="systeembericht">
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
              <a href="notifications-block-element-test">Lorem ipsum</a> consectetur adipiscing elit.
            </li>
          </ul>
          <button type="button">Lorem</button>
        </div>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<div class="system" role="group" aria-label="systeembericht">
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

        <h3>Bloknotificatie binnen formulier</h3>
        <h4>Toelichting:</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post">
          <div class="explanation" role="group" aria-label="toelichting">
            <span>Toelichting:</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul>
              <li>Lorem ipsum</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi
                consequat facilisis ac eu velit.
                <a href="notifications-block-element-test">Lorem ipsum</a> consectetur adipiscing elit.
              </li>
            </ul>
          </div>

          <label for="form-example-1">Voorbeeld text input</label>
          <input id="form-example-1" name="form-example-1" type="text" />

          <button type="submit">Verzend</button>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="explanation" role="group" aria-label="toelichting">
    <span>Toelichting:</span>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <ul>
      <li>Lorem ipsum</li>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi
        consequat facilisis ac eu velit.
        <a href="">Lorem ipsum</a> consectetur adipiscing elit.
      </li>
    </ul>
  </div>

  <label for="form-example-1">Voorbeeld text input</label>
  <input id="form-example-1" name="form-example-1" type="text">

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Blocknotificatie binnen horizontaal uitgelijnd formulier</h3>
        <h4>Toelichting:</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal-view">
          <div class="explanation" role="group" aria-label="toelichting">
            <span>Toelichting:</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul>
              <li>Lorem ipsum</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi
                consequat facilisis ac eu velit.
                <a href="notifications-block-element-test">Lorem ipsum</a> consectetur adipiscing elit.
              </li>
            </ul>
          </div>

          <div>
            <label for="form-example-2">Voorbeeld text input</label>
            <input id="form-example-2" name="form-example-2" type="text" />
          </div>
          <button type="submit">Verzend</button>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal-view">
  <div class="explanation" role="group" aria-label="toelichting">
    <span>Toelichting:</span>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <ul>
      <li>Lorem ipsum</li>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi
        consequat facilisis ac eu velit.
        <a href="">Lorem ipsum</a> consectetur adipiscing elit.
      </li>
    </ul>
  </div>

  <div>
    <label for="form-example-2">Voorbeeld text input</label>
    <input id="form-example-2" name="form-example-2" type="text">
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Blocknotificatie binnen fieldset in horizontaal uitgelijnd formulier</h3>
        <h4>Toelichting:</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal-view">
          <fieldset>
            <legend>Test voor bloknotificatie</legend>

            <div class="explanation" role="group" aria-label="toelichting">
              <span>Toelichting:</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div>
              <label for="form-example-base">Voorbeeld text input</label>
              <input id="form-example-base" name="form-example-base" type="text" />
            </div>
          </fieldset>

          <button type="submit">Verzend</button>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal-view">
  <fieldset>
    <legend>Test voor bloknotificatie</legend>

    <div class="explanation" role="group" aria-label="toelichting">
      <span>Toelichting:</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>

    <div>
      <label for="form-example-base">Voorbeeld text input</label>
      <input id="form-example-base" name="form-example-base" type="text">
    </div>
  </fieldset>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Blocknotificatie binnen horizontaal uitgelijnd formulier met helpteksten</h3>
        <h4>Toelichting:</h4>
        <h5>Visueel voorbeeld:</h5>

        <form action="" method="post" class="horizontal-view help">
          <div class="explanation" role="group" aria-label="toelichting">
            <span>Toelichting:</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul>
              <li>Lorem ipsum</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi
                consequat facilisis ac eu velit.
                <a href="notifications-block-element-test">Lorem ipsum</a> consectetur adipiscing elit.
              </li>
            </ul>
          </div>

          <div>
            <span class="nota-bene">Dit veld is verplicht</span>
            <div>
              <input
                id="example-input-help-required"
                name="voorbeeld-text-input"
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
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <button type="submit">Verzend</button>
        </form>

        <h5>HTML-voorbeeld:</h5>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal-view help">
  <div class="explanation" role="group" aria-label="toelichting">
    <span>Toelichting:</span>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <ul>
      <li>Lorem ipsum</li>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi
        consequat facilisis ac eu velit.
        <a href="">Lorem ipsum</a> consectetur adipiscing elit.
      </li>
    </ul>
  </div>

  <div>
    <span class="nota-bene">Dit veld is verplicht</span>
    <div>
      <input
        id="example-input-help-required"
        name="voorbeeld-text-input"
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
        Lorem ipsum dolor sit amet.
      </p>
    </div>
  </div>

  <button type="submit">Verzend</button>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
