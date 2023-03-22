console.clear();
setTimeout(()=>console.log("Hii I'm first set timeout with 3 sec"),3000);
console.log("I am later on");
setTimeout(()=>console.log("Hii I'm second set timeout with 2 sec"),2000);

//set time interval
let intervalID = setInterval(myCallback, 2000, "first", "second");

function myCallback(a, b) {
  // Your code here
  console.log(a);
  console.log(b);
}
console.log("hii");
// clearInterval(intervalID);
//