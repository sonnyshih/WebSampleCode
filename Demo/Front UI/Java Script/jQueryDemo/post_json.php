<?php

    if (!isset($_POST['number']) || empty($_POST['number']) ||
        !isset($_POST['name']) || empty($_POST['name']) ||
        !isset($_POST['sex']) || empty($_POST['sex'])) {
        echo json_encode(array('msg' => '員工資料未填寫完全！'));
        
        return;
    }
    
    // 可將獲取的 POST 表單資料，儲存到資料庫（該部分未實作）
    
    // 儲存成功，返回員工姓名
    echo json_encode(array('name' => $_POST['name']));
?>