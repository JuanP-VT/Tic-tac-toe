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
        divField.id =(index)
        divField.classList.add('grid')
        const objField = gridFactory(divField,'Available','noOne')
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






