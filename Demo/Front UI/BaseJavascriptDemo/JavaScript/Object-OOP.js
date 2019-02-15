/* ##################################### */ 
/* ##### JavaScript中模擬類別的方法 ##### */
/* ##################################### */ 
//1.使用工廠方法模擬類別
function Teacher(name, age, subject) {
    var obj = {};
    obj.name = name;
    obj.age = age;
    obj.subject = subject;
    obj.teaching = function(){
        console.log("我是" + this.name + ", 歡迎大家來聽"+this.subject+"教學課程");
    }

    return obj;
}

var jaki = Teacher("Jaki", "25", "JavaScript");
var lucy = Teacher("lucy", "24", "swift");
console.log(" ##### 使用工廠方法模擬類別 #####");
jaki.teaching();
lucy.teaching();

//2.使用建置方法模擬類別
function Teacher1(name, age, subject) {
    
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teaching = function(){
        console.log("我是" + this.name + ", 歡迎大家來聽"+this.subject+"教學課程");
    }
}

var jaki1 = new Teacher1("Jaki", "25", "JavaScript");
var lucy1 = new Teacher1("lucy", "24", "swift");
console.log(" ##### 使用建置方法模擬類別 #####");
jaki1.teaching();
lucy1.teaching();

//3.使用Object建置方法物件的create()方法模擬類別
var Teacher2 = {
    name: "Jaki",
    age: 25,
    teaching: function() {
        console.log("我是" + this.name + ", 歡迎大家來聽"+this.subject+"教學課程");
    }
};

var jaki2 = Object.create(Teacher2);
console.log(" ##### 使用Object建置方法物件的create()方法模擬類別 #####");
jaki2.teaching();

//4.使用封裝法模擬類別
var Teacher3 = {
    init: function(name, age, subject){
            var teacher = {};
            teacher.name = name;
            teacher.age = age;
            teacher.subject = subject;
            teacher.teaching = function (){
                console.log("我是" + this.name + ", 歡迎大家來聽"+this.subject+"教學課程");
            }

            return teacher;
          }
};

var jaki3 = Teacher3.init("Jaki", "25", "JavaScript");
var lucy3 = Teacher3.init("lucy", "24", "swift");
console.log(" ##### 使用封裝法模擬類別 #####");
jaki3.teaching();
lucy3.teaching();

/* ##################################### */ 
/* ##### 在JavaScript中實現繼承機制 ##### */
/* ##################################### */ 
//1.使用物件冒充方式實現繼承 (基本型)
function People(name, age) {
    this.name = name;
    this.age = age;
}

function Teacher4(name, age, subject){
    this.init = People;
    this.init(name, age);
    delete this.init;

    //增加教師類別特有的屬性
    this.subject = subject;
    this.teaching = function() {
        console.log("我是" + this.name + ", 歡迎大家來聽"+this.subject+"教學課程");
    }
}

var jaki4 = new Teacher4("Jaki", "25", "JavaScript");
var lucy4 = new Teacher4("lucy", "24", "swift");
console.log(" ##### 使用物件冒充方式實現繼承 #####");
jaki4.teaching();
lucy4.teaching();

//1.使用物件冒充方式實現繼承 (使用call型)
function Teacher5(name, age, subject) {
    People.call(this, name, age);
    this.subject = subject;
    this.teaching = function() {
        console.log("教師:" + this.name + ", 正在教授"+this.subject+"課程");
    }
}
var jaki5 = new Teacher5("Jaki", "25", "JavaScript");
var lucy5 = new Teacher5("lucy", "24", "swift");
console.log(" ##### 使用物件冒充方式實現繼承 (使用call型) #####");
jaki5.teaching();
lucy5.teaching();

//1.使用物件冒充方式實現繼承 (多重繼承)
function Work(time){
    this.time = time;
}

function Teacher6(name, age, subject){
    People.call(this, name, age);
    Work.call(this, 8);
    this.subject = subject;
    this.teaching = function() {
        console.log("教師:" + this.name + ", 正在教授"+this.subject+"課程, 工作時間: " + this.time + "小時" );
    }
}

var jaki6 = new Teacher6("Jaki", "25", "JavaScript");
var lucy6 = new Teacher6("lucy", "24", "swift");
console.log(" ##### 使用物件冒充方式實現繼承 (多重繼承) #####");
jaki6.teaching();
lucy6.teaching();

//2.使用原型鏈的方式實現繼承
function People1(){
    this.sayHi = function(){
        console.log("Hello, I am "+this.name +", "+ this.age + " years old.");
    }
}

function Teacher7(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
}

//設定prototype屬性
Teacher7.prototype = new People1();
var jaki7 = new Teacher7("Jaki", "25", "JavaScript");
var lucy7 = new Teacher7("lucy", "24", "swift");
console.log(" ##### 使用原型鏈的方式實現繼承 #####");
jaki7.sayHi();
lucy7.sayHi();

//3.使用混合模式實現繼承
function People2(name, age){
    this.name = name;
    this.age = age;
}

//方法都放入原型鏈中
People2.prototype = {
    constructor: People2,
    sayHi: function(){
        console.log("Hello, I am "+this.name +", "+ this.age + " years old.");
    }
}

function Teacher8(name, age, subject){
    //用物件冒充把屬性繼承過來
    People2.call(this, name, age);
    this.subject = subject;
}

Teacher8.prototype = new People2();

var jaki8 = new Teacher8("Jaki", "25", "JavaScript");
var lucy8 = new Teacher8("lucy", "24", "swift");
console.log(" ##### 使用混合模式實現繼承 #####");
jaki8.sayHi();
lucy8.sayHi();