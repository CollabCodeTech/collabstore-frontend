<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import MainContainer from "../components/MainContainer.svelte";
  import MainHeader from "../containers/MainHeader.svelte";
  import GameCard from "../containers/GameCard.svelte";

  let games = [];

  onMount(async () => {
    const res = await axios.get("http://localhost:3001/game/overview");
    games = res.data;
  });
</script>

<style>

</style>

<svelte:head>
  <title>CollabStore - Loja para Streamers</title>
</svelte:head>

<MainContainer>
  <MainHeader />

  {#each games as game}
    <GameCard {...game} />
  {/each}

</MainContainer>
