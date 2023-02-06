<script>

  import "../app.css";
  export let data;
  import Navbar from "../lib/components/ui/Navbar.svelte";

</script>


<div class="grid grid-cols-12 grid-rows-12">
  <div class="row-start-1 col-start-8 pt-8 pb-16">
    <Navbar data={data}/>
  </div>

  <div class="row-start-2 col-start-2 col-span-10 bg-gray-700 p-5 rounded">
      <slot />
  </div>
</div>


<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.900);
  }
</style>
