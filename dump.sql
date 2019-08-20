-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3308
-- Generation Time: Aug 20, 2019 at 10:50 PM
-- Server version: 5.5.42
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `SiliconMilk`
--

-- --------------------------------------------------------

--
-- Table structure for table `applicants`
--

CREATE TABLE `applicants` (
  `applicantId` int(255) NOT NULL,
  `applicantFirstName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `applicantLastName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `applicantEmail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `applicantLinkedin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `applicantPicture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `applicantCreatedDttm` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `applicantStatus` varchar(255) NOT NULL DEFAULT 'PENDING'
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `applicants`
--

INSERT INTO `applicants` (`applicantId`, `applicantFirstName`, `applicantLastName`, `applicantEmail`, `applicantLinkedin`, `applicantPicture`, `applicantCreatedDttm`, `applicantStatus`) VALUES
(12, 'ege', 'akışık', 'ege.akışık@example.com', 'https://www.linkedin.com/in/tinyduck867/', 'https://randomuser.me/api/portraits/med/women/93.jpg', '2006-10-12T12:55:37Z', 'PENDING'),
(13, 'ülkü', 'tokgöz', 'ülkü.tokgöz@example.com', 'https://www.linkedin.com/in/browncat426/', 'https://randomuser.me/api/portraits/med/women/7.jpg', '2002-03-31T00:44:32Z', 'PENDING'),
(14, 'gilcenira', 'pereira', 'gilcenira.pereira@example.com', 'https://www.linkedin.com/in/blackbird246/', 'https://randomuser.me/api/portraits/med/women/56.jpg', '2008-08-03T05:25:53Z', 'PENDING'),
(15, 'magnus', 'christensen', 'magnus.christensen@example.com', 'https://www.linkedin.com/in/greenrabbit744/', 'https://randomuser.me/api/portraits/med/men/92.jpg', '2012-09-10T08:08:41Z', 'PENDING'),
(16, 'önal', 'topçuoğlu', 'önal.topçuoğlu@example.com', 'https://www.linkedin.com/in/smallostrich180/', 'https://randomuser.me/api/portraits/med/men/0.jpg', '2006-04-15T21:27:02Z', 'PENDING'),
(17, 'elias', 'sørensen', 'elias.sørensen@example.com', 'https://www.linkedin.com/in/heavytiger666/', 'https://randomuser.me/api/portraits/med/men/48.jpg', '2017-11-18T05:39:22Z', 'PENDING'),
(18, 'leah', 'morgan', 'leah.morgan@example.com', 'https://www.linkedin.com/in/crazyladybug735/', 'https://randomuser.me/api/portraits/med/women/56.jpg', '2012-10-08T15:33:03Z', 'PENDING'),
(19, 'liana', 'bourgeois', 'liana.bourgeois@example.com', 'https://www.linkedin.com/in/heavyrabbit141/', 'https://randomuser.me/api/portraits/med/women/50.jpg', '2006-12-31T08:41:28Z', 'PENDING'),
(20, 'jeanne', 'scott', 'jeanne.scott@example.com', 'https://www.linkedin.com/in/redgorilla841/', 'https://randomuser.me/api/portraits/med/women/43.jpg', '2008-10-16T15:10:55Z', 'PENDING');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applicants`
--
ALTER TABLE `applicants`
  ADD PRIMARY KEY (`applicantId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applicants`
--
ALTER TABLE `applicants`
  MODIFY `applicantId` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;