<script>
    import NavbarLink from "./Navbarlink.svelte";
    import DropDownMenu from "./DropDownMenu.svelte";
    export let data;
</script>

<div class="flex py-5 space-x-2 content-end justify-end">
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