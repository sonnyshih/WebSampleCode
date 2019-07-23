console.log("/* ##### 全域變數, 區域變數, 常數 ##### */");
var a = 10; //全域變數

function hello() {
    let b = 20; //區域變數
    const cc = 30;   //常數

    console.log(a);
    console.log(b);
    console.log(cc);
}

console.log(a);
hello();

// boolean 值
let isDone = true;
console.log("/* ##### boolean ##### */");
console.log(isDone);

// 數值
let decLiteral: number = 6;
console.log("/* ##### 數值 ##### */");
console.log(decLiteral);

// 字串
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName} I'll be ${myAge + 1} years old next month.`;
console.log("/* ##### 字串與模板字符串 ##### */");
console.log(myName);
console.log(sentence);

// 空值
let unusable: void = undefined;
console.log("/* ##### 空值 ##### */");
console.log(unusable);

// Array
let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];
console.log("/* ##### Array ##### */");
console.log(list);
console.log(list2);

// Tuple: 允許你宣告每一個參數的類型
let x : [string, number];   //表示第1個元素只能存string, 第2個元素只能存number
x = ['hello', 10];
console.log("/* ##### Tuple ##### */");
console.log(x);

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log("/* ##### Enum ##### */");
console.log(c);

// Enum 設定key
enum Color1 {
    Red = 1,
    Green = 2,
    Blue = 4
}

let colorName: string = Color1[4];
console.log("/* ##### Enum 設定key ##### */");
console.log(colorName);

// Any
console.log("/* ##### Any ##### */");
let notSure: any = 4;
console.log(notSure);
notSure = "maybe a string instead";
console.log(notSure);
notSure = false;
console.log(notSure);
