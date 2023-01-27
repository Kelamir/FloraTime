<script>

  import { removeCookies } from "../lib/utils/cookies";
  import "../app.css";
  export let data;
  import NavbarLink from "../lib/components/ui/Navbarlink.svelte";
  import DropDownMenu from "../lib/components/ui/DropDownMenu.svelte";

</script>


<div class="flex flex-col items-center">
  <div class="flex py-5 space-x-2">
    <div>
      <NavbarLink href="/">Home</NavbarLink>
    </div>
    <div>
      <DropDownMenu data={data}/>
    </div>
  </div>

  {#if data.user}
    <img src={data.user.pictureUrl} alt="personal avatar" />
  {/if}

  <div class="bg-red-500 rounded p-5">
    <slot />
  </div>

</div>


<style lang="postcss">
  :global(html) {
    background-color: theme(colors.red.600);
  }
</style>
