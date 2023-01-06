<script>
    import { timerState, timerStates } from "../../stores.ts";

    function handleClick() {
       // if ($timerState === timerStates.NotStarted) {
       //     $timerState = timerStates.Started;
       // } else if ($timerState === timerStates.Started) {
       //     $timerState = timerStates.Finished;
       // } else {
       //     $timerState = timerStates.NotStarted;
       //
        switch ($timerState) {
            case timerStates.NotStarted:
                $timerState = timerStates.Started;
                break;
            case timerStates.Started:
                $timerState = timerStates.Finished;
                break;
            case timerStates.Finished:
                $timerState = timerStates.NotStarted;
        }

    }
</script>

<button on:click={handleClick}>
    {#if $timerState === timerStates.Started}
        Stop
    {:else}
        Start
    {/if}

</button>