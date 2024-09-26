document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();

    let addMoney = getInputFieldValueById('input-add-money')
    let pinNumber = getInputFieldValueById('input-pin-number');
    console.log('add money inside addMoney2.js:', addMoney, pinNumber);

    //wrong way to verify, don't try it at your serious website.
    if(pinNumber === 1234){
       let balance = getTextFieldValueById('account-balance') ;
       let newBalance = balance + addMoney;
       
       document.getElementById('account-balance').innerText = newBalance;

       // add to transaction history
       let p = document.createElement('p');
       p.innerText = `Added: ${addMoney} tk. New Balance: ${newBalance}`
       console.log(p);

       //should be a common function
       document.getElementById('transaction-container').appendChild(p);

    }
    else {
        alert('Failed to add the money.');
    }


} )