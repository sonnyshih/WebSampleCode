<?php

//  define('PATH_ROOT', dirname(dirname(__FILE__)).DIRECTORY_SEPARATOR);
define('PATH_ROOT', dirname(__DIR__).DIRECTORY_SEPARATOR);
define('PATH_UPLOAD', PATH_ROOT."upload".DIRECTORY_SEPARATOR);

//     echo PATH_UPLOAD;


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


// 使用form 上傳
if (isset($_POST['uploadForm'])) {
    
    echo "<pre>_FILES = " . print_r($_FILES['attachFile'], TRUE). "</pre>";
    
    // 使用ajax 上傳
} else {
    
    $jsonArray = array(
        'response' => $_POST['hello'],
        'file number' => sizeof($_FILES['attachFile'])
    );
    
    $arttachFile = array();
    foreach ($_FILES['attachFile']['name'] as $key => $value){
        $arttachFile[] = $value;
    }
    
    $jsonArray['attachFile'] = $arttachFile;
    
    echo json_encode($jsonArray);
    
}



?>