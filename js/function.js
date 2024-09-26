function getInputFieldValueById(id){
    let inputValue = document.getElementById(id).value; // get string type value
    let inputNumber = parseFloat(inputValue); // convert string to number value.
    
    return inputNumber;
}

function getTextFieldValueById(id){
    let textValue = document.getElementById(id).innerText;
    let textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    // hide all the sections
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    // show the section with the provide id as parameter

    document.getElementById(id).classList.remove('hidden');


}