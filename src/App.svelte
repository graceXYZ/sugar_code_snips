<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
    import ToDo from './assets/ToDo.svelte';
    import Draggable from './assets/Draggable.svelte';

</script>


<main>

  <h1>InventXYZ Code Snips</h1>

  <nav>
    <a href="/">home</a>
    <a href="exercise1">exercise1</a>
  </nav>

  <!-- <ToDo/> -->

  <Draggable/>

  <div>
    <div id="sortableTrash" class="sortable-code"></div> 
    <div id="sortable" class="sortable-code"></div> 
    <div style="clear:both;"></div> 
    <p> 
        <input id="feedbackLink" value="Get Feedback" type="button" /> 
        <input id="newInstanceLink" value="Reset Problem" type="button" /> 
    </p> 
  </div>


  <p class="read-the-docs">
    Click on a section to start learning!
  </p>
</main>

<style>
  nav a {
    padding: 5px;
  }
  .read-the-docs {
    color: #888;
  }

  

</style>
