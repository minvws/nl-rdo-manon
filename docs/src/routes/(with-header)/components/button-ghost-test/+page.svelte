<script context="module">
  export const breadcrumb = '"Ghost button" testpagina';
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>"Ghost button" testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article id="button-base">
    <div>
      <section id="introduction">
        <h1>"Ghost button" testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>

        <h3><code>button</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <button class="ghost">Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button class="ghost">Lorem ipsum</button>
`}
        />

        <h3><code>button</code> disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <button class="ghost" disabled={true}>Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button class="ghost" disabled>Lorem ipsum</button>
`}
        />
        <h4>States</h4>
        <ul>
          <li><button class="ghost focus">Focus</button></li>
          <li><button class="ghost active">Active</button></li>
          <li><button class="ghost visited">Visited</button></li>
          <li><button class="ghost hover">Hover</button></li>
        </ul>

        <h3><code>button</code> met een afbeelding</h3>
        <h4>Visueel voorbeeld:</h4>
        <button class="ghost">Lorem ipsum <img src="$img/cat.svg" /></button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button class="ghost">Lorem ipsum <img src="/img/cat.svg"></button>
`}
        />

        <h3>Link als knop</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="./button-ghost-test" class="button ghost">Lorem ipsum</a>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input class="button ghost">Lorem ipsum</a>
`}
        />

        <h3>Link als knop: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="./button-ghost-test" class="button ghost" disabled={true}>Lorem ipsum</a>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input class="button ghost" disabled>Lorem ipsum</a>
`}
        />

        <h4>States</h4>
        <ul>
          <li>
            <a href="./button-ghost-test" class="button ghost focus">Focus</a>
          </li>
          <li>
            <a href="./button-ghost-test" class="button ghost active">Active</a>
          </li>
          <li>
            <a href="./button-ghost-test" class="button ghost visited">Visited</a>
          </li>
          <li>
            <a href="./button-ghost-test" class="button ghost hover">Hover</a>
          </li>
        </ul>

        <h3>Link als knop: met een afbeelding</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="./button-ghost-test" class="button ghost">Lorem ipsum <img src="$img/cat.svg" /></a
        >

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input class="button ghost">Lorem ipsum <img src="/img/cat.svg"></a>
`}
        />

        <h3><code>input type="button"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="button" value="Button" class="ghost" />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="button" value="Button" class="ghost">
`}
        />

        <h3><code>input type="button"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="button" value="Button disabled" class="ghost" disabled={true} />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="button" value="Button disabled" class="ghost" disabled>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li><input type="button" value="Focus" class="ghost focus" /></li>
          <li>
            <input type="button" value="Active" class="ghost active" />
          </li>
          <li>
            <input type="button" value="Visited" class="ghost visited" />
          </li>
          <li><input type="button" value="Hover" class="ghost hover" /></li>
        </ul>

        <h3><code>button type="submit"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="submit" class="ghost">Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="submit" class="ghost">Lorem ipsum</button>
`}
        />

        <h3><code>button type="submit"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="submit" class="ghost" disabled={true}>Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="submit" value="Button disabled" class="ghost" disabled>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li><button type="submit" class="ghost focus">Focus</button></li>
          <li>
            <button type="submit" class="ghost active">Active</button>
          </li>
          <li>
            <button type="submit" class="ghost visited">Visited</button>
          </li>
          <li><button type="submit" class="ghost hover">Hover</button></li>
        </ul>

        <h3><code>input type="submit"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="submit" value="Input" class="ghost" />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="submit" value="Input" class="ghost">
`}
        />

        <h3><code>input type="submit"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="submit" value="Input" class="ghost" disabled={true} />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="submit" value="Input" class="ghost" disabled>
`}
        />

        <h3><code>button type="reset"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="reset" class="ghost">Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="reset" class="ghost">Lorem ipsum</button>
`}
        />

        <h3><code>button type="reset"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="reset" class="ghost" disabled={true}>Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="reset" value="Button disabled" class="ghost" disabled>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li><button type="reset" class="ghost focus">Focus</button></li>
          <li><button type="reset" class="ghost active">Active</button></li>
          <li>
            <button type="reset" class="ghost visited">Visited</button>
          </li>
          <li><button type="reset" class="ghost hover">Hover</button></li>
        </ul>

        <h3><code>input type="reset"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="reset" value="Input" class="ghost" disabled={true} />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="reset" value="Input" class="ghost" disabled>
`}
        />

        <h3><code>input type="reset"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="reset" class="ghost" />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="reset" class="ghost">
`}
        />

        <h3><code>input type="reset"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="reset" class="ghost" disabled={true} />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="reset" value="Button disabled" class="ghost" disabled>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li><input type="reset" value="focus" class="ghost focus" /></li>
          <li>
            <input type="reset" value="active" class="ghost active" />
          </li>
          <li>
            <input type="reset" value="visited" class="ghost visited" />
          </li>
          <li><input type="reset" value="hover" class="ghost hover" /></li>
        </ul>
      </section>
    </div>
  </article>
</main>
