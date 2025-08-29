---
title: Footer
breadcrumb: Footer
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p class="introduction">De footer wordt vaak gebruikt als extra navigatiepunt en om aan te geven aan de
gebruiker dat het einde van de pagina bereikt is.</p>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/footer";
```

<h1 id="examples">Voorbeelden:</h1>

<footer>
  <nav aria-labelledby="footer-nav-1-heading">
    <h1 id="footer-nav-1-heading">Lorem ipsum</h1>
    <ul>
      <li><a href="footer">Dolor</a></li>
      <li><a href="footer">Sit</a></li>
      <li><a href="footer">Amet</a></li>
    </ul>
  </nav>
</footer>

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec libero dictum, ultrices orci
  vel, varius ipsum. Aliquam in lorem lectus. Vestibulum ante ipsum primis in faucibus orci luctus
  et ultrices posuere cubilia curae; Praesent id accumsan quam. Cras erat diam, vestibulum vel
  congue id, vehicula in purus. Quisque sodales neque augue, at pulvinar ligula sodales vestibulum.
  Nam id tristique nibh, eget porta mauris. Curabitur vitae pulvinar quam. Mauris id risus vel diam
  venenatis pulvinar. Maecenas ultricies id velit sed rhoncus. Aliquam erat volutpat. Phasellus et
  posuere purus. Morbi a viverra risus.
</p>
```
