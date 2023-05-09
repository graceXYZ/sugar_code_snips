<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import ToDo from './assets/ToDo.svelte';
  import Draggable from './assets/Draggable.svelte';
  import Animation from './assets/Animation.svelte';

  import Modal from "./assets/Modal.svelte";
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
  
    <Modal bind:this={modal}>
      
      <h2 style="margin-bottom: 0.1em">Welcome to The Sugar Shortage: Level 0</h2>
      <div class="ModalText"> 
      <p>You are visiting a sugar beet farm to help figure out what is happening to the beet plants.</p>
      <p>Your first task is to make sure all the plants are watered.</p>
      <p>Using the toolbox commands on the left, construct a program to move your character around the field and water the plants.</p>
      <br>
      <p>Press <strong>Play</strong> to activate your program, and <strong>Reset</strong> to try again. </p>
      <br>
      <p>When all the plants are watered, you can move on to the next level!</p>
    </div>
      <button class="modalButton" on:click={() => modal.hide()}>Close</button>
    </Modal>
  </div>

  <div class="buttonWrap">
    <button on:click={() => modal.show()}>Show instructions</button>
  </div>
  

  

</main>

<style>
  .ModalText {
    text-align: left;
    padding: 0.5em;
  }
  .modalButton {
        position:absolute;
        bottom: 0;
        right: 0;
        margin: 1em;
  }

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
    margin: 0;
    margin-top: 2.5em;
    position: relative;
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

  button {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 100;
    color: #000000;
    position: relative;
    margin: 0;
    border: 0.5px black solid;
  }

  .buttonWrap {
    display: flex;
    margin: 0.5em;
    align-items: start;
    justify-content: left;
  }

  

</style>
