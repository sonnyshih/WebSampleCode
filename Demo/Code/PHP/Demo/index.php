<?php

//在Error 500時，顯示錯誤內容
ini_set('display_errors', 1);

// 只顯示error 提示訊息，其他參考: http://php.net/manual/en/function.error-reporting.php
error_reporting(E_ALL);


phpinfo();

function showPrint_r(){
    $a = array ('a' => 'apple', 'b' => 'banana', 'c' => array ('x', 'y', 'z'));
    print_r ($a);   //以array顯示
    
    $result = print_r ($a,true);    //now contains output from print_r
    echo $result;    
}
?>