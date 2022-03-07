const gameBoard = (() =>{
    const gameBoardGrid = []
    function createGrid(status,element){
        return{
            status,
            element
        }
    }
    for (let index = 0; index < 9; index++) {
        const selector = 'n'+index
        element = document.getElementById(selector)
        const gridd = createGrid('Available',element,selector)
        gameBoardGrid.push(gridd)
    }
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



