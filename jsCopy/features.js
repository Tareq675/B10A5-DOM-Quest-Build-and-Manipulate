document.getElementById('show-add-money-form').addEventListener('click', function(){
    console.log('show add money button click')
    showSectionById('add-money-form');
})

document.getElementById('show-cash-out-form').addEventListener('click', function(){
    console.log('show cash out button click');
    showSectionById('cash-out-form');
})

document.getElementById('show-transaction-history').addEventListener('click', function(){
    console.log('show transaction button');
    showSectionById('transaction-section');

})