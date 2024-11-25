// Currency exchange rates.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Capturing form elements.
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');

// Handling the 'input amount' to get only numbers.
amount.addEventListener('input', () => {

const hasCharactersRegex = /\D+/g;
amount.value = amount.value.replace(hasCharactersRegex, '');
console.log(amount.value);  
})

// Capturing submitted events from the form.
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Converting currency function.
function convertCurrency(amount, price, symbol){
  try {

    // Showing the currency exchange rate from the selected currency.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // The total calculation.
    let total = amount * price

    // Checking if the result isn't a number.
    if (isNaN(total)){
      return alert("Por favor, digite o valor corretamente para converter.")
    }

    // Format the total calculation.
    total = formatCurrencyBRL(total).replace("R$", "")

    // Showing the total result.
    result.textContent = `${total} Reais`

    // Apply the class responsible for showing the footer with the final result.
    footer.classList.add("show-result")

  } catch (error) {
    console.log(error)

    // Remove the class responsible to show the footer.
    footer.classList.remove("show-result")
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
}

// Format the currency on Brazilian Real.
function formatCurrencyBRL(value){

  // Converting to number to be able to use the 'toLocaleString' function thus formating to BRL (R$ 00,00).
  return Number(value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}
