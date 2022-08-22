document.getElementById('btn-bappe').addEventListener('click',function(){
    let orderList = document.getElementById('order-list');
    let li = document.createElement('li');
    li.innerText = 'Kylian Mbappé';
    orderList.appendChild(li);
})
document.getElementById('btn-neymar').addEventListener('click',function(){
    let orderList = document.getElementById('order-list');
    let li = document.createElement('li');
    li.innerText = 'Neymar Jr';
    orderList.appendChild(li);
})
document.getElementById('btn-messi').addEventListener('click',function(){
    let orderList = document.getElementById('order-list');
    let li = document.createElement('li');
    li.innerText = 'Lionel Messi';
    orderList.appendChild(li);
})
document.getElementById('btn-sanches').addEventListener('click',function(){
    let orderList = document.getElementById('order-list');
    let li = document.createElement('li');
    li.innerText = 'Renato Sanches';
    orderList.appendChild(li);
})
document.getElementById('btn-vitor').addEventListener('click',function(){
    let orderList = document.getElementById('order-list');
    let li = document.createElement('li');
    li.innerText = 'Vítor Machado';
    orderList.appendChild(li);
})
document.getElementById('btn-ramos').addEventListener('click',function(){
    let orderList = document.getElementById('order-list');
    let li = document.createElement('li');
    li.innerText = 'Sergio Ramos';
    orderList.appendChild(li);
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

// document.getElementById('total-cal').addEventListener('click',function(){
//     let playerCost = document.getElementById('player-expenses');
//     let playerExpensesString = playerCost.innerText;

// })