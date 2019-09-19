<script>
  import MainHeader from "../containers/MainHeader.svelte";
  import GameCard from "../containers/GameCard.svelte";
</script>

<style>

</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<MainHeader />

<GameCard
  src="/img/game.png"
  all="Imagem do Game"
  title="Moonlighter"
  price="599,90"
  stars={3} />
