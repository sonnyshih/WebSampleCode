<?php
// 參考資料: http://php.net/manual/en/dateinterval.construct.php

$expires1 = new DateTime('NOW');     //取得目前時間
echo "目前時間: ". $expires1->format('Y-m-d H:i:s') . "<br>";
$expires1->add(new DateInterval('PT20M')); // 增加 20分
echo "增加20分: ". $expires1->format('Y-m-d H:i:s') . "<br>";

echo "#####<br>";

$expires2 = new DateTime('NOW');     //取得目前時間
echo "目前時間: ". $expires2->format('Y-m-d H:i:s') . "<br>";
$expires2->add(new DateInterval('PT01H')); // 增加 1 小時
echo "增加1小時: ". $expires2->format('Y-m-d H:i:s') . "<br>";

echo "#####<br>";

$expires3 = new DateTime('NOW');     //取得目前時間
echo "目前時間: ". $expires3->format('Y-m-d H:i:s') . "<br>";
$expires3->add(new DateInterval('P1D')); // 增加 1天
echo "增加1天: ". $expires3->format('Y-m-d H:i:s') . "<br>";

echo "#####<br>";

$expires4 = new DateTime('NOW');     //取得目前時間
echo "目前時間: ". $expires4->format('Y-m-d H:i:s') . "<br>";
$expires4->add(new DateInterval('P1M')); // 增加 1個月
echo "增加1個月: ". $expires4->format('Y-m-d H:i:s') . "<br>";

echo "#####<br>";

$expires5 = new DateTime('NOW');     //取得目前時間
echo "目前時間: ". $expires5->format('Y-m-d H:i:s') . "<br>";
$expires5->add(new DateInterval('P1Y')); // 增加 1個月
echo "增加1年: ". $expires5->format('Y-m-d H:i:s') . "<br>";

?>