const board = document.getElementById('board');
const resetButton = document.getElementById('reset');
const playerOne = "X";
const playerTwo = "O";
let player = playerOne;

function addMark(event) {
    event.target.innerHTML = player;
    if (player === playerOne) player = playerTwo;
        else player = playerOne;
}

function resetBoard() {
    for (let i = 0; i < 9; i++) {
        document.getElementById([i]).innerHTML = '';
    }
}

board.addEventListener('click', addMark);
reset.addEventListener('click', resetBoard);