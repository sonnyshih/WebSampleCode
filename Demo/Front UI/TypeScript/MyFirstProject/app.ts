console.log("Hello World");

//String
let myName = "Max";

//Number
let myaAge = 28;

//boolean
let hasHobbies = true;

//Assign types (如果沒有宣告的話，default是設定為any)
let myRealAge: number;  //宣告為number的變數
myRealAge = 27;

//Array
let hobbies: string[] = ["Cooking", "Sports"];
console.log(hobbies[0]);

//tuples
let address:[string, number] = ["Superstreet", 99];
console.log(address);

//enum
enum Color {
    Gray,   // 0
    Green,  // 1
    Blue,   //2
}

// 如果enum沒有指定值的話，都以index為值
let myColor:Color = Color.Blue;
console.log(myColor);

enum CarType {
    BMW,
    Benz = 100,
    Mazda = 2,
}

let myCar: CarType = CarType.Benz;
console.log(myCar);

//Any
let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);

// functions
// 回傳string
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// 不回傳任何值
function sayHello():void {
    console.log("Hello!");
}
sayHello();

// 傳入參數
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(10, 2));

// Function Type
let myMultiply: (val1: number, val2: number) => number; // 指定輸入變數與回傳值的型態
myMultiply = multiply;
console.log(myMultiply(5,3));

// Objects
// 宣告一個物件，裡面的property都要設定資料型態
let userData: {name: string, age: number} = {
    name: "Max",
    age: 27
}

// complex object
let complex:{data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

// Type alias (object 的型態重復利用)
type Complex = {data: number[], output: (all: boolean) => number[]};
let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

// Union types (聯集型態)
// 宣告變數可以是number，也可以是string
let myRealRealAge: number | string = 27;
myRealRealAge = "27"

//check types (判斷變數的型態)
let finalValue = 30;
if (typeof finalValue == "number") {    //判斷變數型態為number
    console.log("Final value is a number");
}

// never type
function neverReturns(): never {
    throw new Error("An error!");
}

// Nullable Types (變數型態是可以設定為null)
// 在tsconfig.json中 把 strictNullChecks打開 ("strictNullChecks": true, )，這樣就可以檢查變數是否能設為null
let canBeNull: number | null = 12;
canBeNull = null;