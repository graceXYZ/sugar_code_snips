<script>
    // import VerticalList from './VerticalList.svelte';
    import Board from './Board.svelte';

	export let programData;

	let toolboxItems = [
		{id: 1, name: "move_left()", indent:0},
		{id: 2, name: "move_right()", indent:0},
		{id: 3, name: "move_up()", indent:0},
		{id: 4, name: "move_down()", indent:0},
		{id: 5, name: "water()", indent:0}
	]

    let columnsData = [
		{
			id: "c1",
			name: "toolbox",
			items: [
				{id: 1, name: "move_left()", indent:0},
				{id: 2, name: "move_right()", indent:0},
				{id: 3, name: "move_up()", indent:0},
				{id: 4, name: "move_down()", indent:0},
				{id: 5, name: "water()", indent:0}
			]
		},
		{
			id: "c2",
			name: "program",
			items: [
			]
		}
	];

	function handleBoardUpdated(newColumnsData) {
		// regenerate toolbox values
		console.log("HANDLE UPDATE")
		console.log(newColumnsData)

		for (let i=0; i<toolboxItems.length; i++) {
			// check[colTool[i].id] = 1;
			console.log(toolboxItems[i])
			toolboxItems[i].id += 10
		};
		// for (let i=0;i++;i<check.length) {
		// 	if (check[i]===0) {
		// 		toolboxItems[i].id += 10
		// 	}
		// }
		newColumnsData[0].items = toolboxItems;
		// if you wanted to update a database or a server, this is where you would do it
		columnsData = newColumnsData;
		programData = columnsData[1].items;
	}

</script>

<Board columns={columnsData} onFinalUpdate={handleBoardUpdated}/>

<style>
:global(*) {
		box-sizing: border-box;
		margin: 0;
	}

</style>