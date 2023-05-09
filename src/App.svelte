<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import ToDo from './assets/ToDo.svelte';
  import Draggable from './assets/Draggable.svelte';
  import Animation from './assets/Animation.svelte';

  import Modal from "./Modal.svelte";
  let modal;

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

    <Draggable/>
    <Animation/>
  
  </div>

  <button on:click={() => modal.show()}>Show modal</button>
  <Modal bind:this={modal}>
    <h2>Modal title</h2>
    <p>Modal content.</p>
    <button on:click={() => modal.hide()}>Close</button>
  </Modal>

  

</main>

<style>
  h1 {
    margin-bottom: 0.2em;
  }

  nav a {
    padding: 5px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 100;
    color: rgba(80, 80, 241, 1)
  }
  .read-the-docs {
    color: #888;
  }
  .wrapElements {
    display: flex;
    margin: 2.5em 0;
  }

    @font-face {
      font-family: 'Roboto';
      src: url("https://fonts.googleapis.com/css2?family=Roboto&display=swap") format("woff");
    }
    
    h1,h2,p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 100;
    color: #000000;
  }

  

</style>
