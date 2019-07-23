// 函數型別 (以下三種寫法是相同的, myAdd1是簡寫)
function add(x: number, y: number): number {
    return x + y;
}

var myAdd = function(x: number, y: number): number {
                return x + y; 
            };

var myAdd1: (x:number, y:number) => number = 
            function(x: number, y: number): number { return x + y; };            

console.log("/* ##### 函數型別 ##### */");
let sum: number = add(5,10);
console.log(sum);  
sum = myAdd(3,15);
console.log(sum);
sum = myAdd1(2,8);           
console.log(sum);

// 選擇性參數 (lastName 不確定是不是要傳值，則變數名後面加個?)
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

console.log("/* ##### 選擇性參數 ##### */");
var result1 = buildName("Bob");
var result2 = buildName("Bob", "Adams");
console.log(result1);
console.log(result2);

// 預設參數
function buildName1(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

var result3 = buildName1("Bob");
var result4 = buildName1("Bob", "Adams");
console.log("/* ##### 預設參數 ##### */");
console.log(result3);
console.log(result4);

// 剩餘參數
function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }
  
var employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log("/* ##### 剩餘參數 ##### */");
console.log(employeeName);

// Lambda運算式和使用‘this’
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // Notice: the line below is now a lambda, allowing us to capture 'this' earlier
        return () => {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
      
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("/* ##### Lambda運算式和使用‘this’ ##### */");
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
