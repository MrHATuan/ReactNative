<?php 
    mysql_connect('localhost', 'root', '');
    mysql_select_db('suckhoe');
    mysql_query('SET NAMES utf8');

    $arrCategory = array();

    // Tao class category chua du lieu
    class category {
        var $categoryId;
        var $categoryName;

        function category($_id, $_name) {
            $this->categoryId   = $_id;
            $this->categoryName = $_name;
        }
    }

    $sql = "SELECT * FROM category";
    $query = mysql_query($sql);

    while ($row = mysql_fetch_array($query)) {
        array_push($arrCategory, new category($row["CategoryId"], $row["CategoryName"]));
    }

    echo json_encode($arrCategory);
?>