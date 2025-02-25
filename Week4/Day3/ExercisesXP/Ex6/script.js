/*
1. Add the code above, to your HTML file

2. Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

3. We are going to add a new <li> to the <ul>.
    1. First, create a new <li> tag (use the createElement method).
    2. Create a new text node with “Logout” as its specified text.
    3. Append the text node to the newly created list node (<li>).
    4. Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

4. Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
*/

let div = document.getElementById("navBar");
div.setAttribute("id","socialNetworkNavigation");

let new_li = document.createElement('li');
let logout = document.createTextNode('Logout');
new_li.appendChild(logout);

let ul = document.querySelector('ul');
ul.appendChild(new_li);

let firstLi = ul.firstElementChild;
console.log('Text:', firstLi.textContent);
let lastLi = ul.lastElementChild;
console.log('Text:', lastLi.textContent);