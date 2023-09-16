<!-- WireContainer.svelte -->
<script>
    export let startX = 0;
    export let startY = 0;
    export let endX = 0;
    export let endY = 0;

  </script>
  
  <div class="container" >
    <slot></slot>
    {#if startX !== 0 && startY !== 0 && endX !== 0 && endY !== 0}
      <svg class="wire">
        <line x1={startX} y1={startY-50} x2={endX} y2={endY-50} stroke="black" stroke-width="2" />
      </svg>
    {/if}
  </div>
  
  <style>
    .container {
      position: relative;
    }
  
    .wire {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  </style>
  