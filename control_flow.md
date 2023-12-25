# Control Flow

## Table of Content

- [What is Control Flow?](#what-is-control-flow)
- [Control Flow Statements](#control-flow-statements)
  - [`Return` Statement](#1-return-statement)
  - [`break` Statement](https://github.com/mhmtbyzgl/Basic_JavaScript_RoadMap/blob/main/loops_and_iterations.md#break-statement)
  - [`continue` Statement](https://github.com/mhmtbyzgl/Basic_JavaScript_RoadMap/blob/main/loops_and_iterations.md#continue-statement)
  - [`if ... else` Statement](#2-if--else-statement)
  - [`switch` Statement](#3-switch-statement)
  - [`try ... catch` Statement](#4-try--catch-statement)
  - [`throw` Statement](#5-throw-statemens)

## What is Control Flow?

The Control flow is a way of how your computer runs code from top to bottom. It starts from the first line and ends at the last line unless it hits any statement that changes the control flow of the program such as loops, conditionals, etc.

We can control the flow of the program through any of these control structures:

- Sequential (default mode)
- Conditional Statements
  - [`if ... else`](#2-if--else-statement)
  - [`switch`](#3-switch-statement)
- Exception Handling
  - [`try ... catch`](#4-try--catch-statement)
  - [`throw`](#5-throw-statemens)
- Loops and Iterations
  - [`return`](#1-return-statement)
  - [`break`](https://github.com/mhmtbyzgl/Basic_JavaScript_RoadMap/blob/main/loops_and_iterations.md#break-statement)
  - [`continue`](https://github.com/mhmtbyzgl/Basic_JavaScript_RoadMap/blob/main/loops_and_iterations.md#continue-statement)

## Control Flow Statements

- [`return`](#1-return-statement) statement
- [`break`](https://github.com/mhmtbyzgl/Basic_JavaScript_RoadMap/blob/main/loops_and_iterations.md#break-statement)statement
- [`continue`](https://github.com/mhmtbyzgl/Basic_JavaScript_RoadMap/blob/main/loops_and_iterations.md#continue-statement) statement
- [`if ... else`](#2-if--else-statement) statement
- [`switch`](#3-switch-statement) statement
- [`try ... catch`](#4-try--catch-statement) statement
- [`throw`](#5-throw-statemens)statement

We have already seen break and continue statements, so in this case we are going to take a look this statements:

- [`return`](#1-return-statement) statement
- [`if ... else`](#2-if--else-statement) statement
- [`switch`](#3-switch-statement) statement
- [`try ... catch`](#4-try--catch-statement) statement
- [`throw`](#5-throw-statemens)statement

### 1. Return Statement:

Specifies the value to be returned by a function. The return statement ends function execution and specifies a value to be returned to the function caller.

The expression whose value is to be returned. If omitted, undefined is returned.

The `return` statement can only be used within function bodies. When a `return` statement is used in a function body, the execution of the function is stopped. The `return` statement has different effects when placed in different functions:

- In a plain function, the call to that function evaluates to the return value.
- In an async function, the produced promise is resolved with the returned value.
- In a generator function, the produced generator object's `next()` method returns `{ done: true, value: returnedValue }`.
- In an async generator function, the produced async generator object's `next()` method returns a promise fulfilled with `{ done: true, value: returnedValue }`.

If a `return` statement is executed within a `try` block, its `finally` block, if present, is first executed, before the value is actually returned.

The syntax of the `return` statement;

```js
return;
return expression;
```

**Examples:**

```js
function getRectArea(x, y) {
  if (x > y) {
    return "x is greather than y";
  }
  return "x is not greather than y";
}

console.log(getRectArea(7, 5)); // x is greather than y
console.log(getRectArea(2, 5)); // x is not greather than y
console.log(getRectArea(3, 3)); // x is not greather than y
```

A function immediately stops at the point where return is called.

### 2. If ... Else Statement:

Use the if statement to execute a statement if a logical condition is true. Use the optional else clause to execute a statement if the condition is false.

The syntax of `if ... else` is:

```js
if (condition) {
  statement1;
} else {
  statement2;
}

// or

if (condition1) {
  statement1;
} else if (condition2) {
  statement2;
} else if (conditionN) {
  statementN;
} else {
  statementLast;
}
```

- Here, the condition can be any expression that evaluates to `true` or `false`.

- We can also combine expressions using `else if` to test multiple conditions in sequence.

- If `condition` evaluates to `true`, `statement_1` is executed. Otherwise, `statement_2` is executed. `statement_1` and `statement_2` can be any statement, including further nested `if` statements.

- In the case of multiple conditions, only the first logical condition which evaluates to `true` will be executed.

**Example:**

```js
function checkPositive(x) {
  let result;
  if (x > 0) {
    result = "x is positive.";
  } else if (x == 0) {
    result = "x is zero.";
  } else {
    result = "x is not positive.";
  }
  return result;
}

console.log(checkPositive(-3)); // "x is not positive."
console.log(checkPositive(3)); // "x is positive."
console.log(checkPositive(0)); // "x is zero."
```

### 3. Switch Statement:

The `switch` statement evaluates an expression, matching the expression's value against a series of `case` clauses, and executes statements after the first `case` clause with a matching value, until a `break` statement is encountered. The `default` clause of a `switch` statement will be jumped to if no `case` matches the expression's value.

The syntax of `switch` is:

```js
switch (expression) {
  case caseExp1:
    statements;
  case caseExp2:
    statements;
  // …
  case caseExpN:
    statements;
  default:
    statements;
}
```

- A `case` clause used to match against `expression`. If the value of `expression` matches the value of any `caseExp`, execution starts from the first statement after that `case` clause until either the end of the `switch` statement or the first encountered `break`.

- Remember to include the `break` statement after each `case` block to prevent falling through to the next `case` accidentally. If `break` isn't used, the code will continue to execute the following cases until a `break` is encountered or until the `switch` block ends.

**Example:**

```js
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}

console.log(`It's ${dayName}`); // Wednesday
```

### 4. Try ... Catch Statement:

The `try...catch` statement in JavaScript is used for error handling. It allows you to try a block of code and catch any errors that may occur during its execution, preventing those errors from stopping the entire script.

Inside the try block, the code that might throw an error is enclosed. If an error occurs within the try block, the script doesn’t stop; instead, it jumps to the catch block.

The `try...catch` statement is comprised of a `try` block and either a `catch` block, a `finally` block, or both. The code in the `try` block is executed first, and if it throws an exception, the code in the `catch` block will be executed. The code in the `finally` block will always be executed before control flow exits the entire construct.

The `try` statement always starts with a `try` block. Then, a `catch` block or a `finally` block must be present. It's also possible to have both `catch` and `finally` blocks. This gives us three forms for the try statement:

- `try ... catch`
- `try ... finally`
- `try ... catch ... finally`

The syntax of `try ... catch ... finally` is:

```js
try {
  Statements1;
} catch (Exp) {
  Statements2;
} finally {
  Statements3;
}
```

- `Statements1`, `Statements2` and `Statements3` are the statements to be executed.

- `Exp` is an optional identifier or pattern to hold the caught exception for the associated `catch` block. If the `catch` block does not use the exception's value, you can omit the `Exp` and its surrounding parentheses.

**Let's take a look at the `throw` statement and then examine our example.**

### 5. Throw Statemens:

The `throw` statement throws a user-defined exception. Execution of the current function will stop (the statements after `throw` won't be executed), and control will be passed to the first `catch` block in the call stack. If no `catch` block exists among caller functions, the program will terminate.

The syntax of `throw` is:

```js
throw expression;
```

**Example:**

```js
function divide(x, y) {
  try {
    if (y === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return x / y;
  } catch (error) {
    console.error("Error occurred:", error.message);
    return null;
  }
}

let result1 = divide(20, 5);
console.log("Result 1:", result1); // Result 1: 4

let result2 = divide(14, 0);
console.log("Result 2:", result2); // Error occurred: Division by zero is not allowed, Result 2: null
```

[Go Top](#control-flow)
