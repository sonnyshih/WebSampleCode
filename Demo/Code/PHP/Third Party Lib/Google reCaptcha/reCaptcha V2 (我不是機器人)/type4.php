<?php

// 載入 src 目錄內的 autoload.php
include('/reCaptcha1.1.3/autoload.php');

// 這邊，記得換上你的 site key 跟 secret key 申請教學 http://zfly9.blogspot.tw/2017/05/20170520a.html 或 http://zmc6.blog.fc2.com/blog-entry-507.html
// 請注意一下，是 reCAPTCHA v2 類型的 site key 跟 secret key 別搞錯了。
$siteKey = '6LcVFDoUAAAAAPaD2FrzPECM7I0CdeYS_YmXCQxS';


// 語言 https://developers.google.com/recaptcha/docs/language
$lang = 'zh-TW';

// 初始化變數為空值
$resp = '';

// 客戶端之範例，請參考 https://developers.google.com/recaptcha/docs/display

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>reCAPTCHA Example t55.php</title>

     <script type="text/javascript" src="https://www.google.com/recaptcha/api.js?hl=<?php echo $lang; ?>" async defer></script>

</head>
<body>

     <form action="type4_post.php" method="post">

		 <p>帳號: <input type="text" name="username_html" value=""></p>
         <p>密碼: <input type="text" name="password_html" value=""></p>

         <div class="g-recaptcha" data-sitekey="<?php echo $siteKey; ?>"></div>

         <br>
         <input type="submit" value="提交">

	 </form>

</body>
</html>