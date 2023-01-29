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
    // initialize a variable and assign it the value returned from the logic function
    // using the start and end values as parameters
    let numbersArray = generateNumbers(startValue, endValue);

    // then display them on the page
    displayNumbers(numbersArray);

  } else {
    // if not, tell our user with alert
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
  // initialize an array variable
  let numbers = [];

  // loop through numbers from start to end values
  for(let i = start; i <= end; i++) {
    // in each iteration -- add the number to the array 
    numbers.push(i);
  }

  // return the array of numbers -- to be used in display function
  return numbers;
}
// display them on the page
// View function
function displayNumbers(arrayOfNumbers) {
  // get table element from document
  let tableBody = document.getElementById('results');
  
  // initialize a variable to hold the html to be added to the table body
  let tableHtml = "";

  // using the array length, loop through list and add classes to numbers that
  // meet conditions in if statement
  for(i = 0; i < arrayOfNumbers.length; i++) {
    let value = arrayOfNumbers[i];
    let className = value % 2 == 0 ? 'even' : 'odd';

    // if(value % 2 == 0) {
    //   className = 'even';
    // }else {
    //   className = 'odd';
    // }

    // create a row for every five numbers 
    if(i % 5 == 0) {
      tableHtml += "<tr>";
    }

    // initialize a variable to hold html for each number
    let tableRow = `<td class=${className}>${value}</td>`;
    
    // add the row to the table html variable
    tableHtml += tableRow;

    // end the row every five numbers
    if((i + 1) % 5 == 0) {
      tableHtml += "</tr>";
    }
  }

  tableBody.innerHTML = tableHtml;

}
