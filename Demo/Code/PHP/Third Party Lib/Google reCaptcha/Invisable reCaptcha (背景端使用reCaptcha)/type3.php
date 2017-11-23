<?php
/*
 * 使用 Invisible reCAPTCHA 類型 使用ajax (背景端 Validate user in background)
 * Invisible reCAPTCHA 所需參數由 js 的 onloadCallback 內的 function 調用。
 * 
 * 原廠文件: https://developers.google.com/recaptcha/docs/invisible
 *     參考: http://zfly9.blogspot.tw/2017/05/20170516a.html
 *
 * */

// site key 跟 secret key
$siteKey = '6LemEzoUAAAAACMHLwZelPr47KaUsEKe0gP0pvUp';

// 語言 https://developers.google.com/recaptcha/docs/language
$lang = 'zh-TW';


?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>reCAPTCHA Example t14.php</title>

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>

<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.0/themes/smoothness/jquery-ui.css" />


<script type="text/javascript">
	$(function(){
		$("#send").click(function(){

			if (isValidate()) {
				grecaptcha.execute();
			} else {
				alert("錯誤，帳號與密碼不可為空！");
			}
			
			
		});
	});


	function isValidate(){
		$("#show_massage_value_html").empty();
		$("#show_massage_result_html").empty();

		var username = $("#username_html").val();
		var password = $("#password_html").val();

		if (username == "" || password == "") {
			return false;
		}

		return true;
	}

    var onSubmitClick = function(token) {
        
    	 g_recaptcha_response_js = grecaptcha.getResponse();
		
    	 $.ajax({
                type:"POST",
                url: "type2_ajax.php",
                dataType: "json",
                data: { "g-recaptcha-response": g_recaptcha_response_js,
                			   "username_ajax": $("#username_html").val(),
                           	   "password_ajax": $("#password_html").val()               
                },
                success: function(data) {
    	            alert(data.response);
    	            $("#show_massage_value_html").append(data.response);
    	            
    	            if(data.response == "success"){
    		            $("#show_massage_result_html").append("<p><strong><font color='blue'>恭喜，輸入的帳號和密碼正確！</font></strong></p><p><a href='type3.php'>點此到 type3.php</a></p>");
    		        } else {
    		            $("#show_massage_result_html").append("<p><strong><font color='red'>錯誤，輸入的帳號和密碼不正確！</font></strong></p><p><a href='type3.php'>點此到 type3.php</a></p>");
    		        	
    			    }
    	            
                },
                error: function(jqXHR) {
                    alert("發生錯誤: " + jqXHR.status);
                    $("#show_massage_result_html").append("<p><strong><font color='red'>警告，無法取得 t14ajax.php 回傳值！</font></strong></p><p><a href='t64.php'>點此到 t64.php</a></p>");
                }
            });

    };

</script>

	<script type="text/javascript" src="https://www.google.com/recaptcha/api.js?hl=<?php echo $lang; ?>" async defer></script>

</head>
<body>

	<div id="show_massage_value_html"></div>
	<div id="show_massage_result_html"></div>

	<form action="">
	
		<div id="recaptcha" class="g-recaptcha" data-sitekey="<?php echo $siteKey; ?>" data-callback="onSubmitClick" data-size="invisible"></div>
		
		<p>
			帳號: <input type="text" id="username_html" name="username_html" value="">
		</p>
		<p>
			密碼: <input type="text" id="password_html" name="password_html" value="">
		</p>
		<br> <input id="send" type="button" value="提交">

	</form>


</body>
</html>