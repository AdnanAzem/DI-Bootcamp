// Exercises XP

// Exercise 1 : Colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
colors.forEach((color, index) => console.log(`${index+1}# choice is ${color}`) );

// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
colors.includes("Violet") ? console.log("Yeah") : console.log("No....");


// Exercise 2 : Colors #2
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
let color_sentence = (array,ordinals) => {
    array.forEach((element, index) => {
        let suffixe = index < ordinals.length-1 ? ordinals[index+1] : ordinals[0]
        console.log(`#${index+1}${suffixe} color is ${element} `)
    });
}
color_sentence(colors, ordinal);


// Exercise 3 : Analyzing
//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

//------2------
const country = "USA";
console.log([...country]); // ["U", "S", "A"]

//------Bonus------
let newArray = [...[,,]];
console.log(newArray); // [ undefined, undefined ]


// Exercise 4 : Employees
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this : 
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);

const fullStack = users.filter(user => user.role === "Full Stack Resident");
console.log(fullStack);

//  Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
const fullStackLastName = fullStack.map(user => user.lastName);
console.log(fullStackLastName);


// Exercise 5 : Star Wars
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.
const sentence = epic.reduce((acc, word) => `${acc} ${word}`,'');
console.log(sentence);


// Exercise 6 : Employees #2
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}];

// Using the filter() method, create a new array, containing the students that passed the course.
const passed = students.filter(student => student.isPassed === true);
console.log(passed); 

// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name 
// (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
const congratulate = passed.forEach(student => console.log(`Good job ${student.name},you passed the course in ${student.course}.`));

