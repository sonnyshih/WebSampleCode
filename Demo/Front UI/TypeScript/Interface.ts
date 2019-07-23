// 基本型
interface LabelledValue {
    label: string;
}
  
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
  
console.log("/* ##### 基本型 ##### */");
var myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// 選擇性屬性 (Optional Properties)
//當有加?的變數，就可傳或不傳值都可以
interface SquareConfig{
  color?: string;
  width?: number;
}
  
function createSquare(config: SquareConfig): {color: string, area: number}{
  let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
  
let mySquare = createSquare({color: "black"});
console.log("/* ##### 選擇性屬性 (Optional Properties) ##### */");
console.log("color: " + mySquare.color + " area: " + mySquare.area);

// 函數型別 (Function Types)
interface SearchFunc{
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src: string, sub: string) {
  var result = src.search(sub);
  if (result == -1) {
    return false;
  }
  else {
    return true;
  }
}
console.log("/* ##### 函數型別 (Function Types) ##### */");
console.log(mySearch("Hello World", "Hello"));

// 陣列型別 (Indexable Types)
// index 只能宣告 number
interface StringArray {
  [index: number]: string;
}

var myArray: StringArray;
myArray = ["Bob", "Fred"];
console.log("/* ##### 陣列型別 (Indexable Types) ##### */");
console.log(myArray[0]);

// 類別型別 (Class Type)
interface ClockInterface{
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface{
  currentTime: Date;
  setTime(d: Date){
    this.currentTime = d;
  }

  constructor(h: number, m: number){

  }

  printCurrentTiem() {
    console.log(this.currentTime);
  }
}

console.log("/* ##### 類別型別 (Class Type) ##### */");
var date = new Date(2017,10,11,8,10,40,133);
const clock = new Clock(23, 10);
clock.setTime(date);
clock.printCurrentTiem();

// 擴充介面
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

var square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
console.log("/* ##### 擴充介面 ##### */");
console.log("Color: " + square.color + " side length:" + square.sideLength + " pen Width: " +square.penWidth);

// 混合型別 (Hybird Type)
interface Counter{
  (start: number): string;
  interval: number;
  reset():void;
}

function getCounter():Counter{
  let counter = <Counter>function(start: number){
    console.log("start: " + start);
  };
  counter.interval = 123;
  counter.reset = function(){
    console.log("start reset");
  };

  return counter;
}

console.log("/* ##### 混合型別 (Hybird Type) ##### */");
let counter = getCounter();
counter(10);
counter.reset()
counter.interval = 5.0;