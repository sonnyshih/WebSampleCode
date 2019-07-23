var teacher = {
    name: "Jaki",
    age: "25",
    toString: function(owner) {
        console.log(owner + " 姓名:" + this.name + "、年齡:" + this.age);
        console.log(arguments);
    }
};

//Demo this的用法
teacher.toString("Teacher Data");

var student = {
    name: "Lucy",
    age: "23"
};

// Apply 用法
// student 物件沒有toString()，借用teacher物件
// student 參數: 設定呼方法的上下文，即函數中this的指向
// ["apply: Student Data"] 參數: 為一個陣列，陣列中的元素將被作為實際參數傳入函數。 
teacher.toString.apply(student, ["apply: Student Data"]);

// call 用法
// student 參數: 設定呼方法的上下文，即函數中this的指向
// "call: Student Data" 參數: 為實際參數傳入函數。 
teacher.toString.call(student, "call: Student Data");

// bind 用法
//此方法是"建立一個新函數"
// student 參數: 設定呼方法的上下文，即函數中this的指向
// "bind: Student Data" 參數: 為實際參數傳入函數。 
var studentToString = teacher.toString.bind(student, "bind: Student Data");
studentToString();

// 需要注意，bind函數中定義的參數在傳入新產生的函數時，
// 會被置為內建參數放在所有實際參數之前，不會被覆蓋掉。
studentToString("Hello");