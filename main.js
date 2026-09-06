
// let span1 = document.querySelector('.span1')
// let span2 = document.querySelector('.span2')
// let span3 = document.querySelector('.span3')
// let span4 = document.querySelector('.span4')
// let span5 = document.querySelector('.span5')
// let span6 = document.querySelector('.span6')
// let span7 = document.querySelector('.span7')
// let span8 = document.querySelector('.span8')
// let span9 = document.querySelector('.span9')






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

const player1 =createPlayer('player1');
const player2 =createPlayer('player2');
console.log(player2)

