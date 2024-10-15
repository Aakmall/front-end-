let akmal = {
    firstName: "Akmal",
    weight: 56,
    height: 175,
    calculateBMI: function BMI() {
        C_K = this.height / 100;
        rumus = this.weight / (C_K * C_K);
        console.log("BMI = " + rumus);
        if (rumus < 16.0) {
            console.log("Severely Underweight");
        } else if (rumus >= 16.0 && rumus <= 18.4) {
            console.log("Underweight");
        } else if (rumus >= 18.5 && rumus <= 24.9) {
            console.log("Normal");
        } else if (rumus >= 25.0 && rumus <= 29.9) {
            console.log("Overweight");
        } else if (rumus >= 30.0 && rumus <= 34.9) {
            console.log("Moderately Obese");
        } else if (rumus >= 35.0 && rumus <= 39.9) {
            console.log("Soverely Obese");
        } else if (rumus >= 40.0) {
            console.log("Morbidly Obese");
        }
    }
};

console.log(akmal.firstName)
console.log(akmal.weight)
console.log(akmal.height)
console.log(akmal.calculateBMI())



