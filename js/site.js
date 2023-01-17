// get the user input from the page
// Controller function
function getValues() {

  // get values from the page
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;

  // parse our inputs as numbers 
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  // verify our inputs are numbers 

  if(Number.isInteger(startValue) && Number.isInteger(endValue)) {

    // if they are, generate numbers

    let numbersArray = generateNumbers(startValue, endValue);

    // then display them on the page

    displayNumbers(numbersArray);

  } else {
    // if not, tell our user
    Swal.fire(
      {
        icon: 'error',
        title: 'Oops',
        text: 'Only integers are allowed for 100m Dash!'
      }
    );
  }

}
// generate our numbers 
// Logic function
function generateNumbers(start, end) {

  let numbers = [];

  for(let i = start; i <= end; i++) {
    numbers.push(i);
  }

  return numbers;
}
// display them on the page
// View function
function displayNumbers(arrayOfNumbers) {
  let tableBody = document.getElementById('results');

  let tableHtml = "";

  for(i = 0; i < arrayOfNumbers.length; i++) {
    let value = arrayOfNumbers[i];

    let tableRow = `<tr><td>${value}</td></tr>`;

    tableHtml += tableRow;
  }

  tableBody.innerHTML = tableHtml;

}
