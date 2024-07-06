"use strict";

class Game {

  constructor(width = 10, height = 10) {
    this.width = width;
    this.height = height;
    this.board = [];
    this.currPlayer = 1; // Initialisation de currPlayer
  }

  makeBoard() {
    for (let y = 0; y < this.height; y++) {
      const emptyRow = Array.from({ length: this.width }, () => null);
      this.board.push(emptyRow);
    }
  }

  makeStartButton() {
    const htmlBoard = document.getElementById("board");

    const startButton = document.createElement("button");

    startButton.setAttribute("id", "startButton");
    startButton.innerText = "Start Game";
    startButton.type = 'button';

    htmlBoard.append(startButton);
  }

  makeHtmlBoard() {
    const htmlBoard = document.getElementById("board");
  
    const top = document.createElement("tr");
    top.setAttribute("id", "column-top");
  
    for (let x = 0; x < this.width; x++) {
      const headCell = document.createElement("td");
      headCell.setAttribute("id", `top-${x}`);
      headCell.addEventListener("click", this.handleClick.bind(this)); // Binding this
      top.append(headCell);
    }
    htmlBoard.append(top);
  
    for (let y = 0; y < this.height; y++) {
      const row = document.createElement('tr');
  
      for (let x = 0; x < this.width; x++) { // Correction: this.width
        const cell = document.createElement('td');
        cell.setAttribute('id', `c-${y}-${x}`);
        row.append(cell);
      }
  
      htmlBoard.append(row);
    }
  }

  findSpotForCol(x) {
    for (let y = this.height - 1; y >= 0; y--) {
      if (this.board[y][x] === null) {
        return y;
      }
    }
    return null;
  }

  placeInTable(y, x) {
    const piece = document.createElement('div');
    piece.classList.add('piece');
    piece.classList.add(`p${this.currPlayer}`);
  
    const spot = document.getElementById(`c-${y}-${x}`);
    spot.append(piece);
  }

  endGame(msg) {
    alert(msg);
  }

  checkForWin() {
    const _win = (cells) => {
      return cells.every(
        ([y, x]) =>
          y >= 0 &&
          y < this.height && // Correction: this.height
          x >= 0 &&
          x < this.width && // Correction: this.width
          this.board[y][x] === this.currPlayer
      );
    };

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
        const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
        const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

        if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
          return true;
        }
      }
    }
    return false;
  }

  handleClick(evt) {
    // get x from ID of clicked cell
    const x = Number(evt.target.id.slice("top-".length));
  
    // get next spot in column (if none, ignore click)
    const y = this.findSpotForCol(x);
    if (y === null) {
      return;
    }
  
    // place piece in board and add to HTML table
    this.board[y][x] = this.currPlayer; // Correction: this.board and this.currPlayer
    this.placeInTable(y, x);
  
    // check for win
    if (this.checkForWin()) { // Correction: this.checkForWin()
      return this.endGame(`Player ${this.currPlayer} won!`);
    }
  
    // check for tie: if top row is filled, board is filled
    if (this.board[0].every(cell => cell !== null)) { // Correction: this.board
      return this.endGame('Tie!');
    }
  
    // switch players
    this.currPlayer = this.currPlayer === 1 ? 2 : 1;
  }

  start() {
    this.makeStartButton();
  }
}

const newGame = new Game(12, 12);
newGame.makeStartButton();
