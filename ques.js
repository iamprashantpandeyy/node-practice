console.clear();
console.log('start1');
const promise1 = new Promise((resolve, reject) => {
  console.log(1)
// reject(23)
resolve(2)
console.log(3)
})
console.log("======================");
promise1.then(res => {
  console.log("promise1's res: " ,res)
}).catch(error=>{
    console.log(error)
})
console.log('end1');

console.log("---------------------------");

console.log('start2');
const promise2 = new Promise((resolve, reject) => {
  console.log(1)
})
promise2.then(res => {
  console.log(2)
})
console.log('end2');


console.log('start3')
const fn = () => (new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
}))
console.log('middle')
fn().then(res => {
  console.log(res)
})
console.log('end3');
/*
answer:




*/