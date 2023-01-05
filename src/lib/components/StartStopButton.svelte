<script>
    import {isStarted} from "../../stores.js";

</script>

<button on:click={() => isStarted.set(!$isStarted)}>
    {#if $isStarted}
        Stop
    {:else}
        Start
    {/if}

</button>