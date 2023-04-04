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

