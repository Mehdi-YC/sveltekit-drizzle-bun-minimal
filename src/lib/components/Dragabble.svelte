<script>
  let divRef;
  export let centerX = 0;
  export let centerY = 0;


	export let left = 100;
	export let top = 100;
	export let id = "";
	let moving = false;
	
	function onMouseDown() {
		moving = true;
	}
	
	function onMouseMove(e) {
		if (moving) {
			left += e.movementX;
			top += e.movementY;
		}
		if (divRef) {
			const rect = divRef.getBoundingClientRect();
			centerX = Math.floor(rect.left + rect.width / 2);
			centerY = Math.floor(rect.top + rect.height / 2);
		}

	}
	
	function onMouseUp() {
		moving = false;
	}
	
// 	$: console.log(moving);
</script>



<section id={id} on:mousedown={onMouseDown} style="left: {left}px; top: {top}px;" class="draggable" bind:this={divRef}>
	<slot></slot>
</section>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
	.draggable {
		user-select: none;
		cursor: move;
		border: solid 1px gray;
		position: absolute;
	}
</style>