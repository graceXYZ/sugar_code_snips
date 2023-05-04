<script>
    // import VerticalList from './VerticalList.svelte';
    import Board from './Board.svelte';

    let columnsData = [
		{
			id: "c1",
			name: "toolbox",
			items: [
				{id: 1, name: "item41", indent:0},
				{id: 2, name: "item42", indent:0},
				{id: 3, name: "item43", indent:0},
				{id: 4, name: "item44", indent:0},
				{id: 5, name: "item45", indent:0}
			]
		},
		{
			id: "c2",
			name: "program",
			items: [
				{id: 10, name: "item50", indent:1},
				{id: 11, name: "item51", indent:50}
			]
		}
	];
	function handleBoardUpdated(newColumnsData) {
		// if you wanted to update a database or a server, this is where you would do it
		columnsData = newColumnsData;
	}

</script>

<Board columns={columnsData} onFinalUpdate={handleBoardUpdated}/>

<style>
:global(*) {
		box-sizing: border-box;
		margin: 0;
	}

</style>