CREATE TABLE Menu_Items (
	item_id serial primary key,
	item_name varchar(30) not null,
	item_price smallint default 0
);
