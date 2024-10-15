// Rest parameter dan spread operator

// 1. Rest parameter
// // fungsi yang memiliki banyak parameter atau argumen.

// // tanpe rest parameter 
// const func1 = (param1,param2,param3,param4,param5) => {
//     console.log(param1,param2,param3,param4,param5);
// }
// func1("A","B","C","D","E")

// // dengan rest parameter            
// const func2 = (...params) => {
//     console.log("\n",params);
// }
// func2("A","B","C","D","E")

// // Rest parameter harus berada di terakhir di parameter list

// const func3 = (param1,param2, ...params) => {
//     console.log(param1,param2);
//     console.log(params,"\n");
// };
// func3("A","B","C","D","E")

// // mini Exercise 
// const penjumlahan = (a,b,c,d,e,f) => {
//     let arr = [1,2,3,4,5,6]
//     let hasil = 0
//     arr.forEach((item) => (hasil += item));
//     return hasil
// };
// console.log(penjumlahan(1,2,3,4,5,6,9));

// const penjumalhan1 = (...huruf) => {
//     let hasil = 0;
//     huruf.forEach((item) => (hasil += item));
//     return hasil
// };
// console.log(penjumlahan(1,2,3,4,5,6,9));

// // 2. Spread Operator
// let numbers = [1,2,3,4,5];                  // Digunakan Pada Array
// console.log(numbers);
// console.log(...numbers);

//                                  //Array
// //1. Duplikasi Array
// let numbers2 = [numbers,1,2];
// numbers.push(6)
// console.log(numbers2)
// // ====================
// let numbers22 = [...numbers,1,2];
// numbers.push(6)
// console.log(numbers22)
// //2. Menggabungkan Array
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [7,8,9];

// let numbers3 = arr1.concat(arr2, arr3); //ES5
// let numbers4 = [...arr1,...arr2,...arr3];  //ES6
// console.log(numbers4)
//                                  //Objek
//1. Duplikasi Objek
const john = {
    fullName: "john, Doe",
    age: 30 
};

const john2 = {...john, address: "Manado"};

