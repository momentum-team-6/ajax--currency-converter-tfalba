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
// const amountField = document.querySelector('#base-amount-field')

const amount = document.querySelector('#base-amount')

// const outputAmt = document.querySelector('#holder')
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

  const baseCurrency = baseChoice.value
  const newCurrency = finalChoice.value

  const url = `https://api.exchangeratesapi.io/latest?base=${baseCurrency}`

  fetch(url).then(res => res.json())
    .then(data => {
      console.log('hello my arrow function')
      const convertedAmount = parseFloat(amount.value * data.rates[newCurrency])
      const formattedAmount = parseFloat(convertedAmount.toFixed(2))
      outputAmtDiv.innerHTML = formattedAmount + ` ${newCurrency}`
      return data.repos_url
    })
})
