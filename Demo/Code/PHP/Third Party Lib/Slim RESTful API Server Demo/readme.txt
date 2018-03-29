
1. 第一個範例的網址 (因為還沒有設定.htaccess檔案)
http://domain/api/public/index.php/hello/world

2. 設定完.htaccess檔案
* 範例1:
  http://apidemo.sonny-tech.com/api/public/hello/world

* 範例2(取得所有customer 資料)
  Method 選 GET
  http://apidemo.sonny-tech.com/api/public/api/customers
  
* 範例3 (取得單一customer 資料)
  Method 選 GET
  http://apidemo.sonny-tech.com/api/public/api/customer/1
 
* 範例4: (新增資料)
  Method 選 POST
  http://apidemo.sonny-tech.com/api/public/api/customer/add
  header:
  Content-Type: application/json
	
  input: 
  {
    "Account": "Peter",
    "Name": "hello world",
    "Password": "abcdeft",
    "Email": "peter@gmail.com"
  }

* 範例5: (修改資料)
  Method 選 PUT
  http://apidemo.sonny-tech.com/api/public/api/customer/update/1

* 範例6: (刪除資料)
  Method 選 DELETE
  http://apidemo.sonny-tech.com/api/public/api/customer/delete/1
