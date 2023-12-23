# Data Structures

## Table of Content

- [What is a data structure?](#what-is-a-data-structure)
- [Arrays](#arrays)
- [Objects](#objects)
- [Stacks](#stacks)
- [Queues](#queues)
- [Recursion](#recursion)
<!-- - Linked lists
  - Singly linked lists
  - Doubly linked lists
- Trees
  - Binary trees
  - Heaps
- Graphs
  - Undirected and directed graphs
  - Weighted and unweighted graphs
  - How to represent graphs
- Roundup -->

## What is a data structure?

In JavaScript, data structures are used to organize and manage data efficiently. They help in storing, accessing, and manipulating data. JavaScript provides several built-in data structures.

## Arrays

Arrays as we have seen in data types, ordered collections of data stored using numeric indices. They can hold different data types and are mutable, allowing easy addition and removal of elements.

**Examples:**

```js
const myArray = [1, 2, 3, 4, 5, 6];
console.log(myArray[3]); // It returns '4'
myArray[3] = 0;
console.log(myArray[3]); // It returns '0'
```

In arrays, the length property of an array returns the number of elements in that array. It represents the size or the number of items present in the array and the length property is dynamic, meaning it automatically updates when you add or remove elements from the array.

```js
const myArray = [1, 2, 3, 4, 5, 6];
console.log(myArray.length); // It returns '6'
```

## Objects

In JavaScript, an object is a fundamental data type that allows you to store key-value pairs. It's a versatile data structure used to represent real-world entities or abstractions. Objects are used for organizing and manipulating data through properties and methods.

**Exapmles:**

```js
let person = {
  name: "Jane",
  surname: "DOE"
  age: 30,
  email: "alice@example.com",
};
```

In this example:

- person is the object.
- name, age, and email are keys of the object.
- 'Alice', 30, and 'alice@example.com' are the values associated with each property.

We can access object properties using dot notation or bracket notation:

```js
console.log(person.name); // Output: 'Alice'
// or
console.log(person["age"]); // Output: 30
```

JavaScript objects can also contain methods, which are functions associated with the object.

==**NOTE:** We will discuss the use of the keyword "this" later on. For now, just know that this usage should be like this.==

**Example:**

```js
let person = {
  name: "Jane",
  surname: "DOE"
  age: 30,
  email: "alice@example.com",
  displayInfo: function(){
    return `${this.name} ${this.surname}, ${this.age} years old. E-mail address is ${this.email}`;  }
};

console.log(person.displayInfo()); // Jane DOE, 30 years old. E-mail address is alice@example.com

person.city = "New York"; // Adding a new key
person.age = 35; // Modifying an existing key
delete person.email; // Deleting a key
console.log(person); // [age: 35, city: "New York", displayInfo()..., name: "Jane", surname: "DOE"]
```

## Stacks

### What is a Stack?

A stack is a linear data structure in computer science that follows the Last-In-First-Out (LIFO) principle. It operates on elements in a sequential order where the last element added to the stack is the first one to be removed.

- Collection of items
- Add to top of stack ( `push` )
- Remove from top of stack ( `pop` )
- Last-In-First-Out (LIFO)

_push:_ Adds an element to the top of the stack.
_pop:_ Removes the element from the top of the stack.

### What is a Stack useful for?

- Tracking a history of steps
- Browser History
- Backtracking Algorithms

**Examples:**

```js
const Stack = [];
Stack.push(5); // [5]
Stack.push(10); // [5, 10]
Stack.push(15); // [5, 10, 15]
console.log(Stack); //  [5, 10, 15]

Stack.pop(); // It will remove "15" from Stack
console.log(Stack); // [5, 10]

Stack.pop(); // It will remove "10" from Stack
console.log(Stack); // [5]
```

## Queues

### What is a Queues?

Queues are another fundamental data structure in computer science that follows the First-In-First-Out (FIFO) principle. They represent a collection of elements where the first element added to the queue is the first one to be removed.

- Collection of items
- Add to top of queue ( `enqueue` )
- Remove from top of queue ( `dequeue` )
- First-In-First-Out (FIFO)

_push:_ Adds an element to the end of the queue.
_shift:_ Removes the element from the front of the queue.

### What is a Queue useful for?

- "First come, first serve" order
- Tracking requests for a limited resource
- Graph Algorithms

**Examples:**

```js
const queue = [];
queue.push(5); // [5]
queue.push(10); // [5, 10]
queue.push(15); // [5, 10, 15]
console.log(queue); //  [5, 10, 15]

queue.shift(); // It will remove "5" from queue
console.log(queue); //  [10, 15]

queue.shift(); // It will remove "10" from queue
console.log(queue); // [15]
```

## Recursion

Recursion is a programming technique where a function calls itself to solve a problem by breaking it down into smaller, similar subproblems. Essentially, it's a process where a function solves a problem by reducing it into smaller instances of the same problem until it reaches a base case, which is a situation where the problem can be solved directly without further recursion.

### Why use recursion?

- It break down down large problems into small chunks.
- It is a fundamental used in more advanced algorithms.

### When to use recursion?

- For problems that contain smaller instances of the same problem.

### Anatomy of Recursion

- **Base Case:** This is the terminating condition that stops the recursive calls. It defines the smallest problem that can be solved without further recursion. Without a base case, the recursive function would continue calling itself indefinitely, resulting in what's known as a stack overflow or infinite recursion.

- **Recursive Case:** This is where the function calls itself with modified arguments to solve a smaller instance of the same problem. Each recursive call should bring the problem closer to the base case.

**Examples:**

```
factorial(5) = 5 * 4 * 3 * 2 * 1
factorial(4) = 4 * 3 * 2 * 1
factorial(3) = 3 * 2 * 1
factorial(2) = 2 * 1
factorial(1) = 1

or we can show that like this:

factorial(5) = 5 * factorial(4)
factorial(4) = 4 * factorial(3)
factorial(3) = 3 * factorial(2)
factorial(2) = 2 * factorial(1)
factorial(1) = 1
```

In this examples `factorial(1)` our **base case** because we use it for solve other factorials problems.

==**NOTE:** We will discuss the use of the if condition later on.==

```js
const factorial = (n) => {
  if (n === 1) return 1;

  return n * factorial(n - 1);
};

console.log(factorial(1)); // It returns 1
console.log(factorial(2)); // It returns 2
console.log(factorial(3)); // It returns 6
console.log(factorial(4)); // It returns 24
console.log(factorial(5)); // It returns 120
```

Recursion is a powerful concept used to solve problems that exhibit repetitive structures and can lead to elegant and concise solutions. However, it requires careful handling of base cases and understanding of the call stack, as excessive recursion can lead to performance issues or stack overflow errors.
