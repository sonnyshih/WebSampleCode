var teacher = {
    name: "Jaki",
    age: 25,
    teaching: function() {
        console.log("teaching...");
    }
};

var student = new Object();
student.name = "Lucy";
student.age = 24;
student.learning = function(){
    console.log("learning...");
}

console.log(" ##### teacher 物件 #####");
console.log(teacher);

console.log(" ##### student 物件 #####");
console.log(student);

//defineProperty() 用法
// 直接在物件上"定義新的屬性"或是"修改已存在的屬性"
//1.修改 name 屬性
Object.defineProperty(student, "name", {
    configurable: true,     // name 屬性的 可設定性
    enumerable: true,       // name 屬性的 可列舉性 true: 可在for-in 結構中檢查到
    writable: true,         // name 屬性的 可寫入性
    value: "July"           // name 屬性的 值
});
console.log(" ##### 修改 student 物件中的 name 屬性 #####");
console.log(student);
console.log(student.name);

//2.定義getter與setter
// 注意: value, writable與 getter, setter不能同時存在。
var name = "Lucy";
Object.defineProperty(student, "name", {
    configurable: true,     // name 屬性的 可設定性
    enumerable: true,       // name 屬性的 可列舉性 true: 可在for-in 結構中檢查到
    get:function(){
        console.log("get name 屬性值");
        return name;
    },
    set:function(value){
        console.log("set name 屬性值");
        name = value;
    }
});

console.log(" ##### 設定 student 物件中的 name 屬性的getter與setter #####");
console.log(student.name);
student.name = "July";
console.log(student.name);

//3.一次定義或修改多個屬性
Object.defineProperties(teacher, {
    name: {
        writable: true,
        value: "Candy"
    },
    age: {
        writable: true,
        value: 28
    }
});
console.log(" ##### teacher 物件中的 設定多個屬性 #####");
console.log(teacher);

var teacher2 = {
    subjcect: "JavaScript"
};

Object.defineProperty(teacher, "number",{
    value: 1001,
    enumerable: false   
});
console.log(" ##### teacher 物件中的新增number屬性 #####");
console.log(teacher.number);

// 因為number屬性的enumerable設為false, 所以不會被印出來
console.log(" ##### 列出teacher物件中的屬性 #####");
for(prop in teacher){
    console.log(prop);
}

//4.assign 方法
// 進行物件可列舉屬性的複製
var obj = {};
Object.assign(obj, teacher, teacher2);
console.log(" ##### 列出obje 複製teacher, teacher2物件屬性的值 #####");
console.log("Obj name=" + obj.name + " age="+obj.age + " subject="+ obj.subjcect);
obj.teaching();
console.log(obj.number);    // 因為number屬性的enumerable設為false無法被複製，所以會出現undefined


//5.create 方法
//繼承的概念
var base = {
    subject: "JavaScript"
}

var teacher1 = Object.create(base, {
    "name": {
              value:"Jaki",
         enumerable: true
    },
    "age": {
        value: 25,
        enumerable:true
    }
});
console.log(" ##### 使用object 的create方式 建立件 #####");
console.log(teacher1);
console.log(teacher1.subject);

//6.getOwnPropertyDescriptor方法
// 取得物件某個屬性
console.log(" ##### 使用object 的getOwnPropertyDescriptor方式 凍結物件 #####");
console.log(Object.getOwnPropertyDescriptor(base, "subject"));

//7.getOwnPropertyNames方法
// 取得物件所有本身的屬性
console.log(" ##### 使用object 的getOwnPropertyNames方式 取得物件所有本身的屬性 #####");
console.log(Object.getOwnPropertyNames(teacher1));

//8.getPrototypeOf 方法
// 取得物件的原型物件
console.log(" ##### 使用object 的getPrototypeOf方式 取得物件的原型物件 #####");
console.log(Object.getPrototypeOf(teacher1));


//9.freeze方法
// 凍結物件,不能修改物件
var fre ={
    name: "Jaki"
}

Object.freeze(fre);
fre.name = "Lucy";
console.log(" ##### 使用object 的freeze方式 凍結物件 #####");
console.log(fre);

//10.seal方法
// 不可增加/刪除屬性，但可以修改屬性的值 (freeze是可以增加/刪除屬性，但不可改屬性的值)
var seal = {
    name: "Jaki"
}

self = Object.seal(seal);
seal.age = 25;
console.log(" ##### 使用object 的seal方式 密封物件 #####");
console.log(seal.age);

