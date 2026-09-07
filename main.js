



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
console.log(player2)





function addxo(){

    let i=0;
    while(i<9){
        let n=0;

        if(i%2==0){
           if(gameBoard[1]=='X' && gameBoard[2]=='X' && gameBoard[3]=='X'){
            console.log('X win');
            break;
           }
           else if(gameBoard[4]=='X' && gameBoard[5]=='X' && gameBoard[6]==='X'){
            console.log('X win');
            break;
           }
            else if(gameBoard[7]=='X' && gameBoard[8]=='X' && gameBoard[9]==='X'){
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
           else if(gameBoard[3]=='X' && gameBoard[6]=='X' && gameBoard[9]==='X'){
            console.log('X win');
            break;
           }
           else if(gameBoard[1]=='X' && gameBoard[5]=='X' && gameBoard[9]==='X'){
            console.log('X win');
            break;
           }
           else if(gameBoard[3]=='X' && gameBoard[5]=='X' && gameBoard[7]==='X'){
            console.log('X win');
            break;
           }
           else{
                n= Number(prompt("the place"));
                gameBoard[n]='X';
           }
           

        }
        else{
            if(i%2==0){
           if(gameBoard[1]=='X' && gameBoard[2]=='X' && gameBoard[3]==='O'){
            console.log('O win');
            break;
           }
           else if(gameBoard[4]=='X' && gameBoard[5]=='X' && gameBoard[6]==='O'){
            console.log('O win');
            break;
           }
            else if(gameBoard[7]=='X' && gameBoard[8]==='X' && gameBoard[9]==='O'){
            console.log('O win');
            break;
           }
           else if(gameBoard[1]=='X' && gameBoard[4]=='X' && gameBoard[7]==='O'){
            console.log('O win');
            break;
           }
           else if(gameBoard[2]=='X' && gameBoard[5]=='X' && gameBoard[8]==='O'){
            console.log('O win');
            break;
           }
           else if(gameBoard[3]=='X' && gameBoard[6]=='X' && gameBoard[9]==='O'){
            console.log('O win');
            break;
           }
           else if(gameBoard[1]=='X' && gameBoard[5]=='X' && gameBoard[9]==='O'){
            console.log('O win');
            break;
           }
           else if(gameBoard[3]=='X' && gameBoard[5]=='X' && gameBoard[7]==='O'){
            console.log('O win');
            break;
           }
           else{

                n= Number(prompt("the place"));
                gameBoard[n]='O';
           }

          }


          if(i+1==9){
            console.log('There is no winner');
          }
            i++;
        }
    }
}

addxo();