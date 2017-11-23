<?php 
    // 載入 src 目錄內的 autoload.php
    include('reCaptcha1.1.3/autoload.php');
    
    // secret key
    $secret = '6LemEzoUAAAAANQgkG2vnqgmVTuJlOjympOmsGzz';
    
    // 初始化變數為空值
    $resp = '';
    $username_php = '';
    $password_php = '';
    $reply_str = '';
    
    // 判斷帳號是否為空
    if (! empty($_POST['username_ajax'])) {
        $username_php = $_POST['username_ajax'];
    }
    
    // 判斷密碼是否為空
    if (! empty($_POST['password_ajax'])) {
        $password_php = $_POST['password_ajax'];
    }
    
    // 判斷提交過來的 g-recaptcha-response 參數，是否已經設置
    if (isset($_POST['g-recaptcha-response'])) {
        
        // 建立一個命名空間
        $recaptcha = new \ReCaptcha\ReCaptcha($secret);
        
        // 將 recaptcha->verify 的值給 resp 變數
        $resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);
        
        // 判斷 resp->isSuccess 是 true 或 false
        if ($resp->isSuccess() == true) {
            
            if (($username_php == 'test01') && ($password_php == 'test01test01')) {
                $reply_str = 'success';
            } else {
                $reply_str = 'fail';
            }
            
        } else {
            
            // 顯示 reCAPTCHA 錯誤訊息，可有可無
            foreach ($resp->getErrorCodes() as $error_code) {
                $reply_str = $error_code;
            }
        }
        
    } else {
        
        $reply_str = 'noresp';
    }
    
    // 回傳的東西
    echo json_encode(array('response' => $reply_str));
    

?>

