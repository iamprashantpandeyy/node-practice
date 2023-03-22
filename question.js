function myFunc(num){
    let p=new Promise((resolve,reject)=>{
        if(num%2==0) resolve("Even")
        else reject("error");
    })
    return p;
}

let temp=myFunc(1);

temp.then((value)=>{
    console.log(value);
},(error)=>{
    console.log("error,as num is odd");
})