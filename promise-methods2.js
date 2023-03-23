console.clear();
Promise.allSettled([
    Promise.resolve(33),
    new Promise((resolve) => setTimeout(() => resolve(66), 0)),
    [],99,
    Promise.reject("error"),
  ])
  .then((values) => console.log(values));

  //any
  Promise.any([Promise.reject(33),
  new Promise((resolve,reject) => setTimeout(() => resolve(66), 0)),
  Promise.reject("error"),
])
.then((value)=>console.log(value));


//race
Promise.race([Promise.reject(33).catch((err)=>console.log(err)),
  Promise.resolve(66).then((value)=>value),
  Promise.reject("error").catch((err)=>console.log(err))
])
.then((value)=>console.log(value));

