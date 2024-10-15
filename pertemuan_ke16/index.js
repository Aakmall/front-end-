// Asynchronous JS

// // Synchronous   -- > Singgle thread -- > blocking | == > 1 proses tanpe jeda
// console.log("Proses 1")
// console.log("Proses 2")
// console.log("Proses yang memakan waktu yang lama")
// console.log("Proses 4")

// // Asynchronous  -- > Multi thread 
// // 1. Parallel
// setTimeout (() => {
//     console.log("Proses 1")

// }), 3000;
// console.log("Proses 2")
// setTimeout (() => {
//     console.log("Proses 3")
// })
// console.log("Proses 4")

// // 2. Consurent
// setTimeout(() => {
//     console.log("Proses 1");
//     setTimeout (() => {
//         console.log("Proses 2");
//         setTimeout (() => {
//             console.log("Proses 3");
//             setTimeout (() => {
//                 console.log("Proses 4");
//             }, 3000);
//         }, 3000);
//     }, 3000);
// }, 3000);

// Promise
// condition = false
// let newPromise = new Promise((resolve, reject) => {
//     if(condition){
//         resolve("Berhasil");
//     } else {
//         reject("Gagal");
//     }
// });

// // Pakai Promis  ===  SUDSH ADA
// // 1. then catch
// newPromise
//     .then((result) => console.log(result))
//     .then((result2) => console.log(result2))    
//     .catch((error) => console.log(error));

// // 2. Async - await
// // Harus dibuat didalam fungsi

// const consumePromise = async () => {
//     try {
//         let result = newPromise;
//         console.log(result)
//     } catch {
//         console.log("Gagal")
//     }

// };
// consumePromise();

// Pakai Promise Yang Sudah Ada
// 1. Fetch
Fetch("https:://jsonplaceholder.typicode.com/users")
    .then(( response) => response.json())
    .then(( json) => console.log(json));

