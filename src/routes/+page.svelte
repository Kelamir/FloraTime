<script>
    import {isFinished, isStarted} from "../stores.js";
    import StartStopButton from "../lib/components/StartStopButton.svelte";
    import SetDuration from "../lib/components/SetDuration.svelte";
    import InProgressMenu from "../lib/components/InProgressMenu.svelte";
    import FinishMenu from "../lib/components/FinishMenu.svelte";
</script>

<div>
    {#if !$isStarted}
        <SetDuration />
    {:else if $isStarted}
        <InProgressMenu />
    {:else if $isFinished}
        <FinishMenu />
    {/if}
    <StartStopButton />
</div>