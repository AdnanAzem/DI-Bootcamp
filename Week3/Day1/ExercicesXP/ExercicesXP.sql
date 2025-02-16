CREATE TABLE items(
 product varchar (50),
 price integer
);

INSERT INTO items 
values 
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80);


CREATE TABLE customers(
 first_name varchar (100),
 last_name varchar (100)
);

INSERT INTO customers 
values 
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott '),
('Trevor', 'Green'),
('Melanie', 'Johnson');

SELECT * FROM items

SELECT * FROM items WHERE price > 80

SELECT * FROM items WHERE price < 300

SELECT * FROM customers WHERE last_name = 'Smith'

SELECT * FROM customers WHERE last_name = 'Jones'

SELECT * FROM customers WHERE first_name != 'Scott'






