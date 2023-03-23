<script>
  import { inputMinutes, pomCount, timerState } from "../../stores";
	import { formatTimeRemaining, nextState, shouldFinish } from "../utils/countdown";
  import { onDestroy } from "svelte";

  let startTime = Date.now() / 1000; // in seconds
  let endTime = startTime + ($inputMinutes * 60);
  let timeRemaining = endTime - startTime;

  const interval = setInterval(() => {
    const current = Date.now() / 1000;
    timeRemaining = endTime - current;
    if(shouldFinish(timeRemaining)) {
      $timerState = nextState($timerState);
      $pomCount += 1;
    }
  }, 1000);

  onDestroy(() => clearInterval(interval))
</script>

<p class="text-8xl text-[#ffffff]">{formatTimeRemaining(timeRemaining)}</p>