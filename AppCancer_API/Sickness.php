<?php 
    mysql_connect('localhost', 'root', '');
    mysql_select_db('suckhoe');
    mysql_query('SET NAMES utf8');


    $data = json_decode(file_get_contents('php://input'), true);

    $arrSickness = array();
    $categoryId = $data["categoryId"];

    // Tao class sickness chua du lieu
    class sickness {
        var $sickName;

        function sickness($_name) {
            $this->sickName = $_name;
        }
    }

    $sql = "SELECT * FROM sickness WHERE CategoryId = $categoryId";
    $query = mysql_query($sql);

    while ($row = mysql_fetch_array($query)) {
        array_push($arrSickness, new sickness($row["SickName"]));
    }

    echo json_encode($arrSickness);
?>