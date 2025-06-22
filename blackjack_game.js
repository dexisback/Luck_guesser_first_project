//min value=2
//max value=11

// console.log(firstCard+"=firstcard")
// console.log(secondCard+"=secondcard")

// let blackjack_checker=false //checker for blacjackked or not
// let isAlive=true //checker for if the game is still on

function play_game(){
    let firstCard=Math.floor(Math.random()*10)+2
    let secondCard=Math.floor(Math.random()*10)+2
    let message=""
    let sum=firstCard+secondCard
    console.log("First card:", firstCard);
    console.log("Second card:", secondCard);
    console.log("Sum:", sum);
    
    if(sum<21){
        message="Your total currently is: "+sum+" . Do you wanna draw a new card?"
        
    }
    else if(sum===21){
        message="You got an exact "+sum+" !You have won the blackjack game!"
        // blackjack_checker=true
    }
    else {
        message="Whoops, your total is "+sum+ "You're out of the game"
        // isAlive=false
    }
    //displaying the result:
    document.getElementById("result").textContent=message;
    document.getElementById("card1").textContent="Card 1 is: "+ firstCard;
    document.getElementById("card2").textContent="Card 2 is: "+ secondCard;
}


