### 🧠 JavaScript: Data Types & Variables

---

## 🔸 Primitive Data Types (8 Types)

| Data Type   | Example                         | Description                           |
|-------------|----------------------------------|---------------------------------------|
| **String**  | `"Hello"`, `'JS'`               | Textual data                          |
| **Number**  | `10`, `3.14`, `-7`              | Integer or floating point             |
| **BigInt**  | `12345678901234567890n`         | Large integers                        |
| **Boolean** | `true`, `false`                 | Logical values                        |
| **Undefined**| `let x;`                       | Declared but not assigned             |
| **Null**    | `let x = null;`                 | Intentional empty value               |
| **Symbol**  | `Symbol("id")`                  | Unique, immutable identifiers         |
| **Object**  | Arrays, Functions, etc.         | Non-primitive collection types        |

---

## 🔸 Variable Declaration Keywords

| Keyword | Scope         | Reassign | Redeclare | Notes                     |
|---------|---------------|----------|-----------|---------------------------|
| `var`   | Function/Global | ✅       | ✅         | Avoid for modern code     |
| `let`   | Block           | ✅       | ❌         | Use for changeable values |
| `const` | Block           | ❌       | ❌         | Use for constants         |

---

## 🔹 `var` Example

```javascript
var name = "Utkarsh";
var name = "Raj";       // Redeclaration is allowed
console.log(name);      // Output: Raj

{
  var a = 10;
}
console.log(a);         // Output: 10 (accessible outside block)
```

---

## 🔹 `let` Example

```javascript
let age = 25;
age = 30;               // ✅ Reassignment allowed
// let age = 40;        // ❌ Redeclaration not allowed in same scope

{
  let age = 50;
  console.log(age);     // Output: 50 (inside block)
}
console.log(age);       // Output: 30 (outside block)
```

---

## 🔹 `const` Example

```javascript
const PI = 3.14;
// PI = 3.1415;         // ❌ Error: can't reassign
// const PI;            // ❌ Error: must assign at declaration

{
  const roll = 101;
  console.log(roll);    // Output: 101
}
console.log(roll);      // ❌ Error: not accessible outside block
```

---

## 🔸 Getting User Input

```javascript
let n = parseInt(prompt("Enter number:"));
console.log(n);
console.log(typeof n);
```

---

## 🔸 `typeof` Operator Examples

```javascript
let name = "Pawan";         // "string"
let age = 25;               // "number"
let isHere = true;          // "boolean"
let big = 1234567890n;      // "bigint"
let x;                      // "undefined"
let y = null;               // "object" (JavaScript bug)
let sym = Symbol("id");     // "symbol"
let arr = [1, 2, "three"];  // "object"
```

---

## 🔁 Array `forEach()` Loop

```javascript
let nums = [10, 20, 30];

nums.forEach((val, index) => {
  console.log(index, val);
});
```

---

## 📝 Important Tips

- Use `let` for most variable declarations.
- Use `const` when value should not change.
- Avoid `var` unless necessary for old code.
- Check data type using `typeof`.
- Arrays and objects are non-primitive types.
- Use `prompt()` to take input from the user in browser.

