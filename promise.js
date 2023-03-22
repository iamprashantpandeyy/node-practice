let promise1=new Promise((resolve,reject)=>{
    // ("Promise1 is pending");
    setTimeout(()=>{ 
        resolve("✅"); //resolve with a value or can be rejected with error
    },3000) //resolved after 3 second
})
let promise2=new Promise((resolve,reject)=>{
    // ("Promise2 is pending");
    setTimeout(()=>{
        reject("There is some error"); //resolve with a value or can be rejected with error
    },3000) //rejected after 3sec
})
// console.log(promise1, promise2);
promise1.then((value)=>{ 
    console.log(value);
},(error)=>{
    console.log("error in promise 1");
})
promise2.catch((error)=>{
    console.log("some error in promise2🚫");
})

