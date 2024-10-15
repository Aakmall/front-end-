// // //     ARRAY & OBJEK     
// // // 1. Array
// // // Deklarasi variabel array
// // // Cara 1. Array Literal
// // let akmal = ["rizki, anapu","ganteng"];
// // console.log(akmal)

// // let nomor = [1,2,3,4,5]
// // console.log(nomor)
// // // cara 2. Kata kunci new
// // let nomor2 = new Array(6,7,8,9,10);
// // console.log(nomor2)
// // //=============================================

// // Tipe Data Dalam Array
// let nomors = [1,2,3,4,5];                   //numbers
// let student = ["ken","low","Nurlela"];      //string
// let biodata = ["umur",35,true];             //campuran
// let nested = ["john",30,true, [80,90,100]];
// console.log(nested)
// // Array length
// console.log(nomors.length)                   // output = 1
// // Mengakses element dalam array
// // Melalui index
// console.log(nomors[0])
// console.log(student[2])
// console.log(biodata[2])                        // output = true
// console.log(nested[3])
// console.log(nested[3][1])

// //Mengakses elemen terakhir dalam array
// let nomorss = [1,2,3,4,5,6,7,8,9,10];
// console.log(nomorss[[nomorss.length - 1]])  //10
// //Array Method
// let array = [1,2,3,"hello",false,true];
// console.log(array)
// // toString
// console.log(array.toString())

// // .join
// console.log(array.join("~"))

// // pop
// array.pop();
// console.log(array)

// // 4. push
// array.push("Lasyo");

// // 5. shift
// array.shift();
// console.log(array)

// // 6. unshift
// array.unshift("muka");
// console.log(array)
// // 7. splice()
// array.splice(3,8,4,5);
// console.log(array)
// // 8. concat
// let buah = ["pisang","apel","kemiri"];
// let sayur = ["tomat","bayam","wortel"];
// let BIJI = ["kedelai","kasang tanah"];

// let makanan = buah.concat(sayur, BIJI);            // pisang,apel,kemiri,tomat,....,kacang tanah
// console.log(makanan);

// // 9. slice
// let sayuran = makanan.slice(3,6)
// console.log(sayuran)                                // tomat,bayam,wortel










