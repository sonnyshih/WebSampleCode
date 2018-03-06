<?php
//echo $_POST["key"];

$value = array("Respone"=>"success", "ID" => $_POST["key"]);



echo json_encode($value);
?>