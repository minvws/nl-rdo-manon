<script context="module">
  export const breadcrumb = "Destructieve knop testpagina";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Destructieve knop testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article id="button-base">
    <div>
      <section id="introduction">
        <h1>"Destructieve testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>

        <h3><code>button</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <button class="destructive">Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button class="destructive">Lorem ipsum</button>
`}
        />

        <h3><code>button</code> disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <button class="destructive" disabled>Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button class="destructive" disabled>Lorem ipsum</button>
`}
        />
        <h4>States</h4>
        <ul>
          <li><button class="destructive focus">Focus</button></li>
          <li><button class="destructive active">Active</button></li>
          <li><button class="destructive visited">Visited</button></li>
          <li><button class="destructive hover">Hover</button></li>
        </ul>

        <h3><code>button</code> met een afbeelding</h3>
        <h4>Visueel voorbeeld:</h4>
        <button class="destructive">Lorem ipsum <img src="$img/cat.svg" alt="Kat" /></button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button class="destructive">Lorem ipsum <img src="$img/cat.svg" alt="Kat" /></button>
`}
        />

        <h3>Link als knop</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="{base}/components/button-destructive-test" class="button destructive"
          >Lorem ipsum</a
        >

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input class="button destructive">Lorem ipsum</a>
`}
        />

        <h4>States</h4>
        <ul>
          <li>
            <a href="{base}/components/button-destructive-test" class="button destructive focus"
              >Focus</a
            >
          </li>
          <li>
            <a href="{base}/components/button-destructive-test" class="button destructive active"
              >Active</a
            >
          </li>
          <li>
            <a href="{base}/components/button-destructive-test" class="button destructive visited"
              >Visited</a
            >
          </li>
          <li>
            <a href="{base}/components/button-destructive-test" class="button destructive hover"
              >Hover</a
            >
          </li>
        </ul>

        <h3>Link als knop: met een afbeelding</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="{base}/components/button-destructive-test" class="button destructive"
          >Lorem ipsum <img src="$img/cat.svg" alt="Kat" /></a
        >

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input class="button destructive">Lorem ipsum <img src="/img/cat.svg" alt="Kat" /></a>
`}
        />

        <h3><code>input type="button"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="button" value="Button" class="destructive" />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="button" value="Button" class="destructive">
`}
        />

        <h3><code>input type="button"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="button" value="Button disabled" class="destructive" disabled />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="button" value="Button disabled" class="destructive" disabled>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li><input type="button" value="Focus" class="destructive focus" /></li>
          <li>
            <input type="button" value="Active" class="destructive active" />
          </li>
          <li>
            <input type="button" value="Visited" class="destructive visited" />
          </li>
          <li><input type="button" value="Hover" class="destructive hover" /></li>
        </ul>

        <h3><code>button type="submit"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="submit" class="destructive">Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="submit" class="destructive">Lorem ipsum</button>
`}
        />

        <h3><code>button type="submit"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="submit" class="destructive" disabled>Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="submit" value="Button disabled" class="destructive" disabled>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li><button type="submit" class="destructive focus">Focus</button></li>
          <li>
            <button type="submit" class="destructive active">Active</button>
          </li>
          <li>
            <button type="submit" class="destructive visited">Visited</button>
          </li>
          <li><button type="submit" class="destructive hover">Hover</button></li>
        </ul>

        <h3><code>input type="submit"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="submit" value="Input" class="destructive" />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="submit" value="Input" class="destructive">
`}
        />

        <h3><code>input type="submit"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="submit" value="Input" class="destructive" disabled />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="submit" value="Input" class="destructive" disabled>
`}
        />

        <h3><code>button type="reset"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="reset" class="destructive">Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="reset" class="destructive">Lorem ipsum</button>
`}
        />

        <h3><code>button type="reset"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="reset" class="destructive" disabled>Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="reset" value="Button disabled" class="destructive" disabled>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li><button type="reset" class="destructive focus">Focus</button></li>
          <li><button type="reset" class="destructive active">Active</button></li>
          <li>
            <button type="reset" class="destructive visited">Visited</button>
          </li>
          <li><button type="reset" class="destructive hover">Hover</button></li>
        </ul>

        <h3><code>input type="reset"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="reset" value="Input" class="destructive" disabled />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="reset" value="Input" class="destructive" disabled>
`}
        />

        <h3><code>input type="reset"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="reset" class="destructive" />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="reset" class="destructive">
`}
        />

        <h3><code>input type="reset"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="reset" class="destructive" disabled />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="reset" value="Button disabled" class="destructive" disabled>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li><input type="reset" value="focus" class="destructive focus" /></li>
          <li>
            <input type="reset" value="active" class="destructive active" />
          </li>
          <li>
            <input type="reset" value="visited" class="destructive visited" />
          </li>
          <li><input type="reset" value="hover" class="destructive hover" /></li>
        </ul>
      </section>
    </div>
  </article>
</main>
