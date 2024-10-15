//javascript objek
//deklarasi objek
// objek literal
// let john = {
//     firstName: "john",                    // properti: nilai,
//     age: 30,
//     isMarried: true,
//     grade: [80,90,100],
//     sayGreetings: function(){
//         console.log("Hello my name is "+ this.firstName);
//     },
//     address: {
//         street: "Jl.Arnold Mononutu",
//         city: "Minahasa Utara",
//         province: "North Celebes",
//         postalCode: 95371,
//     },
// };

// // console.log(john)
// //===========================================================
// // cara ke 2 : new
// let jane = new Object();
// (jane.firstName = "jane");(jane.age = 30);(jane.isMarried = true);
// console.log(jane)
// //============================================================

// //cara mengakses properti dalam objek
// // 1. Dot Notation
// console.log(john.firstName); // john
// console.log(john.age);
// john.age = 31;
// console.log(john.age);
// john.job = "Teacher";           // tambah properti baru
// console.log(john);
// // 2. Bracket Notation
// console.log(john["isMarried"]);
// john["Nationality"] = "Indonesia";
// //objek method
// john.sayGreetings();            // Hello my name is john
// //objek didalam objek
// console.log(john.address.city)                   // Minahasa Utara
// //Delete Property dalam objek
// delete john.grade;
// console.log(john);
// //===================================================================

// javascript conditional
// 1. if - else
let numbers = 5;
if (numbers % 2 === 0) {
    console.log("Bilangan genap")
} else {
    console.log("Bilangan ganjil")
}
// 2. if-else if
        // 100-80 nilainya: A
        // 80-70 nilainya: B
        // <69 nilainya: c
let nilai = 67
if (nilai >= 80 && nilai <= 100) {
    console.log("Grade A");
} else if (nilai >=60 && nilai <80) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
//==================================================================





