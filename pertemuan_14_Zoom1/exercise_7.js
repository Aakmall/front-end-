// //Menggunakan Destructuring

// // 1
// const calculateAge = ({ birthYear }) => 2019 - birthYear;
// const person = {
//   birthYear: 1987,
// };
// console.log(calculateAge(person)); 

// //Destructuring Object
// const yearUntilRetirement = ({ year, firstName }) => {
//   const age = calculateAge(year);
//   const retirement = 60 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//   } else {
//     console.log(`${firstName} is already retired.`);
//   }
// };

// const people = [{ year: 1987, firstName: "John" }];
// //Destructuring Array
// const [john] = people;

// yearUntilRetirement(john);

// // 2
// const addNumber = (...numbers) => {
//   let sum = 0;

//   numbers.forEach((number) => {
//     sum += number;
//   });

//   return sum;
// };
// console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// //Menjumlahkan hanya sebagian
// // rest operator
// const addNumber2 = (...numbers) => {
//   // 4 angka pertama
//   const [first, second, third, fourth] = numbers;
//   let sum = 0;
//   // 4 angka yang di tambah
//   [first, second, third, fourth].forEach((number) => {
//     sum += number;
//   });

//   return sum;
// };
// console.log(addNumber2(1, 2, 3, 4, 5, 6, 7));

// // 3
// const phi = 3.14;
// const calculateArea = ({ radius = 1, power = 2 }) =>
//   phi * Math.pow(radius, power);

// let radius = 21;
// const area21 = calculateArea({ radius });

// radius = 7;
// const area7 = calculateArea({ radius });
// const areaDefault = calculateArea({});    // default value

// console.log(`Area with default radius: ${areaDefault}`);
// console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// // 4
// const makeAjaxRequest = (url, method = "GET") => {
//   console.log(`${url}, ${method}`);
// };

// makeAjaxRequest("www.google.com");
