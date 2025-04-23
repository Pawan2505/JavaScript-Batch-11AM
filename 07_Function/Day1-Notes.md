### 1. **Basic Function (No Parameters)**

**Filename:** `basic_function.js`

```javascript
// A function that adds two numbers and shows the result
function addition() {
    let x = 10;
    let y = 20;
    let sum = x + y;
    console.log(sum);  // Output: 30
}

addition();  // Calling the function to run
```

**Logic:**  
This function does not take any input. It adds two fixed numbers (`x` and `y`) and prints the result.

---

### 2. **Function with Parameters**

**Filename:** `function_with_parameters.js`

```javascript
// A function that takes two numbers as input and adds them
function addition(x, y) {
    let sum = x + y;
    console.log(sum);  // Output depends on the values passed
}

addition(10, 60);  // Output: 70
```

**Logic:**  
The function now takes two inputs (`x` and `y`). You can pass different values each time you call the function.

---

### 3. **Function with Return Value**

**Filename:** `function_with_return_value.js`

```javascript
// A function that returns the sum instead of printing it
function addition(x, y) {
    let sum = x + y;
    return sum;  // Returns the sum, which can be used later
}

let result = addition(10, 60);  // Result will store the value 70
console.log(result);  // Output: 70
```

**Logic:**  
Instead of printing the result, the function returns the sum. We store the result in a variable and can use it later.

---

### 4. **Function with Default Parameters**

**Filename:** `function_with_default_parameters.js`

```javascript
// A function with a default value for the second parameter
function addition(x, y = 50) {
    let sum = x + y;
    return sum;
}

let result = addition(10, 100);  // Output: 110
console.log(result);

result = addition(10);  // Output: 60, since y defaults to 50
console.log(result);
```

**Logic:**  
If no value is given for the second parameter (`y`), it automatically uses `50`. This prevents errors when missing input.

---

### 5. **Function with One Missing Parameter (Default on First Parameter)**

**Filename:** `function_default_on_first_parameter.js`

```javascript
// A function with a default value for the first parameter
function addition(x = 50, y) {
    let sum = x + y;
    return sum;
}

let result = addition(10, 60);  // Output: 70
console.log(result);
```

**Logic:**  
Here, the first parameter `x` uses a default value of `50` if not provided. The second parameter `y` must be passed when calling the function.

---

### 6. **Anonymous Function (Function Expression)**

**Filename:** `anonymous_function.js`

```javascript
// A function without a name, assigned to a variable
const addition = function() {
    let x = 10;
    let y = 20;
    return x + y;
};

console.log(addition());  // Output: 30
```

**Logic:**  
An anonymous function is assigned to a variable (`addition`). We can call the function using that variable.

---

### 7. **Function Expression with Parameters**

**Filename:** `function_expression_with_parameters.js`

```javascript
// Anonymous function with parameters
const addition = function(x, y) {
    return x + y;
};

let result = addition(50, 60);  // Output: 110
console.log(result);
```

**Logic:**  
This anonymous function takes two parameters and returns their sum.

---

### 8. **Function Expression with Return Value**

**Filename:** `function_expression_with_return.js`

```javascript
// Anonymous function that returns the sum
const addition = function(x, y) {
    return x + y;
};

let result = addition(50, 60);  // Output: 110
console.log(result);
```

**Logic:**  
This function takes two parameters, returns the sum, and allows us to store the result in a variable.

---

### Note:

- **Basic Function**: Adds two fixed numbers.
- **Function with Parameters**: Takes input values to perform operations.
- **Function with Return**: Returns the result so we can use it later.
- **Default Parameters**: Automatically uses a default value if a parameter is missing.
- **Anonymous Function**: Functions that don’t have a name and are stored in variables.
  
Functions help us organize our code and make it reusable. You can call them whenever you need to perform a certain task like adding numbers, without rewriting the same logic.