<script>
  import StartStopButton from "../lib/components/StartStopButton.svelte";
  import SetDuration from "../lib/components/SetDuration.svelte";
  import InProgressMenu from "../lib/components/InProgressMenu.svelte";
  import FinishMenu from "../lib/components/FinishMenu.svelte";
  import { timerState, timerStates } from "../stores.ts";
</script>

<div>
  <hr>
  {#if $timerState === timerStates.Started}
    <InProgressMenu />
  {:else if $timerState === timerStates.Finished}
    <FinishMenu />
    <SetDuration />
  {:else}
    <SetDuration />
  {/if}
  <StartStopButton />
  <hr>

</div>