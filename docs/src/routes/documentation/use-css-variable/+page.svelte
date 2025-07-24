<script module>
  export const breadcrumb = "CSS-variabelen gebruiken";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>CSS-variabelen gebruiken</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>CSS-variabelen gebruiken</h1>
        <p>
          Vaak is het mogelijk om keuzes op een hoog niveau te definiëren, of te wel op een element
          dat in de html-strucuur eerder aangemaakt is. Als je in de praktijk merkt dat je een
          bepaalde stijlkeuze vaker moet definiëren is het altijd goed om te kijken of dit op een
          hoger gelegen element kan. Dit bespaart werk en verkleint de kans op fouten.
        </p>

        <h2>Variabele gebruiken binnen een andere variabele</h2>
        <p>
          De knoppen binnen het "button-base"-bestand maken bijvoorbeeld gebruik van de accentkleur
          als deze binnen het "base"-bestand gedefinieerd staat.
        </p>
        <p>
          Het onderstaande voorbeeld geeft weer hoe een variabele als waarde van een andere
          variabele gezet kan worden.
        </p>
        <h3>CSS-voorbeeld:</h3>
        <Code
          language="css"
          code={`
:root {
  $button-background-color: var(--base-accent-color);
}
`}
        />

        <p>
          Als de variabele niet altijd beschikbaar is, is het goed om een "fallback" mee te geven.
          Dan kan de applicatie daarop terugvallen mocht de ingevulde variabele niet gevuld of
          toegevoegd zijn. Dit kan alles zijn wat een CSS-variabele normaal als waarde kan
          accepteren. Bijvoobeeld een kleurcode, voor gedefinieerde kleur of een andere variabele.
          Voeg een komma toe tussen de twee mogelijke waardes binnen de variabele.
        </p>

        <h3>CSS-voorbeeld met kleurcode als fallback:</h3>
        <Code
          language="css"
          code={`
:root {
  $button-background-color: var(--base-accent-color, #000);
}
`}
        />

        <h3>CSS-voorbeeld met vooraf gedefinieerde kleur als fallback:</h3>
        <Code
          language="css"
          code={`
:root {
  $button-background-color: var(--base-accent-color, black);
}
`}
        />

        <h3>CSS-voorbeeld met variabele als fallback:</h3>
        <Code
          language="css"
          code={`
:root {
  $button-background-color: var(--base-accent-color, var(--base-color));
}
`}
        />
      </section>
    </div>
  </article>
</main>
