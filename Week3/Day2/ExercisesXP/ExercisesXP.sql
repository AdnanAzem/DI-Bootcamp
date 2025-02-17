-- ExercisesXP

-- Q1.
SELECT * FROM customer;

-- Q2.
SELECT (first_name || ' ' || last_name) AS full_name FROM customer;

-- Q3.
SELECT create_date FROM customer;

-- Q4.
SELECT * FROM customer ORDER BY first_name DESC;

-- Q5.
SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC;

-- Q6.
SELECT address, phone FROM address WHERE district = 'Texas';

-- Q7.
SELECT * FROM film WHERE film_id = 15 OR film_id = 150;

-- Q8.
SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'Bad Boys';

-- Q9.
SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE 'Ba%';

-- Q10.
SELECT film_id, title, description, length, rental_rate, replacement_cost FROM film ORDER BY replacement_cost DESC LIMIT 10;

-- Q11.
SELECT film_id, title, description, length, rental_rate, replacement_cost 
FROM film 
ORDER BY replacement_cost DESC OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY;

-- Q12.
SELECT c.first_name, c.last_name, p.amount, p.payment_date 
FROM customer c 
INNER JOIN payment p 
ON c.customer_id = p.customer_id 
ORDER BY c.customer_id;

-- Q13.
SELECT f.title FROM film f LEFT JOIN inventory i ON f.film_id = i.film_id WHERE i.film_id IS NULL;

-- Q14.
SELECT city.city, country.country 
FROM city 
INNER JOIN country 
ON city.country_id = country.country_id;

-- Q15.
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date 
FROM customer c 
INNER JOIN payment p 
ON c.customer_id = p.customer_id 
ORDER BY staff_id;    



















