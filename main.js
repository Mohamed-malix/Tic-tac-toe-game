



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

let gameBoard=['','','','','','','','',''];
const player1 =createPlayer('player1');
const player2 =createPlayer('player2');






function addxo(){

    
    let n=0;
    for(let i=0; i<9; i++){

        if(i%2==0){

            n= Number(prompt("the place"));
            gameBoard[n]='X';
            console.log(gameBoard[n]);


           if(gameBoard[0]=='X' && gameBoard[1]=='X' && gameBoard[2]=='X'){
            console.log('X win');
            break;
           }
           else if(gameBoard[3]=='X' && gameBoard[4]=='X' && gameBoard[5]==='X'){
            console.log('X win');
            break;
           }
            else if(gameBoard[6]=='X' && gameBoard[7]=='X' && gameBoard[8]==='X'){
            console.log('X win');
            break;
           }
           else if(gameBoard[0]=='X' && gameBoard[3]=='X' && gameBoard[6]==='X'){
            console.log('X win');
            break;
           }
           else if(gameBoard[1]=='X' && gameBoard[4]=='X' && gameBoard[7]==='X'){
            console.log('X win');
            break;
           }
           else if(gameBoard[2]=='X' && gameBoard[5]=='X' && gameBoard[8]==='X'){
            console.log('X win');
            break;
           }
           else if(gameBoard[0]=='X' && gameBoard[4]=='X' && gameBoard[8]==='X'){
            console.log('X win');
            break;
           }
           else if(gameBoard[2]=='X' && gameBoard[4]=='X' && gameBoard[6]==='X'){
            console.log('X win');
            break;
           }
           

        }
        else{

            n= Number(prompt("the place"));
            gameBoard[n]='O';
            console.log(gameBoard[n]);
            
            
           if(gameBoard[0]=='O' && gameBoard[1]=='O' && gameBoard[2]==='O'){
            console.log('O win');
            break;
           }
           else if(gameBoard[3]=='O' && gameBoard[4]=='O' && gameBoard[5]==='O'){
            console.log('O win');
            break;
           }
            else if(gameBoard[6]=='O' && gameBoard[7]==='O' && gameBoard[8]==='O'){
            console.log('O win');
            break;
           }
           else if(gameBoard[0]=='O' && gameBoard[3]=='O' && gameBoard[6]==='O'){
            console.log('O win');
            break;
           }
           else if(gameBoard[1]=='O' && gameBoard[4]=='O' && gameBoard[7]==='O'){
            console.log('O win');
            break;
           }
           else if(gameBoard[2]=='O' && gameBoard[5]=='O' && gameBoard[8]==='O'){
            console.log('O win');
            break;
           }
           else if(gameBoard[0]=='O' && gameBoard[4]=='O' && gameBoard[8]==='O'){
            console.log('O win');
            break;
           }
           else if(gameBoard[2]=='O' && gameBoard[4]=='O' && gameBoard[6]==='O'){
            console.log('O win');
            break;
           }


        }


          console.log(gameBoard);
          if(i+1==9){
            console.log('There is no winner');
        }
            
     }
    
}

addxo();