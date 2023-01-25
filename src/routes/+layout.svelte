<script>

  import { removeCookies } from "../lib/utils/cookies";
  import "../app.css";
  export let data;
  import NavbarLink from "../lib/components/ui/Navbarlink.svelte";


</script>


<div class="flex flex-col items-center">
  <!-- <h2 class="text-2xl font-bold underline first-letter:text-6xl first-letter:font-bold">Pomodoro timer</h2> -->

  <div class="flex py-5 space-x-2">
    <NavbarLink href="/">Home</NavbarLink>

    {#if data.user}
      <NavbarLink on:click={removeCookies} href="/api/auth/logout">Log out</NavbarLink>

    {:else}
      <NavbarLink href="/api/auth/signup">Sign up</NavbarLink>
      <NavbarLink href="/api/auth/login">Log in</NavbarLink>
    {/if}

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
