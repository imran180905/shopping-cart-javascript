var phoneCase = (increase,elementId)=>{
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const currentInputFieldInt = parseInt(inputFieldString);
    var caseNumber;
    if(increase){
        caseNumber = (currentInputFieldInt + 1);
    

    }
    else{
        caseNumber= currentInputFieldInt -1;
    }
    inputField.value = caseNumber;
    return caseNumber;

}



var caseCost= (caseNumber) =>{
    const caseTotalPrice = caseNumber * 59;
    const pCost = document.getElementById('case-total');
    
    pCost.innerText = caseTotalPrice;
    return caseTotalPrice;
 }


// press plus button
document.getElementById('btn-case-plus').addEventListener('click',function(){
    const caseNumber = phoneCase(true,'case-number-field');
    caseCost(caseNumber);
    calculateSubTotal();
    
    
});
// press minius button
document.getElementById('btn-case-minus').addEventListener('click',() =>{
    const caseNumber = phoneCase(false,'case-number-field');
    caseCost(caseNumber);
    calculateSubTotal();
    
  
    
})