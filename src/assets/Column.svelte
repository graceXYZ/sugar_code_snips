<script>
	import { flip } from 'svelte/animate';
  import { dndzone } from 'svelte-dnd-action';
    import { slide } from 'svelte/transition';

  import { stepI } from '../stores.js';
  let stepIndex = -1;
    stepI.subscribe(value => {
      stepIndex = value;
    });

  const flipDurationMs = 150;


	export let name;
	export let items;
	export let onDrop;
	
	function handleDndConsiderCards(e) {
		items = e.detail.items;
    }
  function handleDndFinalizeCards(e) {
    onDrop(e.detail.items);
  }

  function toggleIndentDown(item){
    console.log("DECR")
    if (item.indent >= 50) {
      item.indent -= 50;
    }
    item = item;
    onDrop(items);
  }

  function toggleIndent(item){
    console.log("INCREASE")
    if (item.indent <= 50*2) {
      item.indent += 50;
    }
    item = item;
    onDrop(items);
  }


</script>
<style>
  .selected {
    background-color: #c9c9ab !important;
  }

	.wrapper {
		height: 100%;
		width: 100%;
		/*Notice we make sure this container doesn't scroll so that the title stays on top and the dndzone inside is scrollable*/
		overflow-y: hidden;
	}
	.column-content {
        height: 310px;
        /* Notice that the scroll container needs to be the dndzone if you want dragging near the edge to trigger scrolling */
        overflow-y: scroll;
    }
    @font-face {
      font-family: 'Roboto';
      src: url("https://fonts.googleapis.com/css2?family=Roboto&display=swap") format("woff");
    }
    
    .column-title {
				height: 2.5em;
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        color: #000000;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.7em;
        font-weight: 200;
        user-select: none;
        margin: 10px auto;
    }
    .card {
      position: relative;
        height: 2em;
        width: 180px;
        margin: 0.2em 0;
        padding: 1.5em 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #dddddd;
        border: 1px solid #333333 ;
        font-family: 'Roboto', sans-serif;
      font-weight: 100;
      color: #000000;
    }
    /* .program {
      width: 400px !important;
    } */
    .toolbox {
      margin-left: 0px !important;
    }
    .buttons {
      top: 0;
      left: 0;
      position: absolute;
      display: flex;
    }
    .leftbutton {
      width: 90px;
      height: 3em;
      padding: 0.5em 1em;
      margin: 0;
      text-align: left;
    }
    .rightbutton {
      width: 90px;
      height: 3em;
      padding: 0.5em 1em;
      margin: 0;
      text-align: right;
    }
</style>
<div class='wrapper' class:program="{name==='program'}">
 	<div class="column-title">
		{name}
	</div>
	<div class="column-content" use:dndzone={{items, flipDurationMs, zoneTabIndex: -1}}
     	 on:consider={handleDndConsiderCards} 
			 on:finalize={handleDndFinalizeCards}>
				{#each items as item, i (item.id)}

           <div class="card" animate:flip="{{duration: flipDurationMs}}" style="margin-left: {item.indent}px;" class:toolbox="{name==='toolbox'}" class:selected={stepIndex==i && name==='program'}>
            <div class="buttons">
              <div class="leftbutton" style="font-weight: 900;" on:click={toggleIndentDown(item)}>
                {'<'}
              </div>
              <div class="rightbutton" style="font-weight: 900;" on:click={toggleIndent(item)}>
                {'>'}
              </div>
            </div>
            <div class="name">
              {item.name}
            </div>
              
            </div>
        {/each}
    </div>
</div>
