function splitBill() {
  // TODO: clear previous error message

  const billTotal = parseInt(document.querySelector('#billTotal').value);
  const pax = parseInt(document.querySelector('#pax').value);
  const errorMsg = document.querySelector("#errorMsg");
  const errorAlert = document.querySelector("#errorAlert");
  const error = (e) => {
    errorMsg.innerHTML = e;
    errorAlert.classList.remove('hidden');
  };
  // TODO: validate bill total is positive
  if (billTotal <= 0) {
    error("Bill total must be greater than 0")
    return;
  }

  // TODO: validate bill total is provided
  else if (typeof (billTotal) !== "number" || !billTotal) {
    error("Please input a valid bill total")
    return;
  }

  // TODO: validate num of pax is positive
  else if (pax <= 0) {
    error("Number of pax must be greater than 0")
    return;
  }

  // TODO: validate num of pax is provided
  else if (typeof (pax) !== "number" || !pax) {
    error("Please input a valid pax number")
    return;
  }

  errorAlert.classList.add('hidden');
  const amountPerPax = Number(billTotal) / Number(pax);

  document.querySelector('#result').innerHTML = amountPerPax.toFixed(2);
}

document.querySelector('#splitBtn').addEventListener('click', splitBill);
