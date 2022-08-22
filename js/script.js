document.getElementById('btn-bappe').addEventListener('click',function(){
    let orderList = document.getElementById('order-list');
    let li = document.createElement('li');
    li.innerText = 'Kylian Mbappé';
    orderList.appendChild(li);
    let button = document.getElementById('btn-bappe');
    button.disabled = true;
})
document.getElementById('btn-neymar').addEventListener('click',function(){
    let orderList = document.getElementById('order-list');
    let li = document.createElement('li');
    li.innerText = 'Neymar Jr';
    orderList.appendChild(li);
    let button = document.getElementById('btn-neymar');
    button.disabled = true;
})
document.getElementById('btn-messi').addEventListener('click',function(){
    let orderList = document.getElementById('order-list');
    let li = document.createElement('li');
    li.innerText = 'Lionel Messi';
    orderList.appendChild(li);
    let button = document.getElementById('btn-messi');
    button.disabled = true;
})
document.getElementById('btn-sanches').addEventListener('click',function(){
    let orderList = document.getElementById('order-list');
    let li = document.createElement('li');
    li.innerText = 'Renato Sanches';
    orderList.appendChild(li);
    let button = document.getElementById('btn-sanches');
    button.disabled = true;
})
document.getElementById('btn-vitor').addEventListener('click',function(){
    let orderList = document.getElementById('order-list');
    let li = document.createElement('li');
    li.innerText = 'Vítor Machado';
    orderList.appendChild(li);
    let button = document.getElementById('btn-vitor');
    button.disabled = true;
})
document.getElementById('btn-ramos').addEventListener('click',function(){
    let orderList = document.getElementById('order-list');
    let li = document.createElement('li');
    li.innerText = 'Sergio Ramos';
    orderList.appendChild(li);
    let button = document.getElementById('btn-ramos');
    button.disabled = true;
})

//
document.getElementById('per-player-cal').addEventListener('click',function(){
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
})

document.getElementById('total-cal').addEventListener('click',function(){
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
})