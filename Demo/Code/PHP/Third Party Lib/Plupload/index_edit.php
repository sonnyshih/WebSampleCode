<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>

<title>Plupload - 自做範例</title>

<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/themes/base/jquery-ui.css" type="text/css" />
<link rel="stylesheet" href="plupload-2.3.4/jquery.ui.plupload/css/jquery.ui.plupload.css" type="text/css" />

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>

<!-- production -->
<script type="text/javascript" src="plupload-2.3.4/plupload.full.min.js"></script>
<script type="text/javascript" src="plupload-2.3.4/jquery.ui.plupload/jquery.ui.plupload.js"></script>


<script type="text/javascript">
// Initialize the widget when the DOM is ready
$(function() {

	initUploader();
	initSendButtonClick();
// 	initLoadFile();

});

function initUploader(){
	
	$uploader = $("#uploader").plupload({
		// General settings
		runtimes : 'html5,flash,silverlight,html4',
		url : 'file_upload.php',

		// User can upload no more then 20 files in one go (sets multiple_queues to false)
		max_file_count: 20,
		
		chunk_size: '1mb',

		// Resize images on clientside if we can
		resize : {
			width : 200, 
			height : 200, 
			quality : 90,
			crop: true // crop to exact dimensions
		},
		
		filters : {
			// Maximum file size
			max_file_size : '1000mb',
			// Specify what files to browse for
			mime_types: [
				{title : "Image files", extensions : "jpg,gif,png"},
				{title : "Zip files", extensions : "zip"}
			]
		},

		// Rename files by clicking on their titles
		rename: true,
		
		// Sort files
		sortable: true,

		// Enable ability to drag'n'drop files onto the widget (currently only HTML5 supports that)
		dragdrop: true,

		// Views to activate
		views: {
			list: true,
			thumbs: true, // Show thumbs
			active: 'thumbs'
		},

		// Flash settings
		flash_swf_url : 'plupload-2.3.4/Moxie.swf',

		// Silverlight settings
		silverlight_xap_url : 'plupload-2.3.4/Moxie.xap',

		init: {
	        'FilesAdded': function(up, files) {
	            // 选择文件后的回调
	            // files为本次添加的图片列表，files[0].getNative()可以获取原生文件对象
// 	        	alert("asdfsdf");
	        },
	        'BeforeUpload': function(up, file) {
	            // 每个文件上传前,处理相关的事情
	        },
	        'UploadProgress': function(up, file) {
	            // 每个文件上传时,处理相关的事情
	        },
	        'FileUploaded': function(up, file, info) {
	            // 每一张图片上传完成后的回调
	            // info中为七牛返回的相关信息，为一个json字符串，比如下面这个
	            // "{"bucket":"jb-medical","colorModel":"ycbcr","duration":null,"fname":"0544577b91a59efaf39fea77e11dda4a.jpg","format":"jpeg","fsize":92380,"hash":"FquL9DHBuzzlR5V-v0TOn4bCQxIf","height":675,"key":"o_1bhegvmtvk64inehuv1qvf17dro.jpg","size":null,"url":"https://oi3o224r8.qnssl.com","width":1080}"
// 	            info = JSON.parse(info);  // 转成json
// 	            var src = info.url + '/' + info.key;  // 获取到图片的七牛url
	        },
	        'Error': function(up, err, errTip) {
	            // 错误回调，具体的code见Plupload文档，如果引入了语言包，errTip会是对应语言的错误提示
	            if (err.code == -600) {
	                // size超过5m
	                alert('每张图片大小请勿超过5M')
	            } else {
	                alert(errTip)
	            }
	        },
	        'UploadComplete': function(up, file) {
	            //队列文件处理完毕后,处理相关的事情
	        }
	    },

		
		// Send with field name and value (Like <input type="text" name="act" value="insert">)
		multipart_params:{
			'act': 'insert'	
		}
	});

// 	var loadFiles = ['../uploads/59edb7320ae70.jpg', '../uploads/59edb75022931.jpg'];
// 	$("#uploader").plupload('getUploader').bind('addFiles', loadFiles);
// 	$("#uploader").plupload('getUploader').addFile(loadFiles);
// 	$uuu.addFile(loadFiles);
// 	$uploader.plupload('AddFiles', loadFiles);

// 	$('#uploader').plupload('getUploader').bind('FilesAdded', function(up, files){
// 			alert("asdfsdf");
// 		});
}

