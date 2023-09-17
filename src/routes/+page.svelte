<script>
    import Draggable from '../lib/components/Dragabble.svelte'
    import ERDTable from '../lib/components/ERDTable.svelte'
    import Wire from '../lib/components/Wire.svelte';
    export let data
    let top1,left1,top2,left2

    let columns = [
        { id: 1, name: 'Column 1', type: 'Column 1' },
        { id: 2, name: 'Column 2', type: 'Column 1' },
        // Add more columns as needed
    ];

    let methods = [
        { id: 1, name: 'M 1' },
        { id: 2, name: 'M 2' },
        // Add more columns as needed
    ];





    import Grid from "svelte-grid";
import gridHelp from "svelte-grid/build/helper/index.mjs";


let items = [
  {
    6: gridHelp.item({ 
      x: 0,
      y: 0,
      w: 2,
      h: 2,
      resizable: true,
    }),
    id: 1,
  },

  {
    6: gridHelp.item({
      x: 2,
      y: 0,
      w: 2,
      h: 3,
      resizable: false,
    }),
    id: 2,
  },
];

const cols = [
  [ 100, 6 ],
];



</script>

{JSON.stringify(items)}

<!-- <h1>

    {JSON.stringify(data)}
</h1> -->

<Wire startX={left1} startY={top1} endX={left2} endY={top2}/>







<div class=demo-container>
    <Grid bind:items={items} rowHeight={100} let:item let:dataItem {cols}>
        <!-- <Draggable id="tb1" bind:centerY={top1} bind:centerX={left1}> -->
            <ERDTable tableName="Sample Table" {columns} {methods}/>
        <!-- </Draggable> -->
        
    </Grid>
  </div>


<style>
.demo-widget {
  background: #f1f1f1;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.demo-container {
  max-width: 800px;
  width: 100%;
}
  </style>