<script>
  const src = "/img/star.svg";
  export let stars = 1;
</script>

<style>
  .icon-star {
    display: flex;
    justify-content: flex-end;
  }

  .icon-star > .item:not(:first-child) {
    margin-left: var(--gap-half-min);
  }
</style>

<ol class="icon-star">
  {#each Array(stars).fill() as star}
    <li class="item">
      <img {src} alt="Ícone de uma estrela" />
    </li>
  {/each}
</ol>
