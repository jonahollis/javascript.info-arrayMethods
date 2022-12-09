/* 
// TASK 1 - Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples: 
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

P.S. Hint: use split to split the string into an array, transform it and join back.

let camelize = function (a){
    //split
    let arr = a.split('-')
    //transform
    let arrCap = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    //join
    let arrJoin = arrCap.join("")
    console.log(arr)
    console.log(arrCap)
    console.log(arrJoin)
}

camelize("background-color");

---------------------------------------------------------

// TASK 2 - Filter range
importance: 4
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

let arr = [5, 3, 8, 1];

My Code

let filterRange = function(arr, a, b){
    return arr.filter(x => x >= a && x <= b)
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered)

---------------------------------------------------------

// TASK 3 - Filter range "in place"

Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.

For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]

let arr = [5, 3, 8, 1];

let filterRangeInPlace = function (arr, a, b){

    for (let i = 0; i < arr.length; i++){
        let val = arr[i]

        if(val < a || val > b){
            arr.splice(i, 1)
            i--
    }

    }
}

filterRangeInPlace(arr, 1, 4)

alert( arr )

---------------------------------------------------------

// TASK 4 - Sort in decreasing order
importance: 4
let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

arr.sort((num1,num2) => num2 - num1)
arr.reverse()

console.log( arr ); // 8, 5, 2, 1, -10

---------------------------------------------------------

// TASK 5 - Copy and sort array
importance: 5
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

let arr = ["HTML", "JavaScript", "CSS"];

let copySorted = function (arr){
    //copy arr
    let sortedArr = arr.map((x) => x)

    //sort arr
    sortedArr = sortedArr.sort()
    return sortedArr
}

let sorted = copySorted(arr)

alert( sorted )
alert( arr )

---------------------------------------------------------

// Task 6 -Create an extendable calculator
importance: 5
Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

Usage example:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
No parentheses or complex expressions in this task.
The numbers and the operator are delimited with exactly one space.
There may be error handling if you’d like to add it.




function Calculator(){
    this.calculate = function(str){
        let sum = str.split(' ')
        sum = sum.join('')
        return eval(sum)
    }
    this.addMethod = function(name,func){
        this.methods[name] = func;
    }
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") );

>>>>> official solution <<<<<<

function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
}

---------------------------------------------------------


  

// Task 7 - Map to names
importance: 5
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

For instance:


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

// your code here

let names = users.map(item => item.name)

alert( names ); // John, Pete, Mary

---------------------------------------------------------

//Task 8 - Map to objects
importance: 5
You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

For instance:


let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id

}))


// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//  { fullName: "Pete Hunt", id: 2 },
//  { fullName: "Mary Key", id: 3 }
//]


alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith

---------------------------------------------------------

// Task 9 - Sort users by age
importance: 5
Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

For instance:


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

// your code here

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

---------------------------------------------------------

// Task 10 - Shuffle an array
importance: 3
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:

// your code here
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

---------------------------------------------------------

// Task 11 - Get average age
importance: 4
Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.

For instance:

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

---------------------------------------------------------

// Task 12 - Filter unique array members

importance: 4
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

---------------------------------------------------------

// Task 13 - Create keyed object from array
importance: 4
Let’s say we received an array of users in the form {id:..., name:..., age:... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

For example:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}

Such function is really handy when working with server data.

In this task we assume that id is unique. There may be no two array items with the same id.

Please use array .reduce method in the solution.

*/