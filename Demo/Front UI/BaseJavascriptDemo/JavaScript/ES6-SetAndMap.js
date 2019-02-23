//Set集合結構
console.log("##### Set集合結構 #####");
// set中的元素不可重複，如果有重複就會自動被剔除
let setSample = new Set([1, 2, 3, 4, 4, 2]);
console.log(setSample);
console.log(setSample.size); //取得元素個數

// set實例操作
let set = new Set();
//向集合中插入元素
set.add("Jaki");
set.add("Lucy");
console.log(set);

//刪除集合中的某個元素
set.delete("Jaki");
console.log(set);

//刪除集合中所有元素
set.clear();
console.log(set);

set.add("Jaki");
set.add("Lucy");

//傳回Set集合反覆運算物件
console.log(set.entries());

//印出Set集合所有元素
set.forEach((element)=>{
    console.log(element);
}, set);

//判斷集合中是否包含某個元素
console.log(set.has("Jaki"));

//下面二種方法都是用來取得集合中所有元素的反覆運算器
console.log(set.keys());
console.log(set.values());

//使用for-of印出所有元素
for(item of set){
    console.log(item);
}

//字典結構
console.log("##### Map 字典結構 #####");
let mapSample = new Map([ ["name","Jaki"], ["age", 25], ["321", true], ["321", true] ]);
console.log(mapSample.size);  //取得個數

let map = new Map();
//在map實例物件中增加鍵值對
map.set("name", "Jaki");
map.set("age", 25);
map.set(123, true );
console.log(map);

//刪除一對鍵值
map.delete(123);
console.log(map);

//傳回一個Map反覆運算物件
console.log(map.entries());

//判斷map物件中是否包含某個鍵
console.log(map.has("name"));

//取得map物件某個鍵的值
console.log(map.get("name"));

//取得Map物件中的所有鍵
console.log(map.keys());

//取得Map物件中的所有值
console.log(map.values());

//印出所有值
map.forEach((value, key)=>{
    console.log(key, value);
},map);

//使用for-of印出所有元素
for(let [key, value] of map){
    console.log(key, value);
}

//清空map
map.clear();
console.log(map);