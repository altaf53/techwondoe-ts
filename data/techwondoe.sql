-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 11, 2022 at 05:06 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `techwondoe`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `uuid` int(11) NOT NULL,
  `cname` varchar(50) NOT NULL,
  `cceo` varchar(50) NOT NULL,
  `caddress` varchar(200) NOT NULL,
  `cdate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

-- INSERT INTO `company` (`uuid`, `cname`, `cceo`, `caddress`, `cdate`) VALUES
-- (1, 'TCS', 'Ratan Tata', 'Mumbai', '0000-00-00'),
-- (2, 'Boat', 'Aman Gupta', 'Mumbai', '0000-00-00'),
-- (4, 'Bharatpe', 'Ashneer', 'Delhi', '2005-11-25'),
-- (9, 'Netflix', 'Ted Sarandos', 'NYC', '2000-11-25'),
-- (10, 'Google', 'Sundar Pichai', 'california', '1994-02-24'),
-- (11, 'Tesla', 'Elon Musk', 'Silicon Valley', '2008-06-12'),
-- (13, 'Toyota', 'Abdul Lateef Jameel', 'Riyadh KSA', '1996-02-22');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `uuid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `tleadname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `team`
--

-- INSERT INTO `team` (`uuid`, `cid`, `tleadname`) VALUES
-- (4, 1, 'altaf'),
-- (5, 1, 'ameen'),
-- (6, 1, 'ayman'),
-- (7, 4, 'naman'),
-- (8, 4, 'yash'),
-- (9, 2, 'sneha'),
-- (10, 2, 'ammar'),
-- (13, 9, 'aniket'),
-- (14, 9, 'shubham'),
-- (15, 9, 'amaan'),
-- (16, 9, 'pratibha'),
-- (17, 10, 'sachin'),
-- (18, 10, 'shanaya'),
-- (19, 10, 'kirti'),
-- (20, 10, 'kavim'),
-- (21, 10, 'sajjad'),
-- (22, 11, 'razeen'),
-- (23, 11, 'danish'),
-- (24, 11, 'rashid'),
-- (25, 11, 'imran'),
-- (26, 11, 'saeed'),
-- (27, 11, 'umar');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`uuid`),
  ADD UNIQUE KEY `cname` (`cname`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`uuid`),
  ADD KEY `cid` (`cid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `uuid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `uuid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `team`
--
ALTER TABLE `team`
  ADD CONSTRAINT `team_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `company` (`uuid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
