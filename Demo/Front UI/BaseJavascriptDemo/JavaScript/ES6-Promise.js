//Promise 基本用法(非同步)
// Promise 有二個參數
//  resolve: 執行完成回傳的訊息
//   reject: 執行失敗回傳的訊息
console.log("##### Promise 基本用法 #####");
let promise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("工作直接完成")
        // 注意: resolve與reject不可同時仲用
        // resolve("成功");    // 會進入promise.then裡的success
        reject("錯誤");        // 會進入promise.then裡的error 和 promise.catch
    }, 2000);
});

promise.then(
    (success)=>{
        console.log(success);
    }, 
    (error) => {
        console.log("then - " + error);
    }
);

// catch方法 與 then 裡的 error是相同的，只是catch方法只有個參數
promise.catch(
    (error) =>{
        console.log("catch - " + error);
    }
);

console.log("go...");

// Promise 工作鏈 (A執行完接B)
console.log("##### Promise 工作鏈 (A執行完接B) #####");
let promise1 = new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("工作1直接完成")
            resolve("成功1");    // 會進入promise.then裡的success
        }, 2000);
    }
);

promise1.then(
    (success)=>{
        console.log(success);

        return new Promise((resolve, reject)=>{

                setTimeout(()=>{
                    console.log("工作2直接完成")
                    resolve("成功2");    // 會進入promise.then裡的success
                }, 2000);
            }
        );


    }, 
    (error) => {
        console.log("then - " + error);
    }

).then(success=>{
    console.log(success);
});


//Promise 物件組合 (Promise.all)
// 只要一個promise 是reject失敗，則就會跑失敗
let promise3 = new Promise((resolve, reject)=>{
    console.log("工作3執行成功");
    resolve();
});

let promise4 = new Promise((resolve, reject)=>{
    console.log("工作4執行成功");
    resolve();
});

let promise5 = new Promise((resolve, reject)=>{
    console.log("工作5執行成功");
    resolve();
});

let promiseGroup = Promise.all([promise3, promise4, promise5]);

promiseGroup.then(
    success=>{
        console.log("工作組執行成功");
    }, 
    error=>{
        console.log("工作組執行失敗");
    });

//Promise 物件組合 (Promise.race)
// 只要一個promise 是完成，就算完成
let promise6 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("工作6執行成功");
        resolve();
    }, 1000);
});

let promise7 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("工作7執行成功");
        resolve();
    }, 1000);

});

let promise8 = new Promise((resolve, reject)=>{
    console.log("工作8執行失敗");
    reject();
});

let promiseGroup1 = Promise.race([promise6, promise7, promise8]);

promiseGroup1.then(
    success=>{
        console.log("工作組執行成功");
    }, 
    error=>{
        console.log("工作組執行失敗");
    });
