<script>
  import { inputMinutes, timerState, timerStates } from "../../stores.ts";

    let startTime = Date.now() / 1000; // in seconds
    $: endTime = startTime + ($inputMinutes * 60);
    let minutes = 0;
    let seconds = 0;
    let timeRemaining;
    const interval = setInterval(() => {
        const current = Date.now() / 1000;
        timeRemaining = endTime - current;
        minutes = Math.floor(timeRemaining / 60);
        seconds = Math.floor(timeRemaining % 60);
        if (timeRemaining < 0) {
          clearInterval(interval)
          $timerState = timerStates.Finished;
        }
    }, 1000)

</script>

<p>Pomodoro has been started.</p>
<p>Time left: {minutes}m:{seconds}s</p>