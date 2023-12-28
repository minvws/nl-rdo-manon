<script context="module">
  export const breadcrumb = "Notificatie-teller";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Notificatie-teller</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Notificatie-teller</h1>
        <p>
          Gebruik om de gebruiker te attenderen en te informeren over nieuwe berichten of
          notificaties.
        </p>

        <ul>
          <li>
            Voeg de <code>class</code> "message-counter" toe om het aantal berichten visueel weer te
            geven als een notificatie-teller.
          </li>
          <li>
            Voeg <code>aria-label=""</code> toe met een duidelijke omschrijving toe voor gebruiker die
            gebruik maken van screenreaders. Bijvoorbeeld: "Nieuwe berichten", "Ongelezen berichten"
            of "Nieuwe berichten binnen afspraken". Houdt de omschrijving kort maar zorg voor voldoende
            context.
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Visuele voorbeeld:</h3>
        <span class="message-counter" aria-label="Nieuwe berichten">1</span>

        <h3>HTML-voorbeeld:</h3>
        <h4><code>span</code></h4>
        <Code
          language="html"
          code={`
<span class="message-counter" aria-label="Nieuwe berichten">1</span>
`}
        />

        <h4><code>p</code></h4>
        <Code
          language="html"
          code={`
<p class="message-counter" aria-label="Nieuwe berichten">1</p>
`}
        />

        <h4><code>div</code></h4>
        <Code
          language="html"
          code={`
<div class="message-counter" aria-label="Nieuwe berichten">1</div>
`}
        />

        <h4><code>li</code></h4>
        <Code
          language="html"
          code={`
<ul>
  <li class="message-counter" aria-label="Nieuwe berichten">1</li>
</ul>
`}
        />

        <h4>Visueel voorbeeld lang getal:</h4>
        <span class="message-counter" aria-label="Nieuwe berichten">12.830</span>

        <Code
          language="html"
          code={`
<span class="message-counter" aria-label="Nieuwe berichten">12.830</span>
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li><a href="{base}/variables#padding">padding</a></li>
          <li>
            <a href="{base}/variables#border-radius">border-radius</a>
          </li>
          <li><a href="{base}/variables#font-size">font-size</a></li>
          <li>
            <a href="{base}/variables#background-color">background-color</a>
          </li>
          <li><a href="{base}/variables#text-color">text-color</a></li>
          <li><a href="{base}/variables#height">height</a></li>
          <li><a href="{base}/variables#min-width">min-width</a></li>
          <li><a href="{base}/variables#border-width">border-width</a></li>
          <li><a href="{base}/variables#border-style">border-style</a></li>
          <li><a href="{base}/variables#border-color">border-color</a></li>
        </ul>
      </section>

      <section id="requirements">
        <h2>Benodigde bestanden</h2>
        <ul>
          <li><code>message-counter/message-counter-base.scss</code></li>
          <li>
            <code>message-counter/message-counter-base-variables.scss</code>
          </li>
        </ul>
      </section>
    </div>
  </article>
</main>
