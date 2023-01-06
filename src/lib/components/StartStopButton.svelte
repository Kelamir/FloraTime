<script>
    import {isStarted, isTimeToResetInterval} from "../../stores.ts";

    function handleClick() {
       if ($isStarted) {
           $isStarted = false;
           $isTimeToResetInterval = true;
       } else {
           $isStarted = true;
       }

    }
</script>

<button on:click={handleClick}>
    {#if $isStarted}
        Stop
    {:else}
        Start
    {/if}

</button>