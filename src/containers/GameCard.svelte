<script>
  import IconStar from "../components/IconStar.svelte";

  export let title = "not defined title";
  export let src = "not defined photo";
  export let alt = "not defined alt";
  export let stars = "not defined starts";
  export let price = "not defined price";
</script>

<style>
  .game-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    max-width: 290px;
    margin-right: var(--gap-med);
    margin-left: var(--gap-med);
    background-image: linear-gradient(
      180deg,
      var(--color-acai) 0%,
      transparent 100%
    );
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  }

  .game-card .photo {
    width: 100%;
  }

  .game-card > .title {
    vertical-align: center;
    font-size: var(--size-med);
    font-weight: bold;
    color: var(--color-cleam);
    margin: var(--gap-half-min) var(--gap-min) var(--gap-max);
  }

  .game-card > .stars {
    margin: var(--gap-half-min) var(--gap-min) var(--gap-max);
  }

  .game-card > .price {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: var(--color-tutifruti);
    font-size: var(--size-min);
    padding: var(--gap-half-min) var(--gap-min);
    background-color: var(--color-cleam);
  }

  .game-card .collabs {
    margin-right: var(--gap-half-min);
  }
</style>

<dl class="game-card">
  <dd>
    <img class="photo" {src} {alt} />
  </dd>
  <dt class="title">{title}</dt>
  <dd class="stars">
    <IconStar {stars} />
  </dd>
  <dd class="price">
    <img class="collabs" src="/img/collabs.svg" alt="Collabs" />
    {price}
  </dd>
</dl>
