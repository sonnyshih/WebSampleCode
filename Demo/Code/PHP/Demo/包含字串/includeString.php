<?php

$originString = "You love php, I love php too!";
$checkString = "php";
// 字符串中最后一次出现的位置
echo strrpos($originString, $checkString)."<br>";

$originString = "這是貨到付歀";
$checkString = "貨到付歀";
// 字符串中最后一次出现的位置
echo strrpos($originString, $checkString)."<br>";

?>
