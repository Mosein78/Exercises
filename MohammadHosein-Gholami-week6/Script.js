// First Practice

function calculate(a, b, operator) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "invalid arguments";
  }
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    if (b === 0) {
      return "invalid arguments";
    }
    return a / b;
  } else {
    return "invalid arguments";
  }
}
const result = calculate(2, 4, "*");
console.log(result);

// Second Practice

function isPrime(number) {
  if (typeof number !== "number") {
    console.log("invalid arguments");
    return;
  }
  if (number <= 1) {
    console.log("False");
    return;
  }
  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log("False");
      return;
    }
  }
  console.log("True");
}
isPrime(2);
