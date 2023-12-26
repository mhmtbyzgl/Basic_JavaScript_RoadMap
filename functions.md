# Functions

## Table of Content

- [What are Functions?](#what-are-functions)
- [Content]()
- [Defining Functions]()
  - [Function Declarations](#function-declarations)
  <!-- - [Function Expressions and Operators]() -->
- [Arrow Functions](#arrow-functions)

# What are Functions?

Functions in JavaScript are blocks of code that perform a specific task. They allow you to encapsulate a piece of code, give it a name, and reuse it throughout your program.

## Function Declarations

A function definition consists of the function keyword, followed by:

- The name of the function.
- A list of parameters to the function, enclosed in parentheses and separated by commas.
- The JavaScript statements that define the function, enclosed in curly braces, `{ /* … */ }`.

The syntax of `functions` are:

```js
function functionName(parameter1, parameter2, parameter3,....){
  // Function's Body
}
```

To use the function we call it as follows:

```js
functionName(arg1, agr2, arg3....);
```

Here the function will work by substituting arg1 for parameter1 and arg2 for parameter2.

**Examples:**

```js
function hello(name) {
  console.log(`Hello, ${name}.`);
}

// Calling the function
hello("Jane"); // Output: Hello, Jane.
```

```js
function hello(name, surname) {
  console.log(`Hello, ${name} ${surname}.`);
}

// Calling the function
hello("Jane", "DOE"); // Output: Hello, Jane DOE.
```

<!-- ## Function Expressions and Operators

This part describes JavaScript's expressions and operators, including assignment, comparison, arithmetic, bitwise, logical, string, ternary and more. -->

## Arrow Functions

Arrow functions are a concise way to write functions in JavaScript, introduced in ES6 (ECMAScript 2015). They provide a more compact syntax compared to traditional function expressions and offer some differences in behavior.

Basic syntax of `arrow functions` are:

```js
// Single parameter
const functionName = (parameter) => {
  // Function body
};

// Multiple parameters
const functionName = (param1, param2) => {
  // Function body
};

// No parameters
const functionName = () => {
  // Function body
};
```

or

```js
() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}
```

- Rest parameters, default parameters, and destructuring within params are supported, and always require parentheses.

```js
(a, b, ...r) => expression
(a = 400, b = 20, c) => expression
([a, b] = [10, 20]) => expression
({ a, b } = { a: 10, b: 20 }) => expression
```

- Arrow functions can be async by prefixing the expression with the async keyword.

```js
async (param) => expression;
async (param1, param2, ...paramN) => {
  statements;
};
```

## Reduce an Anonymous Function To an Arrow Function

In the example below, both the parentheses around the parameter and the braces around the function body may be omitted. However, they can only be omitted in certain cases.

```js
// Traditional anonymous function
(function (x) {
  return x + 20;
});

// 1. Remove the word "function" and place arrow between the argument and opening body brace
(x) => {
  return x + 20;
};

// 2. Remove the body braces and word "return" — the return is implied.
(x) => x + 20;

// 3. Remove the parameter parentheses
// x => x + 20;
```

The parentheses can only be omitted if the function has a single simple parameter. If it has multiple parameters, no parameters, or default, destructured, or rest parameters, the parentheses around the parameter list are required.

```js
// Traditional anonymous function
(function (x, y) {
  return x + y + 20;
});

// Arrow function
(x, y) => x + y + 20;

const x = 4;
const y = 2;

// Traditional anonymous function (no parameters)
(function () {
  return x + y + 20;
});

// Arrow function (no parameters)
() => x + y + 20;
```

The braces can only be omitted if the function directly returns an expression. If the body has additional lines of processing, the braces are required — and so is the return keyword. Arrow functions cannot guess what or when you want to return.

```js
// Traditional anonymous function
(function (x, y) {
  const chuck = 31;
  return x + y + chuck;
});

// Arrow function
(x, y) => {
  const chuck = 31;
  return x + y + chuck;
};
```

Arrow functions are always unnamed. If the arrow function needs to call itself, use a named function expression instead. You can also assign the arrow function to a variable so it has a name.

```js
// Traditional Function
function add(x) {
  return x + 20;
}

// Arrow Function
const add2 = (x) => x + 20;
```

[Go Top](#functions)
