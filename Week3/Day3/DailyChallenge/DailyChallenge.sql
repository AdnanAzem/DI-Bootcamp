-- Part1

-- Q1.
CREATE TABLE Customer(
id SERIAL PRIMARY KEY,
first_name varchar(50),
last_name varchar(50) NOT NULL
);

CREATE TABLE Customer_profile (
id serial PRIMARY KEY,
isLoggedIn bool DEFAULT false,
customer_id int REFERENCES Customer(id)
);

-- Q2.
INSERT INTO Customer(first_name, last_name)
VALUES('john','doe'),('jerome', 'lalu'), ('lea', 'rive');

-- Q3.
INSERT INTO Customer_profile(isLoggedIn, customer_id)
VALUES(true, (SELECT id FROM Customer WHERE first_name = 'john')),(false ,(SELECT id FROM Customer WHERE first_name = 'jerome'));

-- Q4.
SELECT * FROM Customer JOIN Customer_profile ON Customer.id = Customer_profile.customer_id WHERE isLoggedIn = true

SELECT Customer.first_name, Customer_profile.isLoggedIn FROM Customer 
JOIN Customer_profile ON Customer.id = Customer_profile.customer_id WHERE isLoggedIn = true

SELECT Count(isLoggedIn = False) FROM Customer_profile;


-- Part2

-- Q1.
CREATE TABLE book(
book_id SERIAL PRIMARY KEY, 
title varchar(50) NOT NULL, 
author varchar(50) NOT NULL
);

-- Q2.
INSERT INTO book (title, author)
VALUES('Alice In Wonderland','Lewis Carroll'),
('Harry Potter','J.K Rowling'),
('To kill a mockingbird', 'Harper Lee')

-- Q3.
CREATE TABLE student(
student_id SERIAL PRIMARY KEY, 
name varchar(15) NOT NULL UNIQUE, 
age int check(age <= 15) 
);

-- Q4.
INSERT INTO student (name, age)
VALUES('john',12),('lera',11),('patrick',10),('bob',14);

-- Q5.
CREATE TABLE library(
book_id int,
student_id int,
borrowed_date date,
	
CONSTRAINT 
book_fk_id FOREIGN KEY(book_id) REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT
student_fk_id FOREIGN KEY(student_id) REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Q6.
INSERT INTO library (book_id, student_id, borrowed_date)
VALUES((SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),(SELECT student_id FROM student WHERE name = 'john'), '15-02-2022'),
((SELECT book_id FROM book WHERE title = 'To kill a mockingbird'), (SELECT student_id FROM student WHERE name = 'bob'), '15-02-2022'),
((SELECT book_id FROM book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM student WHERE name = 'lera'), '15-02-2022'),
((SELECT book_id FROM book WHERE title = 'Harry Potter'), (SELECT student_id FROM student WHERE name = 'bob'), '15-02-2022');

-- Q7.
SELECT * FROM library;

SELECT name, title FROM student 
JOIN library ON student.student_id = library.student_id
JOIN book ON library.book_id = book.book_id ;

SELECT avg(age) FROM student 
JOIN library ON student.student_id = library.student_id
JOIN book ON library.book_id = book.book_id
WHERE book.title = 'Alice In Wonderland'; 

DELETE FROM student WHERE name = 'lera';
SELECT * FROM library;
-- deleted the library entry as well





















