let turn = 'X';
let boxes = document.getElementsByClassName("box");
let text1 = document.getElementsByClassName("text");
function changeTurn() {
    if (turn === 'X') {
        turn = 'O';
        text1[0].innerText = turn + "'s Turn";

    }
    else {
        turn = 'X';
        text1[0].innerText = turn + "'s Turn";
    }
}

for (let i = 0; i < boxes.length; ++i) {
    boxes[i].addEventListener('click', function () {
        if (this.innerText === '') {
            this.innerText = turn;
            changeTurn();
            checkWin();
        }
    })
}
let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
function checkWin() {
    for (let j = 0; j < 8; j++) {
        const [a, b, c] = win[j];
        if (boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText && boxes[a].innerText != '') {
            text1[0].innerText = "Player " + boxes[a].innerText + " won";
            return;
        }
        checkTie();
    }
}
function checkTie() {
    let flag = 0;
    for (let k = 0; k < 9; k++) {
        if (boxes[k].innerText === '') {
            flag = 1;
            break;
        }
    }
    if (flag === 0) {
        text1[0].innerText = "TIE";
    }
}
let btn = document.getElementById("btn");
btn.addEventListener('click', reset);
function reset() {
    for (let k = 0; k < boxes.length; ++k) {
        boxes[k].innerText = " ";
        turn = 'X';
        text1[0].innerText = turn + "'s Turn";
        move = 0;
    }
}