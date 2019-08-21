CREATE TABLE employees (
    employees_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    phone_number BIGINT
)

INSERT INTO employees (
    first_name,
    last_name,
    email,
    phone_number
)

VALUES ('Devin', 'Black', 'Devinjamesblack@gmail.com', 3855355288)

INSERT INTO employees (
    first_name,
    last_name,
    email,
    phone_number
)

VALUES ('Billy', 'Test', 'BillyTest@gmail.com', 3854567890)

INSERT INTO employees (
    first_name,
    last_name,
    email,
    phone_number
)

VALUES ('Bob', 'Junior', 'BobJunior@gmail.com', 3856543210)