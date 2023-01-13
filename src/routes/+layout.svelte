<script>

  export let data;

</script>

<h1>FloraTime</h1>

<nav>
  <a href="/">Home</a>
  <a href="/api/auth/signup">Sign up</a>
  <a href="/api/auth/login">Login</a>
</nav>


{#if data.user}
  <img src={data.user.pictureUrl} alt="personal avatar" />
{/if}



<slot />