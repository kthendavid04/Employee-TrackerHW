USE empTrackerDB;
-- Department / Houses
INSERT INTO department (name) VALUES ('Gryffindor'), ("Hufflepuff"), ('Ravenclaw'),  ('Slytherin');


INSERT INTO roles (title, salary, department_id) VALUES ('Professor', 108000, NULL), ('Student', 10000, NULL), ('Staff', 35000, NULL) ('Other', 350000, NULL);

-- Managers/Professors
INSERT INTO employee(first_name, last_name, role_id, 'manager_id','department_id' ) VALUES ('Minerva', 'McGonagall', 1, NULL, 1), ('Pomona', 'Sprout', 1, NULL, 2)('Filius', 'Flitwick', 1, NULL, 3),('Serverus', 'Snape', 1, NULL, 4),;


-- Employees/ Students
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES 
-- Gryffindor

('Harry', 'Potter', "2", '1') ,
('Hermione', 'Granger', "2", '1') ,
('Ron', 'Weasley', "2", '1') ,
('Neville', 'Longbottom', "2", '1') ,
('Ginny', 'Weasley', "2", '1') ,
('Seamus', 'Finnigan', "2", '1') ,
('Parvati', 'Patil', "2", '1') ,
('Dean', 'Thomas', "2", '1') ,

-- Hufflepuff

('Cedric', 'Diggory', "2", '2') ,
('Patrick', 'Bagby', "2", '2') ,
('Gwendoline', 'Hedgeflower', "2", '2') ,
('Maxine', 'O Flaherty', "2", '2') ,
('Zacharias', 'Smith', "2", '2') ,
('Justin', 'Finch-Fletchley', "2", '2') ,
('Susan', 'Bones', "2", '2') :

-- Ravenclaw

('Cho', 'Chang', "2", '3') ,
('Luna', 'Lovegood', "2", '3') ,
('Trevor', 'Birch', "2", '3') ,
('Omar', 'Shaw', "2", '3') ,
('Marcus', 'Turner', "2", '3') ,
('Padma', 'Patil', "2", '3') ,
('Penelope', 'Cleearwater', "2", '3') ,

-- Slytherin

('Vincent', 'Crabbe', "2", '4') ,
('Draco', 'Malfoy', "2", '4') ,
('Gregory', 'Goyle', "2", '4') ,
('Marcus', 'Flint', "2", '4') ,
('Pansy', 'Parkinson', "2", '4') ,
('Millicent', 'Bulstrode', "2", '4') ,
('Blaise', 'Zabini', "2", '4') ,

-- Employee / Staff

('Albus', 'Dumbledore', "3", NULL) ,
('Argus', 'Fitch', "3", NULL) ,
('Rubeus', 'Hagrid', "3", '1') ,
('Remus', 'Lupin', "3", '1') ,
('first_name', 'last_name', "3", 'manager_id') ,
('first_name', 'last_name', "3", 'manager_id') ,
('first_name', 'last_name', "3", 'manager_id') ,

-- Employee / Other

('The Fat', 'Friar', "4", '2') ,
('Nymphadora', 'Tonks', "4", '2') ,
('Tom', 'Riddle', "4", '4') ,
('The Bloody', 'Baron', "4", '4') ,
('The Grey', 'Lady', "4", '3') ,
('Sir Nicholas', 'de Mimsy-Porpington', "4", '1') ,
('first_name', 'last_name', "4" 'manager_id') ;