<?php

define("PATH_ROOT", dirname(dirname(__FILE__)).DIRECTORY_SEPARATOR);
$targetDir = PATH_ROOT . 'uploads';

$act = $_POST['act'];


switch ($act) {
    case 'insert':
        echo uploadFile($_FILES,$targetDir);
        break;

    default:
        break;
}

// Only upload one file.
function uploadFile($file, $uploadPath){
    
        // Upload path is not a directory or not exist.
    if (!is_dir($uploadPath)) {
        mkdir($uploadPath, 0755);
//         die('{"error" : {"code": 100, "message": "Failed to open directory."}, "DirPath" : "'. $uploadPath .'"}');
    }
    
    // Just upload one file one time.
    if (sizeof($file) > 1) {
        die('{"code": 101, "message": "Just upload one file one time", "id" : "id"}');
    }
    
    // file is not upload.
    if (empty($file['file'])){
        die('{"code": 102, "message": "Failed to open input stream.", "id" : "id"}');
    }
    
    // Upload successfully
    if ($file['file']['error'] === UPLOAD_ERR_OK ) {
        
        
        echo 'File Name: ' . $file['file']['name'] . '<br/>';
        echo 'File Type: ' . $file['file']['type'] . '<br/>';
        echo 'File Size: ' . ($file['file']['size'] / 1024) . ' KB<br/>';
        echo 'Temp File Name: ' . $file['file']['tmp_name'] . '<br/>';

        // 原檔名上傳
//         $dest = $uploadPath.'/' . $file['file']['name'];
//         // Check the file is exist or not
//         if (file_exists($dest)){
//             die('{"code": 103, "message": "File is exist.", "id" : "id"}');
//             echo 'File is exist。<br/>';
//             return false;
            
//         } else {
            
//             // Move the file to destination
//             move_uploaded_file($file['file']['tmp_name'], $dest);
//             return true;
//         }
        
        // 產生random 檔案名
        $fileName = $file['file']['name'];
        $extension = pathinfo($fileName, PATHINFO_EXTENSION);
        
        // Create the dynamin name to be the file name.
        $newFileName = uniqid() .".". $extension;
        $dest = $uploadPath.'/' . $newFileName;
        
        // Move the file to destination
        move_uploaded_file($file['file']['tmp_name'], $dest);
        return true;
        
    } else {
        return false;
        die('{"code": 104, "message": "Failed to move uploaded file.", "id" : "id"}');
    }
}

?>