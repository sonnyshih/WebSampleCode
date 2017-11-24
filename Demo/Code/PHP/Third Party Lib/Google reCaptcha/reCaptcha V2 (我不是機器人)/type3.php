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
<title>reCAPTCHA Example t54.php</title>

     <script type="text/javascript">

         var verifyCallback = function(response)
		 {
             alert(response);
         };
         var widgetId1;
         var widgetId2;
         var onloadCallback = function()
		 {
             // Renders the HTML element with id 'example1' as a reCAPTCHA widget.
             // The id of the reCAPTCHA widget is assigned to 'widgetId1'.
             widgetId1 = grecaptcha.render("example1", {
             "sitekey" : "<?php echo $siteKey; ?>",
             "theme" : "light"
             });

			 widgetId2 = grecaptcha.render(document.getElementById("example2"), {
             "sitekey" : "<?php echo $siteKey; ?>"
             });

			 grecaptcha.render("example3", {
             "sitekey" : "<?php echo $siteKey; ?>",
             "callback" : "verifyCallback",
             "theme" : "dark"
             });
         };

     </script>

</head>
<body>

     <!-- The g-recaptcha-response string displays in an alert message upon submit. -->
     <form action="javascript:alert(grecaptcha.getResponse(widgetId1));">
         <div id="example1"></div>
         <br>
         <input type="submit" value="取得回應值">
     </form>
	 <br>

	 <!-- Resets reCAPTCHA widgetId2 upon submit. -->
     <form action="javascript:grecaptcha.reset(widgetId2);">
         <div id="example2"></div>
         <br>
         <input type="submit" value="重置">
     </form>
     <br>

	 <!-- POSTs back to the page's URL upon submit with a g-recaptcha-response POST parameter. -->
     <form action="?" method="post">
         <div id="example3"></div>
         <br>
         <input type="submit" value="提交">
     </form>

	 <script type="text/javascript" src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit&hl=<?php echo $lang; ?>" async defer></script>

</body>
</html>