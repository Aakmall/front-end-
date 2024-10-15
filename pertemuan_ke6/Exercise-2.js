//IIFE

let output = (function BMI (berat, tinggi) {
    kt = tinggi / 100
    rumusbmi = berat / (kt * kt);
    return "BMI Anda " + rumusbmi;
})(175,56)

console.log(output);



//Callback Function
function BMI(berat1, tinggi1, callback){
    kt1 =  tinggi1 / 100
    let bmi = berat1 / (kt1 * kt1);
    callback(bmi)
  }
  
  let berat1 = 56;
  let tinggi1 = 175;
  
  BMI(berat1, tinggi1, function(bmi){
    console.log("BMI Anda " + bmi);
  });