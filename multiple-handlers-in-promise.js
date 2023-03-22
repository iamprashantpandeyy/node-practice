console.clear();
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(0);
    },1000)
});

p1.then((value)=>{
    console.log(value+1);
},(error)=>{
    console.log("then error in promise");
})
p1.then((value)=>{
    console.log(value+2);
})
p1.then((value)=>{
    console.log(value+3);
})
p1.catch((error)=>{

    console.log(("catch error in promise"));
})