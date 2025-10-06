<script module>
  export const breadcrumb = "Bibliotheek";
</script>

<script lang="ts">
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Bibliotheek</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <section id="introduction">
    <h1 class="page-title">Bibliotheek</h1>
    <div class="content-wrapper">
      <p>
        Componenten zijn herbruikbare bouwstenen die gebruikt worden om de gebruikersinterface van
        een webapplicatie te bouwen. Ze zijn ontworpen om consistentie en herbruikbaarheid te
        bevorderen, en kunnen eenvoudig worden aangepast aan specifieke behoeften.
      </p>

      <section id="layout">
        <div class="column-2">
          <div>
            <nav aria-labelledby="page-layout-heading">
              <h2 id="page-layout-heading">Page layout</h2>
              <ul>
                <li><a href="{base}/library/layout/main">Main</a></li>
                <li><a href="{base}/library/layout/section">Section</a></li>
                <li><a href="{base}/library/layout/article">Article</a></li>
                <li><a href="{base}/library/layout/footer">Footer</a></li>
              </ul>
            </nav>
          </div>

          <div>
            <nav aria-labelledby="typography-heading">
              <h2 id="typography-heading">Typography</h2>
              <ul>
                <li><a href="{base}/library/typography/de-emphasized">De-emphasized</a></li>
                <li><a href="{base}/library/typography/emphasized">Emphasized</a></li>
                <li><a href="{base}/library/typography/headings">Headings</a></li>
                <li>
                  <a href="{base}/library/typography/max-line-length">Max line length</a>
                </li>
                <li><a href="{base}/library/typography/paragraph">Paragraph</a></li>
                <li><a href="{base}/library/typography/page-title">Page-title</a></li>
                <li><a href="{base}/library/typography/nota-bene">Nota bene</a></li>
                <li><a href="{base}/library/typography/slogan">Slogan</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section id="components">
        <h2>Componenten</h2>
        <div class="column-3">
          <nav>
            <ul>
              <li><a href="{base}/library/components/accordion">Accordion</a></li>
              <li><a href="{base}/library/components/avatar">Avatar</a></li>
              <li><a href="{base}/library/components/breadcrumb">Breadcrumb</a></li>
              <li><a href="{base}/library/components/button">Button</a></li>
              <li><a href="{base}/library/components/card">Card</a></li>
              <li><a href="{base}/library/components/code">Code & Code block</a></li>
              <li><a href="{base}/library/components/collapsible">Collapsible</a></li>
              <li><a href="{base}/library/components/collapsible-menu">Collapsible menu</a></li>
              <li><a href="{base}/library/components/description-list">Description list</a></li>
              <li><a href="{base}/library/components/filter">Filter</a></li>
              <li><a href="{base}/library/components/logo">logo</a></li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li><a href="{base}/library/components/forms">Forms</a></li>
              <li>
                <a href="{base}/library/components/header-navigation">Header navigation</a>
              </li>
              <li><a href="{base}/library/components/icons">Icons</a></li>
              <li><a href="{base}/library/components/image">Image</a></li>
              <li><a href="{base}/library/components/hero">Hero</a></li>
              <li>
                <a href="{base}/library/components/language-selector">Language selector</a>
              </li>
              <li><a href="{base}/library/components/link">Link</a></li>
              <li><a href="{base}/library/components/login-meta">Login Meta</a></li>
              <li><a href="{base}/library/components/navigation">Navigation</a></li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li><a href="{base}/library/components/notifications">Notifications</a></li>
              <li><a href="{base}/library/components/pagination">Pagination</a></li>
              <li><a href="{base}/library/components/sidemenu">Sidemenu</a></li>
              <li><a href="{base}/library/components/skip-to-content">Skip to content</a></li>
              <li><a href="{base}/library/components/table">Table</a></li>
              <li><a href="{base}/library/components/tabs">Tabs</a></li>
              <li><a href="{base}/library/components/tag">Tag</a></li>
              <li><a href="{base}/library/components/tags">Tags</a></li>
              <li><a href="{base}/library/components/tile">Tile</a></li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  </section>
</main>
