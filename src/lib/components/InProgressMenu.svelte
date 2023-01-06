<script>
    import {inputMinutes, isFinished} from "../../stores.js";

    let startTime = Date.now() / 1000; // in seconds
    $: endTime = startTime + $inputMinutes;
    let minutes;
    let seconds;
    let timeRemaining;
    const interval =setInterval(() => {
        // has to count down
        const current = Date.now() / 1000;
        timeRemaining = endTime - current;
        console.log(timeRemaining)
        minutes = Math.round(timeRemaining / 60);
        seconds = Math.round(timeRemaining % 60);
        if (timeRemaining < 0) {
          clearInterval(interval)
          $isFinished = true;
        }
    }, 1000)

</script>

<p>Pomodoro has been started.</p>
<p>Time left: {minutes}m:{seconds}s</p>