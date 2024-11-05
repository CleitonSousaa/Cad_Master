CREATE DATABASE postapp;

USE postapp;

CREATE TABLE postagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    sobrenome VARCHAR(255),
    email VARCHAR(255)
);

