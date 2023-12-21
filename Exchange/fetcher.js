
// localStorage.setItem(variableKey, variableValue);
fetch(`https://api.exchangerate-api.com/v4/latest/AUD`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        // localStorage.setItem('AUD', data);

    })
    

