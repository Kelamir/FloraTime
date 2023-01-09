<script>
  import { timerState, timerStates } from "../../stores.ts";

  function handleClick() {
    switch ($timerState) {
      case timerStates.NotStarted:
        $timerState = timerStates.Started;
        break;
      case timerStates.Started:
        $timerState = timerStates.Finished;
        break;
      case timerStates.Finished:
        $timerState = timerStates.Started;
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