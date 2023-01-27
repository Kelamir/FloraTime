<script>
    import NavbarLink from "./Navbarlink.svelte";
    import { removeCookies } from "../../utils/cookies";
    import "../../../app.css"
	import Navbarlink from "./Navbarlink.svelte";
    let showMenu = false;
    export let data;
    
    function toggleMenu() {
        showMenu = !showMenu;
    }
</script>

<div class="flex flex-col cursor-pointer">
  <Navbarlink on:click={toggleMenu}>Auth</Navbarlink>
  {#if showMenu}
      {#if data.user}
        <NavbarLink on:click={removeCookies} href="/api/auth/logout">Log out</NavbarLink>
      {:else}
        <NavbarLink href="/api/auth/signup">Sign up</NavbarLink>
        <NavbarLink href="/api/auth/login">Log in</NavbarLink>
      {/if}
  {/if}
</div>