// Currency quote of the day.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Getting form elements
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


// Configuring amount input to receive only numbers
amount.addEventListener("input", () => {
    //It searches for all the letters and deletes them.
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturing the form submit event.
form.onsubmit = (event) => {
    event.preventDefault()
    switch(currency.value){
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

// Function to convert currency.
function convertCurrency(amount, price, symbol){
    try {
        // Displaying the quote for the selected currency.
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Calculates the total result.
        let total = amount * price

        // Format the total value.
        total = formatCurrencyBRL(total).replace("R$", "")

        // Displays the total result.
        result.textContent = `${total} Reais`

        // Applies the class that displays the footer to show the result.
        footer.classList.add("show-result")

    } catch (error) {
        console.log(error)
        // Remove the class from the footer
        footer.classList.remove("show-result")
        alert("Não foi possivel converter. Tente novamente mais tarde.")
    }
}

// Format the currency in Brazilian real
function formatCurrencyBRL(value){
    //Convert to number to use toLocaleString to format in the BRL standard (R$ 00.00).
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}

/* lessons

- JS does not recognize what is inside value because it is a dynamic language. So I already say that the type of value is number so that it proposes all the options available for this type.

*/