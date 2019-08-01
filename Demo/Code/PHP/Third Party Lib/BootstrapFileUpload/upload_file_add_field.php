<?php

//  define('PATH_ROOT', dirname(dirname(__FILE__)).DIRECTORY_SEPARATOR);
define('PATH_ROOT', dirname(__DIR__).DIRECTORY_SEPARATOR);
define('PATH_UPLOAD', PATH_ROOT."upload".DIRECTORY_SEPARATOR);
//     echo PATH_UPLOAD;


// foreach ($_POST as $key=>$value) {
//     echo "Key=".$key. "<br>\n";
//     echo "Value=".$value. "<br>\n";
// }

foreach ($_FILES["attachFile"]["error"] as $key => $error) {
    // UPLOAD_ERR所有說明: http://php.net/manual/en/features.file-upload.errors.php
    if ($error == UPLOAD_ERR_OK) {
        
        $tmp_name = $_FILES["attachFile"]["tmp_name"][$key];
        
        // basename() may prevent filesystem traversal attacks;
        // further validation/sanitation of the filename may be appropriate
        $uploadfile = PATH_UPLOAD . basename($_FILES["attachFile"]["name"][$key]);
        move_uploaded_file($tmp_name, $uploadfile);
    }
}

/* ##### 注意事項 ##### 
 * 1. 如果是用form 上傳，圖片分次選時，雖UI是顯示多張，但直實圖片只會上傳最後選的那張
 * 2. 如果是用AJAX上傳，圖片會分次上傳。
 * #####*/


// 使用form 上傳
if (isset($_POST['uploadFormButton'])) {
    
    echo "<pre>_FILES = " . print_r($_FILES['attachFile'], TRUE). "</pre>";

    //     echo "aaa=".json_encode($_POST);
    
    $altString = $_POST["alt_data"];
    $altData = json_decode($altString, true);
    print_r($altData);
//     echo "alt_test_1=".$altData["test_0"];
    
    
// 使用ajax 上傳    
} else {
    
//     echo "tags=".$_POST["tags"];
    
    $jsonArray = array(
        'response' => $_POST['hello'],
        'fileNumber' => sizeof($_FILES['attachFile'])
    );
    
    $arttachFile = array();
    foreach ($_FILES['attachFile']['name'] as $key => $value){
        $arttachFile[] = $value;
    }
    
    $jsonArray['attachFile'] = $arttachFile;
    
//     echo json_encode($jsonArray);
    echo json_encode($_POST);
}



?>