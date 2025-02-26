// Exercise 3 : Transform the sentence

// Declare a global variable named allBoldItems.
var allBoldItems = [];

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBoldItems(){
    let boldItems = document.querySelectorAll('p strong');
    boldItems.forEach(item => {
        allBoldItems.push(item);
    });
    console.log(allBoldItems);
}
getBoldItems();

// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight(){
    allBoldItems.forEach(item =>{
        item.style.color='blue';
    });
}


// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
function returnItemsToDefault(){
    allBoldItems.forEach(item =>{
        item.style.color='black';
    });
}


// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph)
let paragraphs = document.querySelectorAll('p')

paragraphs.forEach(p => {
    p.addEventListener('mouseover', highlight);
    
    p.addEventListener('mouseout', returnItemsToDefault);
});