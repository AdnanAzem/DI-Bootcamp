CREATE TABLE actors (
actor_id SERIAL PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(100) NOT NULL,
age DATE NOT NULL,
number_oscars SMALLINT NOT NULL
);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES
('MATT', 'Damon', '08/10/1970', 5)


INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES
('Asia', 'Stark', '09/06/2002', 5),
('Taylor', 'Swift', '15/01/1987', 5),
('Brad', 'Pitt', '22-04-1980', 1),
('Jon', 'Snow', '25/07/1996', 7),
('Arthur', 'Luin', '08/01/2001', 0),
('Rob', 'Stark', '15/01/1988', 2);

SELECT * FROM actors;
SELECT count(*) FROM actors;

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES
-- ('', 'Azem', '06/06/2001', 7),

-- When we try to add actor with some blank fields we got an ERROR:  syntax error at end of input
