<script>
  export let href = "#";
</script>

<style>
  .icon-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    width: 20px;
    height: 15px;
  }

  .icon-menu::after,
  .icon-menu::before {
    content: "";
    display: block;
    height: 2px;
    background-color: var(--color-cleam);
  }

  .icon-menu::before {
    width: 20px;
  }

  .icon-menu::after {
    width: 10px;
  }

  .icon-menu > .content {
    display: inline-block;
    text-indent: -9999px;
    width: 15px;
    height: 2px;
    background-color: var(--color-cleam);
  }
</style>

<a {href} class="icon-menu">
  <span class="content">Menu</span>
</a>
