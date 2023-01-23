<script>

  import { removeCookies } from "../lib/utils/cookies.ts";
  import "../app.css";
  export let data;

</script>


<h2 class="text-2xl font-bold underline first-letter:text-6xl first-letter:font-bold">Pomodoro timer</h2>

<div class="flex py-5">
  <a class="border bg-gray-300" href="/">Home</a>
  <a class="border bg-gray-300" href="/api/auth/signup">Sign up</a>
  <a class="border bg-gray-300" href="/api/auth/login">Log in</a>
  <a class="border bg-gray-300 on:click={removeCookies}" href="/api/auth/logout">Log out</a>
</div>


{#if data.user}
  <img src={data.user.pictureUrl} alt="personal avatar" />
{/if}

<style lang="postcss">
  :global(html) {

}
</style>

<slot />