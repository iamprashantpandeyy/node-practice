console.clear();
// async function foo() {
//     console.log( await new Promise((resolve) =>
//       setTimeout(() => resolve("Promise-1")),
//     ))
    

//     console.log("middle");

//     console.log(await new Promise((resolve) =>
//       setTimeout(() => resolve("Promise-2")),
//     ))

//   }
//   foo();


const f1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,2000,1);
    })
}
const f2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(reject,2000,"error");
    })
}

async function myFunc1(){
    try{
        console.log("Sequentially print");
        var first=await f1();
        console.log("sequential", first);

        var second=await f2();
        console.log("sequential", second);
    } catch(err) {
        console.log(err);
    }
}
myFunc1();
async function myFunc2(){
   try
    {
        console.log("concurrent print");
        var first=f1();
        var second=f2();

        console.log("concurrent", await first);
        console.log("concurrent", await second);
    } catch(err) {
        console.log(err);
    }
}


myFunc2();

const blockThread = () => {
    return new Promise((res, rej) => {

        setTimeout(() => {
            res("resolve")
        }, 5000);
    })
}
// setTimeout(() => {
//     console.log("Zero running...")
// }, 0);
(async () => {
    setTimeout(() => {
        console.log("Zero running...")
    }, 0);
    const result = await blockThread();
    // const result = "result"
    console.log(result);
})()

