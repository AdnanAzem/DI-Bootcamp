// Exercise 1: Timer

// Get references to the container and the button
const container = document.getElementById('container');
const stopButton = document.querySelector('button');

// -------------------------- Part I --------------------------

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

function say_hello(){
    alert("Hello World");
}

setTimeout(say_hello, 2000);


// -------------------------- Part II --------------------------

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

function say_hello_div(){
    let newP = document.createElement('p');
    newP.textContent='Hello World';
    container.appendChild(newP);
}
// setTimeout(say_hello_div, 2000);



// -------------------------- Part III --------------------------

// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.



let intervalId; // Variable to store the interval ID
let paragraphCount = 0; // Counter to track the number of paragraphs added

function addParagraph() {
    say_hello_div();
    stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
});
}
intervalId = setInterval(addParagraph, 2000);

// Add an event listener to the button to stop the interval when clicked
stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
});

// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

function addParagraph() {
    if (paragraphCount < 5) {
        say_hello_div();
        paragraphCount++;
        if (paragraphCount === 5) {
            clearInterval(intervalId);
        }
    }
}
intervalId = setInterval(addParagraph, 2000);

