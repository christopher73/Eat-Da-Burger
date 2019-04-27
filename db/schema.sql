DROP DATABASE IF EXISTS burgers_db;
create database burgers_db;
use burgers_db;
create table burgers
(
	id int key NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean
);
describe burgers;

