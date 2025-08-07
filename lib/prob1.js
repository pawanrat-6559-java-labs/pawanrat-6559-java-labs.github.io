function validateInput(input) {
  const number = Number(input);
  return Number.isInteger(number) && number > 0;
}

function findPrimes(limit) {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}

function displayPrimes(primes, limit) {
  if (primes.length === 0) {
    alert(`There are no prime numbers up to ${limit}.`);
  } else {
    alert(`For n = ${limit} prime numbers are ${primes.join(", ")}`);
  }
}


function startApp() {
  let input;
  while (true) {
    input = prompt("Enter a positive integer");
    if (input === null) {
      return;
    }
    if (validateInput(input)) {
      break;
    }
  }

  const limit = Number(input);
  const primes = findPrimes(limit);
  displayPrimes(primes, limit);
}

startApp();
