<script>
    import {inputMinutes, isFinished, isStarted} from "../../stores.js";

    let startTime = Date.now() / 1000; // in seconds
    $: endTime = startTime + ($inputMinutes * 60);
    let minutes;
    let seconds;
    let timeRemaining;
    const interval = setInterval(() => {
        const current = Date.now() / 1000;
        timeRemaining = endTime - current;
        minutes = Math.floor(timeRemaining / 60);
        seconds = Math.floor(timeRemaining % 60);
        if (timeRemaining < 0) {
          clearInterval(interval)
          $isFinished = true;
          $isStarted = false;
        }
    }, 1000)

</script>

<p>Pomodoro has been started.</p>
<p>Time left: {minutes}m:{seconds}s</p>