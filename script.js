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
    

return {
gameBoardGrid,
playerOne,
playerTwo,
};

})();






function gameFlow(){

}

//Draws gamegrid from the mainobject
function drawGrid(){
    gameBoard.gameBoardGrid.forEach(grid => {
        const newGrid = grid.element
        const divScreen = document.querySelector('#screen')
        divScreen.appendChild(newGrid)
    });
}

drawGrid();

function runEvent(){
    gameBoard.gameBoardGrid.forEach(grid => {
        grid.element.addEventListener('click',Marker)
    });
}

const currentMark = 'X';

function Marker(){
    const indeX = gameBoard.gameBoardGrid.findIndex(em => em.element === this)
    console.log(indeX)
    if (currentMark == 'X'){
        gameBoard.gameBoardGrid[indeX].owner = 'X'
    }
    if (currentMark == 'O'){
        gameBoard.gameBoardGrid[indeX].owner ='O'
    }
    checkWiner();
}


runEvent()
function checkWiner(){
    //Check for rows
    if (gameBoard.gameBoardGrid[0].owner == 'X'|gameBoard.gameBoardGrid[0].owner ==  'O' &&
        gameBoard.gameBoardGrid[1].owner == 'X'|gameBoard.gameBoardGrid[1].owner == 'O' &&
        gameBoard.gameBoardGrid[2].owner == 'X'|gameBoard.gameBoardGrid[2].owner == 'O'){
            console.log('Winner is '+gameBoard.gameBoardGrid[0].owner)
        }
    if (gameBoard.gameBoardGrid[3].owner == 'X'|gameBoard.gameBoardGrid[3].owner ==  'O' &&
        gameBoard.gameBoardGrid[4].owner == 'X'|gameBoard.gameBoardGrid[4].owner == 'O' &&
        gameBoard.gameBoardGrid[5].owner == 'X'|gameBoard.gameBoardGrid[5].owner == 'O'){
        console.log('Winner is '+gameBoard.gameBoardGrid[3].owner)
        }
    if (gameBoard.gameBoardGrid[6].owner == 'X'|gameBoard.gameBoardGrid[6].owner ==  'O' &&
        gameBoard.gameBoardGrid[7].owner == 'X'|gameBoard.gameBoardGrid[7].owner == 'O' &&
        gameBoard.gameBoardGrid[8].owner == 'X'|gameBoard.gameBoardGrid[8].owner == 'O'){
            console.log('Winner is '+gameBoard.gameBoardGrid[6].owner)
        }
    //Check for columns
    if (gameBoard.gameBoardGrid[0].owner == 'X'|gameBoard.gameBoardGrid[0].owner ==  'O' &&
        gameBoard.gameBoardGrid[3].owner == 'X'|gameBoard.gameBoardGrid[3].owner == 'O' &&
        gameBoard.gameBoardGrid[6].owner == 'X'|gameBoard.gameBoardGrid[6].owner == 'O'){
            console.log('Winner is '+gameBoard.gameBoardGrid[6].owner)
        }
    if (gameBoard.gameBoardGrid[1].owner == 'X'|gameBoard.gameBoardGrid[1].owner ==  'O' &&
        gameBoard.gameBoardGrid[4].owner == 'X'|gameBoard.gameBoardGrid[4].owner == 'O' &&
        gameBoard.gameBoardGrid[7].owner == 'X'|gameBoard.gameBoardGrid[7].owner == 'O'){
        console.log('Winner is '+gameBoard.gameBoardGrid[6].owner)
        }
    if (gameBoard.gameBoardGrid[2].owner == 'X'|gameBoard.gameBoardGrid[2].owner ==  'O' &&
        gameBoard.gameBoardGrid[5].owner == 'X'|gameBoard.gameBoardGrid[5].owner == 'O' &&
        gameBoard.gameBoardGrid[8].owner == 'X'|gameBoard.gameBoardGrid[8].owner == 'O'){
            console.log('Winner is '+gameBoard.gameBoardGrid[6].owner)
        }
//Check for crosses
    if (gameBoard.gameBoardGrid[0].owner == 'X'|gameBoard.gameBoardGrid[0].owner ==  'O' &&
        gameBoard.gameBoardGrid[4].owner == 'X'|gameBoard.gameBoardGrid[4].owner == 'O' &&
        gameBoard.gameBoardGrid[8].owner == 'X'|gameBoard.gameBoardGrid[8].owner == 'O'){
        console.log('Winner is '+gameBoard.gameBoardGrid[6].owner)
    }
    if (gameBoard.gameBoardGrid[2].owner == 'X'|gameBoard.gameBoardGrid[2].owner ==  'O' &&
        gameBoard.gameBoardGrid[4].owner == 'X'|gameBoard.gameBoardGrid[4].owner == 'O' &&
        gameBoard.gameBoardGrid[6].owner == 'X'|gameBoard.gameBoardGrid[6].owner == 'O'){
            console.log('Winner is '+gameBoard.gameBoardGrid[6].owner)
        }
}