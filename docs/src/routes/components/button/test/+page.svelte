<script module>
  export const breadcrumb = "Knoppen testpagina";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Knoppen testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article id="button-base" class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Knoppen testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>

        <h3><code>button</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <button>Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button>Lorem ipsum</button>
`}
        />

        <h3><code>button</code> disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <button disabled>Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button disabled>Lorem ipsum</button>
`}
        />
        <h4>States</h4>
        <ul>
          <li><button class="focus">Focus</button></li>
          <li><button class="active">Active</button></li>
          <li><button class="visited">Visited</button></li>
          <li><button class="hover">Hover</button></li>
          <li><button class="selected">Selected</button></li>
        </ul>

        <h3><code>button</code> met een afbeelding</h3>
        <h4>Visueel voorbeeld:</h4>
        <button>Lorem ipsum <img src="$img/cat.svg" alt="Kat" /></button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button>Lorem ipsum <img src="/img/cat.svg" alt="Kat" /></button>
`}
        />

        <h3>Link als knop</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="{base}/components/button-test" class="button">Lorem ipsum</a>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input class="button ">Lorem ipsum</a>
`}
        />

        <h4>States</h4>
        <ul>
          <li>
            <a href="{base}/components/button-test" class="button focus">Focus</a>
          </li>
          <li>
            <a href="{base}/components/button-test" class="button active">Active</a>
          </li>
          <li>
            <a href="{base}/components/button-test" class="button visited">Visited</a>
          </li>
          <li>
            <a href="{base}/components/button-test" class="button hover">Hover</a>
          </li>
          <li>
            <a href="{base}/components/button-test" class="button selected">Selected</a>
          </li>
        </ul>

        <h3>Link als knop: met een afbeelding</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="{base}/components/button-test" class="button"
          >Lorem ipsum <img src="$img/cat.svg" alt="Kat" /></a
        >

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input class="button ">Lorem ipsum <img src="/img/cat.svg" alt="Kat" /></a>
`}
        />

        <h3><code>input type="button"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="button" value="Button" />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="button" value="Button">
`}
        />

        <h3><code>input type="button"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="button" value="Button disabled" disabled />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="button" value="Button disabled" disabled>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li><input type="button" value="Focus" class="focus" /></li>
          <li><input type="button" value="Active" class="active" /></li>
          <li><input type="button" value="Visited" class="visited" /></li>
          <li><input type="button" value="Hover" class="hover" /></li>
          <li><input type="button" value="Selected" class="selected" /></li>
        </ul>

        <h3><code>button type="submit"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="submit">Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="submit">Lorem ipsum</button>
`}
        />

        <h3><code>button type="submit"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="submit" disabled>Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="submit" value="Button disabled" disabled>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li><button type="submit" class="focus">Focus</button></li>
          <li><button type="submit" class="active">Active</button></li>
          <li><button type="submit" class="visited">Visited</button></li>
          <li><button type="submit" class="hover">Hover</button></li>
          <li><button type="submit" class="selected">Selected</button></li>
        </ul>

        <h3><code>input type="submit"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="submit" value="Input" />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="submit" value="Input">
`}
        />

        <h3><code>input type="submit"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="submit" value="Input" disabled />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="submit" value="Input" disabled>
`}
        />

        <h3><code>button type="reset"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="reset">Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="reset">Lorem ipsum</button>
`}
        />

        <h3><code>button type="reset"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="reset" disabled>Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="reset" value="Button disabled" disabled>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li><button type="reset" class="focus">Focus</button></li>
          <li><button type="reset" class="active">Active</button></li>
          <li><button type="reset" class="visited">Visited</button></li>
          <li><button type="reset" class="hover">Hover</button></li>
          <li><button type="reset" class="selected">Selected</button></li>
        </ul>

        <h3><code>input type="reset"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="reset" value="Input" disabled />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="reset" value="Input" disabled>
`}
        />

        <h3><code>button type="reset"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="reset" />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="reset">
`}
        />

        <h3><code>button type="reset"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <input type="reset" disabled />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input type="reset" value="Button disabled" disabled>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li><input type="reset" value="focus" class="focus" /></li>
          <li><input type="reset" value="active" class="active" /></li>
          <li><input type="reset" value="visited" class="visited" /></li>
          <li><input type="reset" value="hover" class="hover" /></li>
          <li><input type="reset" value="selected" class="selected" /></li>
        </ul>
      </section>
    </div>
  </article>
</main>
