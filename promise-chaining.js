console.clear();
let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
         resolve(1);
    },2000)
});
promise.then((value)=>{
    console.log(value);
    let promise2= new Promise((resolve,reject)=>{
        setTimeout(()=>{
             resolve(2);
        },2000)
    })
    return promise2;
}).then((value2)=>{
    console.log(value2);
    return 3;
}).then((value3)=>{
    console.log(value3);
})