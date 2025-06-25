


let firstCard=getrandomcard()
let secondCard=getrandomcard()
let all_cards=[firstCard,secondCard]
let sum=firstCard+secondCard
let cards_array=[firstCard,secondCard]
let message=""
let isAlive=false
let blackjack_checker=false
let username=document.getElementById("username_el")
let userinput=prompt("Enter your name here: ")
let moneyinput=prompt("Enter current stake balance:")
let money=document.getElementById("money_el")
money=moneyinput

function getrandomcard(){
    random_value=Math.floor((Math.random()*(13))+1)
    if(random_value>10){
        return 1
    }
    else if(random_value===1){      //good practice to use triple = in JS
        return 11
    }
    else{
        return random_value
    }
}

function usernameasker(){
username.textContent=userinput
}

usernameasker()

let stats={
    player_name:userinput,
    player_balance:money
}
function displayInitialCards() {
    document.getElementById("og_card1_el").textContent = "                                                Card 1:  " + firstCard;
    document.getElementById("og_card2_el").textContent = "                                                Card 2:  " + secondCard;
}
displayInitialCards()
// //displaying values of card1 and card2:
// document.getElementById("og_card1_el").textContent="                    Card1:  "+ firstCard
// document.getElementById("og_card2_el").textContent="                    Card2:  "+secondCard
//displaying the player name and account balance:
document.getElementById("stats_el").textContent=(stats.player_name)+" : $ "+(stats.player_balance)

function play_game(){
    render_game()
}

function render_game(){
    isAlive=true                //these kind of practices while dev are EXTREMELY important. If something goes wrong these are "checkpoints or checkers" you can use to debug

    //if else block for printing sum:
    if(sum<30){
        message="Your total currently is: "+sum+" . Do you wanna draw a new card?"   
        //isAlive stays true
        //blackjack checker remains false
    }
    else if(sum===30){
        message="You got an exact "+sum+" !You have won the blackjack game!"
        blackjack_checker=true
        //is alive ka koi frk nahi padta
    }
    else {
        message="Whoops, your total is "+sum+ "You're out of the game"
        isAlive=false
        //blackjack checker remains false
    }
    //displaying the result:
    document.getElementById("result").textContent=message;
}
function new_card(){
    //new_card functions only if the below criteria are met
    //player is alive AND blackjack checker is false
    if(isAlive==true && blackjack_checker==false){
    let newCard=getrandomcard()
    sum+=newCard    //sum updates correctly
    cards_array.push(newCard)  
    document.getElementById("all_cards").textContent="                                               Card History: "+cards_array.join("-")
    render_game()
}
    else{
        
        document.getElementById("checker_el").textContent="Sorry but you've already lost the game!"
    }
}
 

