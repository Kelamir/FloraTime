<script>
  import { inputMinutes } from "../../stores.ts";
</script>


<input type="range" bind:value={$inputMinutes} min="5" max="240" step="5">
<input type="number" bind:value={$inputMinutes} min="5" max="240" step="5">
<p>Set duration: {$inputMinutes}</p>
