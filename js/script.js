// add button clicked and call function from utilities.

document.getElementById('btn-bappe').addEventListener('click',function(){
    callAddButton('btn-bappe','Kylian Mbappé');
})
document.getElementById('btn-neymar').addEventListener('click',function(){
    callAddButton('btn-neymar','Neymar Jr');
})
document.getElementById('btn-messi').addEventListener('click',function(){
    callAddButton('btn-messi','Lionel Messi');
})
document.getElementById('btn-sanches').addEventListener('click',function(){
    callAddButton('btn-sanches','Renato Sanches');
})
document.getElementById('btn-vitor').addEventListener('click',function(){
    callAddButton('btn-vitor','Vítor Machado');
})
document.getElementById('btn-ramos').addEventListener('click',function(){
    callAddButton('btn-ramos','Sergio Ramos');
})

// calculate total expenses and call function from utilities.

document.getElementById('per-player-cal').addEventListener('click',function(){
    calculateTotalExpenses();
})

// total team cost calculate and call function from utilities.

document.getElementById('total-cal').addEventListener('click',function(){
    teamCost();
})