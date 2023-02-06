<script>

  import "../app.css";
  export let data;
  import Navbar from "../lib/components/ui/Navbar.svelte";

</script>


<div class="flex flex-col items-center">
  <Navbar data={data}/>

  {#if data.user}
    <img src={data.user.pictureUrl} alt="personal avatar" />
  {/if}

  <div class="bg-red-500 rounded p-5">
    <slot />
  </div>

</div>


<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.900);
  }
</style>
