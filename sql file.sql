-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.36 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for zoodb
CREATE DATABASE IF NOT EXISTS `zoodb` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `zoodb`;

-- Dumping structure for table zoodb.animal
CREATE TABLE IF NOT EXISTS `animal` (
  `animal_id` int(11) NOT NULL AUTO_INCREMENT,
  `prenom` varchar(100) DEFAULT NULL,
  `etat` varchar(100) DEFAULT NULL,
  `race_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`animal_id`),
  KEY `idx_animal` (`animal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table zoodb.animal: ~0 rows (approximately)
INSERT INTO `animal` (`animal_id`, `prenom`, `etat`, `race_id`) VALUES
	(10, 'serpant', 'bonne', NULL);

-- Dumping structure for table zoodb.avis
CREATE TABLE IF NOT EXISTS `avis` (
  `avis_id` int(11) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(100) DEFAULT NULL,
  `commentaire` varchar(200) DEFAULT NULL,
  `isvisible` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`avis_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table zoodb.avis: ~2 rows (approximately)
INSERT INTO `avis` (`avis_id`, `pseudo`, `commentaire`, `isvisible`) VALUES
	(2, 'wa2004', 'nul ', 0);

-- Dumping structure for table zoodb.habitat
CREATE TABLE IF NOT EXISTS `habitat` (
  `habitat_id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `commentaire_habitat` varchar(200) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`habitat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table zoodb.habitat: ~0 rows (approximately)
INSERT INTO `habitat` (`habitat_id`, `nom`, `description`, `commentaire_habitat`, `image_id`) VALUES
	(2, 'ayy', 'normal', 'x', 1);

-- Dumping structure for table zoodb.habitat_image
CREATE TABLE IF NOT EXISTS `habitat_image` (
  `id_habita_image` int(11) NOT NULL AUTO_INCREMENT,
  `habitat_id` int(11) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_habita_image`),
  UNIQUE KEY `unq_habitat_image_habitat_id` (`habitat_id`),
  UNIQUE KEY `unq_habitat_image_image_id` (`image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table zoodb.habitat_image: ~0 rows (approximately)

-- Dumping structure for table zoodb.image
CREATE TABLE IF NOT EXISTS `image` (
  `image_id` int(11) NOT NULL AUTO_INCREMENT,
  `image_data` blob,
  PRIMARY KEY (`image_id`),
  CONSTRAINT `fk_image_habitat_image` FOREIGN KEY (`image_id`) REFERENCES `habitat_image` (`image_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table zoodb.image: ~0 rows (approximately)

-- Dumping structure for table zoodb.race
CREATE TABLE IF NOT EXISTS `race` (
  `race_id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`race_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table zoodb.race: ~1 rows (approximately)
INSERT INTO `race` (`race_id`, `label`) VALUES
	(1, 'Reptile');

-- Dumping structure for table zoodb.rapport_veterinaire
CREATE TABLE IF NOT EXISTS `rapport_veterinaire` (
  `rapport_veterinaire_id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `detail` varchar(100) DEFAULT NULL,
  `id_utilisateur` int(11) DEFAULT NULL,
  `animal_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`rapport_veterinaire_id`),
  UNIQUE KEY `unq_rapport_veterinaire_id_utilisateur` (`id_utilisateur`),
  UNIQUE KEY `unq_rapport_veterinaire_animal_id` (`animal_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table zoodb.rapport_veterinaire: ~0 rows (approximately)

-- Dumping structure for table zoodb.role
CREATE TABLE IF NOT EXISTS `role` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table zoodb.role: ~1 rows (approximately)
INSERT INTO `role` (`role_id`, `label`) VALUES
	(1, 'administrateur');

-- Dumping structure for table zoodb.service
CREATE TABLE IF NOT EXISTS `service` (
  `service_id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`service_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table zoodb.service: ~0 rows (approximately)

-- Dumping structure for table zoodb.utilisateur
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unq_utilisateur_role_id` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table zoodb.utilisateur: ~0 rows (approximately)
INSERT INTO `utilisateur` (`id`, `username`, `password`, `nom`, `prenom`, `role_id`) VALUES
	(4, 'ayoub', 'ayoub123', 'ayoub', 'yao', 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
