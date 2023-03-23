<script>
	import { TimerState } from "$lib/types";
	import { pomCount } from "../../stores";
  import { timerState } from "../../stores";

  function handleClick() {
    switch ($timerState) {
      case TimerState.NotStarted:
        $timerState = TimerState.Started;
        break;
      case TimerState.Started:
        $timerState = TimerState.Finished;
        $pomCount += 1;
        break;
      case TimerState.Finished:
        $timerState = TimerState.Started;
    }
  }
</script>

<button on:click={handleClick} class="bg-gray-100 rounded px-9 py-1.5 mt-5 font-medium text-2xl text-gray-900">
  {#if $timerState === TimerState.Started}
    Stop
  {:else}
    Start
  {/if}

</button>
