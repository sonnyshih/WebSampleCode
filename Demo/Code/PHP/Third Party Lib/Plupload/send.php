<?php
$nickname = $_POST['nickname'];

// 接收form 送出的欗位資料
echo "nickname=" . $nickname;

// 列出所有POST 欄位資料
foreach ($_POST as $name => $value) {
    echo "name=" . $name . "<br>";
    echo "value=" . $value . "<br>";
}

echo "##### 列出上傳的檔案 #####<br>";
showFileName();

function showFileName() {
    $uploaderCount = $_POST['uploader_count'];  // uploader_count: plupload 送的欄位
    
    for ($i = 0; $i < $uploaderCount; $i ++) {
        $fileName = $_POST['uploader_' . $i . '_name']; // uploader_xx_name: xx是數字，plupload 送的欄位
        $fileStatus = $_POST['uploader_' . $i . '_status']; // uploader_xx_status: xx是數字，plupload 送的欄位
        
        echo "file name = " . $fileName . "<br>";
        echo "file status = " . $fileStatus . "<br>";
    }
}

/*
 * <?php $count = 0; foreach ($_POST as $name => $value) { ?>
 * <tr class="<?php echo $count % 2 == 0 ? 'alt' : ''; ?>">
 * <td><?php echo htmlentities(stripslashes($name)) ?></td>
 * <td><?php echo nl2br(htmlentities(stripslashes($value))) ?></td>
 * </tr>
 * <?php } ?>
 */
?>