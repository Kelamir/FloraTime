<script>
  import { inputMinutes, timerState } from "../../stores";
	import { TimerState } from "../types";
	import { formatTimeRemaining, nextState, shouldFinish } from "../utils/countdown";

  let startTime = Date.now() / 1000; // in seconds
  let endTime = startTime + ($inputMinutes * 60);
  let timeRemaining = endTime - startTime;

  const interval = setInterval(() => {
    const current = Date.now() / 1000;
    timeRemaining = endTime - current;
    if(shouldFinish(timeRemaining)) {
      $timerState = nextState($timerState);
    }
    if ($timerState === TimerState.Finished) {
      clearInterval(interval);
    }
  }, 1000);
</script>

<p>Pomodoro has been started.</p>
<p>Time left: {formatTimeRemaining(timeRemaining)}</p>