
var scores, roundScore, activePlayer, gamePlaying, previousScore, dice1, dice2, clickCount;

init();
document.querySelector(".btn-roll").addEventListener("click", function(){ 
            //Random Number 
    if(gamePlaying){
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;
        //Display the result 
        var diceDOM1 = document.querySelector(".dice-1");
        var diceDOM2 = document.querySelector(".dice-2");
         diceDOM1.style.display = "block";
        diceDOM1.src = 'dice-' + dice1 + ".png";
        diceDOM2.style.display = "block";
        diceDOM2.src = 'dice-' + dice2 + ".png";
        roundScore = dice1 + dice2;                
        addScore();
        if(clickCount == 10) {
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");
            document.querySelector(".dice-1").style.display = "none";
            document.querySelector(".dice-2").style.display = "none";
            activePlayer = 1;
        } else if(clickCount == 11){
            roundCount = 1;
            addScore();
        } else if(clickCount == 21){
            gamePlaying = false;
            document.querySelector(".dice-1").style.display = "none";
            document.querySelector(".dice-2").style.display = "none";
            document.getElementById("current-1").textContent = "0";
            if(scores[0] > scores[1]){
                document.querySelector("#name-0").textContent = "WINNER!!";
                document.querySelector(".player-0-panel").classList.remove("active");
                document.querySelector(".player-0-panel").classList.add("winner");
            } else if (scores[0] < scores[1]){
                document.querySelector("#name-1").textContent = "WINNER!!"
                document.querySelector(".player-1-panel").classList.remove("active");
                document.querySelector(".player-1-panel").classList.add("winner");
            } else {
                 document.querySelector(".same-score").style.display = "block";
            }                           
            
            document.querySelector(".player-1-panel").classList.remove("active");
            
        }
        roundCount++;
        clickCount++;                
    }
});    

function addScore(){
    document.getElementById("current-" + activePlayer).textContent = roundCount;
    if(roundScore == roundCount +1){
        scores[activePlayer] += roundScore;
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    }
}

document.querySelector(".btn-new").addEventListener("click", init);
                               
function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    roundCount = 1;
    clickCount = 0;
    
    document.querySelector(".dice-1").style.display = "none";
    document.querySelector(".dice-2").style.display = "none";
    document.querySelector(".same-score").style.display = "none";
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    
}
