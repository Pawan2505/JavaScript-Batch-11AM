# 📘 JavaScript Logical Operators & Grade Program

---

## 🔸 Logical Operators in JavaScript

### 1. AND (`&&`)
- Both conditions **must be true**.
- Only then final result is **true**.

```js
(x < y) && (x > z)
```

> If both `true` → final result is `true`

---

### 2. OR (`||`)
- If **any one** condition is **true**,
- Final result is also **true**.

```js
(x < y) || (x > z)
```

> If any one is `true` → result is `true`

---

### 3. NOT (`!`)
- It **reverses** the result.
```js
!true  → false  
!false → true
```

```js
!(x < y || x > z)
```

---

## 🔸 Examples:

Let:

```js
x = 10, y = 30, z = 50
```

```js
(x < y) && (x > z)   → false  
(x < y) && (y < z)   → true  
(x < y) || (x > z)   → true  
(x > y) || (y < z)   → true  
!(x < y || x > z)    → false  
!(!(x > y) || y < z) → false
```

---

## 🔸 Variable Swapping

### Method 1: Using Temporary Variable

```js
let x = 10;
let y = 20;

let z = x;
x = y;
y = z;
```

> After swap: x = 20, y = 10

---

### Method 2: Using Destructuring

```js
[x, y] = [y, x];
```

> Easy way to swap in one line

---

## 🔸 Grade Calculator (Using `if-else if`)

```js
let marks = parseInt(prompt("Enter your marks"));

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 70) {
  console.log("Grade C");
} else if (marks >= 60) {
  console.log("Grade D");
} else {
  console.log("Failed...");
}
```

### Output Based on Marks:

| Marks       | Output     |
|-------------|------------|
| 90 or more  | Grade A    |
| 80 to 89    | Grade B    |
| 70 to 79    | Grade C    |
| 60 to 69    | Grade D    |
| Less than 60| Failed     |
