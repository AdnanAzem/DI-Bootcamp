-- Exercise 1: DVD Rental
-- Q1.
SELECT DISTINCT name FROM film JOIN language ON language.language_id = film.language_id;

-- Q2.
SELECT title, description, name FROM film LEFT JOIN language ON language.language_id = film.language_id;

-- Q3.
SELECT title, description, name FROM film RIGHT JOIN language ON language.language_id = film.language_id;

-- Q4.
CREATE TABLE new_film (
id serial PRIMARY KEY,
name varchar(50)
);

INSERT INTO new_film (name) VALUES('cheesy sky'), ('scott pilgram'), ('face the face'), ('venom'), ('bad boys');

-- Q5.
CREATE TABLE customer_review(
review_id serial PRIMARY KEY,
film_id int REFERENCES new_film(id) ON DELETE CASCADE,
language_id int REFERENCES language(language_id),
title varchar(15),
score int,
review_text text,
last_update date
);

-- Q6.
INSERT INTO customer_review(film_id, language_id, title, score, review_text, last_update)
VALUES
(2, 1, 'review_title', 3, 'review_text', now()),
(4, 1, 'review_title2', 7, 'review_text2', now());

-- SELECT * FROM customer_review

-- Q7.
DELETE FROM new_film WHERE id = 2;




-- Exercise 2 : DVD Rental

-- Q1.
UPDATE film SET language_id = 2 WHERE film_id < 10;

-- Q2.
-- customer_address_id_fkey, it connects the customer and the address and gives us the ability to use ids to reference the address.

-- Q3.
-- It worked fine. no issuses... becuase the one sided relations between it and film.

-- Q4.
SELECT Count(*) FROM rental WHERE return_date IS NULL;

-- Q5.
SELECT * FROM rental 
JOIN inventory ON inventory.inventory_id = rental.inventory_id 
JOIN film ON film.film_id = inventory.film_id 
WHERE return_date IS NULL ORDER BY rental_rate DESC LIMIT 30;

-- Q6.

-- Q6.1 --
SELECT title, actor, description FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE actor.first_name = 'Penelope' AND last_name = 'Monroe' AND description LIKE '%Sumo%';

-- Q6.2 --
SELECT title, rating, length FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON category.category_id = film_category.category_id
WHERE film.rating = 'R' AND category.name = 'Documentary' AND length < 60;

-- Q6.3 --
SELECT title, customer.first_name FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN customer ON rental.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew' AND  customer.last_name = 'Mahan' 
and film.rental_rate > 4 AND (rental.return_date > '28-07-2005' AND rental.return_date < '01-08-2005');

-- Q6.4 --
SELECT title, customer.first_name, replacement_cost FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN customer ON rental.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew' AND  customer.last_name = 'Mahan'
AND film.description LIKE '%Boat%' ORDER BY film.replacement_cost DESC LIMIT 1;









