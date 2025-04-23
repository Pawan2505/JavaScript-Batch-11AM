### JavaScript Loops

#### 1. **Console Logging**
In JavaScript, we use `console.log()` to print messages or values. For example:

```javascript
console.log("1");
console.log("2");
console.log("3");
console.log("4");
```

This will print each number on a new line.

---

#### 2. **For Loop**
A `for loop` is used when you know exactly how many times you want the loop to run. You set a **starting point**, an **ending point**, and how you want to **move forward** (like adding 1 each time).

Example: To add numbers from 10 to 50:

```javascript
let num = 10;  // Starting number
let sum = 0;   // To keep track of the sum

for (let i = num; i <= 50; i++) {
    sum += i;  // Add the current number (i) to the sum
}

console.log(sum);  // This prints the total sum
```

Here, the loop starts at 10 and keeps adding the next number until it reaches 50.

---

#### 3. **While Loop**
A `while loop` keeps running as long as a condition is true. It will keep looping until the condition turns **false**.

Example: Add numbers from 10 to 50 using a `while` loop:

```javascript
let num = 10;  // Starting number
let sum = 0;   // To keep track of the sum

while (num <= 50) {
    sum += num;  // Add the current number (num) to the sum
    num++;       // Increase the number by 1
}

console.log(sum);  // Prints the total sum
```

In this example, as long as the number is less than or equal to 50, the loop keeps adding the number to the sum.

---

#### 4. **Do-While Loop**
A `do-while loop` is similar to the `while loop`, but it always runs **at least once**, even if the condition is false. The condition is checked **after** the loop runs.

Example:

```javascript
let num = 10;
let sum = 0;

do {
    sum += num;  // Add the current number (num) to the sum
    num++;       // Increase the number by 1
} while (num <= 50);  // Keep running as long as num is less than or equal to 50

console.log(sum);  // Prints the total sum
```

The `do-while` loop will run once even if the condition is false at the start, but it will check the condition after the first run.

---

#### 5. **Prime Number**
A prime number is a number greater than 1 that can only be divided by 1 and itself. If a number has more than two divisors, it’s **not a prime**.

Here’s how we check if a number is prime:

```javascript
let num = 15;
let count = 0;  // To count the divisors

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {  // If the number is divisible by i
        count++;  // Increase the count of divisors
    }
}

if (count == 2) {  // If there are exactly two divisors (1 and the number itself)
    console.log("Prime Number");
} else {
    console.log("Not a Prime Number");
}
```

For 15, the divisors are 1, 3, 5, and 15, so it’s **not a prime number**.

---

#### 6. **Prime Numbers in a Range**
To find all prime numbers between two numbers, for example, 50 and 100, we can check each number in that range.

```javascript
let start = 50;  // Starting number
let end = 100;   // Ending number

for (let num = start; num <= end; num++) {
    let count = 0;  // To count divisors
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;  // If num is divisible by i, increase the divisor count
        }
    }

    if (count == 2) {  // If there are exactly two divisors, it’s a prime
        console.log(num);  // Print the prime number
    }
}
