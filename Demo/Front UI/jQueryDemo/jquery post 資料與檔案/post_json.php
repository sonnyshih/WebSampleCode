<?php
	
	if(isset($_POST['number'])){
		$number = $_POST['number'];
	}
	if(isset($_GET['number'])){
		$number = $_GET['number'];
	}

	if(isset($_POST['name'])){
		$name = $_POST['name'];
	}
	if(isset($_GET['name'])){
		$name = $_GET['name'];
	}
	
	if(isset($_POST['sex'])){
		$sex = $_POST['sex'];
	}
	if(isset($_GET['sex'])){
		$sex = $_GET['sex'];
	}
	

	if (empty($number) || empty($name) ||  empty($sex) ) {
    		
        echo json_encode(array('msg' => '員工資料未填寫完全！'));
        
        return;
    }
    

    if(isset($_POST['hello'])){
    	$hello = $_POST['hello'];
    }
    if(isset($_GET['hello'])){
    	$hello = $_GET['hello'];
    }
    
    if (!empty($hello)) {
    	$array = json_decode($_POST["hello"], true);
    }
    
    // 可將獲取的 POST 表單資料，儲存到資料庫（該部分未實作）
    
    // 儲存成功，返回員工姓名
    echo json_encode(array('name' => $name, 'child' => $array["child"]));
?>