// Generator 產生器與yield敘述
//1. 基本用法
function* generatorFunc(){
    console.log("工作一");
    yield 1;

    console.log("工作二");
    yield 2;

    console.log("工作三");
    return 3;
}

console.log("##### Generator 基本用法 #####");
let g = generatorFunc();

let t1 = g.next();
let t2 = g.next();
let t3 = g.next();
let t4 = g.next();

console.log(t1);
console.log(t2);
console.log(t3);
console.log(t4);


//2. generator中呼叫另一個generator
function* generatorSubFunc(){
    console.log("子工作一");
    yield;

    console.log("子工作二");
    return;
} 

function* generatorFunc1(){
    console.log("工作一");
    yield 1;

    console.log("工作二");
    let sub = generatorSubFunc();
    sub.next();
    sub.next();
    yield 2;

    console.log("工作三");
    return 3;
}

console.log("##### generator中呼叫另一個generator用法 #####");
let g1 = generatorFunc1();

let t11 = g1.next();
let t21 = g1.next();
let t31 = g1.next();

console.log(t11);
console.log(t21);
console.log(t31);

//3.Generator 工作參數的傳遞
function* cal(){
    console.log("可開始計算");
    
    let a = yield;
    console.log("接收參數a=" + a);

    let b = yield;
    console.log("接收參數b=" + b);

    let res = a+b;
    yield res;
    res = res*res;

    let d = yield res;
    console.log("接收參數d=" + d);

    res = res - d;
    return res;
}

console.log("##### Generator 工作參數的傳遞用法 #####");
let c = cal();
c.next();
c.next(5)
console.log(c.next(3));
console.log(c.next());
console.log(c.next(10));