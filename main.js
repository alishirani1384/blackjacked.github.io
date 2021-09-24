
let Cards=[]
let sum=0
let blackJack=false
let isAlive=false
let massege=""
let message=document.getElementById("message")
let sumEl=document.getElementById("sum")
let cardsel=document.getElementById("cardel")


function randomcard(){
    let randomNumber= Math.floor(Math.random()*13)+1
    if(randomNumber>10){
        return 10
    }else if(randomNumber===1){
        return 11
    }else{
        return randomNumber
    }    
}

function startGame(){
    isAlive=true
    let firstCard=randomcard()
    let secondCard=randomcard()
    Cards=[firstCard, secondCard]
    sum=firstCard+secondCard

    renderGame()
    
}

function renderGame() {
    cardsel.textContent="Cards: "
    for (let i = 0; i < Cards.length; i++) {
        cardsel.textContent+=Cards[i]+" "   
    }
if(sum<=20){
    massege="do you want to draw a new card!🤔"    
}else if(sum===21){
    blackJack=true
    massege="you win!😍"
}else{
    isAlive=false
    massege="you are out of the game!😭"
}
console.log();
message.textContent=massege
sumEl.textContent="Sum: "+sum

}
function newcard() {
    console.log("drawing a new card");
    let thirdCard=randomcard()
    Cards.push(thirdCard)
    console.log(Cards);
    sum+=thirdCard
    renderGame()
    
}