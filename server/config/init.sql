-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'style'
--
-- ---

DROP TABLE IF EXISTS "example" CASCADE;

CREATE TABLE "example" (
  "id" INTEGER NOT NULL,
  "product_id" INTEGER NOT NULL,
  "name" VARCHAR(100) NOT NULL,
  "sale_price" INTEGER DEFAULT NULL,
  "original_price" INTEGER NOT NULL,
  "default?" BYTEA NOT NULL DEFAULT 'true',
  PRIMARY KEY ("id")
);

-- ---
-- Foreign Keys
-- ---

-- ALTER TABLE "example" ADD FOREIGN KEY (product_id) REFERENCES "product" ("id");

-- ---
-- Test Data
-- ---

-- INSERT INTO "style" ("id","name","original_price","sale_price","default?","style_id") VALUES
-- ('','','','','','');
