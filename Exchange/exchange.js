const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');
const amountEl_three = document.getElementById('amount-three');
const gold_rates = { 'CNY': 14555.98, 'AUD': 3019.26, 'CAD': 2720.21, 'EUR': 1860.53, 'HKD': 15896.63, 'NZD': 3258.97, 'USD': 2037.08 };


// Fetch exchange rates and update the DOM
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    amountEl_three.placeholder = gold_rates[currency_one];
    // Fetch the currency value from API/local
    // https://api.exchangerate-api.com/v4/latest/${currency_one}

    // fetch(`https://api.exchangerate-api.com/v4/latest/RMB`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         const rate = data.rates[currency_two];

    //         rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

    //         amountEl_two.value = (amountEl_one.value * rate).toFixed(2)

    //         localStorage.setItem(currency_one, data);
    //     })

    fetch(`./rates/${currency_one}.json`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two];

            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

            amountEl_two.value = (amountEl_one.value * rate).toFixed(2)

            localStorage.setItem(currency_one, data);

            amountEl_three.value = gold_rates[currency_one];

        })



}



// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);


swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate()
})



calculate()