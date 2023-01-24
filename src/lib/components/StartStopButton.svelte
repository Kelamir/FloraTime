<script>
	import { TimerState } from "$lib/types";
  import { timerState } from "../../stores.ts";

  function handleClick() {
    switch ($timerState) {
      case TimerState.NotStarted:
        $timerState = TimerState.Started;
        break;
      case TimerState.Started:
        $timerState = TimerState.Finished;
        break;
      case TimerState.Finished:
        $timerState = TimerState.Started;
    }
  }
</script>

<button on:click={handleClick} class="bg-white text-red inline-flex items-center rounded border border-transparent px-7 py-1.5 color-red">
  {#if $timerState === TimerState.Started}
    Stop
  {:else}
    Start
  {/if}

</button>
