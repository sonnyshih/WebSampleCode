let f = (a) =>{
    return a*a;
};

let res = f(5);
console.log(res);

// arrow function因為只有一個參數與一行程式，所以可以寫成
let f1 = a => a*a;
let res1 = f(3);
console.log(res1);

//支援函數參數的解構設定值
let func = ({name, age})=>console.log(name, age);
func({name:"Jaki", age:25});

//箭頭函數中this的固定
function foo(){
    let _this = this;
    this.name = "foo";

    this.inline = ()=>{ // 使用箭頭函式時
        console.log(_this.name);
    }

    this.outline = function(){  //使用普通函式時
        console.log(this.name);
    }
}
let obj = new foo();
obj.inline();