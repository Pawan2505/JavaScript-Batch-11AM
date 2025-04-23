// Find prime numbers in a given range (50 to 100)

let start = 50; // Starting number of range
let end = 100; // Ending number of range

// Loop through each number in the range
for (let num = start; num <= end; num++) {
  let count = 0; // Initialize divisor count

  // Check divisibility for the current number
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++; // Increase count if num is divisible by i
    }
  }

  // If count is 2, then num is a prime number
  if (count == 2) {
    console.log(num); // Output prime number
  }
}
