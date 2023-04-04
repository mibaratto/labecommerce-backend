-- Active: 1680538089515@@127.0.0.1@3306

-----------TABELA USUÁRIOS

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

SELECT * FROM users;

DROP TABLE users;

INSERT INTO users (id, email, password)
VALUES
    ("001", "maria@email.com", "maria123"),
    ("002", "joana@email.com", "joana123"),
    ("003", "pedro@email.com", "pedro123");

-----------TABELA PRODUTOS

CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

DROP TABLE products;

SELECT * FROM products;

INSERT INTO products (id, name, price, category)
VALUES
    ("p001","vaso", 50, "decoração"),
    ("p002","tv", 1.500, "eletrodomésticos"),
    ("p003","aspirador", 300, "eletrodomésticos"),
    ("p004","sofá", 2.500, "móveis"),
    ("p005","quadro", 150, "decoração");


SELECT * FROM products WHERE name = "aspirador";


INSERT INTO users (id, email, password)
    VALUES ("004", "zizi@gmail.com", "321123");

INSERT INTO products(id, name, price, category)
    VALUES ("p006", "lâmpada", 1.5, "iluminação");


SELECT * FROM products WHERE id = "p006";

DELETE FROM users where id = "004";

DELETE FROM products where id = "p006";

UPDATE users
    SET email = "pedro@gmail.com"
    WHERE id = "003" ;

UPDATE products
    SET price = 200
    WHERE id = "p005";


SELECT * FROM users
    ORDER BY email ASC;

SELECT * FROM products    
    ORDER BY price ASC
    LIMIT 2;


SELECT * FROM products   
    WHERE price >= 100 AND price <= 300
    ORDER BY price ASC;
