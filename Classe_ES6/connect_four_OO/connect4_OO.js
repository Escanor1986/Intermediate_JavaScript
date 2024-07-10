"use strict";

class Game {
  static numberOfWins = 0;
  static numberOfGames = 0;
  static numberOfLosses = 0;

  constructor(width = 10, height = 10) {
    this.width = width;
    this.height = height;
    this.board = [];
    this.currPlayer = 1; 
  }

  makeGameCount() {
    const games = document.getElementById("numberOfGames");
    const wins = document.getElementById("numberOfWins");
    const losses = document.getElementById("numberOfLosses");

    games.innerText = `Number of Games : ${Game.numberOfGames}`;
    wins.innerText = `Number of wins : ${Game.numberOfWins}`;
    losses.innerText = `Number of losses : ${Game.numberOfLosses}`;
  }

  makeBoard() {
    this.board = [];
    for (let y = 0; y < this.height; y++) {
      const emptyRow = Array.from({ length: this.width }, () => null);
      this.board.push(emptyRow);
    }
  }

  makeHtmlBoard() {
    const mainBoard = document.getElementById("game");

    const htmlBoard = document.createElement("table");
    htmlBoard.setAttribute("id", "board");

    mainBoard.append(htmlBoard);

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
  
      for (let x = 0; x < this.width; x++) {
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
    this.makeGameCount(); // Update the game count after game ends
  }

  checkForWin() {
    const _win = (cells) => {
      return cells.every(
        ([y, x]) =>
          y >= 0 &&
          y < this.height &&
          x >= 0 &&
          x < this.width && 
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
          Game.numberOfWins += 1;
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
    this.board[y][x] = this.currPlayer; 
    this.placeInTable(y, x);
  
    // check for win
    if (this.checkForWin()) {
      return this.endGame(`Player ${this.currPlayer} won! Would you like to stop or restart a new game ?`);
    }
  
    // check for tie: if top row is filled, board is filled
    if (this.board[0].every(cell => cell !== null)) { 
      return this.endGame('Tie! Would you like to stop or restart a new game ?');
    }
  
    // switch players
    this.currPlayer = this.currPlayer === 1 ? 2 : 1;
  }

  makeButtonBoard() {
    const mainBoard = document.getElementById("game");

    const buttonBoard = document.createElement("div");
    buttonBoard.setAttribute("id", "buttonBoard");
    buttonBoard.style.display = "flex";
    buttonBoard.style.flexDirection = "row";
    buttonBoard.style.justifyContent = "center";
    buttonBoard.style.alignItems = "center";

    mainBoard.append(buttonBoard);
    this.makeStartButton(buttonBoard);
  }

  makeStartButton(parent) {
    const startButton = document.createElement("button");

    startButton.setAttribute("id", "startButton");
    startButton.innerText = "Start Game";
    startButton.type = 'button';
    
    startButton.addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();

      if (this.board.length === 0) {
        this.makeBoard();
        this.makeHtmlBoard();
        startButton.style.display = "none";
        this.makeRestartButton();
        Game.numberOfGames += 1;
        this.makeGameCount(); // Update the game count after starting a new game
      } else {
        throw new Error(`Oups ! Seems you're already playing !`);
      }
    });

    parent.append(startButton);
  }

  makeRestartButton() {
    const buttonBoard = document.getElementById("buttonBoard");
    const restartButton = document.createElement("button");

    restartButton.setAttribute("id", "restartButton");
    restartButton.innerText = "Restart Game";
    restartButton.type = 'button';
    
    restartButton.addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      const htmlBoard = document.getElementById("board");

      if (htmlBoard) {
        htmlBoard.remove();
        Game.numberOfGames += 1;
        Game.numberOfLosses += 1;
        this.makeBoard();
        this.makeHtmlBoard();
        this.makeGameCount(); // Update the game count after restarting a game
      } else {
        throw new Error(`Oups ! Seems to have a problem... Check out your browser !`);
      }
    });

    buttonBoard.append(restartButton);
  }

  start() {
    this.makeButtonBoard();
    this.makeGameCount(); // Initialize the game count at the start
  }
}

const newGame = new Game();
newGame.start();
