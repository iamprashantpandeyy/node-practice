console.clear();


const pp1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 1000);
  });
  const pp2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 2000);
  });
  const pp3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("three"), 3000);
  });
  const pp4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("four"), 4000);
  });
  const pp5 = new Promise((resolve, reject) => {
    reject("reject");
  });
  
  
  Promise.all([pp1, pp2, pp3, pp4, pp5])
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.error(error);
    });

// const p1 = Promise.resolve(3);
// const p2 = 1337;
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   },);
// })

// const p4=Promise.all([p1, p2, p3]).then((values) => {
//   console.log(values);
//   return values; // [3, 1337, "foo"]
// }).catch((error)=>{
//     console.log(error);
// });
// console.log(p4);

// setTimeout(()=>{
//     console.log(p);
// })

//--------------------------------------


// const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
// const p5 = Promise.all(mixedPromisesArray);
// console.log(p5);
// setTimeout(() => {
//   console.log("the queue is now empty");
//   console.log(p5);
// });


/* 
promise{<pending>}
rejected 44
prommise {"rejected" 44}

*/
//--------------------------------------


// const p6 = Promise.all([]); // Will be immediately resolved
// const p7 = Promise.all([1337, "hi"]); // Non-promise values are ignored, but the evaluation is done asynchronously
// console.log(p6);
// console.log(p7);
// setTimeout(() => {
//   console.log("the queue is now empty");
//   console.log(p2);
// });

//--------------------------------------