<script>
    
    let x = 0
    const BOARD_SIZE = 5;
    let choiceChar = 0;
    let level = 0;

    let stepIndex = 0;
    let steps = ['l','r','u','d']

    // every cell will be empty or have a sapling
    const EMPTY_CELL = 0;
    const SAPLING_CELL = 1;

    // every cell will have a character or not
    const CHAR_CELL = 1;
    const NO_CHAR_CELL = 0;

    // every cell will have dry or wet soil
    const DRY_CELL = 0;
    const WET_CELL = 1;
    
    let board;
    let charPosition;
    let gameInterval;

    $: { x = 1}

    
    function resetGame() {
      
    }

    function addCharacter() {
      let pos = Math.floor(BOARD_SIZE / 2);
    }

    function newGame() {
        // score = 0;
        // direction = null;
        // previousDirection = null;
        board = [...Array(BOARD_SIZE)].map(() => Array(BOARD_SIZE).fill(0));
        charPosition = [0, 0];

        addSaplings();
        // addFood();

        gameInterval = setInterval(move, 250);
      }


    function updatePosition(position) {
      const [x, y] = position;

      board[x][y] = CHAR_CELL;

      const [removeX, removeY] = charPosition;
      board[removeX][removeY] = NO_CHAR_CELL;

      charPosition = position;
    }


    function addSaplings(){
      let pos = Math.floor(BOARD_SIZE / 2);
      board[pos][pos] = SAPLING_CELL;
    }


    function outOfBounds(){
      console.log("cant move that way!")
    }


    function checkForCollision(position) {
        const [x, y] = position;

        if (x < 0 || x === BOARD_SIZE || y < 0 || y === BOARD_SIZE) return outOfBounds();
        // if (board[x][y] === SNEK_CELL) return gameOver();
        // if (board[x][y] === FOOD_CELL) return eatFood(position);

        return updatePosition(position);
    }


    function move(direction) {
        const [currX, currY] = charPosition;

        switch (direction) {
          case 'right':
            return checkForCollision([currX, currY + 1]);
          case 'left':
            return checkForCollision([currX, currY - 1]);
          case 'up':
            return checkForCollision([currX - 1, currY]);
          case 'down':
            return checkForCollision([currX + 1, currY]);
        }
    }

    
  </script>
  
  <div class="wrapper">

  
  <h2>field</h2>


  <div class="field">
      {#each board as row, outerIndex}
        {#each row as cell, index}
          <div class="cell">
            {#if board[outerIndex][index] === 1}
              <Character {choiceChar}/>
            {:else if board[outerIndex][index] === 2}
              <Sampling {level}/>
            {/if}
          </div>
        {/each}
      {/each}
  </div>

  <div class="controls">
    <button> Play</button>
    <button> Restart</button>
  </div>
  

</div>

  
  <style>
    .controls {
        margin: 1em auto;
    }
    .field {
        width: 250px;
        height: 250px;
        margin: 0 auto;
        background-color: rgb(245, 245, 245);
    }
    .wrapper {
        position: relative;
        padding: 0.5em;
        margin: 0.5em;
        width: 300px;
        height: 420px;
        border: solid black 1px;
        /* margin: 20px auto; */
    }

    h2,
    h1 {
      text-align: center;
      height: 2.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.7em;
        font-weight: 200;
        user-select: none;
        margin: 10px auto;
    }
  </style>
  
  
  
  