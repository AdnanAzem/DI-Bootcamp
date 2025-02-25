/*
Instructions
In this exercise we will be creating a webpage with a black background as the solar system and we will fill the solar system with planets and their moons.
We will provide the HTML page.
You only have to work with a JS file.

1. Create an array which value is the planets of the solar system.
2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
3. Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
4. Finally append each div to the <section> in the HTML (presented below).
5. Bonus: Do the same process to create the moons.
    - Be careful, each planet has a certain amount of moons. How should you display them?
    - Should you still use an array for the planets ? Or an array of objects ?
*/

const solar_system_planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
];

const planet_colors =  [
    "gray", "yellow", "blue", "red", "orange", "gold", "lightblue", "darkblue"
];

const container = document.querySelector('.listPlanets');
index = 0
solar_system_planets.forEach((planet_name, index) =>{ 
    let div = document.createElement('div');
    div.classList.add('planet');
    div.innerText = planet_name;
    div.style.backgroundColor=planet_colors[index];
    container.appendChild(div);
});