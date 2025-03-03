// Exercises XP

// Exercise 1 : Scope
// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// #1.1 - run in the console:
// funcOne(); // a = 3 
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// error cause a will remain 5 with a const and can't be equal to 3

// #2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// #2.1 - run in the console:
// funcThree() // a = 0
// funcTwo() // a = 5
// funcThree() // a = 5
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
//inside the funcThree function 0 then error 


//#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour();
// funcFive(); // inside the funcFive function hello 

//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console:
// funcSix(); // a = test because we declare the a inside the funcsix 
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// inside the funcSix function  test  cause we 'let' a in the function 

//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console -> inside of the if block 5 / outside of the if block 2
// #5.2 What will happen if the variable is declared 
// with const instead of let ? -> inside of the if block 5 / outside of the if block 2

// Exercise 2 : Ternary operator
// function winBattle(){
//     return true;
// }

// Transform the winBattle() function to an arrow function.
const winBattle = () => true;

// Create a variable called experiencePoints
let experiencePoints;

// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
experiencePoints = winBattle() ? 10 : 1;

// Console.log the experiencePoints variable.
console.log(experiencePoints);


// Exercise 3 : Is it a string ?
const isString = (obj) => typeof(obj) === 'string';
console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0]));

// Exercise 4 : Find the sum
const sum = (num1, num2) => num1 + num2;
console.log(sum(1,2));

// Exercise 5 : Kg and grams

// First, use function declaration and invoke it.
function kgToG(amount){
    return amount * 1000;
}
console.log(kgToG(2));

// Then, use function expression and invoke it.
const grams = function(amount){
    return amount * 1000;
}
console.log(grams(2));

// Finally, use a one line arrow function and invoke it.
const convertKg = (amount) => amount * 1000;
console.log(convertKg(2));

// Exercise 6 : Fortune teller
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic  location>, and married to <partner's name> with <number of children> kids."

// (function fortune(number_of_children, partner_name, geographic_location, job_title){
//     const my_fortune = `You will be a ${job_title} in ${geographic_location}, and married to ${partner_name} with ${number_of_children} kids.`;
//     const add_element = document.createElement('p'); // create a <p> in the doc
//     add_element.textContent = my_fortune; // <p>my_fortune</p>
//     document.body.appendChild(add_element) // add <p> to the body
// })(3, 'Adnan', 'Taibeh', 'Fullstack');

// Exercise 7 : Welcome

// John has just signed in to your website and you want to welcome him.
//     1. Create a Navbar in your HTML file.
//     2. In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
//     3. The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function user(name){
    const user_profile = {
        username : name,
        userpicture : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd92mrp7hetgfk.cloudfront.net%2Fimages%2Fsites%2Fmisc%2FDevelopers_Institute%2Foriginal.png%3F1594763485&f=1&nofb=1&ipt=71a1f304e904240f6392c03dd020e4fa823c675ed85c6ab8e9fefed381f817f8&ipo=images'};

    const user_div = document.createElement('div');
    user_div.classList.add('user-profile');

    const img = document.createElement('img');
    img.src = user_profile.userpicture;
    img.alt = `${user_profile.userpicture}'s profil picture`;
    img.classList.add('profile-picture');

    const span = document.createElement('span');
    span.textContent= user_profile.username;
    span.classList.add('profile-name');

    user_div.appendChild(img);
    user_div.appendChild(span);

    const navbar = document.querySelector('.navbar > ul'); 
    navbar.appendChild(user_div);
})('John');

// Exercise 8 : Juice Bar

// Part I
// function makeJuice(size) {
//     function addIngredients(ingredient1, ingredient2, ingredient3) {
//         const message = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
//         document.body.innerHTML += `<p>${message}</p>`;
//     }
//     addIngredients("apple", "orange", "carrot");
// }

// makeJuice("medium");

// Part II
function makeJuice(size) {

    const ingredients = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        const ingredientsList = ingredients.join(", ");
        const message = `The client wants a ${size} juice, containing ${ingredientsList}.`;
        document.body.innerHTML += `<p>${message}</p>`;
    }

    addIngredients("apple", "orange", "carrot");
    addIngredients("pineapple", "kiwi", "mango");
    displayJuice();
}

makeJuice("large");

