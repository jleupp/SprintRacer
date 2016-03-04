-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema sprintracerDB
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `sprintracerDB` ;

-- -----------------------------------------------------
-- Schema sprintracerDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sprintracerDB` DEFAULT CHARACTER SET utf8 ;
SHOW WARNINGS;
USE `sprintracerDB` ;

-- -----------------------------------------------------
-- Table `highscore`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `highscore` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `highscore` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `initials` VARCHAR(3) NOT NULL DEFAULT '___',
  `score` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;
CREATE UNIQUE INDEX `id_UNIQUE` ON `highscore` (`id` ASC);

SHOW WARNINGS;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `highscore`
-- -----------------------------------------------------
START TRANSACTION;
USE `sprintracerDB`;
INSERT INTO `highscore` (`id`, `initials`, `score`) VALUES (1, 'JCL', 10500);
INSERT INTO `highscore` (`id`, `initials`, `score`) VALUES (2, 'ASS', 9800);
INSERT INTO `highscore` (`id`, `initials`, `score`) VALUES (3, 'KML', 8850);

COMMIT;

