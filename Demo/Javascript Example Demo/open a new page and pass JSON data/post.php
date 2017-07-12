<?php
echo "hello=".count($_POST)."<br>";
echo "hh=".$_POST['JsonData']."<br>";
$jsonArray = json_decode($_POST['JsonData']);
echo "json array=".$jsonArray->foo;
?>