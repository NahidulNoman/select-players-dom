// get select and disabled button function.
function callAddButton(id,value){
    let nodeList = document.querySelectorAll('li');
    let nodeLength = nodeList.length;
    if(nodeLength < 5){
        let orderList = document.getElementById('order-list');
        let li = document.createElement('li');
        li.innerText = value;
        orderList.appendChild(li);
    }
    else{
        alert('you add maximum player!!');
    }
    let button = document.getElementById(id);
    button.disabled = true;
}
function calculateTotalExpenses(){
    let nodeList = document.querySelectorAll('li');
    let nodeLength = nodeList.length;

    let getPerPlayer = document.getElementById('per-player');
    let getPerPlayerString = getPerPlayer.value;
    let perPlayer = parseInt(getPerPlayerString);

    let totalLength = nodeLength * perPlayer;

    let playerExpenses = document.getElementById('player-expenses');
    let playerExpensesString = playerExpenses.innerText;
    parseInt(playerExpensesString);

    playerExpenses.innerText = totalLength;
}

function teamCost(){
    let playerCost = document.getElementById('player-expenses');
    let playerExpensesString = playerCost.innerText;
    let player = parseInt(playerExpensesString);

    let managerCost = document.getElementById('manager');
    let managerString = managerCost.value;
    let manager = parseInt(managerString);

    let coachCost = document.getElementById('coach');
    let coachSting = coachCost.value;
    let coach = parseInt(coachSting);

    let subTotal = document.getElementById('sub-total');
    let subTotalString = subTotal.value;
    parseInt(subTotalString);

    let fullTeamCost = player + manager + coach ;
    subTotal.innerText = fullTeamCost
}