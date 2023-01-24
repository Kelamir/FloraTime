<script>

  import { removeCookies } from "../lib/utils/cookies";
  import "../app.css";
	import Button from "$lib/components/ui/Button.svelte";
  export let data;

</script>

<div class="flex flex-col items-center">
  <h2 class="text-2xl font-bold underline first-letter:text-6xl first-letter:font-bold">Pomodoro timer</h2>

  <div class="flex py-5">
    <a class="border bg-gray-300" href="/">Home</a>
    {#if data.user}
      <a class="border bg-gray-300" on:click={removeCookies} href="/api/auth/logout">Log out</a>
    {:else}
      <a class="border bg-gray-300" href="/api/auth/signup">Sign up</a>
      <a class="border bg-gray-300" href="/api/auth/login">Log in</a>
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
