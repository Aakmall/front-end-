// let people = ["Greg", "Marry", "Devon", "James"];
// // 1.
// for (let i=0; i<= people.length; i++) {
//     console.log(people[i])
// }

// // 2. 
// people.forEach(function(item){                  
//     console.log(item); 
// })

// // 3. 
// people.shift();
// console.log(people);

// // 4.
// people.pop();
// console.log(people);

// // 5. 
// people.unshift("Matt");
// console.log(people); 

// // 6. 
// people.push("Akmal")
// console.log(people);

// //7. Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop. (hint: use break keyword to exit loop)
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
//   if (people[i] === "Mary") {
//     break;
//   }
// }

// // 8. 
// let people1 = people.slice(2);
// console.log(people1); 

// // 9.
// people = ["Matt", "Mary", "Devon", "James"];
// people.splice(2, 1, "Elizabeth", "Artie", "Akmal");
// console.log(people); 

// // 10. 
// let Bob = people.concat("Bob");
// console.log(Bob);


// // ============================================================================= //
// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };

// // 1. 
// programming.languages.push("Go");
// console.log(programming.languages); 

// // 2. 
// programming["difficulty"] = 7;
// console.log(programming.difficulty);

// // 3. 
// delete programming.jokes;
// console.log(programming); // Output: { languages: ["JavaScript", "Python", "Ruby", "Go"], isChallenging: true, isRewarding: true, difficulty: 7 }

// // 4. 
// programming.isFun = true;
// console.log(programming); // Output: { languages: ["JavaScript", "Python", "Ruby", "Go"], isChallenging: true, isRewarding: true, difficulty: 7, isFun: true }

// // 5. 
// let updatedLanguages = programming.languages.map((language, index) => `${index} - ${language}`);
// console.log(updatedLanguages); 
// // Output: ["0 - JavaScript", "1 - Python", "2 - Ruby", "3 - Go"]
