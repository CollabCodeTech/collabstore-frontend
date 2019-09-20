<script>

</script>

<style>
  .main-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 640px) {
    .main-container {
      justify-content: flex-start;
    }
  }
</style>

<main class="main-container">
  <slot />
</main>
