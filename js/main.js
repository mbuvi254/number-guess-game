let ranNo;
let remAttempts = 10;
let score = 0;


document.getElementById("gamePage").style.display = "none";

function newGame() {
    ranNo = Math.floor(Math.random() * 100) + 1;
    remAttempts = 10;
    document.getElementById("ranNo").innerHTML=ranNo;
    document.getElementById("remAttempts").innerHTML = remAttempts;
    document.getElementById("result").innerHTML = "";
    document.getElementById("gamePage").style.display = "block";
    document.getElementById("newGameBtn").style.display= "none";
}


document.getElementById("gameForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const guess = parseInt(document.getElementById("noAns").value);
    const result = document.getElementById("result");

    if (guess === ranNo) {
        result.innerHTML = `Congrats ${guess} is correct!`;
        result.style.color = "green";
        score = remAttempts * 10;
        document.getElementById("score").innerHTML = score;
        document.getElementById("gameForm").style.display = "none";
        document.getElementById("newGameBtn").style.display="block";
        //C
    } 
    else if (guess < ranNo) {
        result.innerHTML = `${guess} is too low!`;
        result.style.color = "black";
        result.style.fontSize="20px";
    } 
    else if (guess > ranNo){
        result.innerHTML = `${guess} is too high!`;
        result.style.color = "red";
        result.style.fontSize="20px"; 
    }else if(guess > ranNo && guess > 100){
        result.innerHTML =`${guess} is Out of Range`;
        result.style.color ="blue"
        result.style.fontSize="20px";
    }

    remAttempts--;
    document.getElementById("remAttempts").innerHTML = remAttempts;

    if (remAttempts <= 0 && guess !== ranNo) {
        result.innerHTML = `Game Over! The number was ${ranNo}.`;
        document.getElementById("gameForm").style.display = "none";
    }

});
