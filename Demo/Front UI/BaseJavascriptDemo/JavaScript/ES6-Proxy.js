var teacher = {
    name: "Jaki",
    age: "25",
    toString: function() {
        console.log("teaching...");
    }
};

console.log(teacher.name);

// 建立Prxoy
//第1個參數為要代理的物件
//第2個參數是定義要攔截或是修改行為的方法
let proxy_teacher = new Proxy(teacher, {
    // 增加屬性時會觸發
    set:(target, key, value, receiver)=>{
        console.log("增加屬性 :", key);
        target[key] = value;
    },

    // 取得屬性時會觸發
    get:(target, key, receiver)=>{
        console.log("取得屬性 :", key);
        return target[key];
    },

    //判斷物件中是否包含某個屬性時觸發
    has: (target, key)=>{
        console.log("檢查屬性 :", key);
        return key in target;
    },

    // 刪除物件屬性時觸發
    deleteProperty: (target, key)=>{
        console.log("刪除屬性 :", key);
        delete target[key];
    },

    //取得所有本身屬性時觸發 (getOwnPropertyNames() 和 Keys()方法)
    ownKeys: (target)=>{
        console.log("取得所有本身屬性");
        return Object.getOwnPropertyNames(target);
    },

    // 定義屬性時觸發 (defineProperty() 和 defineProperties() 方法)
    defineProperty: (target, key, desc)=>{
        console.log("定義屬性:", key);
        return Object.defineProperty(target, key, desc);
    },

    // 抑制可擴統性時觸發 (preventExtensions() 方法)
    preventExtensions: (target)=>{
        console.log("抑制可擴充性");
        return Object.preventExtensions(target);
    },

    //取得物件原型時觸發 (getPrototypeOf() 方法)
    getPrototypeOf: (target)=>{
        console.log("取得物件原型");
        return Object.getPrototypeOf(target);
    },

    //取得物件可擴充性時觸發 (isExtensible() 方法)
    isExtensible: (target)=>{
        console.log("取得物件可擴充性");
        return Object.isExtensible(target);
    },

    //設定物件原型時觸發 (setPrototypeOf() 方法)
    setPrototypeOf: (target, proto)=>{
        console.log("設定物件原型");
        return Object.setPrototypeOf(target, proto);

    },

    //call, apply時觸發 (攔截call()和apply()方法，用於函數物件)
    apply: (target, object, arguments)=>{
        console.log("攔截call()和apply()方法");
        target.apply(object, arguments);
    },

    // 建置construct 時觸發
    construct: (target, arguments)=>{
        return {};
    }

});

console.log("##### 對teacher物件的屬性的存取進行攔截 #####");
console.log(proxy_teacher.name); 
proxy_teacher.subject = "JavaScript";
console.log(proxy_teacher.subject)
console.log("name" in proxy_teacher);
delete proxy_teacher.name;
console.log(Object.getOwnPropertyNames(proxy_teacher));

Object.defineProperty(proxy_teacher, "name", {
    value: "Jaki",
    writable: true,
    configurable: true
});
Object.getPrototypeOf(proxy_teacher);               //取得物件原型
Object.isExtensible(proxy_teacher);                 //取得物件可擴充性
Object.setPrototypeOf(proxy_teacher, {sex:"男"});   //設定物件原型
Object.preventExtensions(proxy_teacher);            //抑制可擴充性