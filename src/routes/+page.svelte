<script>
    import {isFinished, isStarted} from "../stores.ts";
    import StartStopButton from "../lib/components/StartStopButton.svelte";
    import SetDuration from "../lib/components/SetDuration.svelte";
    import InProgressMenu from "../lib/components/InProgressMenu.svelte";
    import FinishMenu from "../lib/components/FinishMenu.svelte";
</script>

<div>
    <hr>
    {#if $isStarted}
        <InProgressMenu />
    {:else if $isFinished}
        <FinishMenu />
        <SetDuration />
    {:else}
        <SetDuration />
    {/if}
    <StartStopButton />
    <hr>

</div>