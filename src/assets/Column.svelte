<script>
	import { flip } from 'svelte/animate';
  import { dndzone } from 'svelte-dnd-action';
    import { slide } from 'svelte/transition';
	const flipDurationMs = 150;
	export let name;
	export let items;
	export let onDrop;
	
	function handleDndConsiderCards(e) {
    console.warn("got consider", name); 
		items = e.detail.items;
  }
  function handleDndFinalizeCards(e) {
    onDrop(e.detail.items);
    e.detail.item.indent = 0;
  }

  function toggleIndent(item){
    console.log("CLICK")
    item.indent += 50;
  }

</script>
<style>
	.wrapper {
		height: 100%;
		width: 100%;
		/*Notice we make sure this container doesn't scroll so that the title stays on top and the dndzone inside is scrollable*/
		overflow-y: hidden;
	}
	.column-content {
        height: calc(100% - 2.5em);
        /* Notice that the scroll container needs to be the dndzone if you want dragging near the edge to trigger scrolling */
        overflow-y: scroll;
    }
    .column-title {
				height: 2.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.7em;
        font-weight: 200;
        user-select: none;
        margin: 10px auto;
    }
    .card {
        height: 2em;
        width: 180px;
        margin: 0.2em 0;
        padding: 1.5em 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #dddddd;
        border: 1px solid #333333 ;
    }
    .program {
      width: 400px !important;
    }
    .toolbox {
      margin-left: 0px !important;
    }
</style>
<div class='wrapper' class:program="{name==='program'}">
 	<div class="column-title">
		{name}
	</div>
	<div class="column-content" use:dndzone={{items, flipDurationMs, zoneTabIndex: -1}}
     	 on:consider={handleDndConsiderCards} 
			 on:finalize={handleDndFinalizeCards}>
				{#each items as item (item.id)}
           <div class="card" animate:flip="{{duration: flipDurationMs}}" style="margin-left: {item.indent}px;" class:toolbox="{name==='toolbox'}" on:click={toggleIndent(item)}>
              {item.name}
            </div>
        {/each}
    </div>
</div>
