/* eslint-disable */

function calculateTax() {
  alert('calculateTax is called');
  // DEMO: perform the tax calculation here

  // get salary, side income, and tax rate

  // calculate tax amount

  // display result
}

function splitBill() {
  const bill = parseInt(document.querySelector("input#billTotal").value)
  const pax = parseInt(document.querySelector("input#pax").value)
  const result = document.querySelector("#result")
  const amount = (bill / pax).toFixed(2)
  console.log(amount)
  if (isNaN(amount)) {
    result.innerHTML = "Please Input valid numbers."
  } else {
    result.innerHTML = amount
  }
}
