<script>
    import Dragabble from '../../lib/components/Dragabble.svelte';
    import ERDTable from '../../lib/components/ERDTable.svelte'
    import Wire from '../../lib/components/Wire.svelte';
    let top1,left1,top2,left2,top3,left3,top4,left4;

    let columns = [
        { id: 1, name: 'Column 1', type: 't1' },
        { id: 2, name: 'Column 2', type: 't2' },
        // Add more columns as needed
    ];

    let methods = [
        { id: 1, name: 'M 1' },
        { id: 2, name: 'M 2' },
        // Add more columns as needed
    ];


</script>


<Wire startX={left1} startY={top1} endX={left2} endY={top2} type="block"/>
<Wire startX={left3} startY={top3} endX={left4} endY={top4} />
<Wire startX={left1} startY={top1} endX={left3} endY={top3} type="smooth"/>


<Dragabble bind:centerX={left1} bind:centerY={top1}>
  <ERDTable tableName="Sample Table" {columns} {methods}/>
</Dragabble>

<Dragabble bind:centerX={left2} bind:centerY={top2}>
  <ERDTable tableName="Sample Table" {columns} {methods}/>
</Dragabble>



<Dragabble bind:centerX={left3} bind:centerY={top3}>
  <img class="-z-0 select-none" src="https://www.techexplorist.com/wp-content/uploads/2019/09/brain-scan.jpg" alt="scan" height="100" width="100">  
</Dragabble>


<Dragabble bind:centerX={left4} bind:centerY={top4}>

  <div class="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
    <div class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
      <div class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
      </div>
      <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
      </div>
      <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
      </div>
      <div class="mx-auto pr-16" id="terminaltitle">
        <p class="text-center text-sm">Terminal</p>
      </div>

    </div>
    <div class="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black" id="console">
      <p class="pb-1">Last login: Wed Sep 25 09:11:04 on ttys002</p>
      <p class="pb-1">Laraben:Devprojects laraben$</p>
    </div>
  </div> 

</Dragabble>



