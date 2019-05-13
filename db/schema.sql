create database burger_db;

use burger_db;

create table burgers (
    id int auto_increment,
    burger_name varchar(30) not null,
    devoured boolean not null,
    primary key (id)
)