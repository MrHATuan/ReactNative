-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 12, 2016 at 02:02 PM
-- Server version: 5.6.26
-- PHP Version: 5.5.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `SucKhoe`
--

-- --------------------------------------------------------

--
-- Table structure for table `Category`
--

CREATE TABLE IF NOT EXISTS `Category` (
  `CategoryId` int(11) NOT NULL,
  `CategoryName` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Category`
--

INSERT INTO `Category` (`CategoryId`, `CategoryName`) VALUES
(5, 'Tai - Mũi - Họng'),
(6, 'Mắt'),
(7, 'Xương -Khớp'),
(8, 'Da'),
(9, 'Răng - Hàm - Mặt'),
(10, 'Tim mạch'),
(11, 'Hô hấp'),
(12, 'Thần kinh'),
(13, 'Tiêu hoá'),
(14, 'Sinh lý sinh sản');

-- --------------------------------------------------------

--
-- Table structure for table `Comment`
--

CREATE TABLE IF NOT EXISTS `Comment` (
  `CommentId` int(11) NOT NULL,
  `Content` longtext NOT NULL,
  `newsId` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Comment`
--

INSERT INTO `Comment` (`CommentId`, `Content`, `newsId`) VALUES
(1, 'Hay qua', 1),
(2, 'Tin tức hữu ích', 1),
(3, 'Tôi chưa thấy hay lắm', 1),
(4, 'bài viết hữu ích', 2),
(5, 'ok', 1),
(6, 'bai viết nay chưa đúng', 1),
(7, 'tôi thấy rất hay', 1),
(8, 'tôi có nhiều mẹo dân gian hay lắm', 1);

-- --------------------------------------------------------

--
-- Table structure for table `CommentHoiDap`
--

CREATE TABLE IF NOT EXISTS `CommentHoiDap` (
  `cmtId` int(11) NOT NULL,
  `content` text NOT NULL,
  `hoidapId` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `CommentHoiDap`
--

INSERT INTO `CommentHoiDap` (`cmtId`, `content`, `hoidapId`) VALUES
(1, 'Bạn nên đi khám nội soi để xem xét kĩ', 21),
(3, 'Ban nên dẫn cháu đi khám nhé', 23),
(4, 'Có thể cháu bị viêm Amiđan', 23),
(5, 'ban cho be uong sua nhieu vao, an cac mom an de an ', 23),
(6, 'Tôi nghĩ bạn nên dẫn cháu đi khám sẽ tốt hơn', 23),
(7, 'Bạn nên cho cháu uống chiết xuất nghệ sẽ tốt cho bao tử của bé', 23),
(8, 'uống nước chanh bạn nhé', 22),
(9, 'Uống nhiều nước suối nha bạn!', 22),
(10, 'Uống chiết xuất nghệ rất tốt cho cơ thể nha bạn.', 21),
(11, 'Bạn nên tập những bài tập cổ truyền, học khí công sẽ giúp bạn khá hơn mà không cần sử dụng nhiều thuốc bạn nhé', 20),
(12, 'Dùng thuốc cổ truyền để xoa bóp nha bạn. Rất mau khỏi', 4),
(13, 'Bạn nên đi khám ở da liễu để uống thuốc hợp lý nha bạn', 2),
(14, 'Uống thuốc giúp bé mau ăn bạn nhé', 23),
(15, 'nên tập các bài tập cổ truyền', 20),
(16, 'nên đi khám nha bạn', 4),
(17, 'sứt thuốc đi bạn', 2),
(18, 'uống nhiều nước', 1),
(19, 'đi chụp hình đi bạn', 4),
(20, 'cho an nhiều vao', 23),
(21, 'bạn nên bóp thuốc cổ truyền', 4),
(22, 'dùng salon pas', 25);

-- --------------------------------------------------------

--
-- Table structure for table `HoiDap`
--

CREATE TABLE IF NOT EXISTS `HoiDap` (
  `hoidapId` int(11) NOT NULL,
  `cauhoi` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `HoiDap`
--

INSERT INTO `HoiDap` (`hoidapId`, `cauhoi`) VALUES
(1, 'Muốn chữa nhiệt miệng phải làm thế nào? '),
(2, 'Dạo nay tôi bị nổi mụn khá nhiều, bây giờ phải làm sao để chữa hết mụn?'),
(4, 'tôi bị lệch sơ mi thời gian lâu, làm sao để dứt khỏi?'),
(20, 'Tôi bị viêm xoang, khó ngủ. Liệu sử dụng thuốc Bắc có hiệu quả không?'),
(21, 'Tôi bị đau bao tử làm sao để hết ?'),
(22, 'Khi say rượu nên uống gì để mau hết say?'),
(23, 'Con tôi thường hay ói sau khi ăn. Ăn uống không được nhiều. Tôi nên cho cháu uống thuốc gì?'),
(25, 'Làm sao để không bị đau lưng?');

-- --------------------------------------------------------

--
-- Table structure for table `NhatKiCuaToi`
--

CREATE TABLE IF NOT EXISTS `NhatKiCuaToi` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `NhatKiCuaToi`
--

INSERT INTO `NhatKiCuaToi` (`id`, `title`, `content`) VALUES
(1, 'Bệnh mất ngủ suốt 7 năm đã không còn nữa!', '<p style="box-sizing: inherit; margin-bottom: 1.5em; color: rgb(34, 153, 204); font-family: Roboto, Tahoma, Arial; font-size: 16px;">T&ecirc;n t&ocirc;i là Minh, thành ph&ocirc;́ Bắc Ninh.<br style="box-sizing: inherit;" /> T&ocirc;i giảng dạy trong nhà trường qu&acirc;n đ&ocirc;̣i 30 năm và được nghỉ hưu năm 2011.</p>  <p style="box-sizing: inherit; margin-bottom: 1.5em; color: rgb(34, 153, 204); font-family: Roboto, Tahoma, Arial; font-size: 16px;"><i class="_3kkw _4-k1" style="box-sizing: inherit;">?</i>&nbsp;Căn b&ecirc;̣nh m&acirc;́t ngủ chính thức hành hạ t&ocirc;i bắt đ&acirc;̀u từ tháng 3 năm 2009. Khác với nhi&ecirc;̀u người, h&ecirc;̃ t&ocirc;i m&acirc;́t ngủ là m&acirc;́t lu&ocirc;n cả đ&ecirc;m l&acirc;̃n ngày, kh&ocirc;ng h&ecirc;̀ ngủ dù chỉ m&ocirc;̣t chút. Đã kh&ocirc;ng ngủ là đi với kh&ocirc;ng ăn được, mi&ecirc;̣ng lu&ocirc;n đắng ngắt. Có hai vi&ecirc;̣c quan trọng của con người (ăn và ngủ) thì đ&ecirc;̀u m&acirc;́t cả.</p>  <p style="box-sizing: inherit; margin-bottom: 1.5em; color: rgb(34, 153, 204); font-family: Roboto, Tahoma, Arial; font-size: 16px;">T&ocirc;i đã đi nhi&ecirc;̀u b&ecirc;̣nh vi&ecirc;̣n cả trong và ngoài qu&acirc;n đ&ocirc;̣i đ&ecirc;̉ chữa trị. Lúc đ&acirc;̀u dùng thu&ocirc;́c nam, ch&acirc;m cứu, b&acirc;́m huy&ecirc;̣t, các loại thực ph&acirc;̉m chức năng, dùng thu&ocirc;́c ngủ loại nhẹ như Rotundin (Củ bình v&ocirc;i)&hellip; T&acirc;́t cả cũng chỉ có hi&ecirc;̣u quả th&acirc;́p trong m&ocirc;̣t thời gian r&acirc;́t ngắn. T&ocirc;i đã phải dùng đ&ecirc;́n thu&ocirc;́c ngủ Seduxen với li&ecirc;̀u cao mà cũng chỉ có tác dụng trong thời gian chưa đ&acirc;̀y m&ocirc;̣t tu&acirc;̀n.</p>  <p style="box-sizing: inherit; margin-bottom: 1.5em; color: rgb(34, 153, 204); font-family: Roboto, Tahoma, Arial; font-size: 16px;"><i class="_3kkw _4-k1" style="box-sizing: inherit;">?</i>&nbsp;B&ecirc;̣nh cứ ngày càng tr&acirc;̀m trọng l&ecirc;n. Ai bảo làm gì t&ocirc;i cũng làm, k&ecirc;̉ cả v&acirc;́n đ&ecirc;̀ t&acirc;m linh, mong sao cho tư tưởng được thoải mái. Tuy nhi&ecirc;n tình trạng v&acirc;̃n kh&ocirc;ng có gì sáng sủa, sức khỏe ngày càng ki&ecirc;̣t qu&ecirc;̣. T&ocirc;i bu&ocirc;̀n chán, như m&ocirc;̣t người kh&ocirc;ng h&ocirc;̀n, kh&ocirc;ng mu&ocirc;́n giao ti&ecirc;́p với ai k&ecirc;̉ cả người th&acirc;n.</p>  <p style="box-sizing: inherit; margin-bottom: 1.5em; color: rgb(34, 153, 204); font-family: Roboto, Tahoma, Arial; font-size: 16px;">Mọi người xung quanh nhìn cũng th&acirc;́y ái ngại và lo lắng cho t&ocirc;i. Cu&ocirc;́i cùng, t&ocirc;i đã tìm đ&ecirc;́n Vi&ecirc;̣n Sức khỏe t&acirc;m th&acirc;̀n ở Bạch Mai (Hà N&ocirc;̣i) đ&ecirc;̉ chữa b&ecirc;̣nh. Ở đ&acirc;y bác sĩ nói thẳng rằng: dạng b&ecirc;̣nh của t&ocirc;i r&acirc;́t khó chữa, có th&ecirc;̉ phải dùng thu&ocirc;́c cả đời và chỉ dùng thu&ocirc;́c ở b&ecirc;̣nh vi&ecirc;̣n này mới có tác dụng. Cứ th&ecirc;́, tháng nào cũng có mặt ở b&ecirc;̣nh vi&ecirc;̣n đ&ecirc;̉ khám và mua thu&ocirc;́c. Bác sĩ phải thay đ&ocirc;̉i r&acirc;́t nhi&ecirc;̀u loại thu&ocirc;́c mới tìm ra được thứ thu&ocirc;́c thích hợp với cơ th&ecirc;̉ t&ocirc;i.</p>  <p style="box-sizing: inherit; margin-bottom: 1.5em; color: rgb(34, 153, 204); font-family: Roboto, Tahoma, Arial; font-size: 16px;"><i class="_3kkw _4-k1" style="box-sizing: inherit;">?</i>&nbsp;Tưởng chừng chi&ecirc;̀u hướng sẽ t&ocirc;́t đẹp, hy vọng b&ecirc;̣nh sẽ khỏi, song cứ rời thu&ocirc;́c ra là b&ecirc;̣nh đ&acirc;u lại đóng đ&acirc;́y, th&acirc;̣m chí có khi u&ocirc;́ng thu&ocirc;́c đ&acirc;̀y đủ mà v&acirc;̃n thức trắng lu&ocirc;n. Cơ th&ecirc;̉ lu&ocirc;n ở trạng thái m&acirc;́t thăng bằng và m&ecirc;̣t mỏi, các loại b&ecirc;̣nh t&acirc;̣t khác từ đó mà phát sinh.</p>  <p style="box-sizing: inherit; margin-bottom: 1.5em; color: rgb(34, 153, 204); font-family: Roboto, Tahoma, Arial; font-size: 16px;">T&ocirc;i bị đau rát dạ dày, đau các khớp vai, thoát vị đĩa đ&ecirc;̣m, gai xương đ&acirc;̀u g&ocirc;́i và gai gót ch&acirc;n, đi lại có lúc r&acirc;́t khó khăn. Hình thức v&acirc;̣n đ&ocirc;̣ng nhẹ nhàng nh&acirc;́t là đi b&ocirc;̣ thì nay bác sĩ lại khuy&ecirc;n là kh&ocirc;ng n&ecirc;n đi b&ocirc;̣ nữa. Quả thực, t&ocirc;i th&acirc;́y chán ngán cu&ocirc;̣c s&ocirc;́ng và đã từng nghĩ đ&ecirc;́n chuy&ecirc;̣n ti&ecirc;u cực: t&ocirc;i mu&ocirc;́n giải thoát.</p>  <p style="box-sizing: inherit; margin-bottom: 1.5em; color: rgb(34, 153, 204); font-family: Roboto, Tahoma, Arial; font-size: 16px;">Cơ duy&ecirc;n đã đ&ecirc;́n với t&ocirc;i<br style="box-sizing: inherit;" /> Rơi vào b&ecirc;́ tắc kh&ocirc;ng bi&ecirc;́t làm gì đ&ecirc;̉ cải thi&ecirc;̣n sức khỏe, đặc bi&ecirc;̣t, căn b&ecirc;̣nh m&acirc;́t ngủ cứ tái phát, nhi&ecirc;̀u khi u&ocirc;́ng thu&ocirc;́c mà v&acirc;̃n kh&ocirc;ng có hi&ecirc;̣u quả gì. T&ocirc;i nghĩ kh&ocirc;ng lẽ mình bó tay ng&ocirc;̀i chờ ch&ecirc;́t.</p>  <p style="box-sizing: inherit; margin-bottom: 1.5em; color: rgb(34, 153, 204); font-family: Roboto, Tahoma, Arial; font-size: 16px;"><i class="_3kkw _4-k1" style="box-sizing: inherit;">?</i>&nbsp;Đúng vào thời đi&ecirc;̉m này, m&ocirc;̣t phép màu đã đ&ecirc;́n. Người bạn học ph&ocirc;̉ th&ocirc;ng và đại học cùng t&ocirc;i (C&ocirc; giáo Trịnh Thị T&ocirc;́ Trinh &ndash; Giáo vi&ecirc;n trường THPT Hàn Thuy&ecirc;n &ndash; Bắc Ninh đã nghỉ hưu &ndash; SĐT: 0984.511.680) đ&ecirc;́n chơi đã nói cho t&ocirc;i bi&ecirc;́t v&ecirc;̀ m&ocirc;n tu luy&ecirc;̣n Pháp Lu&acirc;n Đại Pháp.</p>  <p style="box-sizing: inherit; margin-bottom: 1.5em; color: rgb(34, 153, 204); font-family: Roboto, Tahoma, Arial; font-size: 16px;">Nghe sơ qua v&ecirc;̀ những hi&ecirc;̣u quả to lớn nhờ tu luy&ecirc;̣n pháp m&ocirc;n này của các học vi&ecirc;n đi trước, t&ocirc;i như trút được m&ocirc;̣t gánh nặng. M&ocirc;̣t lu&ocirc;̀ng suy nghĩ đã hình thành ngay trong đ&acirc;̀u t&ocirc;i : đ&acirc;y chính là ch&ocirc;̃ dựa cho mình và là con đường mà t&ocirc;i phải đi thì mới có th&ecirc;̉ cứu được mình.</p>  <p style="box-sizing: inherit; margin-bottom: 1.5em; color: rgb(34, 153, 204); font-family: Roboto, Tahoma, Arial; font-size: 16px;"><i class="_3kkw _4-k1" style="box-sizing: inherit;">?</i>&nbsp;Ngày 18/12/2015, t&ocirc;i chính thức bước vào tu luy&ecirc;̣n Pháp Lu&acirc;n Đại Pháp. Hằng ngày, kh&ocirc;ng k&ecirc;̉ thời gian nào, cứ rảnh là t&ocirc;i lại đọc sách &ldquo;Chuy&ecirc;̉n Pháp Lu&acirc;n&rdquo; và say sưa luy&ecirc;̣n t&acirc;̣p năm bài c&ocirc;ng pháp kh&ocirc;ng bi&ecirc;́t m&ecirc;̣t mỏi.</p>  <p style="box-sizing: inherit; margin-bottom: 1.5em; color: rgb(34, 153, 204); font-family: Roboto, Tahoma, Arial; font-size: 16px;">Đi&ecirc;̀u kỳ di&ecirc;̣u đã đ&ecirc;́n với t&ocirc;i: 10 ngày sau, t&ocirc;i đã đi vào gi&acirc;́c ngủ m&ocirc;̣t cách nhẹ nhàng mà kh&ocirc;ng phải sử dụng b&acirc;́t cứ m&ocirc;̣t loại thu&ocirc;́c nào. Đ&ecirc;́n nay, n&ocirc;̃i lo lắng, sợ hãi v&ecirc;̀ căn b&ecirc;̣nh m&acirc;́t ngủ của t&ocirc;i đã kh&ocirc;ng còn nữa, các b&ecirc;̣nh t&acirc;̣t khác cũng ngày càng được cải thi&ecirc;̣n m&ocirc;̣t cách rõ r&ecirc;̣t. M&ocirc;̣t cảm giác sung sướng đ&ecirc;́n rơi nước mắt cứ trào d&acirc;ng trong t&ocirc;i.</p>  <p style="box-sizing: inherit; margin-bottom: 1.5em; color: rgb(34, 153, 204); font-family: Roboto, Tahoma, Arial; font-size: 16px;"><i class="_3kkw _4-k1" style="box-sizing: inherit;">?</i>&nbsp;Mong rằng các bạn chưa bi&ecirc;́t đ&ecirc;́n Pháp hãy tìm hi&ecirc;̉u đ&ecirc;̉ sớm được đắc Pháp.<br style="box-sizing: inherit;" /> Bắc Ninh, ngày 18 tháng 02 năm 2016</p>');

-- --------------------------------------------------------

--
-- Table structure for table `Sickness`
--

CREATE TABLE IF NOT EXISTS `Sickness` (
  `SickName` varchar(255) NOT NULL,
  `CategoryId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Sickness`
--

INSERT INTO `Sickness` (`SickName`, `CategoryId`) VALUES
('Ù tai', 5),
('Ung thư cổ họng', 5),
('Viêm xoang mãn tính', 5),
('Viêm xoang cấp', 5),
('Viêm giác mạc', 6),
('Loạn thị', 6),
('Bong võng mạc', 6),
('Đục thuỷ tinh thể', 6),
('Đau đầu gối', 7),
('Viêm khớp', 7),
('Đau lưng', 7),
('Viêm tủy xương', 7),
('Ung thư da', 8),
('Viêm da dị ứng', 8),
('Nhọt', 8),
('Ra mồ hôi và mùi cơ thể', 8),
('Hôi miệng', 9),
('Nhiệt miệng', 9),
('Viêm nướu (lợi) răng', 9),
('Sâu răng', 9);

-- --------------------------------------------------------

--
-- Table structure for table `SickNews`
--

CREATE TABLE IF NOT EXISTS `SickNews` (
  `newsId` int(11) NOT NULL,
  `newsName` varchar(255) DEFAULT NULL,
  `newsDes` text,
  `sickName` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `SickNews`
--

INSERT INTO `SickNews` (`newsId`, `newsName`, `newsDes`, `sickName`) VALUES
(1, 'Giải pháp cải thiện chứng ù tai, giảm thính lực', '<h1 class="head_title" style="box-sizing: border-box; margin: 8px 0px 15px; font-size: 28px; font-family: ''UTM Bebas''; font-weight: normal; line-height: 1; color: rgb(97, 141, 49); text-transform: uppercase; border-left-width: 3px; border-left-style: solid; border-left-color: rgb(30, 110, 169); height: auto; padding: 0px 0px 0px 10px;">\n	CẢI THIỆN CHỨNG &Ugrave; TAI</h1>\n<div class="clear" style="box-sizing: border-box; clear: both; color: rgb(0, 0, 0); font-family: ''Myriad Pro''; font-size: 14px;">\n	&nbsp;</div>\n<div class="inner_content_news" style="box-sizing: border-box; color: rgb(0, 0, 0); font-family: ''Myriad Pro''; font-size: 14px;">\n	<p style="box-sizing: border-box; margin: 0px 0px 10px; font-family: arial, helvetica, sans-serif; text-align: justify;"><span style="box-sizing: border-box; font-weight: 700;">Thống k&ecirc; cho thấy c&oacute; khoảng 17% d&acirc;n số tr&ecirc;n thế giới bị &ugrave; tai ở c&aacute;c mức độ kh&aacute;c nhau. &Ugrave; tai l&agrave; một triệu chứng được g&acirc;y ra bởi nhiều bệnh v&agrave; l&agrave; nguồn gốc của c&aacute;c biến chứng như&nbsp;<a href="http://otiv.com.vn/kien-thuc-benh-hoc/dau-nua-dau-678.html" style="box-sizing: border-box; color: rgb(54, 127, 169); text-decoration: none !important; outline: none !important; background-position: 0px 0px; background-repeat: initial initial;" title="đau đầu">đau đầu</a>,&nbsp;<a href="http://www.otiv.com.vn/tin-tuc/chan-dung-chung-mat-ngu-315.html" style="box-sizing: border-box; color: rgb(54, 127, 169); text-decoration: none !important; outline: none !important; background-position: 0px 0px; background-repeat: initial initial;">mất ngủ</a>, suy giảm tr&iacute; nhớ&hellip;</span></p>\n	<p style="box-sizing: border-box; margin: 0px 0px 10px; font-family: arial, helvetica, sans-serif; text-align: justify;"><span style="box-sizing: border-box;"><span style="box-sizing: border-box;"><span style="box-sizing: border-box; font-weight: 700;">&Ugrave; tai, một triệu chứng kh&oacute; chịu!</span></span></span></p>\n	<p style="box-sizing: border-box; margin: 0px 0px 10px; font-family: arial, helvetica, sans-serif; text-align: justify;"><span style="box-sizing: border-box;">&Ugrave; tai l&agrave; sự cảm nhận c&aacute;c &acirc;m thanh kh&ocirc;ng được tạo ra từ m&ocirc;i trường b&ecirc;n ngo&agrave;i. Triệu chứng n&agrave;y rất phổ biến v&agrave; c&oacute; tới 10-15% d&acirc;n số nước ta hiện nay bị chứng &ugrave; tai nặng đến mức phải điều trị y tế. Tỉ lệ n&agrave;y tăng dần theo độ tuổi, ri&ecirc;ng nam giới c&oacute; khả năng mắc bệnh cao hơn l&agrave; nữ giới.</span></p>\n	<p style="box-sizing: border-box; margin: 0px 0px 10px; font-family: arial, helvetica, sans-serif; text-align: justify;"><span style="box-sizing: border-box;">Triệu chứng &ugrave; tai rất r&otilde; r&agrave;ng, c&oacute; thể đến rồi đi hoặc xảy ra li&ecirc;n tục. N&oacute; c&oacute; thể l&agrave; &acirc;m thanh nghe như tiếng gầm, tiếng chu&ocirc;ng, tiếng r&iacute;t, hu&yacute;t s&aacute;o, tiếng vo vo, tiếng l&aacute;ch c&aacute;ch, thậm ch&iacute; l&agrave; tiếng nhạc du dương lu&ocirc;n văng vẳng từ b&ecirc;n trong tai. Triệu chứng n&agrave;y kh&ocirc;ng theo chủ quan, l&agrave;m người bệnh căng thẳng mệt mỏi m&agrave; kh&ocirc;ng c&oacute; c&aacute;ch n&agrave;o đ&ecirc;̉ ch&acirc;́m dứt ngay được.&nbsp;<em style="box-sizing: border-box;">Ti&ecirc;́ng ù trong tai</em>được người bệnh m&ocirc; tả cho b&aacute;c sĩ rất đa dạng, ghi nhận có tr&ecirc;n 50 kiểu &acirc;m thanh kh&aacute;c nhau.</span></p>\n	<p style="box-sizing: border-box; margin: 0px 0px 10px; font-family: arial, helvetica, sans-serif; text-align: justify;"><span style="box-sizing: border-box;"><a href="http://www.otiv.com.vn/tin-tuc/cai-thien-chung-u-tai--419.html" style="box-sizing: border-box; color: rgb(54, 127, 169); text-decoration: none !important; outline: none !important; background-position: 0px 0px; background-repeat: initial initial;"><span style="box-sizing: border-box; font-weight: 700;">Ù tai</span></a>&nbsp;thường giảm v&agrave;o ban ng&agrave;y do người bệnh chịu ảnh hưởng của những &acirc;m thanh kh&aacute;c đ&ecirc;́n từ xung quanh, nhưng khi về đ&ecirc;m hay khi ở nơi y&ecirc;n ắng thì tiếng &ugrave; trong tai sẽ trở n&ecirc;n rất lớn. Mức độ nặng v&agrave; tần suất xảy ra&nbsp;<em style="box-sizing: border-box;">&ugrave; tai</em>&nbsp;phụ thuộc v&agrave;o c&aacute;c yếu tố như stress, chế độ ăn, v&agrave; tiếng ồn. Cuối c&ugrave;ng, tiếng &ugrave; c&oacute; thể trở n&ecirc;n lớn đến mức người bệnh kh&ocirc;ng c&ograve;n nghe được những &acirc;m thanh kh&aacute;c từ b&ecirc;n ngo&agrave;i nữa.</span></p>\n	<p style="box-sizing: border-box; margin: 0px 0px 10px; font-family: arial, helvetica, sans-serif; text-align: justify;"><span style="box-sizing: border-box;">T&igrave;nh trạng &ugrave; tai k&eacute;o d&agrave;i l&agrave;m cho bệnh nh&acirc;n rất kh&oacute; chịu. Nhiều người mất ăn mất ngủ v&igrave;&nbsp;<em style="box-sizing: border-box;">&ugrave; tai</em>. L&acirc;u dần sẽ dẫn đến mất khả năng th&iacute;nh gi&aacute;c, kh&ocirc;ng c&ograve;n nghe thấy c&aacute;c tiếng động xung quanh. K&egrave;m theo đ&oacute; &ugrave; tai g&acirc;y ra nhiều biến chứng như: ch&oacute;ng mặt, mất ngủ, đau đầu, mất tập trung, suy giảm tr&iacute; nhớ&hellip; khiến người bệnh gặp nhiều kh&oacute; khăn trong c&ocirc;ng việc v&agrave; cuộc sống.</span></p>\n	<p style="box-sizing: border-box; margin: 0px 0px 10px; font-family: arial, helvetica, sans-serif;"><span style="box-sizing: border-box;"><span style="box-sizing: border-box;"><span style="box-sizing: border-box; font-weight: 700;"><a href="http://otiv.com.vn/goc-tu-do-la-gi/goc-tu-do-ke-thu-cua-bo-nao-235.html" style="box-sizing: border-box; color: rgb(54, 127, 169); text-decoration: none !important; outline: none !important; background-position: 0px 0px; background-repeat: initial initial;">Gốc tự do</a>&nbsp;- &ldquo;Hung thủ&rdquo; h&agrave;ng đầu g&acirc;y &ugrave; tai</span></span></span></p>\n	<p style="box-sizing: border-box; margin: 0px 0px 10px; font-family: arial, helvetica, sans-serif;">&nbsp;</p>\n	<p style="box-sizing: border-box; margin: 0px 0px 10px; font-family: arial, helvetica, sans-serif; text-align: center;"><img alt="Hình ảnh Cải thiện chứng ù tai" class="nvo-image" height="338" src="http://www.otiv.com.vn/files/image/1126-Nursing_Care_Plan_for_Tinnitus.jpg" style="box-sizing: border-box; border: 0px; vertical-align: middle; max-width: 100%; float: none;" title="Cải thiện chứng ù tai" width="507" /></p>\n	<p style="box-sizing: border-box; margin: 0px 0px 10px; font-family: arial, helvetica, sans-serif; text-align: center;"><span style="box-sizing: border-box;"><span style="box-sizing: border-box;"><em style="box-sizing: border-box;">Gốc tự do tấn c&ocirc;ng mạch m&aacute;u v&agrave; tế b&agrave;o thần kinh, l&agrave;m giảm lưu lượng m&aacute;u v&agrave; g&acirc;y tổn thương n&atilde;o, từ đ&oacute; xuất hiện nhiều triệu chứng như: đau đầu, mất ngủ, &ugrave; tai, ch&oacute;ng mặt...</em></span></span></p>\n	<p style="box-sizing: border-box; margin: 0px 0px 10px; font-family: arial, helvetica, sans-serif; text-align: center;">&nbsp;</p>\n	<p style="box-sizing: border-box; margin: 0px 0px 10px; font-family: arial, helvetica, sans-serif; text-align: justify;"><span style="box-sizing: border-box;">&Ugrave; tai, tự n&oacute;, kh&ocirc;ng phải l&agrave; bệnh m&agrave; chỉ l&agrave; một dấu hiệu của những tổn thương về th&iacute;nh gi&aacute;c hay ở n&atilde;o.&nbsp;<a href="http://www.otiv.com.vn/tin-tuc/cac-giai-phap-doi-pho-voi-stress-261.html" style="box-sizing: border-box; color: rgb(54, 127, 169); text-decoration: none !important; outline: none !important; background-position: 0px 0px; background-repeat: initial initial;">Stress</a>, tuổi t&aacute;c, rối loạn thần kinh, c&aacute;c bệnh l&yacute; về tai hay thuốc men&hellip; đều c&oacute; thể l&agrave; những yếu tố nguy cơ g&acirc;y &ugrave; tai. Trong đ&oacute;, gốc tự do được c&aacute;c nh&agrave; nghi&ecirc;n cứu chỉ ra l&agrave; nguy&ecirc;n nh&acirc;n h&agrave;ng đầu dẫn đến triệu chứng &ugrave; tai.</span></p>\n	<p style="box-sizing: border-box; margin: 0px 0px 10px; font-family: arial, helvetica, sans-serif; text-align: justify;"><span style="box-sizing: border-box;">Con người tồn tại được nhờ c&aacute;c phản ứng chuyển h&oacute;a li&ecirc;n tục diễn ra trong cơ thể. C&aacute;c phản ứng n&agrave;y đồng thời cũng sinh ra nhiều nguy&ecirc;n tử hay ph&acirc;n tử bị mất đi một điện tử &acirc;m được gọi l&agrave; gốc tự do&nbsp;<em style="box-sizing: border-box;">(free radical).</em>&nbsp;Y học hiện đại xem&nbsp;<em style="box-sizing: border-box;">gốc tự do</em>&nbsp;l&agrave; nguồn gốc của l&atilde;o h&oacute;a v&agrave; bệnh tật v&agrave; n&oacute; được v&iacute; như những &ldquo;hung thần&rdquo; bởi sức g&acirc;y hại mạnh mẽ l&ecirc;n cơ thể con người, đặc biệt l&agrave; l&agrave;m tổn thương bộ n&atilde;o. V&igrave; thiếu đi một điện tử m&agrave; ch&uacute;ng rất kh&ocirc;ng ổn định, li&ecirc;n tục ph&aacute; ph&aacute;ch v&agrave; chiếm đoạt điện tử từ xung quanh.</span></p>\n	<p style="box-sizing: border-box; margin: 0px 0px 10px; font-family: arial, helvetica, sans-serif; text-align: justify;"><span style="box-sizing: border-box;">Tại mạch m&aacute;u, gốc tự do g&acirc;y tổn thương th&agrave;nh mạch, dẫn đến sự h&igrave;nh th&agrave;nh v&agrave; ph&aacute;t triển c&aacute;c mảng xơ vữa v&agrave; huyết khối. Mảng xơ vữa n&agrave;y lớn dần, l&agrave;m giảm lưu lượng m&aacute;u đến c&aacute;c cơ quan như tiền đ&igrave;nh trung ương, tiền đ&igrave;nh ốc tai. Tại tế b&agrave;o thần kinh giữ vai tr&ograve; chịu tr&aacute;ch nhiệm về th&iacute;nh gi&aacute;c, gốc tự do tấn c&ocirc;ng v&agrave;o m&agrave;ng tế b&agrave;o, l&agrave;m suy giảm hoạt động của ch&uacute;ng. Gốc tự do &ldquo;hai mặt gi&aacute;p c&ocirc;ng&rdquo; l&agrave;m xuất hiện nhiều triệu chứng kh&oacute; chịu cho hệ thống th&iacute;nh gi&aacute;c con người m&agrave; thường gặp nhất l&agrave; chứng &ugrave; tai.</span></p>\n	<p style="box-sizing: border-box; margin: 0px 0px 10px; font-family: arial, helvetica, sans-serif; text-align: justify;"><span style="box-sizing: border-box; font-weight: 700;">Ngăn ngừa chứng &ugrave; tai</span></p>\n	<p style="box-sizing: border-box; margin: 0px 0px 10px; font-family: arial, helvetica, sans-serif; text-align: justify;"><span style="box-sizing: border-box;">Cuộc sống hiện đại với chế độ dinh dưỡng kh&ocirc;ng hợp l&yacute;, thực trạng l&agrave;m việc với m&aacute;y t&iacute;nh trong ph&ograve;ng k&iacute;n, &iacute;t vận động, kh&iacute; hậu biến đổi thất thường&hellip; đang l&agrave;m &ldquo;<em style="box-sizing: border-box;">đội qu&acirc;n hủy diệt</em>&rdquo; gốc tự do &ldquo;sinh s&ocirc;i&rdquo; nhanh đến ch&oacute;ng mặt. V&igrave; thế, cuộc chiến với gốc tự do cần bắt đầu từ sớm, ngay cả khi cơ thể c&ograve;n khỏe mạnh.</span></p>\n	<p style="box-sizing: border-box; margin: 0px 0px 10px; font-family: arial, helvetica, sans-serif; text-align: justify;"><span style="box-sizing: border-box;">Trước ti&ecirc;n, cần giảm thiểu c&aacute;c yếu tố t&aacute;c động tăng sinh gốc tự do như: m&ocirc;i trường &ocirc; nhiễm, rượu bia, kh&oacute;i thuốc l&aacute;, h&oacute;a chất, chấn thương,&nbsp;<em style="box-sizing: border-box;">stress</em>&hellip; Kế đến cơ thể cần được bổ sung chất chống gốc tự do từ thi&ecirc;n nhi&ecirc;n để tăng khả năng ph&ograve;ng vệ v&agrave; trung h&ograve;a gốc tự do một c&aacute;ch hữu hiệu. Gần đ&acirc;y, c&aacute;c nh&agrave; khoa học Mỹ đ&atilde; chiết xuất th&agrave;nh c&ocirc;ng chất chống gốc tự do từ thi&ecirc;n nhi&ecirc;n, nổi bật như anthocyanin, pterostillbene c&oacute; trong OTIV. C&aacute;c hoạt chất n&agrave;y c&oacute; khả năng&nbsp;<a href="http://www.otiv.com.vn/otiv.html" style="box-sizing: border-box; color: rgb(54, 127, 169); text-decoration: none !important; outline: none !important; background-position: 0px 0px; background-repeat: initial initial;">chống gốc tự do</a>&nbsp;mạnh mẽ, bảo vệ tế b&agrave;o thần kinh, hạn chế sự tổn thương th&agrave;nh mạch, ngăn chặn xơ vữa v&agrave; cải thiện lưu lượng m&aacute;u đến c&aacute;c cơ quan. Một khi c&aacute;c độc chất gốc tự do được &ldquo;qu&eacute;t dọn&rdquo; sạch sẽ, c&aacute;c cơ quan như tiền đ&igrave;nh ốc tai sẽ hoạt động tốt hơn v&agrave; c&aacute;c tế b&agrave;o th&iacute;nh gi&aacute;c th&ecirc;m khỏe mạnh, ngăn chặn triệu chứng &ugrave; tai kh&oacute; chịu.</span></p>\n	<p style="box-sizing: border-box; margin: 0px 0px 10px; font-family: arial, helvetica, sans-serif; text-align: right;"><span style="box-sizing: border-box; font-weight: 700;">Theo Thanh Ni&ecirc;n</span></p>\n</div>\n', 'Ù tai'),
(2, 'Bệnh viêm xoang – Nguyên nhân, triệu chứng, điều trị', '<h1 class="entry-title" style="color: rgb(51, 51, 51); font-family: ''Helvetica Neue'', Arial, sans-serif; font-size: 24px; line-height: 1.25; margin: 0px 0px 10px; padding: 0px;">\r\n	Bệnh vi&ecirc;m xoang &ndash; Nguy&ecirc;n nh&acirc;n, triệu chứng, điều trị</h1>\r\n<div class="entry-content" style="overflow: hidden; color: rgb(51, 51, 51); font-family: ''Helvetica Neue'', Arial, Helvetica, sans-serif; font-size: 14px;">\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;"><span style="font-weight: 700;">Bệnh vi&ecirc;m xoang l&agrave;m người bệnh cảm thấy kh&oacute; chịu do những triệu chứng bệnh g&acirc;y ra. Nhức, nghẹt mũi, chảy dịch thậm ch&iacute; l&agrave; điếc mũi l&agrave; những biểu hiện điển h&igrave;nh. Bệnh c&oacute; những đặc điểm g&igrave;? C&aacute;ch điều trị v&agrave; ph&ograve;ng ngừa bệnh thế n&agrave;o? C&ugrave;ng tham khảo những th&ocirc;ng tin hữu &iacute;ch về chứng bệnh n&agrave;y dưới đ&acirc;y.</span></p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;"><img alt="Giải pháp mới cho người mắc Viêm xoang dị ứng 1" class="aligncenter size-full wp-image-200" height="306" src="http://xoangbachphuc.vn/wp-content/uploads/2014/09/xoang.jpg" style="height: auto; max-width: 100%; display: block; margin: 0px auto 10px;" title="Giải pháp mới cho người mắc Viêm xoang dị ứng 1" width="450" /></p>\r\n	<h2 style="font-family: ''Helvetica Neue'', Arial, sans-serif; font-size: 18px; line-height: 1.25; margin: 0px 0px 10px; padding: 0px;">\r\n		Định nghĩa bệnh vi&ecirc;m xoang</h2>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;"><a href="http://xoangbachphuc.vn/da-ngu-ngon-giac-khi-khong-con-viem-xoang-di-ung-673/" style="color: rgb(13, 114, 199); text-decoration: none;" target="_blank"><span style="font-weight: 700;">Bệnh&nbsp;Vi&ecirc;m xoang</span></a>&nbsp;l&agrave; bệnh xảy ra do hiện tượng vi&ecirc;m c&aacute;c xoang cạnh mũi, đa số c&aacute;c trường hợp l&agrave; do nhiễm tr&ugrave;ng. Vi&ecirc;m xoang được chia l&agrave; 2 loại</p>\r\n	<ul style="margin: 0px; padding: 0px 0px 25px;">\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Vi&ecirc;m xoang cấp t&iacute;nh, loại n&agrave;y thường điều trị nội khoa</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Vi&ecirc;m xoang mạn t&iacute;nh, phải điều trị ngoại khoa</li>\r\n	</ul>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Vi&ecirc;m xoang cấp t&iacute;nh theo thứ tự thường gặp l&agrave;:</p>\r\n	<ul style="margin: 0px; padding: 0px 0px 25px;">\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Vi&ecirc;m xoang h&agrave;m</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Vi&ecirc;m xoang s&agrave;ng</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Vi&ecirc;m xoang tr&aacute;n</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Vi&ecirc;m xoang bướm</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Vi&ecirc;m nhiều xoang một l&uacute;c</li>\r\n	</ul>\r\n	<h2 style="font-family: ''Helvetica Neue'', Arial, sans-serif; font-size: 18px; line-height: 1.25; margin: 0px 0px 10px; padding: 0px;">\r\n		Triệu chứng bệnh vi&ecirc;m xoang</h2>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Vi&ecirc;m xoang thường c&oacute; biểu hiện như đau nhức, chảy dịch, nghẹt mũi, điếc mũi. Khi ở thể nhẹ kh&oacute; ph&aacute;t hiện v&igrave; triệu chứng kh&aacute; đơn độc. Nhưng khi bệnh đ&atilde; trở nặng th&igrave; c&oacute; &iacute;t nhất l&agrave; 3 trong những triệu chứng tr&ecirc;n. Dưới đ&acirc;y l&agrave; những biểu hiện cụ thể của bệnh:</p>\r\n	<h3 style="font-family: ''Helvetica Neue'', Arial, sans-serif; font-size: 16px; line-height: 1.25; margin: 0px 0px 10px; padding: 0px;">\r\n		Cảm gi&aacute;c đau nhức v&ugrave;ng bị xoang</h3>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">V&ugrave;ng bị xoang c&oacute; cảm gi&aacute;c đau nhức, t&ugrave;y thuộc bị xoang ở v&ugrave;ng n&agrave;o m&agrave; sẽ c&oacute; cảm gi&aacute;c đau nhức ở v&ugrave;ng đ&oacute;:</p>\r\n	<ul style="margin: 0px; padding: 0px 0px 25px;">\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Xoang h&agrave;m: Nhức ở v&ugrave;ng m&aacute;</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Xoang tr&aacute;n: V&ugrave;ng giữa 2 l&ocirc;ng m&agrave;y c&oacute; cảm gi&aacute;c đau nhức, v&agrave; đau giờ nhất định thường l&agrave; v&agrave;o 10 giờ s&aacute;ng</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Xoang s&agrave;ng trước: Nhức giữa 2 mắt.</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Xoang s&agrave;ng sau, xoang bướm: Nhức trong s&acirc;u, nhức v&ugrave;ng g&aacute;y</li>\r\n	</ul>\r\n	<h3 style="font-family: ''Helvetica Neue'', Arial, sans-serif; font-size: 16px; line-height: 1.25; margin: 0px 0px 10px; padding: 0px;">\r\n		Hiện tượng chảy dịch</h3>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Bị xoang thường c&oacute; hiện tượng chảy dịch, t&ugrave;y thuộc v&agrave;o vị tr&iacute; xoang bị vi&ecirc;m m&agrave; dịch nh&agrave;y chảy ra ph&iacute;a mũi hoặc xuống họng.</p>\r\n	<ul style="margin: 0px; padding: 0px 0px 25px;">\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Vi&ecirc;m xoang trước: Chảy ra mũi trước</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Vi&ecirc;m xoang sau: Dịch chảy v&agrave;o họng</li>\r\n	</ul>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Khi bị chảy dịch người bệnh lu&ocirc;n&nbsp; phải khụt khịt, ở mũi hoặc c&oacute; cảm gi&aacute;c lờ đờ ở cổ họng v&agrave; lu&ocirc;n muốn khạc nhổ. T&ugrave;y theo t&igrave;nh h&igrave;nh ph&aacute;t triển của bệnh m&agrave; dịch sẽ c&oacute; m&agrave;u trắng, đục, v&agrave;ng nhạt hoặc m&agrave;u xanh, c&oacute; m&ugrave;i h&ocirc;i, khẳn.</p>\r\n	<h3 style="font-family: ''Helvetica Neue'', Arial, sans-serif; font-size: 16px; line-height: 1.25; margin: 0px 0px 10px; padding: 0px;">\r\n		Ngạt mũi</h3>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Khi bị xoang, biểu hiện kh&ocirc;ng thể thiếu được đ&oacute; ch&iacute;nh l&agrave; hiện tượng nghẹt mũi. C&oacute; thể bị nghẹt một b&ecirc;n hoặc cả 2 b&ecirc;n. Khi bị nghẹt mũi sẽ c&oacute; cảm gi&aacute;c kh&oacute; thở, rất kh&oacute; chịu v&agrave; mệt mỏi.</p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: center;"><a href="http://xoangbachphuc.vn/wp-content/uploads/2015/09/8c3.jpg" style="color: rgb(13, 114, 199); text-decoration: none;"><img alt="Ngạt mũi 1" class="alignnone size-full wp-image-4696" height="300" src="http://xoangbachphuc.vn/wp-content/uploads/2015/09/8c3.jpg" style="height: auto; max-width: 100%; border: none; display: inline; margin: 0px 0px 10px;" title="Ngạt mũi 1" width="600" /></a></p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: center;"><span style="font-family: Arial;">Ngạt mũi k&eacute;o d&agrave;i c&oacute; thể l&agrave; biểu hiện của bệnh xoang &ndash; Ảnh minh họa</span></p>\r\n	<h3 style="font-family: ''Helvetica Neue'', Arial, sans-serif; font-size: 16px; line-height: 1.25; margin: 0px 0px 10px; padding: 0px;">\r\n		Điếc mũi</h3>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Khi vi&ecirc;m xoang v&agrave;o giai đoạn nặng thường g&acirc;y ph&ugrave; nề nhiều, ngửi kh&ocirc;ng biết m&ugrave;i. Nguy&ecirc;n nh&acirc;n l&agrave; do m&ugrave;i đ&oacute; kh&ocirc;ng len lỏi đến thần kinh khứu gi&aacute;c được.</p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Ngo&agrave;i một số biểu hiện ch&iacute;nh tr&ecirc;n, người bị vi&ecirc;m xoang c&ograve;n bị một số triệu chứng sau:</p>\r\n	<ul style="margin: 0px; padding: 0px 0px 25px;">\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Đau đầu</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Sốt nhẹ hoặc sốt cao</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">C&oacute; cảm gi&aacute;c ch&oacute;ng mặt, cho&aacute;ng v&aacute;ng khi nghi&ecirc;ng về ph&iacute;a trước</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">V&ugrave;ng quanh mắt đau nhức từng cơn v&agrave; theo nhịp mạch đập của cơ thể</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Vi&ecirc;m xoang do răng số 5,6,7 h&agrave;m tr&ecirc;n sẽ thấy bị &aacute;p xe quanh răng</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Khi bệnh nh&acirc;n hắt x&igrave; hơi mạnh g&acirc;y đau nhức, c&oacute; khi c&oacute; cả tia m&aacute;u</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Ăn uống kh&ocirc;ng ngon, ngủ kh&ocirc;ng y&ecirc;n giấc, kh&ocirc;ng tập trung l&agrave;m việc được</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Một số&nbsp;bệnh nh&acirc;n c&ograve;n bị mờ mắt do vi&ecirc;m thị thần kinh hậu nh&atilde;n cầu</li>\r\n	</ul>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;"><span style="font-weight: 700;">Xem đầy đủ hơn:</span>&nbsp;<a href="http://xoangbachphuc.vn/trieu-chung-viem-xoang-209/" style="color: rgb(13, 114, 199); text-decoration: none;" target="_blank"><span style="font-family: Arial;">C&aacute;c triệu chứng của vi&ecirc;m xoang mũi</span></a></p>\r\n	<h2 style="font-family: ''Helvetica Neue'', Arial, sans-serif; font-size: 18px; line-height: 1.25; margin: 0px 0px 10px; padding: 0px;">\r\n		Nguy&ecirc;n nh&acirc;n g&acirc;y vi&ecirc;m xoang</h2>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">C&oacute; nhiều nguy&ecirc;n nh&acirc;n dẫn đến chứng vi&ecirc;m xoang, nhưng phổ biến l&agrave; một số nguy&ecirc;n nh&acirc;n dưới đ&acirc;y:</p>\r\n	<ul style="margin: 0px; padding: 0px 0px 25px;">\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Ứ đọng chất nhầy do cản trở luồng kh&ocirc;ng kh&iacute; v&agrave;o khiến chất dịch tho&aacute;t kh&ocirc;ng kịp, lỗ th&ocirc;ng xoang tắc nghẽn l&agrave;m m&ocirc;i trường cho vi khuẩn, nấm ph&aacute;t triển trong c&aacute;c xoang.</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">H&oacute;a chất, thức ăn biến chất l&agrave;m cho ni&ecirc;m mạc mũi ph&ugrave; nề g&acirc;y hiện tượng b&iacute;t tắc lỗ th&ocirc;ng xoang v&agrave; nhiễm tr&ugrave;ng</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Sự đề kh&aacute;ng của cơ thể k&eacute;m, hệ miễn dịch suy giảm, suy yếu ni&ecirc;m mạc đường h&ocirc; hấp, hệ thần kinh bị rối loạn kh&ocirc;ng đủ sức chống lại vi khuẩn. Khi bị vi&ecirc;m xoang thường k&egrave;m theo vi&ecirc;m một số bộ phận kh&aacute;c.</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Tuyến nhầy của vi&ecirc;m mạc xoang hoạt động qu&aacute; nhiều.</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Hệ thống l&ocirc;ng chuyển, c&oacute; chức năng vận chuyển c&aacute;c chất&nbsp;nhầy trong xoang ra ngo&agrave;i hoạt động k&eacute;m.</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Hiện tượng vi&ecirc;m mũi sau nhiễm si&ecirc;u vi, hiện tượng bội nhiễm,&nbsp;<a href="http://xoangbachphuc.vn/benh-viem-mui-di-ung-85/" style="color: rgb(13, 114, 199); text-decoration: none;" target="_blank">vi&ecirc;m mũi dị ứng</a>&nbsp;k&eacute;o d&agrave;i hoặc do t&igrave;nh trạng vẹo v&aacute;ch ngăn. Một số trường hợp s&acirc;u răng l&agrave; do hậu quả của s&acirc;u răng, nhiễm tr&ugrave;ng răng h&agrave;m tr&ecirc;n.</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Sau chấn thương c&oacute; tổn thương ni&ecirc;m mạc xoang.</li>\r\n	</ul>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: center;"><a href="http://xoangbachphuc.vn/wp-content/uploads/2015/09/20140313-explosion-gobig-slide-oeaf-superjumbo.jpg" style="color: rgb(13, 114, 199); text-decoration: none;"><img alt="Nguyên nhân gây viêm xoang 1" class="alignnone size-full wp-image-4697" height="400" src="http://xoangbachphuc.vn/wp-content/uploads/2015/09/20140313-explosion-gobig-slide-oeaf-superjumbo.jpg" style="height: auto; max-width: 100%; border: none; display: inline; margin: 0px 0px 10px;" title="Nguyên nhân gây viêm xoang 1" width="600" /></a></p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: center;"><span style="font-family: Arial;">&Ocirc; nhiễm kh&ocirc;ng kh&iacute; cũng l&agrave; một trong những nguy&ecirc;n nh&acirc;n g&acirc;y bệnh xoang &ndash; Ảnh minh họa</span></p>\r\n	<h2 style="font-family: ''Helvetica Neue'', Arial, sans-serif; font-size: 18px; line-height: 1.25; margin: 0px 0px 10px; padding: 0px;">\r\n		Điều trị bệnh vi&ecirc;m xoang</h2>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Vi&ecirc;m xoang mũi được điều trị t&ugrave;y theo giai đoạn, tổn thương của ni&ecirc;m mạc mũi cũng như nguy&ecirc;n nh&acirc;n g&acirc;y bệnh. Vi&ecirc;m xoang c&oacute; thể được điều trị bằng phương ph&aacute;p Đ&ocirc;ng t&acirc;y y kết hợp hoặc l&agrave; cả 2 phương ph&aacute;p tr&ecirc;n</p>\r\n	<h3 style="font-family: ''Helvetica Neue'', Arial, sans-serif; font-size: 16px; line-height: 1.25; margin: 0px 0px 10px; padding: 0px;">\r\n		Điều trị bằng thuốc</h3>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Hiện nay tr&ecirc;n thị trường c&oacute; nhiều loại thuốc điều trị vi&ecirc;m xoang, vi&ecirc;m mũi dị ứng. Nhưng việc lựa chọn thuốc điều trị cần cẩn thận, n&ecirc;n l&agrave;m theo hướng dẫn của b&aacute;c sĩ.</p>\r\n	<h3 style="font-family: ''Helvetica Neue'', Arial, sans-serif; font-size: 16px; line-height: 1.25; margin: 0px 0px 10px; padding: 0px;">\r\n		Điều trị c&aacute;ch d&acirc;n gian</h3>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">C&oacute; thể điều trị vi&ecirc;m xoang bằng c&aacute;ch: Mua một &iacute;t l&aacute; x&ocirc;ng trong đ&oacute; c&oacute; bạc h&agrave; về nấu, x&ocirc;ng cả người hoặc m&uacute;c ra một b&aacute;t lớn x&ocirc;ng tỏa hơi, h&iacute;t hơi n&oacute;ng bốc l&ecirc;n hoặc đầu phủ một khăn tắm lớn.</p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Rửa hốc mũi bằng nước muối sinh l&yacute;: Rửa mũi bằng nước muối sinh l&yacute;&nbsp;&nbsp;0,9%, hoặc tự pha một th&igrave;a c&agrave; ph&ecirc; muối v&agrave;o hai t&aacute;ch nước ấm k&egrave;m theo một nh&uacute;m bicarbonat. R&oacute;t nước muối v&agrave;o một b&aacute;t rộng, ngửa đầu ra sau, bịt một b&ecirc;n lỗ mũi, h&iacute;t nước v&agrave;o lỗ mũi b&ecirc;n kia, rồi nhẹ nh&agrave;ng hỉ mũi ra. Đổi b&ecirc;n v&agrave; cũng l&agrave;m tương tự.</p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: center;"><a href="http://xoangbachphuc.vn/wp-content/uploads/2015/09/17-rua-mui-bang-nuoc-mui-giup-giam-trieu-chung-cam-lanh.jpg" style="color: rgb(13, 114, 199); text-decoration: none;"><img alt="Điều trị cách dân gian 1" class="alignnone size-full wp-image-4698" height="450" src="http://xoangbachphuc.vn/wp-content/uploads/2015/09/17-rua-mui-bang-nuoc-mui-giup-giam-trieu-chung-cam-lanh.jpg" style="height: auto; max-width: 100%; border: none; display: inline; margin: 0px 0px 10px;" title="Điều trị cách dân gian 1" width="600" /></a></p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: center;"><span style="font-family: Arial;">Rửa mũi mỗi ng&agrave;y gi&uacute;p hạn chế những ảnh hưởng của bệnh xoang &ndash; Ảnh minh họa</span></p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">C&acirc;y hoa cứt lợn: H&aacute;i hoa tươi đem về gi&atilde; n&aacute;t rồi lấy nước nhỏ mũi h&agrave;ng ng&agrave;y . Hoa cứt lợn c&oacute; t&aacute;c dụng chống vi&ecirc;m, chống ph&ugrave; nề, chống dị ứng trong cả đợt cấp v&agrave; mạn t&iacute;nh. Đồng thời k&iacute;ch th&iacute;ch ni&ecirc;m mạc mũi tăng xuất tiết n&ecirc;n khi d&ugrave;ng người bệnh thấy r&aacute;t bỏng to&agrave;n bộ ni&ecirc;m mạc mũi.</p>\r\n	<h3 style="font-family: ''Helvetica Neue'', Arial, sans-serif; font-size: 16px; line-height: 1.25; margin: 0px 0px 10px; padding: 0px;">\r\n		Điều trị bằng phẫu thuật</h3>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Việc điều trị bằng phương ph&aacute;p n&agrave;y chỉ sử dụng khi c&oacute; biến chứng lan v&agrave;o mắt v&agrave; nội so nhưng việc điều trị nội khoa gặp thất bại.</p>\r\n	<h2 style="font-family: ''Helvetica Neue'', Arial, sans-serif; font-size: 18px; line-height: 1.25; margin: 0px 0px 10px; padding: 0px;">\r\n		Ph&ograve;ng ngừa bệnh vi&ecirc;m xoang</h2>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Để ph&ograve;ng ngừa vi&ecirc;m xoang một c&aacute;ch hiệu quả, người bệnh cần lưu &yacute; một số điểm dưới đ&acirc;y:</p>\r\n	<ul style="margin: 0px; padding: 0px 0px 25px;">\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Khi ra ngo&agrave;i đường bụi bặm n&ecirc;n đeo khẩu trang, n&ecirc;n sử dụng khẩu trang y tế. M&ocirc;i trường xung quanh dọn cho sạch sẽ, tr&aacute;nh xa kh&oacute;i bụi, chất thải</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Khi bị tắc mũi, nghẹt mũi kh&ocirc;ng n&ecirc;n d&ugrave;ng c&aacute;c loại tinh dầu quế, hồi để l&agrave;m cao xoa cho trẻ v&igrave; sẽ g&acirc;y k&iacute;ch th&iacute;ch xung huyết da v&agrave; ni&ecirc;m mạc đường h&ocirc; hấp của trẻ.</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Đối với những người mẫn cảm cần ch&uacute; &yacute; tr&aacute;nh xa c&aacute;c dị nguy&ecirc;n g&acirc;y dị ứng. Kh&ocirc;ng n&ecirc;n cho tay v&agrave;o ngo&aacute;y mũi v&igrave; dễ d&agrave;ng cho vi tr&ugrave;ng v&agrave;o b&ecirc;n trong khiến bệnh c&agrave;ng trở n&ecirc;n nghi&ecirc;m trọng</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Khi đi tắm hoặc đi bơi nếu nước v&agrave;o tai hoặc mũi cần biết c&aacute;ch để cho nước ra ngo&agrave;i</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Kh&ocirc;ng d&ugrave;ng chung vật dụng đối với những người bị vi&ecirc;m xoang</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Khi c&oacute; c&aacute;c triệu chứng ban đầu của vi&ecirc;m xoang cần đến c&aacute;c trung t&acirc;m y tế để thăm kh&aacute;m cũng như điều trị bệnh kịp thời.</li>\r\n	</ul>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: center;"><a href="http://xoangbachphuc.vn/wp-content/uploads/2015/09/dau-rat-co-hong-so-mui-la-benh-gi.jpg" style="color: rgb(13, 114, 199); text-decoration: none;"><img alt="Phòng ngừa bệnh viêm xoang 1" class="alignnone size-full wp-image-4699" height="476" src="http://xoangbachphuc.vn/wp-content/uploads/2015/09/dau-rat-co-hong-so-mui-la-benh-gi.jpg" style="height: auto; max-width: 100%; border: none; display: inline; margin: 0px 0px 10px;" title="Phòng ngừa bệnh viêm xoang 1" width="600" /></a></p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: center;"><span style="font-family: Arial;">Kh&aacute;m bệnh xoang kịp thời &ndash; Ảnh minh họa</span></p>\r\n	<h2 style="font-family: ''Helvetica Neue'', Arial, sans-serif; font-size: 18px; line-height: 1.25; margin: 0px 0px 10px; padding: 0px;">\r\n		Chế độ dinh dưỡng người bị vi&ecirc;m xoang</h2>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Cần c&oacute; một chế độ ăn uống khoa học v&agrave; điều độ, m&ocirc;i trường sống l&agrave;nh mạnh để triệu chứng của bệnh thuy&ecirc;n giảm hơn. Dưới đ&acirc;y l&agrave; một số thực phẩm n&ecirc;n d&ugrave;ng v&agrave; kh&ocirc;ng n&ecirc;n sử dụng cho người bệnh vi&ecirc;m xoang:</p>\r\n	<h3 style="font-family: ''Helvetica Neue'', Arial, sans-serif; font-size: 16px; line-height: 1.25; margin: 0px 0px 10px; padding: 0px;">\r\n		Thực phẩm n&ecirc;n d&ugrave;ng</h3>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Uống nước đun s&ocirc;i để nguội, n&ecirc;n uống nhiều nước v&igrave; nước l&agrave;m lo&atilde;ng chất nhầy, bong lớp mũi đặc v&agrave; tạo r&atilde;nh th&ocirc;ng tho&aacute;ng, dễ khạc đờm, tống bụi bẩn ra ngo&agrave;i.</p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;"><img alt="Thực phẩm nên dùng 1" class="aligncenter size-full wp-image-201" height="381" src="http://xoangbachphuc.vn/wp-content/uploads/2014/09/uong-nuoc.jpg" style="height: auto; max-width: 100%; display: block; margin: 0px auto 10px;" title="Thực phẩm nên dùng 1" width="500" /></p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: center;"><span style="font-family: Arial;">Uống nước đun s&ocirc;i để nguội l&agrave;m lo&atilde;ng chất nhầy</span></p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Tăng cường ăn c&aacute;c thực phẩm chất b&eacute;o omega-3&nbsp; c&oacute; &nbsp;t&aacute;c dụng ngăn chặn c&aacute;c phản ứng vi&ecirc;m tấy tr&ecirc;n đường h&ocirc; hấp như: c&aacute; hồi, c&aacute; nục, c&aacute; m&ograve;i&hellip;</p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Bổ sung vitamin C để tăng cường sức đề kh&aacute;ng cho cơ thể, một số thực phẩm chứa nhiều vitamin loại n&agrave;y như ớt chu&ocirc;ng, c&agrave; rốt, bưởi, c&oacute;c, sơ ri&hellip;</p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Một số thực phẩm c&oacute; t&iacute;nh ấm như gừng, tỏi&hellip; c&oacute; chứa nhiều chất kh&aacute;ng sinh c&oacute; t&aacute;c dụng ph&ograve;ng chống bệnh vi&ecirc;m xoang</p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: center;"><img alt="Thực phẩm nên dùng 2" class="aligncenter wp-image-202" height="330" src="http://xoangbachphuc.vn/wp-content/uploads/2014/09/toi1.jpg" style="height: auto; max-width: 100%; display: block; margin: 0px auto 10px;" title="Thực phẩm nên dùng 2" width="495" /></p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: center;"><span style="font-family: Arial;">Tỏi c&oacute; t&iacute;nh ấm ph&ograve;ng chống vi&ecirc;m xoang</span></p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Tăng cường ăn c&aacute;c thực phẩm từ đậu n&agrave;nh gi&uacute;p &nbsp;cung cấp canxi, kho&aacute;ng tố cần thiết cho chức năng chống dị ứng.</p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Những m&oacute;n&nbsp;ăn c&oacute; t&aacute;c dụng&nbsp;ấm bổ phế &acirc;m như: gạo nếp, củ từ, t&aacute;o t&agrave;u, nh&atilde;n, đường đỏ, sữa chua&hellip;n&ecirc;n được tăng cường hấp thu</p>\r\n	<h3 style="font-family: ''Helvetica Neue'', Arial, sans-serif; font-size: 16px; line-height: 1.25; margin: 0px 0px 10px; padding: 0px;">\r\n		Thực phẩm n&ecirc;n tr&aacute;nh</h3>\r\n	<ul style="margin: 0px; padding: 0px 0px 25px;">\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Kh&ocirc;ng n&ecirc;n uống nước để trong tủ lạnh hoặc nước đ&aacute;, do sự ch&ecirc;nh lệch nhiệt độ sẽ tạo ra k&iacute;ch th&iacute;ch đối với ni&ecirc;m mạc v&ugrave;ng hầu, họng v&agrave; đường h&ocirc; hấp</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Sử dụng sinh tố tr&aacute;i c&acirc;y, nước &eacute;p tr&aacute;i c&acirc;y v&igrave; đường v&agrave; một số chất kh&aacute;c c&oacute; thể l&agrave;m hiện tượng nh&agrave;y mũi c&agrave;ng đặc lại</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">N&ecirc;n tr&aacute;nh những m&oacute;n ăn m&agrave; cơ thể bị dị ứng như hải sản, thịt b&ograve;&hellip;</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">C&aacute;c sản phẩm từ bơ sữa n&ecirc;n hạn chế sử dụng</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">C&agrave; ph&ecirc;, bia rượu kh&ocirc;ng n&ecirc;n uống v&igrave; ch&uacute;ng c&oacute; thể l&agrave;m cho dịch nhầy đặc lại đồng thời ch&uacute;ng l&agrave; chất lợi tiểu, k&iacute;ch th&iacute;ch việc đ&agrave;o thải nước l&agrave;m cơ thể thiếu nước ảnh hưởng xấu tới việc đẩy dịch nhớt ứ đọng trong xoang.</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Kh&ocirc;ng sử dụng nước soda v&igrave; loại nước n&agrave;y thường g&acirc;y ra ợ n&oacute;ng, dẫn đến tr&agrave;o ngược kh&iacute; ra khỏi dạ d&agrave;y, kh&ocirc;ng tốt cho người bị vi&ecirc;m xoang.</li>\r\n	</ul>\r\n	<h3 style="font-family: ''Helvetica Neue'', Arial, sans-serif; font-size: 16px; line-height: 1.25; margin: 0px 0px 10px; padding: 0px;">\r\n		M&oacute;n ăn tốt cho người bệnh vi&ecirc;m xoang</h3>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;"><span style="font-weight: 700;">Canh gừng</span></p>\r\n	<ul style="margin: 0px; padding: 0px 0px 25px;">\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Gừng sấy kh&ocirc; 10g</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">Cam thảo nước 20g</li>\r\n	</ul>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Lấy hai vị thuốc tr&ecirc;n sắc nước uống, mỗi ng&agrave;y một thang, buổi s&aacute;ng, buổi tối mỗi buổi một nửa. M&oacute;n ăn c&oacute; t&aacute;c dụng t&iacute;nh ấm trợ dương, tăng cường khả năng miễn dịch</p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;"><span style="font-weight: 700;">Canh t&aacute;o đỏ</span></p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">T&aacute;o đỏ 10 quả đem nấu nước uống, mỗi ng&agrave;y 3 lần, c&oacute; t&aacute;c dụng bổ dưỡng phế &acirc;m, th&ocirc;ng mũi.</p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;"><span style="font-weight: 700;">Đậu đao x&agrave;o</span></p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Lấy đậu đao gi&agrave;, d&ugrave;ng lửa nhỏ sấy kh&ocirc;, sau đ&oacute; tiếp tục th&aacute;i nhỏ, cuối c&ugrave;ng cho v&agrave;o trong nồi, cho một ch&uacute;t rượu (kh&ocirc;ng cho muối) x&agrave;o một l&uacute;c l&agrave; được. M&oacute;n ăn c&oacute; t&aacute;c dụng ph&ograve;ng trị bệnh vi&ecirc;m xoang mũi, vi&ecirc;m mũi dị ứng.</p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;"><span style="font-weight: 700;">Nước bạc h&agrave; v&agrave; hoa kim ng&acirc;n, hoa c&uacute;c</span></p>\r\n	<ul style="margin: 0px; padding: 0px 0px 25px;">\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;">L&aacute; bạc h&agrave; tươi 10g</li>\r\n	<li style="margin: 0px 0px 0px 30px; padding: 0px; list-style-type: square;"><a href="http://xoangbachphuc.vn/chua-viem-xoang-bang-kim-ngan-hoa-497/" style="color: rgb(13, 114, 199); text-decoration: none;" target="_blank">Hoa kim ng&acirc;n</a>, hoa c&uacute;c (mỗi loại 10g)</li>\r\n	</ul>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Cho cả 3 nguy&ecirc;n liệu v&agrave;o nồi, cho nước vừa đủ nấu lấy nước d&ugrave;ng.</p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;"><span style="font-weight: 700;">Canh mướp nấu thịt</span></p>\r\n	<p style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;">Một lượng mướp v&agrave; thịt nạc vừa đủ. Mướp rửa sạch, cắt đoạn; thịt th&aacute;i miếng mỏng đem nấu canh để d&ugrave;ng l&uacute;c n&oacute;ng khi mắc bệnh.</p>\r\n	<p align="right" style="line-height: 1.5625; margin: 0px 0px 25px; padding: 0px; text-align: justify;"><span style="font-family: Arial;"><span style="font-weight: 700;">Xoangbachphuc.vn</span></span></p>\r\n</div>\r\n', 'Viêm xoang cấp');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`CategoryId`);

--
-- Indexes for table `Comment`
--
ALTER TABLE `Comment`
  ADD PRIMARY KEY (`CommentId`);

--
-- Indexes for table `CommentHoiDap`
--
ALTER TABLE `CommentHoiDap`
  ADD PRIMARY KEY (`cmtId`);

--
-- Indexes for table `HoiDap`
--
ALTER TABLE `HoiDap`
  ADD PRIMARY KEY (`hoidapId`);

--
-- Indexes for table `NhatKiCuaToi`
--
ALTER TABLE `NhatKiCuaToi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SickNews`
--
ALTER TABLE `SickNews`
  ADD PRIMARY KEY (`newsId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Category`
--
ALTER TABLE `Category`
  MODIFY `CategoryId` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `Comment`
--
ALTER TABLE `Comment`
  MODIFY `CommentId` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `CommentHoiDap`
--
ALTER TABLE `CommentHoiDap`
  MODIFY `cmtId` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `HoiDap`
--
ALTER TABLE `HoiDap`
  MODIFY `hoidapId` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `NhatKiCuaToi`
--
ALTER TABLE `NhatKiCuaToi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `SickNews`
--
ALTER TABLE `SickNews`
  MODIFY `newsId` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
