<?php


echo "===== 這個月的第一天的日期，這個月的最後一天的日期 =====<br>";
$nowMonthFirstDay = date('Y-m-1');
$nowMonthLastDay  = date('Y-m-d',strtotime(date('Y-m-1',strtotime('next month')).'-1 day'));
echo '當月第一天日期: '.$nowMonthFirstDay. "<br>";
echo '當月最後一天的日期'.$nowMonthLastDay. "<br>";
echo "<br>";

echo "===== 上個月第一天的日期格式，上個月最後一天的日期格式 =====<br>";
$lastMonthFirstDay = date('Y-m-1',strtotime('last month'));
$lastMonthLastDay = date('Y-m-d',strtotime(date('Y-m-1').'-1 day'));
echo '上個月第一天的日期格式:'.$lastMonthFirstDay.'<br>';
echo '上個月最後一天的日期格式:'.$lastMonthLastDay.'<br>';
echo "<br>";


echo "===== 下個月的第一天時間日期 ，下個月的最後一天時間日期 =====<br>";
$nextMonthFirstDay = date('Y-m-1',strtotime('next month'));
$nextMonthLastDay = date('Y-m-d',strtotime(date('Y-m-1',strtotime('next month')).'+1 month -1 day'));
echo '下個月的第一天時間日期'.$nextMonthFirstDay."<br>";
echo '下個月的最後一天時間日期'.$nextMonthLastDay."<br>";
echo "<br>";


?>