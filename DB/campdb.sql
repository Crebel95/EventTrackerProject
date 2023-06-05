-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema campdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `campdb` ;

-- -----------------------------------------------------
-- Schema campdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `campdb` DEFAULT CHARACTER SET utf8 ;
USE `campdb` ;

-- -----------------------------------------------------
-- Table `location`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `location` ;

CREATE TABLE IF NOT EXISTS `location` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `terrain` VARCHAR(45) NULL,
  `picture_url` VARCHAR(2000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `campsite`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `campsite` ;

CREATE TABLE IF NOT EXISTS `campsite` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` TEXT NULL,
  `visit_date` DATE NULL,
  `picture_url` VARCHAR(2000) NULL,
  `location_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_campsite_Location1_idx` (`location_id` ASC),
  CONSTRAINT `fk_campsite_Location1`
    FOREIGN KEY (`location_id`)
    REFERENCES `location` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `comment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `comment` ;

CREATE TABLE IF NOT EXISTS `comment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` TEXT NULL,
  `comment_date` DATETIME NULL,
  `campsite_id` INT NOT NULL,
  `username` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_comment_campsite_idx` (`campsite_id` ASC),
  CONSTRAINT `fk_comment_campsite`
    FOREIGN KEY (`campsite_id`)
    REFERENCES `campsite` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS camp;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'camp' IDENTIFIED BY 'camp';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'camp';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `location`
-- -----------------------------------------------------
START TRANSACTION;
USE `campdb`;
INSERT INTO `location` (`id`, `city`, `state`, `terrain`, `picture_url`) VALUES (1, 'Flagstaff', 'AZ', 'Mountains', 'https://images.saymedia-content.com/.image/t_share/MTc0MzEyODY5NTk1MTk0ODc2/coconinonationalforest.jpg');
INSERT INTO `location` (`id`, `city`, `state`, `terrain`, `picture_url`) VALUES (2, 'Sedona', 'AZ', 'Mountains', 'https://wildlandtrekking.com/content/uploads/2020/05/newindentpicsedona.jpg');
INSERT INTO `location` (`id`, `city`, `state`, `terrain`, `picture_url`) VALUES (3, 'Robbinsville', 'NC', 'Mountains', 'https://images.lakehouse.com/files/medium/614/241/2342614_241.jpg');
INSERT INTO `location` (`id`, `city`, `state`, `terrain`, `picture_url`) VALUES (4, 'Swansboro', 'NC', 'Beach', 'https://www.beyondthetent.com/wp-content/uploads/2022/03/Beach-Camping-NC.jpg');
INSERT INTO `location` (`id`, `city`, `state`, `terrain`, `picture_url`) VALUES (5, 'Yuma', 'AZ', 'Desert / Lake', 'https://wanderinarizona.com/wp-content/uploads/2023/03/Lakes-near-Williams-AZ-6.jpg');

COMMIT;


-- -----------------------------------------------------
-- Data for table `campsite`
-- -----------------------------------------------------
START TRANSACTION;
USE `campdb`;
INSERT INTO `campsite` (`id`, `name`, `description`, `visit_date`, `picture_url`, `location_id`) VALUES (1, 'Canyon Vista', 'Sandys Canyon Trail is just a few minutes outside Flagstaff that offers good photo opportunities, interesting geology, great views, and access to a longer trail that stretches all the way across Arizona. Sandys Canyon Trail starts out by skirting the rim of Walnut Canyon, a scenic rift in the same layers of rock that form the upper cliffs of the Grand Canyon. From the trailhead, you get a great view of the San Francisco Peaks with the cliffs of Walnut Canyon in the foreground – time to reach for the camera.', '2017-09-17', 'https://www.travelandleisure.com/thmb/hbC7LNPVlYFMsZQWM2WWNX9Df9w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/grand-canyon-national-park-camping-CANYONCAMP0121-77adef7ef4e14956ba063e966f7df4ee.jpg', 1);
INSERT INTO `campsite` (`id`, `name`, `description`, `visit_date`, `picture_url`, `location_id`) VALUES (2, 'Ponderosa Campground', 'Named for the towering pines under which it sits, Ponderosa Campground is tucked in the rolling forests of the Tonto National Forest. Most visitors enjoy walking along the campground’s nature trail, traveling into the town of Payson, taking advantage of the area’s hiking trails and lakes or simply relaxing at the campsite. Scenic driving and outdoor recreation abound in the surrounding Tonto National Forest. A series of lakes called the Rim Lakes Recreation Area are about a 15 minute drive east. Woods Canyon Lake is one of the most popular recreational lakes in the state and offers options for boating.', '2017-10-10', 'https://i.ytimg.com/vi/mVf-L5BLY1k/maxresdefault.jpg', 2);
INSERT INTO `campsite` (`id`, `name`, `description`, `visit_date`, `picture_url`, `location_id`) VALUES (3, 'Lake Santeetlah', 'Lake Santeetlah is located in the Appalachians and is part of the Great Smoky Mountains.\n\nIn addition to the National Forest Campgrounds that are located around the lake there are also more than 50 primitive dispersed campsites available– free of charge– to campers who truly like “roughing it.”\n\nMost amazing of all is that this lake is lightly used– even during the height of the summer season. It’s a magical, beautiful place that few seem to know about.\n\nAnd it needs to be on your list of places to visit.', '2019-03-02', 'https://64.media.tumblr.com/4e3e7ce8fd0be1aa3fe7a65c576284ad/c263d4e90275ce51-ac/s500x750/62bff32bc633038703861ba86f676332d596f890.jpg', 3);
INSERT INTO `campsite` (`id`, `name`, `description`, `visit_date`, `picture_url`, `location_id`) VALUES (4, 'Hammocks Beach State Park', 'Venture to Bear Island and reward yourself with vivid memories of one of the most unspoiled beaches on the Atlantic coast. Accessible only by passenger ferry or private boat, there\'s just one thing at Hammocks Beach that\'s crowded - the list of things to do.\n\nStroll the beach with laughing gulls and sandpipers. Cast a baited hook into endless rows of foaming breakers. Discover tiny specimens of marine life in tidal pools and mudflats. Use a camera or paintbrush to capture the green and gold grasses that color the salt marshes. Spend the night among the sand dunes, or simply bask in the sun and do nothing at all.\n\nSecluded and tranquil, free from intruding commercialism, Hammocks Beach may not be for everyone, but the island is a retreat for people who welcome the challenges of relentless sun, sand, sea and sky.', '2020-03-10', 'https://asset---north-carolina.bldg15.net/img/4/4/44828558-ca42-493d-b5c5-1beed365369a/NCPN%20Cape%20Lookout%20National%20Seashore%20Sunrise%20Beach%20Camping%202_sm-crop(1,0.847,0,0,r4).4b8650e9.jpg', 4);
INSERT INTO `campsite` (`id`, `name`, `description`, `visit_date`, `picture_url`, `location_id`) VALUES (5, 'Fortuna Lake', 'Fortuna Pond Camping & Fishing Site is located outside Yuma, AZ and is popular area among the locals. The camping area is situated around the small, Fortuna Pond. The pond is stocked by the Arizona Game & Fish with a variety of fish. The area receives heavy use, especially on the weekends. It is open on the north side and surrounded by Tamarisk trees on the other. The ground near the lake is a hard packed sand and dirt mixture. The further you get from the lake or road, the softer it becomes.', '2018-06-29', 'https://photos.thedyrt.com/photo/1117284/media/arizona-fortuna-pond_f1e83e2a-5263-40bb-912c-6705e4a7d18e.jpg', 5);

COMMIT;


-- -----------------------------------------------------
-- Data for table `comment`
-- -----------------------------------------------------
START TRANSACTION;
USE `campdb`;
INSERT INTO `comment` (`id`, `content`, `comment_date`, `campsite_id`, `username`) VALUES (1, 'Flagstaff looks amazing! I never knew that Arizona had wooded areas!', '2023-06-03-11-11-11', 1, 'Kai');
INSERT INTO `comment` (`id`, `content`, `comment_date`, `campsite_id`, `username`) VALUES (2, 'Beautiful scenery!', '2023-06-04-11-11-11', 2, 'Eli');
INSERT INTO `comment` (`id`, `content`, `comment_date`, `campsite_id`, `username`) VALUES (3, 'I love Lake Santeetlah! Will be visiting again next summer!', '2023-06-04-11-11-11', 3, 'Chip Chipperson');
INSERT INTO `comment` (`id`, `content`, `comment_date`, `campsite_id`, `username`) VALUES (4, 'This is the best beach campsite I\'ve found so far. It\'s so cool that you can only get here by boat.', '2023-06-04-11-11-11', 4, 'Florian Geyer');

COMMIT;

