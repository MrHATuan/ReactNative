<?php 
    mysql_connect('localhost', 'root', '');
    mysql_select_db('suckhoe');
    mysql_query('SET NAMES utf8');


    $data = json_decode(file_get_contents('php://input'), true);

    $arrSicknessNews = array();
    $sickName = $data["sickName"];

    // Tao class sicknews chua du lieu
    class sicknews {
        var $newsId;
        var $newsName;
        var $newsDes;

        function sicknews($_id, $_name, $_des) {
            $this->newsId   = $_id;
            $this->newsName = $_name;
            $this->newsDes  = $_des;
        }
    }

    $sql = "SELECT * FROM sicknews WHERE sickName = $sickName";
    $query = mysql_query($sql);

    while ($row = mysql_fetch_array($query)) {
        array_push($arrSicknessNews, new sicknews($row["newsId"], $row["newsName"], $row["newsDes"]));
    }

    echo json_encode($arrSicknessNews);
?>