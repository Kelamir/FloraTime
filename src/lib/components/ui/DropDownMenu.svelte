<script>
    import NavbarLink from "./Navbarlink.svelte";
    import { removeCookies } from "../../utils/cookies";
    let showMenu = false;
    export let data;
    
    function toggleMenu() {
        showMenu = !showMenu;
    }
</script>

<button on:click={toggleMenu}>Open DropDownMenu</button>

{#if showMenu}
    {#if data.user}
      <NavbarLink on:click={removeCookies} href="/api/auth/logout">Log out</NavbarLink>
    {:else}
      <NavbarLink href="/api/auth/signup">Sign up</NavbarLink>
      <NavbarLink href="/api/auth/login">Log in</NavbarLink>
    {/if}
{/if}