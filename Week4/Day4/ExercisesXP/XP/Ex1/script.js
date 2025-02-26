// Exercise 1 : Change the article

// Using a DOM property, retrieve the h1 and console.log it.
let h1 = document.querySelector('h1');
console.log(h1)

// Using DOM methods, remove the last paragraph in the <article> tag.
const paragraph = document.querySelectorAll('p');
let last_paragraph = paragraph[paragraph.length-1];
last_paragraph.remove();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let h2 = document.querySelector('h2');
h2.addEventListener('click', function(e){
    e.target.style.background = 'red';
});

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let h3 = document.querySelector('h3');
h3.addEventListener('click', function(e){
    e.target.style.display = 'none';
});

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let button = document.querySelector('button')
button.addEventListener('click',function(){
document.body.style.fontWeight = 'bold';
});