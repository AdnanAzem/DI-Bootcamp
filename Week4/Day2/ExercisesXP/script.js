// Exercise 1 : List of people

/*
Instructions
const people = ["Greg", "Mary", "Devon", "James"];

Part I - Review about arrays
1. Write code to remove “Greg” from the people array.
2. Write code to replace “James” to “Jason”.
3. Write code to add your name to the end of the people array.
4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
5. Write code to make a copy of the people array using the slice method.
    - The copy should NOT include “Mary” or your name.
    - Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
    - Hint: Check out the documentation for the slice method
6. Write code that gives the index of “Foo”. Why does it return -1 ?
7. Create a variable called last which value is the last element of the array.
Hint: What is the relationship between the index of the last element in the array and the length of the array?

Part II - Loops
1. Using a loop, iterate through the people array and console.log each person.
2. Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
Hint: take a look at the break statement in the lesson.
*/

// Part I
const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0,1);
console.log(people);

people.splice(-1,1,"Jason");
console.log(people);

people.push("Adnan");
console.log(people);

console.log(people.indexOf("Mary"));

people_copy = people.slice(people.indexOf("Mary")+1, people.indexOf("Adnan"));
console.log(people_copy);

console.log(people.indexOf("Foo"));
// it returns -1 because doesn't exists 'Foo' in the array

let last = people[people.length-1];
console.log(last);
// The relationship is that the length = indexof(last) + 1

// Part II
console.log("----- Part II -----")
for (person of people){
    console.log(person);
}

for (person of people){
    if (person === 'Devon'){
        break;
    }
    console.log(person);
}


// Exercise 2 : Your favorite colors
/*
Instructions
1. Create an array called colors where the value is a list of your five favorite colors.
2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
3. Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
Hint : create an array of suffixes to do the Bonus
*/

let colors = ['black', 'white', 'grey', 'red', 'green'];

for (let i = 0; i < colors.length; i++){
    console.log(`My #${i+1} choice is ${colors[i]}`)
}

// Exercise 3 : Repeat the question
/*
Instructions
1. Prompt the user for a number.
Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

2. While the number is smaller than 10 continue asking the user for a new number.
Tip : Which while loop is more relevant for this situation?
*/
let num = prompt("Enter a number: ");
console.log(typeof(num));

while (num < 10){
    num = prompt("Enter a number: ");
}

// Exercise 4 : Building Management
/*
Instructions:
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

Review about objects
1. Copy and paste the above object to your Javascript file.
2. Console.log the number of floors in the building.
3. Console.log how many apartments are on the floors 1 and 3.
4. Console.log the name of the second tenant and the number of rooms he has in his apartment.
5. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
*/

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

for (floor in building.numberOfAptByFloor){
    console.log(`${building.numberOfAptByFloor[floor]}`)
}

console.log(`There are ${building.numberOfFloors} floors in the building`);
console.log(`There are ${building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor } apartments in floors 1 & 3`);
const rooms_rent = building.numberOfRoomsAndRent
console.log(`The second tenant is ${building.nameOfTenants[1]} and he owes ${rooms_rent.dan[0]} appartments`);


if (rooms_rent.sarah[1] + rooms_rent.david[1] > rooms_rent.dan[1]) {
    rooms_rent.dan[1]+=1200;
}

console.log(rooms_rent.dan[1]);

// Exercise 5 : Family
/*
Instructions
1. Create an object called family with a few key value pairs.
2. Using a for in loop, console.log the keys of the object.
3. Using a for in loop, console.log the values of the object.
*/
const family = {
    lastName: "Azem",
    city: "Taibeh",
    members: ["Shadi", "Malak", "Adnan"],
    ages: {
        Shadi: 49,
        Malak: 43,
        Adnan: 23
    }
};

console.log(family);

for (keys in family) {
    console.log(keys)
};

for (values in family) {
    console.log(family[values])
};


// Exercise 6 : Rudolf
/*
Instructions
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
*/
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
}

sentence=[]

for(values in details) {
    sentence.push(`${values} ${details[values]}`)
}

console.log(sentence.join(' '))

// Exercise 7 : Secret Group
/*
Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
1. A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
Hint: a string is an array of letters
2. Console.log the name of their secret society. The output should be “ABJKPS”
*/

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
first_letter = []

for (let l = 0; l< names.length; l++){
    first_letter.push(names[l][0])
}

first_letter.sort()
console.log(first_letter)