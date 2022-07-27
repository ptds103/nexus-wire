-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: nexus-carrier
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `user_name` varchar(25) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `email_add` varchar(45) DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_name`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='			';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES ('David99','1234','Perez','David','Aperez@skillstorm.com',1,NULL,NULL),('Doc88',NULL,'Holliday','Doc','doc@gmil.com',6,NULL,NULL),('John66','2345','Perez','Robbie','Robbie@gmail.com',4,NULL,NULL),('PaulLee77','23FD','Lee','Paul','plee@skillstorm',2,NULL,NULL),('Roger55','2345','Smith','Manny','Rg@gmail.com',8,NULL,NULL),('storm111',NULL,'Piper','Danny','Piper@gmail.com',7,NULL,NULL);
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authorities`
--

DROP TABLE IF EXISTS `authorities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authorities` (
  `username` varchar(50) NOT NULL,
  `authority` varchar(50) NOT NULL,
  KEY `username` (`username`),
  CONSTRAINT `authorities_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authorities`
--

LOCK TABLES `authorities` WRITE;
/*!40000 ALTER TABLE `authorities` DISABLE KEYS */;
INSERT INTO `authorities` VALUES ('admin','ROLE_ADMIN'),('customer','ROLE_USER'),('david','ROLE_USER'),('david99','ROLE_USER');
/*!40000 ALTER TABLE `authorities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device_model`
--

DROP TABLE IF EXISTS `device_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device_model` (
  `device_name` varchar(45) NOT NULL,
  `year` int DEFAULT NULL,
  `processor` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `id` bigint NOT NULL,
  `id_user_plan` varchar(255) DEFAULT NULL,
  `num_of_lines` varchar(255) DEFAULT NULL,
  `plan_name_u` varchar(255) DEFAULT NULL,
  `user_name_u` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`device_name`),
  UNIQUE KEY `device_name_UNIQUE` (`device_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device_model`
--

LOCK TABLES `device_model` WRITE;
/*!40000 ALTER TABLE `device_model` DISABLE KEYS */;
INSERT INTO `device_model` VALUES ('Apple iPhone13',1999,'Apple A15 Bionic','128GB/256GB/1TB storage, no card slot',1,NULL,NULL,NULL,NULL),('Galaxy S6',2019,'SuperProcessor 5gz','Sleek Profile, Dual Camera',2,NULL,NULL,NULL,NULL),('Google Pixel 5a',2021,'SnapDragon 765G','128GB storage, no card slot',3,NULL,NULL,NULL,NULL),('HTC Desire 21 Pro',2021,'SnapDragon 690 5G','128GB storage, microSDX',4,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `device_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phone_number`
--

DROP TABLE IF EXISTS `phone_number`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phone_number` (
  `phone_number` varchar(45) NOT NULL,
  `user_name_p` varchar(45) DEFAULT NULL,
  `id` bigint NOT NULL,
  PRIMARY KEY (`phone_number`),
  UNIQUE KEY `phone_number_UNIQUE` (`phone_number`),
  KEY `user_name_idx` (`user_name_p`),
  CONSTRAINT `user_name` FOREIGN KEY (`user_name_p`) REFERENCES `account` (`user_name`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='	';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phone_number`
--

LOCK TABLES `phone_number` WRITE;
/*!40000 ALTER TABLE `phone_number` DISABLE KEYS */;
INSERT INTO `phone_number` VALUES ('1232345432',NULL,0),('2105555556',NULL,0),('2123334344',NULL,0),('2126183312',NULL,0),('2223134456',NULL,0),('3132234356',NULL,0),('3331112232',NULL,0),('7777772222',NULL,0),('9132223344',NULL,0),('9569269082',NULL,0),('9991112232',NULL,0),('9993134456',NULL,0);
/*!40000 ALTER TABLE `phone_number` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phone_plans`
--

DROP TABLE IF EXISTS `phone_plans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phone_plans` (
  `plan_name` varchar(45) NOT NULL,
  `device_limit` int DEFAULT NULL,
  `price_per_line` double DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `plan_name_UNIQUE` (`plan_name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phone_plans`
--

LOCK TABLES `phone_plans` WRITE;
/*!40000 ALTER TABLE `phone_plans` DISABLE KEYS */;
INSERT INTO `phone_plans` VALUES ('Basic Family',2,35.99,'Talk and Text, 1GB Data',1),('Gold Ulta',3,40,'Talk and Text, 10 Data',2),('Premium',4,49.99,'Everything Plus More',4);
/*!40000 ALTER TABLE `phone_plans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_device`
--

DROP TABLE IF EXISTS `user_device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_device` (
  `iduser_device` int NOT NULL AUTO_INCREMENT,
  `device_name_d` varchar(45) DEFAULT NULL,
  `phone_number_d` varchar(45) DEFAULT NULL,
  `plan_id_d` int DEFAULT NULL,
  `user_device_first_name` varchar(45) DEFAULT NULL,
  `user_device_last_name` varchar(45) DEFAULT NULL,
  `id` bigint NOT NULL,
  `plan_name_d` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`iduser_device`),
  UNIQUE KEY `iduser_device_UNIQUE` (`iduser_device`),
  UNIQUE KEY `phone_number_d_UNIQUE` (`phone_number_d`),
  KEY `device_name_idx` (`device_name_d`) /*!80000 INVISIBLE */,
  KEY `phone_number_idx` (`phone_number_d`),
  KEY `plan_name_idx` (`plan_id_d`),
  CONSTRAINT `device_name` FOREIGN KEY (`device_name_d`) REFERENCES `device_model` (`device_name`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `phonenumber` FOREIGN KEY (`phone_number_d`) REFERENCES `phone_number` (`phone_number`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `planID` FOREIGN KEY (`plan_id_d`) REFERENCES `user_plan` (`iduser_plan`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1102039435 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_device`
--

LOCK TABLES `user_device` WRITE;
/*!40000 ALTER TABLE `user_device` DISABLE KEYS */;
INSERT INTO `user_device` VALUES (1102039425,'Google Pixel 5a','2105555556',12345685,'Robbie','Perez',0,NULL),(1102039426,'Apple iPhone13','9132223344',12345685,'David','Perez',0,NULL),(1102039427,'Apple iPhone13','9569269082',12345685,'David','Perez',0,NULL),(1102039428,'Apple iPhone13','7777772222',12345684,'Paul','Lee',0,NULL),(1102039430,'Apple iPhone13','2223134456',12345684,'Paul','Lee',0,NULL),(1102039431,'Google Pixel 5a','3331112232',12345684,'Robert','Lee',0,NULL),(1102039433,'Apple iPhone13','9993134456',12345683,'Paul','Lee',0,NULL),(1102039434,'Google Pixel 5a','9991112232',12345683,'Robert','Lee',0,NULL);
/*!40000 ALTER TABLE `user_device` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_plan`
--

DROP TABLE IF EXISTS `user_plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_plan` (
  `iduser_plan` int NOT NULL AUTO_INCREMENT,
  `user_name_u` varchar(45) DEFAULT NULL,
  `plan_name_u` varchar(45) DEFAULT NULL,
  `num_of_lines` int DEFAULT NULL,
  `id` bigint NOT NULL,
  `id_user_plan` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`iduser_plan`),
  UNIQUE KEY `iduser_plan_UNIQUE` (`iduser_plan`)
) ENGINE=InnoDB AUTO_INCREMENT=12345686 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_plan`
--

LOCK TABLES `user_plan` WRITE;
/*!40000 ALTER TABLE `user_plan` DISABLE KEYS */;
INSERT INTO `user_plan` VALUES (12345683,NULL,'Gold Ulta',3,0,NULL),(12345684,'PaulLee77',NULL,3,0,NULL),(12345685,'David99',NULL,3,0,NULL);
/*!40000 ALTER TABLE `user_plan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_plans`
--

DROP TABLE IF EXISTS `user_plans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_plans` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `id_user_plan` varchar(255) DEFAULT NULL,
  `num_of_lines` varchar(255) DEFAULT NULL,
  `plan_name_u` varchar(255) DEFAULT NULL,
  `user_name_u` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_plans`
--

LOCK TABLES `user_plans` WRITE;
/*!40000 ALTER TABLE `user_plans` DISABLE KEYS */;
INSERT INTO `user_plans` VALUES (1,'1212435','3','Basic Family','david99');
/*!40000 ALTER TABLE `user_plans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `username` varchar(50) NOT NULL,
  `password` varchar(120) NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `user_id` int DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('admin','admin',1,3,'a@gmail.com','smith','johen'),('customer','customer',1,2,'c@gmail.com','perez','roger'),('david','david',1,1,'d@gmail.com','perez','david'),('david99','david',1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-22 19:40:02
