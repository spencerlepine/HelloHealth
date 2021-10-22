-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'customers'
--
-- ---

DROP TABLE IF EXISTS `customers`;

CREATE TABLE `customers` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` VARCHAR NULL DEFAULT NULL,
  `email` VARCHAR(50) NULL DEFAULT NULL,
  `first name` VARCHAR(20) NULL DEFAULT NULL,
  `last name` VARCHAR(20) NULL DEFAULT NULL,
  `Address` VARCHAR NULL DEFAULT NULL,
  `City` VARCHAR(30) NULL DEFAULT NULL,
  `State` VARCHAR(20) NULL DEFAULT NULL,
  `Zip Code` INTEGER NULL DEFAULT NULL,
  `referral code` VARCHAR NULL DEFAULT NULL,
  `referral_code_used` VARCHAR NULL DEFAULT NULL,
  `first_purchase_complete` VARCHAR(15) NULL DEFAULT NULL,
  `credit_available` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'farms'
--
-- ---

DROP TABLE IF EXISTS `farms`;

CREATE TABLE `farms` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `email` INTEGER NULL DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  `zip code` INTEGER NULL DEFAULT NULL,
  `description` VARCHAR NULL DEFAULT NULL,
  `profile image` VARCHAR NULL DEFAULT NULL,
  `farm_rating` INTEGER NULL DEFAULT NULL,
  `video_link` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'products'
--
-- ---

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `product_name` VARCHAR(100) NULL DEFAULT NULL,
  `product_description` VARCHAR NULL DEFAULT NULL,
  `product_cost` INTEGER NULL DEFAULT NULL,
  `product_inventory` INTEGER NULL DEFAULT NULL,
  `product_image` VARCHAR NULL DEFAULT NULL,
  `product_rating` INTEGER NULL DEFAULT NULL,
  `farm_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'transactions'
--
-- ---

DROP TABLE IF EXISTS `transactions`;

CREATE TABLE `transactions` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `customer_id` INTEGER NULL DEFAULT NULL,
  `cost` INTEGER NULL DEFAULT NULL,
  `order_date` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'product_quantity'
--
-- ---

DROP TABLE IF EXISTS `product_quantity`;

CREATE TABLE `product_quantity` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `product_id` INTEGER NULL DEFAULT NULL,
  `transaction_id` INTEGER NULL DEFAULT NULL,
  `quantity` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'nutrition_facts'
--
-- ---

DROP TABLE IF EXISTS `nutrition_facts`;

CREATE TABLE `nutrition_facts` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `product_id` INTEGER NULL DEFAULT NULL,
  `fact_type` VARCHAR NULL DEFAULT NULL,
  `fact_info` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'product_category'
--
-- ---

DROP TABLE IF EXISTS `product_category`;

CREATE TABLE `product_category` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `category_name` VARCHAR NULL DEFAULT NULL,
  `product_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `products` ADD FOREIGN KEY (farm_id) REFERENCES `farms` (`id`);
ALTER TABLE `transactions` ADD FOREIGN KEY (customer_id) REFERENCES `customers` (`id`);
ALTER TABLE `product_quantity` ADD FOREIGN KEY (product_id) REFERENCES `products` (`id`);
ALTER TABLE `product_quantity` ADD FOREIGN KEY (transaction_id) REFERENCES `transactions` (`id`);
ALTER TABLE `product_category` ADD FOREIGN KEY (product_id) REFERENCES `products` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `customers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `farms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `products` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `transactions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `product_quantity` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `nutrition_facts` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `product_category` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `customers` (`id`,`user_id`,`email`,`first name`,`last name`,`Address`,`City`,`State`,`Zip Code`,`referral code`,`referral_code_used`,`first_purchase_complete`,`credit_available`) VALUES
-- ('','','','','','','','','','','','','');
-- INSERT INTO `farms` (`id`,`user_id`,`email`,`name`,`zip code`,`description`,`profile image`,`farm_rating`,`video_link`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `products` (`id`,`product_name`,`product_description`,`product_cost`,`product_inventory`,`product_image`,`product_rating`,`farm_id`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `transactions` (`id`,`customer_id`,`cost`,`order_date`) VALUES
-- ('','','','');
-- INSERT INTO `product_quantity` (`id`,`product_id`,`transaction_id`,`quantity`) VALUES
-- ('','','','');
-- INSERT INTO `nutrition_facts` (`id`,`product_id`,`fact_type`,`fact_info`) VALUES
-- ('','','','');
-- INSERT INTO `product_category` (`id`,`category_name`,`product_id`) VALUES
-- ('','','');