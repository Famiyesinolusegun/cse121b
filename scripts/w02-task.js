/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Olusegun Famiyesin';
const currentYear = 2024;
const profilePicture = 'images/profile.png';




/* Step 3 - Element Variables */


const nameElement = document.getElementById('name');
const foodElement = document.querySelector("#food");
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('profile');



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile `);




/* Step 5 - Array */

const foodsArray = ["pancake", "Pizza", "Burguer","bread" ]
      foodElement.innerHTML = foodsArray
      
      const newFood = "Tacos"
      foodsArray.push(newFood);
      foodElement.innerHTML += `<br> ${foodsArray}`
      
      foodsArray.shift();
      foodElement.innerHTML += `<br> ${foodsArray}`
      
      foodsArray.pop();
      foodElement.innerHTML += `<br> ${foodsArray}`