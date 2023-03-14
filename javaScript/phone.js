var phone = (increase,elementId)=>{
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const currentInputFieldInt = parseInt(inputFieldString);
    var phoneNumber;
    if(increase){
        phoneNumber = (currentInputFieldInt + 1);
    

    }
    else{
        phoneNumber= currentInputFieldInt -1;
    }
    inputField.value = phoneNumber;
    return phoneNumber;

}
// total phone cost
var phoneCost= (phoneNumber) =>{
    const phoneTotalPrice = phoneNumber * 1219;
    const pCost = document.getElementById('phone-total');
    
    pCost.innerText = phoneTotalPrice;  
    return phoneTotalPrice;
    
}



// press plus button
document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const phoneNumber = phone(true,'phone-number-field');
    phoneCost(phoneNumber);
    calculateSubTotal();
    
});
// press minius button
document.getElementById('btn-phone-minus').addEventListener('click',() =>{
    const phoneNumber = phone(false,'phone-number-field');
    phoneCost(phoneNumber);
    calculateSubTotal();
  
    
})