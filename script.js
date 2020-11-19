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

/* -------------------------------------- Set constants for elements to work on ------------------------------------- */

const baseChoice = document.querySelector('#base-choice')
const finalChoice = document.querySelector('#final-choice')
const form = document.querySelector('#form-currency')
const amount = document.querySelector('#base-amount')
const outputAmt = document.querySelector('#holder')
const baseType = document.querySelector('#base-currency-type')
const finalType = document.querySelector('#final-currency-type')
const footer = document.querySelector('#footer-text')

/* --------------- Set the base currencies into select field and get options for final rate exchanges --------------- */

for (let currency of currencies) {
  baseChoice.innerHTML = baseChoice.innerHTML += `<option>${currency}</option>`
}
finalChoice.innerHTML = baseChoice.innerHTML

/* ------------------------------------------------------------------------------------------------------------------ */
/*                                   Event listener #1 for setting final rate types                                   */
/* ------------------------------------------------------------------------------------------------------------------ */

baseChoice.addEventListener('change', function (event) {
  const baseCurrency = baseChoice.value

  const url = `https://api.exchangeratesapi.io/latest?base=${baseCurrency}`
  fetch(url).then(res => res.json())
    .then(data => {
      const exchangeRates = Object.keys(data.rates)
      finalChoice.innerHTML = ''
      for (let rate of exchangeRates) {
        finalChoice.innerHTML = finalChoice.innerHTML += `<option>${rate}</option>`
      }
    })
})

/* ------------------------------------------------------------------------------------------------------------------ */
/*                               Event listener #2 for getting data to calculate result                               */
/* ------------------------------------------------------------------------------------------------------------------ */

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
      outputAmt.innerHTML = formattedAmount
      baseType.innerHTML = baseCurrency
      finalType.innerHTML = newCurrency
      footer.innerHTML = `Exchange Rates as of: ${data.date}`
      return data.repos_url
    })
})

// const outputAmtDiv = document.createElement('div')
// document.querySelector('#holder').appendChild(outputAmtDiv)
// outputAmtDiv.classList.add('output')
// don't really need the above since created a "holder" div
