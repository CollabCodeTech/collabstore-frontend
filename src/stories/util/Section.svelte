<script>
  export let title
  export let description
  export let exampleUse
  export let exampleImport
</script>

<style>
  :root {
    --color-sbcollab-first: #f25a70;
    --color-sbcollab-first-light: rgba(242, 90, 112, 0.4);

    --color-sbcollab-second: ##fffcee;
    --color-sbcollab-third: #3a4042;
    --color-sbcollab-third-light: rgba(58, 64, 66, 0.8);
    --color-sbcollab-fourth: #828282;
    --color-sbcollab-fourth-light: rgba(130, 130, 130, 0.2);
  }

  .container {
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
  }

  .section-sbcollab > .header {
    background-color: var(--color-sbcollab-second);
    box-sizing: border-box;
    height: 280px;
    padding-top: 80px;
    border-bottom: 1px solid var(--color-sbcollab-first);
    box-shadow: 0 1px 2px var(--color-sbcollab-first-light);
  }

  .section-sbcollab > .section {
    border-bottom: 1px dashed var(--color-sbcollab-first-light);
    padding-top: 40px;
    padding-bottom: 40px;
    margin-bottom: 20px;
  }

  .section-sbcollab > .section:last-of-type {
    border-bottom: none;
    margin-bottom: 120px;
  }

  .section-sbcollab .title {
    font-size: 36px;
    font-weight: bold;
    color: var(--color-sbcollab-third);
  }

  .section-sbcollab .subtitle {
    font-size: 20px;
    color: var(--color-sbcollab-third);
    margin-bottom: 20px;
  }

  .section-sbcollab .description {
    font-size: 14px;
    color: var(--color-sbcollab-third-light);
  }

  .section-sbcollab .example {
    border: 1px solid var(--color-sbcollab-first);
    padding: 20px 10px;
  }

  .section-sbcollab .example-use {
    border: 1px solid var(--color-sbcollab-first);
    padding: 20px 10px;
    background-color: var(--color-sbcollab-fourth-light);
  }
</style>

<main class="section-sbcollab">
  <header class="header">
    <div class="container">
      <h1 class="title">{title}</h1>
    </div>
  </header>

  <section class="section">
    <div class="container">
      <h2 class="subtitle">Descrição:</h2>
      <p class="description">{description}</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 class="subtitle">Importar:</h2>

      <div class="example">{exampleImport}</div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 class="subtitle">Exemplo:</h2>

      <div class="example">
        <slot />
      </div>
      <div class="example-use">{exampleUse}</div>
    </div>
  </section>

</main>
