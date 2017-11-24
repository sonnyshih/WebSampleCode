
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>reCAPTCHA Example t62.php</title>
</head>
<body>
<?php
// 載入 src 目錄內的 autoload.php
include('reCaptcha1.1.3/autoload.php');

// 請注意一下，是 Invisible reCAPTCHA 類型的 site key 跟 secret key 別搞錯了。
$secret = '6LcVFDoUAAAAAI7xUufdtKqQMUw_fo4hIlwb_GDT';

// 判斷提交過來的 g-recaptcha-response 參數，是否存在
if (isset($_POST['g-recaptcha-response'])) {
    
    // 建立一個命名空間
    $recaptcha = new \ReCaptcha\ReCaptcha($secret);
    
    // 將 recaptcha->verify 的值給 resp 變數
    $resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);
    
    // 判斷 resp->isSuccess 是 true 或 false
    if ($resp->isSuccess() == true) {
        
        echo '<p><strong><font color="blue">恭喜，通過 reCAPTCHA 驗證碼！</font></strong></p>';

        if (($_POST['username_html'] == 'test01') && ($_POST['password_html'] == 'test01test01')) {
            echo '<p><strong><font color="blue">恭喜，輸入的帳號和密碼正確！</font></strong></p>';
            exit();
        } else {
            echo '<p><strong><font color="red">錯誤，輸入的帳號和密碼不正確！</font></strong></p>';
        }
        
    } else {
        
        echo '<p><strong><font color="red">錯誤，不能通過 reCAPTCHA 驗證碼！</font></strong></p>';
        
        // 顯示 reCAPTCHA 錯誤訊息，可有可無
        foreach ($resp->getErrorCodes() as $error_code) {
            echo '<p>' . $error_code . '</p>';
        }
    }
}

?>

</body>
</html>