<?php
// base64加密
$encodeString = base64_encode("測試字元!");
echo $encodeString;

echo "<br>";

// base64解密
echo base64_decode($encodeString);
?>