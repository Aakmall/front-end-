// // string literal
// // 1. string literal 
// // let fullName ="Akmal anapu";
// // let age = 17;
// // let address = "Manado";

// // // A. Biasa
// // let kalimat = 
// //     "Hallo nama saya " + 
// //     fullName + 
// //     ", umur saya " + 
// //     age + 
// //     ", tinggal di " 
// //     + address + 
// //     "."
// // console.log(kalimat)


// // // B. string literal menggunakan backtik

// // let kalimat2 = `
// // Hallo nama saya ${fullName}, umur saya ${age}, tinggal di ${address}`
// // console.log(kalimat2)

// // 2. Arrow Function
// function sayGreetings(fullName) {               // cara 1
//     return `Hello ${fullName}`;
// }
// console.log(sayGreetings("akmal"))

// const sayGreetings2 = (fullName) => {          // cara 2
//     return `Hello ${fullName}`;
// }
// console.log(sayGreetings2("Rizki"))

// // Implisit return value
// const sayGreetings3 = (fullName) =>   `Hello ${fullName}`;              // nda perlu pake return
// console.log(sayGreetings2("Anapu"))

// // Arrow Function pada IIFE 
// let output = (() => `hello`)();
// console.log(output)
// // Arrow Function pada callback
// let num = [1,2,3,4,5];
// let output2 = num.map((item) => item);
// console.log(output2)


// const sayGreetings3 = (fullName, age) => {                                        // pake if, bukan terbaru
//     console.log(`Hello nama saya ${fullName}, umur saya ${age}`)                    // output Hallo nama saya Undifined, umur saya Undifined
// };
// sayGreetings3()

// // 3. default parameter
// //======================================================================
// const sayGreetings4 = (fullName = "jhon doe", age = 38, address = "Manado") => {                                        //
//     console.log(`Hello nama saya ${fullName}, umur saya ${age}, tinggal di ${address}`);
// };
// sayGreetings4()
