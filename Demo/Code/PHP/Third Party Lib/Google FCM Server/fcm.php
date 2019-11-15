<?php
define('API_SERVER_ACCESS_KEY', 'AAAAig_IzKY:APA91bE22xP4ZitUv_JbIHtCig0l6EDreefO1y_lw7cC9cetTBv3VuVfeu-TcjcbHs_PuhITqpso8QO4Z3A71RkIjFg1ij1py1ThKyxQq2Ehcxa8AcE2psse-k5itsOHwapqXp1I3ZHN');

$token = $_POST['token']; /* FCM 接收端的token */
$title = $_POST['title']; /* 要接收的標題 */
$message = $_POST['message']; /* 要接收的內容 */

/*
 * notification組成格式 官方範例
 * {
 * "message":{
 * "token":"bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1...",
 * "notification":{
 * "title":"Portugal vs. Denmark",
 * "body":"great match!"
 * }
 * }
 * }
 */

$content = array(
    'title' => $title,
    'body' => $message
);

$fields = array(
    'to' => $token,
    'notification' => $content
);

// firebase認證 與 傳送格式
$headers = array(
    'Authorization: key=' . API_SERVER_ACCESS_KEY,
    'Content-Type: application/json'
);


$postCurl = curl_init();
curl_setopt($postCurl, CURLOPT_URL, "https://fcm.googleapis.com/fcm/send");
curl_setopt($postCurl, CURLOPT_POST, true); // 啟用POST
curl_setopt($postCurl, CURLOPT_CONNECTTIMEOUT, 5);
curl_setopt($postCurl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($postCurl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($postCurl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($postCurl, CURLOPT_POSTFIELDS, json_encode($fields));
$data = curl_exec($postCurl);

// if (curl_errno($postCurl)) {
//     $SiteverifyOutput["Errno"] = curl_errno($postCurl);
// } else {
//     curl_close($postCurl);
// }

// if (!is_string($data) || !strlen($data)){
//     $SiteverifyOutput["Content"] = "Failed to get contents.";
// }

// if (!empty($data)) {
//     $data = json_decode($data);
//     $SiteverifyOutput["IsSuccess"] = $data->success;
// }

echo json_encode($data);

?>