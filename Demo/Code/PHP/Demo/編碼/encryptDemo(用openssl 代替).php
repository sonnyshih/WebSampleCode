<?php
// 設定金鑰, 負責對資料進行加解密
define("KEY", "ac181c517bdf24ce053556bb280a2dcb");

$encryptString = encrypt("測試字元!");
echo $encryptString;

echo "<br>";

echo decrypt($encryptString);



/**
 * 加密函數
 */
function encrypt($str) {
    // mcrypt_get_iv_size is Deprecated in PHP 7.0
    $iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC);
    $iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);
    return base64_encode(trim(mcrypt_encrypt(MCRYPT_RIJNDAEL_128, KEY, $str, MCRYPT_MODE_ECB, $iv)));
}

/**
 * 解密函數
 */
function decrypt($str)
{
    // mcrypt_get_iv_size is Deprecated in PHP 7.0
    $iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC);
    $iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);
    return trim(mcrypt_decrypt(MCRYPT_RIJNDAEL_128, KEY, base64_decode($str), MCRYPT_MODE_ECB, $iv));
}
?>