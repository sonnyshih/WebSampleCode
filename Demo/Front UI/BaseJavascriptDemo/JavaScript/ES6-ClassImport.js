//注意: 要在React Native 中才能使用
// import 物件
import {username, password} from './ES6-ClassModule.js';
console.log(username, password);

// 自訂 import 物件名稱
import {username as name, password as word} from "./ES6-ClassModule.js";
console.log(name, word);

// import 所有module中所有的物件
import * as module from "./ES6-ClassModule.js";
console.log(module.username, module.password);

// import 預設物件
// People會載入 ES6-ClassModule.js中的export default class People 
import People, {username} from "./ES6-ClassModule.js";