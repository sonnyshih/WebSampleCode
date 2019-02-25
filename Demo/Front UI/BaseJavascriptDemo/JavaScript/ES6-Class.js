// Class 基本型
class Teacher {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    teaching(){
        console.log(this.name, this.age);
    }
}

let teacher = new Teacher("Jaki", 25);
teacher.teaching();

//class 繼承
class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log("Say Hi");
    }
}

class Teacher1 extends People {
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
        super.sayHi();        
    }

    teaching(){
        console.log(this.name, this.age, this.subject );
    }
}

let teacher1 = new Teacher1("Jaki", 25, "JavaScript");
teacher1.teaching();