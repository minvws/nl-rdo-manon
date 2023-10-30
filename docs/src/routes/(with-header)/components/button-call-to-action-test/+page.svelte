<script context="module">
  export const breadcrumb = '"Call to action" testpagina';
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>"Call to action" testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article id="button-base">
    <div>
      <section id="introduction">
        <h1>"Call to action" testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>

        <h3><code>button</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <button class="cta">Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button class="cta">Lorem ipsum</button>
`}
        />

        <h3><code>button</code> disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <button class="cta" disabled={true}>Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button class="cta" disabled>Lorem ipsum</button>
`}
        />
        <h4>States</h4>
        <ul>
          <li><button class="cta focus">Focus</button></li>
          <li><button class="cta active">Active</button></li>
          <li><button class="cta visited">Visited</button></li>
          <li><button class="cta hover">Hover</button></li>
          <li><button class="cta selected">Selected</button></li>
        </ul>

        <h3><code>button</code> met een afbeelding</h3>
        <h4>Visueel voorbeeld:</h4>
        <button class="cta">Lorem ipsum <img src="$img/cat.svg" /></button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button class="cta">Lorem ipsum <img src="/img/cat.svg"></button>
`}
        />

        <h3>Link als knop</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="./button-call-to-action-test" class="button cta">Lorem ipsum</a>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input class="button cta">Lorem ipsum</a>
`}
        />

        <h3>Link als knop: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="./button-call-to-action-test" class="button cta" disabled={true}>Lorem ipsum</a>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input class="button cta" disabled>Lorem ipsum</a>
`}
        />

        <h4>States</h4>
        <ul>
          <li>
            <a href="./button-call-to-action-test" class="button cta focus">Focus</a>
          </li>
          <li>
            <a href="./button-call-to-action-test" class="button cta active">Active</a>
          </li>
          <li>
            <a href="./button-call-to-action-test" class="button cta visited">Visited</a>
          </li>
          <li>
            <a href="./button-call-to-action-test" class="button cta hover">Hover</a>
          </li>
          <li>
            <a href="./button-call-to-action-test" class="button cta selected">Selected</a>
          </li>
        </ul>

        <h3>Link als knop: met een afbeelding</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="./button-call-to-action-test" class="button cta"
          >Lorem ipsum <img src="$img/cat.svg" /></a
        >

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input class="button cta">Lorem ipsum <img src="/img/cat.svg"></a>
`}
        />

        <h3><code>input type="button"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="button" value="Button" class="cta" />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="button" value="Button" class="cta">
`}
        />

        <h3><code>input type="button"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="button" value="Button disabled" class="cta" disabled={true} />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="button" value="Button disabled" class="cta" disabled>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li><input type="button" value="Focus" class="cta focus" /></li>
          <li><input type="button" value="Active" class="cta active" /></li>
          <li>
            <input type="button" value="Visited" class="cta visited" />
          </li>
          <li><input type="button" value="Hover" class="cta hover" /></li>
          <li>
            <input type="button" value="Selected" class="cta selected" />
          </li>
        </ul>

        <h3><code>button type="submit"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="submit" class="cta">Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="submit" class="cta">Lorem ipsum</button>
`}
        />

        <h3><code>button type="submit"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="submit" class="cta" disabled={true}>Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="submit" value="Button disabled" class="cta" disabled>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li><button type="submit" class="cta focus">Focus</button></li>
          <li><button type="submit" class="cta active">Active</button></li>
          <li>
            <button type="submit" class="cta visited">Visited</button>
          </li>
          <li><button type="submit" class="cta hover">Hover</button></li>
          <li>
            <button type="submit" class="cta selected">Selected</button>
          </li>
        </ul>

        <h3><code>input type="submit"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="submit" value="Input" class="cta" />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="submit" value="Input" class="cta">
`}
        />

        <h3><code>input type="submit"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="submit" value="Input" class="cta" disabled={true} />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="submit" value="Input" class="cta" disabled>
`}
        />

        <h3><code>button type="reset"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="reset" class="cta">Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="reset" class="cta">Lorem ipsum</button>
`}
        />

        <h3><code>button type="reset"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="reset" class="cta" disabled={true}>Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="reset" value="Button disabled" class="cta" disabled>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li><button type="reset" class="cta focus">Focus</button></li>
          <li><button type="reset" class="cta active">Active</button></li>
          <li><button type="reset" class="cta visited">Visited</button></li>
          <li><button type="reset" class="cta hover">Hover</button></li>
          <li>
            <button type="reset" class="cta selected">Selected</button>
          </li>
        </ul>

        <h3><code>input type="reset"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="reset" value="Input" class="cta" disabled={true} />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="reset" value="Input" class="cta" disabled>
`}
        />

        <h3><code>button type="reset"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="reset" class="cta" />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="reset" class="cta">
`}
        />

        <h3><code>button type="reset"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="reset" class="cta" disabled={true} />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="reset" value="Button disabled" class="cta" disabled>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li><input type="reset" value="focus" class="cta focus" /></li>
          <li><input type="reset" value="active" class="cta active" /></li>
          <li>
            <input type="reset" value="visited" class="cta visited" />
          </li>
          <li><input type="reset" value="hover" class="cta hover" /></li>
          <li>
            <input type="reset" value="selected" class="cta selected" />
          </li>
        </ul>
      </section>
    </div>
  </article>
</main>
