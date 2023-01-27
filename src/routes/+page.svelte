<script>
  import StartStopButton from "../lib/components/StartStopButton.svelte";
  import SetDuration from "../lib/components/SetDuration.svelte";
  import InProgressMenu from "../lib/components/InProgressMenu.svelte";
  import FinishMenu from "../lib/components/FinishMenu.svelte";
  import { timerState } from "../stores";
	import { TimerState } from "$lib/types";
  import "../app.css";
</script>

<div class="flex flex-col items-center">
  <hr>
  {#if $timerState === TimerState.Started}
    <InProgressMenu />
  {:else if $timerState === TimerState.Finished}
    <FinishMenu />
    <SetDuration />
  {:else}
    <SetDuration />
  {/if}
  <StartStopButton />

</div>

