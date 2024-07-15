"use strict";

import './style.css'


// Define Player class with a color property
class Player {
  color: string;
  isAI: boolean;

  constructor(color: string, isAI: boolean) {
    this.color = color;
    this.isAI = isAI;
  }
}

// Define Game class
class Game {
  static numberOfWins = 0;
  static numberOfGames = 0;
  static numberOfLosses = 0;

  width: number;
  height: number;
  board: (Player | null)[][]; // 2D array to hold Player instances or null
  players: Player[];
  currPlayer: Player | null;
  isGameOver: boolean;

  constructor(width: number = 10, height: number = 8) {
    this.width = width;
    this.height = height;
    this.board = [];
    this.players = [];
    this.currPlayer = null;
    this.isGameOver = false;
  }

  // Update game statistics display
  makeGameCount() {
    const games = document.getElementById("numberOfGames")!;
    const wins = document.getElementById("numberOfWins")!;
    const losses = document.getElementById("numberOfLosses")!;

    games.innerText = `Number of Games : ${Game.numberOfGames}`;
    wins.innerText = `Number of wins : ${Game.numberOfWins}`;
    losses.innerText = `Number of losses : ${Game.numberOfLosses}`;
  }

  // Initialize the board with null values
  // For each empty("null") cell on this.height line
  // we push an "emptyRow" with a length === this.width
  makeBoard() {
    this.board = [];
    for (let y = 0; y < this.height; y++) {
      const emptyRow = Array.from({ length: this.width }, () => null);
      this.board.push(emptyRow);
    }
  }

  // Create HTML table structure for the game board
  makeHtmlBoard() {
    const mainBoard = document.getElementById("game")!;

    const htmlBoard = document.createElement("table");
    htmlBoard.setAttribute("id", "board");

    mainBoard.append(htmlBoard);

    // We create the main top row that shall by filled up with empty cell "td"  
    // "x" axes ==> horizontale
    const top = document.createElement("tr");
    top.setAttribute("id", "column-top");

    for (let x = 0; x < this.width; x++) {
      // creation of "click & drop zone(row)" for cell of the game
      // x0, x1, x2, ... x9
      const headCell = document.createElement("td");
      headCell.setAttribute("id", `top-${x}`);
      // Here we bind "this" (that refer to the instance of the class)
      // because inside the method eventListener, "this" refer to the
      // Window Object, not to the instance of the class
      headCell.addEventListener("click", this.handleClick.bind(this)); 
      top.append(headCell);
    }
    htmlBoard.append(top);

    // And here create the entire game table 
    // with a surface of this.heihgt * this.width
    for (let y = 0; y < this.height; y++) {
      // Game "x" axes ==> horizontale 
      const row = document.createElement('tr');

      for (let x = 0; x < this.width; x++) {
        const cell = document.createElement('td');
        cell.setAttribute('id', `c-${y}-${x}`);
        row.append(cell);
      }

      htmlBoard.append(row);
    }
  }

  // Find the next available spot in a column "x" from base to top
  findSpotForCol(x: number): number | null {
    // When choosen top cell's is clicked
    // the game check which cell from base to top is available or "null"
    for (let y = this.height - 1; y >= 0; y--) {
      if (this.board[y][x] === null) {
        // return the first "null" cell to place a color div or "player"
        return y;
      }
    }
    return null;
  }

  // Create && Place the piece in the HTML table
  placeInTable(y: number, x: number) {
    const piece = document.createElement('div');
    piece.classList.add('piece');
    piece.style.backgroundColor = this.currPlayer!.color;

    const spot = document.getElementById(`c-${y}-${x}`)!;
    spot.append(piece);
  }

  // End the game with a message and update stats
  endGame(msg: string) {
    alert(msg);
    this.isGameOver = true;
    this.makeGameCount();
  }

  // Check for a win
  checkForWin(): boolean {
    const _win = (cells: [number, number][]) => {
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
        const horiz: [number, number][] = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
        const vert: [number, number][] = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
        const diagDR: [number, number][] = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        const diagDL: [number, number][] = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

        if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
          Game.numberOfWins += 1;
          return true;
        }
      }
    }
    return false;
  }

  // Handle a column click event
  handleClick(evt: MouseEvent) {
    if (this.isGameOver) return;

    const x = Number((evt.target as HTMLElement).id.slice("top-".length));
    console.log("x = ", x);

    const y = this.findSpotForCol(x);
    console.log("y = ", y);
    if (y === null) {
      return;
    }

    this.board[y][x] = this.currPlayer!;
    console.log(this.board)
    this.placeInTable(y, x);

    if (this.checkForWin()) {
      return this.endGame(`Player ${this.currPlayer!.color} won! Would you like to stop or restart a new game?`);
    }

    if (this.board[0].every(cell => cell !== null)) {
      return this.endGame('Tie! Would you like to stop or restart a new game?');
    }

    this.currPlayer = this.currPlayer === this.players[0] ? this.players[1] : this.players[0];
  }

  // Create buttons for starting and restarting the game
  makeButtonBoard() {
    const mainBoard = document.getElementById("game")!;

    const buttonBoard = document.createElement("div");
    buttonBoard.setAttribute("id", "buttonBoard");
    buttonBoard.style.display = "flex";
    buttonBoard.style.flexDirection = "row";
    buttonBoard.style.justifyContent = "center";
    buttonBoard.style.alignItems = "center";

    mainBoard.append(buttonBoard);
    this.makeStartButton(buttonBoard);
  }

  makeStartButton(parent: HTMLElement) {
    const startButton = document.createElement("button");

    startButton.setAttribute("id", "startButton");
    startButton.innerText = "Start Game";
    startButton.type = 'button';

    startButton.addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();

      const player1Color = (document.getElementById("player1Color") as HTMLInputElement).value;
      const player2Color = (document.getElementById("player2Color") as HTMLInputElement).value;

      if (this.board.length === 0) {
        this.players = [new Player(player1Color, false), new Player(player2Color, true)];
        this.currPlayer = this.players[0];
        this.makeBoard();
        this.makeHtmlBoard();
        startButton.style.display = "none";
        this.makeRestartButton();
        Game.numberOfGames += 1;
        this.makeGameCount();
      } else {
        throw new Error(`Oups ! Seems you're already playing !`);
      }
    });

    parent.append(startButton);
  }

  makeRestartButton() {
    const buttonBoard = document.getElementById("buttonBoard")!;
    const restartButton = document.createElement("button");

    restartButton.setAttribute("id", "restartButton");
    restartButton.innerText = "Restart Game";
    restartButton.type = 'button';

    restartButton.addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      const htmlBoard = document.getElementById("board")!;

      if (htmlBoard) {
        htmlBoard.remove();
        Game.numberOfGames += 1;
        if (!this.isGameOver) {
          Game.numberOfLosses += 1;
        }
        this.makeBoard();
        this.makeHtmlBoard();
        this.makeGameCount();
        this.isGameOver = false;
      } else {
        throw new Error(`Oups ! Seems to have a problem... Check out your browser !`);
      }
    });

    buttonBoard.append(restartButton);
  }

  // Initialize the game
  start() {
    this.makeButtonBoard();
    this.makeGameCount();
  }
}

const newGame = new Game();
newGame.start();
