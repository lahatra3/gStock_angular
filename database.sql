CREATE DATABASE IF NOT EXISTS GSTOCK;
USE GSTOCK;

CREATE TABLE IF NOT EXISTS `users`(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    `password` TEXT,
    created_at DATETIME DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS `stockages` (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    `description` TEXT,
    created_at DATETIME DEFAULT NOW()
);
