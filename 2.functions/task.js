// Задача 1
function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce(function(sum, current){
    return sum + current;
  }, 0);
  let avg = +(sum / arr.length).toFixed(2);
  
  return { min: min, max: max, avg: avg };
}


// Задача 2
function summElementsWorker(...arr) {
  if (!arr.length){
    return 0;
  }
  return arr.reduce(function(sum, current){
    return sum + current;
  }, 0);
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length){
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let difference = max - min;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length){
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2){
      sumOddElement += arr[i];
    }
    else {
      sumEvenElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length){
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++){
    if (!(arr[i] % 2)){
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return +(sumEvenElement / countEvenElement).toFixed(2);
}


// Задача 3
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let result;
  for (let i = 0; i < arrOfArr.length; i++){
    result = func(...arrOfArr[i]);
    if (result > maxWorkerResult){
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
