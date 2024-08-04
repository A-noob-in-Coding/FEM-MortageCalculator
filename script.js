var mortageAmount = 0
var mortageTerm = 0
var mortageInterest = 0
var totalResult = 0
var monthlyResult = 0


let error_amount = document.getElementById("error-amount")
let error_term = document.getElementById("error-term")
let error_interest = document.getElementById("error-interest")
let mortageAmountEl = document.getElementById("mortage-amount-input")
let mortageInterestEl = document.getElementById("mortage-interest-rate")
let mortageTermEl = document.getElementById("mortage-term")
let monthy_repayment = document.getElementById("repayment-span")
let total_repayment = document.getElementById("total-repayment-span")
let clear_btn = document.getElementById("clear-button")
let mortageRadio = document.querySelectorAll('input[name="mortgage-type"]');
let calculateButton = document.getElementById("calculate-btn-el")
let interestRadio = document.getElementById("interest-only")
let empty = document.getElementById("empty")
let completed = document.getElementById("complete")
empty.style.display = "flex"
completed.style.display = "none"


function clear(){
    monthy_repayment.innerText = "0.00"
    total_repayment.innerText = "0.00"
    console.log("fd")
    mortageAmountEl.value = 0
    mortageTermEl.value = 0
    mortageInterestEl.value = 0
    mortageAmount = 0
    mortageTerm = 0
    mortageInterest = 0
    totalResult = 0
    monthlyResult = 0
    error_amount.style.display = "none"
    error_interest.style.display = "none"
    error_term.style.display = "none"
    empty.style.display = "flex"
    completed.style.display = "none"
}

clear_btn.addEventListener("click", ()=>{
    clear()
})

mortageAmountEl.addEventListener("input",()=>{
    mortageAmount =  parseFloat( mortageAmountEl.value)
})

mortageTermEl.addEventListener("input",()=>{
    mortageTerm = parseFloat(mortageTermEl.value)
})

mortageInterestEl.addEventListener("input",()=>{
    mortageInterest = parseFloat(mortageInterestEl.value)
})
function calculateMortrage(amount, interest = 0, term) {
    let totalRepayment = 0;
    let monthlyRepayment = 0;
    if (!interestRadio.checked) {
        monthlyRepayment = amount/(term*12)
        totalRepayment = monthlyRepayment * (term*12)
    } else {
        monthlyInterest = (interest/100)/12
        monthlyRepayment = amount*(monthlyInterest* Math.pow(monthlyInterest+1,term*12))/(Math.pow(1+monthlyInterest,term*12)-1)
        totalRepayment = monthlyRepayment * term * 12
    }
    totalResult = totalRepayment.toFixed(2);
    monthlyResult = monthlyRepayment.toFixed(2);
}

calculateButton.addEventListener("click",()=>{ 
    if(emptyHandler() == false){   
        calculateMortrage(mortageAmount,mortageInterest,mortageTerm)
        total_repayment.innerText = totalResult
        monthy_repayment.innerText = monthlyResult
        completed.style.display = "block"
        empty.style.display = "none"        
    }
})

function emptyHandler(){
    var flag = false
    if(mortageAmountEl.value == "" || mortageAmountEl.value == 0){
        error_amount.style.display = "block"
        flag = true
    }
    else{
        
        error_amount.style.display = "none"
    }
    if(mortageTermEl.value == "" || mortageTermEl.value == 0){
        error_term.style.display = "block"
        flag = true
    }
    else{
        error_term.style.display = "none"
        
    }
    if(mortageInterestEl.value == "" || mortageInterestEl.value == 0){
        error_interest.style.display = "block"
        flag = true
    }
    else{
        error_interest.style.display = "none"
        
    }
    return flag
}