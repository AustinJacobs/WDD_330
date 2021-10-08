const board = document.getElementById('board');
const resetButton = document.getElementById('reset');
const playerOne = "X";
const playerTwo = "O";
let player = playerOne;
const spaces = [];

function addMark(event) {
    const id = event.target.id;
    if (!spaces[id]) {
        spaces[id] = player;
        event.target.innerText = player;
        if (player === playerOne) player = playerTwo;
        else player = playerOne;
    }

    // Top Row
    if (spaces[0] === 'X' && spaces[1] === 'X' && spaces[2] === 'X') {
        alert("Player One Wins!");
    };

    if (spaces[0] === 'O' && spaces[1] === 'O' && spaces[2] === 'O') {
        alert("Player Two Wins!");
    };

    // Middle Row
    if (spaces[3] === 'X' && spaces[4] === 'X' && spaces[5] === 'X') {
        alert("Player One Wins!");
    };

    if (spaces[3] === 'O' && spaces[4] === 'O' && spaces[5] === 'O') {
        alert("Player Two Wins!");
    };

    // Bottom Row
    if (spaces[6] === 'X' && spaces[7] === 'X' && spaces[8] === 'X') {
        alert("Player One Wins!");
    };

    if (spaces[6] === 'O' && spaces[7] === 'O' && spaces[8] === 'O') {
        alert("Player Two Wins!");
    };

    // Diagonal top left to bottom right
    if (spaces[0] === 'X' && spaces[4] === 'X' && spaces[8] === 'X') {
        alert("Player One Wins!");
    };

    if (spaces[0] === 'O' && spaces[4] === 'O' && spaces[8] === 'O') {
        alert("Player Two Wins!");
    };

    // Middle column top to bottom
    if (spaces[1] === 'X' && spaces[4] === 'X' && spaces[7] === 'X') {
        alert("Player One Wins!");
    };

    if (spaces[1] === 'O' && spaces[4] === 'O' && spaces[7] === 'O') {
        alert("Player Two Wins!");
    };

    // Left column top to bottom
    if (spaces[0] === 'X' && spaces[3] === 'X' && spaces[6] === 'X') {
        alert("Player One Wins!");
    };

    if (spaces[0] === 'O' && spaces[3] === 'O' && spaces[6] === 'O') {
        alert("Player Two Wins!");
    };

    // Right column top to bottom
    if (spaces[2] === 'X' && spaces[5] === 'X' && spaces[8] === 'X') {
        alert("Player One Wins!");
    };

    if (spaces[2] === 'O' && spaces[5] === 'O' && spaces[8] === 'O') {
        alert("Player Two Wins!");
    };

    // Diagonal top right to bottom left
    if (spaces[2] === 'X' && spaces[4] === 'X' && spaces[6] === 'X') {
        alert("Player One Wins!");
    };

    if (spaces[2] === 'O' && spaces[4] === 'O' && spaces[6] === 'O') {
        alert("Player Two Wins!");
    };
};

function resetBoard() {
    for (let i = 0; i < 9; i++) {
        document.getElementById([i]).innerHTML = '';
    }
    player = playerOne;
    location.reload();
}


board.addEventListener('click', addMark);
reset.addEventListener('click', resetBoard);