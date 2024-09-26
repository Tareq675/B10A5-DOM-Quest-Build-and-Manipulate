document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    let cashOut = getInputFieldValueById('input-cash-out');
    let pinNumber = getInputFieldValueById('input-cash-out-pin');
    //console.log('inside the click handler', cashOut, pinNumber);

    if(pinNumber === 1234){
        let balance = getTextFieldValueById('account-balance');
        let newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        let div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 class="text-2xl font-bold">Cash Out</h4>
        <p>${cashOut} withdraw. New Balance ${newBalance}<p>

        `
        document.getElementById('transaction-container').appendChild(div);
    
    }
    else{
        alert('No money for you....DGM')
    }

})
