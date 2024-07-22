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
  `habitat_id` int(11) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`animal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table zoodb.animal: ~1 rows (approximately)
INSERT INTO `animal` (`animal_id`, `prenom`, `etat`, `race_id`, `habitat_id`, `image_id`) VALUES
	(10, 'serpant', 'bonne', 1, 4, 7);

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
  `commentaire_habitat` varchar(200) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `description_animaux` varchar(500) DEFAULT NULL,
  `description_general` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`habitat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table zoodb.habitat: ~3 rows (approximately)
INSERT INTO `habitat` (`habitat_id`, `nom`, `commentaire_habitat`, `image_id`, `description`, `description_animaux`, `description_general`) VALUES
	(2, 'savane', 'x', 2, '', 'Les sentiers circulaires offrent une vue panoramique sur l\'ensemble de l\'habitat, un sanctuaire pour les espèces menacées sert d\'exemple de conservation en plein air, incarnant l\'engagement du Zoo à préserver et protéger le patrimoine naturel.', 'Cette zone africaine reconstituée est l\'endroit idéal pour observer les majestés de la faune sauvage, des éléphants majestueux aux lions rugissants, à travers un paysage où se mêlent graminées et arbres épais'),
	(3, 'jungle', NULL, 6, 'Bienvenue dans une expérience immersive, où la beauté et la majesté de la nature prennent vie sous vos yeux émerveillés.', 'Découvrez nos majestueux tigres, panthères et autres animaux évoluant dans cet écosystème exotique. Chaque pas vous rapprochera de la splendeur captivante de cette jungle, où la vie sauvage prospère dans toute sa diversité.', 'En explorant notre jungle, vous pénétrerez dans un royaume aussi luxuriant que mystérieux, plongeant profondément au cœur de la nature sauvage.'),
	(4, 'marais', NULL, 4, NULL, 'Ce lieu emblématique du zoo se distingue par sa composition complexe de zones humides et marécageuses, où la vie aquatique s\'épanouit sous l\'ombre protectrice de grands cyprès et de plantes palustres.', 'L\'habitat Marais est une énigme végétale et animale qui offre à ses visiteurs un véritable voyage dans les profondeurs des récifs d\'eau.');

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
  `image_data` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- Dumping data for table zoodb.image: ~8 rows (approximately)
INSERT INTO `image` (`image_id`, `image_data`) VALUES
	(2, '4fd8d9ddbbfb.jpg'),
	(3, '360_F_303497515_ZHOwfTtuo5sYpAeoqWRZnkXZNZDKZeMz.jpg'),
	(4, 'b802d4ed329f.jpg'),
	(5, '4fd8d9ddbbfb.jpg'),
	(6, 'e0ce66feff4b.jpg'),
	(7, 'Safari-train-2.jpg'),
	(8, 'https___s3.eu-west-3.amazonaws.com_images.zoobeauval.com_img-9109-letosha-5eda01dab0fac.webp'),
	(9, 'Habitat-67-goupe-depart-visites-pbg2019-169-1-1024x576.jpg');

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
  `description` varchar(1000) DEFAULT NULL,
  `description_service` varchar(250) DEFAULT NULL,
  `description_general` varchar(250) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`service_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table zoodb.service: ~2 rows (approximately)
INSERT INTO `service` (`service_id`, `nom`, `description`, `description_service`, `description_general`, `image_id`) VALUES
	(1, 'Visite du zoo en train', 'Embarquez pour une aventure unique avec notre passionnant voyage à travers le zoo en train.', 'Profitez du confort du train tout en explorant les divers habitats et en observant de près nos incroyables animaux.', 'Notre guide expert partagera des informations fascinantes sur chaque espèce, vous offrant une expérience éducative et divertissante.', 7),
	(2, 'Visite des habitats avec un guide', 'Participez à une expérience immersive lors de notre visite des habitats, guidée par nos experts passionnés.', 'Cette visite gratuite vous permettra de découvrir et d\'explorer divers habitats, tout en bénéficiant des connaissances approfondies de nos guides expérimentés.', 'Plongez dans la richesse de la nature et apprenez-en davantage sur les écosystèmes fascinants qui entourent chaque habitat. Une aventure éducative et divertissante vous attend, sans frais supplémentaires !', 9),
	(3, 'Restauration', '', 'Profitez d\'un délicieux repas devant l\'enclos de nos éléphants qui s\'étend sur une vaste plaine.', 'Nous vous proposons une cuisine savoureuse et variée, issue des producteurs locaux.', 8);

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
