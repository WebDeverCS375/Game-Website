DROP DATABASE IF EXISTS `GameWeb`;
CREATE DATABASE `GameWeb`;
USE `GameWeb`;


CREATE TABLE `merch` (
  `product_id` int(255) NOT NULL AUTO_INCREMENT,
  `game_name` varchar(50) NOT NULL,
  `game_console` varchar(50) NOT NULL,
  `game_genre` varchar(50) NOT NULL,
  `game_seller` int(5) NOT NULL,
  `unit_price` decimal(4,2) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `merch` VALUES (1,'Animal Crossing','Nintendo','Adventure',3,49.95);
INSERT INTO `merch` VALUES (2,'Super Smash Bros','Nintendo','Party',2,34.99);
INSERT INTO `merch` VALUES (3,'Pokemon Legends Arceus','Nintendo','Action',1,34.95);
INSERT INTO `merch` VALUES (4,'Luigis Mansion','Nintendo','Adventure',4,44.95);
INSERT INTO `merch` VALUES (5,'Mario Kart 8','Nintendo','Party',4,34.99);
INSERT INTO `merch` VALUES (6,'Breath of the Wild','Nintendo','Adventure',1,24.99);
INSERT INTO `merch` VALUES (7,'Super Mario 3D World','Nintendo','Adventure',2,49.99);
INSERT INTO `merch` VALUES (8,'Splatoon 2','Nintendo','Party',5,34.99);


INSERT INTO `merch` VALUES (9,'Kirby and the Forgotten Land','Nintendo','Adventure',4,24.99);
INSERT INTO `merch` VALUES (10,'Mario Party Superstars','Nintendo','Party',2,19.99);

INSERT INTO `merch` VALUES (11,'Sifu','Playstation','Action',3,44.99);
INSERT INTO `merch` VALUES (12,'Ghost of Tsuhima','Playstation','Action',1,24.99);
INSERT INTO `merch` VALUES (13,'Elden Ring','Playstation','Adventure',4,34.99);
INSERT INTO `merch` VALUES (14,'Kena','Playstation','Adventure',5,44.99);
INSERT INTO `merch` VALUES (15,'Hitman 3','Playstation','Action',3,49.99);
INSERT INTO `merch` VALUES (16,'Demons Souls','Playstation','Adventure',2,54.99);
INSERT INTO `merch` VALUES (17,'Hades','Playstation','Puzzle',1,24.99);
INSERT INTO `merch` VALUES (18,'It Takes Two','Playstation','Puzzle',4,19.99);
INSERT INTO `merch` VALUES (19,'Dolmen','Playstation','Action',2,44.99);
INSERT INTO `merch` VALUES (20,'Persona 5','Playstation','Adventure',5,34.99);
INSERT INTO `merch` VALUES (21,'Sleeping Dogs','Playstation','Adventure',4,24.99);
INSERT INTO `merch` VALUES (22,'God of War','Playstation','Action',3,34.99);
INSERT INTO `merch` VALUES (23,'Uncharted 4','Playstation','Action',3,24.99);
INSERT INTO `merch` VALUES (24,'Last of Us','Playstation','Adventure',2,34.99);
INSERT INTO `merch` VALUES (25,'NBA 2k22','Playstation','Party',1,19.99);
INSERT INTO `merch` VALUES (26,'FIFA 22','Playstation','Party',4,24.99);

INSERT INTO `merch` VALUES (27,'Halo','Xbox','Action',5,19.99);
INSERT INTO `merch` VALUES (28,'Fallout 76','Xbox','Action',4,9.99);
INSERT INTO `merch` VALUES (29,'Flight Simulator','Xbox','Adventure',3,14.99);
INSERT INTO `merch` VALUES (30,'Sea of Thieves','Xbox','Action',2,14.99);
INSERT INTO `merch` VALUES (31,'Minecraft','Xbox','Adventure',1,9.99);
INSERT INTO `merch` VALUES (32,'Grand Theft Auto','Xbox','Action',3,14.99);
INSERT INTO `merch` VALUES (33,'Life is Strange','Xbox','Adevnture',5,19.99);
INSERT INTO `merch` VALUES (34,'Black Ops 3','Xbox','Action',2,9.99);
INSERT INTO `merch` VALUES (35,'Sniper Elite 4','Xbox','Action',2,14.99);

CREATE TABLE `seller` (
  `seller_id` int(255) NOT NULL AUTO_INCREMENT,
  `seller_name` varchar(50) NOT NULL,
  `merch_quantity` int(5) NOT NULL,
  `rating` int(5) NOT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  PRIMARY KEY (`seller_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `seller` VALUES (1,'Amazon',10,5,'$2b$10$RUYlKThNkwctIHCbOVkhXuyZaSH1jZ4CbfJHN/lrHqgualsL40/Rm');
INSERT INTO `seller` VALUES (2,'Target',10,4,'$2b$10$RUYlKThNkwctIHCbOVkhXuyZaSH1jZ4CbfJHN/lrHqgualsL40/Rm');
INSERT INTO `seller` VALUES (3,'Walmart',10,3,'$2b$10$RUYlKThNkwctIHCbOVkhXuyZaSH1jZ4CbfJHN/lrHqgualsL40/Rm');
INSERT INTO `seller` VALUES (4,'Bestbuy',10,4,'$2b$10$RUYlKThNkwctIHCbOVkhXuyZaSH1jZ4CbfJHN/lrHqgualsL40/Rm');
INSERT INTO `seller` VALUES (5,'Gamestop',10,1,'$2b$10$RUYlKThNkwctIHCbOVkhXuyZaSH1jZ4CbfJHN/lrHqgualsL40/Rm');








