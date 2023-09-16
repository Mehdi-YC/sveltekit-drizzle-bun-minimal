<script>
    import Draggable from '../lib/components/Dragabble.svelte'
    import ERDTable from '../lib/components/ERDTable.svelte'
    import Erd from '../lib/components/ERD.svelte';
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
</script>



<!-- <h1>

    {JSON.stringify(data)}
</h1> -->
{top1},{left1}
{top2},{left2}
<Erd startX={left1} startY={top1} endX={left2} endY={top2}>
<Draggable id="tb1" bind:centerY={top1} bind:centerX={left1}>
    <ERDTable tableName="Sample Table" {columns} {methods}/>
</Draggable>

<Draggable id="tb2" bind:centerY={top2} bind:centerX={left2}>
    <ERDTable tableName="Sample Table 2" {columns} {methods}/>
</Draggable>

</Erd>