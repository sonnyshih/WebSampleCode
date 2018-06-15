<?php
    echo "<meta charset='utf-8' />";
    
    //隱藏手機號碼中間4位
    echo hidestr('0911345678', 7, 0). "<br>"; //186****5940
    echo hidestr('0911345678', 6, 0). "<br>"; //**哥
    
    
    //只保留姓名的最後一個字
    echo hidestr('小馬哥', 0, -1). "<br>"; //**哥
    
    //只保留姓名的第一個字
    echo hidestr('小馬哥', 1, 0). "<br>"; //小**
    
    // 隱藏email部份內容
    $email = "helloworld@gmail.com";
    list($name, $domain) = explode('@', $email);
    echo hidestr($name, 4, 0) . '@' . $domain. "<br>"; // 9****7@**.com
    
    // 字串
    $company = "魚門設計有限公司";
    echo hidestr($company, 4, 0). "<br>";
    echo getMaskString($company)."<br>";
    
    function getMaskString($string){
        $len = mb_strlen($string,'utf8');
        $maskLength= ceil($len/3);  //只顯示1/3字串
        return hidestr($string, $maskLength, 0);
    }
    
    // 地址
    $address = "金山路100號之1";
    $len = intval(mb_strlen($address, "utf-8")/2);    //取整數
//     echo mb_strlen($address, "utf-8");
    echo hidestr($address, $len, 0). "<br>";
    
    /**
     * 將一個字符串部分字符用$re替代隱藏
     * @param string    $string   待處理的字符串
     * @param int       $start    規定在字符串的何處開始，
     *                            正數 - 在字符串的指定位置開始
     *                            負數 - 在從字符串結尾的指定位置開始
     *                             0 - 在字符串中的第一個字符處開始
     * @param int       $length   可選。規定要隱藏的字符串長度。默認是直到字符串的結尾。
     *                            正數 - 從 start 參數所在的位置隱藏
     *                            負數 - 從字符串末端隱藏
     * @param string    $re       替代符
     * @return string   處理後的字符串
     */
    function hidestr($string, $start = 0, $length = 0, $re = '*') {
        if (empty($string)) return false;
        $strarr = array();
        $mb_strlen = mb_strlen($string);
        while ($mb_strlen) {//循环把字符串变为数组
            $strarr[] = mb_substr($string, 0, 1, 'utf8');
            $string = mb_substr($string, 1, $mb_strlen, 'utf8');
            $mb_strlen = mb_strlen($string);
        }
        $strlen = count($strarr);
        $begin  = $start >= 0 ? $start : ($strlen - abs($start));
        $end    = $last   = $strlen - 1;
        if ($length > 0) {
            $end  = $begin + $length - 1;
        } elseif ($length < 0) {
            $end -= abs($length);
        }
        for ($i=$begin; $i<=$end; $i++) {
            $strarr[$i] = $re;
        }
        if ($begin >= $end || $begin >= $last || $end > $last) return false;
        return implode('', $strarr);
    }
?>
