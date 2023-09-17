<script>
  import Dragabble from '../../lib/components/Dragabble.svelte';
  import ERDTable from '../../lib/components/ERDTable.svelte'
  import Wire from '../../lib/components/Wire.svelte';

  let top1,left1,top2,left2

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

<Dragabble bind:centerX={left1} bind:centerY={top1}>
<ERDTable tableName="Sample Table" {columns} {methods}/>
</Dragabble>

<Dragabble bind:centerX={left2} bind:centerY={top2}>
<ERDTable tableName="Sample Table" {columns} {methods}/>
</Dragabble>





