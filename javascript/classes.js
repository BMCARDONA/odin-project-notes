// Helpful links: 
// https://javascript.info/class
// https://www.youtube.com/watch?v=wfMtDGfHWpA


// user = object literal
let user = {
  name: "John",
  surname: "Smith",
  // getter
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  // setter
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};
// set fullName is executed with the given value.
user.fullName = "Alice Cooper";
alert(user.name); // Alice
alert(user.surname); // Cooper


// "class" syntax:
class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}

// Class example:
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}
// Usage:
let user = new User("John");
user.sayHi();

// Note: There are NO commas between class methods


// rewriting class User in pure functions
// 1. Create constructor function
function User(name) {
  this.name = name;
}
// a function prototype has "constructor" property by default,
// so we don't need to create it

// 2. Add the method to prototype
User.prototype.sayHi = function() {
  alert(this.name);
};

// Usage:
let user = new User("John");
user.sayHi();


// Summary
// The basic class syntax looks like this:
class MyClass {
  prop = value; // property

  constructor(...) { // constructor
    // ...
  }

  method(...) {} // method

  get something(...) {} // getter method
  set something(...) {} // setter method

  [Symbol.iterator]() {} // method with computed name (symbol here)
  // ...
}
// MyClass is technically a function (the one that we provide as constructor), while methods, getters and setters are written to MyClass.prototype.

// An important difference between function declarations and class declarations is that while functions can be called in code that appears before they are defined, classes must be defined before they can be constructed.


class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100


// The static keyword defines a static method or property for a class. Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance;    // undefined
p2.displayName; // undefined
p2.distance;    // undefined

console.log(Point.displayName);      // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755



// Public field declarations
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}


// Private field declarations
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}