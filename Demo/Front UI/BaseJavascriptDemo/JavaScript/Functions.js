// JavaScript 有3種基本方式定義function
    /* == 方式 1: 涵數敘述 定義function == */
    function outputName() {
        console.log("Jaki");
    }

    function outputHello(name){
        return "Hello " + name;
    }

    outputName();
    console.log(outputHello("Lcuy"));
    

    /* == 方式 2: 涵數運算式(匿名函數) 定義function == */
    // 函數運算式
    var outputAge = function(age){
        console.log("My age is " + age );
    }
    outputAge(25);

    // 遞迴階乘函數
    var mathFunc = function mathF(a) {
        var res = a;
        a--;
        if(a>0){
            res *=mathF(a);
        }
        return res;
    }
    var mathRes = mathFunc(5);
    console.log(mathRes);
    
    /* == 方式 3: 使用Function建罝函數 == */
    // 所有參數類型都需要為字串類型，函數本體也可包裝成字串
    var output = new Function("name", "console.log(name);");
    output("Jaki");

    // arguments屬性將傳回一個array結構資料
    function myFunc(){
        for (var i= arguments.length-1; i>=0; i--) {
            console.log(arguments[i]);
        }
    }
    myFunc(1, 2, 3, 4, 5);

    //執行一次就不需要的函數
    (function(){
        console.log("run self");
    })();
    