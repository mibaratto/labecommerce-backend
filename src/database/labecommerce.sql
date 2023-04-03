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