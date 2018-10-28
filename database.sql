CREATE TABLE gallery (
	id serial primary key,
	path varchar(100) not null,
	description varchar(150) not null,
	likes integer default 0
)

INSERT INTO gallery (path, description)
VALUES ('images/goat_small.jpg', 'I like goats a lot.')