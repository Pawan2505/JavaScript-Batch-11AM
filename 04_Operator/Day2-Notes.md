# 📝 JavaScript Operators
---

## 🔹 1. Assignment Operators

Used to assign values to variables.

| Operator | Meaning           | Example        | Result         |
|----------|-------------------|----------------|----------------|
| `=`      | Assign             | `x = 10`       | `x` is 10      |
| `+=`     | Add and assign     | `x += 5`       | `x = x + 5`    |
| `-=`     | Subtract and assign| `x -= 3`       | `x = x - 3`    |
| `*=`     | Multiply and assign| `x *= 2`       | `x = x * 2`    |
| `/=`     | Divide and assign  | `x /= 4`       | `x = x / 4`    |
| `%=`     | Modulus and assign | `x %= 2`       | `x = x % 2`    |

---

## 🔹 2. Comparison Operators

Used to compare values. Returns `true` or `false`.

| Operator | Meaning                         | Example         | Result        |
|----------|----------------------------------|-----------------|---------------|
| `==`     | Equal (value only)               | `10 == "10"`    | `true`        |
| `===`    | Equal (value + type)             | `10 === "10"`   | `false`       |
| `!=`     | Not equal (value only)           | `10 != "10"`    | `false`       |
| `!==`    | Not equal (value or type)        | `10 !== "10"`   | `true`        |

---

## 🔹 3. Relational Operators

Used to compare two values.

| Operator | Meaning           | Example         | Result     |
|----------|-------------------|------------------|------------|
| `<`      | Less than         | `30 < 40`        | `true`     |
| `>`      | Greater than      | `30 > 40`        | `false`    |
| `<=`     | Less than or equal| `30 <= 40`       | `true`     |
| `>=`     | Greater or equal  | `30 >= 40`       | `false`    |

---

## 🔹 4. Arithmetic Operators

Basic math operations.

| Operator | Meaning            | Example         | Result    |
|----------|--------------------|------------------|-----------|
| `+`      | Addition            | `12 + 15`        | `27`      |
| `-`      | Subtraction         | `12 - 15`        | `-3`      |
| `*`      | Multiplication      | `12 * 15`        | `180`     |
| `/`      | Division            | `12 / 15`        | `0.8`     |
| `%`      | Modulus (remainder)| `12 % 15`        | `12`      |

---

## 🔹 5. Unary Operators

Used to increase or decrease value by 1.

### Increment
- `x++` → Post-increment (use then increase)
- `++x` → Pre-increment (increase then use)

### Decrement
- `x--` → Post-decrement (use then decrease)
- `--x` → Pre-decrement (decrease then use)

### Example:
```javascript
let x = 10;
console.log(x++); // 10
console.log(++x); // 12 (after previous step)
```

---

## 🔹 6. Complex Expression (Mix of Operators)

Example:
```javascript
let z = 5;
let x = 2;

x = ++x + x++ + z-- + ++z + x;

console.log(x); // Output: 20
```

### Step-by-step:
- `++x` → 3
- `x++` → 3 (then x becomes 4)
- `z--` → 5 (then z becomes 4)
- `++z` → 5 (z becomes 5)
- `x`   → 4

Final: `3 + 3 + 5 + 5 + 4 = 20`
