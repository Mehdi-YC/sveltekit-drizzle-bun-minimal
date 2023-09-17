<!-- WireContainer.svelte -->
<script>
  export let startX = 0;
  export let startY = 0;
  export let endX = 0;
  export let endY = 0;

  let middle_point = { x: 0, y: 0 };
  export let type = "normal";

  let line = [];

  function splitLineIntoThreePoints(point1, point2) {
    // point1 and point2 should be objects with x and y properties
    // For example: point1 = { x: 1, y: 2 }, point2 = { x: 7, y: 8 }

    const deltaX = point2.x - point1.x;
    const deltaY = point2.y - point1.y;

    // Calculate the increments for splitting into three equal segments
    const incrementX = deltaX / 3;
    const incrementY = deltaY / 3;

    // Calculate the split points
    const splitPoint1 = {
      x: point1.x + incrementX,
      y: point1.y + incrementY,
    };

    const middlePoint = {
      x: point1.x + 2 * incrementX,
      y: point1.y + 2 * incrementY,
    };

    const splitPoint2 = {
      x: point1.x + 3 * incrementX,
      y: point1.y + 3 * incrementY,
    };

    return [point1, splitPoint1, middlePoint, splitPoint2, point2];
  }

  $: line = splitLineIntoThreePoints(
    { x: startX, y: startY },
    { x: endX, y: endY }
  );
</script>

{#if type == "normal" || type == "all"}
  <div class="container">
    {#if startX !== 0 && startY !== 0 && endX !== 0 && endY !== 0}
      <svg class="wire">
        <line
          x1={startX}
          y1={startY - 50}
          x2={endX}
          y2={endY - 50}
          stroke="black"
          stroke-width="2"
        />
      </svg>
    {/if}
  </div>
{/if}
{#if type == "block" || type == "all"}
  <div class="container">
    {#if startX !== 0 && startY !== 0 && endX !== 0 && endY !== 0}
      <svg class="wire">
        <line
          x1={startX}
          y1={startY - 50}
          x2={endX}
          y2={startY - 50}
          stroke="black"
          stroke-width="2"
        />
      </svg>

      <svg class="wire">
        <line
          x1={endX}
          y1={startY - 50}
          x2={endX}
          y2={endY - 50}
          stroke="black"
          stroke-width="2"
        />
      </svg>
    {/if}
  </div>
{/if}
{#if type == "smooth" || type == "all"}
  <div class="container">
    <svg class="w-[100vw] h-[100vh] -z-10">
      <!-- stroke-dasharray="5,5" -->
      <path
        stroke="blue"
        stroke-width="1"
        fill="none"
        d="M{line[0].x},{line[0].y} Q{line[1].x},{line[2].y} {line[2]
          .x},{line[2].y} T {line[3].x},{line[3].y}"
      />
    </svg>
  </div>
{/if}

<option value=""></option>

<style>
  .container {
    position: relative;
    z-index: -10;
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
