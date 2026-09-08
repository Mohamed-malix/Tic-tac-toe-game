
// let board= document.querySelectorAll('.board');
// board.forEach(item => {
//     item.addEventListener(e => {
//         addxo();
//     })
// })


for(let i=0; i<5; i++){
    addxo();
    updateTurn();
}


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
gameObject= ( () => {
    let tie=0;
    let turn=1;
    incrTie= () => tie++;

    const player =createPlayer('player');
    const computer =createPlayer('computer');
    
    return {turn,incrTie,player,computer};
})();




function updateTurn(){
    if(gameObject.turn==1){
        gameObject.turn==2;
    }
    else if(gameObject.turn==2){
        gameObject.turn==1;

    }else{
        alert('Invalid turn number');
    }
}



function addxo(){
 
    let n=0;

        if(gameObject.turn==1){

            n= Number(prompt("the place"));
            gameBoard[n]='X';
            console.log(gameBoard[n]);


           if(gameBoard[0]=='X' && gameBoard[1]=='X' && gameBoard[2]=='X'){
            console.log('X win');
           
           }
           else if(gameBoard[3]=='X' && gameBoard[4]=='X' && gameBoard[5]==='X'){
            console.log('X win');
            
           }
            else if(gameBoard[6]=='X' && gameBoard[7]=='X' && gameBoard[8]==='X'){
            console.log('X win');
           }
           else if(gameBoard[0]=='X' && gameBoard[3]=='X' && gameBoard[6]==='X'){
            console.log('X win');
            
           }
           else if(gameBoard[1]=='X' && gameBoard[4]=='X' && gameBoard[7]==='X'){
            console.log('X win');
            
           }
           else if(gameBoard[2]=='X' && gameBoard[5]=='X' && gameBoard[8]==='X'){
            console.log('X win');

           }
           else if(gameBoard[0]=='X' && gameBoard[4]=='X' && gameBoard[8]==='X'){
            console.log('X win');
           
           }
           else if(gameBoard[2]=='X' && gameBoard[4]=='X' && gameBoard[6]==='X'){
            console.log('X win');
            
           }
           

        }
        else if(gameObject.turn==2){

            n= Number(prompt("the place"));
            gameBoard[n]='O';
            console.log(gameBoard[n]);
            
           if(gameBoard[0]=='O' && gameBoard[1]=='O' && gameBoard[2]==='O'){
            console.log('O win');
           
           }
           else if(gameBoard[3]=='O' && gameBoard[4]=='O' && gameBoard[5]==='O'){
            console.log('O win');
          
           }
            else if(gameBoard[6]=='O' && gameBoard[7]==='O' && gameBoard[8]==='O'){
            console.log('O win');
           
           }
           else if(gameBoard[0]=='O' && gameBoard[3]=='O' && gameBoard[6]==='O'){
            console.log('O win');
         
           }
           else if(gameBoard[1]=='O' && gameBoard[4]=='O' && gameBoard[7]==='O'){
            console.log('O win');
          
           }
           else if(gameBoard[2]=='O' && gameBoard[5]=='O' && gameBoard[8]==='O'){
            console.log('O win');
            
           }
           else if(gameBoard[0]=='O' && gameBoard[4]=='O' && gameBoard[8]==='O'){
            console.log('O win');
        
           }
           else if(gameBoard[2]=='O' && gameBoard[4]=='O' && gameBoard[6]==='O'){
            console.log('O win');
        
           }


        }
        console.log(gameBoard);

            
}
    


