<?php
echo "<meta charset='utf-8' />";

$str='中文測試abc123';
echo 'strlen「中文測試abc123」為'.strlen($str)."<br>";
echo 'mb_strlen「中文測試abc123」為'.mb_strlen($str,'utf8')."<br>";

$str2='RussiaРосси́я';
echo 'strlen「RussiaРосси́я」為'.strlen($str2)."<br>";
echo 'mb_strlen「RussiaРосси́я」為'.mb_strlen($str2,'utf8')."<br>"; 
?>