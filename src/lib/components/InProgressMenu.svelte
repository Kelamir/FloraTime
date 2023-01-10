<script>
  import { inputMinutes, timerState, timerStates } from "../../stores.ts";

  let startTime = Date.now() / 1000; // in seconds
  $: endTime = startTime + ($inputMinutes * 60);
  let minutes = 0, seconds = 0, timeRemaining;

  function performCountdown(startTime, endTime, minutes, seconds, timeRemaining) {
    const interval = setInterval(() => {
      const current = Date.now() / 1000;
      timeRemaining = endTime - current;
      minutes = Math.floor(timeRemaining / 60);
      seconds = Math.floor(timeRemaining % 60);
      takeCareOfInterval(interval);
    }, 1000);

  }

  function takeCareOfInterval(interval) {
    if (timeRemaining < 0) {
      clearInterval(interval);
      $timerState = timerStates.Finished;
    }
    if ($timerState === timerStates.Finished) {
      clearInterval(interval);
    }
  }

  performCountdown(startTime, endTime, minutes, seconds, timeRemaining);
</script>

<p>Pomodoro has been started.</p>
<p>Time left: {minutes}m:{seconds}s</p>