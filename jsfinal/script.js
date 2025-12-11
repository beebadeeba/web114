
/*4x4 grid, get 3 in a row to win.*/
let currentPlayer = "X";
let gameActive = true;
let board = Array(16).fill("");

const statusText = document.getElementById("statusText");
const resetBtn = document.getElementById("resetBtn");
const boardContainer = document.getElementById("board");

const winBanner = document.createElement("div");
winBanner.id = "winBanner";
document.body.insertBefore(winBanner, boardContainer);
//start board//
function createBoard() {
    boardContainer.innerHTML = "";

    for (let i = 0; i < 16; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cell.addEventListener("click", cellClicked);
        boardContainer.appendChild(cell);
    }
}

createBoard();

function cellClicked(event) {
    const index = event.target.dataset.index;

    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    checkWinner();
    switchPlayer();
}

function switchPlayer() {
    if (!gameActive) return;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}, it's your turn.`;
}

//win conditions//
const winPatterns = [
    [0,1,2], [1,2,3],
    [4,5,6], [5,6,7],
    [8,9,10], [9,10,11],
    [12,13,14], [13,14,15],

    [0,4,8], [4,8,12],
    [1,5,9], [5,9,13],
    [2,6,10], [6,10,14],
    [3,7,11], [7,11,15],

    [0,5,10], [5,10,15],
    [1,6,11],
    [3,6,9], [6,9,12],
    [2,5,8]
];

//check winner//
function checkWinner() {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;

        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            gameActive = false;

            statusText.textContent = `🎉 Player ${currentPlayer} wins!`;

            // SHOW WIN BANNER
            winBanner.textContent = `PLAYER ${currentPlayer} WINS! 🎉`;
            winBanner.style.display = "block";

            return;
        }
    }
    //tie script//
    if (!board.includes("")) {
        gameActive = false;
        statusText.textContent = "It's a tie!";
        winBanner.textContent = "IT'S A TIE!";
        winBanner.style.display = "block";
    }
}

//reset//
resetBtn.addEventListener("click", () => {
    board = Array(16).fill("");
    currentPlayer = "X";
    gameActive = true;
    statusText.textContent = "Player X, it's your turn!";
    winBanner.style.display = "none";
    createBoard();
});
