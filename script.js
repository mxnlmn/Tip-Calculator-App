const inputBill = document.getElementById('input_bill');

const tipBtn = Array.from(document.getElementsByClassName('percentage'))
const tipInput = document.getElementById('input_percentage');

const peopleNumber = document.getElementById('input_number_of_people');

const tipAmount = document.getElementById('tip_amount');
const tipTotal = document.getElementById('total_tip');

const resetBtn = document.getElementById('reset_button')
inputBill.addEventListener('input', function(){
    tipAmount.innerHTML = inputBill.value;
})
for(let i = 0; i < tipBtn.length; i++){
    tipBtn[i].addEventListener('click', function(){
        tipAmount.innerHTML = inputBill.value;
        tipAmount.innerHTML = parseFloat(tipAmount.innerHTML) + (parseFloat(tipAmount.innerHTML)*parseFloat(tipBtn[i].innerHTML)/100)
    })
}

tipInput.addEventListener('input', function(){
    tipAmount.innerHTML = inputBill.value;
    tipAmount.innerHTML = parseFloat(tipAmount.innerHTML) + (parseFloat(tipAmount.innerHTML) * parseFloat(tipInput.value)/100);
    if(tipInput.value == ''){
        tipAmount.innerHTML = inputBill.value;
    }
})

peopleNumber.addEventListener('input', function(){
    if(peopleNumber == ''){
        tipTotal.innerHTML = 0;
    }
    else{
        tipTotal.innerHTML = parseFloat(peopleNumber.value) * parseFloat(tipAmount.innerHTML) 
    }
})

resetBtn.addEventListener('click', function(){
    inputBill.value = '';
    tipInput.value = '';
    peopleNumber.value = '';

    tipAmount.innerHTML = 0;
    tipTotal.innerHTML = 0;

})
