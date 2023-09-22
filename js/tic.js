
/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let board
let turn
let winner
let tie

/*------------------------ Cached Element References ------------------------*/
const ticGameContainerEl = document.getElementById('tic-game-container')
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.getElementById('message')


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [null, -1, 1, null, null, null, null, null, null]
  turn = -1
  winner = false
  tie = false
  render()
}

function render() {
  updateBoard()
}

function updateBoard() {
  board.forEach(function(boardValue, idx) {
    if (board[idx] === 1) {
      //Display x
      squareEls[idx].textContent = 'X'
      squareEls[idx].style.backgroundColor = 'lightsalmon'
    } else if (board[idx] === -1) {
      //Display 0
      squareEls[idx].textContent = '0'
      squareEls[idx].style.backgroundColor = 'lightseagreen'
    } else {
      //Display nothing
      squareEls[idx].textContent = ''
      squareEls[idx].style.backgroundColor = 'grey'
    }
  })
}


// 1) Define the required variables used to track the state of the game

// 2) Store cached element references

// 3) Upon loading, the game state should be initialized, and a function should be 
//    called to render this game state

// 4) The state of the game should be rendered to the user

// 5) Define the required constants

// 6) Handle a player clicking a square with a `handleClick` function

// 7) Create Reset functionality