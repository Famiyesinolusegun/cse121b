/* W02-Task - Profile Home Page */


/* Step 2 - Variables */
const fullName = "Olusegun Famiyesin";
const  currentYear = '2024';
const profilePicture = 'images/profile.png';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`

window.onload = () => {

    function Foods(foodArray) {
        foodElement.innerHTML = foodArray.reduce((acc, curr) => {
            acc += `<br>${curr}`
            return acc
        }, '')
    }

    nameElement.innerHTML = `<strong>${fullName}</strong>`;
    yearElement.textContent = currentYear;
    imageElement.setAttribute('src', profilePicture)
    imageElement.setAttribute('alt', `Profile image of ${fullName}`)

    /* Step 5 - Array */

    const favFoods = []

    favFoods.push('pancake,Pizza,Burguer,bread')
    Foods(favFoods)

    let newfavFoods = 'rice,beans,ice cream,apples,'

    favFoods.push(newfavFoods)
    Foods(favFoods) 

    favFoods.pop();
    Foods(favFoods)

    favFoods.push('pancake,Pizza,Burguer,bread')
    Foods(favFoods)

    favFoods.shift()
    Foods(favFoods)

    newfavFoods = 'rice,beans,ice cream,apples,'

    favFoods.push(newfavFoods)
    Foods(favFoods)
}