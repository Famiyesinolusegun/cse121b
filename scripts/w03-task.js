/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */ 
  
window.onload = () => {
  function add(number1, number2) {
    return number1 + number2;
  }

document.getElementById('addNumbers').addEventListener('click', function() {
    let number1 = Number(document.getElementById('add1').value);
    let number2 = Number(document.getElementById('add2').value);
    let sum = add(number1, number2);
    document.getElementById('sum').value = sum;
  });
  
  /* Function Expression - Subtract Numbers */ 

  const subtract = (number1, number2) => number1 - number2;
  document.getElementById('subtractNumbers').addEventListener('click', function() {
    let number1 = Number(document.getElementById('subtract1').value);
    let number2 = Number(document.getElementById('subtract2').value);
    let difference = subtract(number1, number2);
    document.getElementById('difference').value = difference;
  });
  
  /* Arrow Function - Multiply Numbers */ 
  const multiply = (number1, number2) => number1 * number2;
  document.getElementById('multiplyNumbers').addEventListener('click', function() {
    let number1 = Number(document.getElementById('factor1').value);
    let number2 = Number(document.getElementById('factor2').value);
    let product = multiply(number1, number2);
    document.getElementById('product').value = product;
  });
  
  /* Open Function Use - Divide Numbers */ 
  const divide = (number1, number2) => number1 / number2;
  document.getElementById('divideNumbers').addEventListener('click', function() {
    let dividend = Number(document.getElementById('dividend').value);
    let divisor = Number(document.getElementById('divisor').value);
    let quotient = divide(dividend, divisor);
    document.getElementById('quotient').value = quotient;
  });
  
  /* Decision Structure */
  document.getElementById('getTotal').addEventListener('click', function() {
    let subtotal = Number(document.getElementById('subtotal').value);
    let membershipCheckbox = document.getElementById('member').checked;
  
    if (membershipCheckbox) {
      subtotal *= 0.8; // Apply 20% discount
    }
  
    document.getElementById('total').textContent = `Total Due: $${subtotal.toFixed(2)}`;
  });
  
  
  /* ARRAY METHODS - Functional Programming */
  /* Output Source Array */
  let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  document.getElementById('array').textContent = numbersArray;
  
  /* Output Odds Only Array */
  document.getElementById('odds').textContent = numbersArray.filter(function(number) {
    return number % 2 === 1;
  });
  
  /* Output Evens Only Array */
  document.getElementById('evens').textContent = numbersArray.filter(function(number) {
    return number % 2 === 0;
  });
  
  /* Output Sum of Org. Array */
  document.getElementById('sumOfArray').textContent = numbersArray.reduce(function(sum, number) {
    return sum + number;
  });
  
  /* Output Multiplied by 2 Array */
  document.getElementById('multiplied').textContent = numbersArray.map(function(number) {
    return number * 2;
  });
  
  /* Output Sum of Multiplied by 2 Array */
  document.getElementById('sumOfMultiplied').textContent = numbersArray.map(function(number) {
    return number * 2;
  }).reduce(function(sum, number) {
    return sum + number;
  }); 
}