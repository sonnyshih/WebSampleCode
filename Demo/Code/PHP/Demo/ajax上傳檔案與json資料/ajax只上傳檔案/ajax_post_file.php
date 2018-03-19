<?php

if (isset($_POST['upload_form'])) {
    echo "<pre>_FILES = " . print_r($_FILES, TRUE) . "</pre>";
    
}elseif (isset($_FILES) && $_FILES) {   
    echo json_encode($_FILES);  // 取得檔案資料
    return;
}

?>