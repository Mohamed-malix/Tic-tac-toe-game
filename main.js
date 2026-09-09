

let board= document.querySelectorAll('.board');
board.forEach(item => {
    item.addEventListener('click',e => {
        checkIndex(e.target);
    })

    function checkIndex(tar){
       addxo(Array.from(board).indexOf(tar));
       updateTurn();
    }
})





function createPlayer(nameOf){
    let name=nameOf;
    let score=0;

    let getScore= () => score;
    let riseScore= () => ++score;

    return{
        name,
        getScore,
        riseScore,
    }
}




let gameBoard= new Array(9).fill(null);
const gameObject= ( () => {
    let tie=0;
    let turn=1;
    getTie= () => tie;
    riseTie= () => ++tie;

    const player =createPlayer('player');
    const computer =createPlayer('computer');
    
    return {
        turn,
        getTie,
        riseTie,
        player,
        computer};

})();


localStorage.setItem('board',JSON.stringify(gameBoard) );


function updateTurn(){

    if(gameObject.turn==1){
       gameObject.turn=2;
    }
    else if(gameObject.turn==2){
        gameObject.turn=1;

    }else{
        alert('Invalid turn number');
    }
}





function addxo(index){
 

        if(gameObject.turn==1){
      
            if(gameBoard[index]==null){
                gameBoard[index]='X';
                Array.from(board)[index].textContent='X';
            }
            else{
                alert("There is already a value in this place!")
            }

           if(gameBoard[0]=='X' && gameBoard[1]=='X' && gameBoard[2]=='X'){
            gameObject.player.riseScore();
            display();
            console.log('X win');
           
           }
           else if(gameBoard[3]=='X' && gameBoard[4]=='X' && gameBoard[5]==='X'){
            gameObject.player.riseScore();
            display();
            console.log('X win');
            
           }
            else if(gameBoard[6]=='X' && gameBoard[7]=='X' && gameBoard[8]==='X'){
            gameObject.player.riseScore();
            display();
            console.log('X win');

           }
           else if(gameBoard[0]=='X' && gameBoard[3]=='X' && gameBoard[6]==='X'){
            gameObject.player.riseScore();
            display();
            console.log('X win');
            
           }
           else if(gameBoard[1]=='X' && gameBoard[4]=='X' && gameBoard[7]==='X'){
            gameObject.player.riseScore();
            display();
            console.log('X win');
            
           }
           else if(gameBoard[2]=='X' && gameBoard[5]=='X' && gameBoard[8]==='X'){
            gameObject.player.riseScore();
            display();
            console.log('X win');

           }
           else if(gameBoard[0]=='X' && gameBoard[4]=='X' && gameBoard[8]==='X'){
            gameObject.player.riseScore();
            display();
            console.log('X win');
           
           }
           else if(gameBoard[2]=='X' && gameBoard[4]=='X' && gameBoard[6]==='X'){
            gameObject.player.riseScore();
            display();
            console.log('X win');
            
           }
           

        }
        else if(gameObject.turn==2){


            if(gameBoard[index]==null){
                gameBoard[index]='O';
                Array.from(board)[index].textContent='O';
            }
            else{
                alert("There is already a value in this place!")
            }
            
           if(gameBoard[0]=='O' && gameBoard[1]=='O' && gameBoard[2]==='O'){
            gameObject.computer.riseScore();
            display();
            console.log('O win');
           
           }
           else if(gameBoard[3]=='O' && gameBoard[4]=='O' && gameBoard[5]==='O'){
            gameObject.computer.riseScore();
            display();
            console.log('O win');
          
           }
            else if(gameBoard[6]=='O' && gameBoard[7]==='O' && gameBoard[8]==='O'){
            gameObject.computer.riseScore();
            display();
            console.log('O win');
           
           }
           else if(gameBoard[0]=='O' && gameBoard[3]=='O' && gameBoard[6]==='O'){
            gameObject.computer.riseScore();
            display();
            console.log('O win');
         
           }
           else if(gameBoard[1]=='O' && gameBoard[4]=='O' && gameBoard[7]==='O'){
            gameObject.computer.riseScore();
            display();
            console.log('O win');
          
           }
           else if(gameBoard[2]=='O' && gameBoard[5]=='O' && gameBoard[8]==='O'){
            gameObject.computer.riseScore();
            display();
            console.log('O win');
            
           }
           else if(gameBoard[0]=='O' && gameBoard[4]=='O' && gameBoard[8]==='O'){
            gameObject.computer.riseScore();
            display();
            console.log('O win');
        
           }
           else if(gameBoard[2]=='O' && gameBoard[4]=='O' && gameBoard[6]==='O'){
            gameObject.computer.riseScore();
            display();
            console.log('O win');
           }


        }
        if(!gameBoard.includes(null)){
            gameObject.riseTie();
            display();
        }

            
}
    


document.querySelector('.clear').addEventListener('click', function clear(){
    gameBoard.fill(null);

    board.forEach( item => {
        item.textContent='';
    })
})





function display(){
    let dPlayer= document.querySelector('.player');
    let dComputer= document.querySelector('.computer');
    let dTie= document.querySelector('.tie');

    dPlayer.textContent=`Player: ${gameObject.player.getScore()}`;
    dComputer.textContent=`Computer: ${gameObject.computer.getScore()}`;
    dTie.textContent=`Tie: ${gameObject.getTie()}`;
}

display();