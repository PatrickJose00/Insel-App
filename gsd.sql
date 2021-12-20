/*
 Navicat Premium Data Transfer

 Source Server         : GraphQL Sequilize Database
 Source Server Type    : MySQL
 Source Server Version : 50720
 Source Host           : localhost:7999
 Source Schema         : gsd

 Target Server Type    : MySQL
 Target Server Version : 50720
 File Encoding         : 65001

 Date: 20/12/2021 01:13:13
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for SequelizeMeta
-- ----------------------------
DROP TABLE IF EXISTS `SequelizeMeta`;
CREATE TABLE `SequelizeMeta`  (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of SequelizeMeta
-- ----------------------------
INSERT INTO `SequelizeMeta` VALUES ('202112111920-create-patient.js');
INSERT INTO `SequelizeMeta` VALUES ('202112111921-create-studies.js');
INSERT INTO `SequelizeMeta` VALUES ('202112111922-create-modality.js');
INSERT INTO `SequelizeMeta` VALUES ('202112111923-create-studiesPatient.js');
INSERT INTO `SequelizeMeta` VALUES ('202112111929-create-series.js');
INSERT INTO `SequelizeMeta` VALUES ('202112111937-create-files.js');
INSERT INTO `SequelizeMeta` VALUES ('202112111938-create-seriesStudies.js');
INSERT INTO `SequelizeMeta` VALUES ('202112112111-create-seriesPatient.js');

-- ----------------------------
-- Table structure for SeriesPatient
-- ----------------------------
DROP TABLE IF EXISTS `SeriesPatient`;
CREATE TABLE `SeriesPatient`  (
  `series_id` int(10) UNSIGNED NOT NULL,
  `patient_id` int(10) UNSIGNED NOT NULL,
  INDEX `series_id`(`series_id`) USING BTREE,
  INDEX `patient_id`(`patient_id`) USING BTREE,
  CONSTRAINT `SeriesPatient_ibfk_1` FOREIGN KEY (`series_id`) REFERENCES `series` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `SeriesPatient_ibfk_2` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of SeriesPatient
-- ----------------------------
INSERT INTO `SeriesPatient` VALUES (1, 1);
INSERT INTO `SeriesPatient` VALUES (1, 2);
INSERT INTO `SeriesPatient` VALUES (2, 1);
INSERT INTO `SeriesPatient` VALUES (2, 2);

-- ----------------------------
-- Table structure for SeriesStudies
-- ----------------------------
DROP TABLE IF EXISTS `SeriesStudies`;
CREATE TABLE `SeriesStudies`  (
  `series_id` int(10) UNSIGNED NOT NULL,
  `study_id` int(10) UNSIGNED NOT NULL,
  INDEX `series_id`(`series_id`) USING BTREE,
  INDEX `study_id`(`study_id`) USING BTREE,
  CONSTRAINT `SeriesStudies_ibfk_1` FOREIGN KEY (`series_id`) REFERENCES `series` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `SeriesStudies_ibfk_2` FOREIGN KEY (`study_id`) REFERENCES `studies` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of SeriesStudies
-- ----------------------------
INSERT INTO `SeriesStudies` VALUES (1, 2);
INSERT INTO `SeriesStudies` VALUES (2, 2);
INSERT INTO `SeriesStudies` VALUES (3, 2);

-- ----------------------------
-- Table structure for StudiesPatient
-- ----------------------------
DROP TABLE IF EXISTS `StudiesPatient`;
CREATE TABLE `StudiesPatient`  (
  `study_id` int(10) UNSIGNED NOT NULL,
  `patient_id` int(10) UNSIGNED NOT NULL,
  INDEX `study_id`(`study_id`) USING BTREE,
  INDEX `patient_id`(`patient_id`) USING BTREE,
  CONSTRAINT `StudiesPatient_ibfk_1` FOREIGN KEY (`study_id`) REFERENCES `studies` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `StudiesPatient_ibfk_2` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of StudiesPatient
-- ----------------------------
INSERT INTO `StudiesPatient` VALUES (2, 2);
INSERT INTO `StudiesPatient` VALUES (2, 3);
INSERT INTO `StudiesPatient` VALUES (3, 2);
INSERT INTO `StudiesPatient` VALUES (3, 3);

-- ----------------------------
-- Table structure for files
-- ----------------------------
DROP TABLE IF EXISTS `files`;
CREATE TABLE `files`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `patient_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `study_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `series_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `file_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `created_date` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `patient_id`(`patient_id`) USING BTREE,
  INDEX `study_id`(`study_id`) USING BTREE,
  INDEX `series_id`(`series_id`) USING BTREE,
  CONSTRAINT `files_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `files_ibfk_2` FOREIGN KEY (`study_id`) REFERENCES `studies` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `files_ibfk_3` FOREIGN KEY (`series_id`) REFERENCES `series` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of files
-- ----------------------------
INSERT INTO `files` VALUES (1, 1, NULL, NULL, 'path 1', '2021-12-20 01:11:46');
INSERT INTO `files` VALUES (2, NULL, NULL, 1, 'path 2', '2021-12-21 01:11:58');

-- ----------------------------
-- Table structure for modality
-- ----------------------------
DROP TABLE IF EXISTS `modality`;
CREATE TABLE `modality`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of modality
-- ----------------------------
INSERT INTO `modality` VALUES (1, 'Modality one');
INSERT INTO `modality` VALUES (2, 'Modality two');
INSERT INTO `modality` VALUES (3, 'Modality three');

-- ----------------------------
-- Table structure for patient
-- ----------------------------
DROP TABLE IF EXISTS `patient`;
CREATE TABLE `patient`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `created_date` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of patient
-- ----------------------------
INSERT INTO `patient` VALUES (1, 'Patient one', '2021-12-20 01:08:22');
INSERT INTO `patient` VALUES (2, 'Patient two', '2021-12-20 01:08:31');
INSERT INTO `patient` VALUES (3, 'Patient three', '2021-12-20 01:09:30');

-- ----------------------------
-- Table structure for series
-- ----------------------------
DROP TABLE IF EXISTS `series`;
CREATE TABLE `series`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `series_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `created_date` datetime NOT NULL,
  `modality_id` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `modality_id`(`modality_id`) USING BTREE,
  CONSTRAINT `series_ibfk_1` FOREIGN KEY (`modality_id`) REFERENCES `modality` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of series
-- ----------------------------
INSERT INTO `series` VALUES (1, 'Series one', '2021-12-15 01:10:40', 1);
INSERT INTO `series` VALUES (2, 'Series two', '2021-12-16 01:10:49', 1);
INSERT INTO `series` VALUES (3, 'Series three', '2021-12-17 01:11:19', 1);
INSERT INTO `series` VALUES (4, 'Series four', '2021-12-20 01:11:30', 2);

-- ----------------------------
-- Table structure for studies
-- ----------------------------
DROP TABLE IF EXISTS `studies`;
CREATE TABLE `studies`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `study_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `created_date` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of studies
-- ----------------------------
INSERT INTO `studies` VALUES (1, 'study one', '2021-12-20 01:08:02');
INSERT INTO `studies` VALUES (2, 'study two', '2021-12-20 01:08:13');
INSERT INTO `studies` VALUES (3, 'study three', '2021-12-20 01:09:16');

SET FOREIGN_KEY_CHECKS = 1;
