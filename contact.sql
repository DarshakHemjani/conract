-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2023 at 03:55 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contact`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_masters`
--

CREATE TABLE `contact_masters` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `number` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`number`)),
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact_masters`
--

INSERT INTO `contact_masters` (`id`, `user_id`, `name`, `number`, `created_at`, `updated_at`) VALUES
(1, 2, 'rahil', '\"e807f1fcf82d132f9bb018ca6738a19f\"', '2023-11-20 14:26:11', '2023-11-20 14:26:11'),
(2, 2, 'sahil', '\"aecb9bfe2c43cfeea9158b978db82826\"', '2023-11-20 14:26:11', '2023-11-20 14:26:11'),
(3, 2, 'miten', '\"09cc2f79ef7f040b04be0ec2103fb12a\"', '2023-11-20 14:26:11', '2023-11-20 14:26:11'),
(4, 2, 'rahil', '\"43042f668f07adfd174cb1823d4795e1\"', '2023-11-20 14:27:06', '2023-11-20 14:27:06'),
(5, 2, 'sahil', '\"7fd31027fae9933945a8af78e2054ba5\"', '2023-11-20 14:27:06', '2023-11-20 14:27:06'),
(6, 2, 'miten', '\"992b1c1d7022b2338a325e851ae4d5ff\"', '2023-11-20 14:27:06', '2023-11-20 14:27:06');

-- --------------------------------------------------------

--
-- Table structure for table `user_masters`
--

CREATE TABLE `user_masters` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `number` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_masters`
--

INSERT INTO `user_masters` (`id`, `name`, `number`, `created_at`, `updated_at`) VALUES
(1, 'Darian', '1234567890', '2023-11-20 17:44:29', '2023-11-20 17:44:29'),
(2, 'demo', '1234567890', '2023-11-20 17:44:29', '2023-11-20 17:44:29'),
(3, 'asd', '2234567777', '2023-11-20 17:45:52', '2023-11-20 17:45:52'),
(4, 'qwerty', '2234567777', '2023-11-20 17:46:11', '2023-11-20 17:46:11'),
(5, 'poiu', '9874563210', '2023-11-20 17:46:11', '2023-11-20 17:46:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_masters`
--
ALTER TABLE `contact_masters`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_user_contact` (`number`) USING HASH;

--
-- Indexes for table `user_masters`
--
ALTER TABLE `user_masters`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_masters`
--
ALTER TABLE `contact_masters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user_masters`
--
ALTER TABLE `user_masters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
