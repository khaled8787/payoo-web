document.getElementById('add-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyPin = 1803;
    const bank = document.getElementById('bank').value;
    const bankNumber = document.getElementById('bank-number').value;
    const moneyAmount = parseInt(document.getElementById('amount').value);
    const pinForAddMoney = parseInt(document.getElementById('pin-for-money').value);
    

    const haveMoney = parseInt(document.getElementById('have-money').innerText);

    if(bankNumber.length < 11){
        alert('please provide a valid account number')
        return;
    }

    if(pinForAddMoney !== addMoneyPin){
        alert('please provide valid pin number')
        return;
    }

    const totalBalance = haveMoney + moneyAmount;
    document.getElementById('have-money').innerText = totalBalance
})