const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

const baseChoice = document.querySelector('#base-choice')
const finalChoice = document.querySelector('#final-choice')
const form = document.querySelector('#form-currency')
const amountField = document.querySelector('#base-amount-field')
const outputAmt = document.querySelector('#holder')
const amount = document.querySelector('#base-amount')

const outputAmtDiv = document.createElement('div')

document.querySelector('#holder').appendChild(outputAmtDiv)

for (let currency of currencies) {
  baseChoice.innerHTML = baseChoice.innerHTML += `<option>${currency}</option>`
  finalChoice.innerHTML = finalChoice.innerHTML += ` <option>${currency}</option>`
}

/* ------------------------------------------------------------------------------------------------------------------ */
/*          This works below for reading from const=baseUSD. Now need to do the fetch based on base.value as          */
/* ------------------------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------------------------------------ */
/*                        input to the url and pull in whichever thing for const and then pull                        */
/* ------------------------------------------------------------------------------------------------------------------ */

outputAmtDiv.classList.add('output')
form.addEventListener('submit', function (event) {
  event.preventDefault()

  let newCurrency = finalChoice.value
  let convertAmount = parseFloat(amount.value*baseUSD.rates[newCurrency].toFixed(2))
  outputAmtDiv.innerHTML = convertAmount

let url = 'https://api.exchangeratesapi.io/latest?base=USD'
fetch(url).then(res => res.json())
.then(data => {
  console.log('hello my arrow function')
  outputAmtDiv.innerHTML=`<h1>${data.rates[newCurrency]}</h1>`
  return data.repos_url
})

})

