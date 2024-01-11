const BOARD_SIZE_X = 7;
const BOARD_SIZE_Y = 6;
const PLAYER1_COLOR = '#ff0000'; 
const PLAYER2_COLOR = '#00ff00'; 

let currentPlayer = 1;
let board = [];


function createBoard() {
  const gameBoard = document.getElementById('game-board');
  for (let row = 0; row < BOARD_SIZE_Y; row++) {
    const newRow = gameBoard.insertRow();
    board[row] = [];
    for (let col = 0; col < BOARD_SIZE_X; col++) {
      const newCell = newRow.insertCell();
      newCell.className = 'empty';
      newCell.onclick = () => makeMove(row, col);
      board[row][col] = '';
    }
  }
}

function makeMove(row, col) {
  for (let rowIdx = BOARD_SIZE_Y - 1; rowIdx >= 0; rowIdx--) {
    if (board[rowIdx][col] === '') {
      const cell = document.getElementById('game-board').rows[rowIdx].cells[col];
      if (currentPlayer === 1) {
        cell.style.backgroundColor = PLAYER1_COLOR;
        cell.innerText = 'X';
        board[rowIdx][col] = 'X';
        currentPlayer = 2;
      } else {
        cell.style.backgroundColor = PLAYER2_COLOR;
        cell.innerText = 'O';
        board[rowIdx][col] = 'O';
        currentPlayer = 1;
      }
      break;
    }
  }
}

function checkWin() {
}

function resetGame() {
  const gameBoard = document.getElementById('game-board');
  while (gameBoard.firstChild) {
    gameBoard.firstChild.remove();
  }
  currentPlayer = 1;
  board = [];

  createBoard();
}

document.getElementById('reset-button').addEventListener('click', resetGame);

createBoard();
