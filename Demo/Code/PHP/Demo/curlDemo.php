<?php
// 進階用法參考: http://roodo.iguang.tw/esabear/archives/16358749.html


// getCurl();
postCurl();

// Get 用法
function getCurl(){
    
    $getCurl = curl_init();
    $getUrl = "http://dig.taichung.gov.tw/easygo/json/site_data.aspx";
    curl_setopt($getCurl, CURLOPT_URL, $getUrl);
    curl_setopt($getCurl, CURLOPT_CONNECTTIMEOUT, 5);
    curl_setopt($getCurl, CURLOPT_RETURNTRANSFER, true);
    $data = curl_exec($getCurl);
    
    if (curl_errno($getCurl)) {
        echo curl_errno($getCurl) . "\n <br>";
        $data = "";
    } else {
        curl_close($getCurl);
    }
    
    if (!is_string($data) || !strlen($data)){
        echo "Failed to get contents.";
        $data = "";
    }
    
    
    if (!empty($data)) {
        // 轉換成json格式
        $data = json_decode($data);
        
        print_r($data);
        
//         $result = print_r($data, true);
//         echo "data=".$result;
    }
    
}    

// Post用法
function postCurl() {   
    $postData = array(
        "secret" => "1234",
        "response" => "asdasdf"
    );
    
    $postCurl = curl_init();
    curl_setopt($postCurl, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
    curl_setopt($postCurl, CURLOPT_POST, true); // 啟用POST
    curl_setopt($postCurl, CURLOPT_CONNECTTIMEOUT, 5);
    curl_setopt($postCurl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($postCurl, CURLOPT_POSTFIELDS, http_build_query($postData));
    $data = curl_exec($postCurl);
    
    if (curl_errno($postCurl)) {
        echo curl_errno($postCurl) . "\n <br>";
        $data = "";
    } else {
        curl_close($postCurl);
    }
    
    if (!is_string($data) || !strlen($data)){
        echo "Failed to get contents.";
        $data = "";
    }
    
    
    if (!empty($data)) {
        // 轉換成json格式
        $data = json_decode($data);
        
        if ($data->success == true) {
            echo "Success";
        } else {
            echo "Fail";
        }
        
        //         $result = print_r($data, true);
        //         echo "data=".$result;
    }
    
}
?>