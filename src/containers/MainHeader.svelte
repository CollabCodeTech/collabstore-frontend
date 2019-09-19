<script>
  import MainLogo from "../components/MainLogo.svelte";
  import IconMenu from "../components/IconMenu.svelte";
</script>

<style>
  .main-header {
    background-color: var(--color-acai);
    background-image: linear-gradient(
      89.64deg,
      var(--color-white) 0.04%,
      var(--color-acai) 0.05%,
      var(--color-blueberry) 99.96%
    );
    height: 45px;
    padding-left: var(--gap-med);
    padding-right: var(--gap-med);
  }
</style>

<header class="main-header">
  <MainLogo />

  <IconMenu />
</header>
