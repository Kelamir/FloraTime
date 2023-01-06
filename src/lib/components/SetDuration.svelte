<script>
  import { inputMinutes } from "../../stores.ts";
</script>

<input type="range" bind:value={$inputMinutes} min="5" max="180" step="5">
<p>Set duration: {$inputMinutes}m</p>