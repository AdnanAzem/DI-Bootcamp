/*
Exercise 7 : My Book List
Instructions
Take a look at this link for help.

The point of this challenge is to display a list of two books on your browser.

1. In the body of the HTML page, create an empty section:
<section class="listBooks"></section>

2. In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
    - title,
    - author,
    - image : a url,
    - alreadyRead : which is a boolean (true or false).

3. Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

4. Requirements : All the instructions below need to be coded in the js file:
    1. Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
    For each book :
        - You have to display the book’s title and the book’s author.
            Example: HarryPotter written by JKRolling.
        - The width of the image has to be set to 100px.
        - If the book is already read. Set the color of the book’s details to red.
*/

let allBooks = [{
    title:'1984',
    author:'Georges Orwell',
    image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8bTpGDLEYVpDlV8tD10XlQHaMF%26pid%3DApi&f=1&ipt=a9367ece6b824dbf954f761d0e7cc85094dd64ef12ff3e43eb18d1924085c1e0&ipo=images',
    alreadyRead: 'Yes'},

    {title:'Zadig',
    author:'Voltaire',
    image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jHs72rbF9PFCrfzo3FZYhQHaK2%26pid%3DApi&f=1&ipt=90843c512e7aecaf436d0b370e76cf58c80a15ab183797257098d7359971a62a&ipo=images',
    alreadyRead: 'Yes'

}];

let section_book = document.querySelector('.listBooks');

allBooks.forEach(book => {
    let div = document.createElement('div');

    let Author = document.createElement('p');
    Author.textContent = `${book.title} written by ${book.author}.`;

    if (book.alreadyRead) {
        Author.style.color = 'red';
    }
    div.appendChild(Author);

    let img = document.createElement('img');
    img.src = book.image;
    img.alt = book.title + 'Book cover image';
    img.style.width = '100px'; 
    div.appendChild(img);

    section_book.appendChild(div);
});