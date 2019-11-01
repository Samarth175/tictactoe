var currentPlayer = 0;
var currentStatus = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
var clickSound = new Audio("./audio/click.wav");
var overSound = new Audio("./audio/over.wav");

function itemClicked(item) {
    const playerValue = (currentPlayer) ?"O":"X";
    const itemId = parseInt(item.id);

    //Check whether the clicked position is vacant or not
    if(currentStatus[itemId]==-1){
        item.innerHTML = playerValue;
        currentStatus[itemId] = currentPlayer;
        clickSound.play();
    }else{
        return alert("Invaid Move");
    }

    //Check for winning condition
    if(hasWon()){
        overSound.play();
        alert("Player " + playerValue + " has won the game!");
        resetGame();
        return;
    }

    //Change the player 
    currentPlayer = !currentPlayer;
}

function hasWon(){
    if(currentStatus[0]!=-1 && currentStatus[0]==currentStatus[1] && currentStatus[0]==currentStatus[2])
        return true;
    else if(currentStatus[3]!=-1 && currentStatus[3]==currentStatus[4] && currentStatus[3]==currentStatus[5])
        return true;
    else if(currentStatus[6]!=-1 && currentStatus[6]==currentStatus[7] && currentStatus[6]==currentStatus[8])
        return true;
    else if(currentStatus[0]!=-1 && currentStatus[0]==currentStatus[3] && currentStatus[0]==currentStatus[6])
        return true;
    else if(currentStatus[1]!=-1 && currentStatus[1]==currentStatus[4] && currentStatus[1]==currentStatus[7])
        return true;
    else if(currentStatus[2]!=-1 && currentStatus[2]==currentStatus[5] && currentStatus[2]==currentStatus[8])
        return true;
    else if(currentStatus[0]!=-1 && currentStatus[0]==currentStatus[4] && currentStatus[0]==currentStatus[8])
        return true;
    else if(currentStatus[2]!=-1 && currentStatus[2]==currentStatus[4] && currentStatus[2]==currentStatus[6])
        return true;
    return false;
}

function resetGame(){
    currentPlayer = 0;
    currentStatus = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
    const items = document.querySelectorAll("td");
    items.forEach(item => {
        item.innerHTML = "<img src='icon.png' alt='--'>";
    });
}