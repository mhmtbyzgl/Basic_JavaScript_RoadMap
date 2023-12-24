# Equality Comparisons

## Table of Content

- [Comparison Operators](#comparison-operators)
- [Logical Operators](#logical-operators)
- [Conditional (Ternary) Operator ( ? : )](#conditional-ternary-operator)
- [The Nullish Coalescing Operator (??)](#the-nullish-coalescing-operator)
- [The Optional Chaining Operator (?.)](#the-optional-chaining-operator)

## Comparison Operators

Comparison operators are used in logical statements to determine equality or difference between variables or values.

Given that `x = 10`, the table below explains the comparison operators:

| Name of Operator  | Operator |           Descriptions            |             Usage              |      Returns      |
| :---------------: | :------: | :-------------------------------: | :----------------------------: | :---------------: |
|     Equality      |    ==    |             equal to              |  x == 15, x == 10, x == "10"   | false, true, true |
|    Inequality     |    !=    |           not equal to            |            x != 15             |       true        |
|  Strict equality  |   ===    |    equal value and equal type     |      x === 10, x === "10"      |    true, false    |
| Strict inequality |   !==    | not equal value or not equal type | x !== 10, x !== "10", x !== 15 | false, true, true |
|      Greater      |    >     |           greater than            |         x > 5, x > 15          |    true, false    |
|       Less        |    <     |             less than             |         x < 15, x < 5          |    true, false    |
| Greater or equal  |    >=    |     greater than or equal to      |        x >= 5, x >= 15         |    true, false    |
|   Less or equal   |    <=    |       less than or equal to       |        x <= 15, x <= 5         |    true, false    |

## Logical Operators

Logical operators are used to determine the logic between variables or values.

Given that `x = 5` and `y = 10`, the table below explains the logical operators:

| Name of Operator | Operator | Descriptions |                   Usage                    |      Returns       |
| :--------------: | :------: | :----------: | :----------------------------------------: | :----------------: |
|       AND        |    &&    | logical and  | (x<7 && y>9), (x<3 && y>9), (x==7 && y>15) | true, false, false |
|        OR        |   \|\|   |  logical or  |      (x==7 \|\| y>9), (x<3 \|\| y<9)       |    true, false     |
|       NOT        |    !     | logical not  |            !(x == y), x<y, x>y             | true, true, false  |

## Conditional (Ternary) Operator

JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

```js
let x = age < 18 ? "Young" : "Old";
```

If the variable age is a value below 18, the value of the variable x will be "Young", otherwise the value of x will be "Old".

## The Nullish Coalescing Operator

The `??` operator returns the first argument if it is not nullish (null or undefined). Otherwise it returns the second argument.

```js
let name1 = null;
let name2 = "Emre";
let name = name1 ?? name2; // It returns "Emre"

--------------------------------------------------

let name1 = "Mahmut";
let name2 = "Emre";
let name = name1 ?? name2; // It returns "Mahmut"
```

## The Optional Chaining Operator

The `?.` operator returns undefined if an object is undefined or null instead of throwing an error.

```js
const person = {
  name: "Mahmut",
  dog: {
    name: "Chucky",
    color: "Black",
  },
  cat: {
    name: "Cindy",
  },
};

console.log(person.dog?.color); // It returns "Black"
console.log(person.cat?.color); // Undefined
```

[Go Top](#equality-comparisons)
