// // Javascript Loop & Array Build-in method
// // Javascript Loop 
// // 1. for loop
// for (i=1; i<=10; i++){
//     console.log(i);
// }
// // 2. while loop
// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }
// // 3. do-while loop
// let i = 1;
// do {
//     console.log(i);
//     i++;
// }
// while (i<=10);

// // Array build-in method
// let num = [1,2,3,4,5];
// console.log(num);
//         // Menampilkan elemen array satu per satu
// for (let i=0; i< num.length; i++){
//     console.log(num[i]);
// }
//======================================================

// Array objek
let students = [
    {
        id: 1,
        firstName: "john",
        isActive: true,
        grade: 85,
    },
    {
        id: 2,
        firstName: "jane",
        isActive: true,
        grade: 99,
    },
    {
        id: 3,
        firstName: "jono",
        isActive: false,
        grade: 50,
    },
];

// // 1. for each()
// students.forEach(function(item,index){                  // item itu masing" Array
//     console.log(item);                                          // nda ada return cuma for loop
//     console.log(index);
//     console.log("\n"+ item.firstName);
// })
// // 2. map()                                            // map ada return value, suapya boleh diubah
// students.map(function(item){
//     console.log(item);
// })
// let output = students.map(function(item) {
//     return item;
// });
// console.log(output)
// 3. filter
// let filteredStudent = students.filter(function(item){
//     return item.grade > 80 ;
// });
// console.log(filteredStudent);
// 4. find
let output = students.find(function(item){
    
})




