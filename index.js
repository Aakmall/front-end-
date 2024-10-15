// //IIFE & Callback
// // 1. IIFE = (immadiately invoked function expression) Fungsi yang dipanggil langsung    <<<===
// (function () {
//     console.log("Hello world!!");
// })();

// // Pake params & arg
// (function (fullName) {
//     console.log("Hello "+ fullName);
// })("John Doe");

// // Pake params & arg
// let output = (function (fullName) {
//     return "Hello " + fullName;
// })("John Doe2");
// console.log(output)

// //==================================
// // Callback function                          <<<======
// // function sebagai argumen
// // No parasm & args & return value
// function SayHello(callback){
//     callback();
// }
// SayHello(function(){
//     console.log("Hello Callback Function");
// });

// // With parasm & args & return value
// function SayHello(callback){
//     //logic
//     let output = callback("John Doe");
//     return output
// }
// let output = SayHello(function(fullName){
//     return "Hello " + fullName
// });
// console.log(output)
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
      break;
    }
  }

  
  let peopleCopy = people.slice(2);
  console.log(peopleCopy); // Output: ["Devon", "Your Name"]

  
people = ["Matt", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people); // Output: ["Matt", "Mary", "Elizabeth", "Artie", "James"]

let withBob = people.concat("Bob");
console.log(withBob); // Output: ["Matt", "Mary", "Elizabeth", "Artie", "James", "Bob"]

