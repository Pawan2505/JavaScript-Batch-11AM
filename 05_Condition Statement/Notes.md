# JavaScript Conditional Statements

---

### 🔸 **Why We Use?**
To make **decisions** in code based on a given **condition**. 

Like:
- “If marks > 90 → give Grade A”
- “If age >= 18 → allow voting”

---

## 1. **if Statement**

**Definition:**  
Used to run a block of code **only if** the condition is true.

**Syntax:**
```javascript
if (condition) {
  // code runs if condition is true
}
```

**Example:**
```javascript
let age = 20;
if (age >= 18) {
  console.log("Eligible to vote");
}
```

---

## 2. **if-else Statement**

**Definition:**  
Used when we have **two outcomes** – if condition is true do one thing, otherwise do another.

**Syntax:**
```javascript
if (condition) {
  // true block
} else {
  // false block
}
```

**Example:**
```javascript
let num = 5;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

---

## 3. **Nested if-else Statement**

**Definition:**  
Used when one condition depends on another (decision inside a decision).

**Syntax:**
```javascript
if (condition1) {
  if (condition2) {
    // both true
  } else {
    // condition1 true, condition2 false
  }
} else {
  // condition1 false
}
```

**Example:**
```javascript
let a = 10, b = 5, c = 7;
if (a > b) {
  if (a > c) {
    console.log("a is largest");
  }
}
```

---

## 4. **if-else if-else Ladder**

**Definition:**  
Used to check **multiple conditions** one after another.

**Syntax:**
```javascript
if (condition1) {
  // code
} else if (condition2) {
  // code
} else {
  // default case
}
```

**Example:**
```javascript
let marks = 85;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
```

---

## 5. **Logical Operators in Conditions**

**Definition:**  
Used to combine multiple conditions in a single if/else.

**Operators:**
- `&&` – AND (both conditions must be true)
- `||` – OR (at least one true)
- `!` – NOT (reverse result)

**Example:**
```javascript
let age = 25;
let hasVoterId = true;
if (age >= 18 && hasVoterId) {
  console.log("Can vote");
}
```

---

## 6. **Range-Based Programs**

**Definition:**  
Useful in practical logic like grading, billing, interest rate, etc.

**Grade Example:**
```javascript
let marks = 72;
if (marks >= 90) {
  console.log("A Grade");
} else if (marks >= 75) {
  console.log("B Grade");
} else {
  console.log("C Grade");
}
```

**Electricity Bill Example:**
```javascript
let unit = 120;
let bill = 0;
if (unit <= 100) {
  bill = unit * 5;
} else {
  bill = 100 * 5 + (unit - 100) * 8;
}
console.log("Total Bill: " + bill);
```

---

## 7. **Change Password Logic**

**Definition:**  
Compares old and new passwords, and checks if the new password is different.

**Example:**
```javascript
let oldPass = "abc123";
let newPass = "abc1234";

if (oldPass === "abc123") {
  if (newPass !== oldPass) {
    console.log("Password updated");
  } else {
    console.log("New password should be different");
  }
} else {
  console.log("Incorrect old password");
}
```
