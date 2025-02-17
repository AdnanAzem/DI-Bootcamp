CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
);

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar');

SELECT * FROM FirstTab;

CREATE TABLE SecondTab (
    id integer 
);

INSERT INTO SecondTab VALUES
(5),
(NULL);


SELECT * FROM SecondTab;

-- Q1
-- OUTPUT: 0, because the NOT IN condition with a NULL value in the subquery results in no rows being matched.
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );

-- Q2
-- OUTPUT: 2, because there are two rows in FirstTab where the id is not 5. The NULL value is excluded because NULL NOT IN (5) evaluates to UNKNOWN, and such rows are not counted.
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );

-- Q3
-- OUTPUT: 0, because the NOT IN condition with a NULL value in the subquery results in no rows being matched.
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab );

-- Q4
-- OUTPUT: 2, because there are two rows in FirstTab where the id is not 5. The NULL value is excluded because NULL NOT IN (5) evaluates to UNKNOWN, and such rows are not counted.
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );




