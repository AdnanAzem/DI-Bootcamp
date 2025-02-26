// Exercise 2 : Work with forms

// Retrieve the form and console.log it.
let form = document.querySelector('form');
console.log(form);

// Retrieve the inputs by their id and console.log them.
let firstName = document.getElementById("fname");
console.log(firstName);

let lastName = document.getElementById("lname");
console.log(lastName);

// Retrieve the inputs by their name attribute and console.log them.
let fname = document.getElementsByName('firstname')[0]
console.log(fname);

let lname = document.getElementsByName('lastname')[0]
console.log(lname);

/*
When the user submits the form (ie. submit event listener)
    - use event.preventDefault(), why ?
    - get the values of the input tags,
    - make sure that they are not empty,
    - create an li per input value,
    - then append them to a the <ul class="usersAnswer"></ul>, below the form.
*/
form.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = e.target.elements["fname"].value;
    const lastName = e.target.elements["lname"].value;
    if (firstName === '' || lastName === '') {
        alert('Please populate the empty fields');
    return
    }
    console.log('First name:', e.target.elements["firstname"].value);
    console.log('Last name:', lastName)

addElement(firstName,lastName) 

});

function addElement(firstName, lastName){
    const newLiFirstName = document.createElement('li');
    newLiFirstName.textContent = `First Name of the user: ${firstName}`;
    const newLiLastName = document.createElement('li');
    newLiLastName.textContent = `Last Name of the user: ${lastName}`;
    const newUl = document.createElement('ul');
    newUl.className='usersAnswer';
    newUl.appendChild(newLiFirstName);
    newUl.appendChild(newLiLastName);
    document.body.appendChild(newUl);
}