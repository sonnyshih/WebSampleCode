<?php
    $dateString = "2020-12-30 22:30:25";
    echo "原始日期字串: ". $dateString ."<br>";

    $dateValue = strtotime($dateString);
    echo "格式1: ". date('Y-m-d H:i:s', $dateValue). "<br>" ;   // 完整時間

    $dateValue = strtotime($dateString);
    echo "格式2: ". date('Y-F-d H:i:s', $dateValue). "<br>" ;   // 完整時間

    $dateValue = strtotime($dateString);
    echo "格式3: ". date('Y-M-d H:i:s', $dateValue). "<br>" ;   // 完整時間

    $year = date("Y", $dateValue);
    echo "年: ". $year. "<BR>";

    $monNumber = date("m", $dateValue);         // 月份數字
    echo "月(數字): ". $monNumber ."<br>";

    $monFullString = date("F", $dateValue);     // 月份英文完整
    echo "月(英文完整): ". $monFullString ."<br>";

    $monShortString = date("M", $dateValue);    // 月份英文縮寫
    echo "月(月份英文縮寫): ". $monShortString ."<br>";

    $day = date("d", $dateValue);               // 日
    echo "日: ". $day ."<br>";

    $hour = date("d", $dateValue);               // 時

    $date = $monShortString." ". $day .", ". $year;
    echo $date;

?>