-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- 主機: localhost:3306
-- 產生時間： 2018 年 03 月 29 日 06:53
-- 伺服器版本: 10.1.31-MariaDB
-- PHP 版本： 7.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `u345409132_demo1`
--

-- --------------------------------------------------------

--
-- 資料表結構 `customer`
--

CREATE TABLE `customer` (
  `ID` bigint(20) NOT NULL,
  `Account` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Name` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Available` enum('0','1') COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `CreateTime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `UpdateTime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 資料表的匯出資料 `customer`
--

INSERT INTO `customer` (`ID`, `Account`, `Name`, `Password`, `Email`, `Available`, `CreateTime`, `UpdateTime`) VALUES
(2, 'Sam', 'Smith', 'testhello', 'Sam@gamil.com', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'googogo', 'hello world', 'nice nice', 'peter@gmail.com', '0', '0000-00-00 00:00:00', '2018-03-28 06:49:32'),
(4, 'Peter', 'hello world', 'abcdeft', 'peter@gmail.com', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'googogo', 'hello world', 'nice nice', 'peter@gmail.com', '0', '0000-00-00 00:00:00', '2018-03-28 06:56:30'),
(6, 'Peter', 'hello world', 'abcdeft', 'peter@gmail.com', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Peter', 'hello world', 'abcdeft', 'peter@gmail.com', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Peter', 'hello world', 'abcdeft', 'peter@gmail.com', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'Peter', 'hello world', 'abcdeft', 'peter@gmail.com', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'googogo', NULL, 'nice nice', NULL, '0', '0000-00-00 00:00:00', '2018-03-28 07:57:10'),
(11, NULL, NULL, NULL, NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, NULL, NULL, NULL, NULL, '0', '2018-03-27 09:16:49', '0000-00-00 00:00:00'),
(13, 'hello', 'johson', 'hihi', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, NULL, NULL, NULL, NULL, '0', '2018-03-27 09:34:12', '0000-00-00 00:00:00'),
(15, NULL, NULL, NULL, NULL, '0', '2018-03-27 09:34:15', '0000-00-00 00:00:00'),
(16, 'hello', 'johson', 'hihi', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'hello', 'johson', 'hihi', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'hello', 'johson', 'hihi', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'hello', 'johson', 'hihi', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'hello', 'johson', 'hihi', NULL, '0', '2018-03-27 10:34:01', '0000-00-00 00:00:00'),
(21, 'hello', 'johson', 'hihi', NULL, '0', '2018-03-27 10:35:20', '0000-00-00 00:00:00'),
(22, 'hello', 'johson', 'hihi', NULL, '0', '2018-03-27 10:36:07', '0000-00-00 00:00:00'),
(25, 'hello', 'johson', 'hihi', NULL, '0', '2018-03-28 07:27:32', '0000-00-00 00:00:00'),
(26, 'hello', 'johson', 'hihi', NULL, '0', '2018-03-28 07:27:56', '0000-00-00 00:00:00'),
(27, 'hello', 'johson', 'hihi', NULL, '0', '2018-03-28 07:29:16', '0000-00-00 00:00:00'),
(28, 'hello', 'johson', 'hihi', NULL, '0', '2018-03-28 07:29:18', '0000-00-00 00:00:00'),
(29, 'hello', 'johson', 'hihi', NULL, '0', '2018-03-28 07:29:20', '0000-00-00 00:00:00'),
(30, 'hello', 'johson', 'hihi', NULL, '0', '2018-03-28 07:29:47', '0000-00-00 00:00:00');

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`ID`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `customer`
--
ALTER TABLE `customer`
  MODIFY `ID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
