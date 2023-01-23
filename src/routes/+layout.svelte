<script>

  import { removeCookies } from "../lib/utils/cookies.ts";
  import "../app.css";
  export let data;

</script>

<h1>FloraTime</h1>

<nav>
  <a href="/">Home</a>
  <a href="/api/auth/signup">Sign up</a>
  <a href="/api/auth/login">Log in</a>
  <a on:click={removeCookies} href="/api/auth/logout">Log out</a>
</nav>


{#if data.user}
  <img src={data.user.pictureUrl} alt="personal avatar" />
{/if}



<slot />