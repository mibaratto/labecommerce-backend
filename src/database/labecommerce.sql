-- Active: 1680783061143@@127.0.0.1@3306

--TABELA USUÁRIOS
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at  TEXT
);

INSERT INTO users (id, name, email, password, created_at)
VALUES
    ("u001", "Maria", "maria@email.com", "maria123", DATETIME('now', 'localtime')),
    ("u002","Joana", "joana@email.com", "joana123", DATETIME('now', 'localtime')),
    ("u003", "Pedro", "pedro@email.com", "pedro123", DATETIME('now', 'localtime'));

INSERT INTO users (id, name, email, password, created_at)
    VALUES ("u004", "Zizi", "zizi@gmail.com", "zizi123", DATETIME('now', 'localtime'));

UPDATE users
    SET email = "pedro@gmail.com"
    WHERE id = "u003" ;

DELETE FROM users where id = "u004";

SELECT * FROM users
    ORDER BY email ASC;

------------------------
DROP TABLE users;

SELECT * FROM users;


--TABELA PRODUTOS

CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT DEFAULT NULL,
    image_url TEXT DEFAULT
);

INSERT INTO products (id, name, price, description)
VALUES
    ("p001","vaso", 50, "decoração"),
    ("p002","tv", 1.500, "eletrodomésticos"),
    ("p003","aspirador", 300, "eletrodomésticos"),
    ("p004","sofá", 2.500, "móveis"),
    ("p005","quadro", 150, "decoração");

INSERT INTO products(id, name, price, description)
    VALUES ("p006", "lâmpada", 1.5, "iluminação");

SELECT * FROM products WHERE name = "aspirador";

SELECT * FROM products WHERE id = "p006";

UPDATE products
    SET price = 200
    WHERE id = "p005";

SELECT * FROM products    
    ORDER BY price ASC
    LIMIT 2;

SELECT * FROM products   
    WHERE price >= 100 AND price <= 300
    ORDER BY price ASC;

----------------
SELECT * FROM products;

DROP TABLE products;


--PURSCHASES TABLE

CREATE TABLE purchases (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    total_price REAL NOT NULL,
    paid INTEGER NOT NULL DEFAULT 0,
    buyer_id TEXT NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES users(id)
);

INSERT INTO purchases (id, total_price, buyer_id)
 VALUES
    ("pu001",  234.00, "u001" ),
    ("pu002",  38.00, "u001" ),
    ("pu003",  12.50, "u002" ),
    ("pu004",  120.80, "u002" );

SELECT * FROM purchases
INNER JOIN users
ON buyer_id = users.id
WHERE users.id = "u001";

-------------------------
SELECT * FROM purchases;

DROP TABLE purchases;


---------- PURCHASES_PROCUCTS TABLE
CREATE TABLE purchases_products (
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (purchase_id) REFERENCES purchases(id)
    FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO purchases_products (purchase_id, product_id, quantity)
 VALUES
    ("pu001", "p001", 1),
    ("pu001",  "p002", 3),
    ("pu003",  "p002",6 ),
    ("pu003",  "p001",10 ),
    ("pu002",  "p003", 4),
    ("pu002",  "p002", 7);

SELECT * FROM purchases_products
-- SELECT * FROM purchases_products
INNER JOIN products ON purchases_products.product_id = products.id
INNER JOIN purchases ON purchases_products.purchase_id = purchases.id;

--------------------
SELECT * FROM purchases_products;

DROP TABLE purchases_products