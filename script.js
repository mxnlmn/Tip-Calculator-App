let tipAmount = document.getElementById('tip_amount');
let totalTip = document.getElementById('total_tip');

const inputBill = document.getElementById('input_bill');
const inputNumberPeople = document.getElementById('input_number_of_people');

const fivePer = document.getElementById('5');
const tenPer = document.getElementById('10');
const fifteenthPer = document.getElementById('15');
const twentyPer = document.getElementById('25');
const fiftyPer = document.getElementById('50');
const inputPer = document.getElementById('input_percentage');

const resetBtn = document.getElementById('reset_button');

let tip = 0;
let calculationTipAmount;
let total;
let calculationTotal;

fivePer.addEventListener('click', function(){
    tip = 5;
    calculationTipAmount =  (tip * inputBill.value)/100;
    tipAmount.innerHTML = inputBill.value + calculationTipAmount;
    total = inputBill.value - calculationTipAmount;
    inputPer.value = '';
})

tenPer.addEventListener('click', function(){
    tip = 10;
    calculationTipAmount =  (tip * inputBill.value)/100;
    tipAmount.innerHTML = inputBill.value + calculationTipAmount;
    total = inputBill.value - calculationTipAmount;
    inputPer.value = '';
})
fifteenthPer.addEventListener('click', function(){
    tip = 15;
    calculationTipAmount =  (tip * inputBill.value)/100;
    tipAmount.innerHTML = inputBill.value + calculationTipAmount;
    total = inputBill.value - calculationTipAmount;
    inputPer.value = '';
})
twentyPer.addEventListener('click', function(){
    tip = 20;
    calculationTipAmount =  (tip * inputBill.value)/100;
    tipAmount.innerHTML = inputBill.value + calculationTipAmount;
    total = inputBill.value - calculationTipAmount;
    inputPer.value = '';
})
fiftyPer.addEventListener('click', function(){
    tip = 50;
    calculationTipAmount =  (tip * inputBill.value)/100;
    tipAmount.innerHTML = inputBill.value + calculationTipAmount;
    total = inputBill.value - calculationTipAmount;
    inputPer.value = '';
})

inputPer.addEventListener('input', function(){
    tip = inputPer.value;
    calculationTipAmount =  (tip * inputBill.value)/100;
    tipAmount.innerHTML = inputBill.value + calculationTipAmount;
    total = inputBill.value - calculationTipAmount;
})

if(inputBill.value == undefined){
    tipAmount = '0';
    
}
else{
    inputBill.addEventListener('input',function(){
        tipAmount.innerHTML = Math.round(inputBill.value);
    })

   
}
if(inputNumberPeople.value == undefined){
    totalTip = '0';
}
else{
    inputNumberPeople.addEventListener('input', function(){
        totalTip.innerHTML = Math.round(inputNumberPeople.value * total);
    })
}

resetBtn.addEventListener('click', function(){
    tip = 0;
    inputBill.value = 0;
    inputNumberPeople.value = 0;
    totalTip.innerHTML = 0;
    tipAmount.innerHTML = 0;
    inputPer.value = '';

})




