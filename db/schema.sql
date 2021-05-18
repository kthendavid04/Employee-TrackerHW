CREATE DATABASE empTrackerDB;

USE empTrackerDB;

CREATE TABLE department (
  id INT NOT NULL ,
 `name` VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE `role` (
    id INT NOT NULL ,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,3) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL ,
  first_name - VARCHAR(30),
  last_name - VARCHAR(30),
  role_id - INT,
  manager_id - INT NULL,
);