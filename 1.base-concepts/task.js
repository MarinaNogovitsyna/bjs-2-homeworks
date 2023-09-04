"use strict"
// Задача 1 (посчитать корни квадратного уравнения)
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;
  if (d === 0){
    arr.push(-b / (2 * a));
  }
  if (d > 0){
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  }
  
  return arr;
}

console.log(solveEquation(1, 2, 10))



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonths = (+percent / 100 / 12);
  let loanBody = amount - contribution;
  let peyment = loanBody * (percentMonths + (percentMonths / (((1 + percentMonths) ** countMonths) - 1)));
  let entirePayment = +((peyment * countMonths).toFixed(2));
  return entirePayment;
}

console.log(calculateTotalMortgage(15, 0, 10000, 36))