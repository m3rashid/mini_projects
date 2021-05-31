const cellElements = document.querySelectorAll("[data-cell]")
const board = document.getElementById("board")
const winningMessageText = document.querySelector("[data-winning-message-text]")
const winningMessage = document.getElementById("winning-message");
const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

document.getElementById("restart").addEventListener("click", startGame)

let oTurn;
startGame()

function startGame(){
    oTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove("x")
        cell.classList.remove("o")
        cell.removeEventListener("click", handleClick)
        cell.addEventListener("click", handleClick, {once: true})
    });
    setHover()
    winningMessage.classList.remove("show")
}


function handleClick(e){
    const cell = e.target
    const currentClass = oTurn ? "o":"x"
    placeMark(cell, currentClass);
    if(checkWin(currentClass)){
        endGame(false)
    }
    else if (isDraw()) {
        endGame(true)
    }
    else {
        swapTurns();
        setHover();
    }
    // Check Draw
    // Switch turn
}


function placeMark(cell, currentClass){
    cell.classList.add(currentClass);
}

function swapTurns(){
    oTurn = !oTurn
}


function setHover(){
    board.classList.remove("x")
    board.classList.remove("o")
    if(oTurn){
        board.classList.add("o")
    } else {
        board.classList.add("x")
    }
}

function checkWin (currentClass){
    return winCombinations.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

function isDraw(){
    return [...cellElements].every(cell => {
        return cell.classList.contains("x") || cell.classList.contains("o")
    })
}

function endGame(draw){
    if(draw){
        winningMessageText.innerText = "Draw !";        
    } else {
        winningMessageText.innerText = `${oTurn ? "O's" : "X's"} Wins !`;
    }
    winningMessage.classList.add("show");
}












