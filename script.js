/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = function (a, b) {
    return a + b;
  };

  this.subtraction = function (a, b) {
    return a - b;
  };

  this.multiplication = function (a, b) {
    return a * b;
  };

  this.division = function (a, b) {
    if (b === 0) {
      return "Dalyba iš nulio negalima.";
    }
    return a / b;
  };
}

const calc = new Calculator();

const sumres = calc.sum(2, 11);
const subres = calc.subtraction(12, 8);
const mulres = calc.multiplication(3, 5);
const divres = calc.division(10, 2);
const divreszero = calc.division(5, 0);

console.log(sumres);
console.log(subres);
console.log(mulres);
console.log(divres);
console.log(divreszero);
