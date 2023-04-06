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
    ("u001", "maria@email.com", "maria123"),
    ("u002", "joana@email.com", "joana123"),
    ("u003", "pedro@email.com", "pedro123");

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
    VALUES ("u004", "zizi@gmail.com", "321123");

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

CREATE TABLE purchases (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    total_price REAL NOT NULL,
    paid INTEGER NOT NULL DEFAULT 0,
    delivered_at TEXT DEFAULT NULL,
    buyer_id TEXT NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES users(id)
);

INSERT INTO purchases (id, total_price, buyer_id)
 VALUES
    ("pu001",  234.00, "u001" ),
    ("pu002",  38.00,"u001" ),
    ("pu003",  12.50, "u002" ),
    ("pu004",  120.80, "u002" );

SELECT * FROM purchases;

DROP TABLE purchases;

UPDATE purchases
    SET delivered_at = DATETIME("now")
    WHERE id = "pu001";


SELECT * FROM purchases
INNER JOIN users
ON buyer_id = users.id
WHERE users.id = "u001";