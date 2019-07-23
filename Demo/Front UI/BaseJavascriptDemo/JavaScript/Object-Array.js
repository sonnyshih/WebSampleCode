// Array 物件
var stus = ["Tom", "Jaki", "Lucy", "Ami"];
console.log(typeof stus);

var array = new Array("Tom", "Jaki", "Lucy", "Ami");    //與上面寫法是相同
console.log(typeof array);
console.log(array[0]);

//1.判斷是否為array
console.log(Array.isArray(array));

//2. array個數
console.log(array.length);

var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//3.刪除陣列最後一個元素
numArray.pop();
console.log("##### 刪除陣列最後一個元素 #####");
console.log(numArray);

//4.在陣列最後增加元素
numArray.push(9, 10);
console.log("##### 在陣列最後增加元素 #####");
console.log(array);

//5.倒置array
numArray.reverse()
console.log("##### 倒置array #####");
console.log(numArray);

//6.刪除array第一個元素
numArray.shift();
console.log("##### 刪除array第一個元素 #####");
console.log(numArray);

//7.對array進行排序
numArray.sort(function(a, b){
    if(a>b){
        return 1;
    } else if(a<b) {
        return -1;
    } else {
        return 0;
    }
});
console.log("##### 對array進行排序 #####");
console.log(numArray);

//8.array元素取代: 第1個參數為從哪個索引可以取代，第2個參數為要刪除的元素個數，之後為要取代成的元素
numArray.splice(6, 4, "100", "end");
console.log("##### array元素取代 #####");
console.log(numArray);

//9.array開頭進行元素的追加
numArray.unshift("start-1", "start-2");
console.log("##### array開頭進行元素的追加 #####");
console.log(numArray);

//10. 進行array元素追加 (不會改變array裡的資料)
console.log("##### 進行array元素追加 #####");
console.log(numArray.concat(6, 7, 8, 9));

//11. 將所有元素以傳入的參數分隔進行連接
console.log("##### 將所有元素以傳入的參數分隔進行連接 #####");
console.log(numArray.join("#"));

//12.截取子陣列: 第1個參數為開始截取的素引，第2個參數為截取到的索引(不包含此位置)
console.log("##### 截取子陣列 #####");
console.log(numArray.slice(0,3));

//13.將陣列元素連接成字串
console.log("##### 將陣列元素連接成字串 #####");
console.log(numArray.toString());

//14.傳回陣列中指定元素的索引，從前往後找
console.log("##### 傳回陣列中指定元素的索引，從前往後找 #####");
console.log(numArray.indexOf("start-2"));

//15.傳回陣列中指定元素的索引，從後往前找
console.log("##### 傳回陣列中指定元素的索引，從後往前找 #####");
console.log(numArray.lastIndexOf("start-2"));


//陣列檢查
//1. forEach 方法
// 進行陣列逐個element檢查
//  element: 檢查的元素, index: 檢查的元素的索引, array: 原陣列
// stus參數: 這個參數將與檢查函數中使用的this連結
console.log("##### 進行陣列逐個element檢查 #####");
stus.forEach(function(element, index, array){
    console.log(element, index, array);
}, stus);

//2.every 方法: 
// 對陣列進行檢查，回傳boolean, 如果回傳true則繼續檢查，如果回傳false則停止
//  element: 檢查的元素, index: 檢查的元素的索引, array: 原陣列
// stus參數: 這個參數將與檢查函數中使用的this連結
console.log("##### 對陣列進行檢查 #####");
var notHaveAmi = stus.every(function(element, index, array){
    console.log(this);
    console.log(element, index, array);
    if(element=="Ami"){
        return false;
    } else {
        return true;
    }

}, stus);
console.log("notHaveAmi = " + notHaveAmi);

//3.some檢查方法與every對應
// 只是其回呼是全部傳回false，結果才為false，否則為true
//  element: 檢查的元素, index: 檢查的元素的索引, array: 原陣列
console.log("##### some檢查方法與every對應 #####");
var haveAmi = stus.some(function(element, index, array){
    console.log(this);
    console.log(element, index, array);
    if(element=="Ami"){
        return true;
    } else {
        return false;
    }

}, stus);
console.log("HaveAmi = " + haveAmi);


//4.filter 
// 陣列篩檢程式，當回呼函數傳回true時，代表此元素過過濾，將其增加進新陣列傳回
//  element: 檢查的元素, index: 檢查的元素的索引, array: 原陣列
console.log("##### 陣列篩檢程式 #####");
var newArray = stus.filter(function(element, index, array){
    console.log(this);
    console.log(element, index, array);
    if(element=="Ami"){
        return true;
    } else {
        return false;
    }

}, stus);
console.log("newArray = " + newArray);

//5.map方法
//  將陣列中的每一個元素執行回呼，然後將傳回值重新組成陣列傳回
//  element: 檢查的元素, index: 檢查的元素的索引, array: 原陣列
console.log("##### map方法 #####");
newArray = stus.map(function(element, index, array){
    return element + "!";

}, stus);
console.log("newArray = " + newArray);

//6.reduce方法
//  是陣列累加器，會按照陣列從左向右的順序依次呼叫回呼函數。
//  acc: 為上次執行累加回呼的傳回值, element: 檢查的元素, index: 檢查的元素的索引
// "Hello" 參數: 為第一次進行累加回呼的初值。如果不提供初值，reduce會從陣列索引為1的位置開始，跳過第1個元素
console.log("##### reduce方法 #####");
var res = stus.reduce(function(acc, element, index){
    console.log(acc, element, index);
    return acc + " " + element;
}, "Hello");
console.log("res = " + res);

//7.reduceRight方法
//  與reduce方式類似，其從右向左開始檢查
//  acc: 為上次執行累加回呼的傳回值, element: 檢查的元素, index: 檢查的元素的索引
// "Hello" 參數: 為第一次進行累加回呼的初值。如果不提供初值，reduce會從陣列索引為1的位置開始，跳過第1個元素
console.log("##### reduceRight方法 #####");
res = stus.reduceRight(function(acc, element, index){
    console.log(acc, element, index);
    return acc + " " + element;
}, "Hello");
console.log("res = " + res);
