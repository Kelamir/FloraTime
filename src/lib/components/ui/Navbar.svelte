<script>
    import NavbarLink from "./Navbarlink.svelte";
    import DropDownMenu from "./DropDownMenu.svelte";
    export let data;
</script>

<div class="flex flex-row space-x-2 h-10">
    <NavbarLink href="/stats">St</NavbarLink>
    <NavbarLink href="/settings">Se</NavbarLink>
    <DropDownMenu data={data}/>
</div>
