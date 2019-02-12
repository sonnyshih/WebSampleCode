//以目前時間建立Date 物件
var date = new Date();
console.log(date);

//以指定時目戳記建立Date物件，時間戳記單位為毫秒
date = new Date(1483888888999);
console.log(date);

//以指定的字串建立Date物件，字串必須為標準格式的時間字串
date = new Date("December 17, 2017 03:24:00");
console.log(date);

//設定年、月、日、時、分、秒、毫秒來建立Date物件
// 月數是0~11, 0是代表1月
date = new Date(2017,10,11,8,10,40,133);
console.log(date);

//傳回從1970年1月1日起至現在經過的毫秒數
console.log(Date.now());

//解析一個日期時間字串(從1970年1月1日至指定日期的時間戳記)
console.log(Date.parse("December 17, 2017 03:24:00"));

//指定日期時間，傳回時間戳記 (UTC是世界標準時間)
console.log(Date.UTC(2017,10,11,8,10,40,133));

// Date的相關資訊
date = new Date();

//1.根據本機時間取得日期物件是目前 月份的第幾天
console.log(date.getDate());

//2.根據本機時間取得星期。0 表示星期日
console.log(date.getDay());

//3.根據本機時間取得日期物件是目前 年份
console.log(date.getFullYear());

//4.根據本機時間取得日期物件是目前 小時0~23
console.log(date.getHours());

//5.根據本機時間取得日期物件是目前 分鐘
console.log(date.getMinutes());

//6.根據本機時間取得日期物件是目前 秒數
console.log(date.getSeconds());

//7.根據本機時間取得日期物件是目前 毫秒數
console.log(date.getMilliseconds());

//8.根據本機時間取得日期物件是目前 月份 0表示1月
console.log(date.getMonth());

//9.回傳時間戳記，單位毫秒
console.log(date.getTime());

//10.取得目前時區的時區偏移
console.log(date.getTimezoneOffset());

//11.根據UTC取得目前日期物件是目前 月份的第幾天
console.log(date.getUTCDate());

//12.根據UTC取得目前日期物件的星期數，0表示星期日
console.log(date.getUTCDay());

//13.根據UTC取得目前日期物件目前 年份
console.log(date.getUTCFullYear());

//14.根據UTC時間取得日期物件是目前 小時0~23
console.log(date.getUTCHours());

//15.根據UTC時間取得日期物件是目前 分鐘
console.log(date.getUTCMinutes());

//16.根據UTC時間取得日期物件是目前 秒數
console.log(date.getUTCSeconds());

//17.根據UTC時間取得日期物件是目前 毫秒數
console.log(date.getUTCMilliseconds());

//18.根據UTC時間取得日期物件是目前 月份 0表示1月
console.log(date.getUTCMonth());

// Date 物件格式化
date = new Date();

//1.易讀方式回傳日期
console.log(date.toDateString());

//2.ISO日期字串
console.log(date.toISOString());

//3.使用toJSON(), 回傳一個表示該日期的字串
console.log(date.toJSON());

//4.回傳日期物件日期部分的字串，字串格式與系統設定的地區連結
console.log(date.toLocaleDateString());

//5.回傳日期物件日期的字串，字串格式與系統設定的地區連結
console.log(date.toLocaleString());

//6.回傳日期物件時間部份的字串，字串格式與系統設定的地區連結
console.log(date.toLocaleTimeString());

//7.日期物件字串
console.log(date.toString());

//8.以人類易讀格式回傳日期物時間部份的字串
console.log(date.toTimeString());

//9.把一個日期物轉為一個以UTC時區計時的字串
console.log(date.toUTCString());

