
//Ubah exercise 1 dari function biasa menjadi IIFE dan Callback

// // Pake params & arg
// let output = (function (fullName) {
//     return "Hello " + fullName;
// })("John Doe2");
// console.log(output)
// //==============================================
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
// //==============================================
// IIFE (Pake parasm * args & return value)
let output = (function(tinggi,berat){
    C_K = tinggi/100
    rumus = berat / (C_K*C_K);
    return rumus
})(173,55)

console.log(output)

//=================================================
//Callback
function BMI(panggil) {
    let output = panggil(173,55);
    return output
}
let output = BMI(function(tinggi,berat){ 
    return 
})
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
function BMI(tinggi,berat){
    C_K = tinggi/100
    rumus = berat / (C_K*C_K);
    return "BMI =" + rumus;
}
let saya = BMI(173,55)
console.log(saya)
//====================================