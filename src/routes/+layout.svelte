<script>

  export const load = (async ({ cookies }) => {
    const userToken = cookies.get('userToken');
    const url = JSON.parse(userToken).pictureUrl;

    return console.log("usercookie: ", userToken)
  })

</script>

<h1>FloraTime</h1>

<nav>
  <a href="/">Home</a>
  <a href="/api/auth/signup">Sign up</a>
  <a href="/api/auth/login">Login</a>
</nav>

<img src={JSON.stringify("url goes here")} alt="personal avatar" />


<slot />