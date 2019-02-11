console.log("Hello World");

// 動態類型
var dy = "string"; //字串
dy = 1;            //數字
dy = true          //布林

// 變數的宣告與定義
var a;          // 宣告變數
var b = 1;      //定義變數 b

// 多個變數同時宣告
var v1, v2 = 2, v3 = "hello";

// JavaScript 中的資料類型 (原始類型, 參考類型)
// 1. 原始類型 (有5種: Undefined 未定義類型, Null 空白物件類型, Boolean 布林類型, Number 數字類型, String 字串類型)

    /* ## Undefined (未定義類型) ## */
    var unKnow;
    console.log(typeof unKnow);

    function func() {
        console.log("func");
    }
    var v1 = func();    // 印出 func
    console.log(v1);    // 印出 undefined

    /* ## Null (空白物件類型) ## */
    var obj = null;
    console.log(typeof obj);

    /* ## Boolean (布林類型) ## */
    var isSelected = true;
    console.log(typeof isSelected);

    /* ## Number (數字類型) ## */
    var num1 = 100;     // 整數值
    var num2 = 3.14     // 浮點值
    var num3 = 011      // 對應十進位9
    var num4 = 0x11;    // 對應十進位17
    console.log(typeof num1);
    console.log(typeof num2);
    console.log(typeof num3);
    console.log(typeof num4);

    var num7 = Number("w");
    console.log(num7);          //印出 NaN (Not a Number)
    console.log(isNaN(num7));   // 判斷變數是否為Nan (印出true)

    /* ## String (字串類型) ## */
    var str1 = "Hello";
    var str2 = "World";
    var str3 = "Hello 'World'";
    console.log(typeof str1);
    console.log(typeof str2);
    console.log(typeof str3);

// 2. 參考類型 (有2種寫法)
    /* ## 方法 1 ## */
    var teacher = new Object();
    teacher.name = "Jonh";
    teacher.age = 25;
    teacher.subject = "JavaScript";
    teacher.teach = function(){
        console.log("正在進行教學…");
    }

    /* ## 方法 2 ## */
    var teacher2 = {
        name: 'Jaki',
        age: 25,
        subject: 'Php',
        teach: function() {
            console.log("正在進行教學...")
        }
    };

    console.log(teacher);
    console.log(teacher2);

    console.log(typeof teacher);
    console.log(typeof teacher2);

    console.log(teacher.name);
    console.log(teacher["name"]);   // 與 teacher.name 效果相同
    teacher.teach();
    teacher['teach']();     // 與 teacher.teach() 效果相同

    console.log(teacher2["name"]);


// 關系運算子 
var a="1";
var b = 1;
console.log(a==b);   // 相等比較(不管是字串或是數字)
console.log(a===b);  // 完全相等比較(也會比較字串或是數字)

console.log(a!=b);   // 不相等比較(不管是字串或是數字)
console.log(a!==b);   // 完全不相等比較(不管是字串或是數字)
