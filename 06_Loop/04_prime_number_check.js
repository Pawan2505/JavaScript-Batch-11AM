// Check if a number is prime or not

let num = 15; // Number to check if prime
let count = 0; // Initialize count of divisors

// Loop through all numbers from 1 to num to check divisibility
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    count++; // Increase count if num is divisible by i
  }
}

// A prime number has exactly two divisors: 1 and itself
if (count == 2) {
  console.log("Prime Number");
} else {
  console.log("Not Prime Number");
}
