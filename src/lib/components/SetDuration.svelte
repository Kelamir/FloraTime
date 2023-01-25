<script>
  import { inputMinutes } from "../../stores";
  import "../../../src/app.css";
</script>


<p class="text-8xl text-[#ffffff]">{$inputMinutes}:00</p>
<input type="range" bind:value={$inputMinutes} min="5" max="240" step="5">
