# Table Of Content

- [Variables](#variables)
  - [Tips for Naming Variables](#tips-for-naming-variables)
- [Scopes](#scopes)
  - [Global Scope](#1-global-scope)
  - [Function Scope](#2-function-scope)
  - [Block Scope](#3-block-scope)
  - [Local Scope](#4-local-scope)

## Variables

- To declare variables, we use one of the `var`, `let`, or `const` keywords.

### Tips for Naming Variables:

- Cannot contain spaces.

- Must begin with a letter, an underscore (\_) or a dollar sign ($).

- Can only contain letters, numbers, underscores, or dollar signs.

- Are case-sensitive.

- Certain words may not be used as variable names, because they have other meanings within JavaScript. Check out this complete list of the reserved words.

  ### !!! ------------------------------- !!! ------------------------------- !!!

- **Don’t use names that are too short.** Simple one-letter names or names that don’t make sense are not a good option when naming variables.
- **Use more than one word to name your variable.** This will ensure your variable name is precise.
- **When using more than one word in your variable names, always put the adjective to the left.** For example, this is correct: var smallChar.
- **Pick a style for names with more than one word, and stick to it.** The two most common ways to join words to create a name are camelCase and using an underscore (\_). JavaScript is flexible — either method works.
  ### !!! ------------------------------- !!! ------------------------------- !!!

## Scopes

- In JavaScript, scope refers to the visibility of a variable or how it can be used after it is declared.
- The three types of Scope are Global Scope, Function Scope, and Block Scope.

### 1. Global Scope:

Variables declared outside any function or curly braces ’{}’ have Global Scope, and can be accessed from anywhere within the same Javascript code. `var`, `let` and `const` all provide this Scope.

**Examples:**

```js
let pcName = "Apple";
// code here CAN use pcName

function myFunction() {
  // code here CAN also use pcName
}
```

### 2. Function Scope:

Variables declared within a function can only be used within that same function. Outside that function, they are undefined. `var`, `let` and `const` all provide this Scope.

**Examples:**

```js
function myFunction() {
  var pcName = "Apple"; // Function Scope
}
```

```js
function myFunction() {
  let pcName = "Apple"; // Function Scope
}
```

```js
function myFunction() {
  const pcName = "Apple"; // Function Scope
}
```

### 3. Block Scope:

A block is any part of JavaScript code bounded by ’{}‘. Variables declared within a block can not be accessed outside that block. This Scope is only provided by the `let` and `const` keywords. If you declare a variable within a block using the `var` keyword, it will NOT have Block Scope.

**Examples:**

```js
{
  let x = 2;
}
// x can NOT be used here
```

- Variables declared with the `var` keyword can NOT have block scope.

  ```js
  {
    var x = 2;
  }
  // x CAN be used here
  ```

### 4. Local Scope:

Local variables are only recognized inside their functions, variables with the same name can be used in different functions. Local variables are created when a function starts, and deleted when the function is completed. `var`, `let` and `const` all provide this Scope.

**Examples:**

```js
// pcName can NOT be used here

function myPC() {
  let pcName = "Apple";
  // pcName CAN be used here
}

// pcName can NOT be used here
```

[Go Top](#table-of-content)
