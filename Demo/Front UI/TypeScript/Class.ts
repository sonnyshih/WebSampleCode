// 基本型 (Basic Classes)
class Greeter{
    greeting: string;
    constructor(message: string){
      this.greeting = message;
    }
    greet(){
      return "Hello, " + this.greeting;
    }
}
  
let greeter = new Greeter("world");
console.log("/* ##### 基本型 (Basic Classes) ##### */");
console.log(greeter.greet());

  // 繼承 (Inheritance Classes)
class Animnal {
    name: string;
    constructor(theName: string) {
      this.name = theName;
    }
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}`);
    }
}
  
class Snake extends Animnal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animnal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animnal = new Horse("Tommy the Palomino");
console.log("/* ##### 繼承 (Inheritance Classes) ##### */");
sam.move();
tom.move(34);

// public, private, protected 修飾符 (public, private 和 protected modifiers)
class Person {
    public name: string;              // 如果沒有宣告, default是public
    private age: number;              // 只有在 class後可以使用，在繼承class中不可使用
    protected department: string;     // 在原始的class與繼承class中可以使用

    constructor(name: string, age:number){
    this.name = name;
    this.age = age;
    }

    public getAge(){
        return this.age;
    }
}

class Employee extends Person {
    constructor (name:string, age:number, department:string) {
        super(name, age);
        this.department = department;
    }

    public getDepartment(){
        return this.department;
    }

    public getEmpolyeeData(){
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let employee = new Employee("Jacky", 25, "Computer");
console.log("/* ##### public, private, protected 修飾符 (public, private 和 protected modifiers) ##### */");
console.log("Department: " + employee.getDepartment() + "Name: " + 
                employee.name + " Age: " + employee.getAge())
console.log(employee.getEmpolyeeData());                

// 靜態屬性 (Static Properties)
class Grid {
    static origin = { x: 0, y: 0 };
    calculateDistanceFromOrigin(point: { x: number; y: number }) {
      let xDist = point.x - Grid.origin.x;
      let yDist = point.y - Grid.origin.y;
      return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) {}
}
  
let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale
  
console.log("/* ##### 靜態屬性 (Static Properties) ##### */");
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

// 抽象類別 (Abstract Class)
abstract class Department{
    constructor(public name: string){
    }
    printName():void{
      console.log("Department name: " + this.name);
    }
  
    abstract printMeeting():void;
  }
  
  class AccountingDepartment extends Department{
    constructor(){
      super("Accounting and Auditing");
    }
  
    printMeeting():void{
      console.log("The Accounting Department meets each Monday at 10am.");
    }
  
    generateReports():void{
      console.log("Generating accounting reports...");
    }
  }
  
  let department: Department; 
  department = new AccountingDepartment();
  console.log("/* ##### 抽象類別 (Abstract Class) ##### */");
  department.printName();
  department.printMeeting();