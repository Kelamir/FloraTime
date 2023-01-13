<script>

  export let data;
  function removeCookies() {
    document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"

  }

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