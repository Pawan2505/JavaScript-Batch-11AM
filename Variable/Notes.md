
# ✍️ Variable Naming Rules

JavaScript variables follow specific rules. Let’s understand them one by one with simple examples:

---

## 🧠 Rule 1: No Numbers at the Start
**Invalid:**  
```javascript
let 123name = "wrong"; // ❌ Cannot start with a number
```

**Valid:**  
```javascript
let name123 = "correct"; // ✅ Starts with letter
```

---

## 🧠 Rule 2: No Spaces Allowed
**Invalid:**  
```javascript
let first name = "invalid"; // ❌ Space not allowed
```

**Valid:**  
```javascript
let first_name = "valid"; // ✅ Use underscore or camelCase
```

---

## 🧠 Rule 3: No Reserved Keywords
**Invalid:**  
```javascript
let if = 5;       // ❌ 'if' is a keyword
let while = "loop"; // ❌ 'while' is also a keyword
```

---

## 🧠 Rule 4: Only _ and $ Are Allowed as Special Characters
**Valid Examples:**  
```javascript
let _num1 = 10;
let $name = "Pawan";
```

---

## 🧠 Rule 5: Use Meaningful Names
**Valid but NOT clear:**  
```javascript
let x = 5;
```

**Better (Clear & Descriptive):**  
```javascript
let studentMarks = 95;
let total_price_after_tax = 150.75;
```

---

## 🧠 Rule 6: JavaScript is Case-Sensitive
```javascript
let num = 10;
let Num = 20;

console.log(num); // 10
console.log(Num); // 20
// Both are different variables
```

---

## 📦 let and Block Scope Example

```javascript
let x1 = 12;

{
  let x1 = 4; // New block-level variable
  console.log("Inside block x1:", x1); // 4
}

console.log("Outside block x1:", x1); // 12
```

---

## ✅ Note:
- Don’t start variable names with a number.
- Don’t use spaces – use _ or camelCase.
- Don’t use reserved keywords like `if`, `for`, `while`.
- Only `_` and `$` are allowed symbols.
- Use meaningful variable names.
- JS is **case-sensitive**.
- Prefer `let` and `const` over `var`.

---

✍️ These rules help keep your code clean, readable, and error-free!
