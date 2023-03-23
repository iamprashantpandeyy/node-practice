//as settimeout is asynchronous opn, it will be pushed to queue and execute after current execution
// function foo() {
//     console.log("foo has been called");
//   }
//   setTimeout(foo,2000);

//   console.log("After setTimeout");
//   console.log("After setTimeout");
//   console.log("After setTimeout");
//   console.log("After setTimeout");
//   console.log("After setTimeout");
//   console.log("After setTimeout");
//   console.log("After setTimeout");
//   console.log("After setTimeout");
//   console.log("After setTimeout");
//   console.log("After setTimeout");
//   console.log("After setTimeout");
//   function foo2() {
//     console.log("foo2 has been called");
//   }
//   setTimeout(foo2,2000);
//   //-------------------------
  function first() {
    console.log(1)
  }
  
 
  
  function third() {
    console.log(3)
  }
// first()
// second()
// third()

//----------------------------
/*
 *It’s important to remember that the timer does not mean that the code will execute in exactly 0 seconds or whatever the specified time is, but that it will add the anonymous function to the queue in that amount of time. 
*/  
  function second(name) {
    console.log(name ," middle");
    setTimeout(() => { //added to queue
      console.log(2)
    }, 2000)
  }
async function foo(name) {
  console.log(name, "start");
  await second(name);//console will be printed but async fn will be added to queue
  console.log(name, "end");
}

foo("First");
foo("Second");
