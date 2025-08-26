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

// cash out section

document.getElementById('add-cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutPin = 1803;
    const haveCash = parseInt(document.getElementById('have-money').innerText);
    const pinForCashOut = parseInt(document.getElementById('pin-for-cash-out').value);

    const getAgentNumber = document.getElementById('agent-number').value;
    const getCashOutAmount = parseInt(document.getElementById('amount-for-cash-out').value);

    if(pinForCashOut !== cashOutPin){
        alert('Invalid your pin number')
        return;
    }

    if(getAgentNumber.length !== 11){
        alert('Please provide a valid agent number')
        return;
    }

    const currentBalance = haveCash - getCashOutAmount;
    document.getElementById('have-money').innerText = currentBalance;
})


// transfer money section

document.getElementById('add-transfer-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutPin = 1803;
    const haveCash = parseInt(document.getElementById('have-money').innerText);
    const pinForCashOut = parseInt(document.getElementById('pin-for-transfer-money').value);

    const getAgentNumber = document.getElementById('user-number').value;
    const getCashOutAmount = parseInt(document.getElementById('amount-for-transfer-money').value);

    if(pinForCashOut !== cashOutPin){
        alert('Invalid your pin number')
        return;
    }

    if(getAgentNumber.length !== 11){
        alert('Please provide a valid agent number')
        return;
    }

    const currentBalance = haveCash - getCashOutAmount;
    document.getElementById('have-money').innerText = currentBalance;
})


// bonus section

document.getElementById('bonus-btn').addEventListener('click', function(event){
    event.preventDefault();
    const coupon = 1803;
   const bonus = 20;
    const haveMoney = parseInt(document.getElementById('have-money').innerText);

    if(parseInt(document.getElementById('bonus').value) !== coupon){
        alert('please provide valid pin number')
        return;
    }

    const totalBalance = haveMoney + bonus;
    document.getElementById('have-money').innerText = totalBalance
})


document.getElementById('pay-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyPin = 1803;
    const bank = document.getElementById('bank').value;
    const bankNumber = document.getElementById('biller-account-number').value;
    const moneyAmount = parseInt(document.getElementById('pay-amount').value);
    const pinForAddMoney = parseInt(document.getElementById('pin-for-pay').value);
    

    const haveMoney = parseInt(document.getElementById('have-money').innerText);

    if(bankNumber.length < 11){
        alert('please provide a valid account number')
        return;
    }

    if(pinForAddMoney !== addMoneyPin){
        alert('please provide valid pin number')
        return;
    }

    const totalBalance = haveMoney - moneyAmount;
    document.getElementById('have-money').innerText = totalBalance
})

// styles

const clickStyle = document.getElementsByClassName('bg-control');
for (const style of clickStyle){
    style.addEventListener('click', function(){
        for(const st of clickStyle){
            st.style.backgroundColor = '';
        }
        this.style.backgroundColor = 'cyan'
    })
}

 


// toggle features


document.getElementById('control-add-money').addEventListener('click', function(){
    document.getElementById('add-money-section').style.display = 'block';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'none';
})

document.getElementById('control-cash-out').addEventListener('click', function(){
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'block';
    document.getElementById('get-bonus-section').style.display = 'none';
})

document.getElementById('control-transfer-money').addEventListener('click', function(){
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'block';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'none';
})

document.getElementById('control-bonus-section').addEventListener('click', function(){
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'block';
})

document.getElementById('control-pay-section').addEventListener('click', function(){
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'none';
    document.getElementById('get-pay-section').style.display = 'block';
})