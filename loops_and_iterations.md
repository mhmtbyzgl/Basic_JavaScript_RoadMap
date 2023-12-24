# Loops and Iterations

## Table of Content

- [What are loops?](#what-are-loops)
- [For Statement](#for-statement)
- [Do ... While Statement](#do--while-statement)
- [While Statement](#while-statement)
- [Break Statement](#break-statement)
- [Labeled Statement](#labeled-statement)
- [Continue Statement](#continue-statement)
- [For ... In Statement](#for--in-statement)
- [For ... Of Statement](#for--of-statement)

## What are loops?

JavaScript for loops are basic constructs used to iterate over a set of values or elements, performing repetitive tasks quickly and easily until a given condition is met.

There are many different kinds of loops, but they all essentially do the same thing. They repeat an action some number of times.

==**NOTE:** It's possible that number could be zero!==

## For Statement

A `for` loop repeats until a specified condition evaluates to false.

When a `for` loop executes, the following occurs:

1. The initializing expression initialization, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.
2. The condition expression is evaluated. If the value of condition is true, the loop statements execute. Otherwise, the for loop terminates. (If the condition expression is omitted entirely, the condition is assumed to be true.)
3. The statement executes. To execute multiple statements, use a block statement ({ }) to group those statements.
4. If present, the update expression afterthought is executed.
5. Control returns to Step 2.

The syntax of the `for` statement;

```js
for (initialization; condition; afterthought) statement;
```

**Example:**

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

- `let i = 0` Initialization; declares a variable `i` and sets it to 0.
- `i < 5` Condition; loop continues as long as `i` is less than 5.
- `i++` Increment; increases `i` by 1 in each iteration.

## Do ... While Statement

The `do...while` statement repeats until a specified condition evaluates to false.

`statement` is always executed once before the condition is checked. To execute multiple statements, use a block statement (`{ }`) to group those statements.

If condition is `true`, the statement executes again. At the end of every execution, the condition is checked. When the condition is `false`, execution stops, and control passes to the statement following `do...while`.

The syntax of the `do ... while` statement;

```js
do statement;
while (condition);
```

**Example:**

In the following example, the `do` loop iterates at least once and reiterates until `i` is no longer less than `10`.

```js
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 10);
```

## While Statement

A `while` statement executes its statements as long as a specified condition evaluates to `true`.

If the `condition` becomes `false`, `statement` within the loop stops executing and control passes to the statement following the loop.

The condition test occurs _before_ `statement` in the loop is executed. If the condition returns `true`, `statement` is executed and the `condition` is tested again. If the condition returns `false`, execution stops, and control is passed to the statement following `while`.

To execute multiple statements, use a block statement (`{ }`) to group those statements.

The syntax of the `while` statement;

```js
while (condition) statement;
```

**Example:**

The following `while` loop iterates as long as n is less than `5`.

```js
let n = 0;
let x = 0;
while (n < 5) {
  n++;
  x += n;
}
```

With each iteration, the loop increments `n` and adds that value to `x`. Therefore, `x` and `n` take on the following values:

- First pass: `n = 1` and `x = 1`.
- Second pass: `n = 2` and `x = 3`.
- Third pass: `n = 3` and `x = 6`.

After completing the third pass, the condition `n < 5` is no longer `true`, so the loop terminates.

## Break Statement

The `break` statement in JavaScript is used to terminate the execution of a loop, switch, or labeled block statement. It allows you to prematurely exit the loop or switch statement based on a condition without waiting for the loop's normal exit condition to be met.

Break can also be used with labeled statements to exit a specific outer loop when working with nested loops. We will do this in labeled statement.

The syntax of the break statement;

```js
break;
break label;
```

**Example:**

```js
for (let i = 0; i < 6; i++) {
  if (i === 4) {
    break; // This breaks the loop when i equals 4
  }
  console.log(i);
}
```

The loop runs from `i = 0` to i = 5. However, when `i` becomes 4, the `break` statement is executed, and the loop terminates immediately.

## Labeled Statement

The `label` statement is used to label a block of code, primarily used in conjunction with `break` or `continue` statements to control the flow of loops (such as `for`, `while`, or `do-while` loops).

The syntax of the `labeled` statement;

```js
label: statement;
```

```js
labelName: for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 2 && j === 1) {
      break labelName;
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
```

In this example, the `labelName` label is applied to the outer `for` loop. When the condition `i === 2 && j === 1` is met, `break labelName;` is executed, causing the code to break out of the labeled loop entirely.

## Continue Statement

- The `continue` statement is used to skip the current iteration of a loop and proceed to the next iteration. When encountered within a loop, continue immediately stops the current iteration and moves to the next iteration, ignoring the remaining code within the loop block for that specific iteration.

- The `continue` statement can be used to restart a `while`, `do-while`, `for`, or `label` statement.

- When you use `continue` without a label, it terminates the current iteration of the innermost enclosing `while`, `do-while`, or `for` statement and continues execution of the loop with the next iteration. In contrast to the `break` statement, `continue` does not terminate the execution of the loop entirely. In a `while` loop, it jumps back to the condition. In a `for` loop, it jumps to the `increment-expression`.

- When you use `continue` with a label, it applies to the looping statement identified with that label.

The syntax of the continue statement;

```js
continue;
continue label;
```

**Examples:**

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skips iteration when i equals 2
  }
  console.log(i); // (0, 1, 3, 4)
}
```

In this loop, when `i` is equal to `2`, the `continue` statement is triggered. It skips the `console.log(i);` statement and proceeds directly to the next iteration, continuing with `i = 3` until the loop condition is met.

---

A statement labeled `controlxandy` contains a statement labeled `controly`. If `continue` is encountered, the program terminates the current iteration of `controly` and begins the next iteration. Each time `continue` is encountered, `controly` reiterates until its condition returns `false`. When `false` is returned, the remainder of the `controlxandy` statement is completed, and `controlxandy` reiterates until its condition returns `false`. When `false` is returned, the program continues at the statement following `controlxandy`.

```js
let x = 0;
let y = 10;
controlxandy: while (x < 4) {
  console.log(x);
  x += 1;
  controly: while (y > 4) {
    console.log(y);
    y -= 1;
    if (y % 2 === 0) {
      continue controly;
    }
    console.log(y, "is odd.");
  }
  console.log("x =", x);
  console.log("y =", y);
}
//Output
0
10
9 is odd.
9
8
7 is odd.
7
6
5 is odd.
5
x = 1
y = 4
1
x = 2
y = 4
2
x = 3
y = 4
3
x = 4
y = 4
```

## For ... In Statement

The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements.

The syntax of the `for ... in` statement;

```js
for (variable in object) statement;
```

**Examples:**

```js
function personInfo(obj, objName) {
  let result = "";
  for (const i in obj) {
    result += `${objName}.${i} = ${obj[i]}<br>`;
  }
  result += "<hr>";
  return result;
}
```

For an object `person` with properties age and gender, result would be:

```js
person.age = 25;
person.gender = "Male/Female";
```

## For ... Of Statement

The `for...of` statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

The syntax of the `for ... of` statement;

```js
for (variable of object) statement;
```

**Examples:**

The following example shows the difference between a `for...of` loop and a `for...in` loop.

```js
const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log("i =", i);
}

for (const j of arr) {
  console.log("j =", j);
}

// Output:
// i = 0
// i = 1
// i = 2
// i = foo
// j = 3
// j = 5
// j = 7
```

Firstly, the `for...in` loop iterates through the indexes of the `arr` array as well as through properties like `arr.foo`. Therefore, `i` will contain not only the numerical indices of the array but also properties like `foo`. It's used to print these indices and properties to the console.

The second loop is a `for...of` loop. This loop specifically iterates over the elements of the array, disregarding array properties like `arr.foo`. Therefore, `j` is used to print only the elements of the array to the console.

In conclusion, the `for...in` loop traverses through all properties of the array (both elements and extra properties), while the `for...of` loop solely focuses on the elements of the array.

[Go Top](#loops-and-iterations)
