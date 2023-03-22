console.clear();
function incrementOne(num){
    return num+1;
}
function incrementTwo(num){
    return num+2;
}
function incrementThree(num){
    return num+3;
}
function operateInc(){
    //synchronous
    let ans=0;
    ans=incrementOne(ans);
    ans=incrementTwo(ans);
    ans=incrementThree(ans);

    console.log(`answer is: ${ans}`);
}
operateInc();
//using callbacks
function decrementOne(ans,callback){
    ans-=1;
    callback(ans);
}
function decremenTwo(ans,callback){
    ans-=2;
    callback(ans);
}
function decremenThree(ans,callback){
    ans-=3;
    callback(ans);
}
function operateDec(){
    let ans=6;
    decrementOne(ans,(ans)=>{
        decremenTwo(ans,(ans)=>{
            decremenThree(ans,(ans)=>{
                console.log(`answer is: ${ans}`);
            })
        })
    })
}// !this is called callback hell
operateDec(); //expected answer is 0