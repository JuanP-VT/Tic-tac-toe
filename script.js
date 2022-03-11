const gameBoard = (() =>{
    //Creating the gameboard
    function gridFactory(element,status,owner){
        return{
            element,
            status,
            owner,
        }
    }
    const gameBoardGrid =[];
    for (let index = 0; index < 9; index++) {
        const divField = document.createElement('div')
        divField.id =('n'+index)
        divField.classList.add('grid')
        const objField = gridFactory(divField,'Open','noOne')
        gameBoardGrid.push(objField)
    }
//Establishing players
    function createPlayer (name , marker) {
        return{
            name,
            marker,
            sayName(){
                console.log('My name is ' + name + ' my marker is '+ marker)
            }
        }
    }
const playerOne = createPlayer('Juan P', 'O');
const playerTwo = createPlayer('Computer','X');
    
const gameFlow =(() =>{
    //Draws gameboard from the mainobject
function drawGrid(){
    gameBoard.gameBoardGrid.forEach(grid => {
        const newGrid = grid.element
        const divScreen = document.querySelector('#screen')
        divScreen.appendChild(newGrid)
    });
}

function runEvent(){
    gameBoard.gameBoardGrid.forEach(grid => {
        grid.element.addEventListener('click',Marker)
    });
}

let currentMark = 'O';

function Marker(){
    const indeX = gameBoard.gameBoardGrid.findIndex(em => em.element === this)
    const domScreen = document.querySelector('#screen').children
    const domArray = [...domScreen]
    const gridIsOpen = gameBoard.gameBoardGrid[indeX].status
    const gridObj = gameBoard.gameBoardGrid
    if (currentMark == 'X' && gridIsOpen == 'Open'){
        gameBoard.gameBoardGrid[indeX].owner = 'X'
        gameBoard.gameBoardGrid[indeX].status = 'Closed'
        domArray[indeX].textContent = 'X'
        checkWiner()
        checkDraw(gridObj)
        return currentMark = 'O'
    }
    if (currentMark == 'O'  && gridIsOpen == 'Open'){
        gameBoard.gameBoardGrid[indeX].owner ='O'
        gameBoard.gameBoardGrid[indeX].status = 'Closed'
        domArray[indeX].textContent = 'O'
        checkWiner()
        checkDraw(gridObj)
        return currentMark = 'X'
    }
}
const playerWin = ''

function checkWiner(){
    //Check for rows
    if (gameBoard.gameBoardGrid[0].owner == 'X'&&
        gameBoard.gameBoardGrid[1].owner == 'X'&&
        gameBoard.gameBoardGrid[2].owner == 'X'){
            gameBoard.gameBoardGrid[0].element.classList.add('active');
            gameBoard.gameBoardGrid[1].element.classList.add('active');
            gameBoard.gameBoardGrid[2].element.classList.add('active');
            const winner = gameBoard.gameBoardGrid[0].owner;
            Winner(winner)
        }
    if  (gameBoard.gameBoardGrid[0].owner ==  'O' &&
        gameBoard.gameBoardGrid[1].owner == 'O' &&
        gameBoard.gameBoardGrid[2].owner == 'O'){
            gameBoard.gameBoardGrid[0].element.classList.add('active');
            gameBoard.gameBoardGrid[1].element.classList.add('active');
            gameBoard.gameBoardGrid[2].element.classList.add('active');
            const winner = gameBoard.gameBoardGrid[0].owner;
            Winner(winner)
            }
    if (gameBoard.gameBoardGrid[3].owner == 'X'&&
        gameBoard.gameBoardGrid[4].owner == 'X'&&
        gameBoard.gameBoardGrid[5].owner == 'X'){
            gameBoard.gameBoardGrid[3].element.classList.add('active');
            gameBoard.gameBoardGrid[4].element.classList.add('active');
            gameBoard.gameBoardGrid[5].element.classList.add('active');
            const winner = gameBoard.gameBoardGrid[3].owner;
            Winner(winner)
        }
    if (gameBoard.gameBoardGrid[3].owner ==  'O'&&
        gameBoard.gameBoardGrid[4].owner == 'O'&&
        gameBoard.gameBoardGrid[5].owner == 'O'){
            gameBoard.gameBoardGrid[3].element.classList.add('active');
            gameBoard.gameBoardGrid[4].element.classList.add('active');
            gameBoard.gameBoardGrid[5].element.classList.add('active');
            const winner = gameBoard.gameBoardGrid[3].owner;
            Winner(winner)
            }
    if (gameBoard.gameBoardGrid[6].owner == 'X'&&
        gameBoard.gameBoardGrid[7].owner == 'X'&&
        gameBoard.gameBoardGrid[8].owner == 'X'){
            gameBoard.gameBoardGrid[6].element.classList.add('active');
            gameBoard.gameBoardGrid[7].element.classList.add('active');
            gameBoard.gameBoardGrid[8].element.classList.add('active');
            const winner = gameBoard.gameBoardGrid[6].owner;
            Winner(winner)
        }
    if (gameBoard.gameBoardGrid[6].owner ==  'O'&&
        gameBoard.gameBoardGrid[7].owner == 'O' &&
        gameBoard.gameBoardGrid[8].owner == 'O'){
            gameBoard.gameBoardGrid[6].element.classList.add('active');
            gameBoard.gameBoardGrid[7].element.classList.add('active');
            gameBoard.gameBoardGrid[8].element.classList.add('active');
            const winner = gameBoard.gameBoardGrid[6].owner;
            Winner(winner)
        }
    //Check for columns
    if (gameBoard.gameBoardGrid[0].owner == 'X'&&
        gameBoard.gameBoardGrid[3].owner == 'X'&&
        gameBoard.gameBoardGrid[6].owner == 'X'){
            gameBoard.gameBoardGrid[0].element.classList.add('active');
            gameBoard.gameBoardGrid[3].element.classList.add('active');
            gameBoard.gameBoardGrid[6].element.classList.add('active');
            const winner = gameBoard.gameBoardGrid[0].owner;
            Winner(winner)
            }
    if (gameBoard.gameBoardGrid[0].owner ==  'O'&&
        gameBoard.gameBoardGrid[3].owner == 'O'&&
        gameBoard.gameBoardGrid[6].owner == 'O'){
            gameBoard.gameBoardGrid[0].element.classList.add('active');
            gameBoard.gameBoardGrid[3].element.classList.add('active');
            gameBoard.gameBoardGrid[6].element.classList.add('active');
            const winner = gameBoard.gameBoardGrid[0].owner;
            Winner(winner)
            }
    if (gameBoard.gameBoardGrid[1].owner == 'X'&&
        gameBoard.gameBoardGrid[4].owner == 'X'&&
        gameBoard.gameBoardGrid[7].owner == 'X'){
            gameBoard.gameBoardGrid[1].element.classList.add('active');
            gameBoard.gameBoardGrid[4].element.classList.add('active');
            gameBoard.gameBoardGrid[7].element.classList.add('active');
            const winner = gameBoard.gameBoardGrid[1].owner;
            Winner(winner)
            }
    if (gameBoard.gameBoardGrid[1].owner ==  'O'&&
        gameBoard.gameBoardGrid[4].owner == 'O'&&
        gameBoard.gameBoardGrid[7].owner == 'O'){
            gameBoard.gameBoardGrid[1].element.classList.add('active');
            gameBoard.gameBoardGrid[4].element.classList.add('active');
            gameBoard.gameBoardGrid[7].element.classList.add('active');
            const winner = gameBoard.gameBoardGrid[1].owner;
            Winner(winner)
            }
    if (gameBoard.gameBoardGrid[2].owner == 'X'&&
        gameBoard.gameBoardGrid[5].owner == 'X'&&
        gameBoard.gameBoardGrid[8].owner == 'X'){
            gameBoard.gameBoardGrid[2].element.classList.add('active');
            gameBoard.gameBoardGrid[5].element.classList.add('active');
            gameBoard.gameBoardGrid[8].element.classList.add('active');
            const winner = gameBoard.gameBoardGrid[2].owner;
            Winner(winner)
            }
    if (gameBoard.gameBoardGrid[2].owner ==  'O'&&
        gameBoard.gameBoardGrid[5].owner == 'O'&&
        gameBoard.gameBoardGrid[8].owner == 'O'){
            gameBoard.gameBoardGrid[2].element.classList.add('active');
            gameBoard.gameBoardGrid[5].element.classList.add('active');
            gameBoard.gameBoardGrid[8].element.classList.add('active');
            const winner = gameBoard.gameBoardGrid[2].owner;
            Winner(winner)
            }
//Check for crosses
    if (gameBoard.gameBoardGrid[0].owner == 'X'&&
        gameBoard.gameBoardGrid[4].owner == 'X'&&
        gameBoard.gameBoardGrid[8].owner == 'X'){
            gameBoard.gameBoardGrid[0].element.classList.add('active');
            gameBoard.gameBoardGrid[4].element.classList.add('active');
            gameBoard.gameBoardGrid[8].element.classList.add('active');
            const winner = gameBoard.gameBoardGrid[0].owner;
            Winner(winner)
        }
    if (gameBoard.gameBoardGrid[0].owner == 'O'&&
        gameBoard.gameBoardGrid[4].owner == 'O'&&
        gameBoard.gameBoardGrid[8].owner == 'O'){
            gameBoard.gameBoardGrid[0].element.classList.add('active');
            gameBoard.gameBoardGrid[4].element.classList.add('active');
            gameBoard.gameBoardGrid[8].element.classList.add('active');
            const winner = gameBoard.gameBoardGrid[0].owner;
            Winner(winner)
    }
    if (gameBoard.gameBoardGrid[2].owner == 'X'&&
        gameBoard.gameBoardGrid[4].owner == 'X'&&
        gameBoard.gameBoardGrid[6].owner == 'X'){
            gameBoard.gameBoardGrid[2].element.classList.add('active');
            gameBoard.gameBoardGrid[4].element.classList.add('active');
            gameBoard.gameBoardGrid[6].element.classList.add('active');
            const winner = gameBoard.gameBoardGrid[2].owner;
            Winner(winner)
        }
    if (gameBoard.gameBoardGrid[2].owner == 'O'&&
        gameBoard.gameBoardGrid[4].owner == 'O'&&
        gameBoard.gameBoardGrid[6].owner == 'O'){
            gameBoard.gameBoardGrid[2].element.classList.add('active');
            gameBoard.gameBoardGrid[4].element.classList.add('active');
            gameBoard.gameBoardGrid[6].element.classList.add('active');
            const winner = gameBoard.gameBoardGrid[2].owner;
            Winner(winner)
    }
}
function checkDraw(array){
    const gridsOpen = gameBoard.gameBoardGrid.some(function(val){
        return val.status == 'Open'
    })
    console.log(gridsOpen)
    //check if there is winner first
    const winneChk= gameBoard.gameFlow.playerWin
    if (gridsOpen == false && winneChk  == ''){
        const winnerDiv = document.querySelector('#winnerdiv')
        winnerDiv.textContent = 'It is a DRAW!!'
        resetButton()
        stopEvents()
}
}


function Winner(win){
    console.log(win)
    const winnerDiv = document.querySelector('#winnerdiv')
    winnerDiv.textContent = 'The winner is '+ win + '  !!!'
    gameBoard.gameFlow.playerWin = win
    resetButton()
    stopEvents()
}

function stopEvents(){
    const gridsDiv = document.querySelectorAll('.grid')
    gridsDiv.forEach(element => {
        element.removeEventListener('click', Marker)
    });
}

function resetButton(){
    const resetDiv = document.querySelector('#reset')
    const resetBtn= document.createElement('button')
    resetBtn.textContent = 'Reset Game'
    resetBtn.addEventListener('click',resetGame)
    resetDiv.appendChild(resetBtn)
}
function resetGame(){
    //Reset the gameboard object
    gameBoard.gameBoardGrid.forEach(grid => {
        grid.status = 'Open'
        grid.owner = 'noOne'
        grid.element.classList.remove('active')
        grid.element.textContent = ''
    });
    //Delete DOM elements
    const divScreen = document.querySelector('#screen')
    while (divScreen.firstChild){
        divScreen.removeChild(divScreen.firstChild)
    }
    const removeDiv = document.querySelector('#reset')
    removeDiv.removeChild(removeDiv.firstChild)
    const winnerDiv = document.querySelector('#winnerdiv')
    winnerDiv.textContent = ''
    //Rerun game
    start()
}
    
    return{
        drawGrid,
        runEvent,
        Marker,
        checkWiner,
        checkDraw,
        Winner,
        resetButton,
        stopEvents,
        playerWin,
    }

})();


return {
gameBoardGrid,
playerOne,
playerTwo,
gameFlow,
};

})();




function start(){
    //Check if there are available grids to play and runs a loop
    const gridsOpen = gameBoard.gameBoardGrid.some(function(val){
        return val.status == 'Open'
    })
    gameBoard.gameFlow.drawGrid()
    gameBoard.gameFlow.runEvent()
    }
start()