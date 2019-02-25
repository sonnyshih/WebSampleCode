//注意: 要在React Native 中才能使用
// 對外export
export var username = "Jaki";
export var password = "12345";

// 一次export 多個變數
var scrool = "No.1";
var theClass = "No.2";

export {scrool, theClass};

// export class 與function
export function() {
    console.log("Hello World");
}

export class Teacher{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

// 自訂export 物件名稱 (使用as)
var jaki = "Jaki";
var lucy = "Lucy";
export {jaki as people1, lucy as people2};

//預設export
export default class People {
    constructor(){
        
    }
}