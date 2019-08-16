<?php
date_default_timezone_set('Asia/Taipei');   // 設定時區為台北時區
$script_tz = date_default_timezone_get();
echo $script_tz . "<br><br>";

$nowTime = date("Y-m-d H:i:s"); // Now Time on current server.
echo "現在時間(目前主機時間): " . $nowTime . "<br><br>";

$plus2DayNowTime = date('Y-m-d H:i:s', strtotime('+2 day')); // plus 2 days on current server.
echo "現在時間(目前主機時間) +2 天: " . $plus2DayNowTime . "<br><br>";

$minus2DayNowTime = date('Y-m-d H:i:s', strtotime('-2 day')); // minus 2 days on current server.
echo "現在時間(目前主機時間) -2 天: " . $minus2DayNowTime . "<br><br>";

$plus1YearNowTime = date('Y-m-d H:i:s', strtotime('+1 year')) . "<br><br>";
echo "現在時間(目前主機時間) +1年: " . $plus1YearNowTime;

$plus1MonthNowTime = date('Y-m-d H:i:s', strtotime('+1 month')) . "<br><br>";
echo "現在時間(目前主機時間) +1個月: " . $plus1MonthNowTime;

$plus1WeekNowTime = date('Y-m-d H:i:s', strtotime('+1 week')) . "<br><br>";
echo "現在時間(目前主機時間) +1星期: " . $plus1WeekNowTime;

$plus1HourNowTime = date('Y-m-d H:i:s', strtotime('+1 hour')) . "<br><br>";
echo "現在時間(目前主機時間) +1小時: " . $plus1HourNowTime;

$plus1MinuteNowTime = date('Y-m-d H:i:s', strtotime('+1 minute')) . "<br><br>";
echo "現在時間(目前主機時間) +1分鐘: " . $plus1MinuteNowTime;

$plus1SecondNowTime = date('Y-m-d H:i:s', strtotime('+1 second')) . "<br><br>";
echo "現在時間(目前主機時間) +1秒鐘: " . $plus1SecondNowTime;

$mixPlusNowTime = date('Y-m-d H:i:s', strtotime('+1 year +2 month +3 day +4 hour +5 minute +6 second')) . "<br><br>";
echo "現在時間(目前主機時間) +1年, +2個月, +3天, +4小時, +5分鐘, +6秒鐘: " . $mixPlusNowTime;

$pointTimeToPlus = date("Y-m-d", strtotime("+1 day", strtotime("2012-02-04"))) . "<br><br>";
echo "指定時間 +1天: " . $pointTimeToPlus;

?>