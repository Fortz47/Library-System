-- create database circulation_dev_db, user, and grant privileges
CREATE DATABASE IF NOT EXISTS circulation_dev_db;
CREATE USER IF NOT EXISTS 'circulation_dev'@'localhost' IDENTIFIED BY 'circulation_dev_pwd';
GRANT ALL PRIVILEGES ON circulation_dev_db.* TO 'circulation_dev'@'localhost';
GRANT SELECT ON performance_schema.* TO 'circulation_dev'@'localhost';
FLUSH PRIVILEGES;