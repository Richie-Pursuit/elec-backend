DROP DATABASE IF EXISTS products_dev;
CREATE DATABASE products_dev; 

\c products_dev; 


DROP TABLE IF EXISTS products;

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC DEFAULT 0,
    top_speed NUMERIC DEFAULT 0,
    image TEXT 
);
-- psql -U postgres -f db/schema.sql 