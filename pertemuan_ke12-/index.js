// 1.
const calculateAge = (birthYear = 1987) =>  2024 - birthYear;
console.log(calculateAge()); 
  

const yearUntilRetirement = ( tahun = 1987, firstName = 'john' ) => {
    const tahunini = 2024; 
    const umur = tahunini - tahun;
    const retirement = 60 - umur;
  
    if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years.`);
    } else {
      console.log(`${firstName} is already retired.`);
    }
};
  
yearUntilRetirement();
  
// 2. 
const addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    let sum = 0;
    numbers.map(num => sum += num);
    return sum;
  };
  
  console.log(addNumber(1, 2, 3, 4, 5, 6, 7)); 
3.
let phi = 3.14;
let power = 2;
let radius = 0;

const calculateArea = ({ radius, power }) => {
  return phi * Math.pow(radius, power);
};
radius = 21;
const area21 = calculateArea({ radius, power: 2 });
radius = 7;
const area7 = calculateArea({ radius, power: 2 });
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4.
const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
}
  
makeAjaxRequest('www.google.com');
