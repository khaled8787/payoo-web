document.getElementById('btn').addEventListener('click', function(event){
    event.preventDefault()
    const mobileNumber = 01737878716;
    const pinNumber = 1803;
    const numberValue = document.getElementById('num').value;
    const mobileValue = parseInt(numberValue);
    const pinValue = document.getElementById('pin').value;
    const getPinValue = parseInt(pinValue);
    


    if(mobileValue == mobileNumber && getPinValue == pinNumber){
        window.location.href = 'home.html'
    }
    else{
        alert('Invalid credentials')
    }
})