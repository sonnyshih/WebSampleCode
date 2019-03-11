"use strict";
console.log("Hello World");
//String
var myName = "Max";
//Number
var myaAge = 28;
//boolean
var hasHobbies = true;
//Assign types (如果沒有宣告的話，default是設定為any)
var myRealAge; //宣告為number的變數
myRealAge = 27;
//Array
var hobbies = ["Cooking", "Sports"];
console.log(hobbies[0]);
//tuples
var address = ["Superstreet", 99];
console.log(address);
//enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// 如果enum沒有指定值的話，都以index為值
var myColor = Color.Blue;
console.log(myColor);
var CarType;
(function (CarType) {
    CarType[CarType["BMW"] = 0] = "BMW";
    CarType[CarType["Benz"] = 100] = "Benz";
    CarType[CarType["Mazda"] = 2] = "Mazda";
})(CarType || (CarType = {}));
var myCar = CarType.Benz;
console.log(myCar);
//Any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
// 回傳string
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// 不回傳任何值
function sayHello() {
    console.log("Hello!");
}
sayHello();
// 傳入參數
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(10, 2));
// Function Type
var myMultiply; // 指定輸入變數與回傳值的型態
myMultiply = multiply;
console.log(myMultiply(5, 3));
// Objects
// 宣告一個物件，裡面的property都要設定資料型態
var userData = {
    name: "Max",
    age: 27
};
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// Union types (聯集型態)
// 宣告變數可以是number，也可以是string
var myRealRealAge = 27;
myRealRealAge = "27";
//check types (判斷變數的型態)
var finalValue = 30;
if (typeof finalValue == "number") { //判斷變數型態為number
    console.log("Final value is a number");
}
// never type
function neverReturns() {
    throw new Error("An error!");
}
// Nullable Types (變數型態是可以設定為null)
// 在tsconfig.json中 把 strictNullChecks打開 ("strictNullChecks": true, )，這樣就可以檢查變數是否能設為null
var canBeNull = 12;
canBeNull = null;
//# sourceMappingURL=app.js.map