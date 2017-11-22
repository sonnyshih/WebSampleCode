<?php
/*
 * 使用 Invisible reCAPTCHA 類型 (背景端 Validate user in background)
 * 原廠文件: https://developers.google.com/recaptcha/docs/invisible
 *     參考: http://zfly9.blogspot.tw/2017/05/20170516a.html
 *
 * */

// 載入 src 目錄內的 autoload.php
// include('/reCaptcha1.1.3/autoload.php');

// 請注意一下，是 Invisible reCAPTCHA 類型的 site key 跟 secret key 別搞錯了。
$siteKey = '6Les6TkUAAAAAOrClweKtY8hRXScq8pqzku4DWLy';


// 語言 https://developers.google.com/recaptcha/docs/language
$lang = 'zh-TW';

// 初始化變數為空值
$resp = '';

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>reCAPTCHA Example t62.php</title>
     
	 <script type="text/javascript" src="https://www.google.com/recaptcha/api.js?hl=<?php echo $lang; ?>" async defer></script>
	 
	 <script type="text/javascript">

		 function onSubmit(token)
		 {		 
			document.getElementById("demo_form_html").submit();
         }

     </script>

</head>
<body>

     <form id="demo_form_html" action="type1_post.php" method="post">
		 
		 <p>帳號: <input type="text" id="username_html" name="username_html" value=""></p>
         <p>密碼: <input type="text" id="password_html" name="password_html" value=""></p>
         <br>

         <button class="g-recaptcha" data-sitekey="<?php echo $siteKey; ?>" data-callback="onSubmit">提交</button>

		 <br>
     </form>

</body>
</html>