
// 區塊級作用區
//1.全域變數與區域變數
{
    var aa = 10; //全域變數
    let bb = 10; // 區域變數
    console.log(bb);
}

console.log(aa);
console.log(bb); //拋出錯誤例外

//2.常數設定
const PI = 3.14;    //常數不可改變
PI = 3;     // 拋出錯誤例外

//解構設定值
// 從陣列、物件等結構中分析所需要的值
//1.陣列的解構設定值
let students = ["Jaki", "Lucy", "Mery", "July"];
let stud1 = students[0];
let stud2 = students[1];
console.log("##### 陣列的解構設定值 #####");
console.log(stud1);
console.log(stud2);

let [a, b, c, d] = students;
console.log(a + " " + b + " " + c + " " + d);

let [e, f, g] = students;
console.log(e + " " + f + " " + g);

let [,,,h] = students;
console.log(h);

let [i,...j] = students;    // 分析陣列中的第1個值，並將餘值放入另一個陣列
console.log(i + " " + j);

let [k, l, m, n, o] = students; 
console.log(k + " " + l + " " + m + " " + n + " " + o);

let array = [1, 2, [5, 6, 7]];
let [p, q, [r, s, t]] = array;  //解構設定值的巢狀結構
console.log(""+ p + q + r + s + t);

//物件的解構設定值
let teacher = {
    name: "Jaki",
    age: 25,
    teaching: function(){
        console.log("teaching...");
    }
};

let {name, age, teaching} = teacher;
console.log(name + " " + age);
teaching();

let {name:myName, age:myAge} = teacher;
console.log(myName + " " + myAge);

// 物件的巢狀結構結構設定值
let teacher1 = {
    name: "Jaki",
    age: 25,
    students: [
        {name: "Lucy", age: 24},    
        {name: "July", age: 26}
    ],
    teaching: function(){
        console.log("teaching...");
    }
};

let {students:[{name:name1}, {name:name2}]} = teacher1
console.log(name1 + " " + name2);

//字串與函數參數的解構設定值
let people = {
    name: "Jaki",
    age: 25
}

function print({name, age}){
    console.log(name + " " +age);
}

print(people);