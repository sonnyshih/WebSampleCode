<?php
	
// 获得原始输入内容
$json = file_get_contents("php://input");

// JSON转换为PHP对象
// $obj = json_decode($json);

header('Content-Type:application/json;charset=utf-8');

// 返回JSON格式
$result = array();
$result["result"] = $json;
echo json_encode($result);  
?>