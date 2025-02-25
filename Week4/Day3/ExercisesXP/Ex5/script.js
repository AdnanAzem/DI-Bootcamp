/*
1. Add the code above, to your HTML file

2. Using Javascript:
    1. Retrieve the div and console.log it
    2. Change the name “Pete” to “Richard”.
    3. Delete the second <li> of the second <ul>.
    4. Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

3. Using Javascript:
    1. Add a class called student_list to both of the <ul>'s.
    2. Add the classes university and attendance to the first <ul>.

4. Using Javascript:
    1. Add a “light blue” background color and some padding to the <div>.
    2. Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
    3. Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
    4. Change the font size of the whole body.

5. Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
*/

let contentdiv = document.getElementById('container');
console.log(contentdiv.textContent);

let change_pete = document.querySelector('.list li:nth-child(2)'); 
change_pete.textContent = 'Richard';

let secUl = document.querySelectorAll('.list')[1];
let secLi = secUl.querySelectorAll('li')[1];
secLi.remove();

let UL = document.querySelectorAll('.list');
for(i=0; i < UL.length; i++){
    let firstLi = UL[i].querySelector('li');
    firstLi.textContent = 'Adnan'};

UL.forEach(ul=>{
    ul.classList.add('student_list');
});

let firstUl = document.querySelectorAll('.list')[0];
firstUl.classList.add('university', 'attendance');

contentdiv.style.backgroundColor = 'lightblue';

let lastLi = secUl.querySelectorAll('li')[secUl.querySelectorAll('li').length - 1]
if(lastLi && lastLi.textContent.trim() === 'Dan'){
lastLi.style.display = 'none';
};

if (change_pete && change_pete.textContent.trim()==='Richard'){
    change_pete.style.border = '8px solid red';
}

document.body.style.fontSize = '24px'

