<script>
    import NavbarLink from "./Navbarlink.svelte";
    import DropDownMenu from "./DropDownMenu.svelte";
    export let data;
</script>

<div class="grid py-5 grid-cols-4">
    <div>
        <NavbarLink href="/">Home</NavbarLink>
    </div>
    <div>
        <NavbarLink href="/stats">Stats</NavbarLink>
    </div>
    <div>
        <NavbarLink href="/settings">Settings</NavbarLink>
    </div>
    <div>
        <DropDownMenu data={data}/>
    </div>
</div>