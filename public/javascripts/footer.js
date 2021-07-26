/* eslint-disable */

console.log('getCurrentYear', helpers.getCurrentYear());
/* DEMO: show how to update current year */
// get the footer year element

// update the content of the year element to result of helpers.getCurrentYear
const footerEl = document.querySelector("#footer-year");
footerEl.innerHTML = helpers.getCurrentYear();


console.log('getCurrentDate', helpers.getCurrentDate());
/* EXERCISE: practice how to update current date */
// TODO: get the footer today element
const footerDate = document.querySelector("#footer-today");
footerDate.innerHTML = helpers.getCurrentDate();
// TODO: update the content of the today element to result of helpers.getCurrentDate

