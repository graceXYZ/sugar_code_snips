<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
    import ToDo from './assets/ToDo.svelte';
    import Draggable from './assets/Draggable.svelte';
    import Animation from './assets/Animation.svelte';


  let programData;


</script>


<main>

  <h1>InventXYZ Sugar Shortage</h1>

  <nav>
    <a href="/">home</a>
    <a href="exercise1">exercise1</a>
  </nav>

  <!-- <ToDo/> -->

  <div class="wrapElements">

    <Draggable {programData}/>
    <Animation/>
  
  </div>

  

</main>

<style>
  nav a {
    padding: 5px;
  }
  .read-the-docs {
    color: #888;
  }
  .wrapElements {
    display: flex;
    margin: 2.5em 0;
  }

  

</style>
