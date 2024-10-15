
function BMI(tinggi,berat){
    C_K = tinggi/100
    rumus = berat / (C_K*C_K);
    return "BMI =" + rumus;
}
let saya = BMI(173,55)
console.log(saya)