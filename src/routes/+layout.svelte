<script>

  import { removeCookies } from "../lib/utils/cookies";
  import "../app.css";
  export let data;
  import NavbarLink from "../lib/components/ui/Navbarlink.svelte";
  import DropDownMenu from "../lib/components/ui/DropDownMenu.svelte";

</script>


<div class="flex flex-col items-center">
  <div class="flex py-5 space-x-2">
    <NavbarLink href="/">Home</NavbarLink>
      <DropDownMenu data={data}/>
  </div>

  {#if data.user}
    <img src={data.user.pictureUrl} alt="personal avatar" />
  {/if}

  <slot />

</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.red.500);
  }
</style>
