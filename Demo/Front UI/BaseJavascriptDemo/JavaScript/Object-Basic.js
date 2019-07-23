// JavaScript 物件
var teacher = {
    name: "John",
    age: 25,
    subject: "JavaScript",
    teaching: function(){
        console.log("開始教學");
    },
    relaxing: function(){
        console.log("開始講故事");
    }

};

console.log(typeof teacher); 

// 1.點語法
console.log("##### 點語法 #####")
console.log(teacher.name);
console.log(teacher.age);
console.log(teacher.subject);
teacher.teaching();
teacher.relaxing();

// 2.中括號法
console.log("##### 中括號法 #####")
console.log(teacher["name"]);
console.log(teacher["age"]);
console.log(teacher["subject"]);
teacher["teaching"]();
teacher["relaxing"]();

//3.修改物件(點語法)
console.log("##### 修改物件(點語法) #####")
teacher.subject = "Switf";
teacher.teaching = function(){
    console.log("Teaching Switf");
}
teacher.students = ["July", "Jeke", "Even"];    // 增加一個學員列表
console.log(teacher);

//4.修改物件(中括號法)
console.log("##### 修改物件(中括號法) #####")
teacher["subject"] = "Java";
teacher["teaching"] = function(){
    console.log("Teaching Java");
}
teacher["students"] = ["July", "Jeke", "Even"];    // 增加一個學員列表
console.log(teacher);


//5.This 的用法
var person = {
    name: "Jaki",
    syaHi:function(){
        console.log("Hi, My name is " + person.name);
        console.log("Hi, My name is " + this.name);     // 用法同上
    }
};

person.syaHi();

