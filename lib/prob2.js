function isPositiveInteger(value) {
  const num = parseInt(value, 10);
  return !isNaN(num) && Number.isInteger(num) && num > 0;
}

function isNegativeInteger(value) {
  const num = parseInt(value, 10);
  return !isNaN(num) && Number.isInteger(num) && num < 0;
}

function readInput() {
  const numbers = [];
  while (true) {
    const input = prompt("Enter an integer (a negative integer to quit):");
    if (isNegativeInteger(input)) {
      break; 
    }
    if (isPositiveInteger(input)) {
      numbers.push(parseInt(input, 10)); 
    }
  }
  return numbers;
}

function displayStats(list) {
  const avg = list.length > 0
    ? (list.reduce((sum, num) => sum + num, 0) / list.length).toFixed(2)
    : "0.00";

  const min = list.length > 0 ? Math.min(...list) : 0;
  const max = list.length > 0 ? Math.max(...list) : 0;

  alert(`For the list ${list.join(', ')}, the average is ${avg}, the minimum is ${min}, and the maximum is ${max}.`);
}

const list = readInput();
displayStats(list);
