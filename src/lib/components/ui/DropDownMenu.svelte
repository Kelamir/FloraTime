<script>
    let showMenu = false;
    
    function toggleMenu() {
        showMenu = !showMenu;
    }
</script>

<button on:click={toggleMenu}>Open DropDownMenu</button>

{#if showMenu}
    <p>This is the menu.</p>
{/if}