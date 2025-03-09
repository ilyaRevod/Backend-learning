CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL
);

INSERT INTO items (title) VALUES ('Task 1'), ('Task 2');