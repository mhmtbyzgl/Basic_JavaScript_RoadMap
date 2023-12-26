# `this` Keyword

## Table of Content

- [What is `this`?](#what-is-this)
- [How Do We Use `this`?](#how-do-we-use-this)
- [Types of Use](#types-of-use)
  - [`this` in a Method](#1-this-in-a-method)
  - [`this` Alone](#2-this-alone)
  - [`this` In a Function (Default)](#3-this-in-a-function-default)
  - [`this` In a Function (Strict)](#4-this-in-a-function-strict)
  - [`this` In Event Handlers](#5-this-in-event-handlers)
  - [Object Method Binding](#6-object-method-binding)
  - [Explicit Function Binding](#7-explicit-function-binding)
  - [Function Borrowing](#8-function-borrowing)
- [`this` Precedence](#this-precedence)

## What is `this`?

In JavaScript, the `this` keyword is a little different compared to other languages. It refers to an object, but it depends on how or where it is being invoked. It also has some differences between strict mode and non-strict mode.

## How Do We Use `this`?

- In an object method, `this` refers to the object
- Alone, `this` refers to the global object
- In a function, `this` refers to the global object
- In a function, in strict mode, `this` is undefined
- In an event, `this` refers to the element that received the event
- Methods like call(), apply(), and bind() can refer `this` to any object

_**NOTE:**_ `this` is not a variable. It is a keyword. You cannot change the value of `this`.

## Types of Use

### 1. `this` in a Method:

When used in an object method, this refers to the object.

**Example:**

```js
const person = {
  firstName: "Mahmut",
  lastName: "BEYAZGÜL",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName()); // Mahmut BEYAZGÜL
```

`this` refers to the `person` object. Because the `fullName` method is a method of the `person` object.

### 2. `this` Alone:

When used alone, `this` refers to the global object. Because `this` is running in the global scope. In a browser window the global object is [object Window].

**Example:**

```js
let x = this;

console.log(x); // Window http://.....
```

In strict mode, when used alone, this also refers to the global object.

**Example:**

```js
"use strict";
let x = this;

console.log(x); // Window http://.....
```

### 3. `this` In a Function (Default):

In a function, the global object is the default binding for `this`. In a browser window the global object is [object Window].

**Example:**

```js
function functionX() {
  return this;
}
console.log(functionX()); // Window http://.....
```

### 4. `this` In a Function (Strict):

JavaScript strict mode does not allow default binding. So, when used in a function, in strict mode, this is undefined.

**Example:**

```js
"use strict";
function functionX() {
  return this;
}
console.log(functionX()); // undefined
```

### 5. `this` In Event Handlers:

In HTML event handlers, `this` refers to the HTML element that received the event.

```html
<h1>The JavaScript `this` Keyword</h1>

<button onclick="this.style.display='none'">Click to Remove Me!</button>
```

When you click on the button, only that button becomes invisible.

### 6. Object Method Binding:

In these examples, `this` is the `person` object.

```js
const person = {
  firstName: "Mahmut",
  lastName: "BEYAZGÜL",
  age: 25,
  displayObject: function () {
    return this;
  },
};
console.log(person.displayObject()); // Object { firstName: "Mahmut", lastName: "BEYAZGÜL", age: 25, displayObject: displayObject() }
```

### 7. Explicit Function Binding:

The `call()` and `apply()` methods are predefined JavaScript methods. They can both be used to call an object method with another object as argument.

**Example:**

```js
const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "Mahmut",
  lastName: "BEYAZGÜL",
};

console.log(person.fullName.call(person1)); // Return "Mahmut BEYAZGÜL"
```

In this example, calls `person1.fullName` with `person2` as an argument, `this` refers to `person2`, even if `fullName` is a method of `person1`:

### 8. Function Borrowing:

With the `bind()` method, an object can borrow a method from another object. This example creates 2 objects (person and member). The member object borrows the `fullName` method from the `person` object.

**Example:**

```js
const person = {
  firstName: "Ahmet",
  lastName: "YILMAZ",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Mahmut",
  lastName: "BEYAZGÜL",
};

let fullName = person.fullName.bind(member);
console.log(fullName()); // Mahmut BEYAZGÜL
```

## `this` Precedence:

To determine which object `this` refers to; use the following precedence of order.

- bind()
- apply()
- call()
- Object method
- Global scope

[Go Top](#this-keyword)
