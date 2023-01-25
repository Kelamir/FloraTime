<script>
  import { inputMinutes } from "../../stores";
  import "../../../src/app.css";
</script>


<p class="text-8xl text-[#ffffff]">{$inputMinutes}:00</p>
<!-- <input type="range" bind:value={$inputMinutes} min="5" max="240" step="5"> -->

<div class="p-3">
  <button on:click={() => {$inputMinutes = $inputMinutes - 5}} class="bg-white text-red inline-flex items-center rounded border border-transparent px-9 py-1.5 text-5xl">
    -
    </button>
    <button on:click={() => {$inputMinutes = $inputMinutes + 5}} class="bg-white text-red inline-flex items-center rounded border border-transparent px-9 py-1.5 text-5xl">
    +
    </button>
</div>