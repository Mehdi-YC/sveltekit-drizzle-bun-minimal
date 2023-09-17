<!-- ERDTable.svelte -->
<script>
    export let tableName = "Table Name";
    export let columns = [];
    export let methods = [];
  </script>
  
  <div class="bg-white rounded-lg shadow-lg overflow-hidden border border-black-200">
    <div class="border-b border-gray-200 px-4 py-3">
      <h3 class="text-lg font-semibold text-gray-800 text-center">{ tableName }</h3>
    </div>

        <!-- Column Information -->
        <div class="px-4 py-1">
          <h4 class=" font-semibold mb-2">Columns:</h4>
          <ul class="text-xs space-y-2">
            {#each columns as column (column.id)}
              <li>
                <div class="flex flex-row justify-between"><a href="#" class="text-blue-500 hover:underline">{column.name }</a> <p class="text-xs">{ column.type }</p></div>
              </li>
            {/each}
          </ul>
        </div>
        <div class="border-b border-gray-200 py-1 mb-2"></div>
        <!-- Methods -->
        <div class="px-4 py-1">
          <h4 class="font-semibold mb-2">Methods:</h4>
          <ul class=" text-xs space-y-2">
            {#each methods as method (method.id)}
              <li>
                <a href="#" class="text-blue-500 hover:underline">{ method.name }</a>
              </li>
            {/each}
          </ul>
        </div>

  </div>

  