// function initTest(){
// 	// ---- pluploader ----

//     $uploader = $("#uploader").plupload({

//         // General settings

//         runtimes : 'html5,flash,silverlight,html4',

//         url : 'img_upload.php',

//         filters : {

//             // Specify what files to browse for

//             mime_types : [{

//                 title : "Image files",

//                 extensions : "jpg,gif,png"

//             }]

//         },



//         // Rename files by clicking on their titles

//         rename : true,



//         // Sort files

//         sortable : true,



//         // Enable ability to drag'n'drop files onto the widget (currently only HTML5 supports that)

//         dragdrop : true,



//         // Views to activate

//         views : {

//             list : true,

//             thumbs : true, // Show thumbs

//             active : 'thumbs'

//         },



//         // Flash settings

//         flash_swf_url : '../js/plupload-2.1.8/Moxie.swf',



//         // Silverlight settings

//         silverlight_xap_url : '../js/plupload-2.1.8/Moxie.xap',

//         init : {

//             ChunkUploaded : function (up) {

//                 alert('ChunkUploaded');

//             }

//         },

//         multipart_params : {

//             'act' : 'update',

//             'table_id' : $('#product_id').val() 

//         }

//     });    

    

// //     var load_files = [

// //     '../../upload/product/59a841ccd148c.jpg',
// //     '../../upload/product/59a841ced8b59.jpg',
// //     '../../upload/product/59a841cf26b03.jpg',
// //     '../../upload/product/59a841cf6e056.jpg',
// //     '../../upload/product/59a841d34cd85.jpg',
// //     '../../upload/product/59a841d37dab0.jpg',
// //     '../../upload/product/59a841d3b22a3.jpg',
// //     '../../upload/product/59a841d3e59d6.jpg',    ];

    
//    var load_files = [ '../uploads/59edb7320ae70.jpg'];

//     $uploader.plupload('addFiles', load_files);   



//     var imageUrl = [];

//     $('#uploader').plupload('getUploader').bind('FilesAdded', function(up, files) {

//         mOxie.each(files, function(file) {

//             var image = new mOxie.Image();

//             image.onload = function() {

//                 var dataUrl = image.getAsDataURL();

//                     imageUrl.push(dataUrl);

//              };

//            image.load(file.getSource());

//         });

//     });



//     $('#uploader').plupload('getUploader').bind('FilesRemoved', function(up, files) {

//         mOxie.each(files, function(file) {

//             var image = new mOxie.Image();

//             image.onload = function() {

//                 var dataUrl = image.getAsDataURL();

//                 imageUrl = jQuery.grep(imageUrl, function(value){

//                 	return value != dataUrl;   

//                 });	

                    

//              };

//            image.load(file.getSource());

//         });

//     });
// }

function initSendButtonClick(){
	
	// Handle the case when form was submitted before uploading has finished
	$('#form').submit(function(e) {
		// Files in queue upload them first
		if ($('#uploader').plupload('getFiles').length > 0) {

			$('#uploader').plupload('start');
			
			// When all files are uploaded submit form
			$('#uploader').on('complete', function() {
				$('#form')[0].submit();
			});

		} else {
			alert("You must have at least one file in the queue.");
		}
		return false; // Keep the form from submitting
	});
}

function initLoadFile(){
	dir = "../uploads/";
	file1 = dir + "59edb7320ae70.jpg";
	file2 = dir + "59edb75022931.jpg";
// 	var loadFiles = [file1, file2];
	var loadFiles = ['../uploads/59edb7320ae70.jpg', '../uploads/59edb75022931.jpg'];

	$("#uploader").plupload('getUploader').bind('addFiles', loadFiles);
	
}

</script>

</head>
<body style="font: 13px Verdana; background: #eee; color: #333">

<h1>jQuery UI Widget</h1>


<form id="form" method="post" action="send.php">
	Your Nikcname: <input type="text" name="nickname" id="nickname">
	<div id="uploader">
		<p>Your browser doesn't have Flash, Silverlight or HTML5 support.</p>
	</div>
	<br />
	<input type="submit" value="Submit" />
</form>

</body>
</html>


<?php
?>