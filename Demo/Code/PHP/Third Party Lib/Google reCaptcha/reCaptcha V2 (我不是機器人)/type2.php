<?php

// 載入 src 目錄內的 autoload.php
include('/reCaptcha1.1.3/autoload.php');

// 這邊，記得換上你的 site key 跟 secret key 申請教學 http://zfly9.blogspot.tw/2017/05/20170520a.html 或 http://zmc6.blog.fc2.com/blog-entry-507.html
// 請注意一下，是 reCAPTCHA v2 類型的 site key 跟 secret key 別搞錯了。
$siteKey = '6LcVFDoUAAAAAPaD2FrzPECM7I0CdeYS_YmXCQxS';
$secret = '6LcVFDoUAAAAAI7xUufdtKqQMUw_fo4hIlwb_GDT';

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
<title>reCAPTCHA Example t53.php</title>

     <script type="text/javascript">

		 var onloadCallback = function() {
         grecaptcha.render("html_element", {
         "sitekey" : "<?php echo $siteKey; ?>"
         });
         };

     </script>

</head>
<body>

     <form action="?" method="post">

         <input type="submit" value="提交">
         <br>
         
         <div id="html_element"></div>

	 </form>

     <script type="text/javascript" src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit&hl=<?php echo $lang; ?>" async defer></script>

</body>
</html>