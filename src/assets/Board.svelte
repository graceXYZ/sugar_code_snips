<script>
	import { flip } from 'svelte/animate';
  import { dndzone } from 'svelte-dnd-action';
	import Column from "./Column.svelte";
	const flipDurationMs = 300;
	
  export let columns;
	// will be called any time a card or a column gets dropped to update the parent data
	export let onFinalUpdate;
 
  function handleDndConsiderColumns(e) {
    columns = e.detail.items;
  }
  function handleDndFinalizeColumns(e) {
    onFinalUpdate(e.detail.items);
  }
 	function handleItemFinalize(columnIdx, newItems) {
		columns[columnIdx].items = newItems;
		onFinalUpdate([...columns]);
	}
</script>
<style>
    .board {
        height: 90vh;
        width: 100%;
        padding: 0.5em;
    }
    .column {
        height: 500px;
        width: 200px;
        padding: 0.5em;
        margin: 0.5em;
        float: left;
        /* border: 1px solid #333333; */
        background-color: rgb(245, 245, 245);
    }
    .program {
      width: 420px !important;
    }
</style>

<section class="board">
    {#each columns as {id, name,items,indents}, idx (id)}
  		<div class:program="{name==='program'}" class="column"animate:flip="{{duration: flipDurationMs}}" >    
				<Column name={name} items={items} onDrop={(newItems) => handleItemFinalize(idx, newItems)}/>
			</div>
    {/each}
</section>