<script>
  import MainLogo from "../components/MainLogo.svelte";
  import IconMenu from "../components/IconMenu.svelte";
</script>

<style>
  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
    margin-bottom: var(--gap-max);
  }
</style>

<header class="main-header">
  <MainLogo />

  <IconMenu />
</header>
